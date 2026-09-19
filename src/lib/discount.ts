import { endOfDayOman } from "@/lib/pricing";

/** Maps validated course input to the discount columns. "No discount" clears every field. */
export function discountColumns(data: { discountType: string; discountValue: number; discountEndsAt?: string }) {
  if (data.discountType === "NONE" || !(data.discountValue > 0)) {
    return { discountType: "NONE", discountValue: 0, discountEndsAt: null as Date | null };
  }
  return {
    discountType: data.discountType,
    discountValue: data.discountValue,
    discountEndsAt: data.discountEndsAt ? endOfDayOman(data.discountEndsAt) : null,
  };
}
