import { prisma } from "@/lib/prisma";
import type { PlacementQuestion } from "@prisma/client";
import { CEFR_ORDER, type CefrLevel } from "@/lib/enums";
import { selectQuestions, shuffleOptions, middleLevel, nextTargetLevel, buildStagePlan } from "@/lib/placement/adaptive";
import type { PresentedQuestion, PublicQuestion, StoredAnswer } from "@/lib/placement/types";
import { scoreAttempt, type ScoredAnswer } from "@/lib/placement/scoring";
import { getSettings } from "@/lib/settings";

async function loadPool(rangeMin: CefrLevel, rangeMax: CefrLevel) {
  const minIdx = CEFR_ORDER.indexOf(rangeMin);
  const maxIdx = CEFR_ORDER.indexOf(rangeMax);
  const levelsInRange = CEFR_ORDER.slice(minIdx, maxIdx + 1);

  return prisma.placementQuestion.findMany({
    where: { active: true, cefrLevel: { in: levelsInRange } },
  });
}

function toPublicQuestion(q: PlacementQuestion, optionOrder: number[]): PublicQuestion {
  const originalOptions: string[] = JSON.parse(q.options);
  return {
    id: q.id,
    skill: q.skill as PublicQuestion["skill"],
    topic: q.topic,
    prompt: q.prompt,
    options: optionOrder.map((i) => originalOptions[i]),
    audioText: q.audioText,
    imageUrl: q.imageUrl,
  };
}

function toPresented(questions: PlacementQuestion[]): { presented: PresentedQuestion[]; firstOptionOrders: number[][] } {
  const optionOrders = questions.map((q) => shuffleOptions(JSON.parse(q.options)).optionOrder);
  return {
    presented: questions.map((q, i) => ({ id: q.id, optionOrder: optionOrders[i] })),
    firstOptionOrders: optionOrders,
  };
}

/**
 * Advances an attempt's currentIndex atomically: the WHERE clause only
 * matches if currentIndex is still what this request originally read, so
 * if two submissions for the same question race each other (e.g. a rapid
 * double-click), only the first one to commit succeeds -- the second gets
 * count 0 and is rejected instead of silently corrupting the attempt.
 */
async function claimAdvance(
  attemptId: string,
  expectedCurrentIndex: number,
  data: { answers: string; currentIndex: number; selectedQuestionIds?: string }
): Promise<boolean> {
  const result = await prisma.placementAttempt.updateMany({
    where: { id: attemptId, currentIndex: expectedCurrentIndex },
    data,
  });
  return result.count === 1;
}

export async function buildFirstBatch(versionId: string) {
  const version = await prisma.placementVersion.findUniqueOrThrow({ where: { id: versionId } });
  const pool = await loadPool(version.cefrRangeMin as CefrLevel, version.cefrRangeMax as CefrLevel);
  const [stage1Count] = buildStagePlan(version.questionCount);
  const target = middleLevel(version.cefrRangeMin as CefrLevel, version.cefrRangeMax as CefrLevel);

  const chosen = selectQuestions({ pool, targetLevel: target, count: stage1Count, excludeIds: new Set() });
  const { presented } = toPresented(chosen);

  return {
    version,
    presented,
    firstQuestion: chosen.length > 0 ? toPublicQuestion(chosen[0], presented[0].optionOrder) : null,
    totalPlanned: version.questionCount,
  };
}

/**
 * Handles one answer submission: records it, and either returns the next
 * question (advancing to the next adaptive stage if needed) or finalizes
 * scoring if the attempt's full question plan has been exhausted.
 */
