import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const schoolExams = [
  {
    name: "CBSE Board Exams",
    description: "National board exams for Class 10 and 12 students",
  },
  {
    name: "ICSE Board Exams",
    description: "Comprehensive school examinations across India",
  },
  {
    name: "Olympiad Exams",
    description: "Competitive academic exams for school students",
  },
  {
    name: "NTSE",
    description: "Scholarship exam for talented school students",
  },
];

export default function TopSchoolExamsSection() {
  return (
    <section className="px-6 pb-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-center">
          Top School Exams in India
        </h2>

        <p className="mt-2 text-muted-foreground text-center">
          Explore important school-level exams and scholarship opportunities.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {schoolExams.map((exam, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-center">
                  {exam.name}
                </h3>

                <p className="mt-3 text-sm text-muted-foreground text-center">
                  {exam.description}
                </p>

                <Button className="mt-6 w-full">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}