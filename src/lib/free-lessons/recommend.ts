import { prisma } from "@/lib/prisma";
import { CEFR_LABELS, CEFR_ORDER, type CefrLevel, type PlacementSkill } from "@/lib/enums";
import { getRecommendedCourses } from "@/lib/placement/recommendations";
import {
  CEFR_TO_FL_LEVEL,
  FL_CATEGORIES,
  FL_CATEGORY_INFO,
  FL_LEVEL_INFO,
  FL_LEVEL_TO_CEFR,
  FL_LEVELS,
  levelIndex,
  parseJsonArray,
  type Bi,
  type FlCategory,
  type FlLevel,
} from "./constants";

/**
 * Recommendation pipeline (deliberately simple and explainable):
 *
 *   Placement result
 *     -> overall CEFR + per-skill CEFR (+ themes of wrongly-answered questions)
 *     -> for each lesson category, work out a START LEVEL and a WEAKNESS score
 *     -> pick the next uncompleted, prerequisite-satisfied lesson per category
 *        (preferring lessons whose tags match the themes the learner missed)
 *     -> order categories weakest-first
 *     -> attach a human-readable reason
 *     -> finally recommend an existing published paid course for the same CEFR
 */

export type PlacementProfile = {
  attemptId: string;
  overall: CefrLevel;
  skills: Record<PlacementSkill, CefrLevel | null>;
  /** normalised topic tags of questions the learner got wrong, e.g. "health" */
  missedThemes: string[];
};

export type LessonSummary = {
  id: string;
  slug: string;
  level: string;
  category: string;
  title: string;
  topic: string;
  order: number;
  difficulty: string;
  estimatedMinutes: number;
  tags: string[];
  prerequisites: string[];
};

export type Recommendation = { lesson: LessonSummary; reason: Bi };

const idx = (c: CefrLevel) => CEFR_ORDER.indexOf(c);

export function toTag(topic: string): string {
  return topic.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
}

export async function loadLessonSummaries(): Promise<LessonSummary[]> {
  const rows = await prisma.freeLesson.findMany({
    where: { status: "PUBLISHED" },
    select: {
      id: true, slug: true, level: true, category: true, title: true, topic: true, order: true,
      difficulty: true, estimatedMinutes: true, tags: true, prerequisites: true,
    },
    orderBy: [{ order: "asc" }, { title: "asc" }],
  });
  return rows.map((r) => ({ ...r, tags: parseJsonArray(r.tags), prerequisites: parseJsonArray(r.prerequisites) }));
}

type AttemptRow = {
  id: string;
  cefrOverall: string | null;
  skillScores: string | null;
  selectedQuestionIds: string;
  answers: string;
};

export async function buildPlacementProfile(attempt: AttemptRow): Promise<PlacementProfile | null> {
  if (!attempt.cefrOverall || !(CEFR_ORDER as string[]).includes(attempt.cefrOverall)) return null;
  const skills: Record<PlacementSkill, CefrLevel | null> = { GRAMMAR: null, VOCABULARY: null, READING: null, LISTENING: null };
  try {
    const raw = JSON.parse(attempt.skillScores ?? "{}") as Record<string, string | null>;
    (Object.keys(skills) as PlacementSkill[]).forEach((k) => {
      const v = raw[k] ?? raw[k.toLowerCase()];
      skills[k] = v && (CEFR_ORDER as string[]).includes(v) ? (v as CefrLevel) : null;
    });
  } catch {
    /* keep nulls */
  }

  const missedThemes: string[] = [];
  try {
    const answers = JSON.parse(attempt.answers || "{}") as Record<string, { correct?: boolean }>;
    const wrongIds = Object.entries(answers).filter(([, a]) => a && a.correct === false).map(([id]) => id);
    if (wrongIds.length > 0) {
      const qs = await prisma.placementQuestion.findMany({ where: { id: { in: wrongIds } }, select: { topic: true } });
      const counts = new Map<string, number>();
      qs.forEach((q) => counts.set(toTag(q.topic), (counts.get(toTag(q.topic)) ?? 0) + 1));
      // A theme counts as "missed" when the learner got it wrong at least once.
      missedThemes.push(...Array.from(counts.keys()));
    }
  } catch {
    /* no theme data */
  }

  return { attemptId: attempt.id, overall: attempt.cefrOverall as CefrLevel, skills, missedThemes };
}

export async function getLatestPlacementProfile(userId: string): Promise<PlacementProfile | null> {
  const attempt = await prisma.placementAttempt.findFirst({
    where: { userId, status: "COMPLETED" },
    orderBy: { completedAt: "desc" },
    select: { id: true, cefrOverall: true, skillScores: true, selectedQuestionIds: true, answers: true },
  });
  return attempt ? buildPlacementProfile(attempt) : null;
}

