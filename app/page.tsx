import React from "react";
import { HeroSection } from "@/components/hero/HeroSection";
import { ProblemSolution } from "@/components/features/ProblemSolution";
import { ReelExtractorDemo } from "@/components/reel-feature/ReelExtractorDemo";
import { AppShowcase } from "@/components/showcase/AppShowcase";
import { StepTimeline } from "@/components/how-it-works/StepTimeline";
import { FeatureGrid } from "@/components/features/FeatureGrid";
import { VoiceAiBanner } from "@/components/features/VoiceAiBanner";
import { AiContextSection } from "@/components/features/AiContextSection";
import { PricingCards } from "@/components/pricing/PricingCards";
import { ComparisonTable } from "@/components/pricing/ComparisonTable";
import { FAQAccordion } from "@/components/faq/FAQAccordion";
import { DownloadBanner } from "@/components/common/DownloadBanner";
import { Container } from "@/components/common/Container";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Problem & Solution Section */}
      <ProblemSolution />

      {/* 3. Reel-First Differentiator Interactive Demo */}
      <ReelExtractorDemo />

      {/* 4. Real App Screens Showcase */}
      <AppShowcase />

      {/* 5. 4-Step How It Works Flow */}
      <StepTimeline />

      {/* 5. Bento Grid of Core Capabilities */}
      <FeatureGrid />

      {/* 6. Voice AI Interactive Waveform Banner */}
      <VoiceAiBanner />

      {/* 7. Trip-Aware AI Section */}
      <AiContextSection />

      {/* 7. Pricing & Feature Comparison */}
      <PricingCards />

      <section className="pb-20 sm:pb-28 bg-app">
        <Container size="xl">
          <ComparisonTable />
        </Container>
      </section>

      {/* 8. Frequently Asked Questions */}
      <FAQAccordion limit={6} />

      {/* 9. Final Download App Banner */}
      <DownloadBanner />
    </div>
  );
}
