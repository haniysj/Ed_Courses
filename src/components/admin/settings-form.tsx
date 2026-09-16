"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type SettingsValues = {
  platformName: string;
  logoUrl: string;
  contactEmail: string;
  contactPhone: string;
  currency: string;
  timezone: string;
  cancellationPolicy: string;
  minBookingNoticeHours: number;
  maxBookingPeriodDays: number;
};

export function SettingsForm({ initial }: { initial: SettingsValues }) {
  const router = useRouter();
  const [form, setForm] = useState(initial);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    setSubmitting(true);
    const res = await fetch("/api/settings", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setSubmitting(false);
    if (!res.ok) {
      const data = await res.json();
      setError(data.error ?? "Unable to save settings");
      return;
    }
    setSuccess(true);
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="card max-w-2xl space-y-5 p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="label">Platform Name</label>
          <input required className="input" value={form.platformName} onChange={(e) => setForm({ ...form, platformName: e.target.value })} />
        </div>
        <div>
          <label className="label">Logo URL</label>
          <input className="input" value={form.logoUrl} onChange={(e) => setForm({ ...form, logoUrl: e.target.value })} placeholder="https://..." />
        </div>
        <div>
          <label className="label">Contact Email</label>
          <input type="email" required className="input" value={form.contactEmail} onChange={(e) => setForm({ ...form, contactEmail: e.target.value })} />
        </div>
        <div>
          <label className="label">Contact Phone</label>
          <input required className="input" value={form.contactPhone} onChange={(e) => setForm({ ...form, contactPhone: e.target.value })} />
        </div>
        <div>
          <label className="label">Default Currency</label>
          <input required className="input" value={form.currency} onChange={(e) => setForm({ ...form, currency: e.target.value })} />
        </div>
        <div>
          <label className="label">Time Zone</label>
          <input required className="input" value={form.timezone} onChange={(e) => setForm({ ...form, timezone: e.target.value })} />
        </div>
        <div>
          <label className="label">Minimum Booking Notice (hours)</label>
          <input type="number" min={0} required className="input" value={form.minBookingNoticeHours} onChange={(e) => setForm({ ...form, minBookingNoticeHours: Number(e.target.value) })} />
        </div>
        <div>
          <label className="label">Maximum Booking Period (days)</label>
          <input type="number" min={1} required className="input" value={form.maxBookingPeriodDays} onChange={(e) => setForm({ ...form, maxBookingPeriodDays: Number(e.target.value) })} />
        </div>
      </div>
      <div>
        <label className="label">Cancellation Policy</label>
        <textarea required rows={3} className="input" value={form.cancellationPolicy} onChange={(e) => setForm({ ...form, cancellationPolicy: e.target.value })} />
      </div>

      {error && <p className="rounded-lg bg-red-50 p-3 text-sm text-red-700">{error}</p>}
      {success && <p className="rounded-lg bg-green-50 p-3 text-sm text-green-700">Settings saved successfully.</p>}

      <button type="submit" disabled={submitting} className="btn-primary">
        {submitting ? "Saving..." : "Save Settings"}
      </button>
    </form>
  );
}
