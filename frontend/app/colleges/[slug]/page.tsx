import CollegeHeader from "@/components/colleges/CollegeHeader";
import CollegeInfo from "@/components/colleges/CollegeInfo";
import CollegeOverview from "@/components/colleges/CollegeOverview";
import CollegeCourses from "@/components/colleges/CollegeCourses";

async function getCollege(slug: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/colleges/${slug}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      return null;
    }

    return res.json();
  } catch (error) {
    return null;
  }
}

export default async function CollegeDetailPage({ params }: any) {
  const { slug } = await params;

  const college = await getCollege(slug);

  if (!college) {
    return (
      <div className="p-10 text-center">
        College not found
      </div>
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