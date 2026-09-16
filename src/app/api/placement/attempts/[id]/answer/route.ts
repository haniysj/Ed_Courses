import { NextRequest, NextResponse } from "next/server";
import { submitAnswerAndAdvance } from "@/lib/placement/attempt-service";

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  const body = await req.json();
  const { questionId, selectedIndex, timeMs } = body;

  if (typeof questionId !== "string" || typeof selectedIndex !== "number") {
    return NextResponse.json({ error: "Invalid answer payload" }, { status: 400 });
  }

  try {
    const result = await submitAnswerAndAdvance({
      attemptId: params.id,
      questionId,
      selectedIndex,
      timeMs: typeof timeMs === "number" ? timeMs : 0,
    });
    return NextResponse.json(result);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unable to submit answer";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
