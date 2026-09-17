import { InstructorForm } from "@/components/admin/instructor-form";

export default function NewInstructorPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-ink-900 dark:text-white">Add Instructor</h1>
      <p className="mt-1 text-ink-500 dark:text-ink-400">Create a new instructor profile.</p>
      <div className="mt-6 max-w-3xl">
        <InstructorForm />
      </div>
    </div>
  );
}
