import { FORMAT_LABELS, LEVEL_LABELS } from "@/lib/enums";

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
  return (
    <form method="get" className="card grid gap-4 p-5 md:grid-cols-2 lg:grid-cols-4">
      <div className="lg:col-span-4">
        <label className="label" htmlFor="q">Search</label>
        <input
          id="q"
          name="q"
          type="text"
          defaultValue={values.q}
          placeholder="Search by course name or keyword..."
          className="input"
        />
      </div>

      <div>
        <label className="label" htmlFor="category">Category</label>
        <select id="category" name="category" defaultValue={values.category ?? ""} className="input">
          <option value="">All Categories</option>
          {categories.map((c) => (
            <option key={c.value} value={c.value}>{c.label}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="label" htmlFor="level">Level</label>
        <select id="level" name="level" defaultValue={values.level ?? ""} className="input">
          <option value="">All Levels</option>
          {Object.entries(LEVEL_LABELS).map(([value, label]) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="label" htmlFor="instructor">Instructor</label>
        <select id="instructor" name="instructor" defaultValue={values.instructor ?? ""} className="input">
          <option value="">All Instructors</option>
          {instructors.map((i) => (
            <option key={i.value} value={i.value}>{i.label}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="label" htmlFor="format">Format</label>
        <select id="format" name="format" defaultValue={values.format ?? ""} className="input">
          <option value="">All Formats</option>
          {Object.entries(FORMAT_LABELS).map(([value, label]) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="label" htmlFor="duration">Duration</label>
        <select id="duration" name="duration" defaultValue={values.duration ?? ""} className="input">
          <option value="">Any Duration</option>
          <option value="short">Short (&lt; 10 hours)</option>
          <option value="medium">Medium (10–15 hours)</option>
          <option value="long">Long (&gt; 15 hours)</option>
        </select>
      </div>

      <div>
        <label className="label" htmlFor="price">Price</label>
        <select id="price" name="price" defaultValue={values.price ?? ""} className="input">
          <option value="">Any Price</option>
          <option value="low">Under OMR 100</option>
          <option value="mid">OMR 100 – 200</option>
          <option value="high">Over OMR 200</option>
        </select>
      </div>

      <div className="flex items-end gap-2">
        <button type="submit" className="btn-primary w-full">Apply Filters</button>
        <a href="/courses" className="btn-outline w-full text-center">Reset</a>
      </div>
    </form>
  );
}
