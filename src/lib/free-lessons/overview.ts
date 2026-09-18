import { prisma } from "@/lib/prisma";
import {
  FL_CATEGORIES,
  FL_LEVELS,
  isFlLevel,
  type FlCategory,
  type FlLevel,
} from "./constants";
import {
  getLatestPlacementProfile,
  loadLessonSummaries,
  recommendCourse,
  recommendLessons,
  type LessonSummary,
  type PlacementProfile,
} from "./recommend";

export type LessonState = "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED";

export type LearnerOverview = {
  selectedLevel: FlLevel | null;
  lessons: LessonSummary[];
  states: Record<string, LessonState>; // by lesson id
  levelStats: Record<FlLevel, { total: number; completed: number; inProgress: number }>;
  categoryStats: Record<FlCategory, { total: number; completed: number }>; // for the selected level
  recentlyCompleted: (LessonSummary & { completedAt: Date })[];
  inProgress: LessonSummary[];
  weakAreas: { category: FlCategory; accuracy: number }[];
  profile: PlacementProfile | null;
  recommendations: ReturnType<typeof recommendLessons>;
  course: Awaited<ReturnType<typeof recommendCourse>>;
  continueLesson: LessonSummary | null;
};

export async function getLearnerOverview(userId: string, recLimit = 4): Promise<LearnerOverview> {
  const [user, lessons, progress, profile, attempts] = await Promise.all([
    prisma.user.findUnique({ where: { id: userId }, select: { freeLessonLevel: true } }),
    loadLessonSummaries(),
    prisma.freeLessonProgress.findMany({ where: { userId }, orderBy: { updatedAt: "desc" } }),
    getLatestPlacementProfile(userId),
    prisma.freeLessonAttempt.findMany({ where: { userId }, select: { lessonId: true, correct: true } }),
  ]);

  const selectedLevel = isFlLevel(user?.freeLessonLevel) ? user!.freeLessonLevel as FlLevel : null;
  const byId = new Map(lessons.map((l) => [l.id, l]));
  const states: Record<string, LessonState> = {};
  const completed = new Set<string>();
  const recentlyCompleted: LearnerOverview["recentlyCompleted"] = [];
  const inProgress: LessonSummary[] = [];

  for (const p of progress) {
    const lesson = byId.get(p.lessonId);
    if (!lesson) continue; // unpublished / deleted
    if (p.status === "COMPLETED") {
      states[lesson.id] = "COMPLETED";
      completed.add(lesson.slug);
      if (p.completedAt) recentlyCompleted.push({ ...lesson, completedAt: p.completedAt });
    } else {
      states[lesson.id] = "IN_PROGRESS";
      inProgress.push(lesson);
    }
  }
  recentlyCompleted.sort((a, b) => b.completedAt.getTime() - a.completedAt.getTime());

  const levelStats = Object.fromEntries(
    FL_LEVELS.map((l) => [l, { total: 0, completed: 0, inProgress: 0 }])
  ) as LearnerOverview["levelStats"];
  const categoryStats = Object.fromEntries(FL_CATEGORIES.map((c) => [c, { total: 0, completed: 0 }])) as LearnerOverview["categoryStats"];
  for (const l of lessons) {
    const s = levelStats[l.level as FlLevel];
    if (!s) continue;
    s.total++;
    if (states[l.id] === "COMPLETED") s.completed++;
    if (states[l.id] === "IN_PROGRESS") s.inProgress++;
    if (l.level === selectedLevel) {
      const c = categoryStats[l.category as FlCategory];
      if (c) {
        c.total++;
        if (states[l.id] === "COMPLETED") c.completed++;
      }
    }
  }

  // Weak areas = lowest first-answer accuracy per category (needs a few attempts to mean anything)
  const perCat = new Map<FlCategory, { right: number; all: number }>();
  for (const a of attempts) {
    const l = byId.get(a.lessonId);
    if (!l) continue;
    const cat = l.category as FlCategory;
    const e = perCat.get(cat) ?? { right: 0, all: 0 };
    e.all++;
    if (a.correct) e.right++;
    perCat.set(cat, e);
  }
  const weakAreas = Array.from(perCat.entries())
    .filter(([, v]) => v.all >= 5)
    .map(([category, v]) => ({ category, accuracy: Math.round((v.right / v.all) * 100) }))
    .filter((w) => w.accuracy < 75)
    .sort((a, b) => a.accuracy - b.accuracy);

  const recommendations = recommendLessons({ lessons, completed, profile, fallbackLevel: selectedLevel, limit: recLimit });
  const course = await recommendCourse({ profile, fallbackLevel: selectedLevel });

  let continueLesson: LessonSummary | null = null;
  const lastInProgress = progress.find((p) => p.status === "IN_PROGRESS" && byId.has(p.lessonId));
  if (lastInProgress) continueLesson = byId.get(lastInProgress.lessonId) ?? null;
  else if (selectedLevel) {
    continueLesson =
      lessons
        .filter((l) => l.level === selectedLevel && states[l.id] !== "COMPLETED")
        .sort((a, b) => a.order - b.order)[0] ?? null;
  }

  return { selectedLevel, lessons, states, levelStats, categoryStats, recentlyCompleted, inProgress, weakAreas, profile, recommendations, course, continueLesson };
}
