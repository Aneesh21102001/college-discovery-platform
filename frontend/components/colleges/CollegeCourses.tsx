import { splitCourses } from "@/lib/institutions";
import type { Institution } from "@/lib/types";

export default function CollegeCourses({ college }: { college: Institution }) {
  const courses = splitCourses(college.courses);

  return (
    <div className="rounded-3xl border bg-background p-6 shadow-sm">
      <h2 className="text-xl font-semibold">Courses Offered</h2>

      {courses.length === 0 ? (
        <p className="mt-4 text-sm text-muted-foreground">
          Course information has not been added yet.
        </p>
      ) : (
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {courses.map((course) => (
            <li
              key={course}
              className="rounded-2xl bg-muted px-4 py-3 text-sm text-foreground"
            >
              {course}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
