import { notFound } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { StatusBadge } from "@/components/status-badge";
import { Money } from "@/components/money";
import { formatTimeRange, formatDateLtr } from "@/lib/utils";
import { getServerLocale } from "@/lib/i18n/server";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { ReceiptUpload } from "@/components/receipt-upload";

export const dynamic = "force-dynamic";

export default async function BookingStatusPage({ params }: { params: { id: string } }) {
  const booking = await prisma.booking.findUnique({
    where: { id: params.id },
    include: { course: true, schedule: true, instructor: true },
  });
  if (!booking) notFound();

  const locale = getServerLocale();
  const t = getDictionary(locale);
  const isAr = locale === "ar";

  return (
    <div className="container-page max-w-2xl py-12">
      <div className="card animate-fade-in p-8">
        <div className="mb-6 text-center">
          <span className="text-3xl">&#128197;</span>
          <h1 className="mt-2 text-2xl font-bold text-ink-900 dark:text-white">{isAr ? "تأكيد الحجز" : "Booking Confirmation"}</h1>
          <p className="text-sm text-ink-500 dark:text-ink-400">{isAr ? "الرقم المرجعي" : "Reference"}: {booking.bookingReference ?? booking.id}</p>
        </div>

        <div className="flex items-center justify-between border-b border-ink-100 pb-4 dark:border-ink-800">
          <span className="text-sm text-ink-500 dark:text-ink-400">{isAr ? "الحالة" : "Status"}</span>
          <StatusBadge status={booking.status} />
        </div>
        <div className="flex items-center justify-between border-b border-ink-100 py-4 dark:border-ink-800">
          <span className="text-sm text-ink-500 dark:text-ink-400">{isAr ? "الدفع" : "Payment"}</span>
          <StatusBadge status={booking.paymentStatus} />
        </div>

        <dl className="mt-4 space-y-3 text-sm">
          <Row label={isAr ? "الدورة" : "Course"} value={booking.course.title} />
          <Row label={t.courseDetail.instructor} value={booking.instructor.fullName} />
          <Row label={t.courseDetail.date} value={formatDateLtr(booking.schedule.date)} />
          <Row label={t.courseDetail.time} value={formatTimeRange(booking.schedule.startTime, booking.schedule.endTime)} />
          <Row label={t.courses.duration} value={`${booking.durationHoursSnapshot} ${t.common.hours}`} />
          <Row
            label={t.courses.totalPrice}
            value={<span className="text-lg font-extrabold text-brand-700 dark:text-brand-400"><Money amount={booking.totalPriceSnapshot} currency={booking.currencySnapshot} weight="bold" /></span>}
          />
          <Row label={t.booking.fullName} value={booking.learnerName} />
          <Row label={t.booking.email} value={booking.learnerEmail} />
          <Row label={t.booking.phone} value={booking.learnerPhone} />
        </dl>

        <div className="mt-8 flex gap-3">
          <Link href="/courses" className="btn-outline flex-1 text-center">{isAr ? "تصفح المزيد من الدورات" : "Browse More Courses"}</Link>
          <Link href="/" className="btn-primary flex-1 text-center">{isAr ? "العودة للرئيسية" : "Back to Home"}</Link>
        </div>
      </div>

      <div className="mt-6">
        <ReceiptUpload bookingId={booking.id} existingFileName={booking.receiptFileName} />
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between">
      <dt className="text-ink-500 dark:text-ink-400">{label}</dt>
      <dd className="font-medium text-ink-800 dark:text-ink-100">{value}</dd>
    </div>
  );
}
