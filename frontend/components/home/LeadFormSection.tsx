import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function LeadFormSection() {
  return (
    <section className="px-6 pb-20">
      <div className="mx-auto max-w-5xl rounded-2xl border p-8 shadow-sm">
        <h2 className="text-3xl font-bold">
          Request Admission Guidance
        </h2>

        <p className="mt-2 text-muted-foreground">
          Fill in your details and our admission experts will contact you.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Input placeholder="Full Name" />
          <Input placeholder="Email Address" />
          <Input placeholder="Phone Number" />
          <Input placeholder="Preferred Course" />
        </div>

        <div className="mt-4">
          <Textarea
            placeholder="Tell us what kind of college or course you are looking for"
            className="min-h-[120px]"
          />
        </div>

        <div className="mt-6">
          <Button size="lg" className="w-full">
            Submit Inquiry
          </Button>
        </div>
      </div>
    </section>
  );
}