import { prisma } from "@/lib/prisma";
import { FreeLessonEditor, type EditorLesson } from "@/components/admin/free-lesson-editor";

export const dynamic = "force-dynamic";

const BLANK: EditorLesson = {
  title: "", slug: "", level: "BEGINNER", category: "GRAMMAR", topic: "", difficulty: "CORE", estimatedMinutes: 10, objective: "",
  imageUrl: "", status: "DRAFT", tags: [], prerequisites: [], requireAllAnswered: true, minScorePercent: 60, allowRetry: true,
  refBook: "", refLevel: "", refArea: "", refTopic: "", sections: [], exercises: [],
};

export default async function NewFreeLessonPage() {
  const options = await prisma.freeLesson.findMany({ select: { slug: true, title: true }, orderBy: { title: "asc" } });
  return (
    <div>
      <h1 className="text-2xl font-bold text-ink-900 dark:text-white">New Free Lesson</h1>
      <p className="mt-1 text-ink-500 dark:text-ink-400">Start as a draft, add content and exercises, then publish when it is ready.</p>
      <div className="mt-6">
        <FreeLessonEditor initial={BLANK} slugOptions={options} />
      </div>
    </div>
  );
}
