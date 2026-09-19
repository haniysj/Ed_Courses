"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { COURSE_FORMATS, COURSE_LEVELS, COURSE_STATUSES, FORMAT_LABELS, LEVEL_LABELS, COURSE_STATUS_LABELS } from "@/lib/enums";
import { calculateTotalPrice, getCoursePricing, endOfDayOman } from "@/lib/pricing";
import { Money, OmrSymbol } from "@/components/money";

type Option = { id: string; name: string };

type CourseFormValues = {
  title: string;
  code: string;
  description: string;
  objectives: string[];
  imageUrl: string;
  level: string;
  format: string;
  durationHours: number;
  sessionsCount: number;
  hourlyRate: number;
  maxLearners: number;
  discountType: string;
  discountValue: number;
  discountEndsAt: string;
  status: string;
  categoryId: string;
  instructorId: string;
  modules: { title: string; description: string }[];
};

const EMPTY: CourseFormValues = {
  title: "",
  code: "",
  description: "",
  objectives: [""],
  imageUrl: "",
  level: "BEGINNER",
  format: "ONLINE_LIVE",
  durationHours: 10,
  sessionsCount: 5,
  hourlyRate: 10,
  maxLearners: 15,
  discountType: "NONE",
  discountValue: 0,
  discountEndsAt: "",
  status: "DRAFT",
  categoryId: "",
  instructorId: "",
  modules: [{ title: "", description: "" }],
};

