import { CEFR_ORDER, PLACEMENT_SKILLS, type CefrLevel, type PlacementSkill } from "@/lib/enums";
import { bandPositionForScore, type BandPosition } from "@/lib/placement/headway";

export type ScoredAnswer = {
  cefrLevel: CefrLevel;
  skill: PlacementSkill;
  correct: boolean;
};

export type ScoringResult = {
  scoreOverall: number;
  cefrOverall: CefrLevel;
  bandPosition: BandPosition;
  /** Composite, re-translatable label: "<CEFR>:<lower|mid|upper>" */
  cefrOverallLabel: string;
  skillScores: Record<PlacementSkill, CefrLevel | null>;
};

/**
 * Converts a set of answered questions into a CEFR level estimate.
 *
 * Method: each correct answer is evidence the learner operates AT the
 * question's tagged level; each incorrect answer is evidence they operate
 * one level BELOW it. Averaging this across all answered questions and
 * rounding to the nearest whole CEFR level gives a simple, transparent,
 * and honestly-scoped estimate -- this is an indicative placement measure,
 * not a psychometric (IRT/Rasch) ability estimate.
 */
function weightedLevelIndex(answers: ScoredAnswer[]): number | null {
  if (answers.length === 0) return null;
  const total = answers.reduce((sum, a) => {
    const idx = CEFR_ORDER.indexOf(a.cefrLevel);
    const evidence = a.correct ? idx : Math.max(0, idx - 1);
    return sum + evidence;
  }, 0);
  return Math.round(total / answers.length);
}

function modeLevel(levels: CefrLevel[]): CefrLevel | null {
  if (levels.length === 0) return null;
  const counts = new Map<CefrLevel, number>();
  for (const l of levels) counts.set(l, (counts.get(l) ?? 0) + 1);
  let best: CefrLevel | null = null;
  let bestCount = 0;
  let tie = false;
  for (const [level, count] of counts) {
    if (count > bestCount) {
      best = level;
      bestCount = count;
      tie = false;
    } else if (count === bestCount) {
      tie = true;
    }
  }
  return tie ? null : best;
}

export function scoreAttempt(answers: ScoredAnswer[]): ScoringResult {
  const total = answers.length;
  const correctCount = answers.filter((a) => a.correct).length;
  const scoreOverall = total > 0 ? Math.round((correctCount / total) * 100) : 0;

  const skillScores: Record<PlacementSkill, CefrLevel | null> = {
    GRAMMAR: null,
    VOCABULARY: null,
    READING: null,
    LISTENING: null,
  };

  for (const skill of PLACEMENT_SKILLS) {
    const skillAnswers = answers.filter((a) => a.skill === skill);
    if (skillAnswers.length >= 2) {
      const idx = weightedLevelIndex(skillAnswers);
      skillScores[skill] = idx !== null ? CEFR_ORDER[Math.max(0, Math.min(CEFR_ORDER.length - 1, idx))] : null;
    }
  }

  const validSkillLevels = Object.values(skillScores).filter((l): l is CefrLevel => l !== null);
  const mode = modeLevel(validSkillLevels);

  const overallIdx = weightedLevelIndex(answers) ?? 0;
  const globalEstimate = CEFR_ORDER[Math.max(0, Math.min(CEFR_ORDER.length - 1, overallIdx))];

  const cefrOverall = mode ?? globalEstimate;
  const bandPosition = bandPositionForScore(cefrOverall, scoreOverall);

  return {
    scoreOverall,
    cefrOverall,
    bandPosition,
    cefrOverallLabel: `${cefrOverall}:${bandPosition}`,
    skillScores,
  };
}

export function formatCefrLabel(compositeLabel: string, locale: "en" | "ar"): string {
  const [level, position] = compositeLabel.split(":") as [CefrLevel, BandPosition];
  const idx = CEFR_ORDER.indexOf(level);
  const nextLevel = idx < CEFR_ORDER.length - 1 ? CEFR_ORDER[idx + 1] : null;

  if (position === "upper" && nextLevel) {
    return locale === "ar" ? `يقترب من ${nextLevel.replace("_", "-")}` : `Approaching ${nextLevel.replace("_", "-")}`;
  }
  if (position === "mid" || (position === "upper" && !nextLevel)) {
    return locale === "ar" ? `${level.replace("_", "-")} قوي` : `Strong ${level.replace("_", "-")}`;
  }
  return level.replace("_", "-");
}
