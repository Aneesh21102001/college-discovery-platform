import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const curatedItems = [
  {
    title: "Top Engineering Colleges",
    description: "Explore the best B.Tech and engineering institutes in India",
  },
  {
    title: "Best MBA Programs",
    description: "Find top management colleges and MBA specializations",
  },
  {
    title: "Medical Admissions",
    description: "Discover MBBS, BDS, and allied healthcare opportunities",
  },
  {
    title: "Competitive Exams",
    description: "Prepare for entrance exams with the right guidance",
  },
];

export default function CuratedExploreSection() {
  return (
    <section className="px-6 pb-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-center">
          Explore Colleges, Courses & Exams That Are Curated For You
        </h2>

        <p className="mt-2 text-muted-foreground text-center">
          Discover carefully selected opportunities based on your academic goals.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {curatedItems.map((item, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-center">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm text-muted-foreground text-center">
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