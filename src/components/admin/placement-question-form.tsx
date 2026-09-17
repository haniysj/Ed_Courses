"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CEFR_LEVELS, PLACEMENT_DIFFICULTIES, PLACEMENT_SKILLS } from "@/lib/enums";

type FormValues = {
  cefrLevel: string;
  skill: string;
  difficulty: string;
  topic: string;
  prompt: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  audioText: string;
  imageUrl: string;
  active: boolean;
};

const EMPTY: FormValues = {
  cefrLevel: "A1",
  skill: "GRAMMAR",
  difficulty: "EASY",
  topic: "",
  prompt: "",
  options: ["", "", "", ""],
  correctIndex: 0,
  explanation: "",
  audioText: "",
  imageUrl: "",
  active: true,
};

export function PlacementQuestionForm({ questionId, initial }: { questionId?: string; initial?: Partial<FormValues> }) {
  const router = useRouter();
  const [form, setForm] = useState<FormValues>({ ...EMPTY, ...initial });
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  function updateOption(i: number, value: string) {
    const next = [...form.options];
    next[i] = value;
    setForm({ ...form, options: next });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    const url = questionId ? `/api/admin/placement/questions/${questionId}` : "/api/admin/placement/questions";
    const method = questionId ? "PATCH" : "POST";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setSubmitting(false);

    if (!res.ok) {
      const data = await res.json();
      setError(data.error ?? "Unable to save question");
      return;
    }

    router.push("/admin/placement/questions");
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-5 p-6">
      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <label className="label">CEFR Level</label>
          <select className="input" value={form.cefrLevel} onChange={(e) => setForm({ ...form, cefrLevel: e.target.value })}>
            {CEFR_LEVELS.map((l) => <option key={l} value={l}>{l.replace("_", "-")}</option>)}
          </select>
        </div>
        <div>
          <label className="label">Skill</label>
          <select className="input" value={form.skill} onChange={(e) => setForm({ ...form, skill: e.target.value })}>
            {PLACEMENT_SKILLS.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div>
          <label className="label">Difficulty</label>
          <select className="input" value={form.difficulty} onChange={(e) => setForm({ ...form, difficulty: e.target.value })}>
            {PLACEMENT_DIFFICULTIES.map((d) => <option key={d} value={d}>{d.replace("_", " ")}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label className="label">Topic</label>
        <input required className="input" value={form.topic} onChange={(e) => setForm({ ...form, topic: e.target.value })} placeholder="e.g. Daily routines" />
      </div>

      {form.skill === "LISTENING" && (
        <div>
          <label className="label">Audio Text (read aloud to the learner)</label>
          <textarea rows={2} className="input" value={form.audioText} onChange={(e) => setForm({ ...form, audioText: e.target.value })} />
        </div>
      )}

      <div>
        <label className="label">Prompt / Question</label>
        <textarea required rows={3} className="input" value={form.prompt} onChange={(e) => setForm({ ...form, prompt: e.target.value })} />
      </div>

      <div>
        <label className="label">Image URL (optional)</label>
        <input className="input" value={form.imageUrl} onChange={(e) => setForm({ ...form, imageUrl: e.target.value })} placeholder="https://..." />
      </div>

      <div className="space-y-2">
        <label className="label">Options (select the correct one)</label>
        {form.options.map((opt, i) => (
          <div key={i} className="flex items-center gap-2">
            <input
              type="radio"
              name="correctIndex"
              checked={form.correctIndex === i}
              onChange={() => setForm({ ...form, correctIndex: i })}
              className="h-4 w-4"
            />
            <input className="input" value={opt} onChange={(e) => updateOption(i, e.target.value)} placeholder={`Option ${i + 1}`} />
          </div>
        ))}
      </div>

      <div>
        <label className="label">Explanation (optional)</label>
        <textarea rows={2} className="input" value={form.explanation} onChange={(e) => setForm({ ...form, explanation: e.target.value })} />
      </div>

      <label className="flex items-center gap-2 text-sm text-ink-700 dark:text-ink-200">
        <input type="checkbox" checked={form.active} onChange={(e) => setForm({ ...form, active: e.target.checked })} />
        Active (included in future test attempts)
      </label>

      {error && <p className="rounded-lg bg-red-50 p-3 text-sm text-red-700">{error}</p>}

      <div className="flex gap-3">
        <button type="submit" disabled={submitting} className="btn-primary">
          {submitting ? "Saving..." : questionId ? "Save Changes" : "Create Question"}
        </button>
        <a href="/admin/placement/questions" className="btn-outline">Cancel</a>
      </div>
    </form>
  );
}
