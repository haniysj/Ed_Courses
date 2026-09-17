import type { Metadata } from "next";
import { getSettings } from "@/lib/settings";
import { getServerLocale } from "@/lib/i18n/server";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = { title: "About Us" };
export const dynamic = "force-dynamic";

export default async function AboutPage() {
  const settings = await getSettings();
  const locale = getServerLocale();
  const isAr = locale === "ar";

  const cards = isAr
    ? [
        { title: "رسالتنا", body: "إتاحة تعليم مهني عالي الجودة وشفاف للجميع." },
        { title: "مدربونا", body: "يخضع كل مدرب للتحقق الدقيق من مؤهلاته وخبرته التدريسية." },
        { title: "وعدنا", body: "أسعار واضحة، وجدولة مرنة، ودعم مخصص في كل خطوة." },
      ]
    : [
        { title: "Our Mission", body: "Make high-quality professional education accessible and transparent for everyone." },
        { title: "Our Instructors", body: "Every instructor is carefully vetted for qualifications and teaching experience." },
        { title: "Our Promise", body: "Clear pricing, flexible scheduling, and dedicated support at every step." },
      ];

  return (
    <div className="container-page max-w-3xl py-14">
      <h1 className="text-3xl font-bold text-ink-900 dark:text-white">
        {isAr ? `عن ${settings.platformName}` : `About ${settings.platformName}`}
      </h1>
      {isAr ? (
        <>
          <p className="mt-4 leading-relaxed text-ink-600 dark:text-ink-300">
            تربط {settings.platformName} المتعلمين بمدربين مؤهلين لتقديم دورات تعليمية احترافية عبر الإنترنت. نؤمن بأن
            التعليم يجب أن يكون مرنًا وشفافًا وسهل الوصول إليه، ولهذا يخضع كل مدرب على منصتنا للتحقق من خبرته العملية
            الحقيقية.
          </p>
          <p className="mt-4 leading-relaxed text-ink-600 dark:text-ink-300">
            من اللغة الإنجليزية للأعمال إلى المهارات التقنية وتطوير القيادة، صُممت دوراتنا لمساعدة المهنيين والطلاب في
            عُمان وخارجها على تحقيق أهدافهم وفق جدولهم الخاص.
          </p>
        </>
      ) : (
        <>
          <p className="mt-4 leading-relaxed text-ink-600 dark:text-ink-300">
            {settings.platformName} connects learners with qualified instructors for professional online courses.
            We believe education should be flexible, transparent, and accessible — and every instructor is vetted
            for real-world expertise.
          </p>
          <p className="mt-4 leading-relaxed text-ink-600 dark:text-ink-300">
            From business English to technical skills and leadership development, our courses are designed to help
            professionals and students in Oman and beyond achieve their goals on their own schedule.
          </p>
        </>
      )}

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {cards.map((item, i) => (
          <Reveal key={item.title} delay={i * 80}>
            <div className="card hover-lift p-5">
              <h3 className="font-bold text-ink-900 dark:text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-ink-500 dark:text-ink-400">{item.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
