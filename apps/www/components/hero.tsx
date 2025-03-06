"use client";

import BenefitsSection from "@/components/hero/BenefitsSection";
import CallToActionSection from "@/components/hero/CallToActionSection";
import FeatureShowcase from "@/components/hero/FeatureShowcase";
import GradientBackground from "@/components/hero/ui/GradientBackground";
import HeroContent from "@/components/hero/HeroContent";
import HowItWorks from "@/components/hero/HowItWorks";
import QuoteCarousel from "@/components/hero/ui/QuoteCarousel";
import React from "react";
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

      <BenefitsSection />
      <CallToActionSection />
    </>
  );
}
