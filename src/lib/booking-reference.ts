import { prisma } from "@/lib/prisma";

/**
 * Short, human-friendly booking reference (e.g. "BK-1042") for use in
 * conversation, WhatsApp messages, and printed confirmations -- the
 * database id (a long cuid) still backs the URL/route and stays the
 * source of truth for lookups.
 */
export async function generateBookingReference(tx: Pick<typeof prisma, "booking">): Promise<string> {
  const count = await tx.booking.count();
  return `BK-${1000 + count}`;
}
