import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { LOCALES } from "@/lib/i18n/config";

export async function PATCH(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const data: { locale?: string; theme?: string } = {};

  if (typeof body.locale === "string" && (LOCALES as readonly string[]).includes(body.locale)) {
    data.locale = body.locale;
  }
  if (body.theme === "light" || body.theme === "dark") {
    data.theme = body.theme;
  }
  if (Object.keys(data).length === 0) {
    return NextResponse.json({ error: "No valid preference provided" }, { status: 400 });
  }

  await prisma.user.update({ where: { id: session.user.id }, data });
  return NextResponse.json({ success: true });
}
