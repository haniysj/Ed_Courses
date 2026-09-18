import { z } from "zod";
import { FL_CATEGORIES, FL_DIFFICULTIES, FL_EXERCISE_TYPES, FL_LEVELS, FL_STATUSES } from "./constants";

// ---------------------------------------------------------------------
// Lesson content (the LESSON panel)
// ---------------------------------------------------------------------

const str = z.string().trim();

export const vocabWordSchema = z.object({
  word: str.min(1),
  pos: str.min(1),
  meaning: str.min(1),
  meaningAr: str.optional(),
  pronunciation: str.optional(),
  example: str.min(1),
  collocations: z.array(str).default([]),
  correct: str.optional(),
  incorrect: str.optional(),
  note: str.optional(),
  visual: str.optional(), // emoji or short glyph used as visual support
  imageUrl: str.optional(),
});
export type VocabWord = z.infer<typeof vocabWordSchema>;

export const sectionSchema = z.discriminatedUnion("type", [
  z.object({ type: z.literal("text"), title: str.optional(), body: str.min(1) }),
  z.object({ type: z.literal("list"), title: str.min(1), items: z.array(str.min(1)).min(1) }),
  z.object({ type: z.literal("structure"), title: str.min(1), formula: str.min(1), note: str.optional() }),
  z.object({
    type: z.literal("examples"),
    title: str.min(1),
    groups: z
      .array(
        z.object({
          label: str.optional(),
          items: z.array(z.object({ text: str.min(1), note: str.optional() })).min(1),
        })
      )
      .min(1),
  }),
  z.object({ type: z.literal("vocab"), title: str.optional(), words: z.array(vocabWordSchema).min(1) }),
  z.object({ type: z.literal("passage"), title: str.min(1), text: str.min(1), caption: str.optional() }),
  z.object({
    type: z.literal("annotated"),
    title: str.min(1),
    parts: z.array(z.object({ label: str.min(1), text: str.min(1) })).min(1),
  }),
  z.object({
    type: z.literal("compare"),
    title: str.min(1),
    rows: z.array(z.object({ wrong: str.min(1), right: str.min(1), why: str.optional() })).min(1),
  }),
  z.object({ type: z.literal("tip"), title: str.optional(), body: str.min(1) }),
]);
export type Section = z.infer<typeof sectionSchema>;

export const lessonContentSchema = z.object({ sections: z.array(sectionSchema) });
export type LessonContent = z.infer<typeof lessonContentSchema>;

export function parseLessonContent(raw: string): LessonContent {
  try {
    const parsed = lessonContentSchema.safeParse(JSON.parse(raw));
    return parsed.success ? parsed.data : { sections: [] };
  } catch {
    return { sections: [] };
  }
}

// ---------------------------------------------------------------------
// Exercise data (the PRACTICE panel), one shape per exercise type
// ---------------------------------------------------------------------

const options = z.array(str.min(1)).min(2).max(8);

export const exerciseDataSchemas = {
  MULTIPLE_CHOICE: z.object({ options, correct: z.number().int().min(0) }),
  MULTIPLE_SELECT: z.object({ options, correct: z.array(z.number().int().min(0)).min(1) }),
  TRUE_FALSE: z.object({ correct: z.boolean() }),
  FILL_BLANK: z.object({
    answers: z.array(z.array(str.min(1)).min(1)).min(1), // one list of accepted answers per blank
    wordBank: z.array(str.min(1)).optional(),
  }),
  SHORT_ANSWER: z.object({
    accepted: z.array(str.min(1)).min(1),
    hint: str.optional(),
    caseSensitive: z.boolean().optional(),
    strictPunctuation: z.boolean().optional(),
  }),
  ORDERING: z.object({
    items: z.array(str.min(1)).min(2), // stored in the CORRECT order
    unit: z.enum(["word", "sentence", "paragraph"]).default("sentence"),
  }),
  MATCHING: z.object({
    pairs: z.array(z.object({ left: str.min(1), right: str.min(1), visual: str.optional() })).min(2),
  }),
  IDENTIFY_MISTAKE: z.object({
    segments: z.array(str.min(1)).min(2),
    correct: z.number().int().min(0),
    fix: str.optional(),
  }),
} as const;

