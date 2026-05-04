// app/colleges/page.tsx

import CollegeBanner from "@/components/colleges/CollegeBanner";
import CollegeCard from "@/components/colleges/CollegeCard";
import CollegeFilters from "@/components/colleges/CollegeFilters";

async function getColleges(query: string) {
  const res = await fetch(
    `http://localhost:3000/api/colleges?q=${query}`,
    { cache: "no-store" }
  );
  return res.json();
}

export default async function CollegesPage({ searchParams }: any) {
  const { q = "" } = await searchParams;
  const colleges = await getColleges(q);

  return (
    <>
      <CollegeBanner />

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl grid gap-8 lg:grid-cols-4">

          {/* Sidebar */}
          <div className="sticky top-24 h-fit">
            <CollegeFilters />
          </div>

          {/* Content */}
          <div className="lg:col-span-3 space-y-6">

            {colleges.length === 0 ? (
              <div className="rounded-2xl border p-10 text-center">
                <h3 className="text-lg font-semibold">
                  No colleges found
                </h3>
              </div>
            ) : (
              <>
                <div className="grid gap-6 md:grid-cols-2">
                  {colleges.map((college: any) => (
                    <CollegeCard key={college.slug} college={college} />
                  ))}
                </div>

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