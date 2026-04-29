import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const courses = [
  {
    name: "B.Tech",
    description: "Engineering and Technology programs",
  },
  {
    name: "MBA",
    description: "Management and Business Administration",
  },
  {
    name: "MBBS",
    description: "Medical and Healthcare programs",
  },
  {
    name: "BCA",
    description: "Computer Applications and IT",
  },
];

export default function FeaturedCourses() {
  return (
    <section className="px-6 pb-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-center">
          Featured Courses
        </h2>

        <p className="mt-2 text-muted-foreground text-center">
          Explore the most popular courses students choose.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {courses.map((course, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-center">
                  {course.name}
                </h3>

                <p className="mt-3 text-sm text-muted-foreground text-center">
                  {course.description}
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