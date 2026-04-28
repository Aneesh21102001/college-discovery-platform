import { Button } from "@/components/ui/button";

export default function CounselingCTA() {
  return (
    <section className="px-6 pb-20">
      <div className="mx-auto max-w-6xl rounded-3xl border p-10 text-center shadow-sm">
        <h2 className="text-3xl font-bold md:text-4xl">
          Get Free Career Counseling
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Confused about colleges, courses, or admissions?
          Connect with our expert counselors and get personalized guidance.
        </p>

        <div className="mt-8">
          <Button size="lg">
            Talk to a Counselor
          </Button>
        </div>
      </div>
    </section>
  );
}