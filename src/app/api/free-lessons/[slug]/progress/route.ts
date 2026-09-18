import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { evaluateProgress, parseResults } from "@/lib/free-lessons/progress";

export const dynamic = "force-dynamic";

/** POST { event: "content_read" } — the learner has read the lesson side. */
export async function POST(req: NextRequest, { params }: { params: { slug: string } }) {
  const session = await getServerSession(authOptions);
  if (!session?.user) return NextResponse.json({ error: "Please log in" }, { status: 401 });
  if (session.user.role === "ADMIN") return NextResponse.json({ preview: true });

  const body = await req.json().catch(() => ({}));
  if (body?.event !== "content_read") return NextResponse.json({ error: "Unknown event" }, { status: 400 });

  const lesson = await prisma.freeLesson.findUnique({
    where: { slug: params.slug },
    include: { exercises: { select: { id: true, points: true } } },
  });
  if (!lesson || lesson.status !== "PUBLISHED") return NextResponse.json({ error: "Lesson not found" }, { status: 404 });

  const userId = session.user.id;
  const progress = await prisma.freeLessonProgress.upsert({
    where: { userId_lessonId: { userId, lessonId: lesson.id } },
    create: { userId, lessonId: lesson.id, contentRead: true },
    update: { contentRead: true },
  });

  const evalResult = evaluateProgress(lesson, lesson.exercises, parseResults(progress.results), true);
  const wasCompleted = progress.status === "COMPLETED";
  const nowCompleted = wasCompleted || evalResult.complete;
  if (nowCompleted && !wasCompleted) {
    await prisma.freeLessonProgress.update({
      where: { id: progress.id },
      data: { status: "COMPLETED", completedAt: new Date(), scorePercent: evalResult.scorePercent },
    });
  }
  return NextResponse.json({
    progress: { status: nowCompleted ? "COMPLETED" : "IN_PROGRESS", ...evalResult },
    justCompleted: !wasCompleted && nowCompleted,
  });
}
