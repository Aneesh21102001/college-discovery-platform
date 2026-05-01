import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

export default function ExamFilters() {
  return (
    <aside className="rounded-3xl border p-6">
      <h2 className="text-lg font-semibold">
        Filters
      </h2>

      <div className="mt-6">
        <Input placeholder="Search exams..." />
      </div>

      <div className="mt-6 space-y-2">
        {["Engineering", "Medical", "MBA", "Law"].map((type) => (
          <div key={type} className="flex items-center gap-2">
            <Checkbox id={type} />
            <label htmlFor={type} className="text-sm">
              {type}
            </label>
          </div>
        ))}
      </div>
    </aside>
  );
}