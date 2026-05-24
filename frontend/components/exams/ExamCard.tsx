import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarDays, FileText } from "lucide-react";
import type { Exam } from "@/lib/types";

export default function ExamCard({ exam }: { exam: Exam }) {
  return (
    <Card className="rounded-[28px] border-border/70 bg-gradient-to-br from-background to-sky-50/40 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <CardContent className="p-6">
        <div className="w-fit rounded-2xl border border-border/70 bg-background/80 p-3">
          <FileText className="h-6 w-6" />
        </div>

        <h3 className="mt-6 text-xl font-semibold">{exam.name}</h3>

        <p className="mt-3 text-sm text-muted-foreground">
          {exam.description}
        </p>

        <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
          <CalendarDays className="h-4 w-4" />
          Upcoming notifications available
        </div>

        <Button className="mt-6 w-full rounded-xl">
          View Exam
          <ArrowRight className="h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
}
