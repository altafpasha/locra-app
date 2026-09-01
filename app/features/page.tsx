import type { Metadata } from "next";
import { FeatureGrid } from "@/components/features/FeatureGrid";
import { ReelExtractorDemo } from "@/components/reel-feature/ReelExtractorDemo";
import { AiContextSection } from "@/components/features/AiContextSection";
import { DownloadBanner } from "@/components/common/DownloadBanner";
import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { AppStoreBadges } from "@/components/common/AppStoreBadges";

export const metadata: Metadata = {
  title: "Travel Planning Features",
  description:
    "Explore Locra AI features: Reel & photo place extraction, Google Places verification, smart AI itineraries, collaborative trip spaces, and multi-currency expense splitting.",
  alternates: {
    canonical: "https://locra.app/features",
  },
};

export default function FeaturesPage() {
  return (
    <div className="flex flex-col">
      {/* Features Page Hero */}
      <section className="py-16 sm:py-24 bg-app border-b border-white/10">
        <Container size="lg" className="text-center">
          <SectionHeader
            badge="Locra AI Core Features"
            badgeVariant="accent"
            title="Every tool you need to turn saved places into real trips."
            description="Designed specifically for mobile travelers who discover spots across Instagram, TikTok, and web links, and want an organized, route-optimized itinerary with zero hassle."
          />
          <div className="mt-8 flex justify-center">
            <AppStoreBadges size="md" />
          </div>
        </Container>
      </section>

      {/* Interactive Reel Extractor Section */}
      <ReelExtractorDemo />

      {/* Deep-Dive Grid of Features */}
      <FeatureGrid />

      {/* AI Context Engine */}
      <AiContextSection />

      {/* Download CTA */}
      <DownloadBanner />
    </div>
  );
}
