import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import InfoBanner from "@/components/InfoBanner";
import AboutSection from "@/components/AboutSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden relative">
      <Header />
      <HeroSection />
      <InfoBanner />
      <AboutSection />
      <FacilitiesSection />
      <Footer />
    </div>
  );
};

export default Index;
