import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { CourseCard } from "@/components/course-card";
import { HeroCarousel } from "@/components/hero-carousel";
import { Reveal } from "@/components/reveal";
import { getServerLocale } from "@/lib/i18n/server";
import { getDictionary } from "@/lib/i18n/get-dictionary";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const locale = getServerLocale();
  const t = getDictionary(locale);

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
      <section className="relative isolate min-h-[560px] overflow-hidden text-white sm:min-h-[620px]">
        <HeroCarousel />
        <div className="container-page relative z-10 grid gap-10 py-20 sm:py-28">
          <div className="max-w-2xl">
            <span className="badge bg-white/10 text-brand-100">{t.home.badge}</span>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">{t.home.heroTitle}</h1>
            <p className="mt-4 max-w-lg text-lg text-brand-100">{t.home.heroSubtitle}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/courses" className="btn-primary bg-white text-brand-800 hover:bg-brand-50">
                {t.home.browseCourses}
              </Link>
              <Link href="/placement" className="btn-outline border-white/40 bg-white/10 text-white hover:bg-white/20">
                {t.home.testYourLevel}
              </Link>
            </div>
            <dl className="mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-white/20 pt-6 text-sm">
              <div>
                <dt className="text-brand-200">{t.home.statsCourses}</dt>
                <dd className="text-2xl font-bold">{courses.length > 0 ? "6+" : "0"}</dd>
              </div>
              <div>
                <dt className="text-brand-200">{t.home.statsInstructors}</dt>
                <dd className="text-2xl font-bold">{instructorCount}</dd>
              </div>
              <div>
                <dt className="text-brand-200">{t.home.statsLearners}</dt>
                <dd className="text-2xl font-bold">{learnerCount}+</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="mb-4 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
          {categories.map((c, i) => (
            <Reveal key={c.id} delay={i * 70}>
              <Link
                href={`/courses?category=${c.slug}`}
                className="card hover-lift flex items-center justify-between p-4 text-sm font-medium text-ink-700 hover:border-brand-300 hover:text-brand-700 dark:text-ink-200"
              >
                {c.name}
                <span className="badge bg-ink-100 text-ink-500 dark:bg-ink-800 dark:text-ink-300">{c._count.courses}</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-page pb-20">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-ink-900 dark:text-white">{t.home.featuredCourses}</h2>
            <p className="mt-1 text-ink-500 dark:text-ink-400">{t.home.featuredCoursesSubtitle}</p>
          </div>
          <Link href="/courses" className="hidden text-sm font-semibold text-brand-700 hover:underline dark:text-brand-400 sm:block">
            {t.common.viewAll}
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, i) => (
            <Reveal key={course.id} delay={Math.min(i, 6) * 60}>
              <CourseCard course={course} />
            </Reveal>
          ))}
        </div>
        {courses.length === 0 && (
          <p className="text-center text-ink-500 dark:text-ink-400">
            {locale === "ar" ? "لا توجد دورات منشورة بعد. تفقد الصفحة لاحقًا." : "No published courses yet. Check back soon."}
          </p>
        )}
      </section>

      <section className="bg-gradient-to-br from-brand-700 to-brand-900 py-16 text-white dark:from-brand-950 dark:to-black">
        <div className="container-page flex flex-col items-center gap-6 text-center">
          <span className="animate-float inline-block text-4xl">🎓</span>
          <h2 className="max-w-2xl text-2xl font-bold sm:text-3xl">{t.home.placementPromoTitle}</h2>
          <p className="max-w-2xl text-brand-100">{t.home.placementPromoBody}</p>
          <Link href="/placement" className="btn-primary bg-white text-brand-800 hover:bg-brand-50">
            {t.home.placementPromoCta}
          </Link>
          <p className="text-xs text-brand-200">{t.home.placementPromoNoLogin}</p>
        </div>
      </section>

      <section className="bg-ink-50 py-16 dark:bg-ink-900">
        <div className="container-page grid gap-8 md:grid-cols-3">
          {[
            { title: t.home.featureQualified, body: t.home.featureQualifiedBody },
            { title: t.home.featureTransparent, body: t.home.featureTransparentBody },
            { title: t.home.featureFlexible, body: t.home.featureFlexibleBody },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 100}>
              <div className="card hover-lift p-6">
                <h3 className="font-bold text-ink-900 dark:text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-500 dark:text-ink-400">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
