import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const exams = [
  {
    name: "JEE Mains",
    description: "Engineering entrance examination",
  },
  {
    name: "NEET",
    description: "Medical entrance examination",
  },
  {
    name: "CAT",
    description: "MBA entrance examination",
  },
  {
    name: "CLAT",
    description: "Law entrance examination",
  },
];

export default function TopExamsSection() {
  return (
    <section className="px-6 pb-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-center">
          Top Entrance Exams
        </h2>

        <p className="mt-2 text-muted-foreground text-center">
          Explore major entrance exams for admissions across India.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {exams.map((exam, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-center">
                  {exam.name}
                </h3>

                <p className="mt-3 text-sm text-muted-foreground text-center">
                  {exam.description}
                </p>

                <Button className="mt-6 w-full">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}