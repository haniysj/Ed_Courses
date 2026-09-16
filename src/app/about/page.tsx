import type { Metadata } from "next";
import { getSettings } from "@/lib/settings";

export const metadata: Metadata = { title: "About Us" };

export default async function AboutPage() {
  const settings = await getSettings();

  return (
    <div className="container-page max-w-3xl py-14">
      <h1 className="text-3xl font-bold text-ink-900">About {settings.platformName}</h1>
      <p className="mt-4 leading-relaxed text-ink-600">
        {settings.platformName} connects learners with qualified instructors for professional online courses.
        We believe education should be flexible, transparent, and accessible — which is why every course on our
        platform shows exactly how its price is calculated, and every instructor is vetted for real-world expertise.
      </p>
      <p className="mt-4 leading-relaxed text-ink-600">
        From business English to technical skills and leadership development, our courses are designed to help
        professionals and students in Oman and beyond achieve their goals on their own schedule.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {[
          { title: "Our Mission", body: "Make high-quality professional education accessible and transparent for everyone." },
          { title: "Our Instructors", body: "Every instructor is carefully vetted for qualifications and teaching experience." },
          { title: "Our Promise", body: "Clear pricing, flexible scheduling, and dedicated support at every step." },
        ].map((item) => (
          <div key={item.title} className="card p-5">
            <h3 className="font-bold text-ink-900">{item.title}</h3>
            <p className="mt-2 text-sm text-ink-500">{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
