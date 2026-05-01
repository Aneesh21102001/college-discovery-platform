import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function ExamBanner() {
  return (
    <section className="px-6 py-12">
      <div className="mx-auto max-w-7xl rounded-3xl border bg-gradient-to-b from-blue-50/40 to-background p-8">
        <h1 className="text-3xl font-bold md:text-4xl">
          Explore Entrance Exams
        </h1>

        <p className="mt-3 max-w-xl text-muted-foreground">
          Find details about engineering, medical, MBA, and other entrance exams.
        </p>

        <div className="relative mt-6 max-w-xl">
          <Search className="absolute left-4 top-4 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search exams..."
            className="h-12 pl-12 rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}