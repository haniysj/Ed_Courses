"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function ScheduleRowActions({ id, status }: { id: string; status: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function cancel() {
    if (!confirm("Cancel this session? Learners with bookings will need to be notified.")) return;
    setLoading(true);
    const res = await fetch(`/api/schedules/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: "CANCELLED" }),
    });
    setLoading(false);
    if (res.ok) router.refresh();
  }

  async function remove() {
    if (!confirm("Delete this schedule?")) return;
    setLoading(true);
    setError(null);
    const res = await fetch(`/api/schedules/${id}`, { method: "DELETE" });
    setLoading(false);
    if (res.ok) {
      router.refresh();
    } else {
      const data = await res.json();
      setError(data.error ?? "Unable to delete schedule");
    }
  }

  return (
    <div className="flex items-center justify-end gap-2">
      {error && <span className="text-xs text-red-600">{error}</span>}
      {status !== "CANCELLED" && (
        <button onClick={cancel} disabled={loading} className="btn-outline btn-sm">Cancel</button>
      )}
      <button onClick={remove} disabled={loading} className="btn-danger btn-sm">Delete</button>
    </div>
  );
}
