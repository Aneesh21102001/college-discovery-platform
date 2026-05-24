import CourseBanner from "@/components/courses/CourseBanner";
import CourseCard from "@/components/courses/CourseCard";
import CourseFilters from "@/components/courses/CourseFilters";
import { courses } from "@/lib/data/courses";

export default function CoursesPage() {
  const isLoading = false;

  return (
    <>
      <CourseBanner />

      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-4">
          <div className="sticky top-24 h-fit lg:col-span-1">
            <CourseFilters />
          </div>

          <div className="space-y-6 lg:col-span-3">
            {isLoading ? (
              <div className="grid gap-6 md:grid-cols-2">
                {[...Array(4)].map((_, index) => (
                  <div
                    key={index}
                    className="h-40 animate-pulse rounded-2xl border"
                  />
                ))}
              </div>
            ) : courses.length === 0 ? (
              <div className="rounded-2xl border p-10 text-center">
                <h3 className="text-lg font-semibold">No courses found</h3>
              </div>
            ) : (
              <>
                <div className="grid gap-6 md:grid-cols-2">
                  {courses.map((course) => (
                    <CourseCard key={course.slug} course={course} />
                  ))}
                </div>

                <div className="flex justify-center gap-2">
                  <button className="rounded-xl border px-4 py-2">Prev</button>
                  {[1, 2, 3].map((page) => (
                    <button
                      key={page}
                      className="rounded-xl border px-4 py-2"
                    >
                      {page}
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
