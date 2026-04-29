import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Building2, Star } from "lucide-react";

const popularColleges = [
  {
    name: "Delhi University",
    location: "New Delhi",
    description:
      "Popular for arts, commerce, and science programs",
    rating: "4.7",
  },
  {
    name: "VIT Vellore",
    location: "Tamil Nadu",
    description:
      "Well-known for engineering and technology education",
    rating: "4.6",
  },
  {
    name: "Manipal University",
    location: "Karnataka",
    description:
      "Strong reputation in medicine and engineering",
    rating: "4.8",
  },
  {
    name: "SRM University",
    location: "Chennai",
    description:
      "Popular private university with diverse programs",
    rating: "4.5",
  },
];

export default function PopularCollegesSection() {
  return (
    <section className="px-6 pb-20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Popular Colleges
          </h2>

          <p className="mt-3 text-muted-foreground">
            Discover colleges students frequently explore
            for admissions and career growth.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {popularColleges.map((college, index) => (
            <Card
              key={index}
              className="rounded-2xl border shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="rounded-xl border p-3">
                    <Building2 className="h-6 w-6" />
                  </div>

                  <div className="flex items-center gap-1 rounded-full border px-3 py-1 text-sm font-medium">
                    <Star className="h-4 w-4" />
                    {college.rating}
                  </div>
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  {college.name}
                </h3>

                <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  {college.location}
                </div>

                <p className="mt-4 text-sm text-muted-foreground">
                  {college.description}
                </p>

                <Button className="mt-6 w-full rounded-xl">
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