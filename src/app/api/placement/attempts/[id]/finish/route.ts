import { NextRequest, NextResponse } from "next/server";
import { finishAttempt } from "@/lib/placement/attempt-service";

export async function POST(_req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const result = await finishAttempt(params.id);
    return NextResponse.json(result);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unable to finish attempt";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
