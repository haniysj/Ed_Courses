"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useI18n } from "@/components/i18n-provider";
import { fl } from "@/lib/free-lessons/i18n";
import { FL_LEVEL_INFO, levelSlug, type FlLevel } from "@/lib/free-lessons/constants";
import { ProgressBar } from "./progress-bar";
import { cn } from "@/lib/utils";

export function LevelCard({
  level, total, completed, selected, mode,
}: {
  level: FlLevel;
  total: number;
  completed: number;
  selected: boolean;
  /** "public" = visitor preview, "choose" = learner has no level yet, "browse" = learner with a level */
  mode: "public" | "choose" | "browse";
}) {
  const { locale } = useI18n();
  const t = fl(locale);
  const router = useRouter();
  const info = FL_LEVEL_INFO[level];
  const [busy, setBusy] = useState(false);

  async function choose() {
    setBusy(true);
    const res = await fetch("/api/free-lessons/level", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ level }),
    });
    setBusy(false);
    if (res.ok) router.push(`/free-lessons/level/${levelSlug(level)}`);
  }

  return (
    <div className={cn("card hover-lift flex h-full flex-col p-5", selected && "ring-2 ring-brand-500")}>
      <div className="flex items-start justify-between gap-2">
        <span aria-hidden className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-2xl dark:bg-brand-950">{info.icon}</span>
        <div className="flex flex-col items-end gap-1">
          <span className="badge bg-ink-100 text-ink-700 dark:bg-ink-800 dark:text-ink-200">CEFR {info.cefr}</span>
          {selected && <span className="badge bg-brand-600 text-white">✓ {t.yourLevel}</span>}
        </div>
      </div>
      <h3 className="mt-3 text-lg font-bold text-ink-900 dark:text-white">{info.name[locale]}</h3>
      <p className="mt-1 flex-1 text-sm text-ink-500 dark:text-ink-400">{info.description[locale]}</p>

      <div className="mt-4">
        <div className="flex items-center justify-between text-xs text-ink-500 dark:text-ink-400">
          <span>{total} {t.lessonsCount}</span>
          {mode !== "public" && <span>{completed}/{total} {t.completedCount}</span>}
        </div>
        {mode !== "public" && <ProgressBar value={completed} max={total} label={info.name[locale]} className="mt-1.5" />}
      </div>

      {mode === "choose" && (
        <button type="button" onClick={choose} disabled={busy} className="btn-primary btn-sm mt-4 w-full">
          {busy ? t.saving : t.chooseThis}
        </button>
      )}
      {mode === "browse" && (
        <Link href={`/free-lessons/level/${levelSlug(level)}`} className={cn("btn-sm mt-4 w-full", selected ? "btn-primary" : "btn-outline")}>
          {t.openLevel}
        </Link>
      )}
    </div>
  );
}

/** Lets a learner who already has a level switch to another one from its page. */
export function SetLevelButton({ level }: { level: FlLevel }) {
  const { locale } = useI18n();
  const t = fl(locale);
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  return (
    <button
      type="button" disabled={busy} className="btn-outline btn-sm"
      onClick={async () => {
        setBusy(true);
        await fetch("/api/free-lessons/level", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ level }) });
        setBusy(false);
        router.refresh();
      }}
    >
      {busy ? t.saving : t.chooseThis}
    </button>
  );
}