const CATEGORY_ORDER: FlCategory[] = ["GRAMMAR", "VOCABULARY", "READING", "WRITING"];

type CategoryPlan = { category: FlCategory; startLevel: FlLevel; cefr: CefrLevel; weakness: number; listening: boolean; skillLabel: string | null };

function planCategories(profile: PlacementProfile): CategoryPlan[] {
  const o = idx(profile.overall);
  const skillIdx = (s: PlacementSkill) => (profile.skills[s] ? idx(profile.skills[s] as CefrLevel) : o);
  const lowest = Math.min(skillIdx("GRAMMAR"), skillIdx("VOCABULARY"), skillIdx("READING"), skillIdx("LISTENING"));

  const cefrFor: Record<FlCategory, number> = {
    GRAMMAR: skillIdx("GRAMMAR"),
    // vocabulary lessons also carry the listening-support tag, so a listening gap weakens this too
    VOCABULARY: Math.min(skillIdx("VOCABULARY"), skillIdx("LISTENING")),
    READING: skillIdx("READING"),
    // writing isn't tested: infer from grammar and overall level
    WRITING: Math.min(skillIdx("GRAMMAR"), o),
  };

  return CATEGORY_ORDER.map((category) => {
    const cefr = CEFR_ORDER[cefrFor[category]];
    const gap = Math.max(0, o - cefrFor[category]);
    return {
      category,
      cefr,
      startLevel: CEFR_TO_FL_LEVEL[cefr],
      weakness: gap * 20 + (cefrFor[category] === lowest && gap > 0 ? 15 : 0) + (category === "WRITING" ? -1 : 0),
      listening: category === "VOCABULARY" && skillIdx("LISTENING") < o,
      skillLabel: null,
    };
  });
}

function prereqsMet(lesson: LessonSummary, done: Set<string>, all: Map<string, LessonSummary>, startLevel: FlLevel) {
  return lesson.prerequisites.every((slug) => {
    if (done.has(slug)) return true;
    const pre = all.get(slug);
    // unknown, unpublished, or comfortably below where placement put the learner: don't block
    return !pre || levelIndex(pre.level) < levelIndex(startLevel);
  });
}

