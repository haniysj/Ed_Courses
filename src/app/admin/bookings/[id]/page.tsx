import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { BookingRowActions } from "@/components/admin/booking-row-actions";
import { RescheduleForm } from "@/components/admin/reschedule-form";
import { formatCurrency } from "@/lib/pricing";
import { formatDate, formatTimeRange } from "@/lib/utils";

export const dynamic = "force-dynamic";

export default async function AdminBookingDetailPage({ params }: { params: { id: string } }) {
  const booking = await prisma.booking.findUnique({
    where: { id: params.id },
    include: { course: true, schedule: true, instructor: true },
  });
  if (!booking) notFound();

  const schedules = await prisma.courseSchedule.findMany({
    where: { courseId: booking.courseId },
    orderBy: { date: "asc" },
  });

  return (
    <div className="max-w-3xl">
      <h1 className="text-2xl font-bold text-ink-900">Booking Details</h1>
      <p className="mt-1 text-ink-500">Reference: {booking.id}</p>

      <div className="card mt-6 space-y-4 p-6">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-ink-900">Status</h2>
          <BookingRowActions id={booking.id} status={booking.status} paymentStatus={booking.paymentStatus} />
        </div>

        <div className="grid gap-4 border-t border-ink-100 pt-4 sm:grid-cols-2">
          <Info label="Course" value={booking.course.title} />
          <Info label="Instructor" value={booking.instructor.fullName} />
          <Info label="Session Date" value={formatDate(booking.schedule.date)} />
          <Info label="Session Time" value={formatTimeRange(booking.schedule.startTime, booking.schedule.endTime)} />
          <Info label="Duration (snapshot)" value={`${booking.durationHoursSnapshot} hours`} />
          <Info label="Hourly Rate (snapshot)" value={formatCurrency(booking.hourlyRateSnapshot, booking.currencySnapshot)} />
          <Info label="Total Price (snapshot)" value={formatCurrency(booking.totalPriceSnapshot, booking.currencySnapshot)} />
          <Info label="Booked On" value={formatDate(booking.createdAt)} />
        </div>

        <p className="rounded-lg bg-ink-50 p-3 text-xs text-ink-500">
          Price fields are locked to the values at the time of booking. Changing the course&apos;s current hourly rate will not affect this booking.
        </p>
      </div>

      <div className="card mt-6 space-y-3 p-6">
        <h2 className="font-bold text-ink-900">Learner Information</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Info label="Full Name" value={booking.learnerName} />
          <Info label="Email" value={booking.learnerEmail} />
          <Info label="Phone" value={booking.learnerPhone} />
          <Info label="Country" value={booking.country} />
          <Info label="Preferred Contact" value={booking.preferredContact} />
        </div>
        {booking.notes && (
          <div>
            <p className="text-xs font-semibold uppercase text-ink-400">Notes</p>
            <p className="mt-1 text-sm text-ink-700">{booking.notes}</p>
          </div>
        )}
      </div>

      <div className="card mt-6 space-y-3 p-6">
        <h2 className="font-bold text-ink-900">Reschedule</h2>
        <p className="text-sm text-ink-500">Move this booking to a different available session for the same course.</p>
        <RescheduleForm bookingId={booking.id} currentScheduleId={booking.scheduleId} schedules={schedules} />
      </div>
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase text-ink-400">{label}</p>
      <p className="mt-1 text-sm font-medium text-ink-800">{value}</p>
    </div>
  );
}
