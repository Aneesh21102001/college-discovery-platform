import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PhoneCall, BadgeCheck } from "lucide-react";

export default function LeadFormSection() {
  return (
    <section className="px-6 pb-20">
      <div className="mx-auto max-w-6xl rounded-3xl border bg-background p-8 shadow-sm md:p-12">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium">
              <BadgeCheck className="h-4 w-4" />
              Free Admission Support
            </div>

            <h2 className="mt-6 text-3xl font-bold leading-tight md:text-5xl">
              Request Admission Guidance
            </h2>

            <p className="mt-4 text-muted-foreground">
              Fill in your details and our admission experts
              will help you choose the right college,
              course, and career path.
            </p>

            <div className="mt-8 rounded-2xl border p-6">
              <div className="flex items-center gap-3">
                <PhoneCall className="h-6 w-6" />

                <div>
                  <h3 className="font-semibold">
                    Need Quick Help?
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    Talk directly with our expert counselors
                  </p>
                </div>
              </div>

              <p className="mt-4 text-lg font-semibold">
                +91 99999 99999
              </p>
            </div>
          </div>

          <div className="rounded-2xl border p-6">
            <div className="grid gap-4 md:grid-cols-2">
              <Input placeholder="Full Name" />
              <Input placeholder="Email Address" />
              <Input placeholder="Phone Number" />
              <Input placeholder="Preferred Course" />
            </div>

            <div className="mt-4">
              <Textarea
                placeholder="Tell us what kind of college or course you are looking for"
                className="min-h-[140px]"
              />
            </div>

            <div className="mt-6">
              <Button
                size="lg"
                className="w-full rounded-xl"
              >
                Submit Inquiry
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}