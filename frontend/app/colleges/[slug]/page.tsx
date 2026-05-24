import CollegeCourses from "@/components/colleges/CollegeCourses";
import CollegeHeader from "@/components/colleges/CollegeHeader";
import CollegeInfo from "@/components/colleges/CollegeInfo";
import CollegeOverview from "@/components/colleges/CollegeOverview";
import { fetchApiJson } from "@/lib/api";
import type { CollegeDetailPageProps, Institution } from "@/lib/types";

async function getCollege(slug: string) {
  try {
    const college = await fetchApiJson<Institution>(`/api/colleges/${slug}`);

    return {
      college,
      error: null,
    };
  } catch (error) {
    return {
      college: null,
      error:
        error instanceof Error
          ? error.message
          : "Unable to load the college profile.",
    };
  }
}

export default async function CollegeDetailPage({
  params,
}: CollegeDetailPageProps) {
  const { slug } = await params;
  const { college, error } = await getCollege(slug);

  if (!college) {
    return (
      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl rounded-[28px] border bg-background p-10 text-center shadow-sm">
          <h1 className="text-2xl font-semibold">College not available</h1>
          <p className="mt-4 text-muted-foreground">
            {error ?? "The requested college profile could not be found."}
          </p>
        </div>
      </section>
    );
  }

  return (
    <>
      <CollegeHeader college={college} />

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl space-y-6">
          <CollegeInfo college={college} />
          <CollegeOverview college={college} />
          <CollegeCourses college={college} />
        </div>
      </section>
    </>
  );
}
