"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { formatCurrency, calculateTotalPrice } from "@/lib/pricing";
import { formatDate, formatTimeRange } from "@/lib/utils";
import { CONTACT_METHODS } from "@/lib/enums";

type ScheduleOption = {
  id: string;
  date: string | Date;
  startTime: string;
  endTime: string;
  capacity: number;
  seatsBooked: number;
  status: string;
};

export function BookingForm({
  courseId,
  hourlyRate,
  durationHours,
  currency,
  schedules,
}: {
  courseId: string;
  hourlyRate: number;
  durationHours: number;
  currency: string;
  schedules: ScheduleOption[];
}) {
  const router = useRouter();
  const { data: session } = useSession();
  const [scheduleId, setScheduleId] = useState("");
  const [form, setForm] = useState({
    learnerName: session?.user?.name ?? "",
    learnerEmail: session?.user?.email ?? "",
    learnerPhone: "",
    country: "",
    preferredContact: "EMAIL",
    notes: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{ id: string } | null>(null);

  const total = calculateTotalPrice(hourlyRate, durationHours);
  const availableSchedules = schedules.filter((s) => s.status === "OPEN" && s.seatsBooked < s.capacity);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!scheduleId) {
      setError("Please select an available date and time.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ courseId, scheduleId, ...form }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Something went wrong. Please try again.");
        return;
      }
      setResult({ id: data.id });
      router.refresh();
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (result) {
    return (
      <div className="card border-green-200 bg-green-50 p-6 text-center">
        <p className="text-2xl">&#10003;</p>
        <h3 className="mt-2 text-lg font-bold text-ink-900">Booking Received!</h3>
        <p className="mt-1 text-sm text-ink-600">
          Your booking is <strong>Pending</strong> confirmation. We&apos;ll be in touch shortly.
        </p>
        <a href={`/bookings/${result.id}`} className="btn-primary mt-4 inline-flex">
          View Booking Status
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-5 p-6">
      <div>
        <h3 className="font-bold text-ink-900">1. Select a Date &amp; Time</h3>
        <div className="mt-3 space-y-2">
          {availableSchedules.length === 0 && (
            <p className="text-sm text-amber-600">No available sessions at the moment. Please check back later.</p>
          )}
          {availableSchedules.map((s) => (
            <label
              key={s.id}
              className={`flex cursor-pointer items-center justify-between rounded-lg border p-3 text-sm transition-colors ${
                scheduleId === s.id ? "border-brand-500 bg-brand-50" : "border-ink-200 hover:border-brand-300"
              }`}
            >
              <span className="flex items-center gap-3">
                <input
                  type="radio"
                  name="schedule"
                  value={s.id}
                  checked={scheduleId === s.id}
                  onChange={() => setScheduleId(s.id)}
                  className="h-4 w-4"
                />
                <span>
                  <strong className="text-ink-800">{formatDate(s.date)}</strong>{" "}
                  <span className="text-ink-500">{formatTimeRange(s.startTime, s.endTime)}</span>
                </span>
              </span>
              <span className="text-xs text-ink-500">{s.capacity - s.seatsBooked} seats left</span>
            </label>
          ))}
        </div>
      </div>

      <div className="rounded-lg bg-ink-50 p-4">
        <h3 className="font-bold text-ink-900">2. Price</h3>
        <div className="mt-2 flex items-center justify-between text-sm text-ink-600">
          <span>{formatCurrency(hourlyRate, currency)}/hour &times; {durationHours} hours</span>
          <span className="text-xl font-extrabold text-brand-700">{formatCurrency(total, currency)}</span>
        </div>
      </div>

      <div>
        <h3 className="font-bold text-ink-900">3. Your Information</h3>
        <div className="mt-3 grid gap-4 sm:grid-cols-2">
          <div>
            <label className="label" htmlFor="learnerName">Full Name</label>
            <input
              id="learnerName"
              required
              className="input"
              value={form.learnerName}
              onChange={(e) => setForm({ ...form, learnerName: e.target.value })}
            />
          </div>
          <div>
            <label className="label" htmlFor="learnerEmail">Email</label>
            <input
              id="learnerEmail"
              type="email"
              required
              className="input"
              value={form.learnerEmail}
              onChange={(e) => setForm({ ...form, learnerEmail: e.target.value })}
            />
          </div>
          <div>
            <label className="label" htmlFor="learnerPhone">Phone Number</label>
            <input
              id="learnerPhone"
              required
              className="input"
              value={form.learnerPhone}
              onChange={(e) => setForm({ ...form, learnerPhone: e.target.value })}
            />
          </div>
          <div>
            <label className="label" htmlFor="country">Country</label>
            <input
              id="country"
              required
              className="input"
              value={form.country}
              onChange={(e) => setForm({ ...form, country: e.target.value })}
            />
          </div>
          <div>
            <label className="label" htmlFor="preferredContact">Preferred Contact Method</label>
            <select
              id="preferredContact"
              className="input"
              value={form.preferredContact}
              onChange={(e) => setForm({ ...form, preferredContact: e.target.value })}
            >
              {CONTACT_METHODS.map((m) => (
                <option key={m} value={m}>{m.charAt(0) + m.slice(1).toLowerCase()}</option>
              ))}
            </select>
          </div>
          <div className="sm:col-span-2">
            <label className="label" htmlFor="notes">Notes / Comments (optional)</label>
            <textarea
              id="notes"
              rows={3}
              className="input"
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
            />
          </div>
        </div>
      </div>

      {error && <p className="rounded-lg bg-red-50 p-3 text-sm text-red-700">{error}</p>}

      <button type="submit" disabled={submitting} className="btn-primary w-full">
        {submitting ? "Submitting..." : "Book Course"}
      </button>
    </form>
  );
}
