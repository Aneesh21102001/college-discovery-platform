"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { clearCompareItems, useCompareItems } from "@/lib/compare-store";
import { formatFees, getInstitutionLabel } from "@/lib/institutions";

export default function ComparePage() {
  const items = useCompareItems();

  if (items.length === 0) {
    return (
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl rounded-[32px] border bg-gradient-to-br from-background to-muted/40 p-10 text-center shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Compare
          </p>
          <h1 className="mt-3 text-3xl font-bold">
            No institutions selected yet
          </h1>
          <p className="mt-4 text-muted-foreground">
            Add up to three colleges from the listings to compare fees,
            ratings, and course mix side by side.
          </p>
          <Button asChild className="mt-8 rounded-xl">
            <Link href="/colleges">Browse Colleges</Link>
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section className="px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[32px] border bg-gradient-to-r from-slate-50 via-background to-emerald-50 p-8 shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">
                Compare
              </p>
              <h1 className="mt-3 text-3xl font-bold">
                Compare Institutions
              </h1>
              <p className="mt-3 max-w-2xl text-muted-foreground">
                Review each shortlisted profile side by side before you decide
                where to apply.
              </p>
            </div>

            <Button
              variant="outline"
              className="rounded-xl"
              onClick={clearCompareItems}
            >
              Clear list
            </Button>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.slug}
              className="rounded-[28px] border bg-background p-6 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                {getInstitutionLabel(item)}
              </p>
              <h2 className="mt-3 text-2xl font-semibold">{item.name}</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                {item.location}
              </p>

              <div className="mt-6 grid gap-4">
                <div className="rounded-2xl bg-muted p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Rating
                  </p>
                  <p className="mt-2 text-lg font-semibold">
                    {item.rating ?? "N/A"}
                  </p>
                </div>

                <div className="rounded-2xl bg-muted p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Fees
                  </p>
                  <p className="mt-2 text-lg font-semibold">
                    {formatFees(item.fees) ?? "Not listed"}
                  </p>
                </div>

                <div className="rounded-2xl bg-muted p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Courses
                  </p>
                  <p className="mt-2 text-sm leading-6 text-foreground">
                    {item.courses ??
                      item.board ??
                      item.type ??
                      item.stream ??
                      "Information pending"}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
