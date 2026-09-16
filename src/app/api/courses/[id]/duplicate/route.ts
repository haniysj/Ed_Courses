import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdminApi } from "@/lib/require-admin";
import { slugify } from "@/lib/utils";

async function uniqueSlug(base: string) {
  let slug = slugify(base);
  let suffix = 1;
  while (await prisma.course.findUnique({ where: { slug } })) {
    suffix += 1;
    slug = `${slugify(base)}-${suffix}`;
  }
  return slug;
}

async function uniqueCode(base: string) {
  let code = `${base}-COPY`;
  let suffix = 1;
  while (await prisma.course.findUnique({ where: { code } })) {
    suffix += 1;
    code = `${base}-COPY-${suffix}`;
  }
  return code;
}

export async function POST(_req: NextRequest, { params }: { params: { id: string } }) {
  const session = await requireAdminApi();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const original = await prisma.course.findUnique({
    where: { id: params.id },
    include: { modules: true },
  });
  if (!original) return NextResponse.json({ error: "Course not found" }, { status: 404 });

  const title = `${original.title} (Copy)`;
  const [slug, code] = await Promise.all([uniqueSlug(title), uniqueCode(original.code)]);

  const duplicate = await prisma.course.create({
    data: {
      title,
      slug,
      code,
      description: original.description,
      objectives: original.objectives,
      imageUrl: original.imageUrl,
      level: original.level,
      format: original.format,
      durationHours: original.durationHours,
      sessionsCount: original.sessionsCount,
      hourlyRate: original.hourlyRate,
      maxLearners: original.maxLearners,
      status: "DRAFT",
      currency: original.currency,
      categoryId: original.categoryId,
      instructorId: original.instructorId,
      modules: {
        create: original.modules.map((m) => ({ order: m.order, title: m.title, description: m.description })),
      },
    },
  });

  return NextResponse.json(duplicate, { status: 201 });
}
