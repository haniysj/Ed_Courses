// Small authoring DSL used by the seed files in this folder. Every lesson,
// explanation, example, passage and exercise in these files is ORIGINAL
// content written for this platform. Coursebooks (Headway 5th ed., Cutting
// Edge 3rd ed.) were used only as curriculum references -- level ranges,
// grammar sequencing and skill progression -- never as a source of text.

export type SeedLevel = "BEGINNER" | "ELEMENTARY" | "PRE_INTERMEDIATE" | "INTERMEDIATE" | "UPPER_INTERMEDIATE" | "ADVANCED";
export type SeedCategory = "GRAMMAR" | "VOCABULARY" | "WRITING" | "READING";

export type Section = Record<string, unknown> & { type: string };
export type SeedExercise = {
  type: string;
  prompt: string;
  context?: string;
  data: Record<string, unknown>;
  explanation: string;
  points?: number;
};

export type SeedLesson = {
  slug: string;
  level: SeedLevel;
  category: SeedCategory;
  title: string;
  topic: string;
  difficulty: "BASIC" | "CORE" | "CHALLENGING";
  minutes: number;
  objective: string;
  tags: string[];
  prereq?: string[];
  ref?: { book: string; level: string; area: string; topic: string };
  minScore?: number;
  sections: Section[];
  exercises: SeedExercise[];
};

// ---- lesson sections ----------------------------------------------------
export const text = (body: string, title?: string): Section => ({ type: "text", title, body });
export const list = (title: string, items: string[]): Section => ({ type: "list", title, items });
export const structure = (title: string, formula: string, note?: string): Section => ({ type: "structure", title, formula, note });
export const tip = (body: string, title?: string): Section => ({ type: "tip", title, body });
export const passage = (title: string, body: string, caption?: string): Section => ({ type: "passage", title, text: body, caption });
export const annotated = (title: string, parts: [string, string][]): Section => ({
  type: "annotated",
  title,
  parts: parts.map(([label, t]) => ({ label, text: t })),
});
export const compare = (title: string, rows: [string, string, string?][]): Section => ({
  type: "compare",
  title,
  rows: rows.map(([wrong, right, why]) => ({ wrong, right, why })),
});
/** groups: { "Affirmative": ["I play football.", "She plays tennis. | note"] } */
export const examples = (title: string, groups: Record<string, string[]>): Section => ({
  type: "examples",
  title,
  groups: Object.entries(groups).map(([label, items]) => ({
    label: label === "" ? undefined : label,
    items: items.map((line) => {
      const [t, note] = line.split(" | ");
      return { text: t, note };
    }),
  })),
});

export type VocabInput = {
  word: string;
  pos: string;
  meaning: string;
  ar?: string;
  pron?: string;
  ex: string;
  col?: string[];
  right?: string;
  wrong?: string;
  note?: string;
  visual?: string;
};
export const vocab = (words: VocabInput[], title?: string): Section => ({
  type: "vocab",
  title,
  words: words.map((w) => ({
    word: w.word,
    pos: w.pos,
    meaning: w.meaning,
    meaningAr: w.ar,
    pronunciation: w.pron,
    example: w.ex,
    collocations: w.col ?? [],
    correct: w.right,
    incorrect: w.wrong,
    note: w.note,
    visual: w.visual,
  })),
});

// ---- exercises ----------------------------------------------------------
export const mc = (prompt: string, options: string[], correct: number, explanation: string, context?: string): SeedExercise => ({
  type: "MULTIPLE_CHOICE", prompt, context, data: { options, correct }, explanation,
});
export const ms = (prompt: string, options: string[], correct: number[], explanation: string, context?: string): SeedExercise => ({
  type: "MULTIPLE_SELECT", prompt, context, data: { options, correct }, explanation,
});
export const tf = (prompt: string, correct: boolean, explanation: string, context?: string): SeedExercise => ({
  type: "TRUE_FALSE", prompt, context, data: { correct }, explanation,
});
/** Put ___ in the prompt for each blank. answers[i] is a string or a list of accepted strings. */
export const fill = (prompt: string, answers: (string | string[])[], explanation: string, wordBank?: string[]): SeedExercise => ({
  type: "FILL_BLANK", prompt, data: { answers: answers.map((a) => (Array.isArray(a) ? a : [a])), wordBank }, explanation,
});
export const sa = (
  prompt: string,
  accepted: string[],
  explanation: string,
  opts?: { hint?: string; strict?: boolean; context?: string }
): SeedExercise => ({
  type: "SHORT_ANSWER",
  prompt,
  context: opts?.context,
  data: { accepted, hint: opts?.hint, caseSensitive: opts?.strict, strictPunctuation: opts?.strict },
  explanation,
});
/** items are given in the CORRECT order; the engine shuffles them. */
export const order = (prompt: string, items: string[], unit: "word" | "sentence" | "paragraph", explanation: string): SeedExercise => ({
  type: "ORDERING", prompt, data: { items, unit }, explanation,
});
export const match = (prompt: string, pairs: [string, string, string?][], explanation: string): SeedExercise => ({
  type: "MATCHING",
  prompt,
  data: { pairs: pairs.map(([left, right, visual]) => ({ left, right, visual })) },
  explanation,
});
export const mist = (prompt: string, segments: string[], correct: number, fix: string, explanation: string): SeedExercise => ({
  type: "IDENTIFY_MISTAKE", prompt, data: { segments, correct, fix }, explanation,
});

// ---- references ---------------------------------------------------------
export const HW = "Headway 5th Edition";
export const CE = "Cutting Edge 3rd Edition";
