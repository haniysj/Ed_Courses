import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { CEFR_LEVELS, PLACEMENT_SKILLS } from "@/lib/enums";
import { PlacementQuestionRowActions } from "@/components/admin/placement-question-row-actions";

export const dynamic = "force-dynamic";

export default async function AdminPlacementQuestionsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const { cefrLevel, skill } = searchParams;

  const questions = await prisma.placementQuestion.findMany({
    where: { cefrLevel: cefrLevel || undefined, skill: skill || undefined },
    orderBy: [{ cefrLevel: "asc" }, { skill: "asc" }],
  });

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-ink-900">Question Bank</h1>
          <p className="mt-1 text-ink-500">{questions.length} questions in the bank.</p>
        </div>
        <Link href="/admin/placement/questions/new" className="btn-primary">
          + Add Question
        </Link>
      </div>

      <form method="get" className="card mt-6 grid gap-4 p-5 sm:grid-cols-3">
        <div>
          <label className="label">CEFR Level</label>
          <select name="cefrLevel" defaultValue={cefrLevel ?? ""} className="input">
            <option value="">All Levels</option>
            {CEFR_LEVELS.map((l) => <option key={l} value={l}>{l.replace("_", "-")}</option>)}
          </select>
        </div>
        <div>
          <label className="label">Skill</label>
          <select name="skill" defaultValue={skill ?? ""} className="input">
            <option value="">All Skills</option>
            {PLACEMENT_SKILLS.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div className="flex items-end gap-2">
          <button type="submit" className="btn-primary w-full">Filter</button>
          <a href="/admin/placement/questions" className="btn-outline w-full text-center">Reset</a>
        </div>
      </form>

      <div className="card mt-6 overflow-x-auto">
        <table className="min-w-full divide-y divide-ink-100 text-sm">
          <thead className="bg-ink-50 text-left text-xs uppercase text-ink-500">
            <tr>
              <th className="px-4 py-3">Prompt</th>
              <th className="px-4 py-3">Level</th>
              <th className="px-4 py-3">Skill</th>
              <th className="px-4 py-3">Difficulty</th>
              <th className="px-4 py-3">Topic</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink-100">
            {questions.map((q) => (
              <tr key={q.id}>
                <td className="max-w-xs truncate px-4 py-3 text-ink-800">{q.prompt}</td>
                <td className="px-4 py-3 text-ink-600">{q.cefrLevel.replace("_", "-")}</td>
                <td className="px-4 py-3 text-ink-600">{q.skill}</td>
                <td className="px-4 py-3 text-ink-600">{q.difficulty.replace("_", " ")}</td>
                <td className="px-4 py-3 text-ink-600">{q.topic}</td>
                <td className="px-4 py-3">
                  <span className={`badge ${q.active ? "bg-green-100 text-green-700" : "bg-ink-100 text-ink-500"}`}>
                    {q.active ? "Active" : "Inactive"}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <PlacementQuestionRowActions id={q.id} active={q.active} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {questions.length === 0 && <p className="p-6 text-center text-ink-400">No questions match this filter.</p>}
      </div>
    </div>
  );
}
