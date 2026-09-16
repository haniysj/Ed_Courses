import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdminApi } from "@/lib/require-admin";
import { settingsInputSchema } from "@/lib/validation";
import { getSettings } from "@/lib/settings";

export async function GET() {
  const settings = await getSettings();
  return NextResponse.json(settings);
}

export async function PATCH(req: NextRequest) {
  const session = await requireAdminApi();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const parsed = settingsInputSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message ?? "Invalid input" }, { status: 400 });
  }

  const current = await getSettings();
  const updated = await prisma.platformSettings.update({
    where: { id: current.id },
    data: { ...parsed.data, logoUrl: parsed.data.logoUrl || null },
  });

  return NextResponse.json(updated);
}
