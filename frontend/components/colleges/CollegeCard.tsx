import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Star,
  GraduationCap,
  IndianRupee,
} from "lucide-react";

type College = {
  name: string;
  location: string;
  rating: string;
  fees: string;
  courses: string;
};

export default function CollegeCard({ college }: { college: College }) {
  return (
    <Card className="rounded-3xl border shadow-md transition hover:-translate-y-1 hover:shadow-xl">
      <CardContent className="p-6">
        {/* Top */}
        <div className="flex items-start justify-between">
          <div className="rounded-xl border p-3">
            <GraduationCap className="h-6 w-6" />
          </div>

          <div className="flex items-center gap-1 rounded-full border px-3 py-1 text-sm font-medium">
            <Star className="h-4 w-4" />
            {college.rating}
          </div>
        </div>

        {/* Title */}
        <h3 className="mt-6 text-xl font-semibold">
          {college.name}
        </h3>

        {/* Location */}
        <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          {college.location}
        </div>

        {/* Courses */}
        <p className="mt-4 text-sm text-muted-foreground">
          {college.courses}
        </p>

        {/* Fees */}
        <div className="mt-4 flex items-center gap-2 text-sm font-medium">
          <IndianRupee className="h-4 w-4" />
          {college.fees}
        </div>

        {/* Actions */}
        <div className="mt-6 grid gap-3">
          <Button className="w-full rounded-xl">
            View Details
          </Button>

          <div className="flex gap-3">
            <Button
              variant="outline"
              className="w-full rounded-xl"
            >
              Apply Now
            </Button>

            <Button
              variant="outline"
              className="w-full rounded-xl"
            >
              Compare
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}