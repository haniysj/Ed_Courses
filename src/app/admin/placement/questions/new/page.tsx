import { PlacementQuestionForm } from "@/components/admin/placement-question-form";

export default function NewPlacementQuestionPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-ink-900 dark:text-white">Add Question</h1>
      <p className="mt-1 text-ink-500 dark:text-ink-400">Add a new question to the placement test bank.</p>
      <div className="mt-6 max-w-3xl">
        <PlacementQuestionForm />
      </div>
    </div>
  );
}
