import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const articles = [
  {
    title: "How to Choose the Right College After 12th",
    description: "A complete guide for students planning higher education.",
  },
  {
    title: "Top MBA Colleges in India 2026",
    description: "Compare rankings, fees, placements, and admission process.",
  },
  {
    title: "Study Abroad vs Study in India",
    description: "Understand costs, opportunities, and career outcomes.",
  },
];

export default function LatestArticlesSection() {
  return (
    <section className="px-6 pb-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-center">
          Latest Articles
        </h2>

        <p className="mt-2 text-muted-foreground text-center">
          Explore expert guides, rankings, and admission strategies.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {articles.map((item, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm text-muted-foreground">
                  {item.description}
                </p>

                <Button className="mt-6 w-full">
                  Read Article
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}