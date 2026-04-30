import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function CollegeBanner() {
  return (
    <section className="px-6 py-12">
      <div className="mx-auto max-w-7xl rounded-3xl border bg-gradient-to-b from-blue-50/40 to-background p-8 shadow-sm md:p-10">
        <h1 className="text-3xl font-bold md:text-4xl">
          Top Colleges in India
        </h1>

        <p className="mt-3 max-w-xl text-muted-foreground">
          Browse colleges, compare fees and placements, and get expert help for admissions.
        </p>

        <div className="mt-6 relative max-w-xl">
          <Search className="absolute left-4 top-4 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search colleges..."
            className="h-12 pl-12 rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}