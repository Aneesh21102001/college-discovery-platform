import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BadgeDollarSign, Award } from "lucide-react";

const scholarships = [
  {
    name: "National Scholarship Portal",
    description:
      "Government scholarships for UG and PG students",
    type: "Government",
  },
  {
    name: "Merit-Based Scholarships",
    description:
      "Scholarships for high academic performance",
    type: "Merit-Based",
  },
  {
    name: "Entrance Exam Scholarships",
    description:
      "Financial aid through competitive exam performance",
    type: "Competitive",
  },
  {
    name: "Study Abroad Scholarships",
    description:
      "Funding support for international education",
    type: "International",
  },
];

export default function ScholarshipsSection() {
  return (
    <section className="px-6 pb-20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Explore Scholarships
          </h2>

          <p className="mt-3 text-muted-foreground">
            Search among government, private, and
            competitive scholarship opportunities.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {scholarships.map((item, index) => (
            <Card
              key={index}
              className="rounded-2xl border shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="rounded-xl border p-3">
                    <BadgeDollarSign className="h-6 w-6" />
                  </div>

                  <div className="rounded-full border px-3 py-1 text-sm font-medium">
                    {item.type}
                  </div>
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  {item.name}
                </h3>

                <p className="mt-3 text-sm text-muted-foreground">
                  {item.description}
                </p>

                <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                  <Award className="h-4 w-4" />
                  Financial support available
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