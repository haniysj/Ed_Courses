import { NextRequest, NextResponse } from "next/server";
import { getResumeState } from "@/lib/placement/attempt-service";

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  const state = await getResumeState(params.id);
  return NextResponse.json(state);
}
