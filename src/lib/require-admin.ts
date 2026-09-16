import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";

export async function requireAdminPage() {
  const session = await getServerSession(authOptions);
  if (session?.user?.role !== "ADMIN") {
    redirect("/login?callbackUrl=/admin");
  }
  return session;
}

export async function requireAdminApi() {
  const session = await getServerSession(authOptions);
  if (session?.user?.role !== "ADMIN") {
    return null;
  }
  return session;
}
