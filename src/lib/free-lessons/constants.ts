import type { CefrLevel, PlacementSkill } from "@/lib/enums";

export type Bi = { en: string; ar: string };

export const FL_LEVELS = [
  "BEGINNER",
  "ELEMENTARY",
  "PRE_INTERMEDIATE",
  "INTERMEDIATE",
  "UPPER_INTERMEDIATE",
  "ADVANCED",
] as const;
export type FlLevel = (typeof FL_LEVELS)[number];

export const FL_LEVEL_INFO: Record<
  FlLevel,
  { name: Bi; cefr: string; icon: string; description: Bi; readingNote: string }
> = {
  BEGINNER: {
    name: { en: "Beginner", ar: "مبتدئ" },
    cefr: "A1",
    icon: "🌱",
    description: {
      en: "Start from zero: simple sentences, everyday words and very short texts.",
      ar: "ابدأ من الصفر: جمل بسيطة وكلمات يومية ونصوص قصيرة جدًا.",
    },
    readingNote: "Very short texts, simple sentences, high-frequency words",
  },
  ELEMENTARY: {
    name: { en: "Elementary", ar: "أساسي" },
    cefr: "A1–A2",
    icon: "🌿",
    description: {
      en: "Talk about routines, the past and the world around you with growing confidence.",
      ar: "تحدّث عن روتينك اليومي والماضي ومن حولك بثقة متزايدة.",
    },
    readingNote: "Short paragraphs about everyday situations",
  },
  PRE_INTERMEDIATE: {
    name: { en: "Pre-Intermediate", ar: "ما قبل المتوسط" },
    cefr: "A2–B1",
    icon: "🌳",
    description: {
      en: "Describe experiences, compare things and write your first well-organised paragraphs.",
      ar: "صِف تجاربك وقارن بين الأشياء واكتب أولى فقراتك المنظّمة.",
    },
    readingNote: "Longer paragraphs, more varied vocabulary, basic inference",
  },
  INTERMEDIATE: {
    name: { en: "Intermediate", ar: "متوسط" },
    cefr: "B1",
    icon: "🚀",
    description: {
      en: "Handle conditionals, the passive and multi-paragraph reading on general topics.",
      ar: "أتقن الجمل الشرطية والمبني للمجهول وقراءة نصوص متعددة الفقرات.",
    },
    readingNote: "Multi-paragraph texts, main idea, detail and inference",
  },
  UPPER_INTERMEDIATE: {
    name: { en: "Upper-Intermediate", ar: "فوق المتوسط" },
    cefr: "B2",
    icon: "🎯",
    description: {
      en: "Report, argue and read between the lines in longer, more abstract texts.",
      ar: "انقل الكلام وناقش واقرأ ما بين السطور في نصوص أطول وأكثر تجريدًا.",
    },
    readingNote: "Longer abstract texts, writer's purpose, inference",
  },
  ADVANCED: {
    name: { en: "Advanced", ar: "متقدم" },
    cefr: "C1",
    icon: "🏆",
    description: {
      en: "Refine style, nuance and argument for academic and professional English.",
      ar: "صقل الأسلوب والدقة والحجة للإنجليزية الأكاديمية والمهنية.",
    },
    readingNote: "Complex texts, tone, implicit meaning, argument structure",
  },
};

export const FL_CATEGORIES = ["GRAMMAR", "VOCABULARY", "WRITING", "READING"] as const;
export type FlCategory = (typeof FL_CATEGORIES)[number];

export const FL_CATEGORY_INFO: Record<FlCategory, { name: Bi; icon: string; accent: string }> = {
  GRAMMAR: { name: { en: "Grammar", ar: "القواعد" }, icon: "🧩", accent: "text-indigo-700 bg-indigo-50 dark:bg-indigo-950 dark:text-indigo-300" },
  VOCABULARY: { name: { en: "Vocabulary", ar: "المفردات" }, icon: "🔤", accent: "text-emerald-700 bg-emerald-50 dark:bg-emerald-950 dark:text-emerald-300" },
  WRITING: { name: { en: "Writing", ar: "الكتابة" }, icon: "✍️", accent: "text-amber-700 bg-amber-50 dark:bg-amber-950 dark:text-amber-300" },
  READING: { name: { en: "Reading", ar: "القراءة" }, icon: "📖", accent: "text-rose-700 bg-rose-50 dark:bg-rose-950 dark:text-rose-300" },
};

