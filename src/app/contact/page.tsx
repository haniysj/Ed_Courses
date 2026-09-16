import type { Metadata } from "next";
import { getSettings } from "@/lib/settings";

export const metadata: Metadata = { title: "Contact" };

export default async function ContactPage() {
  const settings = await getSettings();

  return (
    <div className="container-page max-w-3xl py-14">
      <h1 className="text-3xl font-bold text-ink-900">Contact Us</h1>
      <p className="mt-2 text-ink-500">We&apos;d love to hear from you. Reach out with any questions about our courses.</p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div className="card p-6">
          <p className="text-xs font-semibold uppercase text-ink-400">Email</p>
          <p className="mt-1 font-medium text-ink-800">{settings.contactEmail}</p>
        </div>
        <div className="card p-6">
          <p className="text-xs font-semibold uppercase text-ink-400">Phone</p>
          <p className="mt-1 font-medium text-ink-800">{settings.contactPhone}</p>
        </div>
      </div>

      <form className="card mt-8 space-y-4 p-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="label" htmlFor="name">Name</label>
            <input id="name" className="input" placeholder="Your name" />
          </div>
          <div>
            <label className="label" htmlFor="email">Email</label>
            <input id="email" type="email" className="input" placeholder="you@example.com" />
          </div>
        </div>
        <div>
          <label className="label" htmlFor="message">Message</label>
          <textarea id="message" rows={5} className="input" placeholder="How can we help?" />
        </div>
        <button type="button" className="btn-primary">Send Message</button>
        <p className="text-xs text-ink-400">
          This contact form is a placeholder — message delivery can be connected to email/SMS in a future update.
        </p>
      </form>
    </div>
  );
}
