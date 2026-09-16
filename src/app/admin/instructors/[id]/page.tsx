import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { InstructorForm } from "@/components/admin/instructor-form";

export default async function EditInstructorPage({ params }: { params: { id: string } }) {
  const instructor = await prisma.instructor.findUnique({ where: { id: params.id } });
  if (!instructor) notFound();

  return (
    <div>
      <h1 className="text-2xl font-bold text-ink-900">Edit Instructor</h1>
      <p className="mt-1 text-ink-500">{instructor.fullName}</p>
      <div className="mt-6 max-w-3xl">
        <InstructorForm
          instructorId={instructor.id}
          initial={{
            fullName: instructor.fullName,
            photoUrl: instructor.photoUrl ?? "",
            title: instructor.title,
            qualifications: instructor.qualifications,
            certifications: instructor.certifications ?? "",
            experienceYears: instructor.experienceYears,
            bio: instructor.bio,
            specialization: instructor.specialization,
            languages: instructor.languages,
            active: instructor.active,
          }}
        />
      </div>
    </div>
  );
}
