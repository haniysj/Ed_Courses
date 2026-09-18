import { exerciseDataSchemas, type ExerciseData } from "./schema";
import type { FlExerciseType } from "./constants";

/**
 * Answer keys never leave the server: the client receives PublicExercise
 * (options/items only) and submits an answer to /api/free-lessons/[slug]/check,
 * which grades it with gradeExercise().
 */

export type PublicExercise = {
  id: string;
  type: FlExerciseType;
  prompt: string;
  context: string | null;
  points: number;
  // type-specific, answer-free payload
  options?: string[];
  blanks?: number;
  wordBank?: string[];
  hint?: string;
  items?: string[];
  unit?: "word" | "sentence" | "paragraph";
  lefts?: { text: string; visual?: string }[];
  rights?: string[];
  segments?: string[];
};

export type GradeResult = { correct: boolean; correctText: string };

function hash(str: string): number {
  let h = 1779033703 ^ str.length;
  for (let i = 0; i < str.length; i++) {
    h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  return h >>> 0;
}

function mulberry32(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Deterministic shuffle so the order is stable across refreshes; never returns the input order. */
export function stableShuffle<T>(items: T[], seedKey: string): T[] {
  if (items.length < 2) return [...items];
  const rand = mulberry32(hash(seedKey));
  const out = [...items];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  if (out.every((v, i) => v === items[i])) out.push(out.shift() as T);
  return out;
}

export function normalise(value: string, opts?: { caseSensitive?: boolean; strictPunctuation?: boolean }): string {
  let v = value.replace(/[‘’]/g, "'").replace(/[“”]/g, '"').replace(/\s+/g, " ").trim();
  if (!opts?.caseSensitive) v = v.toLowerCase();
  if (!opts?.strictPunctuation) v = v.replace(/[.!?,;:]+$/g, "").trim();
  return v;
}

export function parseExerciseData<T extends FlExerciseType>(type: T, raw: string): ExerciseData[T] | null {
  try {
    const parsed = exerciseDataSchemas[type].safeParse(JSON.parse(raw));
    return parsed.success ? (parsed.data as ExerciseData[T]) : null;
  } catch {
    return null;
  }
}

export function toPublicExercise(ex: {
  id: string;
  type: string;
  prompt: string;
  context: string | null;
  points: number;
  data: string;
}): PublicExercise | null {
  const type = ex.type as FlExerciseType;
  const base = { id: ex.id, type, prompt: ex.prompt, context: ex.context, points: ex.points };
  switch (type) {
    case "MULTIPLE_CHOICE":
    case "MULTIPLE_SELECT": {
      const d = parseExerciseData(type, ex.data);
      return d ? { ...base, options: d.options } : null;
    }
    case "TRUE_FALSE":
      return parseExerciseData(type, ex.data) ? base : null;
    case "FILL_BLANK": {
      const d = parseExerciseData(type, ex.data);
      return d ? { ...base, blanks: d.answers.length, wordBank: d.wordBank ? stableShuffle(d.wordBank, ex.id) : undefined } : null;
    }
    case "SHORT_ANSWER": {
      const d = parseExerciseData(type, ex.data);
      return d ? { ...base, hint: d.hint } : null;
    }
    case "ORDERING": {
      const d = parseExerciseData(type, ex.data);
      return d ? { ...base, items: stableShuffle(d.items, ex.id), unit: d.unit } : null;
    }
    case "MATCHING": {
      const d = parseExerciseData(type, ex.data);
      if (!d) return null;
      const rights = Array.from(new Set(d.pairs.map((p) => p.right)));
      return {
        ...base,
        lefts: d.pairs.map((p) => ({ text: p.left, visual: p.visual })),
        rights: stableShuffle(rights, ex.id),
      };
    }
    case "IDENTIFY_MISTAKE": {
      const d = parseExerciseData(type, ex.data);
      return d ? { ...base, segments: d.segments } : null;
    }
    default:
      return null;
  }
}

export function gradeExercise(type: string, rawData: string, answer: unknown): GradeResult | null {
  switch (type as FlExerciseType) {
    case "MULTIPLE_CHOICE": {
      const d = parseExerciseData("MULTIPLE_CHOICE", rawData);
      if (!d) return null;
      return { correct: answer === d.correct, correctText: d.options[d.correct] };
    }
    case "MULTIPLE_SELECT": {
      const d = parseExerciseData("MULTIPLE_SELECT", rawData);
      if (!d) return null;
      const given = Array.isArray(answer) ? (answer.filter((n) => Number.isInteger(n)) as number[]) : [];
      const want = [...d.correct].sort((a, b) => a - b);
      const got = Array.from(new Set(given)).sort((a, b) => a - b);
      return {
        correct: want.length === got.length && want.every((v, i) => v === got[i]),
        correctText: want.map((i) => d.options[i]).join("; "),
      };
    }
    case "TRUE_FALSE": {
      const d = parseExerciseData("TRUE_FALSE", rawData);
      if (!d) return null;
      return { correct: answer === d.correct, correctText: d.correct ? "True" : "False" };
    }
    case "FILL_BLANK": {
      const d = parseExerciseData("FILL_BLANK", rawData);
      if (!d) return null;
      const given = Array.isArray(answer) ? answer.map((a) => (typeof a === "string" ? a : "")) : [];
      const correct = d.answers.every((accepted, i) => {
        const g = normalise(given[i] ?? "");
        return g.length > 0 && accepted.some((a) => normalise(a) === g);
      });
      return { correct, correctText: d.answers.map((a) => a[0]).join(" / ") };
    }
    case "SHORT_ANSWER": {
      const d = parseExerciseData("SHORT_ANSWER", rawData);
      if (!d) return null;
      const opts = { caseSensitive: d.caseSensitive, strictPunctuation: d.strictPunctuation };
      const g = typeof answer === "string" ? normalise(answer, opts) : "";
      return { correct: g.length > 0 && d.accepted.some((a) => normalise(a, opts) === g), correctText: d.accepted[0] };
    }
    case "ORDERING": {
      const d = parseExerciseData("ORDERING", rawData);
      if (!d) return null;
      const given = Array.isArray(answer) ? answer.map((a) => (typeof a === "string" ? a : "")) : [];
      const correct = given.length === d.items.length && d.items.every((item, i) => item === given[i]);
      return { correct, correctText: d.unit === "word" ? d.items.join(" ") : d.items.map((s, i) => `${i + 1}. ${s}`).join("  ") };
    }
    case "MATCHING": {
      const d = parseExerciseData("MATCHING", rawData);
      if (!d) return null;
      const given = Array.isArray(answer) ? answer.map((a) => (typeof a === "string" ? a : "")) : [];
      const correct = given.length === d.pairs.length && d.pairs.every((p, i) => p.right === given[i]);
      return { correct, correctText: d.pairs.map((p) => `${p.left} → ${p.right}`).join("; ") };
    }
    case "IDENTIFY_MISTAKE": {
      const d = parseExerciseData("IDENTIFY_MISTAKE", rawData);
      if (!d) return null;
      return {
        correct: answer === d.correct,
        correctText: d.fix ? `"${d.segments[d.correct]}" → ${d.fix}` : d.segments[d.correct],
      };
    }
    default:
      return null;
  }
}

/** Compact, human-readable form of an answer for the analytics table. */
export function answerToText(answer: unknown): string {
  try {
    const text = typeof answer === "string" ? answer : JSON.stringify(answer);
    return text.length > 200 ? text.slice(0, 200) : text;
  } catch {
    return "";
  }
}
