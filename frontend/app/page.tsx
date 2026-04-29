import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/home/HeroSection";
import SearchSection from "@/components/home/SearchSection";
import FeaturedColleges from "@/components/home/FeaturedColleges";
import CounselingCTA from "@/components/home/CounselingCTA";
import DreamCollegesByCity from "@/components/home/DreamCollegesByCity";
import CuratedExploreSection from "@/components/home/CuratedExploreSection";
import StudyAbroadSection from "@/components/home/StudyAbroadSection";
import TrendingExamsSection from "@/components/home/TrendingExamsSection";
import TrendingCoursesSection from "@/components/home/TrendingCoursesSection";
import TopSchoolExamsSection from "@/components/home/TopSchoolExamsSection";
import PopularCollegesSection from "@/components/home/PopularCollegesSection";
import ScholarshipsSection from "@/components/home/ScholarshipsSection";
import FeaturedCourses from "@/components/home/FeaturedCourses";
import TopExamsSection from "@/components/home/TopExamsSection";
import LatestNewsSection from "@/components/home/LatestNewsSection";
import LatestArticlesSection from "@/components/home/LatestArticlesSection";
import StudentReviewsSection from "@/components/home/StudentReviewsSection";
import LeadFormSection from "@/components/home/LeadFormSection";
import FAQSection from "@/components/home/FAQSection";
import Footer from "@/components/layout/Footer";
import WhatsAppFloatingButton from "@/components/shared/WhatsAppFloatingButton";
import ScrollToTopButton from "@/components/shared/ScrollToTopButton";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <SearchSection />
        <FeaturedColleges />
        <CounselingCTA />
        <DreamCollegesByCity />
        <CuratedExploreSection />
        <StudyAbroadSection />
        <TrendingExamsSection />
        <TrendingCoursesSection />
        <TopSchoolExamsSection />
        <PopularCollegesSection />
        <ScholarshipsSection />
        <FeaturedCourses />
        <TopExamsSection />
        <LatestNewsSection />
        <LatestArticlesSection />
        <StudentReviewsSection />
        <LeadFormSection />
        <FAQSection />
      </main>

      <WhatsAppFloatingButton />
      <ScrollToTopButton />
      <Footer />
    </>
  );
}