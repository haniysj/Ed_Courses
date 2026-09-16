import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  const attempt = await prisma.placementAttempt.findUnique({
    where: { id: params.id },
    include: { version: true },
  });
  if (!attempt) return NextResponse.json({ error: "Attempt not found" }, { status: 404 });

  return NextResponse.json(attempt);
}

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const body = await req.json();
  const data: { learnerName?: string; learnerEmail?: string } = {};
  if (typeof body.learnerName === "string" && body.learnerName.trim()) data.learnerName = body.learnerName.trim();
  if (typeof body.learnerEmail === "string" && body.learnerEmail.trim()) data.learnerEmail = body.learnerEmail.trim();

  if (Object.keys(data).length === 0) {
    return NextResponse.json({ error: "Nothing to update" }, { status: 400 });
  }

  const attempt = await prisma.placementAttempt.update({ where: { id: params.id }, data });
  return NextResponse.json(attempt);
}
