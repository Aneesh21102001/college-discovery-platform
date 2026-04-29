import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Briefcase } from "lucide-react";

const trendingCourses = [
  {
    name: "Data Science",
    description:
      "High-demand course for analytics and AI careers",
    demand: "High Demand",
  },
  {
    name: "MBA in Finance",
    description:
      "Popular management specialization for corporate roles",
    demand: "Top MBA Choice",
  },
  {
    name: "MBBS",
    description:
      "Top medical degree for healthcare professionals",
    demand: "Medical Stream",
  },
  {
    name: "B.Tech CSE",
    description:
      "Leading engineering course for software careers",
    demand: "Most Preferred",
  },
];

export default function TrendingCoursesSection() {
  return (
    <section className="px-6 pb-20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Trending Courses
          </h2>

          <p className="mt-3 text-muted-foreground">
            Explore the most popular courses students
            are choosing today.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {trendingCourses.map((course, index) => (
            <Card
              key={index}
              className="rounded-2xl border shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="rounded-xl border p-3">
                    <BookOpen className="h-6 w-6" />
                  </div>

                  <div className="rounded-full border px-3 py-1 text-sm font-medium">
                    {course.demand}
                  </div>
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  {course.name}
                </h3>

                <p className="mt-3 text-sm text-muted-foreground">
                  {course.description}
                </p>

                <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                  <Briefcase className="h-4 w-4" />
                  Strong career opportunities
                </div>

                <Button className="mt-6 w-full rounded-xl">
                  Explore Course
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}