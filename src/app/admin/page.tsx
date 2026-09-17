import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { StatCard } from "@/components/admin/stat-card";
import { StatusBadge } from "@/components/status-badge";
import {
  BookingsByMonthChart,
  CategoryBreakdownChart,
  PopularCoursesChart,
  RevenueByMonthChart,
} from "@/components/admin/dashboard-charts";
import { formatCurrency } from "@/lib/pricing";
import { formatDate } from "@/lib/utils";
import { getServerLocale } from "@/lib/i18n/server";

export const dynamic = "force-dynamic";

function monthKey(date: Date) {
  return date.toLocaleDateString("en-US", { month: "short", year: "2-digit" });
}

export default async function AdminDashboardPage() {
  const locale = getServerLocale();
  const isAr = locale === "ar";

  const [
    totalCourses,
    activeCourses,
    totalInstructors,
    totalLearners,
    pendingBookings,
    confirmedBookings,
    completedBookings,
    revenueBookings,
    allBookings,
    upcomingSchedules,
    recentBookings,
  ] = await Promise.all([
    prisma.course.count(),
    prisma.course.count({ where: { status: "PUBLISHED" } }),
    prisma.instructor.count(),
    prisma.user.count({ where: { role: "LEARNER" } }),
    prisma.booking.count({ where: { status: "PENDING" } }),
    prisma.booking.count({ where: { status: "CONFIRMED" } }),
    prisma.booking.count({ where: { status: "COMPLETED" } }),
    prisma.booking.findMany({ where: { status: { in: ["CONFIRMED", "COMPLETED"] } } }),
    prisma.booking.findMany({ include: { course: { include: { category: true } } } }),
    prisma.courseSchedule.findMany({
      where: { date: { gte: new Date(new Date().setHours(0, 0, 0, 0)) }, status: { not: "CANCELLED" } },
      include: { course: { include: { instructor: true } } },
      orderBy: { date: "asc" },
      take: 5,
    }),
    prisma.booking.findMany({
      include: { course: true, instructor: true },
      orderBy: { createdAt: "desc" },
      take: 6,
    }),
  ]);

  const totalRevenue = revenueBookings.reduce((sum, b) => sum + b.totalPriceSnapshot, 0);

  const now = new Date();
  const monthBuckets: { month: string; bookings: number; revenue: number }[] = [];
  for (let i = 5; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    monthBuckets.push({ month: monthKey(d), bookings: 0, revenue: 0 });
  }
  for (const b of allBookings) {
    const key = monthKey(new Date(b.createdAt));
    const bucket = monthBuckets.find((m) => m.month === key);
    if (bucket) {
      bucket.bookings += 1;
      if (b.status === "CONFIRMED" || b.status === "COMPLETED") bucket.revenue += b.totalPriceSnapshot;
    }
  }

  const courseBookingCounts = new Map<string, number>();
  const categoryBookingCounts = new Map<string, number>();
  for (const b of allBookings) {
    courseBookingCounts.set(b.course.title, (courseBookingCounts.get(b.course.title) ?? 0) + 1);
    const catName = b.course.category.name;
    categoryBookingCounts.set(catName, (categoryBookingCounts.get(catName) ?? 0) + 1);
  }
  const popularCourses = Array.from(courseBookingCounts.entries())
    .map(([name, bookings]) => ({ name, bookings }))
    .sort((a, b) => b.bookings - a.bookings)
    .slice(0, 6);
  const categoryBreakdown = Array.from(categoryBookingCounts.entries()).map(([name, value]) => ({ name, value }));

  const noBookingsYet = isAr ? "لا توجد حجوزات بعد." : "No bookings yet.";

  return (
    <div>
      <h1 className="text-2xl font-bold text-ink-900 dark:text-white">{isAr ? "لوحة التحكم" : "Dashboard"}</h1>
      <p className="mt-1 text-ink-500 dark:text-ink-400">{isAr ? "نظرة عامة على أداء المنصة." : "Overview of platform performance."}</p>

      <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
        <StatCard label={isAr ? "إجمالي الدورات" : "Total Courses"} value={String(totalCourses)} hint={isAr ? `${activeCourses} منشورة` : `${activeCourses} published`} />
        <StatCard label={isAr ? "إجمالي المدربين" : "Total Instructors"} value={String(totalInstructors)} />
        <StatCard label={isAr ? "إجمالي المتعلمين" : "Total Learners"} value={String(totalLearners)} />
        <StatCard label={isAr ? "إجمالي الإيرادات" : "Total Revenue"} value={formatCurrency(totalRevenue)} hint={isAr ? "مؤكدة + مكتملة" : "Confirmed + Completed"} />
        <StatCard label={isAr ? "حجوزات قيد الانتظار" : "Pending Bookings"} value={String(pendingBookings)} />
        <StatCard label={isAr ? "حجوزات مؤكدة" : "Confirmed Bookings"} value={String(confirmedBookings)} />
        <StatCard label={isAr ? "دورات مكتملة" : "Completed Courses"} value={String(completedBookings)} />
        <StatCard label={isAr ? "دورات نشطة" : "Active Courses"} value={String(activeCourses)} />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="card p-5">
          <h2 className="font-bold text-ink-900 dark:text-white">{isAr ? "الحجوزات الشهرية" : "Bookings by Month"}</h2>
          <BookingsByMonthChart data={monthBuckets.map(({ month, bookings }) => ({ month, bookings }))} />
        </div>
        <div className="card p-5">
          <h2 className="font-bold text-ink-900 dark:text-white">{isAr ? "الإيرادات الشهرية (ر.ع.)" : "Revenue by Month (OMR)"}</h2>
          <RevenueByMonthChart data={monthBuckets.map(({ month, revenue }) => ({ month, revenue }))} />
        </div>
        <div className="card p-5">
          <h2 className="font-bold text-ink-900 dark:text-white">{isAr ? "الدورات الأكثر طلبًا" : "Most Popular Courses"}</h2>
          {popularCourses.length > 0 ? (
            <PopularCoursesChart data={popularCourses} />
          ) : (
            <p className="py-10 text-center text-sm text-ink-400">{noBookingsYet}</p>
          )}
        </div>
        <div className="card p-5">
          <h2 className="font-bold text-ink-900 dark:text-white">{isAr ? "الحجوزات حسب التصنيف" : "Bookings by Category"}</h2>
          {categoryBreakdown.length > 0 ? (
            <CategoryBreakdownChart data={categoryBreakdown} />
          ) : (
            <p className="py-10 text-center text-sm text-ink-400">{noBookingsYet}</p>
          )}
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="card p-5">
          <h2 className="font-bold text-ink-900 dark:text-white">{isAr ? "الدورات القادمة" : "Upcoming Courses"}</h2>
          <div className="mt-3 space-y-3">
            {upcomingSchedules.map((s) => (
              <div key={s.id} className="flex items-center justify-between border-b border-ink-50 pb-3 last:border-0 last:pb-0 dark:border-ink-800">
                <div>
                  <p className="text-sm font-semibold text-ink-800 dark:text-ink-100">{s.course.title}</p>
                  <p className="text-xs text-ink-500 dark:text-ink-400">{formatDate(s.date)} &middot; {s.startTime}–{s.endTime} &middot; {s.course.instructor.fullName}</p>
                </div>
                <span className="text-xs text-ink-400">{s.seatsBooked}/{s.capacity} {isAr ? "مقعد" : "seats"}</span>
              </div>
            ))}
            {upcomingSchedules.length === 0 && (
              <p className="text-sm text-ink-400">{isAr ? "لا توجد جلسات قادمة." : "No upcoming sessions."}</p>
            )}
          </div>
        </div>

        <div className="card p-5">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-ink-900 dark:text-white">{isAr ? "أحدث الحجوزات" : "Recent Bookings"}</h2>
            <Link href="/admin/bookings" className="text-sm font-semibold text-brand-700 hover:underline dark:text-brand-400">
              {isAr ? "عرض الكل" : "View all"}
            </Link>
          </div>
          <div className="mt-3 space-y-3">
            {recentBookings.map((b) => (
              <div key={b.id} className="flex items-center justify-between border-b border-ink-50 pb-3 last:border-0 last:pb-0 dark:border-ink-800">
                <div>
                  <p className="text-sm font-semibold text-ink-800 dark:text-ink-100">{b.learnerName}</p>
                  <p className="text-xs text-ink-500 dark:text-ink-400">{b.course.title}</p>
                </div>
                <StatusBadge status={b.status} />
              </div>
            ))}
            {recentBookings.length === 0 && <p className="text-sm text-ink-400">{noBookingsYet}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
