import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Rahul Sharma",
    role: "Engineering Student",
    review:
      "The counseling support helped me choose the right engineering college. The process was smooth and clear.",
  },
  {
    name: "Priya Verma",
    role: "MBA Aspirant",
    review:
      "I found the best MBA colleges and got admission guidance quickly. The platform made my decision much easier.",
  },
  {
    name: "Aman Gupta",
    role: "Medical Student",
    review:
      "Comparing colleges and courses saved me a lot of time. It was extremely helpful for admission planning.",
  },
];

export default function StudentReviewsSection() {
  return (
    <section className="px-6 pb-20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Our Students Say
          </h2>

          <p className="mt-3 text-muted-foreground">
            Hear what students say about their
            admission journey with us.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {reviews.map((item, index) => (
            <Card
              key={index}
              className="rounded-2xl border shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback>
                      {item.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>

                  <div>
                    <h3 className="text-base font-semibold">
                      {item.name}
                    </h3>

                    <p className="text-sm text-muted-foreground">
                      {item.role}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex gap-1">
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                </div>

                <p className="mt-4 text-sm text-muted-foreground">
                  {item.review}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}