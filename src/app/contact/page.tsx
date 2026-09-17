import type { Metadata } from "next";
import { getSettings } from "@/lib/settings";
import { getServerLocale } from "@/lib/i18n/server";

export const metadata: Metadata = { title: "Contact" };
export const dynamic = "force-dynamic";

export default async function ContactPage() {
  const settings = await getSettings();
  const locale = getServerLocale();
  const isAr = locale === "ar";

  return (
    <div className="container-page max-w-3xl py-14">
      <h1 className="text-3xl font-bold text-ink-900 dark:text-white">{isAr ? "تواصل معنا" : "Contact Us"}</h1>
      <p className="mt-2 text-ink-500 dark:text-ink-400">
        {isAr ? "يسعدنا تواصلك معنا لأي استفسار حول دوراتنا." : "We'd love to hear from you. Reach out with any questions about our courses."}
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div className="card hover-lift p-6">
          <p className="text-xs font-semibold uppercase text-ink-400">{isAr ? "البريد الإلكتروني" : "Email"}</p>
          <p className="mt-1 font-medium text-ink-800 dark:text-white">{settings.contactEmail}</p>
        </div>
        <div className="card hover-lift p-6">
          <p className="text-xs font-semibold uppercase text-ink-400">{isAr ? "الهاتف" : "Phone"}</p>
          <p className="mt-1 font-medium text-ink-800 dark:text-white">{settings.contactPhone}</p>
        </div>
      </div>

      <form className="card mt-8 space-y-4 p-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="label" htmlFor="name">{isAr ? "الاسم" : "Name"}</label>
            <input id="name" className="input" placeholder={isAr ? "اسمك" : "Your name"} />
          </div>
          <div>
            <label className="label" htmlFor="email">{isAr ? "البريد الإلكتروني" : "Email"}</label>
            <input id="email" type="email" className="input" placeholder="you@example.com" />
          </div>
        </div>
        <div>
          <label className="label" htmlFor="message">{isAr ? "الرسالة" : "Message"}</label>
          <textarea id="message" rows={5} className="input" placeholder={isAr ? "كيف يمكننا مساعدتك؟" : "How can we help?"} />
        </div>
        <button type="button" className="btn-primary">{isAr ? "إرسال الرسالة" : "Send Message"}</button>
        <p className="text-xs text-ink-400">
          {isAr
            ? "نموذج التواصل هذا للعرض فقط — يمكن ربط إرسال الرسائل بالبريد الإلكتروني أو الرسائل النصية لاحقًا."
            : "This contact form is a placeholder — message delivery can be connected to email/SMS in a future update."}
        </p>
      </form>
    </div>
  );
}
