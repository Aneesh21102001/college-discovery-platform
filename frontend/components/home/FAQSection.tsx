import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BadgeHelp } from "lucide-react";

export default function FAQSection() {
  return (
    <section className="px-6 pb-20">
      <div className="mx-auto max-w-5xl rounded-3xl border bg-background p-8 shadow-sm md:p-12">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium">
            <BadgeHelp className="h-4 w-4" />
            Student Help Center
          </div>

          <h2 className="mt-6 text-3xl font-bold md:text-4xl">
            Frequently Asked Questions
          </h2>

          <p className="mt-3 text-muted-foreground">
            Find quick answers to common student
            admission and counseling questions.
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="mt-10 w-full"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>
              How do I choose the right college?
            </AccordionTrigger>
            <AccordionContent>
              Compare colleges based on courses, fees,
              placements, rankings, admission process,
              and long-term career opportunities before applying.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              Do you provide free counseling?
            </AccordionTrigger>
            <AccordionContent>
              Yes, students can connect with our expert
              counselors for free admission guidance
              and personalized career support.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              Can I apply for scholarships through this platform?
            </AccordionTrigger>
            <AccordionContent>
              Yes, you can explore government, private,
              merit-based, and entrance exam scholarships
              available for students.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>
              Do you help with study abroad admissions?
            </AccordionTrigger>
            <AccordionContent>
              Yes, we provide support for university selection,
              applications, entrance exams, visa guidance,
              and admission planning for study abroad.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>
              Can I compare colleges before applying?
            </AccordionTrigger>
            <AccordionContent>
              Yes, you can compare colleges based on fees,
              placements, rankings, infrastructure,
              reviews, and admission eligibility.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>
              How do I know which course is best for me?
            </AccordionTrigger>
            <AccordionContent>
              Our counseling experts help you choose the right
              course based on your interests, academic background,
              and long-term career goals.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger>
              Is there any fee for admission guidance?
            </AccordionTrigger>
            <AccordionContent>
              No, the initial counseling and admission guidance
              support provided through our platform
              is completely free.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8">
            <AccordionTrigger>
              Can I get updates about admission deadlines?
            </AccordionTrigger>
            <AccordionContent>
              Yes, we regularly share updates about admission dates,
              entrance exams, counseling rounds,
              and important notices.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}