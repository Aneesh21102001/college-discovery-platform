import { Button } from "@/components/ui/button";
import {
  PhoneCall,
  Users,
  BadgeCheck,
} from "lucide-react";

export default function CounselingCTA() {
  return (
    <section className="px-6 pb-20">
      <div className="mx-auto max-w-6xl rounded-3xl border bg-background p-10 shadow-sm md:p-14">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium">
              <BadgeCheck className="h-4 w-4" />
              Trusted Career Guidance
            </div>

            <h2 className="mt-6 text-3xl font-bold leading-tight md:text-5xl">
              Get Free Career Counseling
            </h2>

            <p className="mt-4 max-w-2xl text-muted-foreground">
              Confused about colleges, courses, admissions,
              scholarships, or career paths? Connect with our
              expert counselors and get personalized guidance
              for your academic future.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                size="lg"
                className="rounded-xl px-8"
              >
                Talk to a Counselor
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="rounded-xl px-8"
              >
                Request Callback
              </Button>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border p-6">
              <PhoneCall className="h-8 w-8" />

              <h3 className="mt-4 text-lg font-semibold">
                One-on-One Guidance
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Personalized support for admissions,
                exams, and career planning.
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <Users className="h-8 w-8" />

              <h3 className="mt-4 text-lg font-semibold">
                Expert Counselors
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Experienced mentors helping students
                across India choose better paths.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}