import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdminApi } from "@/lib/require-admin";
import { lessonInputSchema } from "@/lib/free-lessons/schema";
import { checkLessonPayload, uniqueSlug } from "@/lib/free-lessons/admin";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const session = await requireAdminApi();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const parsed = lessonInputSchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) {
    const issue = parsed.error.issues[0];
    return NextResponse.json({ error: `${issue?.path.join(".") || "input"}: ${issue?.message ?? "Invalid input"}` }, { status: 400 });
  }
  const input = parsed.data;
  const problem = checkLessonPayload(input);
  if (problem) return NextResponse.json({ error: problem }, { status: 400 });

  const slug = await uniqueSlug(input.slug ?? input.title);
  const last = await prisma.freeLesson.findFirst({
    where: { level: input.level, category: input.category },
    orderBy: { order: "desc" },
    select: { order: true },
  });

  const lesson = await prisma.freeLesson.create({
    data: {
      slug,
      level: input.level,
      category: input.category,
      title: input.title,
      topic: input.topic,
      difficulty: input.difficulty,
      order: (last?.order ?? 0) + 1,
      estimatedMinutes: input.estimatedMinutes,
      objective: input.objective,
      imageUrl: input.imageUrl || null,
      status: input.status,
      content: JSON.stringify(input.content),
      tags: JSON.stringify(input.tags),
      prerequisites: JSON.stringify(input.prerequisites),
      requireAllAnswered: input.requireAllAnswered,
      minScorePercent: input.minScorePercent,
      allowRetry: input.allowRetry,
      refBook: input.refBook || null,
      refLevel: input.refLevel || null,
      refArea: input.refArea || null,
      refTopic: input.refTopic || null,
      exercises: {
        create: input.exercises.map((ex, i) => ({
          order: i + 1,
          type: ex.type,
          prompt: ex.prompt,
          context: ex.context || null,
          data: JSON.stringify(ex.data),
          explanation: ex.explanation || null,
          points: ex.points,
        })),
      },
    },
  });
  return NextResponse.json({ id: lesson.id, slug: lesson.slug }, { status: 201 });
}
