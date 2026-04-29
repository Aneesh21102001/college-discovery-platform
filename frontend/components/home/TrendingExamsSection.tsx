import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const trendingExams = [
  {
    name: "JEE Advance",
    description: "Top engineering entrance exam for IIT admissions",
  },
  {
    name: "NEET UG",
    description: "National medical entrance exam for MBBS admissions",
  },
  {
    name: "CAT",
    description: "Management entrance exam for top MBA colleges",
  },
  {
    name: "GATE",
    description: "Postgraduate engineering and PSU recruitment exam",
  },
];

export default function TrendingExamsSection() {
  return (
    <section className="px-6 pb-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-center">
          Trending Exams
        </h2>

        <p className="mt-2 text-muted-foreground text-center">
          Stay updated with the most searched entrance exams across India.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {trendingExams.map((exam, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-center">
                  {exam.name}
                </h3>

                <p className="mt-3 text-sm text-muted-foreground text-center">
                  {exam.description}
                </p>

                <Button className="mt-6 w-full">
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