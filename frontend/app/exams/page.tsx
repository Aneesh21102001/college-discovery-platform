import ExamBanner from "@/components/exams/ExamBanner";
import ExamCard from "@/components/exams/ExamCard";
import ExamFilters from "@/components/exams/ExamFilters";
import { exams } from "@/lib/data/exams";
import type { Exam } from "@/lib/types";

async function getExams() {
  return exams as Exam[];
}

export default async function ExamsPage() {
  const examItems = await getExams();
  const isLoading = false;

  return (
    <>
      <ExamBanner />

      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-4">
          <div className="sticky top-24 h-fit">
            <ExamFilters />
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
            ) : examItems.length === 0 ? (
              <div className="rounded-2xl border p-10 text-center">
                <h3 className="text-lg font-semibold">No exams found</h3>
              </div>
            ) : (
              <>
                <div className="grid gap-6 md:grid-cols-2">
                  {examItems.map((exam) => (
                    <ExamCard key={exam.slug} exam={exam} />
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
