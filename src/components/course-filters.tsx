"use client";

import { FORMAT_LABELS, LEVEL_LABELS } from "@/lib/enums";
import { useI18n } from "@/components/i18n-provider";

type Option = { value: string; label: string };

export function CourseFilters({
  categories,
  instructors,
  values,
}: {
  categories: Option[];
  instructors: Option[];
  values: Record<string, string | undefined>;
}) {
  const { t, locale } = useI18n();

  return (
    <form method="get" className="card grid gap-4 p-5 md:grid-cols-2 lg:grid-cols-4">
      <div className="lg:col-span-4">
        <label className="label" htmlFor="q">{t("courses.search")}</label>
        <input
          id="q"
          name="q"
          type="text"
          defaultValue={values.q}
          placeholder={t("courses.searchPlaceholder")}
          className="input"
        />
      </div>

      <div>
        <label className="label" htmlFor="category">{t("courses.category")}</label>
        <select id="category" name="category" defaultValue={values.category ?? ""} className="input">
          <option value="">{t("courses.allCategories")}</option>
          {categories.map((c) => (
            <option key={c.value} value={c.value}>{c.label}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="label" htmlFor="level">{t("courses.level")}</label>
        <select id="level" name="level" defaultValue={values.level ?? ""} className="input">
          <option value="">{t("courses.allLevels")}</option>
          {Object.entries(LEVEL_LABELS).map(([value, label]) => (
            <option key={value} value={value}>{label[locale]}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="label" htmlFor="instructor">{t("courses.instructor")}</label>
        <select id="instructor" name="instructor" defaultValue={values.instructor ?? ""} className="input">
          <option value="">{t("courses.allInstructors")}</option>
          {instructors.map((i) => (
            <option key={i.value} value={i.value}>{i.label}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="label" htmlFor="format">{t("courses.format")}</label>
        <select id="format" name="format" defaultValue={values.format ?? ""} className="input">
          <option value="">{t("courses.allFormats")}</option>
          {Object.entries(FORMAT_LABELS).map(([value, label]) => (
            <option key={value} value={value}>{label[locale]}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="label" htmlFor="duration">{t("courses.duration")}</label>
        <select id="duration" name="duration" defaultValue={values.duration ?? ""} className="input">
          <option value="">{t("courses.anyDuration")}</option>
          <option value="short">{locale === "ar" ? "قصيرة (أقل من 10 ساعات)" : "Short (< 10 hours)"}</option>
          <option value="medium">{locale === "ar" ? "متوسطة (10-15 ساعة)" : "Medium (10–15 hours)"}</option>
          <option value="long">{locale === "ar" ? "طويلة (أكثر من 15 ساعة)" : "Long (> 15 hours)"}</option>
        </select>
      </div>

      <div>
        <label className="label" htmlFor="price">{t("courses.price")}</label>
        <select id="price" name="price" defaultValue={values.price ?? ""} className="input">
          <option value="">{t("courses.anyPrice")}</option>
          <option value="low">{locale === "ar" ? "أقل من 100 ر.ع." : "Under OMR 100"}</option>
          <option value="mid">{locale === "ar" ? "100 - 200 ر.ع." : "OMR 100 – 200"}</option>
          <option value="high">{locale === "ar" ? "أكثر من 200 ر.ع." : "Over OMR 200"}</option>
        </select>
      </div>

      <div className="flex items-end gap-2">
        <button type="submit" className="btn-primary w-full">{t("courses.applyFilters")}</button>
        <a href="/courses" className="btn-outline w-full text-center">{t("courses.reset")}</a>
      </div>
    </form>
  );
}