export type ExerciseData = {
  MULTIPLE_CHOICE: z.infer<typeof exerciseDataSchemas.MULTIPLE_CHOICE>;
  MULTIPLE_SELECT: z.infer<typeof exerciseDataSchemas.MULTIPLE_SELECT>;
  TRUE_FALSE: z.infer<typeof exerciseDataSchemas.TRUE_FALSE>;
  FILL_BLANK: z.infer<typeof exerciseDataSchemas.FILL_BLANK>;
  SHORT_ANSWER: z.infer<typeof exerciseDataSchemas.SHORT_ANSWER>;
  ORDERING: z.infer<typeof exerciseDataSchemas.ORDERING>;
  MATCHING: z.infer<typeof exerciseDataSchemas.MATCHING>;
  IDENTIFY_MISTAKE: z.infer<typeof exerciseDataSchemas.IDENTIFY_MISTAKE>;
};

/** Returns an error message if the data doesn't match the type's shape, otherwise null. */
export function validateExerciseData(type: string, data: unknown): string | null {
  if (!(FL_EXERCISE_TYPES as readonly string[]).includes(type)) return `Unknown exercise type "${type}"`;
  const schema = exerciseDataSchemas[type as keyof typeof exerciseDataSchemas];
  const parsed = schema.safeParse(data);
  if (!parsed.success) return parsed.error.issues[0]?.message ?? "Invalid exercise data";

  const d = parsed.data as Record<string, unknown>;
  if (type === "MULTIPLE_CHOICE") {
    const x = d as ExerciseData["MULTIPLE_CHOICE"];
    if (x.correct >= x.options.length) return "The correct option index is out of range";
  }
  if (type === "MULTIPLE_SELECT") {
    const x = d as ExerciseData["MULTIPLE_SELECT"];
    if (x.correct.some((i) => i >= x.options.length)) return "A correct option index is out of range";
  }
  if (type === "IDENTIFY_MISTAKE") {
    const x = d as ExerciseData["IDENTIFY_MISTAKE"];
    if (x.correct >= x.segments.length) return "The mistake index is out of range";
  }
  return null;
}

// ---------------------------------------------------------------------
// Admin payloads
// ---------------------------------------------------------------------

export const exerciseInputSchema = z.object({
  id: z.string().optional(),
  type: z.enum(FL_EXERCISE_TYPES),
  prompt: str.min(1, "Every exercise needs a prompt"),
  context: str.optional().nullable(),
  data: z.unknown(),
  explanation: str.optional().nullable(),
  points: z.number().int().min(1).max(10).default(1),
});
export type ExerciseInput = z.infer<typeof exerciseInputSchema>;

export const lessonInputSchema = z.object({
  title: str.min(2, "Title is required"),
  slug: str
    .min(2)
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug may only contain lowercase letters, numbers and hyphens")
    .optional(),
  level: z.enum(FL_LEVELS),
  category: z.enum(FL_CATEGORIES),
  topic: str.min(1, "Topic is required"),
  difficulty: z.enum(FL_DIFFICULTIES),
  estimatedMinutes: z.number().int().min(1).max(180),
  objective: str.min(3, "A learning objective is required"),
  imageUrl: str.optional().nullable(),
  status: z.enum(FL_STATUSES),
  tags: z.array(str.min(1)).default([]),
  prerequisites: z.array(str.min(1)).default([]),
  requireAllAnswered: z.boolean(),
  minScorePercent: z.number().int().min(0).max(100),
  allowRetry: z.boolean(),
  refBook: str.optional().nullable(),
  refLevel: str.optional().nullable(),
  refArea: str.optional().nullable(),
  refTopic: str.optional().nullable(),
  content: lessonContentSchema,
  exercises: z.array(exerciseInputSchema).default([]),
});
export type LessonInput = z.infer<typeof lessonInputSchema>;
