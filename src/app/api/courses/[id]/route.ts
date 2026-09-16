import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdminApi } from "@/lib/require-admin";
import { courseInputSchema } from "@/lib/validation";

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  const course = await prisma.course.findUnique({
    where: { id: params.id },
    include: { modules: { orderBy: { order: "asc" } }, schedules: { orderBy: { date: "asc" } } },
  });
  if (!course) return NextResponse.json({ error: "Course not found" }, { status: 404 });
  return NextResponse.json(course);
}

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const session = await requireAdminApi();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();

  // Partial updates (e.g. status-only toggles from the course list) skip full validation.
  if (Object.keys(body).length === 1 && "status" in body) {
    const course = await prisma.course.update({ where: { id: params.id }, data: { status: body.status } });
    return NextResponse.json(course);
  }

  const parsed = courseInputSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message ?? "Invalid input" }, { status: 400 });
  }
  const data = parsed.data;

  const existingCode = await prisma.course.findFirst({ where: { code: data.code, NOT: { id: params.id } } });
  if (existingCode) {
    return NextResponse.json({ error: "A course with this code already exists" }, { status: 409 });
  }

  const course = await prisma.$transaction(async (tx) => {
    await tx.courseModule.deleteMany({ where: { courseId: params.id } });
    return tx.course.update({
      where: { id: params.id },
      data: {
        title: data.title,
        code: data.code,
        description: data.description,
        objectives: JSON.stringify(data.objectives),
        imageUrl: data.imageUrl || null,
        level: data.level,
        format: data.format,
        durationHours: data.durationHours,
        sessionsCount: data.sessionsCount,
        hourlyRate: data.hourlyRate,
        maxLearners: data.maxLearners,
        status: data.status,
        categoryId: data.categoryId,
        instructorId: data.instructorId,
        modules: {
          create: data.modules.map((m, i) => ({ order: i + 1, title: m.title, description: m.description })),
        },
      },
    });
  });

  return NextResponse.json(course);
}

export async function DELETE(_req: NextRequest, { params }: { params: { id: string } }) {
  const session = await requireAdminApi();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const bookingCount = await prisma.booking.count({ where: { courseId: params.id } });
  if (bookingCount > 0) {
    return NextResponse.json(
      { error: "This course has existing bookings and cannot be deleted. Archive it instead." },
      { status: 409 }
    );
  }

  await prisma.course.delete({ where: { id: params.id } });
  return NextResponse.json({ success: true });
}
