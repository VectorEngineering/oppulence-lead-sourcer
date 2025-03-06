"use client";

import GradientBackground from "@/components/hero/ui/GradientBackground";
import HeroContent from "@/components/hero/HeroContent";
import QuoteCarousel from "@/components/hero/ui/QuoteCarousel";
import ScrollIndicator from "@/components/hero/ui/ScrollIndicator";

export default function Hero() {
  return (
    <>
      <section className="no-scrollbar relative min-h-[90vh] overflow-hidden bg-background">
        <GradientBackground />
        <QuoteCarousel />
        <HeroContent />
        <ScrollIndicator />
      </section>
    </>
  );
}
