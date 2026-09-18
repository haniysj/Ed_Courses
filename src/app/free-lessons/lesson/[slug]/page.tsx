import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getServerLocale } from "@/lib/i18n/server";
import { fl } from "@/lib/free-lessons/i18n";
import { isFlCategory, isFlLevel, levelSlug, parseJsonArray } from "@/lib/free-lessons/constants";
import { gradeExercise, toPublicExercise, type PublicExercise } from "@/lib/free-lessons/grade";
import { evaluateProgress, parseResults, touchLessonView } from "@/lib/free-lessons/progress";
import { parseLessonContent } from "@/lib/free-lessons/schema";
import { getLatestPlacementProfile, loadLessonSummaries, recommendCourse, recommendLessons } from "@/lib/free-lessons/recommend";
import { LessonViewer } from "@/components/free-lessons/lesson-viewer";
import type { InitialResult } from "@/components/free-lessons/exercise-card";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const lesson = await prisma.freeLesson.findUnique({ where: { slug: params.slug }, select: { title: true } });
  return { title: lesson ? `${lesson.title} · Free Lessons` : "Free Lessons" };
}

export default async function LessonPage({ params }: { params: { slug: string } }) {
  const session = await getServerSession(authOptions);
  if (!session?.user) redirect(`/login?callbackUrl=${encodeURIComponent(`/free-lessons/lesson/${params.slug}`)}`);

  const isAdmin = session.user.role === "ADMIN";
  const locale = getServerLocale();
  const t = fl(locale);

  const lesson = await prisma.freeLesson.findUnique({
    where: { slug: params.slug },
    include: { exercises: { orderBy: { order: "asc" } } },
  });
  if (!lesson || !isFlLevel(lesson.level) || !isFlCategory(lesson.category)) notFound();
  if (lesson.status !== "PUBLISHED" && !isAdmin) notFound();

  const userId = session.user.id;
  const [siblings, progress, profile, allLessons, completedRows] = await Promise.all([
    prisma.freeLesson.findMany({
      where: { level: lesson.level, category: lesson.category, status: "PUBLISHED" },
      orderBy: { order: "asc" },
      select: { slug: true, title: true },
    }),
    isAdmin ? Promise.resolve(null) : touchLessonView(userId, lesson.id),
    isAdmin ? Promise.resolve(null) : getLatestPlacementProfile(userId),
    loadLessonSummaries(),
    isAdmin
      ? Promise.resolve([])
      : prisma.freeLessonProgress.findMany({ where: { userId, status: "COMPLETED" }, select: { lesson: { select: { slug: true } } } }),
  ]);

  const idx = siblings.findIndex((s) => s.slug === lesson.slug);
  const prev = idx > 0 ? siblings[idx - 1] : null;
  const next = idx >= 0 && idx < siblings.length - 1 ? siblings[idx + 1] : null;

  const results = parseResults(progress?.results);
  const exercises: PublicExercise[] = [];
  const initialResults: Record<string, InitialResult> = {};
  for (const ex of lesson.exercises) {
    const pub = toPublicExercise(ex);
    if (!pub) continue;
    exercises.push(pub);
    const saved = results[ex.id];
    if (saved && saved.attempts > 0) {
      const graded = gradeExercise(ex.type, ex.data, saved.answer);
      initialResults[ex.id] = {
        answer: saved.answer,
        correct: saved.correct,
        attempts: saved.attempts,
        explanation: ex.explanation,
        correctText: graded && (saved.correct || saved.attempts >= 2 || !lesson.allowRetry) ? graded.correctText : null,
      };
    }
  }

  const contentRead = progress?.contentRead ?? false;
  const evalResult = evaluateProgress(lesson, exercises, results, contentRead);
  const status = progress?.status === "COMPLETED" ? "COMPLETED" : progress ? "IN_PROGRESS" : "NOT_STARTED";

  const completedSlugs = new Set(completedRows.map((r) => r.lesson.slug));
  const recs = recommendLessons({ lessons: allLessons, completed: completedSlugs, profile, fallbackLevel: lesson.level, limit: 4 });
  const upNextRec = recs.find((r) => r.lesson.slug !== lesson.slug) ?? null;
  const courseRec = await recommendCourse({ profile, fallbackLevel: lesson.level });

  return (
    <div className="container-page max-w-6xl py-8">
      <nav aria-label="Breadcrumb" className="mb-4 text-sm text-ink-500 dark:text-ink-400">
        <Link href="/free-lessons" className="hover:underline">{t.title}</Link>
        <span aria-hidden className="mx-2">/</span>
        <Link href={`/free-lessons/level/${levelSlug(lesson.level)}`} className="hover:underline">{t.backToLevel}</Link>
      </nav>

      <LessonViewer
        lesson={{
          slug: lesson.slug,
          title: lesson.title,
          level: lesson.level,
          category: lesson.category,
          order: lesson.order,
          estimatedMinutes: lesson.estimatedMinutes,
          objective: lesson.objective,
          allowRetry: lesson.allowRetry,
          minScorePercent: lesson.minScorePercent,
          sections: parseLessonContent(lesson.content).sections,
        }}
        exercises={exercises}
        initialResults={initialResults}
        initialProgress={{ status, scorePercent: evalResult.scorePercent, answered: evalResult.answered, total: evalResult.total, blocker: evalResult.blocker }}
        contentRead={contentRead}
        prev={prev}
        next={next}
        upNext={upNextRec ? { slug: upNextRec.lesson.slug, title: upNextRec.lesson.title, reason: upNextRec.reason } : null}
        course={courseRec ? { ...courseRec.course, reason: courseRec.reason } : null}
        preview={isAdmin}
      />
    </div>
  );
}

void parseJsonArray;
