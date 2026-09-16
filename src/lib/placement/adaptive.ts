import { CEFR_ORDER, PLACEMENT_SKILLS, type CefrLevel, type PlacementSkill } from "@/lib/enums";

// cefrLevel/skill are typed as plain strings here (rather than the CefrLevel
// / PlacementSkill unions) so Prisma's PlacementQuestion rows -- which store
// them as unconstrained strings, per src/lib/enums.ts -- satisfy this type
// without a cast at every call site.
export type QuestionPoolItem = {
  id: string;
  cefrLevel: string;
  skill: string;
};

function idxOf(level: string): number {
  return CEFR_ORDER.indexOf(level as CefrLevel);
}

/**
 * The test is delivered in three stages rather than one fixed set of
 * questions. After each stage the target CEFR level is adjusted up or down
 * based on how the learner performed, which is what makes this a genuine
 * (if simplified) adaptive placement test rather than a static quiz with
 * a CEFR label attached at the end. See docs in this module for the exact
 * thresholds used at each step.
 */
export function buildStagePlan(questionCount: number): [number, number, number] {
  const stage1 = Math.round(questionCount * 0.4);
  const stage2 = Math.round(questionCount * 0.35);
  const stage3 = Math.max(questionCount - stage1 - stage2, 0);
  return [stage1, stage2, stage3];
}

export function clampLevelIndex(index: number): number {
  return Math.max(0, Math.min(CEFR_ORDER.length - 1, index));
}

export function middleLevel(min: CefrLevel, max: CefrLevel): CefrLevel {
  const minIdx = CEFR_ORDER.indexOf(min);
  const maxIdx = CEFR_ORDER.indexOf(max);
  return CEFR_ORDER[clampLevelIndex(Math.round((minIdx + maxIdx) / 2))];
}

/**
 * Moves the target level up after strong performance, down after weak
 * performance, and holds steady otherwise -- mirroring how staged adaptive
 * placement tests narrow in on a learner's true level over successive
 * stages instead of giving everyone the exact same fixed-difficulty test.
 */
export function nextTargetLevel(current: CefrLevel, accuracy: number, rangeMin: CefrLevel, rangeMax: CefrLevel): CefrLevel {
  const currentIdx = CEFR_ORDER.indexOf(current);
  const minIdx = CEFR_ORDER.indexOf(rangeMin);
  const maxIdx = CEFR_ORDER.indexOf(rangeMax);

  let nextIdx = currentIdx;
  if (accuracy >= 0.7) nextIdx = currentIdx + 1;
  else if (accuracy <= 0.35) nextIdx = currentIdx - 1;

  nextIdx = Math.max(minIdx, Math.min(maxIdx, nextIdx));
  return CEFR_ORDER[nextIdx];
}

/**
 * Selects `count` questions from the pool, prioritizing the target CEFR
 * level and spreading evenly across skills. Falls back to neighboring
 * levels if the bank doesn't have enough questions exactly at the target
 * level (small bank, or a level with fewer authored questions).
 */
export function selectQuestions<T extends QuestionPoolItem>(params: {
  pool: T[];
  targetLevel: CefrLevel;
  count: number;
  excludeIds: Set<string>;
}): T[] {
  const { pool, targetLevel, count, excludeIds } = params;
  const available = pool.filter((q) => !excludeIds.has(q.id));
  const targetIdx = idxOf(targetLevel);

  const byDistance = [...available].sort((a, b) => {
    const da = Math.abs(idxOf(a.cefrLevel) - targetIdx);
    const db = Math.abs(idxOf(b.cefrLevel) - targetIdx);
    return da - db;
  });

  const perSkillTarget = Math.ceil(count / PLACEMENT_SKILLS.length);
  const selected: T[] = [];
  const usedIds = new Set<string>();

  for (const skill of PLACEMENT_SKILLS) {
    const candidates = byDistance.filter((q) => q.skill === skill && !usedIds.has(q.id));
    const shuffled = shuffle(candidates);
    for (const q of shuffled.slice(0, perSkillTarget)) {
      if (selected.length >= count) break;
      selected.push(q);
      usedIds.add(q.id);
    }
  }

  if (selected.length < count) {
    const remaining = shuffle(byDistance.filter((q) => !usedIds.has(q.id)));
    for (const q of remaining) {
      if (selected.length >= count) break;
      selected.push(q);
      usedIds.add(q.id);
    }
  }

  return shuffle(selected);
}

export function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/** Shuffles an answer-options array and returns the mapping needed to score
 * answers later without ever sending the correct answer to the client. */
export function shuffleOptions(options: string[]): { optionOrder: number[]; shuffledOptions: string[] } {
  const optionOrder = shuffle(options.map((_, i) => i));
  return { optionOrder, shuffledOptions: optionOrder.map((origIdx) => options[origIdx]) };
}
