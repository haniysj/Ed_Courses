"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CEFR_LEVELS } from "@/lib/enums";

export function PlacementVersionCreateForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [timeLimitMinutes, setTimeLimitMinutes] = useState(30);
  const [questionCount, setQuestionCount] = useState(24);
  const [cefrRangeMin, setCefrRangeMin] = useState("PRE_A1");
  const [cefrRangeMax, setCefrRangeMax] = useState("C1");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    const res = await fetch("/api/admin/placement/versions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, timeLimitMinutes, questionCount, cefrRangeMin, cefrRangeMax, active: true }),
    });
    setSubmitting(false);
    if (!res.ok) {
      const data = await res.json();
      setError(data.error ?? "Unable to create version");
      return;
    }
    setName("");
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="card grid gap-4 p-5 sm:grid-cols-2 lg:grid-cols-6">
      <div>
        <label className="label">Name</label>
        <input required className="input" placeholder="F" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label className="label">Time Limit (min)</label>
        <input type="number" min={5} required className="input" value={timeLimitMinutes} onChange={(e) => setTimeLimitMinutes(Number(e.target.value))} />
      </div>
      <div>
        <label className="label">Questions</label>
        <input type="number" min={6} max={60} required className="input" value={questionCount} onChange={(e) => setQuestionCount(Number(e.target.value))} />
      </div>
      <div>
        <label className="label">Min CEFR</label>
        <select className="input" value={cefrRangeMin} onChange={(e) => setCefrRangeMin(e.target.value)}>
          {CEFR_LEVELS.map((l) => <option key={l} value={l}>{l.replace("_", "-")}</option>)}
        </select>
      </div>
      <div>
        <label className="label">Max CEFR</label>
        <select className="input" value={cefrRangeMax} onChange={(e) => setCefrRangeMax(e.target.value)}>
          {CEFR_LEVELS.map((l) => <option key={l} value={l}>{l.replace("_", "-")}</option>)}
        </select>
      </div>
      <div className="flex items-end">
        <button type="submit" disabled={submitting} className="btn-primary w-full">
          {submitting ? "Adding..." : "+ Add Version"}
        </button>
      </div>
      {error && <p className="lg:col-span-6 rounded-lg bg-red-50 p-3 text-sm text-red-700">{error}</p>}
    </form>
  );
}

export function PlacementVersionRowActions({ id, active }: { id: string; active: boolean }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function toggleActive() {
    setLoading(true);
    await fetch(`/api/admin/placement/versions/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ active: !active }),
    });
    setLoading(false);
    router.refresh();
  }

  async function remove() {
    if (!confirm("Delete this version?")) return;
    setLoading(true);
    setError(null);
    const res = await fetch(`/api/admin/placement/versions/${id}`, { method: "DELETE" });
    setLoading(false);
    if (res.ok) {
      router.refresh();
    } else {
      const data = await res.json();
      setError(data.error ?? "Unable to delete version");
    }
  }

  return (
    <div className="flex items-center justify-end gap-2">
      {error && <span className="text-xs text-red-600">{error}</span>}
      <button onClick={toggleActive} disabled={loading} className="btn-secondary btn-sm">
        {active ? "Deactivate" : "Activate"}
      </button>
      <button onClick={remove} disabled={loading} className="btn-danger btn-sm">
        Delete
      </button>
    </div>
  );
}
