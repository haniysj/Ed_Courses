import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { bookingUpdateSchema } from "@/lib/validation";

// Booking IDs are unguessable cuids, so the confirmation page can be viewed
// without login (like most e-commerce order-confirmation links).
export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  const booking = await prisma.booking.findUnique({
    where: { id: params.id },
    include: { course: true, schedule: true, instructor: true },
  });
  if (!booking) return NextResponse.json({ error: "Booking not found" }, { status: 404 });
  return NextResponse.json(booking);
}

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (session?.user?.role !== "ADMIN") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const parsed = bookingUpdateSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message ?? "Invalid input" }, { status: 400 });
  }

  try {
    const updated = await prisma.$transaction(async (tx) => {
      const existing = await tx.booking.findUnique({ where: { id: params.id } });
      if (!existing) throw new Error("Booking not found");

      const { scheduleId, ...rest } = parsed.data;

      if (scheduleId && scheduleId !== existing.scheduleId) {
        const newSchedule = await tx.courseSchedule.findUnique({ where: { id: scheduleId } });
        if (!newSchedule || newSchedule.courseId !== existing.courseId) {
          throw new Error("Selected schedule does not belong to this course");
        }
        if (newSchedule.seatsBooked >= newSchedule.capacity) {
          throw new Error("The selected session is fully booked");
        }

        const oldSchedule = await tx.courseSchedule.findUnique({ where: { id: existing.scheduleId } });
        if (oldSchedule) {
          const released = Math.max(0, oldSchedule.seatsBooked - 1);
          await tx.courseSchedule.update({
            where: { id: oldSchedule.id },
            data: { seatsBooked: released, status: "OPEN" },
          });
        }

        const newSeats = newSchedule.seatsBooked + 1;
        await tx.courseSchedule.update({
          where: { id: newSchedule.id },
          data: { seatsBooked: newSeats, status: newSeats >= newSchedule.capacity ? "FULL" : "OPEN" },
        });
      }

      if (rest.status === "CANCELLED" && existing.status !== "CANCELLED") {
        const schedule = await tx.courseSchedule.findUnique({ where: { id: existing.scheduleId } });
        if (schedule) {
          const released = Math.max(0, schedule.seatsBooked - 1);
          await tx.courseSchedule.update({
            where: { id: schedule.id },
            data: { seatsBooked: released, status: "OPEN" },
          });
        }
      }

      return tx.booking.update({
        where: { id: params.id },
        data: { ...rest, ...(scheduleId ? { scheduleId } : {}) },
        include: { course: true, schedule: true, instructor: true },
      });
    });

    return NextResponse.json(updated);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unable to update booking";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
