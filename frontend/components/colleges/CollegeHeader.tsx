import { MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CollegeHeader() {
  return (
    <section className="px-6 pt-10">
      <div className="mx-auto max-w-7xl rounded-3xl border bg-gradient-to-b from-blue-50/40 to-background p-8">
        <h1 className="text-3xl font-bold md:text-4xl">
          IIT Bombay
        </h1>

        <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            Mumbai
          </div>

          <div className="flex items-center gap-1">
            <Star className="h-4 w-4" />
            4.8 Rating
          </div>
        </div>

        <div className="mt-6 flex gap-4">
          <Button>Apply Now</Button>
          <Button variant="outline">Download Brochure</Button>
        </div>
      </div>
    </section>
  );
}