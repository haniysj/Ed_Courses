import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdminApi } from "@/lib/require-admin";
import { placementVersionInputSchema } from "@/lib/validation";
import { CEFR_ORDER } from "@/lib/enums";

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const session = await requireAdminApi();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();

  if (Object.keys(body).length === 1 && "active" in body) {
    const version = await prisma.placementVersion.update({ where: { id: params.id }, data: { active: body.active } });
    return NextResponse.json(version);
  }

  const parsed = placementVersionInputSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message ?? "Invalid input" }, { status: 400 });
  }
  const data = parsed.data;
  if (CEFR_ORDER.indexOf(data.cefrRangeMin) > CEFR_ORDER.indexOf(data.cefrRangeMax)) {
    return NextResponse.json({ error: "Minimum CEFR level must be at or below the maximum" }, { status: 400 });
  }

  const version = await prisma.placementVersion.update({ where: { id: params.id }, data });
  return NextResponse.json(version);
}

export async function DELETE(_req: NextRequest, { params }: { params: { id: string } }) {
  const session = await requireAdminApi();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const attemptCount = await prisma.placementAttempt.count({ where: { versionId: params.id } });
  if (attemptCount > 0) {
    return NextResponse.json(
      { error: "This version has existing attempts and cannot be deleted. Deactivate it instead." },
      { status: 409 }
    );
  }

  await prisma.placementVersion.delete({ where: { id: params.id } });
  return NextResponse.json({ success: true });
}
