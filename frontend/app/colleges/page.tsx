import CollegeHeader from "@/components/colleges/CollegeHeader";
import CollegeOverview from "@/components/colleges/CollegeOverview";
import CollegeInfo from "@/components/colleges/CollegeInfo";
import CollegeCourses from "@/components/colleges/CollegeCourses";

export default function CollegeDetailPage() {
  return (
    <>
      <CollegeHeader />

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl space-y-6">
          <CollegeInfo />
          <CollegeOverview />
          <CollegeCourses />
        </div>
      </section>
    </>
  );
}