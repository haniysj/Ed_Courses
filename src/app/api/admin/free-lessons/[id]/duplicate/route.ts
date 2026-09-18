import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdminApi } from "@/lib/require-admin";
import { uniqueSlug } from "@/lib/free-lessons/admin";

export const dynamic = "force-dynamic";

/** Copies a lesson (content + exercises) as a new DRAFT at the end of its level and category. */
export async function POST(_req: Request, { params }: { params: { id: string } }) {
  const session = await requireAdminApi();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const src = await prisma.freeLesson.findUnique({ where: { id: params.id }, include: { exercises: { orderBy: { order: "asc" } } } });
  if (!src) return NextResponse.json({ error: "Lesson not found" }, { status: 404 });

  const last = await prisma.freeLesson.findFirst({ where: { level: src.level, category: src.category }, orderBy: { order: "desc" }, select: { order: true } });
  const title = `${src.title} (copy)`;
  const copy = await prisma.freeLesson.create({
    data: {
      slug: await uniqueSlug(title),
      level: src.level,
      category: src.category,
      title,
      topic: src.topic,
      difficulty: src.difficulty,
      order: (last?.order ?? 0) + 1,
      estimatedMinutes: src.estimatedMinutes,
      objective: src.objective,
      imageUrl: src.imageUrl,
      status: "DRAFT",
      content: src.content,
      tags: src.tags,
      prerequisites: src.prerequisites,
      requireAllAnswered: src.requireAllAnswered,
      minScorePercent: src.minScorePercent,
      allowRetry: src.allowRetry,
      refBook: src.refBook,
      refLevel: src.refLevel,
      refArea: src.refArea,
      refTopic: src.refTopic,
      exercises: {
        create: src.exercises.map((e) => ({
          order: e.order, type: e.type, prompt: e.prompt, context: e.context, data: e.data, explanation: e.explanation, points: e.points,
        })),
      },
    },
  });
  return NextResponse.json({ id: copy.id, slug: copy.slug }, { status: 201 });
}
