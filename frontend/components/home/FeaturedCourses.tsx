import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Briefcase } from "lucide-react";

const courses = [
  {
    name: "B.Tech",
    description:
      "Engineering and Technology programs",
    tag: "Engineering",
  },
  {
    name: "MBA",
    description:
      "Management and Business Administration",
    tag: "Management",
  },
  {
    name: "MBBS",
    description:
      "Medical and Healthcare programs",
    tag: "Medical",
  },
  {
    name: "BCA",
    description:
      "Computer Applications and IT",
    tag: "Technology",
  },
];

export default function FeaturedCourses() {
  return (
    <section className="px-6 pb-20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Featured Courses
          </h2>

          <p className="mt-3 text-muted-foreground">
            Explore the most popular courses students
            choose for strong career opportunities.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {courses.map((course, index) => (
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
                    {course.tag}
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
                  Strong placement opportunities
                </div>

                <Button className="mt-6 w-full rounded-xl">
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