"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function InstructorRowActions({ id, active }: { id: string; active: boolean }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function toggleActive() {
    setLoading(true);
    setError(null);
    const res = await fetch(`/api/instructors/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ active: !active }),
    });
    setLoading(false);
    if (res.ok) router.refresh();
  }

  async function remove() {
    if (!confirm("Delete this instructor? This cannot be undone.")) return;
    setLoading(true);
    setError(null);
    const res = await fetch(`/api/instructors/${id}`, { method: "DELETE" });
    setLoading(false);
    if (res.ok) {
      router.refresh();
    } else {
      const data = await res.json();
      setError(data.error ?? "Unable to delete instructor");
    }
  }

  return (
    <div className="flex items-center justify-end gap-2">
      {error && <span className="text-xs text-red-600">{error}</span>}
      <Link href={`/admin/instructors/${id}`} className="btn-outline btn-sm">Edit</Link>
      <button onClick={toggleActive} disabled={loading} className="btn-secondary btn-sm">
        {active ? "Deactivate" : "Activate"}
      </button>
      <button onClick={remove} disabled={loading} className="btn-danger btn-sm">Delete</button>
    </div>
  );
}
