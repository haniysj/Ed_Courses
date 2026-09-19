import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { StatusBadge } from "@/components/status-badge";
import { Money } from "@/components/money";
import { formatTimeRange, formatDateLtr } from "@/lib/utils";
import { getServerLocale } from "@/lib/i18n/server";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getLearnerOverview } from "@/lib/free-lessons/overview";
import { LearningProgressCard } from "@/components/free-lessons/learning-progress-card";
import { RecommendedLessons } from "@/components/free-lessons/recommended-lessons";
import { fl } from "@/lib/free-lessons/i18n";

export const metadata: Metadata = { title: "My Bookings" };
export const dynamic = "force-dynamic";

export default async function MyBookingsPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user) redirect("/login?callbackUrl=/my-bookings");

  const locale = getServerLocale();
  const t = getDictionary(locale);

  const overview = await getLearnerOverview(session.user.id, 2);
  const ft = fl(locale);

  const bookings = await prisma.booking.findMany({
    where: { userId: session.user.id },
    include: { course: true, schedule: true, instructor: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="container-page py-10">
      <h1 className="text-3xl font-bold text-ink-900 dark:text-white">{t.myBookings.title}</h1>
      <p className="mt-1 text-ink-500 dark:text-ink-400">{t.myBookings.subtitle}</p>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <LearningProgressCard overview={overview} locale={locale} />
        <section className="card p-6">
          <h2 className="text-lg font-bold text-ink-900 dark:text-white">{ft.recommendedTitle}</h2>
          <p className="mt-0.5 text-sm text-ink-500 dark:text-ink-400">{overview.profile ? ft.basedOnPlacement : ft.recommendedBody}</p>
          <div className="mt-4">
            <RecommendedLessons recs={overview.recommendations} locale={locale} />
          </div>
          <Link href={overview.profile ? "/free-lessons" : "/placement"} className="mt-4 inline-block text-sm font-semibold text-brand-700 hover:underline dark:text-brand-400">
            {overview.profile ? ft.openHub : ft.takePlacementBtn} →
          </Link>
        </section>
      </div>

      <div className="mt-8 space-y-4">
        {bookings.map((b) => (
          <div key={b.id} className="card hover-lift flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-bold text-ink-900 dark:text-white">{b.course.title}</p>
              <p className="text-xs text-ink-400">{b.bookingReference ?? b.id}</p>
              <p className="text-sm text-ink-500 dark:text-ink-400">
                {formatDateLtr(b.schedule.date)} &middot; {formatTimeRange(b.schedule.startTime, b.schedule.endTime)} &middot; {b.instructor.fullName}
              </p>
              <p className="mt-1 text-sm font-semibold text-brand-700 dark:text-brand-400"><Money amount={b.totalPriceSnapshot} currency={b.currencySnapshot} weight="bold" /></p>
            </div>
            <div className="flex items-center gap-3">
              <StatusBadge status={b.status} />
              <StatusBadge status={b.paymentStatus} />
              <Link href={`/bookings/${b.id}`} className="btn-outline btn-sm">
                {b.receiptUploadedAt ? t.myBookings.view : locale === "ar" ? "رفع الإيصال" : "Upload Receipt"}
              </Link>
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
