import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const popularColleges = [
  {
    name: "Delhi University",
    location: "New Delhi",
    description: "Popular for arts, commerce, and science programs",
  },
  {
    name: "VIT Vellore",
    location: "Tamil Nadu",
    description: "Well-known for engineering and technology education",
  },
  {
    name: "Manipal University",
    location: "Karnataka",
    description: "Strong reputation in medicine and engineering",
  },
  {
    name: "SRM University",
    location: "Chennai",
    description: "Popular private university with diverse programs",
  },
];

export default function PopularCollegesSection() {
  return (
    <section className="px-6 pb-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-center">
          Popular Colleges
        </h2>

        <p className="mt-2 text-muted-foreground text-center">
          Discover colleges students frequently explore for admissions.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {popularColleges.map((college, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold">
                  {college.name}
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  {college.location}
                </p>

                <p className="mt-3 text-sm">
                  {college.description}
                </p>

                <Button className="mt-6 w-full">
                  View College
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}