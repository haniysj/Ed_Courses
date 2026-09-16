import { prisma } from "@/lib/prisma";
import type { CefrLevel } from "@/lib/enums";

const CEFR_TO_COURSE_LEVEL: Record<CefrLevel, string> = {
  PRE_A1: "BEGINNER",
  A1: "BEGINNER",
  A2: "INTERMEDIATE",
  B1: "INTERMEDIATE",
  B2: "ADVANCED",
  C1: "ADVANCED",
};

const RELEVANT_CATEGORIES = ["English & Communication", "Business & Test Prep"];

export async function getRecommendedCourses(cefr: CefrLevel, take = 3) {
  const level = CEFR_TO_COURSE_LEVEL[cefr];

  const primary = await prisma.course.findMany({
    where: { status: "PUBLISHED", level, category: { name: { in: RELEVANT_CATEGORIES } } },
    include: { instructor: true, category: true, schedules: true },
    take,
  });
  if (primary.length >= take) return primary;

  const fallback = await prisma.course.findMany({
    where: { status: "PUBLISHED", level, id: { notIn: primary.map((c) => c.id) } },
    include: { instructor: true, category: true, schedules: true },
    take: take - primary.length,
  });
  return [...primary, ...fallback];
}
