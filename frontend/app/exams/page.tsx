// app/exams/page.tsx

import ExamBanner from "@/components/exams/ExamBanner";
import ExamCard from "@/components/exams/ExamCard";
import ExamFilters from "@/components/exams/ExamFilters";

async function getExams() {
  const res = await fetch("http://localhost:3000/api/exams", {
    cache: "no-store",
  });
  return res.json();
}

export default async function ExamsPage() {
  const exams = await getExams();
  const isLoading = false;

  return (
    <>
      <ExamBanner />

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl grid gap-8 lg:grid-cols-4">

          <div className="sticky top-24 h-fit">
            <ExamFilters />
          </div>

          <div className="lg:col-span-3 space-y-6">

            {isLoading ? (
              <div className="grid gap-6 md:grid-cols-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-40 rounded-2xl border animate-pulse" />
                ))}
              </div>
            ) : exams.length === 0 ? (
              <div className="rounded-2xl border p-10 text-center">
                <h3 className="text-lg font-semibold">No exams found</h3>
              </div>
            ) : (
              <>
                <div className="grid gap-6 md:grid-cols-2">
                  {exams.map((exam: any) => (
                    <ExamCard key={exam.slug} exam={exam} />
                  ))}
                </div>

                <div className="flex justify-center gap-2">
                  <button className="rounded-xl border px-4 py-2">Prev</button>
                  {[1, 2, 3].map((p) => (
                    <button key={p} className="rounded-xl border px-4 py-2">{p}</button>
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