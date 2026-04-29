import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const scholarships = [
  {
    name: "National Scholarship Portal",
    description: "Government scholarships for UG and PG students",
  },
  {
    name: "Merit-Based Scholarships",
    description: "Scholarships for high academic performance",
  },
  {
    name: "Entrance Exam Scholarships",
    description: "Financial aid through competitive exam performance",
  },
  {
    name: "Study Abroad Scholarships",
    description: "Funding support for international education",
  },
];

export default function ScholarshipsSection() {
  return (
    <section className="px-6 pb-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-center">
          Explore Scholarships
        </h2>

        <p className="mt-2 text-muted-foreground text-center">
          Search among government, private, and competitive scholarship opportunities.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {scholarships.map((item, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold">
                  {item.name}
                </h3>

                <p className="mt-3 text-sm text-muted-foreground">
                  {item.description}
                </p>

                <Button className="mt-6 w-full">
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