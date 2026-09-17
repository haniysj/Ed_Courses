import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { StatusBadge } from "@/components/status-badge";
import { formatCurrency } from "@/lib/pricing";
import { formatDate, formatTimeRange } from "@/lib/utils";
import { getServerLocale } from "@/lib/i18n/server";
import { getDictionary } from "@/lib/i18n/get-dictionary";

export const metadata: Metadata = { title: "My Bookings" };
export const dynamic = "force-dynamic";

export default async function MyBookingsPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user) redirect("/login?callbackUrl=/my-bookings");

  const locale = getServerLocale();
  const t = getDictionary(locale);

  const bookings = await prisma.booking.findMany({
    where: { userId: session.user.id },
    include: { course: true, schedule: true, instructor: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="container-page py-10">
      <h1 className="text-3xl font-bold text-ink-900 dark:text-white">{t.myBookings.title}</h1>
      <p className="mt-1 text-ink-500 dark:text-ink-400">{t.myBookings.subtitle}</p>

      <div className="mt-8 space-y-4">
        {bookings.map((b) => (
          <div key={b.id} className="card hover-lift flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-bold text-ink-900 dark:text-white">{b.course.title}</p>
              <p className="text-sm text-ink-500 dark:text-ink-400">
                {formatDate(b.schedule.date)} &middot; {formatTimeRange(b.schedule.startTime, b.schedule.endTime)} &middot; {b.instructor.fullName}
              </p>
              <p className="mt-1 text-sm font-semibold text-brand-700 dark:text-brand-400">{formatCurrency(b.totalPriceSnapshot, b.currencySnapshot)}</p>
            </div>
            <div className="flex items-center gap-3">
              <StatusBadge status={b.status} />
              <StatusBadge status={b.paymentStatus} />
              <Link href={`/bookings/${b.id}`} className="btn-outline btn-sm">{t.myBookings.view}</Link>
            </div>
          </div>
        ))}

        {bookings.length === 0 && (
          <div className="card p-10 text-center text-ink-500 dark:text-ink-400">
            {t.myBookings.noBookings}
            <div className="mt-4">
              <Link href="/courses" className="btn-primary">{t.home.browseCourses}</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
