import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/home/HeroSection";
import SearchSection from "@/components/home/SearchSection";
import FeaturedColleges from "@/components/home/FeaturedColleges";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <SearchSection />
        <FeaturedColleges />
      </main>

      <Footer />
    </>
  );
}