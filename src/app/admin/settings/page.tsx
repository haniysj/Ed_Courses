import { getSettings } from "@/lib/settings";
import { SettingsForm } from "@/components/admin/settings-form";

export const dynamic = "force-dynamic";

export default async function AdminSettingsPage() {
  const settings = await getSettings();

  return (
    <div>
      <h1 className="text-2xl font-bold text-ink-900 dark:text-white">Platform Settings</h1>
      <p className="mt-1 text-ink-500 dark:text-ink-400">Configure global platform information and booking rules.</p>
      <div className="mt-6">
        <SettingsForm
          initial={{
            platformName: settings.platformName,
            logoUrl: settings.logoUrl ?? "",
            contactEmail: settings.contactEmail,
            contactPhone: settings.contactPhone,
            currency: settings.currency,
            timezone: settings.timezone,
            cancellationPolicy: settings.cancellationPolicy,
            minBookingNoticeHours: settings.minBookingNoticeHours,
            maxBookingPeriodDays: settings.maxBookingPeriodDays,
          }}
        />
      </div>
    </div>
  );
}
