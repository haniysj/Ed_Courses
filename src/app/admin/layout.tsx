import { requireAdminPage } from "@/lib/require-admin";
import { AdminNav } from "@/components/admin/admin-nav";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await requireAdminPage();

  return (
    <div className="min-h-screen bg-ink-50 dark:bg-ink-950">
      <div className="mx-auto flex max-w-[1600px]">
        <aside className="hidden w-64 shrink-0 border-r border-ink-100 bg-white dark:border-ink-800 dark:bg-ink-900 lg:block">
          <div className="sticky top-0 h-screen overflow-y-auto p-4">
            <AdminNav userName={session.user?.name ?? "Admin"} />
          </div>
        </aside>
        <main className="min-w-0 flex-1 p-4 sm:p-6 lg:p-8">
          <div className="mb-4 lg:hidden">
            <AdminNav userName={session.user?.name ?? "Admin"} mobile />
          </div>
          {children}
        </main>
      </div>
    </div>
  );
}
