"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  FL_CATEGORIES, FL_CATEGORY_INFO, FL_DIFFICULTIES, FL_DIFFICULTY_LABELS, FL_EXERCISE_TYPES, FL_EXERCISE_TYPE_LABELS,
  FL_LEVELS, FL_LEVEL_INFO, FL_STATUSES,
} from "@/lib/free-lessons/constants";

// ------------------------------------------------------------------ types
export type EditorLesson = {
  title: string; slug: string; level: string; category: string; topic: string; difficulty: string; estimatedMinutes: number;
  objective: string; imageUrl: string; status: string; tags: string[]; prerequisites: string[];
  requireAllAnswered: boolean; minScorePercent: number; allowRetry: boolean;
  refBook: string; refLevel: string; refArea: string; refTopic: string;
  sections: any[];
  exercises: { id: string; type: string; prompt: string; context: string; explanation: string; points: number; data: any }[];
};

type Block = { k: string; d: Record<string, any> };
type Ex = {
  k: string; id?: string; type: string; prompt: string; context: string; explanation: string; points: number;
  optionsText: string; correctIndex: number; correctSet: number[]; tfCorrect: boolean;
  fillText: string; wordBank: string; accepted: string; hint: string; caseSensitive: boolean; strictPunct: boolean;
  itemsText: string; unit: string; pairsText: string; segmentsText: string; fix: string;
};

const uid = () => Math.random().toString(36).slice(2, 9);
const lines = (s: string) => s.split("\n").map((x) => x.trim()).filter(Boolean);
const bar = (s: string) => s.split("|").map((x) => x.trim());
const opt = (s: string) => (s.trim() ? s.trim() : undefined);

// ------------------------------------------------------------------ section <-> form conversion
const BLOCK_TYPES: { type: string; label: string }[] = [
  { type: "text", label: "Text" }, { type: "list", label: "Bullet list" }, { type: "structure", label: "Structure / formula" },
  { type: "examples", label: "Examples" }, { type: "vocab", label: "Vocabulary cards" }, { type: "passage", label: "Reading passage" },
  { type: "annotated", label: "Annotated paragraph" }, { type: "compare", label: "Right / wrong" }, { type: "tip", label: "Tip box" },
];

const EMPTY_WORD = { word: "", pos: "noun", meaning: "", meaningAr: "", pronunciation: "", example: "", col: "", correct: "", incorrect: "", note: "", visual: "", imageUrl: "" };

function newBlock(type: string): Block {
  const base: Record<string, any> = { type, title: "" };
  if (type === "text" || type === "tip") base.body = "";
  if (type === "list" || type === "examples" || type === "annotated" || type === "compare") base.text = "";
  if (type === "structure") Object.assign(base, { formula: "", note: "" });
  if (type === "passage") Object.assign(base, { text: "", caption: "" });
  if (type === "vocab") base.words = [{ ...EMPTY_WORD }];
  return { k: uid(), d: base };
}

function sectionToBlock(s: any): Block {
  const d: Record<string, any> = { type: s.type, title: s.title ?? "" };
  switch (s.type) {
    case "text": case "tip": d.body = s.body ?? ""; break;
    case "list": d.text = (s.items ?? []).join("\n"); break;
    case "structure": d.formula = s.formula ?? ""; d.note = s.note ?? ""; break;
    case "examples":
      d.text = (s.groups ?? []).map((g: any) => [g.label ? `# ${g.label}` : null, ...g.items.map((i: any) => (i.note ? `${i.text} | ${i.note}` : i.text))].filter(Boolean).join("\n")).join("\n");
      break;
    case "vocab":
      d.words = (s.words ?? []).map((w: any) => ({ ...EMPTY_WORD, ...w, col: (w.collocations ?? []).join(", "), meaningAr: w.meaningAr ?? "", pronunciation: w.pronunciation ?? "", correct: w.correct ?? "", incorrect: w.incorrect ?? "", note: w.note ?? "", visual: w.visual ?? "", imageUrl: w.imageUrl ?? "" }));
      break;
    case "passage": d.text = s.text ?? ""; d.caption = s.caption ?? ""; break;
    case "annotated": d.text = (s.parts ?? []).map((p: any) => `${p.label} | ${p.text}`).join("\n"); break;
    case "compare": d.text = (s.rows ?? []).map((r: any) => [r.wrong, r.right, r.why].filter((x) => x !== undefined).join(" | ")).join("\n"); break;
  }
  return { k: uid(), d };
}

