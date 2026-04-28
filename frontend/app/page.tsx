import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/home/HeroSection";
import SearchSection from "@/components/home/SearchSection";
import FeaturedColleges from "@/components/home/FeaturedColleges";
import FeaturedCourses from "@/components/home/FeaturedCourses";
import CounselingCTA from "@/components/home/CounselingCTA";
import LeadFormSection from "@/components/home/LeadFormSection";
import TopExamsSection from "@/components/home/TopExamsSection";
import StudentReviewsSection from "@/components/home/StudentReviewsSection";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <SearchSection />
        <FeaturedColleges />
        <FeaturedCourses />
        <CounselingCTA />
        <LeadFormSection />
        <TopExamsSection />
        <StudentReviewsSection />
      </main>

      <Footer />
    </>
  );
}