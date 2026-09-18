"use client";

import { Fragment, useId, useState } from "react";
import { useI18n } from "@/components/i18n-provider";
import { fl } from "@/lib/free-lessons/i18n";
import type { PublicExercise } from "@/lib/free-lessons/grade";
import { cn } from "@/lib/utils";
import { Rich } from "./rich";

export type CheckResponse = {
  correct: boolean;
  explanation: string | null;
  correctText: string | null;
  attempts?: number;
  progress?: { status: string; scorePercent: number; answered: number; total: number; blocker: "read" | "answer" | "score" | null };
  justCompleted?: boolean;
  preview?: boolean;
};

export type InitialResult = {
  answer: unknown;
  correct: boolean;
  attempts: number;
  explanation: string | null;
  correctText: string | null;
};

function initialAnswer(ex: PublicExercise): unknown {
  switch (ex.type) {
    case "MULTIPLE_SELECT": return [] as number[];
    case "FILL_BLANK": return Array.from({ length: ex.blanks ?? 1 }, () => "");
    case "SHORT_ANSWER": return "";
    case "ORDERING": return [...(ex.items ?? [])];
    case "MATCHING": return (ex.lefts ?? []).map(() => "");
    default: return null;
  }
}

function ready(ex: PublicExercise, a: unknown): boolean {
  switch (ex.type) {
    case "MULTIPLE_CHOICE":
    case "IDENTIFY_MISTAKE": return typeof a === "number";
    case "MULTIPLE_SELECT": return Array.isArray(a) && a.length > 0;
    case "TRUE_FALSE": return typeof a === "boolean";
    case "FILL_BLANK":
    case "MATCHING": return Array.isArray(a) && a.every((x) => typeof x === "string" && x.trim().length > 0);
    case "SHORT_ANSWER": return typeof a === "string" && a.trim().length > 0;
    case "ORDERING": return Array.isArray(a) && a.length > 1;
    default: return false;
  }
}

