import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { CourseCard } from "@/components/course-card";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const [courses, instructorCount, categories] = await Promise.all([
    prisma.course.findMany({
      where: { status: "PUBLISHED" },
      include: { instructor: true, category: true, schedules: true },
      orderBy: { createdAt: "desc" },
      take: 6,
    }),
    prisma.instructor.count({ where: { active: true } }),
    prisma.category.findMany({ include: { _count: { select: { courses: true } } } }),
  ]);

  const learnerCount = await prisma.user.count({ where: { role: "LEARNER" } });

  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-950 via-brand-900 to-brand-800 text-white">
        <div className="container-page grid gap-10 py-20 md:grid-cols-2 md:items-center md:py-28">
          <div>
            <span className="badge bg-white/10 text-brand-100">Trusted by learners across Oman</span>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">
              Learn. Develop. Achieve.
            </h1>
            <p className="mt-4 max-w-lg text-lg text-brand-100">
              Book professional online courses with qualified instructors at flexible times.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/courses" className="btn-primary bg-white text-brand-800 hover:bg-brand-50">
                Browse Courses
              </Link>
              <Link href="/instructors" className="btn-outline border-white/30 bg-transparent text-white hover:bg-white/10">
                Meet Our Instructors
              </Link>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-white/10 pt-6 text-sm">
              <div>
                <dt className="text-brand-200">Courses</dt>
                <dd className="text-2xl font-bold">{courses.length > 0 ? "6+" : "0"}</dd>
              </div>
              <div>
                <dt className="text-brand-200">Instructors</dt>
                <dd className="text-2xl font-bold">{instructorCount}</dd>
              </div>
              <div>
                <dt className="text-brand-200">Learners</dt>
                <dd className="text-2xl font-bold">{learnerCount}+</dd>
              </div>
            </dl>
          </div>
          <div className="hidden md:block">
            <div className="ml-auto flex max-w-sm flex-col gap-4 rounded-2xl bg-white p-6 text-ink-900 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">Sample Pricing</p>
              <div>
                <p className="font-bold">English Communication Skills</p>
                <p className="text-sm text-ink-500">12 hours &middot; Ahmed Al Habsi</p>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-brand-50 p-4">
                <span className="text-sm text-ink-600">OMR 10/hr &times; 12h</span>
                <span className="text-2xl font-extrabold text-brand-700">OMR 120</span>
              </div>
              <p className="text-xs text-ink-400">Pricing updates automatically as duration or rate changes.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="mb-4 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
          {categories.map((c) => (
            <Link
              key={c.id}
              href={`/courses?category=${c.slug}`}
              className="card flex items-center justify-between p-4 text-sm font-medium text-ink-700 hover:border-brand-300 hover:text-brand-700"
            >
              {c.name}
              <span className="badge bg-ink-100 text-ink-500">{c._count.courses}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-page pb-20">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-ink-900">Featured Courses</h2>
            <p className="mt-1 text-ink-500">Hand-picked courses to help you get started</p>
          </div>
          <Link href="/courses" className="hidden text-sm font-semibold text-brand-700 hover:underline sm:block">
            View all courses &rarr;
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        {courses.length === 0 && (
          <p className="text-center text-ink-500">No published courses yet. Check back soon.</p>
        )}
      </section>

      <section className="bg-ink-50 py-16">
        <div className="container-page grid gap-8 md:grid-cols-3">
          {[
            { title: "Qualified Instructors", body: "Every instructor is vetted for real-world expertise and teaching credentials." },
            { title: "Transparent Pricing", body: "See exactly how your total price is calculated — hourly rate × duration, no surprises." },
            { title: "Flexible Scheduling", body: "Choose from multiple available dates and times that fit your routine." },
          ].map((item) => (
            <div key={item.title} className="card p-6">
              <h3 className="font-bold text-ink-900">{item.title}</h3>
              <p className="mt-2 text-sm text-ink-500">{item.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
