"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type InstructorFormValues = {
  fullName: string;
  photoUrl: string;
  title: string;
  qualifications: string;
  certifications: string;
  experienceYears: number;
  bio: string;
  specialization: string;
  languages: string;
  active: boolean;
};

const EMPTY: InstructorFormValues = {
  fullName: "",
  photoUrl: "",
  title: "",
  qualifications: "",
  certifications: "",
  experienceYears: 0,
  bio: "",
  specialization: "",
  languages: "",
  active: true,
};

export function InstructorForm({ instructorId, initial }: { instructorId?: string; initial?: Partial<InstructorFormValues> }) {
  const router = useRouter();
  const [form, setForm] = useState<InstructorFormValues>({ ...EMPTY, ...initial });
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    const url = instructorId ? `/api/instructors/${instructorId}` : "/api/instructors";
    const method = instructorId ? "PATCH" : "POST";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setSubmitting(false);

    if (!res.ok) {
      const data = await res.json();
      setError(data.error ?? "Unable to save instructor");
      return;
    }

    router.push("/admin/instructors");
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-5 p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="label">Full Name</label>
          <input required className="input" value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} />
        </div>
        <div>
          <label className="label">Professional Title</label>
          <input required className="input" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
        </div>
        <div>
          <label className="label">Photo URL</label>
          <input className="input" value={form.photoUrl} onChange={(e) => setForm({ ...form, photoUrl: e.target.value })} placeholder="https://..." />
        </div>
        <div>
          <label className="label">Years of Experience</label>
          <input type="number" min={0} required className="input" value={form.experienceYears} onChange={(e) => setForm({ ...form, experienceYears: Number(e.target.value) })} />
        </div>
        <div>
          <label className="label">Qualifications</label>
          <input required className="input" value={form.qualifications} onChange={(e) => setForm({ ...form, qualifications: e.target.value })} />
        </div>
        <div>
          <label className="label">Certifications</label>
          <input className="input" value={form.certifications} onChange={(e) => setForm({ ...form, certifications: e.target.value })} />
        </div>
        <div>
          <label className="label">Specialization</label>
          <input required className="input" value={form.specialization} onChange={(e) => setForm({ ...form, specialization: e.target.value })} />
        </div>
        <div>
          <label className="label">Languages (comma separated)</label>
          <input required className="input" value={form.languages} onChange={(e) => setForm({ ...form, languages: e.target.value })} />
        </div>
      </div>
      <div>
        <label className="label">Biography</label>
        <textarea required rows={4} className="input" value={form.bio} onChange={(e) => setForm({ ...form, bio: e.target.value })} />
      </div>
      <label className="flex items-center gap-2 text-sm text-ink-700">
        <input type="checkbox" checked={form.active} onChange={(e) => setForm({ ...form, active: e.target.checked })} />
        Active (visible to learners)
      </label>

      {error && <p className="rounded-lg bg-red-50 p-3 text-sm text-red-700">{error}</p>}

      <div className="flex gap-3">
        <button type="submit" disabled={submitting} className="btn-primary">
          {submitting ? "Saving..." : instructorId ? "Save Changes" : "Create Instructor"}
        </button>
        <a href="/admin/instructors" className="btn-outline">Cancel</a>
      </div>
    </form>
  );
}
