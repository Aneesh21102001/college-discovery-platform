import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl text-center">
        <h1 className="text-4xl font-bold leading-tight md:text-6xl">
          Find the Right College for Your Future
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Discover colleges, compare courses, explore admissions,
          and connect with expert counselors for guidance.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Button size="lg">
            Explore Colleges
          </Button>

          <Button variant="outline" size="lg">
            Free Counseling
          </Button>
        </div>
      </div>
    </section>
  );
}