function blockToSection(b: Block): any {
  const d = b.d;
  switch (d.type) {
    case "text": return { type: "text", title: opt(d.title), body: d.body };
    case "tip": return { type: "tip", title: opt(d.title), body: d.body };
    case "list": return { type: "list", title: d.title, items: lines(d.text) };
    case "structure": return { type: "structure", title: d.title, formula: d.formula, note: opt(d.note) };
    case "examples": {
      const groups: { label?: string; items: { text: string; note?: string }[] }[] = [];
      for (const line of lines(d.text)) {
        if (line.startsWith("#")) groups.push({ label: line.replace(/^#+\s*/, ""), items: [] });
        else {
          if (groups.length === 0) groups.push({ items: [] });
          const [text, note] = bar(line);
          groups[groups.length - 1].items.push({ text, note: opt(note ?? "") });
        }
      }
      return { type: "examples", title: d.title, groups: groups.filter((g) => g.items.length > 0) };
    }
    case "vocab":
      return {
        type: "vocab", title: opt(d.title),
        words: d.words.map((w: any) => ({
          word: w.word, pos: w.pos, meaning: w.meaning, meaningAr: opt(w.meaningAr), pronunciation: opt(w.pronunciation), example: w.example,
          collocations: w.col.split(",").map((x: string) => x.trim()).filter(Boolean), correct: opt(w.correct), incorrect: opt(w.incorrect),
          note: opt(w.note), visual: opt(w.visual), imageUrl: opt(w.imageUrl),
        })),
      };
    case "passage": return { type: "passage", title: d.title, text: d.text, caption: opt(d.caption) };
    case "annotated": return { type: "annotated", title: d.title, parts: lines(d.text).map((l) => { const [label, ...rest] = bar(l); return { label, text: rest.join(" | ") }; }) };
    case "compare": return { type: "compare", title: d.title, rows: lines(d.text).map((l) => { const [wrong, right, why] = bar(l); return { wrong, right, why: opt(why ?? "") }; }) };
    default: return d;
  }
}

// ------------------------------------------------------------------ exercise <-> form conversion
function newEx(type = "MULTIPLE_CHOICE"): Ex {
  return {
    k: uid(), type, prompt: "", context: "", explanation: "", points: 1,
    optionsText: "", correctIndex: 0, correctSet: [], tfCorrect: true,
    fillText: "", wordBank: "", accepted: "", hint: "", caseSensitive: false, strictPunct: false,
    itemsText: "", unit: "sentence", pairsText: "", segmentsText: "", fix: "",
  };
}

function exFromServer(e: EditorLesson["exercises"][number]): Ex {
  const x = newEx(e.type);
  Object.assign(x, { id: e.id, prompt: e.prompt, context: e.context ?? "", explanation: e.explanation ?? "", points: e.points });
  const d = e.data ?? {};
  switch (e.type) {
    case "MULTIPLE_CHOICE": x.optionsText = (d.options ?? []).join("\n"); x.correctIndex = d.correct ?? 0; break;
    case "MULTIPLE_SELECT": x.optionsText = (d.options ?? []).join("\n"); x.correctSet = d.correct ?? []; break;
    case "TRUE_FALSE": x.tfCorrect = !!d.correct; break;
    case "FILL_BLANK": x.fillText = (d.answers ?? []).map((a: string[]) => a.join(" | ")).join("\n"); x.wordBank = (d.wordBank ?? []).join(", "); break;
    case "SHORT_ANSWER": x.accepted = (d.accepted ?? []).join("\n"); x.hint = d.hint ?? ""; x.caseSensitive = !!d.caseSensitive; x.strictPunct = !!d.strictPunctuation; break;
    case "ORDERING": x.itemsText = (d.items ?? []).join("\n"); x.unit = d.unit ?? "sentence"; break;
    case "MATCHING": x.pairsText = (d.pairs ?? []).map((p: any) => [p.left, p.right, p.visual].filter((v) => v !== undefined && v !== null).join(" | ")).join("\n"); break;
    case "IDENTIFY_MISTAKE": x.segmentsText = (d.segments ?? []).join("\n"); x.correctIndex = d.correct ?? 0; x.fix = d.fix ?? ""; break;
  }
  return x;
}

function exToPayload(x: Ex) {
  let data: any = {};
  switch (x.type) {
    case "MULTIPLE_CHOICE": data = { options: lines(x.optionsText), correct: x.correctIndex }; break;
    case "MULTIPLE_SELECT": data = { options: lines(x.optionsText), correct: [...x.correctSet].sort((a, b) => a - b) }; break;
    case "TRUE_FALSE": data = { correct: x.tfCorrect }; break;
    case "FILL_BLANK": data = { answers: lines(x.fillText).map((l) => bar(l).filter(Boolean)), wordBank: x.wordBank.trim() ? x.wordBank.split(",").map((w) => w.trim()).filter(Boolean) : undefined }; break;
    case "SHORT_ANSWER": data = { accepted: lines(x.accepted), hint: opt(x.hint), caseSensitive: x.caseSensitive || undefined, strictPunctuation: x.strictPunct || undefined }; break;
    case "ORDERING": data = { items: lines(x.itemsText), unit: x.unit }; break;
    case "MATCHING": data = { pairs: lines(x.pairsText).map((l) => { const [left, right, visual] = bar(l); return { left, right, visual: opt(visual ?? "") }; }) }; break;
    case "IDENTIFY_MISTAKE": data = { segments: lines(x.segmentsText), correct: x.correctIndex, fix: opt(x.fix) }; break;
  }
  return { id: x.id, type: x.type, prompt: x.prompt, context: opt(x.context) ?? null, explanation: opt(x.explanation) ?? null, points: Number(x.points) || 1, data };
}

// ------------------------------------------------------------------ small UI helpers
function Field({ label, hint, children, className }: { label: string; hint?: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={className}>
      <label className="label">{label}</label>
      {children}
      {hint && <p className="mt-1 text-xs text-ink-400">{hint}</p>}
    </div>
  );
}

function Mover({ onUp, onDown, onDelete }: { onUp: () => void; onDown: () => void; onDelete: () => void }) {
  return (
    <div className="flex gap-1">
      <button type="button" className="btn-outline btn-sm" onClick={onUp} aria-label="Move up">▲</button>
      <button type="button" className="btn-outline btn-sm" onClick={onDown} aria-label="Move down">▼</button>
      <button type="button" className="btn-danger btn-sm" onClick={onDelete}>Delete</button>
    </div>
  );
}

function move<T>(arr: T[], i: number, dir: -1 | 1): T[] {
  const j = i + dir;
  if (j < 0 || j >= arr.length) return arr;
  const next = [...arr];
  [next[i], next[j]] = [next[j], next[i]];
  return next;
}

// ------------------------------------------------------------------ block editor
function BlockForm({ block, onChange }: { block: Block; onChange: (d: Record<string, any>) => void }) {
  const d = block.d;
  const set = (patch: Record<string, any>) => onChange({ ...d, ...patch });
  const title = <Field label="Title"><input className="input" value={d.title} onChange={(e) => set({ title: e.target.value })} /></Field>;

  switch (d.type) {
    case "text":
    case "tip":
      return (<div className="space-y-3">{title}<Field label="Text" hint="Use **double asterisks** for bold."><textarea rows={4} className="input" value={d.body} onChange={(e) => set({ body: e.target.value })} /></Field></div>);
    case "list":
      return (<div className="space-y-3">{title}<Field label="Items (one per line)"><textarea rows={5} className="input" value={d.text} onChange={(e) => set({ text: e.target.value })} /></Field></div>);
    case "structure":
      return (<div className="space-y-3">{title}<Field label="Formula (line breaks allowed)"><textarea rows={3} className="input" value={d.formula} onChange={(e) => set({ formula: e.target.value })} /></Field><Field label="Note (optional)"><textarea rows={2} className="input" value={d.note} onChange={(e) => set({ note: e.target.value })} /></Field></div>);
    case "examples":
      return (<div className="space-y-3">{title}<Field label="Examples" hint="Start a group with “# Group name”. Add an optional note after “ | ”."><textarea rows={7} className="input font-mono text-xs" value={d.text} onChange={(e) => set({ text: e.target.value })} /></Field></div>);
    case "passage":
      return (<div className="space-y-3">{title}<Field label="Passage"><textarea rows={6} className="input" value={d.text} onChange={(e) => set({ text: e.target.value })} /></Field><Field label="Caption (optional)"><input className="input" value={d.caption} onChange={(e) => set({ caption: e.target.value })} /></Field></div>);
    case "annotated":
      return (<div className="space-y-3">{title}<Field label="Parts" hint="One per line: Label | sentence text"><textarea rows={6} className="input font-mono text-xs" value={d.text} onChange={(e) => set({ text: e.target.value })} /></Field></div>);
    case "compare":
      return (<div className="space-y-3">{title}<Field label="Rows" hint="One per line: wrong | right | why (why is optional)"><textarea rows={5} className="input font-mono text-xs" value={d.text} onChange={(e) => set({ text: e.target.value })} /></Field></div>);
    case "vocab":
      return (
        <div className="space-y-3">
          <Field label="Title (optional)"><input className="input" value={d.title} onChange={(e) => set({ title: e.target.value })} /></Field>
          {d.words.map((w: any, i: number) => {
            const setW = (patch: Record<string, string>) => set({ words: d.words.map((x: any, j: number) => (j === i ? { ...x, ...patch } : x)) });
            return (
              <div key={i} className="rounded-lg border border-ink-100 p-3 dark:border-ink-800">
                <div className="mb-2 flex items-center justify-between">
                  <p className="text-sm font-semibold">Word {i + 1}</p>
                  <Mover onUp={() => set({ words: move(d.words, i, -1) })} onDown={() => set({ words: move(d.words, i, 1) })} onDelete={() => set({ words: d.words.filter((_: any, j: number) => j !== i) })} />
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  <Field label="Word"><input className="input" value={w.word} onChange={(e) => setW({ word: e.target.value })} /></Field>
                  <Field label="Part of speech"><input className="input" value={w.pos} onChange={(e) => setW({ pos: e.target.value })} /></Field>
                  <Field label="Pronunciation"><input className="input" value={w.pronunciation} onChange={(e) => setW({ pronunciation: e.target.value })} placeholder="/ˈeəpɔːt/" /></Field>
                  <Field label="Meaning" className="sm:col-span-2"><input className="input" value={w.meaning} onChange={(e) => setW({ meaning: e.target.value })} /></Field>
                  <Field label="Arabic meaning (optional)"><input dir="rtl" className="input" value={w.meaningAr} onChange={(e) => setW({ meaningAr: e.target.value })} /></Field>
                  <Field label="Example sentence" className="sm:col-span-3"><input className="input" value={w.example} onChange={(e) => setW({ example: e.target.value })} /></Field>
                  <Field label="Collocations (comma-separated)" className="sm:col-span-3"><input className="input" value={w.col} onChange={(e) => setW({ col: e.target.value })} /></Field>
                  <Field label="Correct usage"><input className="input" value={w.correct} onChange={(e) => setW({ correct: e.target.value })} /></Field>
                  <Field label="Common mistake (wrong usage)"><input className="input" value={w.incorrect} onChange={(e) => setW({ incorrect: e.target.value })} /></Field>
                  <Field label="Note"><input className="input" value={w.note} onChange={(e) => setW({ note: e.target.value })} /></Field>
                  <Field label="Visual (emoji)"><input className="input" value={w.visual} onChange={(e) => setW({ visual: e.target.value })} placeholder="✈️" /></Field>
                  <Field label="Image URL (optional)" className="sm:col-span-2"><input className="input" value={w.imageUrl} onChange={(e) => setW({ imageUrl: e.target.value })} placeholder="https://..." /></Field>
                </div>
              </div>
            );
          })}
          <button type="button" className="btn-outline btn-sm" onClick={() => set({ words: [...d.words, { ...EMPTY_WORD }] })}>+ Add word</button>
        </div>
      );
    default:
      return null;
  }
}

// ------------------------------------------------------------------ exercise editor
function ExerciseForm({ x, onChange }: { x: Ex; onChange: (x: Ex) => void }) {
  const set = (patch: Partial<Ex>) => onChange({ ...x, ...patch });
  const optionLines = lines(x.optionsText);
  const segmentLines = lines(x.segmentsText);

  return (
    <div className="space-y-3">
      <div className="grid gap-3 sm:grid-cols-3">
        <Field label="Type">
          <select className="input" value={x.type} onChange={(e) => set({ type: e.target.value })}>
            {FL_EXERCISE_TYPES.map((t) => <option key={t} value={t}>{FL_EXERCISE_TYPE_LABELS[t]}</option>)}
          </select>
        </Field>
        <Field label="Points"><input type="number" min={1} max={10} className="input" value={x.points} onChange={(e) => set({ points: Number(e.target.value) })} /></Field>
      </div>
      <Field label="Prompt" hint={x.type === "FILL_BLANK" ? "Type ___ (three underscores) where each blank goes." : undefined}>
        <textarea rows={2} className="input" value={x.prompt} onChange={(e) => set({ prompt: e.target.value })} />
      </Field>
      <Field label="Passage / context (optional)" hint="Shown above the question, e.g. a reading text.">
        <textarea rows={3} className="input" value={x.context} onChange={(e) => set({ context: e.target.value })} />
      </Field>

      {(x.type === "MULTIPLE_CHOICE" || x.type === "MULTIPLE_SELECT") && (
        <>
          <Field label="Options (one per line)"><textarea rows={4} className="input" value={x.optionsText} onChange={(e) => set({ optionsText: e.target.value })} /></Field>
          <div>
            <p className="label">{x.type === "MULTIPLE_CHOICE" ? "Correct option" : "Correct options (tick all)"}</p>
            <div className="space-y-1">
              {optionLines.map((o, i) => (
                <label key={i} className="flex items-center gap-2 text-sm">
                  {x.type === "MULTIPLE_CHOICE" ? (
                    <input type="radio" name={`c-${x.k}`} checked={x.correctIndex === i} onChange={() => set({ correctIndex: i })} />
                  ) : (
                    <input type="checkbox" checked={x.correctSet.includes(i)} onChange={() => set({ correctSet: x.correctSet.includes(i) ? x.correctSet.filter((n) => n !== i) : [...x.correctSet, i] })} />
                  )}
                  {o}
                </label>
              ))}
            </div>
          </div>
        </>
      )}
      {x.type === "TRUE_FALSE" && (
        <Field label="Correct answer">
          <select className="input max-w-xs" value={String(x.tfCorrect)} onChange={(e) => set({ tfCorrect: e.target.value === "true" })}>
            <option value="true">True</option><option value="false">False</option>
          </select>
        </Field>
      )}
      {x.type === "FILL_BLANK" && (
        <>
          <Field label="Answers: one line per blank" hint="Separate accepted alternatives with “ | ”, e.g.  is | 's"><textarea rows={3} className="input" value={x.fillText} onChange={(e) => set({ fillText: e.target.value })} /></Field>
          <Field label="Word bank (optional, comma-separated)"><input className="input" value={x.wordBank} onChange={(e) => set({ wordBank: e.target.value })} /></Field>
        </>
      )}
      {x.type === "SHORT_ANSWER" && (
        <>
          <Field label="Accepted answers (one per line)"><textarea rows={3} className="input" value={x.accepted} onChange={(e) => set({ accepted: e.target.value })} /></Field>
          <Field label="Hint (optional)"><input className="input" value={x.hint} onChange={(e) => set({ hint: e.target.value })} /></Field>
          <div className="flex flex-wrap gap-4 text-sm">
            <label className="flex items-center gap-2"><input type="checkbox" checked={x.caseSensitive} onChange={(e) => set({ caseSensitive: e.target.checked })} />Case-sensitive (capital letters matter)</label>
            <label className="flex items-center gap-2"><input type="checkbox" checked={x.strictPunct} onChange={(e) => set({ strictPunct: e.target.checked })} />Punctuation must match</label>
          </div>
        </>
      )}
      {x.type === "ORDERING" && (
        <>
          <Field label="Items in the CORRECT order (one per line)" hint="Learners see them shuffled."><textarea rows={5} className="input" value={x.itemsText} onChange={(e) => set({ itemsText: e.target.value })} /></Field>
          <Field label="Item type">
            <select className="input max-w-xs" value={x.unit} onChange={(e) => set({ unit: e.target.value })}>
              <option value="word">Words (build a sentence)</option><option value="sentence">Sentences</option><option value="paragraph">Paragraph (build the paragraph)</option>
            </select>
          </Field>
        </>
      )}
      {x.type === "MATCHING" && (
        <Field label="Pairs" hint="One per line: left | right | emoji (emoji optional). Repeat the same “right” to make a classification task."><textarea rows={5} className="input font-mono text-xs" value={x.pairsText} onChange={(e) => set({ pairsText: e.target.value })} /></Field>
      )}
      {x.type === "IDENTIFY_MISTAKE" && (
        <>
          <Field label="Sentence parts (one per line)"><textarea rows={4} className="input" value={x.segmentsText} onChange={(e) => set({ segmentsText: e.target.value })} /></Field>
          <div className="grid gap-3 sm:grid-cols-2">
            <Field label="Which part is the mistake?">
              <select className="input" value={x.correctIndex} onChange={(e) => set({ correctIndex: Number(e.target.value) })}>
                {segmentLines.map((s, i) => <option key={i} value={i}>{i + 1}. {s}</option>)}
              </select>
            </Field>
            <Field label="Correction (shown after wrong answers)"><input className="input" value={x.fix} onChange={(e) => set({ fix: e.target.value })} /></Field>
          </div>
        </>
      )}

      <Field label="Explanation: the “Why?” shown after every answer">
        <textarea rows={2} className="input" value={x.explanation} onChange={(e) => set({ explanation: e.target.value })} />
      </Field>
    </div>
  );
}

// ------------------------------------------------------------------ main editor
export function FreeLessonEditor({ lessonId, initial, slugOptions }: { lessonId?: string; initial: EditorLesson; slugOptions: { slug: string; title: string }[] }) {
  const router = useRouter();
  const [tab, setTab] = useState<"details" | "content" | "exercises">("details");
  const [f, setF] = useState({ ...initial, tagsText: initial.tags.join(", ") });
  const [blocks, setBlocks] = useState<Block[]>(() => initial.sections.map(sectionToBlock));
  const [exs, setExs] = useState<Ex[]>(() => initial.exercises.map(exFromServer));
  const [rawMode, setRawMode] = useState(false);
  const [rawText, setRawText] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [saved, setSaved] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  const set = (patch: Partial<typeof f>) => setF({ ...f, ...patch });

  function enterRaw() {
    setRawText(JSON.stringify({ sections: blocks.map(blockToSection) }, null, 2));
    setRawMode(true);
  }
  function applyRaw() {
    try {
      const parsed = JSON.parse(rawText);
      if (!Array.isArray(parsed.sections)) throw new Error("Expected an object with a “sections” array");
      setBlocks(parsed.sections.map(sectionToBlock));
      setRawMode(false);
      setError(null);
    } catch (e) {
      setError(`Invalid JSON: ${(e as Error).message}`);
    }
  }

  async function save(nextStatus?: string) {
    setError(null);
    setSaved(null);
    setSaving(true);
    let sections: any[];
    if (rawMode) {
      try { sections = JSON.parse(rawText).sections; } catch { setSaving(false); setError("The raw JSON is invalid. Fix it or switch back to the block editor."); return; }
    } else {
      sections = blocks.map(blockToSection);
    }
    const payload = {
      title: f.title, slug: lessonId ? undefined : opt(f.slug), level: f.level, category: f.category, topic: f.topic, difficulty: f.difficulty,
      estimatedMinutes: Number(f.estimatedMinutes), objective: f.objective, imageUrl: opt(f.imageUrl) ?? null, status: nextStatus ?? f.status,
      tags: f.tagsText.split(",").map((t) => t.trim()).filter(Boolean), prerequisites: f.prerequisites,
      requireAllAnswered: f.requireAllAnswered, minScorePercent: Number(f.minScorePercent), allowRetry: f.allowRetry,
      refBook: opt(f.refBook) ?? null, refLevel: opt(f.refLevel) ?? null, refArea: opt(f.refArea) ?? null, refTopic: opt(f.refTopic) ?? null,
      content: { sections }, exercises: exs.map(exToPayload),
    };
    const res = await fetch(lessonId ? `/api/admin/free-lessons/${lessonId}` : "/api/admin/free-lessons", {
      method: lessonId ? "PATCH" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    setSaving(false);
    const data = await res.json().catch(() => ({}));
    if (!res.ok) { setError(data.error ?? "Unable to save the lesson"); return; }
    if (!lessonId) { router.push(`/admin/free-lessons/${data.id}`); router.refresh(); return; }
    if (nextStatus) set({ status: nextStatus });
    setSaved(nextStatus ? `Saved and ${nextStatus.toLowerCase()}.` : "Saved.");
    router.refresh();
  }

  const tabs = [
    { id: "details", label: "Details" },
    { id: "content", label: `Lesson content (${blocks.length})` },
    { id: "exercises", label: `Exercises (${exs.length})` },
  ] as const;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex gap-1 rounded-xl bg-ink-100 p-1 dark:bg-ink-800" role="tablist">
          {tabs.map((t) => (
            <button key={t.id} type="button" role="tab" aria-selected={tab === t.id} onClick={() => setTab(t.id)}
              className={`rounded-lg px-4 py-2 text-sm font-semibold ${tab === t.id ? "bg-white text-brand-700 shadow-card dark:bg-ink-900 dark:text-brand-300" : "text-ink-500 dark:text-ink-400"}`}>
              {t.label}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className={`badge ${f.status === "PUBLISHED" ? "bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300" : "bg-ink-100 text-ink-600 dark:bg-ink-800 dark:text-ink-300"}`}>{f.status.charAt(0) + f.status.slice(1).toLowerCase()}</span>
          {lessonId && f.slug && <Link href={`/free-lessons/lesson/${f.slug}`} target="_blank" className="btn-outline btn-sm">Preview</Link>}
          <button type="button" className="btn-outline" disabled={saving} onClick={() => save()}>{saving ? "Saving..." : "Save"}</button>
          {f.status !== "PUBLISHED" && <button type="button" className="btn-primary" disabled={saving} onClick={() => save("PUBLISHED")}>Save & publish</button>}
          {f.status === "PUBLISHED" && lessonId && <button type="button" className="btn-secondary" disabled={saving} onClick={() => save("UNPUBLISHED")}>Save & unpublish</button>}
        </div>
      </div>

      {error && <p role="alert" className="rounded-lg bg-red-50 p-3 text-sm text-red-700 dark:bg-red-950 dark:text-red-300">{error}</p>}
      {saved && <p role="status" className="rounded-lg bg-green-50 p-3 text-sm text-green-700 dark:bg-green-950 dark:text-green-300">{saved}</p>}

      {tab === "details" && (
        <div className="space-y-6">
          <div className="card space-y-4 p-6">
            <h2 className="font-bold text-ink-900 dark:text-white">Lesson details</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Title"><input className="input" value={f.title} onChange={(e) => set({ title: e.target.value })} /></Field>
              <Field label="URL slug" hint={lessonId ? "Fixed after creation so links keep working." : "Optional: generated from the title if empty."}>
                <input className="input" value={f.slug} disabled={!!lessonId} onChange={(e) => set({ slug: e.target.value })} placeholder="present-simple-questions" />
              </Field>
              <Field label="Level">
                <select className="input" value={f.level} onChange={(e) => set({ level: e.target.value })}>
                  {FL_LEVELS.map((l) => <option key={l} value={l}>{FL_LEVEL_INFO[l].name.en} ({FL_LEVEL_INFO[l].cefr})</option>)}
                </select>
              </Field>
              <Field label="Category">
                <select className="input" value={f.category} onChange={(e) => set({ category: e.target.value })}>
                  {FL_CATEGORIES.map((c) => <option key={c} value={c}>{FL_CATEGORY_INFO[c].name.en}</option>)}
                </select>
              </Field>
              <Field label="Topic"><input className="input" value={f.topic} onChange={(e) => set({ topic: e.target.value })} placeholder="Past Simple" /></Field>
              <Field label="Difficulty">
                <select className="input" value={f.difficulty} onChange={(e) => set({ difficulty: e.target.value })}>
                  {FL_DIFFICULTIES.map((d) => <option key={d} value={d}>{FL_DIFFICULTY_LABELS[d].en}</option>)}
                </select>
              </Field>
              <Field label="Estimated time (minutes)"><input type="number" min={1} className="input" value={f.estimatedMinutes} onChange={(e) => set({ estimatedMinutes: Number(e.target.value) })} /></Field>
              <Field label="Status">
                <select className="input" value={f.status} onChange={(e) => set({ status: e.target.value })}>
                  {FL_STATUSES.map((s) => <option key={s} value={s}>{s.charAt(0) + s.slice(1).toLowerCase()}</option>)}
                </select>
              </Field>
              <Field label="Learning objective" className="sm:col-span-2"><textarea rows={2} className="input" value={f.objective} onChange={(e) => set({ objective: e.target.value })} /></Field>
              <Field label="Cover image URL (optional)" className="sm:col-span-2"><input className="input" value={f.imageUrl} onChange={(e) => set({ imageUrl: e.target.value })} placeholder="https://..." /></Field>
            </div>
          </div>

          <div className="card space-y-4 p-6">
            <h2 className="font-bold text-ink-900 dark:text-white">Recommendation tags & prerequisites</h2>
            <Field label="Tags (comma-separated)" hint="Used by the recommendation engine, e.g. present-simple, grammar-foundation, A2. Vocabulary lessons can use placement themes like health, travel, shopping, family, food, work, technology, or add listening-support.">
              <input className="input" value={f.tagsText} onChange={(e) => setF({ ...f, tagsText: e.target.value })} />
            </Field>
            <Field label="Prerequisite lessons" hint="Hold Ctrl / Cmd to select several. A lesson is only recommended once its prerequisites are complete.">
              <select multiple size={6} className="input" value={f.prerequisites} onChange={(e) => set({ prerequisites: Array.from(e.target.selectedOptions).map((o) => o.value) })}>
                {slugOptions.filter((o) => o.slug !== f.slug).map((o) => <option key={o.slug} value={o.slug}>{o.title}</option>)}
              </select>
            </Field>
          </div>

          <div className="card space-y-4 p-6">
            <h2 className="font-bold text-ink-900 dark:text-white">Completion rules</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              <Field label="Minimum score (%)"><input type="number" min={0} max={100} className="input" value={f.minScorePercent} onChange={(e) => set({ minScorePercent: Number(e.target.value) })} /></Field>
              <label className="flex items-center gap-2 pt-7 text-sm"><input type="checkbox" checked={f.requireAllAnswered} onChange={(e) => set({ requireAllAnswered: e.target.checked })} />Every exercise must be answered</label>
              <label className="flex items-center gap-2 pt-7 text-sm"><input type="checkbox" checked={f.allowRetry} onChange={(e) => set({ allowRetry: e.target.checked })} />Learners can retry wrong answers</label>
            </div>
            <p className="text-xs text-ink-400">A lesson is completed when the learner has read the lesson, met these rules, and reached the minimum score.</p>
          </div>

          <div className="card space-y-4 p-6">
            <h2 className="font-bold text-ink-900 dark:text-white">Curriculum reference (internal only)</h2>
            <p className="text-xs text-ink-400">For curriculum alignment. Never shown to learners. Do not paste coursebook text here: lessons must be original.</p>
            <div className="grid gap-4 sm:grid-cols-4">
              <Field label="Reference book"><input className="input" value={f.refBook} onChange={(e) => set({ refBook: e.target.value })} placeholder="Headway 5th Edition" /></Field>
              <Field label="Reference level"><input className="input" value={f.refLevel} onChange={(e) => set({ refLevel: e.target.value })} placeholder="Elementary" /></Field>
              <Field label="Reference area"><input className="input" value={f.refArea} onChange={(e) => set({ refArea: e.target.value })} placeholder="Grammar" /></Field>
              <Field label="Reference topic"><input className="input" value={f.refTopic} onChange={(e) => set({ refTopic: e.target.value })} placeholder="Past Simple" /></Field>
            </div>
          </div>
        </div>
      )}

      {tab === "content" && (
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-sm text-ink-500 dark:text-ink-400">The explanation learners see on the LESSON side. Grammar lessons should include Explanation, Use, Structure and Examples.</p>
            <button type="button" className="btn-outline btn-sm" onClick={() => (rawMode ? applyRaw() : enterRaw())}>{rawMode ? "Apply JSON & return to blocks" : "Advanced: edit as JSON"}</button>
          </div>
          {rawMode ? (
            <textarea rows={28} className="input font-mono text-xs" value={rawText} onChange={(e) => setRawText(e.target.value)} spellCheck={false} />
          ) : (
            <>
              {blocks.map((b, i) => (
                <div key={b.k} className="card p-5">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="badge bg-brand-50 text-brand-700 dark:bg-brand-950 dark:text-brand-300">{i + 1}. {BLOCK_TYPES.find((t) => t.type === b.d.type)?.label ?? b.d.type}</span>
                    <Mover onUp={() => setBlocks(move(blocks, i, -1))} onDown={() => setBlocks(move(blocks, i, 1))} onDelete={() => setBlocks(blocks.filter((x) => x.k !== b.k))} />
                  </div>
                  <BlockForm block={b} onChange={(d) => setBlocks(blocks.map((x) => (x.k === b.k ? { ...x, d } : x)))} />
                </div>
              ))}
              <div className="card p-4">
                <p className="mb-2 text-sm font-semibold text-ink-700 dark:text-ink-200">Add a block</p>
                <div className="flex flex-wrap gap-2">
                  {BLOCK_TYPES.map((t) => <button key={t.type} type="button" className="btn-outline btn-sm" onClick={() => setBlocks([...blocks, newBlock(t.type)])}>+ {t.label}</button>)}
                </div>
              </div>
            </>
          )}
        </div>
      )}

      {tab === "exercises" && (
        <div className="space-y-4">
          <p className="text-sm text-ink-500 dark:text-ink-400">The PRACTICE side. Answers are checked on the server, so answer keys are never sent to learners&apos; browsers. Use a variety of types.</p>
          {exs.map((x, i) => (
            <div key={x.k} className="card p-5">
              <div className="mb-3 flex items-center justify-between">
                <span className="badge bg-brand-50 text-brand-700 dark:bg-brand-950 dark:text-brand-300">Exercise {i + 1}</span>
                <Mover onUp={() => setExs(move(exs, i, -1))} onDown={() => setExs(move(exs, i, 1))} onDelete={() => setExs(exs.filter((e) => e.k !== x.k))} />
              </div>
              <ExerciseForm x={x} onChange={(nx) => setExs(exs.map((e) => (e.k === x.k ? nx : e)))} />
            </div>
          ))}
          <button type="button" className="btn-outline" onClick={() => setExs([...exs, newEx()])}>+ Add exercise</button>
        </div>
      )}
    </div>
  );
}
