import { NextRequest, NextResponse } from "next/server";
import { discountColumns } from "@/lib/discount";
import { prisma } from "@/lib/prisma";
import { requireAdminApi } from "@/lib/require-admin";
import { courseInputSchema } from "@/lib/validation";
import { slugify } from "@/lib/utils";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const status = searchParams.get("status") ?? undefined;

  const courses = await prisma.course.findMany({
    where: status ? { status } : undefined,
    include: { instructor: true, category: true, schedules: true, _count: { select: { bookings: true } } },
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(courses);
}

async function uniqueSlug(base: string) {
  let slug = slugify(base);
  let suffix = 1;
  while (await prisma.course.findUnique({ where: { slug } })) {
    suffix += 1;
    slug = `${slugify(base)}-${suffix}`;
  }
  return slug;
}

export async function POST(req: NextRequest) {
  const session = await requireAdminApi();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const parsed = courseInputSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message ?? "Invalid input" }, { status: 400 });
  }
  const data = parsed.data;

  const existingCode = await prisma.course.findUnique({ where: { code: data.code } });
  if (existingCode) {
    return NextResponse.json({ error: "A course with this code already exists" }, { status: 409 });
  }

  const slug = await uniqueSlug(data.title);

  const course = await prisma.course.create({
    data: {
      title: data.title,
      slug,
      code: data.code,
      description: data.description,
      objectives: JSON.stringify(data.objectives),
      imageUrl: data.imageUrl || null,
      level: data.level,
      format: data.format,
      durationHours: data.durationHours,
      sessionsCount: data.sessionsCount,
      hourlyRate: data.hourlyRate,
      ...discountColumns(data),
      maxLearners: data.maxLearners,
      status: data.status,
      categoryId: data.categoryId,
      instructorId: data.instructorId,
      modules: {
        create: data.modules.map((m, i) => ({ order: i + 1, title: m.title, description: m.description })),
      },
    },
  });

  return NextResponse.json(course, { status: 201 });
}
