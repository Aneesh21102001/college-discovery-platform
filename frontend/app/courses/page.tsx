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
  const isLoading = false;

  return (
    <>
      <CourseBanner />

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl grid gap-8 lg:grid-cols-4">

          {/* Sidebar */}
          <div className="lg:col-span-1 sticky top-24 h-fit">
            <CourseFilters />
          </div>

          {/* Content */}
          <div className="lg:col-span-3 space-y-6">

            {isLoading ? (
              <div className="grid gap-6 md:grid-cols-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-40 rounded-2xl border animate-pulse" />
                ))}
              </div>
            ) : courses.length === 0 ? (
              <div className="rounded-2xl border p-10 text-center">
                <h3 className="text-lg font-semibold">
                  No courses found
                </h3>
              </div>
            ) : (
              <>
                <div className="grid gap-6 md:grid-cols-2">
                  {courses.map((course, i) => (
                    <CourseCard key={i} course={course} />
                  ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center gap-2">
                  <button className="rounded-xl border px-4 py-2">Prev</button>
                  {[1, 2, 3].map((p) => (
                    <button key={p} className="rounded-xl border px-4 py-2">
                      {p}
                    </button>
                  ))}
                  <button className="rounded-xl border px-4 py-2">Next</button>
                </div>
              </>
            )}

          </div>
        </div>
      </section>
    </>
  );
}