export const FL_DIFFICULTIES = ["BASIC", "CORE", "CHALLENGING"] as const;
export type FlDifficulty = (typeof FL_DIFFICULTIES)[number];
export const FL_DIFFICULTY_LABELS: Record<FlDifficulty, Bi> = {
  BASIC: { en: "Basic", ar: "أساسي" },
  CORE: { en: "Core", ar: "متوسط" },
  CHALLENGING: { en: "Challenging", ar: "صعب" },
};

export const FL_STATUSES = ["DRAFT", "PUBLISHED", "UNPUBLISHED"] as const;
export type FlStatus = (typeof FL_STATUSES)[number];

export const FL_EXERCISE_TYPES = [
  "MULTIPLE_CHOICE",
  "MULTIPLE_SELECT",
  "TRUE_FALSE",
  "FILL_BLANK",
  "SHORT_ANSWER",
  "ORDERING",
  "MATCHING",
  "IDENTIFY_MISTAKE",
] as const;
export type FlExerciseType = (typeof FL_EXERCISE_TYPES)[number];

export const FL_EXERCISE_TYPE_LABELS: Record<FlExerciseType, string> = {
  MULTIPLE_CHOICE: "Multiple choice",
  MULTIPLE_SELECT: "Multiple select",
  TRUE_FALSE: "True / False",
  FILL_BLANK: "Fill in the blank(s)",
  SHORT_ANSWER: "Short answer / error correction",
  ORDERING: "Ordering (words, sentences, paragraph)",
  MATCHING: "Matching / classification",
  IDENTIFY_MISTAKE: "Identify the mistake",
};

/** Approximate CEFR bands used when a level has to be derived from a CEFR result. */
export const CEFR_TO_FL_LEVEL: Record<CefrLevel, FlLevel> = {
  PRE_A1: "BEGINNER",
  A1: "BEGINNER",
  A2: "ELEMENTARY",
  B1: "INTERMEDIATE",
  B2: "UPPER_INTERMEDIATE",
  C1: "ADVANCED",
};

/** Used the other way round -- e.g. to pick a paid course for a learner with no placement result. */
export const FL_LEVEL_TO_CEFR: Record<FlLevel, CefrLevel> = {
  BEGINNER: "A1",
  ELEMENTARY: "A2",
  PRE_INTERMEDIATE: "A2",
  INTERMEDIATE: "B1",
  UPPER_INTERMEDIATE: "B2",
  ADVANCED: "C1",
};

/**
 * Placement-test skill -> lesson category. The placement test has no
 * Writing or Listening section, so:
 *   - WRITING is inferred from GRAMMAR + overall level
 *   - LISTENING weakness is answered with vocabulary lessons tagged
 *     "listening-support" (pronunciation, collocations, everyday phrases)
 */
export const SKILL_TO_CATEGORIES: Record<PlacementSkill, FlCategory[]> = {
  GRAMMAR: ["GRAMMAR"],
  VOCABULARY: ["VOCABULARY"],
  READING: ["READING"],
  LISTENING: ["VOCABULARY"],
};

export function isFlLevel(v: string | null | undefined): v is FlLevel {
  return !!v && (FL_LEVELS as readonly string[]).includes(v);
}
export function isFlCategory(v: string | null | undefined): v is FlCategory {
  return !!v && (FL_CATEGORIES as readonly string[]).includes(v);
}

export function levelIndex(l: string): number {
  return (FL_LEVELS as readonly string[]).indexOf(l);
}

export function parseJsonArray(value: string | null | undefined): string[] {
  if (!value) return [];
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed.filter((x): x is string => typeof x === "string") : [];
  } catch {
    return [];
  }
}

/** URL form of a level: PRE_INTERMEDIATE <-> pre-intermediate */
export function levelSlug(level: string): string {
  return level.toLowerCase().replace(/_/g, "-");
}
export function levelFromSlug(slug: string): FlLevel | null {
  const candidate = slug.toUpperCase().replace(/-/g, "_");
  return isFlLevel(candidate) ? candidate : null;
}
