import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { BookingRowActions } from "@/components/admin/booking-row-actions";
import { RescheduleForm } from "@/components/admin/reschedule-form";
import { ApprovePaymentButton } from "@/components/admin/approve-payment-button";
import { WhatsAppIconButton } from "@/components/whatsapp-button";
import { Money } from "@/components/money";
import { formatTimeRange, formatDateLtr } from "@/lib/utils";

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
      <h1 className="text-2xl font-bold text-ink-900 dark:text-white">Booking Details</h1>
      <p className="mt-1 text-ink-500 dark:text-ink-400">Reference: {booking.bookingReference ?? booking.id}</p>

      <div className="card mt-6 space-y-4 p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="font-bold text-ink-900 dark:text-white">Status</h2>
          <div className="flex flex-wrap items-center gap-3">
            <ApprovePaymentButton id={booking.id} status={booking.status} paymentStatus={booking.paymentStatus} />
            <BookingRowActions id={booking.id} status={booking.status} paymentStatus={booking.paymentStatus} />
          </div>
        </div>

        <div className="grid gap-4 border-t border-ink-100 pt-4 sm:grid-cols-2">
          <Info label="Course" value={booking.course.title} />
          <Info label="Instructor" value={booking.instructor.fullName} />
          <Info label="Session Date" value={formatDateLtr(booking.schedule.date)} />
          <Info label="Session Time" value={formatTimeRange(booking.schedule.startTime, booking.schedule.endTime)} />
          <Info label="Duration (snapshot)" value={`${booking.durationHoursSnapshot} hours`} />
          <Info label="Hourly Rate (snapshot)" value=<Money amount={booking.hourlyRateSnapshot} currency={booking.currencySnapshot} weight="medium" /> />
          <Info label="Total Price (snapshot)" value=<Money amount={booking.totalPriceSnapshot} currency={booking.currencySnapshot} weight="medium" /> />
          <Info label="Booked On" value={formatDateLtr(booking.createdAt)} />
        </div>

        <p className="rounded-lg bg-ink-50 p-3 text-xs text-ink-500 dark:text-ink-400">
          Price fields are locked to the values at the time of booking. Changing the course&apos;s current hourly rate will not affect this booking.
        </p>
      </div>

      <div className="card mt-6 space-y-3 p-6">
        <h2 className="font-bold text-ink-900 dark:text-white">Learner Information</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Info label="Full Name" value={booking.learnerName} />
          <Info label="Email" value={booking.learnerEmail} />
          <div>
            <p className="text-xs font-semibold uppercase text-ink-400">Phone</p>
            <div className="mt-1 flex items-center gap-2">
              <p className="text-sm font-medium text-ink-800 dark:text-ink-100">{booking.learnerPhone}</p>
              <WhatsAppIconButton phone={booking.learnerPhone} />
            </div>
          </div>
          <Info label="Country" value={booking.country} />
          <Info label="Preferred Contact" value={booking.preferredContact} />
        </div>
        {booking.notes && (
          <div>
            <p className="text-xs font-semibold uppercase text-ink-400">Notes</p>
            <p className="mt-1 text-sm text-ink-700 dark:text-ink-200">{booking.notes}</p>
          </div>
        )}
      </div>

      <div className="card mt-6 space-y-3 p-6">
        <h2 className="font-bold text-ink-900 dark:text-white">Payment Receipt</h2>
        {booking.receiptData ? (
          <div className="flex items-center justify-between rounded-lg bg-ink-50 p-3 dark:bg-ink-800">
            <div>
              <p className="text-sm font-medium text-ink-800 dark:text-ink-100">{booking.receiptFileName ?? "Receipt"}</p>
              <p className="text-xs text-ink-400">
                Uploaded {booking.receiptUploadedAt ? formatDateLtr(booking.receiptUploadedAt) : "—"}
              </p>
            </div>
            <a href={booking.receiptData} download={booking.receiptFileName ?? "receipt"} className="btn-outline btn-sm">
              View / Download
            </a>
          </div>
        ) : (
          <p className="text-sm text-ink-500 dark:text-ink-400">No receipt has been uploaded by the learner yet.</p>
        )}
      </div>

      <div className="card mt-6 space-y-3 p-6">
        <h2 className="font-bold text-ink-900 dark:text-white">Reschedule</h2>
        <p className="text-sm text-ink-500 dark:text-ink-400">Move this booking to a different available session for the same course.</p>
        <RescheduleForm bookingId={booking.id} currentScheduleId={booking.scheduleId} schedules={schedules} />
      </div>
    </div>
  );
}

function Info({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase text-ink-400">{label}</p>
      <p className="mt-1 text-sm font-medium text-ink-800 dark:text-ink-100">{value}</p>
    </div>
  );
}
