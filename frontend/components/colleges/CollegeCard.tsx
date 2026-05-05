"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Star,
  GraduationCap,
  IndianRupee,
} from "lucide-react";

type College = {
  slug: string;
  name: string;
  location: string;
  rating: string;
  fees: string;
  courses: string;
};

export default function CollegeCard({ college }: { college: College }) {
  const [added, setAdded] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    const existing = JSON.parse(localStorage.getItem("compare") || "[]");
    const found = existing.find((c: any) => c.slug === college.slug);
    setIsAdded(!!found);
  }, [college.slug]);

  const handleCompare = () => {
    const existing = JSON.parse(localStorage.getItem("compare") || "[]");

    if (existing.find((c: any) => c.slug === college.slug)) return;

    const updated = [...existing, college].slice(0, 3);
    localStorage.setItem("compare", JSON.stringify(updated));

    setIsAdded(true);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <Card className="rounded-3xl border shadow-md transition hover:-translate-y-1 hover:shadow-xl">
      <CardContent className="p-6">

        <div className="flex items-start justify-between">
          <div className="rounded-xl border p-3">
            <GraduationCap className="h-6 w-6" />
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
          {college.courses}
        </p>

        <div className="mt-4 flex items-center gap-2 text-sm font-medium">
          <IndianRupee className="h-4 w-4" />
          {college.fees}
        </div>

        <div className="mt-6 grid gap-3">
          <Button className="w-full rounded-xl">
            View Details
          </Button>

          <Button variant="outline" className="w-full rounded-xl">
            Apply Now
          </Button>

          <Button
            variant="outline"
            onClick={handleCompare}
            disabled={!!isAdded}
            className="w-full rounded-xl"
          >
            {isAdded ? "Added" : "Compare"}
          </Button>

          {added && (
            <p className="text-xs text-green-600 text-center">
              Added to compare
            </p>
          )}
        </div>

      </CardContent>
    </Card>
  );
}