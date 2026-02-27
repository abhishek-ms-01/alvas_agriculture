import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CoursesSection from "@/components/CoursesSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import ResearchSection from "@/components/ResearchSection";
import GallerySection from "@/components/GallerySection";
import CampusHighlightsSection from "@/components/CampusHighlightsSection";
import StudentVoicesSection from "@/components/StudentVoicesSection";
import AdmissionsSection from "@/components/AdmissionsSection";
import PlacementsSection from "@/components/PlacementsSection";
import StudentLifeSection from "@/components/StudentLifeSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <HeroSection />
      <AboutSection />
      <CoursesSection />
      <AdmissionsSection />
      <FacilitiesSection />
      <ResearchSection />
      <CampusHighlightsSection />
      <GallerySection />
      <StudentVoicesSection />
      <PlacementsSection />
      <StudentLifeSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
