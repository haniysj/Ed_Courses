import type { PlacementSkill } from "@/lib/enums";

export type PresentedQuestion = {
  id: string;
  /** optionOrder[shuffledPosition] = index into the question's original options array */
  optionOrder: number[];
};

export type PublicQuestion = {
  id: string;
  skill: PlacementSkill;
  topic: string;
  prompt: string;
  options: string[];
  audioText?: string | null;
  imageUrl?: string | null;
};

export type StoredAnswer = {
  selectedIndex: number;
  correct: boolean;
  timeMs: number;
};
