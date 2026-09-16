import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Marquee from "@/components/Marquee";
import BrandifFolio from "@/components/BrandifFolio";
import StackingCards from "@/components/StackingCards";
import PhilosophySection from "@/components/PhilosophySection";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import PartnersGrid from "@/components/PartnersGrid";
import InsightsSection from "@/components/InsightsSection";
import CtaSection from "@/components/CtaSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";

/**
 * Server Component: Main landing page for Brandif agency website.
 * Renders all sections in an optimized server-rendered shell.
 */
export default function HomePage() {
  const serviceTicker = [
    "Branding",
    "Social Media",
    "Web Design",
    "Photography",
    "Videography",
    "Content Creation",
  ];

  const partnersTicker = [
    "Our Partners",
    "Our Partners",
    "Our Partners",
    "Our Partners",
  ];

  return (
    <main className="w-full min-h-screen bg-[#141414] text-white selection:bg-[#B5FF2F] selection:text-black">
      {/* 1. Full Navigation Header */}
      <Header />

      {/* 2. Dynamic Sliding Title + 3D Showreel Hero */}
      <HeroSection />

      {/* 3. Services Infinite Velocity Marquee */}
      <Marquee
        items={serviceTicker}
        textColor="#bfff00"
        starColor="#bfff00"
        speed={2.2}
      />

      {/* 4. BrandifFolio Work & Video Showcase */}
      <BrandifFolio />

      {/* 5. Sticky Stacking Service Cards Deck */}
      <StackingCards />

      {/* 6. Process & Philosophy */}
      <PhilosophySection />

      {/* 7. Client Reviews / Testimonials Slider */}
      <TestimonialsSlider />

      {/* 8. Partners Ticker + 4x4 Logo Grid */}
      <Marquee
        items={partnersTicker}
        textColor="#3A3A3A"
        starColor="#3A3A3A"
        speed={1.5}
      />
      <PartnersGrid />

      {/* 9. Latest Team Insights & Blog Grid */}
      <InsightsSection />

      {/* 10. 3D Ribbon Call to Action */}
      <CtaSection />

      {/* 11. Concierge Floating WhatsApp Trigger */}
      <FloatingWhatsApp />

      {/* 12. Modern Luxury Footer */}
      <Footer />
    </main>
  );
}