export function recommendLessons(opts: {
  lessons: LessonSummary[];
  completed: Set<string>;
  profile: PlacementProfile | null;
  fallbackLevel: FlLevel | null;
  limit?: number;
}): Recommendation[] {
  const { lessons, completed, profile } = opts;
  const limit = opts.limit ?? 4;
  const bySlug = new Map(lessons.map((l) => [l.slug, l]));

  const plans: CategoryPlan[] = profile
    ? planCategories(profile)
    : CATEGORY_ORDER.map((category) => {
        const lvl = opts.fallbackLevel ?? "BEGINNER";
        return { category, startLevel: lvl, cefr: FL_LEVEL_TO_CEFR[lvl], weakness: 0, listening: false, skillLabel: null };
      });

  plans.sort((a, b) => b.weakness - a.weakness || CATEGORY_ORDER.indexOf(a.category) - CATEGORY_ORDER.indexOf(b.category));

  const picked: Recommendation[] = [];
  const usedIds = new Set<string>();

  const candidatesFor = (plan: CategoryPlan) => {
    const pool = lessons
      .filter(
        (l) =>
          l.category === plan.category &&
          !completed.has(l.slug) &&
          !usedIds.has(l.id) &&
          levelIndex(l.level) >= levelIndex(plan.startLevel) &&
          prereqsMet(l, completed, bySlug, plan.startLevel)
      )
      .sort((a, b) => levelIndex(a.level) - levelIndex(b.level) || a.order - b.order);
    if (pool.length === 0) return [];
    // stay on the lowest level that still has something to do
    const currentLevel = pool[0].level;
    const inLevel = pool.filter((l) => l.level === currentLevel);
    if (profile) {
      const themed = (l: LessonSummary) => l.tags.some((t) => profile.missedThemes.includes(t)) || (plan.listening && l.tags.includes("listening-support"));
      inLevel.sort((a, b) => Number(themed(b)) - Number(themed(a)) || a.order - b.order);
    }
    return inLevel;
  };

  const reasonFor = (plan: CategoryPlan, lesson: LessonSummary): Bi => {
    const cat = FL_CATEGORY_INFO[plan.category].name;
    const lvl = FL_LEVEL_INFO[lesson.level as FlLevel]?.name ?? { en: lesson.level, ar: lesson.level };
    if (!profile) {
      return {
        en: `Next step in your ${lvl.en} ${cat.en.toLowerCase()} path.`,
        ar: `الخطوة التالية في مسار ${cat.ar} لمستوى ${lvl.ar}.`,
      };
    }
    const cefrText = CEFR_LABELS[plan.cefr].en.split(" ")[0];
    const themeHit = lesson.tags.find((t) => profile.missedThemes.includes(t));
    const weak = plan.weakness >= 20;
    if (themeHit) {
      const theme = themeHit.replace(/-/g, " ");
      return {
        en: `You missed "${theme}" questions in your placement test, so this is a good place to practise.`,
        ar: `أخطأت في أسئلة عن «${theme}» في اختبار تحديد المستوى، لذا هذا الدرس مناسب للتدريب.`,
      };
    }
    if (plan.category === "WRITING") {
      return {
        en: `Writing isn't part of the placement test; we based this on your ${cefrText} grammar and overall level.`,
        ar: `الكتابة ليست جزءًا من اختبار تحديد المستوى؛ اخترنا هذا الدرس بناءً على مستوى قواعدك ${cefrText} ومستواك العام.`,
      };
    }
    if (plan.listening && lesson.tags.includes("listening-support")) {
      return {
        en: `Your listening result was below your overall level; pronunciation and everyday phrases help.`,
        ar: `نتيجة الاستماع لديك أقل من مستواك العام؛ النطق والعبارات اليومية تساعد في ذلك.`,
      };
    }
    return weak
      ? {
          en: `Your ${cat.en.toLowerCase()} is at ${cefrText}, below your overall level: this strengthens your foundation.`,
          ar: `مستواك في ${cat.ar} هو ${cefrText}، أقل من مستواك العام: هذا الدرس يقوّي أساسك.`,
        }
      : {
          en: `Matches your ${cefrText} ${cat.en.toLowerCase()} level and keeps your progress moving.`,
          ar: `يناسب مستواك ${cefrText} في ${cat.ar} ويدفع تقدمك إلى الأمام.`,
        };
  };

  // Pass 1: one lesson per category, weakest category first.
  for (const plan of plans) {
    if (picked.length >= limit) break;
    const c = candidatesFor(plan)[0];
    if (c) {
      picked.push({ lesson: c, reason: reasonFor(plan, c) });
      usedIds.add(c.id);
    }
  }
  // Pass 2: fill remaining slots with a second lesson, again weakest first.
  for (const plan of plans) {
    if (picked.length >= limit) break;
    const c = candidatesFor(plan)[0];
    if (c) {
      picked.push({ lesson: c, reason: reasonFor(plan, c) });
      usedIds.add(c.id);
    }
  }
  return picked;
}

// ---------------------------------------------------------------------
// Paid-course recommendation -- only ever returns courses that exist.
// ---------------------------------------------------------------------

export type CourseRecommendation = {
  course: { id: string; slug: string; title: string; durationHours: number; format: string };
  cefr: CefrLevel;
  weakest: FlCategory | null;
  reason: Bi;
};

export async function recommendCourse(input: {
  profile: PlacementProfile | null;
  fallbackLevel: FlLevel | null;
}): Promise<CourseRecommendation | null> {
  const { profile } = input;
  const cefr: CefrLevel = profile ? profile.overall : FL_LEVEL_TO_CEFR[input.fallbackLevel ?? "BEGINNER"];
  const courses = await getRecommendedCourses(cefr, 1);
  const course = courses[0];
  if (!course) return null;

  let weakest: FlCategory | null = null;
  if (profile) {
    const plans = planCategories(profile).filter((p) => p.weakness >= 20).sort((a, b) => b.weakness - a.weakness);
    weakest = plans[0]?.category ?? null;
  }
  const cefrText = CEFR_LABELS[cefr].en.split(" ")[0];
  const weakEn = weakest ? ` Your ${FL_CATEGORY_INFO[weakest].name.en.toLowerCase()} would benefit most from guided practice.` : "";
  const weakAr = weakest ? ` ستستفيد خاصة في ${FL_CATEGORY_INFO[weakest].name.ar} من التدريب الموجَّه.` : "";
  return {
    course: { id: course.id, slug: course.slug, title: course.title, durationHours: course.durationHours, format: course.format },
    cefr,
    weakest,
    reason: {
      en: `You are currently working at ${cefrText}. A live course with an instructor is a natural next step.${weakEn}`,
      ar: `مستواك الحالي ${cefrText}. الدورة المباشرة مع مدرّس هي خطوة تالية مناسبة.${weakAr}`,
    },
  };
}

export { FL_LEVELS, FL_CATEGORIES };
