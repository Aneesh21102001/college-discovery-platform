export default function CollegeHeader({ college }: any) {
  return (
    <section className="px-6 pt-10">
      <div className="mx-auto max-w-7xl rounded-3xl border p-8">
        <h1 className="text-3xl font-bold">
          {college.name}
        </h1>

        <p className="mt-2 text-muted-foreground">
          {college.location}
        </p>
      </div>
    </section>
  );
}