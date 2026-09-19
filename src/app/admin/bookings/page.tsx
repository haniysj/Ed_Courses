import Link from "next/link";
import type { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { BookingRowActions } from "@/components/admin/booking-row-actions";
import { Money } from "@/components/money";
import { formatDate } from "@/lib/utils";
import { BOOKING_STATUSES, BOOKING_STATUS_LABELS } from "@/lib/enums";
import { WhatsAppIconButton } from "@/components/whatsapp-button";

export const dynamic = "force-dynamic";

export default async function AdminBookingsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const { status, courseId, instructorId, learner } = searchParams;

  const where: Prisma.BookingWhereInput = {};
  if (status) where.status = status;
  if (courseId) where.courseId = courseId;
  if (instructorId) where.instructorId = instructorId;
  if (learner) {
    where.OR = [
      { learnerName: { contains: learner, mode: "insensitive" } },
      { learnerEmail: { contains: learner, mode: "insensitive" } },
    ];
  }

  const [bookings, courses, instructors] = await Promise.all([
    prisma.booking.findMany({
      where,
      include: { course: true, schedule: true, instructor: true },
      orderBy: { createdAt: "desc" },
    }),
    prisma.course.findMany({ orderBy: { title: "asc" } }),
    prisma.instructor.findMany({ orderBy: { fullName: "asc" } }),
  ]);

  return (
    <div>
      <h1 className="text-2xl font-bold text-ink-900 dark:text-white">Bookings</h1>
      <p className="mt-1 text-ink-500 dark:text-ink-400">Review, confirm, and manage learner bookings.</p>

      <form method="get" className="card mt-6 grid gap-4 p-5 sm:grid-cols-2 lg:grid-cols-5">
        <div>
          <label className="label">Learner</label>
          <input name="learner" defaultValue={learner} className="input" placeholder="Name or email" />
        </div>
        <div>
          <label className="label">Course</label>
          <select name="courseId" defaultValue={courseId ?? ""} className="input">
            <option value="">All Courses</option>
            {courses.map((c) => <option key={c.id} value={c.id}>{c.title}</option>)}
          </select>
        </div>
        <div>
          <label className="label">Instructor</label>
          <select name="instructorId" defaultValue={instructorId ?? ""} className="input">
            <option value="">All Instructors</option>
            {instructors.map((i) => <option key={i.id} value={i.id}>{i.fullName}</option>)}
          </select>
        </div>
        <div>
          <label className="label">Status</label>
          <select name="status" defaultValue={status ?? ""} className="input">
            <option value="">All Statuses</option>
            {BOOKING_STATUSES.map((s) => <option key={s} value={s}>{BOOKING_STATUS_LABELS[s].en}</option>)}
          </select>
        </div>
        <div className="flex items-end gap-2">
          <button type="submit" className="btn-primary w-full">Filter</button>
          <a href="/admin/bookings" className="btn-outline w-full text-center">Reset</a>
        </div>
      </form>

      <div className="card mt-6 overflow-x-auto">
        <table className="min-w-full divide-y divide-ink-100 text-sm">
          <thead className="bg-ink-50 dark:bg-ink-800 text-left text-xs uppercase text-ink-500 dark:text-ink-400">
            <tr>
              <th className="px-4 py-3">Learner</th>
              <th className="px-4 py-3">Phone</th>
              <th className="px-4 py-3">Course</th>
              <th className="px-4 py-3">Instructor</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Total</th>
              <th className="px-4 py-3">Booked On</th>
              <th className="px-4 py-3">Status / Payment</th>
              <th className="px-4 py-3 text-right">Details</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink-100 dark:divide-ink-800">
            {bookings.map((b) => (
              <tr key={b.id}>
                <td className="px-4 py-3">
                  <p className="font-medium text-ink-800 dark:text-ink-100">{b.learnerName}</p>
                  <p className="text-xs text-ink-400">{b.learnerEmail}</p>
                  <p className="text-xs text-ink-400">{b.bookingReference ?? b.id}</p>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="text-ink-600 dark:text-ink-300">{b.learnerPhone}</span>
                    <WhatsAppIconButton phone={b.learnerPhone} />
                  </div>
                </td>
                <td className="px-4 py-3 text-ink-600 dark:text-ink-300">{b.course.title}</td>
                <td className="px-4 py-3 text-ink-600 dark:text-ink-300">{b.instructor.fullName}</td>
                <td className="px-4 py-3 text-ink-600 dark:text-ink-300">{formatDate(b.schedule.date)}</td>
                <td className="px-4 py-3 font-semibold text-brand-700"><Money amount={b.totalPriceSnapshot} currency={b.currencySnapshot} weight="bold" /></td>
                <td className="px-4 py-3 text-ink-500 dark:text-ink-400">{formatDate(b.createdAt)}</td>
                <td className="px-4 py-3">
                  <BookingRowActions id={b.id} status={b.status} paymentStatus={b.paymentStatus} />
                </td>
                <td className="px-4 py-3 text-right">
                  <Link href={`/admin/bookings/${b.id}`} className="btn-outline btn-sm">View</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {bookings.length === 0 && <p className="p-6 text-center text-ink-400">No bookings match your filters.</p>}
      </div>
    </div>
  );
}
