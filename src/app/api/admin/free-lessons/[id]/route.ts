import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdminApi } from "@/lib/require-admin";
import { lessonInputSchema } from "@/lib/free-lessons/schema";
import { FL_STATUSES } from "@/lib/free-lessons/constants";
import { checkLessonPayload, renumber } from "@/lib/free-lessons/admin";

export const dynamic = "force-dynamic";

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const session = await requireAdminApi();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json().catch(() => null);
  if (!body) return NextResponse.json({ error: "Invalid request" }, { status: 400 });

  const existing = await prisma.freeLesson.findUnique({ where: { id: params.id }, include: { exercises: { select: { id: true } } } });
  if (!existing) return NextResponse.json({ error: "Lesson not found" }, { status: 404 });

  // Quick status change (publish / unpublish)
  if (Object.keys(body).length === 1 && "status" in body) {
    if (!(FL_STATUSES as readonly string[]).includes(body.status)) return NextResponse.json({ error: "Invalid status" }, { status: 400 });
    const lesson = await prisma.freeLesson.update({ where: { id: params.id }, data: { status: body.status } });
    return NextResponse.json({ status: lesson.status });
  }

  // Reorder within level + category
  if (body.action === "move") {
    await renumber(existing.level, existing.category);
    const group = await prisma.freeLesson.findMany({
      where: { level: existing.level, category: existing.category },
      orderBy: { order: "asc" },
      select: { id: true, order: true },
    });
    const i = group.findIndex((g) => g.id === params.id);
    const j = body.direction === "up" ? i - 1 : i + 1;
    if (i < 0 || j < 0 || j >= group.length) return NextResponse.json({ ok: true });
    await prisma.$transaction([
      prisma.freeLesson.update({ where: { id: group[i].id }, data: { order: group[j].order } }),
      prisma.freeLesson.update({ where: { id: group[j].id }, data: { order: group[i].order } }),
    ]);
    return NextResponse.json({ ok: true });
  }

  // Full edit
  const parsed = lessonInputSchema.safeParse(body);
  if (!parsed.success) {
    const issue = parsed.error.issues[0];
    return NextResponse.json({ error: `${issue?.path.join(".") || "input"}: ${issue?.message ?? "Invalid input"}` }, { status: 400 });
  }
  const input = parsed.data;
  const problem = checkLessonPayload(input);
  if (problem) return NextResponse.json({ error: problem }, { status: 400 });

  const changedGroup = input.level !== existing.level || input.category !== existing.category;
  let order = existing.order;
  if (changedGroup) {
    const last = await prisma.freeLesson.findFirst({ where: { level: input.level, category: input.category }, orderBy: { order: "desc" }, select: { order: true } });
    order = (last?.order ?? 0) + 1;
  }

  // Keep exercise ids stable across edits so learners' saved answers stay attached to the right exercise.
  const keepIds = new Set(input.exercises.map((e) => e.id).filter((id): id is string => !!id && existing.exercises.some((x) => x.id === id)));

  await prisma.$transaction([
    prisma.freeLessonExercise.deleteMany({ where: { lessonId: params.id, id: { notIn: Array.from(keepIds) } } }),
    ...input.exercises.map((ex, i) => {
      const data = {
        order: i + 1,
        type: ex.type,
        prompt: ex.prompt,
        context: ex.context || null,
        data: JSON.stringify(ex.data),
        explanation: ex.explanation || null,
        points: ex.points,
      };
      return ex.id && keepIds.has(ex.id)
        ? prisma.freeLessonExercise.update({ where: { id: ex.id }, data })
        : prisma.freeLessonExercise.create({ data: { ...data, lessonId: params.id } });
    }),
    prisma.freeLesson.update({
      where: { id: params.id },
      data: {
        level: input.level,
        category: input.category,
        title: input.title,
        topic: input.topic,
        difficulty: input.difficulty,
        order,
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
      },
    }),
  ]);
  if (changedGroup) await renumber(existing.level, existing.category);

  return NextResponse.json({ ok: true, slug: existing.slug });
}

export async function DELETE(_req: NextRequest, { params }: { params: { id: string } }) {
  const session = await requireAdminApi();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const lesson = await prisma.freeLesson.findUnique({ where: { id: params.id }, select: { level: true, category: true } });
  if (!lesson) return NextResponse.json({ error: "Lesson not found" }, { status: 404 });
  await prisma.freeLesson.delete({ where: { id: params.id } }); // exercises, progress and attempts cascade
  await renumber(lesson.level, lesson.category);
  return NextResponse.json({ ok: true });
}
