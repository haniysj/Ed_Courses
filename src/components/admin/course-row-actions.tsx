"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function CourseRowActions({ id, status }: { id: string; status: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function setStatus(newStatus: string) {
    setLoading(true);
    setError(null);
    const res = await fetch(`/api/courses/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: newStatus }),
    });
    setLoading(false);
    if (res.ok) router.refresh();
  }

  async function duplicate() {
    setLoading(true);
    setError(null);
    const res = await fetch(`/api/courses/${id}/duplicate`, { method: "POST" });
    setLoading(false);
    if (res.ok) router.refresh();
  }

  async function remove() {
    if (!confirm("Delete this course? This cannot be undone.")) return;
    setLoading(true);
    setError(null);
    const res = await fetch(`/api/courses/${id}`, { method: "DELETE" });
    setLoading(false);
    if (res.ok) {
      router.refresh();
    } else {
      const data = await res.json();
      setError(data.error ?? "Unable to delete course");
    }
  }

  return (
    <div className="flex flex-wrap items-center justify-end gap-2">
      {error && <span className="w-full text-right text-xs text-red-600">{error}</span>}
      <Link href={`/admin/courses/${id}`} className="btn-outline btn-sm">Edit</Link>
      <button onClick={duplicate} disabled={loading} className="btn-secondary btn-sm">Duplicate</button>
      {status === "PUBLISHED" ? (
        <button onClick={() => setStatus("INACTIVE")} disabled={loading} className="btn-secondary btn-sm">Unpublish</button>
      ) : (
        <button onClick={() => setStatus("PUBLISHED")} disabled={loading} className="btn-secondary btn-sm">Publish</button>
      )}
      {status !== "ARCHIVED" && (
        <button onClick={() => setStatus("ARCHIVED")} disabled={loading} className="btn-outline btn-sm">Archive</button>
      )}
      <button onClick={remove} disabled={loading} className="btn-danger btn-sm">Delete</button>
    </div>
  );
}
