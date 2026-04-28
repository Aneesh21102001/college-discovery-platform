import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SearchSection() {
  return (
    <section className="px-6 pb-20">
      <div className="mx-auto max-w-5xl rounded-2xl border p-6 shadow-sm">
        <h2 className="text-2xl font-bold">
          Search Colleges & Courses
        </h2>

        <p className="mt-2 text-muted-foreground">
          Find top colleges, courses, exams, and admission guidance.
        </p>

        <div className="mt-6 flex flex-col gap-4 md:flex-row">
          <Input
            placeholder="Search colleges, courses, exams..."
            className="h-12"
          />

          <Button size="lg">
            Search
          </Button>
        </div>
      </div>
    </section>
  );
}