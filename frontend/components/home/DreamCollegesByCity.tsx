import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Building2 } from "lucide-react";

const cities = [
  {
    name: "Bangalore",
    description: "Top engineering and management colleges",
    colleges: "120+ Colleges",
  },
  {
    name: "Delhi",
    description: "Best universities and entrance prep hubs",
    colleges: "150+ Colleges",
  },
  {
    name: "Mumbai",
    description: "Popular for business, media, and commerce",
    colleges: "110+ Colleges",
  },
  {
    name: "Hyderabad",
    description: "Strong for tech, pharmacy, and management",
    colleges: "95+ Colleges",
  },
];

export default function DreamCollegesByCity() {
  return (
    <section className="px-6 pb-20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Select Dream Colleges in Desired City
          </h2>

          <p className="mt-3 text-muted-foreground">
            Explore top colleges by city and find the right
            destination for your academic future.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {cities.map((city, index) => (
            <Card
              key={index}
              className="rounded-2xl border shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="rounded-xl border p-3">
                    <MapPin className="h-6 w-6" />
                  </div>

                  <div className="rounded-full border px-3 py-1 text-sm font-medium">
                    {city.colleges}
                  </div>
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  {city.name}
                </h3>

                <p className="mt-3 text-sm text-muted-foreground">
                  {city.description}
                </p>

                <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                  <Building2 className="h-4 w-4" />
                  Top-ranked colleges available
                </div>

                <Button className="mt-6 w-full rounded-xl">
                  Explore Colleges
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}