export function CourseForm({
  courseId,
  initial,
  categories,
  instructors,
}: {
  courseId?: string;
  initial?: Partial<CourseFormValues>;
  categories: Option[];
  instructors: Option[];
}) {
  const router = useRouter();
  const [form, setForm] = useState<CourseFormValues>({
    ...EMPTY,
    categoryId: categories[0]?.id ?? "",
    instructorId: instructors[0]?.id ?? "",
    ...initial,
  });
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const total = calculateTotalPrice(Number(form.hourlyRate) || 0, Number(form.durationHours) || 0);

  const preview = getCoursePricing(Number(form.hourlyRate) || 0, Number(form.durationHours) || 0, {
    discountType: form.discountType,
    discountValue: Number(form.discountValue) || 0,
    discountEndsAt: form.discountEndsAt ? endOfDayOman(form.discountEndsAt) : null,
  });
  const expired = form.discountType !== "NONE" && Number(form.discountValue) > 0 && !!form.discountEndsAt && endOfDayOman(form.discountEndsAt).getTime() < Date.now();

  function updateObjective(index: number, value: string) {
    const next = [...form.objectives];
    next[index] = value;
    setForm({ ...form, objectives: next });
  }
  function addObjective() {
    setForm({ ...form, objectives: [...form.objectives, ""] });
  }
  function removeObjective(index: number) {
    setForm({ ...form, objectives: form.objectives.filter((_, i) => i !== index) });
  }

  function updateModule(index: number, field: "title" | "description", value: string) {
    const next = [...form.modules];
    next[index] = { ...next[index], [field]: value };
    setForm({ ...form, modules: next });
  }
  function addModule() {
    setForm({ ...form, modules: [...form.modules, { title: "", description: "" }] });
  }
  function removeModule(index: number) {
    setForm({ ...form, modules: form.modules.filter((_, i) => i !== index) });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    const payload = {
      ...form,
      objectives: form.objectives.map((o) => o.trim()).filter(Boolean),
      modules: form.modules.filter((m) => m.title.trim() && m.description.trim()),
    };

    const url = courseId ? `/api/courses/${courseId}` : "/api/courses";
    const method = courseId ? "PATCH" : "POST";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    setSubmitting(false);

    if (!res.ok) {
      const data = await res.json();
      setError(data.error ?? "Unable to save course");
      return;
    }

    router.push("/admin/courses");
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="card space-y-4 p-6">
        <h2 className="font-bold text-ink-900 dark:text-white">Basic Information</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="label">Course Name</label>
            <input required className="input" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
          </div>
          <div>
            <label className="label">Course Code</label>
            <input required className="input" value={form.code} onChange={(e) => setForm({ ...form, code: e.target.value })} placeholder="e.g. ENG-101" />
          </div>
          <div>
            <label className="label">Category</label>
            <select required className="input" value={form.categoryId} onChange={(e) => setForm({ ...form, categoryId: e.target.value })}>
              {categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
            </select>
          </div>
          <div>
            <label className="label">Instructor</label>
            <select required className="input" value={form.instructorId} onChange={(e) => setForm({ ...form, instructorId: e.target.value })}>
              {instructors.map((i) => <option key={i.id} value={i.id}>{i.name}</option>)}
            </select>
          </div>
          <div>
            <label className="label">Level</label>
            <select className="input" value={form.level} onChange={(e) => setForm({ ...form, level: e.target.value })}>
              {COURSE_LEVELS.map((l) => <option key={l} value={l}>{LEVEL_LABELS[l].en}</option>)}
            </select>
          </div>
          <div>
            <label className="label">Format</label>
            <select className="input" value={form.format} onChange={(e) => setForm({ ...form, format: e.target.value })}>
              {COURSE_FORMATS.map((f) => <option key={f} value={f}>{FORMAT_LABELS[f].en}</option>)}
            </select>
          </div>
          <div className="sm:col-span-2">
            <label className="label">Image URL</label>
            <input className="input" value={form.imageUrl} onChange={(e) => setForm({ ...form, imageUrl: e.target.value })} placeholder="https://..." />
          </div>
          <div className="sm:col-span-2">
            <label className="label">Description</label>
            <textarea required rows={4} className="input" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
          </div>
        </div>
      </div>

      <div className="card space-y-4 p-6">
        <h2 className="font-bold text-ink-900 dark:text-white">Pricing &amp; Capacity</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <label className="label">Duration (hours)</label>
            <input type="number" min={0.5} step={0.5} required className="input" value={form.durationHours} onChange={(e) => setForm({ ...form, durationHours: Number(e.target.value) })} />
          </div>
          <div>
            <label className="label">Number of Sessions</label>
            <input type="number" min={1} required className="input" value={form.sessionsCount} onChange={(e) => setForm({ ...form, sessionsCount: Number(e.target.value) })} />
          </div>
          <div>
            <label className="label">Hourly Rate (<OmrSymbol />)</label>
            <input type="number" min={0.01} step={0.01} required className="input" value={form.hourlyRate} onChange={(e) => setForm({ ...form, hourlyRate: Number(e.target.value) })} />
          </div>
          <div>
            <label className="label">Max Learners</label>
            <input type="number" min={1} required className="input" value={form.maxLearners} onChange={(e) => setForm({ ...form, maxLearners: Number(e.target.value) })} />
          </div>
        </div>

        <div className="rounded-lg border border-brand-100 bg-brand-50 p-4">
          <p className="text-xs font-semibold uppercase text-brand-600">Automatically Calculated</p>
          <div className="mt-1 flex items-baseline gap-2 text-sm text-ink-600 dark:text-ink-300">
            <span><Money amount={Number(form.hourlyRate) || 0} weight="medium" /> &times; {form.durationHours || 0}h =</span>
            <span className="text-2xl font-extrabold text-brand-700"><Money amount={total} weight="bold" /></span>
          </div>
          <p className="mt-1 text-xs text-ink-500 dark:text-ink-400">Total price cannot be edited directly — it always follows the formula.</p>
        </div>

        <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-900/50 dark:bg-amber-950/30">
          <p className="text-xs font-semibold uppercase text-amber-700 dark:text-amber-400">Discount / Special Offer</p>
          <div className="mt-3 grid gap-4 sm:grid-cols-3">
            <div>
              <label className="label">Discount type</label>
              <select
                className="input"
                value={form.discountType}
                onChange={(e) => setForm({ ...form, discountType: e.target.value, discountValue: e.target.value === "NONE" ? 0 : form.discountValue })}
              >
                <option value="NONE">No discount</option>
                <option value="PERCENT">Percentage (%) off</option>
                <option value="AMOUNT">Fixed amount off total</option>
              </select>
            </div>
            {form.discountType !== "NONE" && (
              <>
                <div>
                  <label className="label">{form.discountType === "PERCENT" ? "Discount (%)" : "Amount off (OMR)"}</label>
                  <input
                    type="number"
                    min={0}
                    step={form.discountType === "PERCENT" ? 1 : 0.5}
                    max={form.discountType === "PERCENT" ? 95 : undefined}
                    required
                    className="input"
                    value={form.discountValue}
                    onChange={(e) => setForm({ ...form, discountValue: Number(e.target.value) })}
                  />
                </div>
                <div>
                  <label className="label">Valid until</label>
                  <input
                    type="date"
                    className="input"
                    value={form.discountEndsAt}
                    onChange={(e) => setForm({ ...form, discountEndsAt: e.target.value })}
                  />
                  <p className="mt-1 text-xs text-ink-500 dark:text-ink-400">Includes the whole of this day. Leave empty for no end date.</p>
                </div>
              </>
            )}
          </div>
          {form.discountType !== "NONE" && (
            <div className="mt-3 text-sm">
              {expired ? (
                <p className="font-medium text-red-600">This offer has already ended, so no discount will be shown or applied.</p>
              ) : preview.active ? (
                <p className="flex flex-wrap items-baseline gap-x-3 text-ink-700 dark:text-ink-200">
                  <span className="text-ink-400 line-through"><Money amount={preview.original} weight="medium" /></span>
                  <span className="text-xl font-extrabold text-emerald-700 dark:text-emerald-400"><Money amount={preview.final} weight="bold" /></span>
                  <span className="rounded-full bg-amber-400 px-2 py-0.5 text-xs font-bold text-amber-950">-{preview.percentOff}%</span>
                </p>
              ) : (
                <p className="text-ink-500">Enter a discount value to preview the offer.</p>
              )}
            </div>
          )}
        </div>

        <div>
          <label className="label">Status</label>
          <select className="input max-w-xs" value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })}>
            {COURSE_STATUSES.map((s) => <option key={s} value={s}>{COURSE_STATUS_LABELS[s].en}</option>)}
          </select>
        </div>
      </div>

      <div className="card space-y-3 p-6">
        <h2 className="font-bold text-ink-900 dark:text-white">Learning Objectives</h2>
        {form.objectives.map((obj, i) => (
          <div key={i} className="flex gap-2">
            <input className="input" value={obj} onChange={(e) => updateObjective(i, e.target.value)} placeholder={`Objective ${i + 1}`} />
            <button type="button" onClick={() => removeObjective(i)} className="btn-outline btn-sm">Remove</button>
          </div>
        ))}
        <button type="button" onClick={addObjective} className="btn-secondary btn-sm">+ Add Objective</button>
      </div>

      <div className="card space-y-3 p-6">
        <h2 className="font-bold text-ink-900 dark:text-white">Course Content / Modules</h2>
        {form.modules.map((m, i) => (
          <div key={i} className="grid gap-2 rounded-lg border border-ink-100 p-3 sm:grid-cols-[1fr_2fr_auto]">
            <input className="input" value={m.title} onChange={(e) => updateModule(i, "title", e.target.value)} placeholder={`Module ${i + 1} title`} />
            <input className="input" value={m.description} onChange={(e) => updateModule(i, "description", e.target.value)} placeholder="Description" />
            <button type="button" onClick={() => removeModule(i)} className="btn-outline btn-sm">Remove</button>
          </div>
        ))}
        <button type="button" onClick={addModule} className="btn-secondary btn-sm">+ Add Module</button>
      </div>

      {error && <p className="rounded-lg bg-red-50 p-3 text-sm text-red-700">{error}</p>}

      <div className="flex gap-3">
        <button type="submit" disabled={submitting} className="btn-primary">
          {submitting ? "Saving..." : courseId ? "Save Changes" : "Create Course"}
        </button>
        <a href="/admin/courses" className="btn-outline">Cancel</a>
      </div>
    </form>
  );
}
