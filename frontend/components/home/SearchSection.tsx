import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, MapPin, BookOpen } from "lucide-react";

export default function SearchSection() {
  return (
    <section className="px-6 pb-20">
      <div className="mx-auto max-w-6xl rounded-3xl border bg-background p-8 shadow-sm">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Search Colleges, Exams & Courses
          </h2>

          <p className="mt-3 text-muted-foreground">
            Discover top colleges, entrance exams, courses,
            scholarships, and admission guidance in one place.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-4">
          <div className="relative md:col-span-2">
            <Search className="absolute top-4 left-4 h-5 w-5 text-muted-foreground" />

            <Input
              placeholder="Search colleges, courses, exams..."
              className="h-14 rounded-xl pl-12"
            />
          </div>

          <div className="relative">
            <MapPin className="absolute top-4 left-4 h-5 w-5 text-muted-foreground" />

            <Input
              placeholder="Preferred City"
              className="h-14 rounded-xl pl-12"
            />
          </div>

          <div className="relative">
            <BookOpen className="absolute top-4 left-4 h-5 w-5 text-muted-foreground" />

            <Input
              placeholder="Course Type"
              className="h-14 rounded-xl pl-12"
            />
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <Button
            size="lg"
            className="rounded-xl px-10"
          >
            Search Now
          </Button>
        </div>
      </div>
    </section>
  );
}