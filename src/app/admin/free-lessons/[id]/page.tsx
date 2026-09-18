import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { FreeLessonEditor, type EditorLesson } from "@/components/admin/free-lesson-editor";
import { parseJsonArray } from "@/lib/free-lessons/constants";
import { parseLessonContent } from "@/lib/free-lessons/schema";

export const dynamic = "force-dynamic";

export default async function EditFreeLessonPage({ params }: { params: { id: string } }) {
  const lesson = await prisma.freeLesson.findUnique({ where: { id: params.id }, include: { exercises: { orderBy: { order: "asc" } } } });
  if (!lesson) notFound();
  const options = await prisma.freeLesson.findMany({ select: { slug: true, title: true }, orderBy: { title: "asc" } });

  const initial: EditorLesson = {
    title: lesson.title, slug: lesson.slug, level: lesson.level, category: lesson.category, topic: lesson.topic, difficulty: lesson.difficulty,
    estimatedMinutes: lesson.estimatedMinutes, objective: lesson.objective, imageUrl: lesson.imageUrl ?? "", status: lesson.status,
    tags: parseJsonArray(lesson.tags), prerequisites: parseJsonArray(lesson.prerequisites),
    requireAllAnswered: lesson.requireAllAnswered, minScorePercent: lesson.minScorePercent, allowRetry: lesson.allowRetry,
    refBook: lesson.refBook ?? "", refLevel: lesson.refLevel ?? "", refArea: lesson.refArea ?? "", refTopic: lesson.refTopic ?? "",
    sections: parseLessonContent(lesson.content).sections,
    exercises: lesson.exercises.map((e) => {
      let data: unknown = {};
      try { data = JSON.parse(e.data); } catch { /* left empty; the editor will show blank fields */ }
      return { id: e.id, type: e.type, prompt: e.prompt, context: e.context ?? "", explanation: e.explanation ?? "", points: e.points, data };
    }),
  };

  return (
    <div>
      <Link href="/admin/free-lessons" className="text-sm text-brand-700 hover:underline dark:text-brand-400">← All free lessons</Link>
      <h1 className="mt-2 text-2xl font-bold text-ink-900 dark:text-white">Edit Free Lesson</h1>
      <p className="mt-1 text-ink-500 dark:text-ink-400">{lesson.title}</p>
      <div className="mt-6">
        <FreeLessonEditor lessonId={lesson.id} initial={initial} slugOptions={options} />
      </div>
    </div>
  );
}
