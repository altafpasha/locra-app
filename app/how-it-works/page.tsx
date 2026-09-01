import type { Metadata } from "next";
import { StepTimeline } from "@/components/how-it-works/StepTimeline";
import { ReelExtractorDemo } from "@/components/reel-feature/ReelExtractorDemo";
import { DownloadBanner } from "@/components/common/DownloadBanner";
import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { AppStoreBadges } from "@/components/common/AppStoreBadges";

export const metadata: Metadata = {
  title: "How Locra AI Works | Travel Planning Made Simple",
  description:
    "Learn how Locra AI transforms Instagram Reels, photos, and ideas into organized trips, verified maps, and AI itineraries in 4 simple steps.",
  alternates: {
    canonical: "https://locra.app/how-it-works",
  },
};

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="py-16 sm:py-24 bg-app border-b border-white/10">
        <Container size="lg" className="text-center">
          <SectionHeader
            badge="The Workflow"
            badgeVariant="neutral"
            title="Discover → Save → Plan → Travel → Share"
            description="Locra connects the spark of discovering a hidden gem online with the reality of stepping foot into it with your best friends."
          />
          <div className="mt-8 flex justify-center">
            <AppStoreBadges size="md" />
          </div>
        </Container>
      </section>

      {/* 4-Step Progression */}
      <StepTimeline />

      {/* Reel-First Interactive Demo */}
      <ReelExtractorDemo />

      {/* Download CTA */}
      <DownloadBanner />
    </div>
  );
}
