import { Card, CardContent } from "@/components/ui/card";

const reviews = [
  {
    name: "John Doe",
    review:
      "The counseling support helped me choose the right engineering college. The process was smooth and clear.",
  },
  {
    name: "John Doe",
    review:
      "I found the best MBA colleges and got admission guidance quickly. Highly useful platform.",
  },
  {
    name: "John Doe",
    review:
      "Comparing colleges and courses saved me a lot of time. Very helpful for admission planning.",
  },
];

export default function StudentReviewsSection() {
  return (
    <section className="px-6 pb-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-center">
          Student Reviews
        </h2>

        <p className="mt-2 text-muted-foreground text-center">
          Hear what students say about their admission journey.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {reviews.map((item, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold">
                  {item.name}
                </h3>

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