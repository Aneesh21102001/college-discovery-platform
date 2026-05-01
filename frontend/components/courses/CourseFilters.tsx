import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

export default function CourseFilters() {
  return (
    <aside className="rounded-3xl border p-6">
      <h2 className="text-lg font-semibold">
        Filters
      </h2>

      <div className="mt-6">
        <Input placeholder="Search courses..." />
      </div>

      <div className="mt-6 space-y-2">
        {["Engineering", "Management", "Medical", "IT"].map((c) => (
          <div key={c} className="flex items-center gap-2">
            <Checkbox id={c} />
            <label htmlFor={c} className="text-sm">
              {c}
            </label>
          </div>
        ))}
      </div>
    </aside>
  );
}