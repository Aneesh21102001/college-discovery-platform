import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const news = [
  {
    title: "JEE Main 2026 Registration Begins",
    description: "Application process starts for engineering aspirants across India.",
  },
  {
    title: "NEET UG Exam Date Announced",
    description: "Medical entrance exam schedule released for upcoming admissions.",
  },
  {
    title: "CAT 2026 Notification Released",
    description: "MBA aspirants can now check official exam details and deadlines.",
  },
];

export default function LatestNewsSection() {
  return (
    <section className="px-6 pb-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-center">
          Latest News
        </h2>

        <p className="mt-2 text-muted-foreground text-center">
          Stay updated with the latest admission and exam announcements.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {news.map((item, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm text-muted-foreground">
                  {item.description}
                </p>

                <Button className="mt-6 w-full">
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