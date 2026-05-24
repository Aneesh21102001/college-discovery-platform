import CollegeBanner from "@/components/colleges/CollegeBanner";
import CollegeCard from "@/components/colleges/CollegeCard";
import CollegeFilters from "@/components/colleges/CollegeFilters";
import { fetchApiJson } from "@/lib/api";
import type { CollegesPageProps, Institution } from "@/lib/types";

async function getColleges(query: string) {
  try {
    const colleges = await fetchApiJson<Institution[]>(
      `/api/colleges?q=${encodeURIComponent(query)}`
    );

    return {
      colleges,
      error: null,
    };
  } catch (error) {
    return {
      colleges: [] as Institution[],
      error:
        error instanceof Error
          ? error.message
          : "Unable to load colleges right now.",
    };
  }
}

export default async function CollegesPage({
  searchParams,
}: CollegesPageProps) {
  const { q = "" } = await searchParams;
  const { colleges, error } = await getColleges(q);

  return (
    <>
      <CollegeBanner />

      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-4">
          <div className="sticky top-24 h-fit">
            <CollegeFilters />
          </div>

          <div className="space-y-6 lg:col-span-3">
            {error && (
              <div className="rounded-3xl border border-destructive/20 bg-destructive/5 p-6 text-sm text-destructive">
                {error}
              </div>
            )}

            {!Array.isArray(colleges) || colleges.length === 0 ? (
              <div className="rounded-2xl border p-10 text-center">
                <h3 className="text-lg font-semibold">No colleges found</h3>
              </div>
            ) : (
              <>
                <div className="grid gap-6 md:grid-cols-2">
                  {colleges.map((college) => (
                    <CollegeCard key={college.slug} college={college} />
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
