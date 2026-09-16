import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

export const metadata: Metadata = { title: "Instructors" };
export const dynamic = "force-dynamic";

export default async function InstructorsPage() {
  const instructors = await prisma.instructor.findMany({
    where: { active: true },
    include: { _count: { select: { courses: true } } },
    orderBy: { fullName: "asc" },
  });

  return (
    <div className="container-page py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-ink-900">Our Instructors</h1>
        <p className="mt-1 text-ink-500">Learn from qualified, experienced professionals.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {instructors.map((instructor) => (
          <Link key={instructor.id} href={`/instructors/${instructor.slug}`} className="card p-6 hover:shadow-soft">
            <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full bg-ink-100">
              {instructor.photoUrl && (
                <Image src={instructor.photoUrl} alt={instructor.fullName} fill className="object-cover" sizes="96px" />
              )}
            </div>
            <div className="mt-4 text-center">
              <p className="font-bold text-ink-900">{instructor.fullName}</p>
              <p className="text-sm text-brand-700">{instructor.title}</p>
              <p className="mt-2 text-xs text-ink-500">{instructor.experienceYears} years experience &middot; {instructor._count.courses} courses</p>
            </div>
          </Link>
        ))}
      </div>

      {instructors.length === 0 && <p className="text-center text-ink-500">No instructors listed yet.</p>}
    </div>
  );
}
