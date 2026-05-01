import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Briefcase } from "lucide-react";

export default function CourseCard({ course }: any) {
  return (
    <Card className="rounded-3xl border shadow-md transition hover:-translate-y-1 hover:shadow-xl">
      <CardContent className="p-6">
        <div className="rounded-xl border p-3 w-fit">
          <BookOpen className="h-6 w-6" />
        </div>

        <h3 className="mt-6 text-xl font-semibold">
          {course.name}
        </h3>

        <p className="mt-3 text-sm text-muted-foreground">
          {course.description}
        </p>

        <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
          <Briefcase className="h-4 w-4" />
          High career demand
        </div>

        <Button className="mt-6 w-full rounded-xl">
          View Course
        </Button>
      </CardContent>
    </Card>
  );
}