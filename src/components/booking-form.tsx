"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { formatCurrency, calculateTotalPrice } from "@/lib/pricing";
import { formatDate, formatTimeRange } from "@/lib/utils";
import { CONTACT_METHODS } from "@/lib/enums";
import { useI18n } from "@/components/i18n-provider";

type ScheduleOption = {
  id: string;
  date: string | Date;
  startTime: string;
  endTime: string;
  capacity: number;
  seatsBooked: number;
  status: string;
};

const CONTACT_LABELS_AR: Record<string, string> = { EMAIL: "البريد الإلكتروني", PHONE: "الهاتف", WHATSAPP: "واتساب" };

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
  const { t, locale } = useI18n();
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
      setError(t("booking.selectDateError"));
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
      <div className="card animate-fade-in border-green-200 bg-green-50 p-6 text-center dark:border-green-900 dark:bg-green-950">
        <p className="text-2xl">&#10003;</p>
        <h3 className="mt-2 text-lg font-bold text-ink-900 dark:text-white">{t("booking.receivedTitle")}</h3>
        <p className="mt-1 text-sm text-ink-600 dark:text-ink-300">{t("booking.receivedBody")}</p>
        <a href={`/bookings/${result.id}`} className="btn-primary mt-4 inline-flex">
          {t("booking.viewStatus")}
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-5 p-6">
      <div>
        <h3 className="font-bold text-ink-900 dark:text-white">{t("booking.selectDateTime")}</h3>
        <div className="mt-3 space-y-2">
          {availableSchedules.length === 0 && (
            <p className="text-sm text-amber-600 dark:text-amber-400">{t("booking.noSessions")}</p>
          )}
          {availableSchedules.map((s) => (
            <label
              key={s.id}
              className={`flex cursor-pointer items-center justify-between rounded-lg border p-3 text-sm transition-all duration-200 ${
                scheduleId === s.id
                  ? "border-brand-500 bg-brand-50 dark:border-brand-500 dark:bg-brand-950"
                  : "border-ink-200 hover:border-brand-300 hover:shadow-card dark:border-ink-700 dark:hover:border-brand-600"
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
                  <strong className="text-ink-800 dark:text-ink-100">{formatDate(s.date)}</strong>{" "}
                  <span className="text-ink-500 dark:text-ink-400">{formatTimeRange(s.startTime, s.endTime)}</span>
                </span>
              </span>
              <span className="text-xs text-ink-500 dark:text-ink-400">
                {s.capacity - s.seatsBooked} {t("courseDetail.seatsLeft")}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="rounded-lg bg-ink-50 p-4 dark:bg-ink-800">
        <h3 className="font-bold text-ink-900 dark:text-white">{t("booking.priceSection")}</h3>
        <div className="mt-2 flex items-center justify-between text-sm text-ink-600 dark:text-ink-300">
          <span>{t("courses.totalPrice")}</span>
          <span className="text-xl font-extrabold text-brand-700 dark:text-brand-400">{formatCurrency(total, currency)}</span>
        </div>
      </div>

      <div>
        <h3 className="font-bold text-ink-900 dark:text-white">{t("booking.yourInfo")}</h3>
        <div className="mt-3 grid gap-4 sm:grid-cols-2">
          <div>
            <label className="label" htmlFor="learnerName">{t("booking.fullName")}</label>
            <input
              id="learnerName"
              required
              className="input"
              value={form.learnerName}
              onChange={(e) => setForm({ ...form, learnerName: e.target.value })}
            />
          </div>
          <div>
            <label className="label" htmlFor="learnerEmail">{t("booking.email")}</label>
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
            <label className="label" htmlFor="learnerPhone">{t("booking.phone")}</label>
            <input
              id="learnerPhone"
              required
              className="input"
              value={form.learnerPhone}
              onChange={(e) => setForm({ ...form, learnerPhone: e.target.value })}
            />
          </div>
          <div>
            <label className="label" htmlFor="country">{t("booking.country")}</label>
            <input
              id="country"
              required
              className="input"
              value={form.country}
              onChange={(e) => setForm({ ...form, country: e.target.value })}
            />
          </div>
          <div>
            <label className="label" htmlFor="preferredContact">{t("booking.preferredContact")}</label>
            <select
              id="preferredContact"
              className="input"
              value={form.preferredContact}
              onChange={(e) => setForm({ ...form, preferredContact: e.target.value })}
            >
              {CONTACT_METHODS.map((m) => (
                <option key={m} value={m}>
                  {locale === "ar" ? CONTACT_LABELS_AR[m] : m.charAt(0) + m.slice(1).toLowerCase()}
                </option>
              ))}
            </select>
          </div>
          <div className="sm:col-span-2">
            <label className="label" htmlFor="notes">{t("booking.notes")}</label>
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

      {error && <p className="rounded-lg bg-red-50 p-3 text-sm text-red-700 dark:bg-red-950 dark:text-red-300">{error}</p>}

      <button type="submit" disabled={submitting} className="btn-primary w-full">
        {submitting ? t("booking.submitting") : t("booking.bookCourse")}
      </button>
    </form>
  );
}
