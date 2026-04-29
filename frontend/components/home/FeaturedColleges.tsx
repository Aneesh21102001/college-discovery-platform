import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const colleges = [
  {
    name: "IIT Bombay",
    location: "Mumbai",
    courses: "B.Tech, M.Tech, MBA",
  },
  {
    name: "IIM Ahmedabad",
    location: "Ahmedabad",
    courses: "MBA, Executive MBA",
  },
  {
    name: "AIMS",
    location: "Delhi",
    courses: "Medical",
  },
];

export default function FeaturedColleges() {
  return (
    <section className="px-6 pb-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-center">
          Featured Colleges
        </h2>

        <p className="mt-2 text-muted-foreground text-center">
          Explore top colleges students are searching for.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {colleges.map((college, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-center">
                  {college.name}
                </h3>

                <p className="mt-2 text-sm text-muted-foreground text-center">
                  {college.location}
                </p>

                <p className="mt-2 text-sm text-center">
                  {college.courses}
                </p>

                <Button className="mt-6 w-full">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}