import type { CefrLevel } from "@/lib/enums";

export type BandPosition = "lower" | "mid" | "upper";

/**
 * Approximate overall-score ranges (0-100) associated with each CEFR band.
 * These are used only to (a) provide a fallback overall-CEFR estimate when
 * skill-level signals are inconclusive, and (b) decide whether a learner
 * sits in the lower/mid/upper part of their level for the Headway
 * recommendation. They are deliberately coarse -- see CEFR_RESULT_LABEL
 * below for why we never report false precision like "72.3%".
 */
export const CEFR_SCORE_BANDS: Record<CefrLevel, [number, number]> = {
  PRE_A1: [0, 15],
  A1: [16, 30],
  A2: [31, 45],
  B1: [46, 62],
  B2: [63, 80],
  C1: [81, 100],
};

export function bandPositionForScore(level: CefrLevel, score: number): BandPosition {
  const [min, max] = CEFR_SCORE_BANDS[level];
  const span = max - min || 1;
  const position = (score - min) / span;
  if (position < 0.34) return "lower";
  if (position > 0.66) return "upper";
  return "mid";
}

type HeadwayResult = {
  headline: { en: string; ar: string };
  explanation: { en: string; ar: string };
};

export function getHeadwayRecommendation(cefr: CefrLevel, position: BandPosition): HeadwayResult {
  switch (cefr) {
    case "PRE_A1":
      return {
        headline: { en: "Headway Beginner", ar: "Headway Beginner (المستوى الأول)" },
        explanation: {
          en: "You are at the very start of your English learning journey. We recommend starting from the foundational level of Headway Beginner.",
          ar: "أنت في بداية رحلتك لتعلّم اللغة الإنجليزية. ننصح بالبدء من المستوى التأسيسي في كتاب Headway Beginner.",
        },
      };
    case "A1":
      if (position === "upper") {
        return {
          headline: { en: "Headway Beginner – Elementary", ar: "Headway Beginner – Elementary" },
          explanation: {
            en: "Your result suggests you are approaching the end of Headway Beginner and could move into Headway Elementary.",
            ar: "تشير نتيجتك إلى أنك تقترب من نهاية Headway Beginner ويمكنك الانتقال إلى Headway Elementary.",
          },
        };
      }
      return {
        headline: { en: "Headway Beginner", ar: "Headway Beginner" },
        explanation: {
          en: "We recommend starting with Headway Beginner to build a solid foundation in English.",
          ar: "ننصح بالبدء بكتاب Headway Beginner لبناء أساس متين في اللغة الإنجليزية.",
        },
      };
    case "A2":
      if (position === "upper") {
        return {
          headline: { en: "Headway Pre-Intermediate – starting level", ar: "Headway Pre-Intermediate – المستوى الأول" },
          explanation: {
            en: "Your result suggests you are between Headway Elementary and Headway Pre-Intermediate. We recommend starting with Headway Pre-Intermediate.",
            ar: "تشير نتيجتك إلى أنك بين Headway Elementary و Headway Pre-Intermediate. ننصح بالبدء بكتاب Headway Pre-Intermediate.",
          },
        };
      }
      if (position === "lower") {
        return {
          headline: { en: "Headway Elementary – early stage", ar: "Headway Elementary – المرحلة المبكرة" },
          explanation: {
            en: "We recommend starting with Headway Elementary to reinforce your basics before moving on.",
            ar: "ننصح بالبدء بكتاب Headway Elementary لتعزيز أساسياتك قبل الانتقال للمستوى التالي.",
          },
        };
      }
      return {
        headline: { en: "Headway Elementary – late stage", ar: "Headway Elementary – المرحلة المتأخرة" },
        explanation: {
          en: "Your result suggests you are between Headway Elementary and Headway Pre-Intermediate. We recommend starting with the later units of Headway Elementary.",
          ar: "تشير نتيجتك إلى أنك بين Headway Elementary و Headway Pre-Intermediate. ننصح بالبدء من الوحدات المتأخرة في Headway Elementary.",
        },
      };
    case "B1":
      if (position === "upper") {
        return {
          headline: { en: "Headway Intermediate", ar: "Headway Intermediate" },
          explanation: {
            en: "Your result suggests you are ready for Headway Intermediate.",
            ar: "تشير نتيجتك إلى أنك مستعد لكتاب Headway Intermediate.",
          },
        };
      }
      return {
        headline: { en: "Headway Pre-Intermediate – Intermediate", ar: "Headway Pre-Intermediate – Intermediate" },
        explanation: {
          en: "Your result suggests you are between Headway Pre-Intermediate and Headway Intermediate. We recommend starting with Headway Pre-Intermediate to consolidate before progressing.",
          ar: "تشير نتيجتك إلى أنك بين Headway Pre-Intermediate و Headway Intermediate. ننصح بالبدء بكتاب Headway Pre-Intermediate لتثبيت مهاراتك قبل التقدم.",
        },
      };
    case "B2":
      return {
        headline: { en: "Headway Upper-Intermediate", ar: "Headway Upper-Intermediate" },
        explanation: {
          en: "Your result suggests you are ready for Headway Upper-Intermediate.",
          ar: "تشير نتيجتك إلى أنك مستعد لكتاب Headway Upper-Intermediate.",
        },
      };
    case "C1":
      return {
        headline: { en: "Headway Advanced", ar: "Headway Advanced" },
        explanation: {
          en: "Your result suggests you are ready for Headway Advanced.",
          ar: "تشير نتيجتك إلى أنك مستعد لكتاب Headway Advanced.",
        },
      };
  }
}
