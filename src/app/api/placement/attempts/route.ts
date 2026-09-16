import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { buildFirstBatch } from "@/lib/placement/attempt-service";
import { getSettings } from "@/lib/settings";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const session = await getServerSession(authOptions);

  let version = body.versionId
    ? await prisma.placementVersion.findFirst({ where: { id: body.versionId, active: true } })
    : null;

  if (!version) {
    const activeVersions = await prisma.placementVersion.findMany({ where: { active: true } });
    if (activeVersions.length === 0) {
      return NextResponse.json({ error: "No placement test versions are available right now." }, { status: 503 });
    }
    version = activeVersions[Math.floor(Math.random() * activeVersions.length)];
  }

  if (session?.user) {
    const settings = await getSettings();
    const lastAttempt = await prisma.placementAttempt.findFirst({
      where: { userId: session.user.id, status: "COMPLETED" },
      orderBy: { completedAt: "desc" },
    });
    if (lastAttempt?.completedAt) {
      const cooldownMs = settings.placementRetakeCooldownDays * 24 * 60 * 60 * 1000;
      const elapsed = Date.now() - lastAttempt.completedAt.getTime();
      if (elapsed < cooldownMs) {
        const daysLeft = Math.ceil((cooldownMs - elapsed) / (24 * 60 * 60 * 1000));
        return NextResponse.json(
          { error: "RETAKE_COOLDOWN", daysLeft },
          { status: 429 }
        );
      }
    }
  }

  const { presented, firstQuestion, totalPlanned } = await buildFirstBatch(version.id);
  if (!firstQuestion) {
    return NextResponse.json({ error: "The question bank is not ready yet. Please try again later." }, { status: 503 });
  }

  const attempt = await prisma.placementAttempt.create({
    data: {
      versionId: version.id,
      userId: session?.user?.id,
      learnerName: typeof body.learnerName === "string" ? body.learnerName.trim() || null : null,
      learnerEmail: typeof body.learnerEmail === "string" ? body.learnerEmail.trim() || null : null,
      selectedQuestionIds: JSON.stringify(presented),
      answers: "{}",
      currentIndex: 0,
    },
  });

  return NextResponse.json({
    attemptId: attempt.id,
    versionName: version.name,
    timeLimitMinutes: version.timeLimitMinutes,
    totalQuestions: totalPlanned,
    question: firstQuestion,
    progress: { current: 1, total: totalPlanned },
  });
}
