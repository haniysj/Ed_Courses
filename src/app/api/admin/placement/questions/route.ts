import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdminApi } from "@/lib/require-admin";
import { placementQuestionInputSchema } from "@/lib/validation";

export async function GET(req: NextRequest) {
  const session = await requireAdminApi();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { searchParams } = new URL(req.url);
  const cefrLevel = searchParams.get("cefrLevel") ?? undefined;
  const skill = searchParams.get("skill") ?? undefined;

  const questions = await prisma.placementQuestion.findMany({
    where: { cefrLevel, skill },
    orderBy: [{ cefrLevel: "asc" }, { skill: "asc" }],
  });
  return NextResponse.json(questions);
}

export async function POST(req: NextRequest) {
  const session = await requireAdminApi();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const parsed = placementQuestionInputSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message ?? "Invalid input" }, { status: 400 });
  }
  const data = parsed.data;

  if (data.correctIndex >= data.options.length) {
    return NextResponse.json({ error: "Correct answer index is out of range" }, { status: 400 });
  }

  const question = await prisma.placementQuestion.create({
    data: {
      cefrLevel: data.cefrLevel,
      skill: data.skill,
      difficulty: data.difficulty,
      topic: data.topic,
      prompt: data.prompt,
      options: JSON.stringify(data.options),
      correctIndex: data.correctIndex,
      explanation: data.explanation || null,
      audioText: data.audioText || null,
      imageUrl: data.imageUrl || null,
      active: data.active,
    },
  });

  return NextResponse.json(question, { status: 201 });
}
