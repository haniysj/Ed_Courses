import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdminApi } from "@/lib/require-admin";
import { scheduleInputSchema } from "@/lib/validation";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const courseId = searchParams.get("courseId") ?? undefined;

  const schedules = await prisma.courseSchedule.findMany({
    where: courseId ? { courseId } : undefined,
    include: { course: { include: { instructor: true } } },
    orderBy: { date: "asc" },
  });
  return NextResponse.json(schedules);
}

function timesOverlap(startA: string, endA: string, startB: string, endB: string) {
  return startA < endB && startB < endA;
}

export async function POST(req: NextRequest) {
  const session = await requireAdminApi();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const parsed = scheduleInputSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message ?? "Invalid input" }, { status: 400 });
  }
  const data = parsed.data;

  const course = await prisma.course.findUnique({ where: { id: data.courseId } });
  if (!course) return NextResponse.json({ error: "Course not found" }, { status: 404 });

  const sameDay = await prisma.courseSchedule.findMany({
    where: {
      date: new Date(data.date),
      status: { not: "CANCELLED" },
      course: { instructorId: course.instructorId },
    },
  });

  const conflict = sameDay.some((s) => timesOverlap(data.startTime, data.endTime, s.startTime, s.endTime));
  if (conflict) {
    return NextResponse.json(
      { error: "This instructor already has a conflicting session at that date and time." },
      { status: 409 }
    );
  }

  const schedule = await prisma.courseSchedule.create({
    data: {
      courseId: data.courseId,
      date: new Date(data.date),
      startTime: data.startTime,
      endTime: data.endTime,
      capacity: data.capacity,
      status: data.status,
    },
  });

  return NextResponse.json(schedule, { status: 201 });
}
