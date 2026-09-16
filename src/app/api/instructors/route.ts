import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdminApi } from "@/lib/require-admin";
import { instructorInputSchema } from "@/lib/validation";
import { slugify } from "@/lib/utils";

export async function GET() {
  const instructors = await prisma.instructor.findMany({
    include: { _count: { select: { courses: true } } },
    orderBy: { fullName: "asc" },
  });
  return NextResponse.json(instructors);
}

async function uniqueSlug(base: string) {
  let slug = slugify(base);
  let suffix = 1;
  while (await prisma.instructor.findUnique({ where: { slug } })) {
    suffix += 1;
    slug = `${slugify(base)}-${suffix}`;
  }
  return slug;
}

export async function POST(req: NextRequest) {
  const session = await requireAdminApi();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const parsed = instructorInputSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message ?? "Invalid input" }, { status: 400 });
  }

  const slug = await uniqueSlug(parsed.data.fullName);
  const instructor = await prisma.instructor.create({
    data: {
      ...parsed.data,
      photoUrl: parsed.data.photoUrl || null,
      certifications: parsed.data.certifications || null,
      slug,
    },
  });

  return NextResponse.json(instructor, { status: 201 });
}
