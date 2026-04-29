import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const destinations = [
  {
    country: "USA",
    description: "Top-ranked universities with global career opportunities",
  },
  {
    country: "UK",
    description: "World-class education and strong postgraduate programs",
  },
  {
    country: "Canada",
    description: "Affordable education with excellent PR opportunities",
  },
  {
    country: "Australia",
    description: "High-quality education with student-friendly lifestyle",
  },
];

export default function StudyAbroadSection() {
  return (
    <section className="px-6 pb-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-center">
          Study Abroad Options
        </h2>

        <p className="mt-2 text-muted-foreground text-center">
          Choose from the top study destinations the world has to offer.
          Explore universities, rankings, admission details, and exams.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {destinations.map((item, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold">
                  {item.country}
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