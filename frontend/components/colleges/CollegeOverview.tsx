import { getInstitutionOverview } from "@/lib/institutions";
import type { Institution } from "@/lib/types";

export default function CollegeOverview({ college }: { college: Institution }) {
  return (
    <div className="rounded-3xl border bg-background p-6 shadow-sm">
      <h2 className="text-xl font-semibold">Overview</h2>

      <p className="mt-4 text-sm leading-7 text-muted-foreground">
        {getInstitutionOverview(college)}
      </p>
    </div>
  );
}
