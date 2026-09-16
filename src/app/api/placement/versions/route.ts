import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const versions = await prisma.placementVersion.findMany({
    where: { active: true },
    orderBy: { name: "asc" },
    select: { id: true, name: true, timeLimitMinutes: true, questionCount: true },
  });
  return NextResponse.json(versions);
}
