import React from "react";
import { HeroSection } from "@/components/hero/HeroSection";
import { AppIntroEditorial } from "@/components/features/AppIntroEditorial";
import { ProblemSolution } from "@/components/features/ProblemSolution";
import { ReelExtractorDemo } from "@/components/reel-feature/ReelExtractorDemo";
import { FeatureGrid } from "@/components/features/FeatureGrid";
import { EditorialFeatureShowcase } from "@/components/features/EditorialFeatureShowcase";
import { InteractiveDeviceExplorer } from "@/components/showcase/InteractiveDeviceExplorer";
import { AppShowcase } from "@/components/showcase/AppShowcase";
import { BenefitsMetrics } from "@/components/features/BenefitsMetrics";
import { SecurityTrustSection } from "@/components/features/SecurityTrustSection";
import { PricingCards } from "@/components/pricing/PricingCards";
import { ComparisonTable } from "@/components/pricing/ComparisonTable";
import { FAQAccordion } from "@/components/faq/FAQAccordion";
import { DownloadBanner } from "@/components/common/DownloadBanner";
import { Container } from "@/components/common/Container";

export default function HomePage() {
  return (
    <div className="flex flex-col bg-[#050507]">
      {/* 1. Cinematic Hero Section with 3-Phone Android Showcase */}
      <HeroSection />

      {/* 2. Editorial Statement & Product Introduction */}
      <AppIntroEditorial />

      {/* 3. The Core Travel Problem & Locra Solution */}
      <ProblemSolution />

      {/* 4. Live Interactive Reel Extractor (Connected to Universal API) */}
      <ReelExtractorDemo />

      {/* 5. Asymmetric Futuristic Feature Cards (Reference Visual System) */}
      <FeatureGrid />

      {/* 6. Alternating Visual Editorial Feature Deep-Dives */}
      <EditorialFeatureShowcase />

      {/* 6. Interactive Multi-Screen Android Device Explorer */}
      <InteractiveDeviceExplorer />

      {/* 7. Dedicated "Inside the App" Screenshot Gallery */}
      <AppShowcase />

      {/* 8. Measurable Outcomes & Benefits */}
      <BenefitsMetrics />

      {/* 9. Security, Privacy & Android Native Performance */}
      <SecurityTrustSection />

      {/* 10. Pricing & Feature Comparison */}
      <PricingCards />

      <section className="pb-20 sm:pb-28 bg-[#050507]">
        <Container size="xl">
          <ComparisonTable />
        </Container>
      </section>

      {/* 11. Frequently Asked Questions */}
      <FAQAccordion limit={6} />

      {/* 12. Final High-Impact Download App CTA */}
      <DownloadBanner />
    </div>
  );
}
