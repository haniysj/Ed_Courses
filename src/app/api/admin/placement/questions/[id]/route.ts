import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdminApi } from "@/lib/require-admin";
import { placementQuestionInputSchema } from "@/lib/validation";

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const session = await requireAdminApi();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();

  if (Object.keys(body).length === 1 && "active" in body) {
    const question = await prisma.placementQuestion.update({ where: { id: params.id }, data: { active: body.active } });
    return NextResponse.json(question);
  }

  const parsed = placementQuestionInputSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message ?? "Invalid input" }, { status: 400 });
  }
  const data = parsed.data;
  if (data.correctIndex >= data.options.length) {
    return NextResponse.json({ error: "Correct answer index is out of range" }, { status: 400 });
  }

  const question = await prisma.placementQuestion.update({
    where: { id: params.id },
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

  return NextResponse.json(question);
}

export async function DELETE(_req: NextRequest, { params }: { params: { id: string } }) {
  const session = await requireAdminApi();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  await prisma.placementQuestion.delete({ where: { id: params.id } });
  return NextResponse.json({ success: true });
}
