import { cn } from "@/lib/utils";

const STYLES: Record<string, string> = {
  PUBLISHED: "bg-green-100 text-green-700",
  DRAFT: "bg-ink-100 text-ink-600",
  FULLY_BOOKED: "bg-amber-100 text-amber-700",
  INACTIVE: "bg-ink-100 text-ink-500",
  ARCHIVED: "bg-ink-100 text-ink-400",

  OPEN: "bg-green-100 text-green-700",
  FULL: "bg-amber-100 text-amber-700",
  CANCELLED: "bg-red-100 text-red-700",

  PENDING: "bg-amber-100 text-amber-700",
  CONFIRMED: "bg-green-100 text-green-700",
  COMPLETED: "bg-brand-100 text-brand-700",

  UNPAID: "bg-ink-100 text-ink-600",
  PAID: "bg-green-100 text-green-700",
  REFUNDED: "bg-blue-100 text-blue-700",
  FAILED: "bg-red-100 text-red-700",
};

const LABELS: Record<string, string> = {
  PUBLISHED: "Published",
  DRAFT: "Draft",
  FULLY_BOOKED: "Fully Booked",
  INACTIVE: "Inactive",
  ARCHIVED: "Archived",
  OPEN: "Available",
  FULL: "Full",
  CANCELLED: "Cancelled",
  PENDING: "Pending",
  CONFIRMED: "Confirmed",
  COMPLETED: "Completed",
  UNPAID: "Unpaid",
  PAID: "Paid",
  REFUNDED: "Refunded",
  FAILED: "Failed",
};

export function StatusBadge({ status }: { status: string }) {
  return (
    <span className={cn("badge", STYLES[status] ?? "bg-ink-100 text-ink-600")}>
      {LABELS[status] ?? status}
    </span>
  );
}
