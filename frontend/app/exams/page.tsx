import ExamBanner from "@/components/exams/ExamBanner";
import ExamCard from "@/components/exams/ExamCard";
import ExamFilters from "@/components/exams/ExamFilters";

const exams = [
  {
    name: "JEE Main",
    description: "Engineering entrance exam",
  },
  {
    name: "NEET",
    description: "Medical entrance exam",
  },
];

export default function ExamsPage() {
  return (
    <>
      <ExamBanner />

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl grid gap-8 lg:grid-cols-4">
          
          <div>
            <ExamFilters />
          </div>

          <div className="lg:col-span-3 grid gap-6 md:grid-cols-2">
            {exams.map((exam, i) => (
              <ExamCard key={i} exam={exam} />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}