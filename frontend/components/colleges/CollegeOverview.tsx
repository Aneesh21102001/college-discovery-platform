export default function CollegeOverview({ college }: any) {
  return (
    <div className="rounded-2xl border p-6">
      <h2 className="text-xl font-semibold">
        Overview
      </h2>

      <p className="mt-4 text-sm leading-7 text-muted-foreground">
        {college.overview}
      </p>
    </div>
  );
}