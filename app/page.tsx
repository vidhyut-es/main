import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/sections/HeroSection";
import FeaturesSection from "../components/sections/FeaturesSection";
import TechnologiesSection from "../components/sections/TechnologiesSection";
import SuccessStoriesSection from "../components/sections/SuccessStoriesSection";
import WhyChooseUsSection from "../components/sections/WhyChooseUsSection";
import PartnershipsSection from "../components/sections/PartnershipsSection";
import ContactQuerySection from "../components/sections/ContactQuerySection";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative font-sans overflow-x-hidden flex flex-col bg-white">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <TechnologiesSection />
      <WhyChooseUsSection />
      <SuccessStoriesSection />
      <PartnershipsSection />
      <ContactQuerySection />
      <Footer />
    </main>
  );
}
