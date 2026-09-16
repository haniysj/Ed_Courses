"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function PlacementQuestionRowActions({ id, active }: { id: string; active: boolean }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function toggleActive() {
    setLoading(true);
    await fetch(`/api/admin/placement/questions/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ active: !active }),
    });
    setLoading(false);
    router.refresh();
  }

  async function remove() {
    if (!confirm("Delete this question?")) return;
    setLoading(true);
    await fetch(`/api/admin/placement/questions/${id}`, { method: "DELETE" });
    setLoading(false);
    router.refresh();
  }

  return (
    <div className="flex items-center justify-end gap-2">
      <Link href={`/admin/placement/questions/${id}`} className="btn-outline btn-sm">
        Edit
      </Link>
      <button onClick={toggleActive} disabled={loading} className="btn-secondary btn-sm">
        {active ? "Deactivate" : "Activate"}
      </button>
      <button onClick={remove} disabled={loading} className="btn-danger btn-sm">
        Delete
      </button>
    </div>
  );
}
