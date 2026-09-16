import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdminApi } from "@/lib/require-admin";
import { placementVersionInputSchema } from "@/lib/validation";
import { CEFR_ORDER } from "@/lib/enums";

export async function GET() {
  const session = await requireAdminApi();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const versions = await prisma.placementVersion.findMany({
    include: { _count: { select: { attempts: true } } },
    orderBy: { name: "asc" },
  });
  return NextResponse.json(versions);
}

export async function POST(req: NextRequest) {
  const session = await requireAdminApi();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const parsed = placementVersionInputSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message ?? "Invalid input" }, { status: 400 });
  }
  const data = parsed.data;

  if (CEFR_ORDER.indexOf(data.cefrRangeMin) > CEFR_ORDER.indexOf(data.cefrRangeMax)) {
    return NextResponse.json({ error: "Minimum CEFR level must be at or below the maximum" }, { status: 400 });
  }

  const existing = await prisma.placementVersion.findUnique({ where: { name: data.name } });
  if (existing) {
    return NextResponse.json({ error: "A version with this name already exists" }, { status: 409 });
  }

  const version = await prisma.placementVersion.create({ data });
  return NextResponse.json(version, { status: 201 });
}
