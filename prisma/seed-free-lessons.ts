/**
 * Seeds the Free English Lessons curriculum.
 *
 *   npm run db:seed:lessons            -> creates lessons that don't exist yet (safe to re-run;
 *                                          lessons an admin has edited are left alone)
 *   npm run db:seed:lessons -- --force -> overwrites seeded lessons (and their exercises) by slug
 *   npm run db:seed:lessons -- --only=slug-a,slug-b -> overwrites just those lessons
 *   npm run db:seed:lessons -- --reorder -> re-applies curriculum order to existing lessons
 *
 * Every lesson is validated against the same schemas the admin editor uses.
 */
import { PrismaClient } from "@prisma/client";
import { lessonContentSchema, validateExerciseData } from "../src/lib/free-lessons/schema";
import { BEGINNER } from "./free-lessons/beginner";
import { ELEMENTARY } from "./free-lessons/elementary";
import { PRE_INTERMEDIATE } from "./free-lessons/pre-intermediate";
import { INTERMEDIATE } from "./free-lessons/intermediate";
import { UPPER_INTERMEDIATE } from "./free-lessons/upper-intermediate";
import { ADVANCED } from "./free-lessons/advanced";
import type { SeedLesson } from "./free-lessons/dsl";

const prisma = new PrismaClient();
const force = process.argv.includes("--force");
// --only=slug1,slug2  overwrite just these seeded lessons (content + exercises)
const only = new Set((process.argv.find((a) => a.startsWith("--only="))?.slice(7) ?? "").split(",").filter(Boolean));
// --reorder  re-apply the curriculum order to existing lessons (resets any manual reordering by an admin)
const reorder = process.argv.includes("--reorder");

const ALL: SeedLesson[] = [...BEGINNER, ...ELEMENTARY, ...PRE_INTERMEDIATE, ...INTERMEDIATE, ...UPPER_INTERMEDIATE, ...ADVANCED];

function validate(lesson: SeedLesson) {
  const content = lessonContentSchema.safeParse({ sections: lesson.sections });
  if (!content.success) {
    throw new Error(`[${lesson.slug}] invalid content: ${JSON.stringify(content.error.issues[0])}`);
  }
  lesson.exercises.forEach((ex, i) => {
    const err = validateExerciseData(ex.type, ex.data);
    if (err) throw new Error(`[${lesson.slug}] exercise ${i + 1} (${ex.type}): ${err}`);
    if (ex.type === "FILL_BLANK") {
      const blanks = (ex.prompt.match(/___/g) ?? []).length;
      const answers = (ex.data.answers as unknown[]).length;
      if (blanks !== answers) throw new Error(`[${lesson.slug}] exercise ${i + 1}: ${blanks} blanks but ${answers} answers`);
    }
  });
  for (const slug of lesson.prereq ?? []) {
    if (!ALL.some((l) => l.slug === slug)) throw new Error(`[${lesson.slug}] unknown prerequisite ${slug}`);
  }
}

async function main() {
  const slugs = new Set<string>();
  ALL.forEach((l) => {
    if (slugs.has(l.slug)) throw new Error(`Duplicate slug ${l.slug}`);
    slugs.add(l.slug);
    validate(l);
  });

  const counters = new Map<string, number>();
  let created = 0;
  let updated = 0;
  let skipped = 0;

  for (const lesson of ALL) {
    const key = `${lesson.level}:${lesson.category}`;
    const order = (counters.get(key) ?? 0) + 1;
    counters.set(key, order);

    const existing = await prisma.freeLesson.findUnique({ where: { slug: lesson.slug } });
    if (existing && !force && !only.has(lesson.slug)) {
      if (reorder && existing.order !== order) {
        await prisma.freeLesson.update({ where: { id: existing.id }, data: { order } });
        updated++;
      } else skipped++;
      continue;
    }

    const data = {
      level: lesson.level,
      category: lesson.category,
      title: lesson.title,
      topic: lesson.topic,
      difficulty: lesson.difficulty,
      order,
      estimatedMinutes: lesson.minutes,
      objective: lesson.objective,
      status: "PUBLISHED",
      content: JSON.stringify({ sections: lesson.sections }),
      tags: JSON.stringify(lesson.tags),
      prerequisites: JSON.stringify(lesson.prereq ?? []),
      requireAllAnswered: true,
      minScorePercent: lesson.minScore ?? 60,
      allowRetry: true,
      refBook: lesson.ref?.book ?? null,
      refLevel: lesson.ref?.level ?? null,
      refArea: lesson.ref?.area ?? null,
      refTopic: lesson.ref?.topic ?? null,
    };
    const exercises = lesson.exercises.map((ex, i) => ({
      order: i + 1,
      type: ex.type,
      prompt: ex.prompt,
      context: ex.context ?? null,
      data: JSON.stringify(ex.data),
      explanation: ex.explanation,
      points: ex.points ?? 1,
    }));

    if (existing) {
      await prisma.$transaction([
        prisma.freeLessonExercise.deleteMany({ where: { lessonId: existing.id } }),
        prisma.freeLesson.update({ where: { id: existing.id }, data: { ...data, exercises: { create: exercises } } }),
      ]);
      updated++;
    } else {
      await prisma.freeLesson.create({ data: { slug: lesson.slug, ...data, exercises: { create: exercises } } });
      created++;
    }
  }

  const perLevel = new Map<string, number>();
  ALL.forEach((l) => perLevel.set(l.level, (perLevel.get(l.level) ?? 0) + 1));
  console.log(`Free lessons: ${created} created, ${updated} updated, ${skipped} unchanged (of ${ALL.length}).`);
  console.log(Object.fromEntries(perLevel));
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
