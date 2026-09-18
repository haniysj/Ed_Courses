import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { answerToText, gradeExercise, parseExerciseData } from "@/lib/free-lessons/grade";
import { evaluateProgress, parseResults } from "@/lib/free-lessons/progress";

export const dynamic = "force-dynamic";

/** Grades one exercise on the server (answer keys never reach the browser) and updates the learner's progress. */
export async function POST(req: NextRequest, { params }: { params: { slug: string } }) {
  const session = await getServerSession(authOptions);
  if (!session?.user) return NextResponse.json({ error: "Please log in" }, { status: 401 });

  const body = await req.json().catch(() => null);
  if (!body || typeof body.exerciseId !== "string") return NextResponse.json({ error: "Invalid request" }, { status: 400 });

  const isAdmin = session.user.role === "ADMIN";
  const lesson = await prisma.freeLesson.findUnique({
    where: { slug: params.slug },
    include: { exercises: { orderBy: { order: "asc" } } },
  });
  if (!lesson || (lesson.status !== "PUBLISHED" && !isAdmin)) {
    return NextResponse.json({ error: "Lesson not found" }, { status: 404 });
  }

  const exercise = lesson.exercises.find((e) => e.id === body.exerciseId);
  if (!exercise) return NextResponse.json({ error: "Exercise not found" }, { status: 404 });

  const graded = gradeExercise(exercise.type, exercise.data, body.answer);
  if (!graded) return NextResponse.json({ error: "This exercise is misconfigured" }, { status: 422 });

  // Admins preview lessons without polluting learner analytics.
  if (isAdmin) {
    return NextResponse.json({
      correct: graded.correct,
      explanation: exercise.explanation,
      correctText: graded.correctText,
      preview: true,
    });
  }

  const userId = session.user.id;
  const base = await prisma.freeLessonProgress.upsert({
    where: { userId_lessonId: { userId, lessonId: lesson.id } },
    create: { userId, lessonId: lesson.id },
    update: {},
    select: { id: true },
  });

  // Row-lock the progress record so two quick answers can't overwrite each other's results JSON.
  const outcome = await prisma.$transaction(async (tx) => {
    const rows = await tx.$queryRaw<{ id: string; results: string; contentRead: boolean; status: string; completedAt: Date | null }[]>`
      SELECT id, results, "contentRead", status, "completedAt" FROM "FreeLessonProgress" WHERE id = ${base.id} FOR UPDATE`;
    const progress = rows[0];

    const results = parseResults(progress.results);
    const previous = results[exercise.id];
    if (previous && previous.attempts > 0 && !lesson.allowRetry) return { locked: true as const };

    const attempts = (previous?.attempts ?? 0) + 1;
    results[exercise.id] = { answer: body.answer, correct: graded.correct, attempts };

    const evalResult = evaluateProgress(lesson, lesson.exercises, results, progress.contentRead);
    const wasCompleted = progress.status === "COMPLETED";
    const nowCompleted = wasCompleted || evalResult.complete;

    await tx.freeLessonAttempt.create({
      data: {
        userId,
        lessonId: lesson.id,
        exerciseId: exercise.id,
        correct: graded.correct,
        answerText: describeAnswer(exercise.type, exercise.data, body.answer),
      },
    });
    await tx.freeLessonProgress.update({
      where: { id: progress.id },
      data: {
        results: JSON.stringify(results),
        scorePercent: evalResult.scorePercent,
        status: nowCompleted ? "COMPLETED" : "IN_PROGRESS",
        completedAt: nowCompleted ? progress.completedAt ?? new Date() : null,
      },
    });
    return { locked: false as const, attempts, evalResult, wasCompleted, nowCompleted };
  });

  if (outcome.locked) {
    return NextResponse.json({ error: "This lesson does not allow retries", locked: true }, { status: 409 });
  }
  const { attempts, evalResult, wasCompleted, nowCompleted } = outcome;

  // Reveal the answer once the learner has tried twice (or cannot retry), so nobody gets stuck.
  const reveal = graded.correct || attempts >= 2 || !lesson.allowRetry;

  return NextResponse.json({
    correct: graded.correct,
    explanation: exercise.explanation,
    correctText: reveal ? graded.correctText : null,
    attempts,
    progress: { status: nowCompleted ? "COMPLETED" : "IN_PROGRESS", ...evalResult },
    justCompleted: !wasCompleted && nowCompleted,
  });
}

/** Turn an answer into readable text for the "most common wrong answers" report. */
function describeAnswer(type: string, rawData: string, answer: unknown): string {
  try {
    if (type === "MULTIPLE_CHOICE" || type === "MULTIPLE_SELECT") {
      const d = parseExerciseData(type as "MULTIPLE_CHOICE", rawData);
      const idx = Array.isArray(answer) ? answer : [answer];
      if (d) return answerToText(idx.map((i) => d.options[i as number] ?? String(i)).join("; "));
    }
    if (type === "IDENTIFY_MISTAKE") {
      const d = parseExerciseData("IDENTIFY_MISTAKE", rawData);
      if (d && typeof answer === "number") return answerToText(d.segments[answer] ?? String(answer));
    }
    if (type === "TRUE_FALSE") return answer === true ? "True" : "False";
    if (Array.isArray(answer)) return answerToText(answer.join(" | "));
  } catch {
    /* fall through */
  }
  return answerToText(answer);
}
