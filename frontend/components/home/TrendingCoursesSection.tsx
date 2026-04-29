import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const trendingCourses = [
  {
    name: "Data Science",
    description: "High-demand course for analytics and AI careers",
  },
  {
    name: "MBA in Finance",
    description: "Popular management specialization for corporate roles",
  },
  {
    name: "MBBS",
    description: "Top medical degree for healthcare professionals",
  },
  {
    name: "B.Tech CSE",
    description: "Leading engineering course for software careers",
  },
];

export default function TrendingCoursesSection() {
  return (
    <section className="px-6 pb-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-center">
          Trending Courses
        </h2>

        <p className="mt-2 text-muted-foreground text-center">
          Explore the most popular courses students are choosing today.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {trendingCourses.map((course, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold">
                  {course.name}
                </h3>

                <p className="mt-3 text-sm text-muted-foreground">
                  {course.description}
                </p>

                <Button className="mt-6 w-full">
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