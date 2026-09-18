import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { bookingInputSchema } from "@/lib/validation";
import { calculateTotalPrice } from "@/lib/pricing";
import { generateBookingReference } from "@/lib/booking-reference";

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { searchParams } = new URL(req.url);
  const status = searchParams.get("status") ?? undefined;
  const courseId = searchParams.get("courseId") ?? undefined;
  const instructorId = searchParams.get("instructorId") ?? undefined;

  const where: Record<string, unknown> = {};
  if (session.user.role !== "ADMIN") {
    where.userId = session.user.id;
  }
  if (status) where.status = status;
  if (courseId) where.courseId = courseId;
  if (instructorId) where.instructorId = instructorId;

  const bookings = await prisma.booking.findMany({
    where,
    include: { course: true, schedule: true, instructor: true },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(bookings);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const parsed = bookingInputSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message ?? "Invalid input" }, { status: 400 });
  }
  const data = parsed.data;

  const session = await getServerSession(authOptions);

  try {
    const booking = await prisma.$transaction(async (tx) => {
      const course = await tx.course.findUnique({ where: { id: data.courseId } });
      if (!course) throw new Error("Course not found");
      if (course.status !== "PUBLISHED") throw new Error("This course is not currently available for booking");

      const schedule = await tx.courseSchedule.findUnique({ where: { id: data.scheduleId } });
      if (!schedule || schedule.courseId !== data.courseId) throw new Error("Selected schedule not found");
      if (schedule.status !== "OPEN") throw new Error("This session is no longer available");
      if (schedule.seatsBooked >= schedule.capacity) throw new Error("This session is fully booked");
      if (new Date(schedule.date) < new Date(new Date().setHours(0, 0, 0, 0))) {
        throw new Error("Cannot book a session in the past");
      }

      const totalPrice = calculateTotalPrice(course.hourlyRate, course.durationHours);
      const bookingReference = await generateBookingReference(tx);

      const newBooking = await tx.booking.create({
        data: {
          bookingReference,
          courseId: course.id,
          scheduleId: schedule.id,
          instructorId: course.instructorId,
          userId: session?.user?.id,
          learnerName: data.learnerName,
          learnerEmail: data.learnerEmail,
          learnerPhone: data.learnerPhone,
          country: data.country,
          preferredContact: data.preferredContact,
          notes: data.notes || null,
          hourlyRateSnapshot: course.hourlyRate,
          durationHoursSnapshot: course.durationHours,
          totalPriceSnapshot: totalPrice,
          currencySnapshot: course.currency,
          status: "PENDING",
          paymentStatus: "UNPAID",
        },
      });

      const newSeatsBooked = schedule.seatsBooked + 1;
      await tx.courseSchedule.update({
        where: { id: schedule.id },
        data: {
          seatsBooked: newSeatsBooked,
          status: newSeatsBooked >= schedule.capacity ? "FULL" : "OPEN",
        },
      });

      return newBooking;
    });

    return NextResponse.json(booking, { status: 201 });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unable to create booking";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
