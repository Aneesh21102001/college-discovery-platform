import { MapPin, Star } from "lucide-react";
import { getInstitutionLabel, sanitizeText } from "@/lib/institutions";
import type { Institution } from "@/lib/types";

export default function CollegeHeader({ college }: { college: Institution }) {
  return (
    <section className="px-6 pt-10">
      <div className="mx-auto max-w-7xl rounded-[32px] border bg-gradient-to-r from-sky-50 via-background to-emerald-50 p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
          {getInstitutionLabel(college)}
        </p>

        <h1 className="mt-3 text-3xl font-bold md:text-4xl">
          {sanitizeText(college.name)}
        </h1>

        <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            {sanitizeText(college.location)}
          </div>
          <div className="flex items-center gap-2 rounded-full border bg-background/70 px-3 py-1 font-medium text-foreground">
            <Star className="h-4 w-4 fill-current text-amber-500" />
            {college.rating ?? "N/A"} rating
          </div>
        </div>
      </div>
    </section>
  );
}
