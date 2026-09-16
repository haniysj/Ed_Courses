import { prisma } from "@/lib/prisma";

export async function getSettings() {
  let settings = await prisma.platformSettings.findFirst();
  if (!settings) {
    settings = await prisma.platformSettings.create({ data: {} });
  }
  return settings;
}
