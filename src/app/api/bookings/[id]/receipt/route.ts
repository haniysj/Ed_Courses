import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "application/pdf"];
const MAX_BYTES = 5 * 1024 * 1024; // 5MB

// Booking IDs are unguessable cuids, same trust model as the rest of the
// booking-confirmation flow (see src/app/api/bookings/[id]/route.ts) --
// no login is required to book a course, so none is required to attach a
// receipt to that same booking either.
export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  const body = await req.json();
  const { fileName, mimeType, dataUrl } = body;

  if (typeof mimeType !== "string" || !ALLOWED_TYPES.includes(mimeType)) {
    return NextResponse.json({ error: "Only JPG, PNG, WEBP, or PDF files are accepted." }, { status: 400 });
  }
  if (typeof dataUrl !== "string" || !dataUrl.startsWith("data:")) {
    return NextResponse.json({ error: "Invalid file data." }, { status: 400 });
  }

  const base64Length = dataUrl.length - dataUrl.indexOf(",") - 1;
  const approxBytes = base64Length * 0.75;
  if (approxBytes > MAX_BYTES) {
    return NextResponse.json({ error: "File is too large. Maximum size is 5MB." }, { status: 400 });
  }

  const booking = await prisma.booking.findUnique({ where: { id: params.id } });
  if (!booking) return NextResponse.json({ error: "Booking not found" }, { status: 404 });

  const updated = await prisma.booking.update({
    where: { id: params.id },
    data: {
      receiptData: dataUrl,
      receiptFileName: typeof fileName === "string" ? fileName.slice(0, 255) : null,
      receiptMimeType: mimeType,
      receiptUploadedAt: new Date(),
    },
    select: { id: true, receiptFileName: true, receiptUploadedAt: true },
  });

  return NextResponse.json(updated);
}
