import CollegeBanner from "@/components/colleges/CollegeBanner";
import CollegeFilters from "@/components/colleges/CollegeFilters";
import CollegeCard from "@/components/colleges/CollegeCard";
import CollegeCardSkeleton from "@/components/colleges/CollegeCardSkeleton";
import { colleges } from "@/lib/data/colleges";

export default function CollegesPage() {
  const isLoading = false; // later connect real loading

  return (
    <>
      <CollegeBanner />

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl grid gap-8 lg:grid-cols-4">

          {/* Sidebar */}
          <div className="lg:col-span-1 sticky top-24 h-fit">
            <CollegeFilters />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">

            {/* Loading */}
            {isLoading ? (
              <div className="grid gap-6 md:grid-cols-2">
                {[...Array(4)].map((_, i) => (
                  <CollegeCardSkeleton key={i} />
                ))}
              </div>
            ) : colleges.length === 0 ? (
              /* Empty */
              <div className="rounded-2xl border p-10 text-center">
                <h3 className="text-lg font-semibold">
                  No colleges found
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  Try changing filters or search
                </p>
              </div>
            ) : (
              <>
                {/* Cards */}
                <div className="rounded-3xl border shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                  {colleges.map((college) => (
                    <CollegeCard key={college.slug} college={college} />
                  ))}
                </div>

                {/* Pagination */}
                <div className="mt-6 flex justify-center gap-2">
                  <button className="rounded-xl border px-4 py-2">
                    Prev
                  </button>

                  {[1, 2, 3].map((p) => (
                    <button
                      key={p}
                      className="rounded-xl border px-4 py-2"
                    >
                      {p}
                    </button>
                  ))}

                  <button className="rounded-xl border px-4 py-2">
                    Next
                  </button>
                </div>
              </>
            )}

          </div>
        </div>
      </section>
    </>
  );
}