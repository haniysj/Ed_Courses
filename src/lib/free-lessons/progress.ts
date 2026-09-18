import { prisma } from "@/lib/prisma";

export type ResultEntry = { answer: unknown; correct: boolean; attempts: number };
export type Results = Record<string, ResultEntry>;

export function parseResults(raw: string | null | undefined): Results {
  if (!raw) return {};
  try {
    const v = JSON.parse(raw);
    return v && typeof v === "object" && !Array.isArray(v) ? (v as Results) : {};
  } catch {
    return {};
  }
}

type LessonRules = { requireAllAnswered: boolean; minScorePercent: number };
type ExerciseRef = { id: string; points: number };

/**
 * Completion rule (configurable per lesson by the admin):
 *   1. the learner has read the lesson content, AND
 *   2. every exercise has been attempted (if requireAllAnswered), AND
 *   3. the score reaches minScorePercent.
 * Score = points from currently-correct exercises / total points.
 */
export function evaluateProgress(
  lesson: LessonRules,
  exercises: ExerciseRef[],
  results: Results,
  contentRead: boolean
) {
  const total = exercises.reduce((s, e) => s + e.points, 0);
  const earned = exercises.reduce((s, e) => s + (results[e.id]?.correct ? e.points : 0), 0);
  const answered = exercises.filter((e) => (results[e.id]?.attempts ?? 0) > 0).length;
  const scorePercent = total === 0 ? 100 : Math.round((earned / total) * 100);

  const allAnswered = answered === exercises.length;
  const scoreOk = scorePercent >= lesson.minScorePercent;
  const complete = contentRead && (!lesson.requireAllAnswered || allAnswered) && scoreOk;

  let blocker: "read" | "answer" | "score" | null = null;
  if (!contentRead) blocker = "read";
  else if (lesson.requireAllAnswered && !allAnswered) blocker = "answer";
  else if (!scoreOk) blocker = "score";

  return { complete, scorePercent, answered, total: exercises.length, blocker };
}

/** Upserts a progress row on first open, bumping the view count on later opens. */
export async function touchLessonView(userId: string, lessonId: string) {
  return prisma.freeLessonProgress.upsert({
    where: { userId_lessonId: { userId, lessonId } },
    create: { userId, lessonId },
    update: { viewCount: { increment: 1 } },
  });
}
