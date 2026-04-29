import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Star, GraduationCap } from "lucide-react";

const colleges = [
  {
    name: "IIT Bombay",
    location: "Mumbai",
    courses: "B.Tech, M.Tech, MBA",
    rating: "4.8",
  },
  {
    name: "IIM Ahmedabad",
    location: "Ahmedabad",
    courses: "MBA, Executive MBA",
    rating: "4.9",
  },
  {
    name: "AIIMS Delhi",
    location: "Delhi",
    courses: "MBBS, MD, Medical Programs",
    rating: "4.9",
  },
];

export default function FeaturedColleges() {
  return (
    <section className="bg-muted/20 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Featured Colleges
          </h2>

          <p className="mt-3 text-muted-foreground">
            Explore top colleges students are actively searching for.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {colleges.map((college, index) => (
            <Card
              key={index}
              className="rounded-3xl border bg-background shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="rounded-2xl border bg-muted/40 p-4">
                    <GraduationCap className="h-6 w-6" />
                  </div>

                  <div className="flex items-center gap-1 rounded-full border px-3 py-1 text-sm font-medium">
                    <Star className="h-4 w-4" />
                    {college.rating}
                  </div>
                </div>

                <h3 className="mt-6 text-xl font-semibold leading-tight">
                  {college.name}
                </h3>

                <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  {college.location}
                </div>

                <p className="mt-4 text-sm text-muted-foreground">
                  {college.courses}
                </p>

                <div className="mt-6 flex gap-3">
                  <Button className="w-full rounded-xl">
                    View Details
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full rounded-xl"
                  >
                    Compare
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}