"use client";

import Link from "next/link";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BadgeCheck,
  GraduationCap,
  IndianRupee,
  MapPin,
  Star,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  detectInstitutionKind,
  formatFees,
  getInstitutionHighlights,
  getInstitutionLabel,
  sanitizeText,
} from "@/lib/institutions";
import { useCompareItems, writeCompareItems } from "@/lib/compare-store";
import type { Institution } from "@/lib/types";

export default function CollegeCard({ college }: { college: Institution }) {
  const [added, setAdded] = useState(false);
  const compareItems = useCompareItems();
  const isAdded = compareItems.some((item) => item.slug === college.slug);

  const institutionKind = detectInstitutionKind(college);
  const label = getInstitutionLabel(college);
  const fees = formatFees(college.fees);
  const highlights = getInstitutionHighlights(college);
  const hasDetailPage = institutionKind === "college";

  const handleCompare = () => {
    const existing = compareItems;

    if (existing.find((item) => item.slug === college.slug)) {
      return;
    }

    const updated = [...existing, college].slice(0, 3);
    writeCompareItems(updated);

    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <Card className="group rounded-[28px] border-border/70 bg-gradient-to-br from-background via-background to-muted/40 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <CardContent className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="rounded-2xl border border-border/70 bg-background/80 p-3 shadow-sm">
            <GraduationCap className="h-6 w-6" />
          </div>

          <div className="flex flex-col items-end gap-2">
            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
              {label}
            </span>
            <div className="flex items-center gap-1 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-sm font-medium text-amber-800">
              <Star className="h-4 w-4 fill-current" />
              {college.rating ?? "N/A"}
            </div>
          </div>
        </div>

        <h3 className="mt-6 text-xl font-semibold">
          {sanitizeText(college.name)}
        </h3>

        <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          {sanitizeText(college.location)}
        </div>

        {highlights.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {highlights.slice(0, 2).map((highlight) => (
              <span
                key={highlight}
                className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
              >
                {highlight}
              </span>
            ))}
          </div>
        )}

        <p className="mt-4 min-h-12 text-sm leading-6 text-muted-foreground">
          {sanitizeText(college.courses) ||
            "Profile, ratings, and guidance details available."}
        </p>

        {fees && (
          <div className="mt-4 flex items-center gap-2 text-sm font-medium">
            <IndianRupee className="h-4 w-4" />
            {fees}
          </div>
        )}

        <div className="mt-6 grid gap-3">
          {hasDetailPage ? (
            <Button asChild className="w-full rounded-xl">
              <Link href={`/colleges/${college.slug}`}>
                View Details
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          ) : (
            <Button className="w-full rounded-xl" disabled>
              Detail page coming soon
            </Button>
          )}

          <Button
            variant="outline"
            className={cn(
              "w-full rounded-xl border-border/70",
              "hover:border-foreground/20 hover:bg-muted/70"
            )}
          >
            Apply Now
          </Button>

          <Button
            variant="outline"
            onClick={handleCompare}
            disabled={isAdded}
            className="w-full rounded-xl border-border/70"
          >
            {isAdded ? (
              <>
                <BadgeCheck className="h-4 w-4" />
                Added
              </>
            ) : (
              "Compare"
            )}
          </Button>

          {added && (
            <p className="text-center text-xs text-green-600">
              Added to compare
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
