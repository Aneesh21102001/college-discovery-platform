import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  Briefcase,
  Stethoscope,
  BookOpen,
} from "lucide-react";

const curatedItems = [
  {
    title: "Top Engineering Colleges",
    description:
      "Explore the best B.Tech and engineering institutes in India",
    icon: GraduationCap,
  },
  {
    title: "Best MBA Programs",
    description:
      "Find top management colleges and MBA specializations",
    icon: Briefcase,
  },
  {
    title: "Medical Admissions",
    description:
      "Discover MBBS, BDS, and allied healthcare opportunities",
    icon: Stethoscope,
  },
  {
    title: "Competitive Exams",
    description:
      "Prepare for entrance exams with the right guidance",
    icon: BookOpen,
  },
];

export default function CuratedExploreSection() {
  return (
    <section className="px-6 pb-20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight md:text-4xl">
            Explore Colleges, Courses & Exams
            That Are Curated For You
          </h2>

          <p className="mt-3 text-muted-foreground">
            Discover carefully selected opportunities based
            on your academic goals and career ambitions.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {curatedItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <Card
                key={index}
                className="rounded-2xl border shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <CardContent className="p-6">
                  <div className="rounded-xl border p-3 w-fit">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm text-muted-foreground">
                    {item.description}
                  </p>

                  <Button className="mt-6 w-full rounded-xl">
                    Explore
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}