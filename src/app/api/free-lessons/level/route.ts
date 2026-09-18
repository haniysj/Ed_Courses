import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { isFlLevel } from "@/lib/free-lessons/constants";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user) return NextResponse.json({ error: "Please log in" }, { status: 401 });

  const body = await req.json().catch(() => ({}));
  if (!isFlLevel(body?.level)) return NextResponse.json({ error: "Unknown level" }, { status: 400 });

  await prisma.user.update({ where: { id: session.user.id }, data: { freeLessonLevel: body.level } });
  return NextResponse.json({ ok: true, level: body.level });
}
