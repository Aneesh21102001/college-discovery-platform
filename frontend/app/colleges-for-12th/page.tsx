import CollegeCard from "@/components/colleges/CollegeCard";

async function getData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/junior-colleges`,
    { cache: "no-store" }
  );
  return res.json();
}

export default async function Page() {
  const data = await getData();

  return (
    <section className="px-6 py-10">
      <h1 className="text-3xl font-bold">
        12th Colleges
      </h1>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {Array.isArray(data) &&
          data.map((item: any) => (
            <CollegeCard key={item.slug} college={item} />
          ))}
      </div>
    </section>
  );
}