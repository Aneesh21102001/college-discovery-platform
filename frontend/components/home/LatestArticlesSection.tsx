import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookText, Clock3 } from "lucide-react";

const articles = [
  {
    title: "How to Choose the Right College After 12th",
    description:
      "A complete guide for students planning higher education.",
    readTime: "5 min read",
  },
  {
    title: "Top MBA Colleges in India 2026",
    description:
      "Compare rankings, fees, placements, and admission process.",
    readTime: "7 min read",
  },
  {
    title: "Study Abroad vs Study in India",
    description:
      "Understand costs, opportunities, and career outcomes.",
    readTime: "6 min read",
  },
];

export default function LatestArticlesSection() {
  return (
    <section className="px-6 pb-20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Latest Articles
          </h2>

          <p className="mt-3 text-muted-foreground">
            Explore expert guides, rankings,
            and admission strategies.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {articles.map((item, index) => (
            <Card
              key={index}
              className="rounded-2xl border shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="rounded-xl border p-3">
                    <BookText className="h-6 w-6" />
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock3 className="h-4 w-4" />
                    {item.readTime}
                  </div>
                </div>

                <h3 className="mt-6 text-lg font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm text-muted-foreground">
                  {item.description}
                </p>

                <Button className="mt-6 w-full rounded-xl">
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