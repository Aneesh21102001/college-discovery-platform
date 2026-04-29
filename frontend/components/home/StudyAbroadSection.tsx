import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, GraduationCap } from "lucide-react";

const destinations = [
  {
    country: "USA",
    description:
      "Top-ranked universities with global career opportunities",
    universities: "400+ Universities",
  },
  {
    country: "UK",
    description:
      "World-class education and strong postgraduate programs",
    universities: "250+ Universities",
  },
  {
    country: "Canada",
    description:
      "Affordable education with excellent PR opportunities",
    universities: "180+ Universities",
  },
  {
    country: "Australia",
    description:
      "High-quality education with student-friendly lifestyle",
    universities: "150+ Universities",
  },
];

export default function StudyAbroadSection() {
  return (
    <section className="px-6 pb-20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Study Abroad Options
          </h2>

          <p className="mt-3 text-muted-foreground">
            Choose from the top study destinations the world
            has to offer. Explore universities, rankings,
            admission details, and exams.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {destinations.map((item, index) => (
            <Card
              key={index}
              className="rounded-2xl border shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="rounded-xl border p-3">
                    <Globe className="h-6 w-6" />
                  </div>

                  <div className="rounded-full border px-3 py-1 text-sm font-medium">
                    {item.universities}
                  </div>
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  {item.country}
                </h3>

                <p className="mt-3 text-sm text-muted-foreground">
                  {item.description}
                </p>

                <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                  <GraduationCap className="h-4 w-4" />
                  Top universities available
                </div>

                <Button className="mt-6 w-full rounded-xl">
                  Explore
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}