import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdminApi } from "@/lib/require-admin";
import { slugify } from "@/lib/utils";

export async function GET() {
  const categories = await prisma.category.findMany({ orderBy: { name: "asc" } });
  return NextResponse.json(categories);
}

export async function POST(req: NextRequest) {
  const session = await requireAdminApi();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const name = String(body.name ?? "").trim();
  if (name.length < 2) return NextResponse.json({ error: "Category name is required" }, { status: 400 });

  const category = await prisma.category.create({ data: { name, slug: slugify(name) } });
  return NextResponse.json(category, { status: 201 });
}
