"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function FreeLessonRowActions({ id, slug, status }: { id: string; slug: string; status: string }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function call(url: string, init: RequestInit) {
    setBusy(true);
    setError(null);
    const res = await fetch(url, { ...init, headers: { "Content-Type": "application/json" } });
    setBusy(false);
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setError(data.error ?? "Action failed");
      return;
    }
    router.refresh();
  }

  return (
    <div className="flex flex-wrap items-center justify-end gap-1.5">
      <button type="button" disabled={busy} aria-label="Move up" title="Move up" className="btn-outline btn-sm" onClick={() => call(`/api/admin/free-lessons/${id}`, { method: "PATCH", body: JSON.stringify({ action: "move", direction: "up" }) })}>▲</button>
      <button type="button" disabled={busy} aria-label="Move down" title="Move down" className="btn-outline btn-sm" onClick={() => call(`/api/admin/free-lessons/${id}`, { method: "PATCH", body: JSON.stringify({ action: "move", direction: "down" }) })}>▼</button>
      <Link href={`/admin/free-lessons/${id}`} className="btn-outline btn-sm">Edit</Link>
      <Link href={`/free-lessons/lesson/${slug}`} target="_blank" className="btn-outline btn-sm">Preview</Link>
      <button
        type="button" disabled={busy} className="btn-secondary btn-sm"
        onClick={() => call(`/api/admin/free-lessons/${id}`, { method: "PATCH", body: JSON.stringify({ status: status === "PUBLISHED" ? "UNPUBLISHED" : "PUBLISHED" }) })}
      >
        {status === "PUBLISHED" ? "Unpublish" : "Publish"}
      </button>
      <button type="button" disabled={busy} className="btn-outline btn-sm" onClick={() => call(`/api/admin/free-lessons/${id}/duplicate`, { method: "POST" })}>Duplicate</button>
      <button
        type="button" disabled={busy} className="btn-danger btn-sm"
        onClick={() => { if (confirm("Delete this lesson? Learner progress for it will be deleted too.")) call(`/api/admin/free-lessons/${id}`, { method: "DELETE" }); }}
      >
        Delete
      </button>
      {error && <p className="w-full text-right text-xs text-red-600">{error}</p>}
    </div>
  );
}
