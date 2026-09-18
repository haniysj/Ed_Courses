"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function ApprovePaymentButton({ id, status, paymentStatus }: { id: string; status: string; paymentStatus: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const alreadyApproved = status === "CONFIRMED" && paymentStatus === "PAID";

  async function approve() {
    setLoading(true);
    setError(null);
    const res = await fetch(`/api/bookings/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: "CONFIRMED", paymentStatus: "PAID" }),
    });
    setLoading(false);
    if (res.ok) {
      router.refresh();
    } else {
      const data = await res.json();
      setError(data.error ?? "Unable to approve payment");
    }
  }

  if (alreadyApproved) return null;

  return (
    <div>
      <button type="button" onClick={approve} disabled={loading} className="btn-primary btn-sm">
        {loading ? "Approving..." : "Approve Payment – Mark Paid & Confirm"}
      </button>
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}
