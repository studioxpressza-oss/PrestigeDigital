import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/features/HeroSection";
import ServicesSection from "@/components/features/ServicesSection";
import WhyChooseUsSection from "@/components/features/WhyChooseUsSection";
import PricingSection from "@/components/features/PricingSection";
import TestimonialsSection from "@/components/features/TestimonialsSection";
import CTASection from "@/components/features/CTASection";
import WhatsAppButton from "@/components/features/WhatsAppButton";
import PortfolioSection from "@/components/features/PortfolioSection";
import ProcessSection from "@/components/features/ProcessSection";
import FAQSection from "@/components/features/FAQSection";

const Index = () => {
  return (
    <main className="font-montserrat">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <ProcessSection />
      <WhyChooseUsSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
