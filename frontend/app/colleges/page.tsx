import CollegeBanner from "@/components/colleges/CollegeBanner";
import CollegeFilters from "@/components/colleges/CollegeFilters";
import CollegeCard from "@/components/colleges/CollegeCard";
import { colleges } from "@/lib/data/colleges";

export default function CollegesPage() {
  return (
    <>
      <CollegeBanner />

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl grid gap-8 lg:grid-cols-4">

          {/* Sidebar */}
          <div>
            <CollegeFilters />
          </div>

          {/* Cards */}
          <div className="lg:col-span-3 grid gap-6 md:grid-cols-2">
            {colleges.map((college) => (
              <CollegeCard key={college.slug} college={college} />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}