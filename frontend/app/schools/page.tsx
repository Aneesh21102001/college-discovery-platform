import CollegeCard from "@/components/colleges/CollegeCard";
import { fetchApiJson } from "@/lib/api";
import type { Institution } from "@/lib/types";

async function getData() {
  try {
    const data = await fetchApiJson<Institution[]>("/api/schools");
    return { data, error: null };
  } catch (error) {
    return {
      data: [] as Institution[],
      error:
        error instanceof Error
          ? error.message
          : "Unable to load schools right now.",
    };
  }
}

export default async function Page() {
  const { data, error } = await getData();

  return (
    <section className="px-6 py-10">
      <h1 className="text-3xl font-bold">Schools</h1>

      {error && (
        <div className="mt-6 rounded-3xl border border-destructive/20 bg-destructive/5 p-6 text-sm text-destructive">
          {error}
        </div>
      )}

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {data.map((item) => (
          <CollegeCard key={item.slug} college={item} />
        ))}
      </div>
    </section>
  );
}
