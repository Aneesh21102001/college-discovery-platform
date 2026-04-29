import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, CalendarDays } from "lucide-react";

const trendingExams = [
  {
    name: "JEE Advanced",
    description:
      "Top engineering entrance exam for IIT admissions",
    applications: "2L+ Applicants",
  },
  {
    name: "NEET UG",
    description:
      "National medical entrance exam for MBBS admissions",
    applications: "20L+ Applicants",
  },
  {
    name: "CAT",
    description:
      "Management entrance exam for top MBA colleges",
    applications: "3L+ Applicants",
  },
  {
    name: "GATE",
    description:
      "Postgraduate engineering and PSU recruitment exam",
    applications: "8L+ Applicants",
  },
];

export default function TrendingExamsSection() {
  return (
    <section className="px-6 pb-20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Trending Exams
          </h2>

          <p className="mt-3 text-muted-foreground">
            Stay updated with the most searched entrance
            exams across India.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {trendingExams.map((exam, index) => (
            <Card
              key={index}
              className="rounded-2xl border shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="rounded-xl border p-3">
                    <FileText className="h-6 w-6" />
                  </div>

                  <div className="rounded-full border px-3 py-1 text-sm font-medium">
                    {exam.applications}
                  </div>
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  {exam.name}
                </h3>

                <p className="mt-3 text-sm text-muted-foreground">
                  {exam.description}
                </p>

                <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                  <CalendarDays className="h-4 w-4" />
                  Upcoming notifications available
                </div>

                <Button className="mt-6 w-full rounded-xl">
                  View Exam
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}