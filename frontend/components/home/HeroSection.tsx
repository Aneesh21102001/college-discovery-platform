import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  BookOpen,
  Building2,
  Users,
  Sparkles,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-muted/40 via-background to-background px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm font-medium shadow-sm">
              <Sparkles className="h-4 w-4" />
              Trusted by Students Across India
            </div>

            <h1 className="mt-8 text-5xl font-bold leading-tight md:text-7xl">
              Find the Right College
              <span className="block">
                for Your Future
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              Discover colleges, compare courses, explore
              admissions, scholarships, and connect with
              expert counselors for personalized guidance
              and better career decisions.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                size="lg"
                className="rounded-2xl px-8 py-6 text-base"
              >
                Explore Colleges
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="rounded-2xl px-8 py-6 text-base"
              >
                Free Counseling
              </Button>
            </div>

            <div className="mt-14 grid gap-8 sm:grid-cols-3">
              <div>
                <h3 className="text-3xl font-bold">
                  500+
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  Partner Colleges
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">
                  50K+
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  Students Guided
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">
                  100+
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  Expert Counselors
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-3xl border bg-background p-7 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
              <div className="w-fit rounded-2xl border p-4">
                <Building2 className="h-7 w-7" />
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                Top Colleges
              </h3>

              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Explore leading colleges across India by
                ranking, fees, placements, and student reviews.
              </p>
            </div>

            <div className="rounded-3xl border bg-background p-7 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
              <div className="w-fit rounded-2xl border p-4">
                <BookOpen className="h-7 w-7" />
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                Courses & Exams
              </h3>

              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Discover trending courses and entrance exams
                for your academic and career goals.
              </p>
            </div>

            <div className="rounded-3xl border bg-background p-7 shadow-md transition hover:-translate-y-1 hover:shadow-xl sm:col-span-2">
              <div className="w-fit rounded-2xl border p-4">
                <Users className="h-7 w-7" />
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                Free Career Counseling
              </h3>

              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Get one-on-one expert guidance for admissions,
                scholarships, study abroad planning,
                and long-term career decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}