export async function submitAnswerAndAdvance(params: {
  attemptId: string;
  questionId: string;
  selectedIndex: number;
  timeMs: number;
}) {
  const attempt = await prisma.placementAttempt.findUniqueOrThrow({
    where: { id: params.attemptId },
    include: { version: true },
  });
  if (attempt.status !== "IN_PROGRESS") {
    throw new Error("This attempt is no longer in progress.");
  }

  const presented: PresentedQuestion[] = JSON.parse(attempt.selectedQuestionIds);
  const expected = presented[attempt.currentIndex];
  if (!expected || expected.id !== params.questionId) {
    throw new Error("Unexpected question order.");
  }

  const question = await prisma.placementQuestion.findUniqueOrThrow({ where: { id: params.questionId } });
  const originalSelectedIndex = expected.optionOrder[params.selectedIndex];
  const correct = originalSelectedIndex === question.correctIndex;

  const answers: Record<string, StoredAnswer> = JSON.parse(attempt.answers);
  answers[params.questionId] = { selectedIndex: params.selectedIndex, correct, timeMs: params.timeMs };

  const newIndex = attempt.currentIndex + 1;
  const [s1, s2] = buildStagePlan(attempt.version.questionCount);
  const boundary1 = s1;
  const boundary2 = s1 + s2;

  const atStage2Boundary = newIndex === boundary1 && presented.length <= boundary1 && newIndex < attempt.version.questionCount;
  const atStage3Boundary = newIndex === boundary2 && presented.length <= boundary2 && newIndex < attempt.version.questionCount;

  if (atStage2Boundary || atStage3Boundary) {
    const stageStart = atStage2Boundary ? 0 : boundary1;
    const stageAnswers = presented
      .slice(stageStart, newIndex)
      .map((p) => answers[p.id])
      .filter(Boolean);
    const accuracy = stageAnswers.length > 0 ? stageAnswers.filter((a) => a.correct).length / stageAnswers.length : 0.5;

    const currentTarget = question.cefrLevel as CefrLevel;
    const target = nextTargetLevel(
      currentTarget,
      accuracy,
      attempt.version.cefrRangeMin as CefrLevel,
      attempt.version.cefrRangeMax as CefrLevel
    );

    const pool = await loadPool(attempt.version.cefrRangeMin as CefrLevel, attempt.version.cefrRangeMax as CefrLevel);
    const nextCount = atStage2Boundary ? s2 : attempt.version.questionCount - boundary2;
    const excludeIds = new Set(presented.map((p) => p.id));
    const chosen = selectQuestions({ pool, targetLevel: target, count: nextCount, excludeIds });

    if (chosen.length === 0) {
      const claimed = await claimAdvance(attempt.id, attempt.currentIndex, { answers: JSON.stringify(answers), currentIndex: newIndex });
      if (!claimed) throw new Error("This answer was already submitted.");
      return finishAttempt(attempt.id);
    }

    const { presented: newPresented } = toPresented(chosen);
    const claimed = await claimAdvance(attempt.id, attempt.currentIndex, {
      answers: JSON.stringify(answers),
      currentIndex: newIndex,
      selectedQuestionIds: JSON.stringify([...presented, ...newPresented]),
    });
    if (!claimed) throw new Error("This answer was already submitted.");

    return {
      done: false,
      nextQuestion: toPublicQuestion(chosen[0], newPresented[0].optionOrder),
      progress: { current: newIndex + 1, total: attempt.version.questionCount },
    };
  }

  const claimed = await claimAdvance(attempt.id, attempt.currentIndex, { answers: JSON.stringify(answers), currentIndex: newIndex });
  if (!claimed) throw new Error("This answer was already submitted.");

  if (newIndex >= presented.length) {
    return finishAttempt(attempt.id);
  }

  const nextPresented = presented[newIndex];
  const nextQuestion = await prisma.placementQuestion.findUniqueOrThrow({ where: { id: nextPresented.id } });
  return {
    done: false,
    nextQuestion: toPublicQuestion(nextQuestion, nextPresented.optionOrder),
    progress: { current: newIndex + 1, total: attempt.version.questionCount },
  };
}

export async function finishAttempt(attemptId: string) {
  const attempt = await prisma.placementAttempt.findUniqueOrThrow({ where: { id: attemptId } });
  if (attempt.status === "COMPLETED") {
    return { done: true, resultReference: attempt.resultReference! };
  }

  const presented: PresentedQuestion[] = JSON.parse(attempt.selectedQuestionIds);
  const answers: Record<string, StoredAnswer> = JSON.parse(attempt.answers);

  const questions = await prisma.placementQuestion.findMany({
    where: { id: { in: presented.map((p) => p.id) } },
  });
  const questionById = new Map(questions.map((q) => [q.id, q]));

  const scored: ScoredAnswer[] = Object.entries(answers)
    .map(([qId, a]) => {
      const q = questionById.get(qId);
      if (!q) return null;
      return { cefrLevel: q.cefrLevel as CefrLevel, skill: q.skill as ScoredAnswer["skill"], correct: a.correct };
    })
    .filter((x): x is ScoredAnswer => x !== null);

  const result = scoreAttempt(scored);

  const year = new Date().getFullYear();
  const countThisYear = await prisma.placementAttempt.count({
    where: { status: "COMPLETED", resultReference: { startsWith: `EPR-${year}-` } },
  });
  const resultReference = `EPR-${year}-${String(countThisYear + 1).padStart(6, "0")}`;

  const settings = await getSettings();

  await prisma.placementAttempt.update({
    where: { id: attemptId },
    data: {
      status: "COMPLETED",
      completedAt: new Date(),
      scoreOverall: result.scoreOverall,
      cefrOverall: result.cefrOverall,
      cefrOverallLabel: result.cefrOverallLabel,
      skillScores: JSON.stringify(result.skillScores),
      headwayRecommendation: result.cefrOverallLabel,
      resultReference,
    },
  });

  return { done: true, resultReference, retakeCooldownDays: settings.placementRetakeCooldownDays };
}
