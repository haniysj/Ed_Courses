import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdminApi } from "@/lib/require-admin";
import { instructorInputSchema } from "@/lib/validation";

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  const instructor = await prisma.instructor.findUnique({
    where: { id: params.id },
    include: { courses: true },
  });
  if (!instructor) return NextResponse.json({ error: "Instructor not found" }, { status: 404 });
  return NextResponse.json(instructor);
}

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const session = await requireAdminApi();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const parsed = instructorInputSchema.partial().safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message ?? "Invalid input" }, { status: 400 });
  }

  const data = { ...parsed.data };
  if (data.photoUrl === "") data.photoUrl = undefined;
  if (data.certifications === "") data.certifications = undefined;

  const instructor = await prisma.instructor.update({ where: { id: params.id }, data });
  return NextResponse.json(instructor);
}

export async function DELETE(_req: NextRequest, { params }: { params: { id: string } }) {
  const session = await requireAdminApi();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const coursesUsingInstructor = await prisma.course.count({ where: { instructorId: params.id } });
  if (coursesUsingInstructor > 0) {
    return NextResponse.json(
      { error: "Cannot delete an instructor who is assigned to courses. Reassign or archive those courses first." },
      { status: 409 }
    );
  }

  await prisma.instructor.delete({ where: { id: params.id } });
  return NextResponse.json({ success: true });
}
