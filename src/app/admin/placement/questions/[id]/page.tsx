import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { PlacementQuestionForm } from "@/components/admin/placement-question-form";

export default async function EditPlacementQuestionPage({ params }: { params: { id: string } }) {
  const question = await prisma.placementQuestion.findUnique({ where: { id: params.id } });
  if (!question) notFound();

  return (
    <div>
      <h1 className="text-2xl font-bold text-ink-900 dark:text-white">Edit Question</h1>
      <p className="mt-1 text-ink-500 dark:text-ink-400">{question.topic}</p>
      <div className="mt-6 max-w-3xl">
        <PlacementQuestionForm
          questionId={question.id}
          initial={{
            cefrLevel: question.cefrLevel,
            skill: question.skill,
            difficulty: question.difficulty,
            topic: question.topic,
            prompt: question.prompt,
            options: JSON.parse(question.options),
            correctIndex: question.correctIndex,
            explanation: question.explanation ?? "",
            audioText: question.audioText ?? "",
            imageUrl: question.imageUrl ?? "",
            active: question.active,
          }}
        />
      </div>
    </div>
  );
}
