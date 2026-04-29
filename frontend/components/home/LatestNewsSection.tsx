import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Newspaper, CalendarDays } from "lucide-react";

const news = [
  {
    title: "JEE Main 2026 Registration Begins",
    description:
      "Application process starts for engineering aspirants across India.",
    date: "April 2026",
  },
  {
    title: "NEET UG Exam Date Announced",
    description:
      "Medical entrance exam schedule released for upcoming admissions.",
    date: "April 2026",
  },
  {
    title: "CAT 2026 Notification Released",
    description:
      "MBA aspirants can now check official exam details and deadlines.",
    date: "April 2026",
  },
];

export default function LatestNewsSection() {
  return (
    <section className="px-6 pb-20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Latest News
          </h2>

          <p className="mt-3 text-muted-foreground">
            Stay updated with the latest admission
            and exam announcements.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {news.map((item, index) => (
            <Card
              key={index}
              className="rounded-2xl border shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="rounded-xl border p-3">
                    <Newspaper className="h-6 w-6" />
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CalendarDays className="h-4 w-4" />
                    {item.date}
                  </div>
                </div>

                <h3 className="mt-6 text-lg font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm text-muted-foreground">
                  {item.description}
                </p>

                <Button className="mt-6 w-full rounded-xl">
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}