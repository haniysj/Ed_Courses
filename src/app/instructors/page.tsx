import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Reveal } from "@/components/reveal";
import { getServerLocale } from "@/lib/i18n/server";

export const metadata: Metadata = { title: "Instructors" };
export const dynamic = "force-dynamic";

export default async function InstructorsPage() {
  const locale = getServerLocale();
  const isAr = locale === "ar";

  const instructors = await prisma.instructor.findMany({
    where: { active: true },
    include: { _count: { select: { courses: true } } },
    orderBy: { fullName: "asc" },
  });

  return (
    <div className="container-page py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-ink-900 dark:text-white">{isAr ? "مدربونا" : "Our Instructors"}</h1>
        <p className="mt-1 text-ink-500 dark:text-ink-400">
          {isAr ? "تعلّم من محترفين مؤهلين وذوي خبرة." : "Learn from qualified, experienced professionals."}
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {instructors.map((instructor, i) => (
          <Reveal key={instructor.id} delay={Math.min(i, 6) * 60}>
            <Link href={`/instructors/${instructor.slug}`} className="card hover-lift block p-6">
              <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full bg-ink-100 dark:bg-ink-800">
                {instructor.photoUrl && (
                  <Image src={instructor.photoUrl} alt={instructor.fullName} fill className="object-cover" sizes="96px" />
                )}
              </div>
              <div className="mt-4 text-center">
                <p className="font-bold text-ink-900 dark:text-white">{instructor.fullName}</p>
                <p className="text-sm text-brand-700 dark:text-brand-400">{instructor.title}</p>
                <p className="mt-2 text-xs text-ink-500 dark:text-ink-400">
                  {instructor.experienceYears} {isAr ? "سنوات خبرة" : "years experience"} &middot; {instructor._count.courses}{" "}
                  {isAr ? "دورة" : "courses"}
                </p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>

      {instructors.length === 0 && (
        <p className="text-center text-ink-500 dark:text-ink-400">{isAr ? "لا يوجد مدربون مدرجون بعد." : "No instructors listed yet."}</p>
      )}
    </div>
  );
}