export function ExerciseCard({
  ex, index, slug, preview, allowRetry, initial, onChecked,
}: {
  ex: PublicExercise;
  index: number;
  slug: string;
  preview: boolean;
  allowRetry: boolean;
  initial?: InitialResult;
  onChecked: (exerciseId: string, res: CheckResponse) => void;
}) {
  const { locale } = useI18n();
  const t = fl(locale);
  const uid = useId();
  const [answer, setAnswer] = useState<unknown>(initial ? initial.answer : initialAnswer(ex));
  const [feedback, setFeedback] = useState<CheckResponse | null>(
    initial ? { correct: initial.correct, explanation: initial.explanation, correctText: initial.correctText, attempts: initial.attempts } : null
  );
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const locked = !!feedback && (feedback.correct || (!allowRetry && !preview));
  const canCheck = ready(ex, answer) && !busy && !locked;

  function change(next: unknown) {
    if (locked) return;
    setAnswer(next);
    if (feedback) setFeedback(null); // editing after a wrong answer clears the old feedback
  }

  async function check() {
    setBusy(true);
    setError(null);
    try {
      const res = await fetch(`/api/free-lessons/${slug}/check`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ exerciseId: ex.id, answer }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(res.status === 401 ? t.loginNeeded : data.error ?? t.errorGeneric);
        return;
      }
      setFeedback(data);
      onChecked(ex.id, data);
    } catch {
      setError(t.errorGeneric);
    } finally {
      setBusy(false);
    }
  }

  const arr = Array.isArray(answer) ? answer : [];

  return (
    <li
      className={cn(
        "rounded-xl border bg-white p-4 shadow-card dark:bg-ink-900",
        feedback?.correct ? "border-emerald-300 dark:border-emerald-800" : feedback ? "border-amber-300 dark:border-amber-800" : "border-ink-100 dark:border-ink-800"
      )}
    >
      <div className="flex items-start gap-3">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-50 text-sm font-bold text-brand-700 dark:bg-brand-950 dark:text-brand-300">
          {feedback?.correct ? <span aria-label="Correct">✓</span> : index + 1}
        </span>
        <div className="min-w-0 flex-1 space-y-3" dir="ltr" lang="en">
          {ex.context && (
            <blockquote className="whitespace-pre-line rounded-lg border-s-4 border-brand-300 bg-ink-50 p-3 text-sm text-ink-700 dark:bg-ink-800 dark:text-ink-200">
              {ex.context}
            </blockquote>
          )}

          {ex.type === "FILL_BLANK" ? (
            <FillBlank ex={ex} values={arr as string[]} disabled={locked} onChange={change} />
          ) : (
            <p id={`${uid}-q`} className="font-medium text-ink-900 dark:text-white"><Rich text={ex.prompt} /></p>
          )}

          {ex.type === "MULTIPLE_CHOICE" && (
            <div role="radiogroup" aria-labelledby={`${uid}-q`} className="space-y-2">
              {ex.options!.map((o, i) => (
                <label key={i} className={optionClass(answer === i, locked)}>
                  <input type="radio" name={uid} className="h-4 w-4 accent-brand-600" checked={answer === i} disabled={locked} onChange={() => change(i)} />
                  <span>{o}</span>
                </label>
              ))}
            </div>
          )}

          {ex.type === "MULTIPLE_SELECT" && (
            <div role="group" aria-labelledby={`${uid}-q`} className="space-y-2">
              {ex.options!.map((o, i) => {
                const on = (arr as number[]).includes(i);
                return (
                  <label key={i} className={optionClass(on, locked)}>
                    <input
                      type="checkbox" className="h-4 w-4 accent-brand-600" checked={on} disabled={locked}
                      onChange={() => change(on ? (arr as number[]).filter((x) => x !== i) : [...(arr as number[]), i])}
                    />
                    <span>{o}</span>
                  </label>
                );
              })}
            </div>
          )}

          {ex.type === "TRUE_FALSE" && (
            <div role="radiogroup" aria-labelledby={`${uid}-q`} className="flex gap-2">
              {[true, false].map((v) => (
                <label key={String(v)} className={cn(optionClass(answer === v, locked), "flex-1 justify-center")}>
                  <input type="radio" name={uid} className="sr-only" checked={answer === v} disabled={locked} onChange={() => change(v)} />
                  <span className="font-semibold">{v ? t.trueLabel : t.falseLabel}</span>
                </label>
              ))}
            </div>
          )}

          {ex.type === "SHORT_ANSWER" && (
            <div>
              <input
                className="input" value={(answer as string) ?? ""} disabled={locked} autoComplete="off" spellCheck={false}
                aria-labelledby={`${uid}-q`} placeholder={t.yourAnswer}
                onChange={(e) => change(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter" && canCheck) check(); }}
              />
              {ex.hint && <p className="mt-1 text-xs text-ink-400">Hint: {ex.hint}</p>}
            </div>
          )}

          {ex.type === "ORDERING" && (
            <OrderingInput items={arr as string[]} unit={ex.unit ?? "sentence"} disabled={locked} onChange={change} labelledBy={`${uid}-q`} />
          )}

          {ex.type === "MATCHING" && (
            <div className="space-y-2">
              {ex.lefts!.map((l, i) => (
                <div key={i} className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:gap-2">
                  <span className="flex min-w-0 items-center gap-2 rounded-lg bg-ink-50 px-3 py-2 text-sm font-medium dark:bg-ink-800 sm:flex-1">
                    {l.visual && <span aria-hidden className="text-xl">{l.visual}</span>}
                    <span id={`${uid}-l${i}`}>{l.text}</span>
                  </span>
                  <span aria-hidden className="hidden text-ink-300 sm:inline">→</span>
                  <select
                    className="input min-w-0 sm:flex-1" aria-labelledby={`${uid}-l${i}`} disabled={locked}
                    value={(arr as string[])[i] ?? ""}
                    onChange={(e) => { const next = [...(arr as string[])]; next[i] = e.target.value; change(next); }}
                  >
                    <option value="">{t.selectPlaceholder}</option>
                    {ex.rights!.map((r) => <option key={r} value={r}>{r}</option>)}
                  </select>
                </div>
              ))}
            </div>
          )}

          {ex.type === "IDENTIFY_MISTAKE" && (
            <div role="radiogroup" aria-labelledby={`${uid}-q`} className="flex flex-wrap gap-2">
              {ex.segments!.map((s, i) => (
                <label key={i} className={optionClass(answer === i, locked)}>
                  <input type="radio" name={uid} className="sr-only" checked={answer === i} disabled={locked} onChange={() => change(i)} />
                  <span>{s}</span>
                </label>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="mt-4 ps-10">
        {!locked && (
          <button type="button" className="btn-primary btn-sm" disabled={!canCheck} onClick={check}>
            {busy ? t.checking : feedback ? t.tryAgain : t.check}
          </button>
        )}
        {error && <p role="alert" className="mt-2 text-sm text-red-600">{error}</p>}

        <div aria-live="polite">
          {feedback && (
            <div
              className={cn(
                "mt-3 rounded-lg border p-3 text-sm",
                feedback.correct
                  ? "border-emerald-200 bg-emerald-50 text-emerald-900 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-100"
                  : "border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-100"
              )}
            >
              <p className="font-bold">{feedback.correct ? `✓ ${t.correct}` : `✗ ${t.notQuite}`}</p>
              {feedback.explanation && (
                <p className="mt-1"><span className="font-semibold">{t.why} </span><span dir="ltr" lang="en" className="inline-block text-left">{feedback.explanation}</span></p>
              )}
              {!feedback.correct && feedback.correctText && (
                <p className="mt-1"><span className="font-semibold">{t.answerIs}: </span><span dir="ltr" lang="en" className="inline-block text-left">{feedback.correctText}</span></p>
              )}
            </div>
          )}
        </div>
      </div>
    </li>
  );
}

function optionClass(selected: boolean, disabled: boolean) {
  return cn(
    "flex cursor-pointer items-center gap-3 rounded-lg border px-3 py-2 text-sm transition-colors focus-within:ring-2 focus-within:ring-brand-500",
    selected
      ? "border-brand-500 bg-brand-50 text-brand-900 dark:border-brand-400 dark:bg-brand-950 dark:text-brand-100"
      : "border-ink-200 bg-white hover:bg-ink-50 dark:border-ink-700 dark:bg-ink-900 dark:hover:bg-ink-800",
    disabled && "cursor-default opacity-80"
  );
}

function FillBlank({ ex, values, disabled, onChange }: { ex: PublicExercise; values: string[]; disabled: boolean; onChange: (v: string[]) => void }) {
  const parts = ex.prompt.split("___");
  const setAt = (i: number, v: string) => { const n = [...values]; n[i] = v; onChange(n); };
  const firstEmpty = values.findIndex((v) => !v.trim());
  return (
    <div className="space-y-2">
      <p className="font-medium leading-loose text-ink-900 dark:text-white">
        {parts.map((p, i) => (
          <Fragment key={i}>
            {p}
            {i < parts.length - 1 && (
              <input
                aria-label={`Blank ${i + 1}`} value={values[i] ?? ""} disabled={disabled} autoComplete="off" spellCheck={false}
                onChange={(e) => setAt(i, e.target.value)}
                className="mx-1 inline-block w-28 border-b-2 border-brand-400 bg-brand-50/50 px-1 py-0.5 text-center text-brand-800 focus:border-brand-600 focus:outline-none dark:bg-brand-950/40 dark:text-brand-100"
              />
            )}
          </Fragment>
        ))}
      </p>
      {ex.wordBank && (
        <div className="flex flex-wrap gap-1.5" aria-label="Word bank">
          {ex.wordBank.map((w) => (
            <button
              key={w} type="button" disabled={disabled || firstEmpty === -1}
              onClick={() => setAt(firstEmpty, w)}
              className="rounded-full border border-ink-200 px-3 py-1 text-xs font-medium hover:bg-ink-50 disabled:opacity-50 dark:border-ink-700 dark:hover:bg-ink-800"
            >
              {w}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/** Drag-and-drop ordering with arrow buttons as the accessible / touch alternative. */
function OrderingInput({ items, unit, disabled, onChange, labelledBy }: { items: string[]; unit: "word" | "sentence" | "paragraph"; disabled: boolean; onChange: (v: string[]) => void; labelledBy: string }) {
  const { locale } = useI18n();
  const t = fl(locale);
  const [dragFrom, setDragFrom] = useState<number | null>(null);
  const [over, setOver] = useState<number | null>(null);
  const horizontal = unit === "word";

  function move(from: number, to: number) {
    if (to < 0 || to >= items.length || from === to) return;
    const next = [...items];
    const [x] = next.splice(from, 1);
    next.splice(to, 0, x);
    onChange(next);
  }

  return (
    <div>
      <ul aria-labelledby={labelledBy} className={horizontal ? "flex flex-wrap gap-2" : "space-y-2"}>
        {items.map((it, i) => (
          <li
            key={`${it}-${i}`}
            draggable={!disabled}
            onDragStart={() => setDragFrom(i)}
            onDragOver={(e) => { e.preventDefault(); setOver(i); }}
            onDragEnd={() => { setDragFrom(null); setOver(null); }}
            onDrop={(e) => { e.preventDefault(); if (dragFrom !== null) move(dragFrom, i); setDragFrom(null); setOver(null); }}
            className={cn(
              "flex items-center gap-2 rounded-lg border bg-white px-2 py-1.5 text-sm dark:bg-ink-900",
              over === i && dragFrom !== null ? "border-brand-500 ring-1 ring-brand-500" : "border-ink-200 dark:border-ink-700",
              !disabled && "cursor-grab active:cursor-grabbing"
            )}
          >
            {!horizontal && <span className="w-5 text-center text-xs font-bold text-ink-400">{i + 1}</span>}
            <span aria-hidden className="text-ink-300">⠿</span>
            <span className="flex-1">{it}</span>
            {!disabled && (
              <span className="flex gap-1">
                <button type="button" onClick={() => move(i, i - 1)} disabled={i === 0} aria-label={`${horizontal ? t.moveEarlier : t.moveUp}: ${it}`} className="h-6 w-6 rounded border border-ink-200 text-xs hover:bg-ink-50 disabled:opacity-30 dark:border-ink-700 dark:hover:bg-ink-800">
                  {horizontal ? "◀" : "▲"}
                </button>
                <button type="button" onClick={() => move(i, i + 1)} disabled={i === items.length - 1} aria-label={`${horizontal ? t.moveLater : t.moveDown}: ${it}`} className="h-6 w-6 rounded border border-ink-200 text-xs hover:bg-ink-50 disabled:opacity-30 dark:border-ink-700 dark:hover:bg-ink-800">
                  {horizontal ? "▶" : "▼"}
                </button>
              </span>
            )}
          </li>
        ))}
      </ul>
      {!disabled && <p className="mt-1.5 text-xs text-ink-400">{t.dragHint}</p>}
    </div>
  );
}
