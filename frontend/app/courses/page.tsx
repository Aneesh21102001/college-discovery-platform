// app/courses/page.tsx

import CourseBanner from "@/components/courses/CourseBanner";
import CourseCard from "@/components/courses/CourseCard";
import CourseFilters from "@/components/courses/CourseFilters";

const courses = [
  {
    name: "B.Tech",
    description: "Engineering and Technology programs",
  },
  {
    name: "MBA",
    description: "Management and Business Administration",
  },
];

export default function CoursesPage() {
  return (
    <>
      <CourseBanner />

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl grid gap-8 lg:grid-cols-4">
          <div>
            <CourseFilters />
          </div>

          <div className="lg:col-span-3 grid gap-6 md:grid-cols-2">
            {courses.map((course, i) => (
              <CourseCard key={i} course={course} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}