"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { formatDate, formatTimeRange } from "@/lib/utils";

type ScheduleOption = {
  id: string;
  date: string | Date;
  startTime: string;
  endTime: string;
  capacity: number;
  seatsBooked: number;
  status: string;
};

export function RescheduleForm({ bookingId, currentScheduleId, schedules }: { bookingId: string; currentScheduleId: string; schedules: ScheduleOption[] }) {
  const router = useRouter();
  const [scheduleId, setScheduleId] = useState(currentScheduleId);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    const res = await fetch(`/api/bookings/${bookingId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ scheduleId }),
    });
    setSubmitting(false);
    if (!res.ok) {
      const data = await res.json();
      setError(data.error ?? "Unable to reschedule booking");
      return;
    }
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <select className="input" value={scheduleId} onChange={(e) => setScheduleId(e.target.value)}>
        {schedules.map((s) => (
          <option key={s.id} value={s.id} disabled={s.id !== currentScheduleId && (s.status !== "OPEN" || s.seatsBooked >= s.capacity)}>
            {formatDate(s.date)} &middot; {formatTimeRange(s.startTime, s.endTime)} ({s.capacity - s.seatsBooked} left)
          </option>
        ))}
      </select>
      {error && <p className="rounded-lg bg-red-50 p-3 text-sm text-red-700">{error}</p>}
      <button type="submit" disabled={submitting || scheduleId === currentScheduleId} className="btn-primary btn-sm">
        {submitting ? "Rescheduling..." : "Reschedule Booking"}
      </button>
    </form>
  );
}
