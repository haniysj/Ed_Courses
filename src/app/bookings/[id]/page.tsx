import { notFound } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { StatusBadge } from "@/components/status-badge";
import { formatCurrency } from "@/lib/pricing";
import { formatDate, formatTimeRange } from "@/lib/utils";

export const dynamic = "force-dynamic";

export default async function BookingStatusPage({ params }: { params: { id: string } }) {
  const booking = await prisma.booking.findUnique({
    where: { id: params.id },
    include: { course: true, schedule: true, instructor: true },
  });
  if (!booking) notFound();

  return (
    <div className="container-page max-w-2xl py-12">
      <div className="card p-8">
        <div className="mb-6 text-center">
          <span className="text-3xl">&#128197;</span>
          <h1 className="mt-2 text-2xl font-bold text-ink-900">Booking Confirmation</h1>
          <p className="text-sm text-ink-500">Reference: {booking.id}</p>
        </div>

        <div className="flex items-center justify-between border-b border-ink-100 pb-4">
          <span className="text-sm text-ink-500">Status</span>
          <StatusBadge status={booking.status} />
        </div>
        <div className="flex items-center justify-between border-b border-ink-100 py-4">
          <span className="text-sm text-ink-500">Payment</span>
          <StatusBadge status={booking.paymentStatus} />
        </div>

        <dl className="mt-4 space-y-3 text-sm">
          <Row label="Course" value={booking.course.title} />
          <Row label="Instructor" value={booking.instructor.fullName} />
          <Row label="Date" value={formatDate(booking.schedule.date)} />
          <Row label="Time" value={formatTimeRange(booking.schedule.startTime, booking.schedule.endTime)} />
          <Row label="Duration" value={`${booking.durationHoursSnapshot} hours`} />
          <Row label="Hourly Rate" value={formatCurrency(booking.hourlyRateSnapshot, booking.currencySnapshot)} />
          <Row
            label="Total Price"
            value={<span className="text-lg font-extrabold text-brand-700">{formatCurrency(booking.totalPriceSnapshot, booking.currencySnapshot)}</span>}
          />
          <Row label="Learner" value={booking.learnerName} />
          <Row label="Email" value={booking.learnerEmail} />
          <Row label="Phone" value={booking.learnerPhone} />
        </dl>

        <div className="mt-8 flex gap-3">
          <Link href="/courses" className="btn-outline flex-1 text-center">Browse More Courses</Link>
          <Link href="/" className="btn-primary flex-1 text-center">Back to Home</Link>
        </div>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between">
      <dt className="text-ink-500">{label}</dt>
      <dd className="font-medium text-ink-800">{value}</dd>
    </div>
  );
}
