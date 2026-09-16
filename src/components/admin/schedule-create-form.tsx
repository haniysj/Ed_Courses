"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function ScheduleCreateForm({ courses }: { courses: { id: string; title: string; maxLearners: number }[] }) {
  const router = useRouter();
  const [courseId, setCourseId] = useState(courses[0]?.id ?? "");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("17:00");
  const [endTime, setEndTime] = useState("19:00");
  const [capacity, setCapacity] = useState(courses[0]?.maxLearners ?? 15);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    const res = await fetch("/api/schedules", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ courseId, date, startTime, endTime, capacity, status: "OPEN" }),
    });
    setSubmitting(false);
    if (!res.ok) {
      const data = await res.json();
      setError(data.error ?? "Unable to create schedule");
      return;
    }
    setDate("");
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="card grid gap-4 p-5 sm:grid-cols-2 lg:grid-cols-5">
      <div className="lg:col-span-2">
        <label className="label">Course</label>
        <select className="input" value={courseId} onChange={(e) => setCourseId(e.target.value)}>
          {courses.map((c) => <option key={c.id} value={c.id}>{c.title}</option>)}
        </select>
      </div>
      <div>
        <label className="label">Date</label>
        <input type="date" required min={new Date().toISOString().slice(0, 10)} className="input" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
      <div>
        <label className="label">Start Time</label>
        <input type="time" required className="input" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
      </div>
      <div>
        <label className="label">End Time</label>
        <input type="time" required className="input" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
      </div>
      <div>
        <label className="label">Capacity</label>
        <input type="number" min={1} required className="input" value={capacity} onChange={(e) => setCapacity(Number(e.target.value))} />
      </div>
      <div className="flex items-end lg:col-span-5">
        <button type="submit" disabled={submitting} className="btn-primary">
          {submitting ? "Adding..." : "+ Add Schedule"}
        </button>
      </div>
      {error && <p className="lg:col-span-5 rounded-lg bg-red-50 p-3 text-sm text-red-700">{error}</p>}
    </form>
  );
}
