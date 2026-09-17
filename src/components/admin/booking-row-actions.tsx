"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { BOOKING_STATUSES, BOOKING_STATUS_LABELS, PAYMENT_STATUSES, PAYMENT_STATUS_LABELS } from "@/lib/enums";

export function BookingRowActions({
  id,
  status,
  paymentStatus,
}: {
  id: string;
  status: string;
  paymentStatus: string;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function update(data: Record<string, string>) {
    setLoading(true);
    setError(null);
    const res = await fetch(`/api/bookings/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    setLoading(false);
    if (res.ok) {
      router.refresh();
    } else {
      const body = await res.json();
      setError(body.error ?? "Unable to update booking");
    }
  }

  return (
    <div className="flex flex-wrap items-center justify-end gap-2">
      {error && <span className="w-full text-right text-xs text-red-600">{error}</span>}
      <select
        className="input w-auto py-1 text-xs"
        value={status}
        disabled={loading}
        onChange={(e) => update({ status: e.target.value })}
      >
        {BOOKING_STATUSES.map((s) => <option key={s} value={s}>{BOOKING_STATUS_LABELS[s].en}</option>)}
      </select>
      <select
        className="input w-auto py-1 text-xs"
        value={paymentStatus}
        disabled={loading}
        onChange={(e) => update({ paymentStatus: e.target.value })}
      >
        {PAYMENT_STATUSES.map((s) => <option key={s} value={s}>{PAYMENT_STATUS_LABELS[s].en}</option>)}
      </select>
    </div>
  );
}
