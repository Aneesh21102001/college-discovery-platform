import { colleges } from "@/lib/data/colleges";
import CollegeHeader from "@/components/colleges/CollegeHeader";
import CollegeInfo from "@/components/colleges/CollegeInfo";
import CollegeOverview from "@/components/colleges/CollegeOverview";
import CollegeCourses from "@/components/colleges/CollegeCourses";

export default async function CollegeDetailPage({ params }: any) {
  const { slug } = await params;

  const college = colleges.find(
    (c) => c.slug === slug
  );

  if (!college) {
    return <div className="p-10">College not found</div>;
  }

  return (
    <>
      <CollegeHeader college={college} />
      <CollegeInfo college={college} />
      <CollegeOverview college={college} />
      <CollegeCourses college={college} />
    </>
  );
}