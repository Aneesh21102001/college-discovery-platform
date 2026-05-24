import {
  formatFees,
  getInstitutionLabel,
  sanitizeText,
} from "@/lib/institutions";
import type { Institution } from "@/lib/types";

export default function CollegeInfo({ college }: { college: Institution }) {
  const facts = [
    {
      label: "Fees",
      value: formatFees(college.fees),
    },
    {
      label: "Rating",
      value: college.rating,
    },
    {
      label: "Location",
      value: sanitizeText(college.location),
    },
    {
      label: "Type",
      value:
        college.type ?? college.board ?? college.stream ?? getInstitutionLabel(college),
    },
  ].filter((fact): fact is { label: string; value: string } => Boolean(fact.value));

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {facts.map((fact) => (
        <div
          key={fact.label}
          className="rounded-3xl border bg-background p-6 shadow-sm"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            {fact.label}
          </p>
          <p className="mt-3 text-lg font-semibold text-foreground">
            {fact.value}
          </p>
        </div>
      ))}
    </div>
  );
}
