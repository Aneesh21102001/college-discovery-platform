import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileCheck, CalendarDays } from "lucide-react";

const exams = [
  {
    name: "JEE Main",
    description:
      "Engineering entrance examination",
    type: "Engineering",
  },
  {
    name: "NEET",
    description:
      "Medical entrance examination",
    type: "Medical",
  },
  {
    name: "CAT",
    description:
      "MBA entrance examination",
    type: "Management",
  },
  {
    name: "CLAT",
    description:
      "Law entrance examination",
    type: "Law",
  },
];

export default function TopExamsSection() {
  return (
    <section className="px-6 pb-20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Top Entrance Exams
          </h2>

          <p className="mt-3 text-muted-foreground">
            Explore major entrance exams for admissions
            across India.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {exams.map((exam, index) => (
            <Card
              key={index}
              className="rounded-2xl border shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="rounded-xl border p-3">
                    <FileCheck className="h-6 w-6" />
                  </div>

                  <div className="rounded-full border px-3 py-1 text-sm font-medium">
                    {exam.type}
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
                  Admission updates available
                </div>

                <Button className="mt-6 w-full rounded-xl">
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