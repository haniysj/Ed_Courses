import { prisma } from "@/lib/prisma";
import { slugify } from "@/lib/utils";
import { validateExerciseData, type LessonInput } from "./schema";

/** First readable validation problem for a lesson payload, or null if it is safe to save. */
export function checkLessonPayload(input: LessonInput): string | null {
  for (let i = 0; i < input.exercises.length; i++) {
    const ex = input.exercises[i];
    const err = validateExerciseData(ex.type, ex.data);
    if (err) return `Exercise ${i + 1}: ${err}`;
    if (ex.type === "FILL_BLANK") {
      const blanks = (ex.prompt.match(/___/g) ?? []).length;
      const answers = ((ex.data as { answers?: unknown[] }).answers ?? []).length;
      if (blanks !== answers) return `Exercise ${i + 1}: the prompt has ${blanks} blank(s) (___) but ${answers} answer line(s)`;
    }
  }
  return null;
}

export async function uniqueSlug(base: string, ignoreId?: string): Promise<string> {
  const root = slugify(base) || "lesson";
  let candidate = root;
  let n = 2;
  for (;;) {
    const existing = await prisma.freeLesson.findUnique({ where: { slug: candidate }, select: { id: true } });
    if (!existing || existing.id === ignoreId) return candidate;
    candidate = `${root}-${n++}`;
  }
}

export async function renumber(level: string, category: string) {
  const group = await prisma.freeLesson.findMany({
    where: { level, category },
    orderBy: [{ order: "asc" }, { createdAt: "asc" }],
    select: { id: true, order: true },
  });
  await prisma.$transaction(
    group.map((g, i) => prisma.freeLesson.update({ where: { id: g.id }, data: { order: i + 1 } })).filter((_, i) => group[i].order !== i + 1)
  );
}
