import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdminApi } from "@/lib/require-admin";

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const session = await requireAdminApi();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const allowed: Record<string, unknown> = {};
  if (typeof body.status === "string") allowed.status = body.status;
  if (typeof body.capacity === "number") allowed.capacity = body.capacity;

  const schedule = await prisma.courseSchedule.update({ where: { id: params.id }, data: allowed });
  return NextResponse.json(schedule);
}

export async function DELETE(_req: NextRequest, { params }: { params: { id: string } }) {
  const session = await requireAdminApi();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const bookingCount = await prisma.booking.count({ where: { scheduleId: params.id } });
  if (bookingCount > 0) {
    return NextResponse.json(
      { error: "This session has existing bookings. Cancel it instead of deleting." },
      { status: 409 }
    );
  }

  await prisma.courseSchedule.delete({ where: { id: params.id } });
  return NextResponse.json({ success: true });
}
