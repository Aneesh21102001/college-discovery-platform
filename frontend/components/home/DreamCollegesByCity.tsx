import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const cities = [
  {
    name: "Bangalore",
    description: "Top engineering and management colleges",
  },
  {
    name: "Delhi",
    description: "Best universities and entrance prep hubs",
  },
  {
    name: "Mumbai",
    description: "Popular for business, media, and commerce",
  },
  {
    name: "Hyderabad",
    description: "Strong for tech, pharmacy, and management",
  },
];

export default function DreamCollegesByCity() {
  return (
    <section className="px-6 pb-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-center">
          Select Dream Colleges in Desired City
        </h2>

        <p className="mt-2 text-muted-foreground text-center">
          Explore top colleges by city and find the right destination for your future.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {cities.map((city, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-center">
                  {city.name}
                </h3>

                <p className="mt-3 text-sm text-muted-foreground">
                  {city.description}
                </p>

                <Button className="mt-6 w-full">
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