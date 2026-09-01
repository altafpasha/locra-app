import type { Metadata } from "next";
import { PricingCards } from "@/components/pricing/PricingCards";
import { ComparisonTable } from "@/components/pricing/ComparisonTable";
import { FAQAccordion } from "@/components/faq/FAQAccordion";
import { DownloadBanner } from "@/components/common/DownloadBanner";
import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ShieldCheck, Smartphone, RefreshCw } from "lucide-react";

export const metadata: Metadata = {
  title: "Locra Pro Pricing | Locra AI",
  description:
    "Explore Locra AI Free vs Pro plans. Enjoy unlimited Reel place extractions, AI itineraries, and conversational travel assistance.",
  alternates: {
    canonical: "https://locra.app/pricing",
  },
};

export default function PricingPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="py-16 sm:py-20 bg-app border-b border-white/10">
        <Container size="lg" className="text-center">
          <SectionHeader
            badge="Transparent Plans"
            badgeVariant="accent"
            title="Start Free. Upgrade for Unlimited AI Power."
            description="Locra gives you generous free features for everyday saving and trip planning. Upgrade to Pro in the app for unlimited Reel extraction and full AI itinerary generation."
          />
        </Container>
      </section>

      {/* Pricing Cards */}
      <PricingCards />

      {/* Full Feature Comparison Table */}
      <section className="py-20 bg-app-2 border-b border-white/10">
        <Container size="xl">
          <ComparisonTable />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-xs text-white/65">
            <div className="glass-card p-5 rounded-2xl flex flex-col gap-2">
              <div className="flex items-center gap-2 font-bold text-white">
                <Smartphone className="w-4 h-4 text-accent" />
                <span>Store Managed</span>
              </div>
              <p>
                All purchases are securely handled through Apple App Store or Google Play Store.
              </p>
            </div>

            <div className="glass-card p-5 rounded-2xl flex flex-col gap-2">
              <div className="flex items-center gap-2 font-bold text-white">
                <RefreshCw className="w-4 h-4 text-ok" />
                <span>Cancel Anytime</span>
              </div>
              <p>
                Easily pause or cancel your subscription at any time in your device settings.
              </p>
            </div>

            <div className="glass-card p-5 rounded-2xl flex flex-col gap-2">
              <div className="flex items-center gap-2 font-bold text-white">
                <ShieldCheck className="w-4 h-4 text-purple" />
                <span>Family & Group Sharing</span>
              </div>
              <p>
                Collaborate on shared trips with friends regardless of whether they have Free or Pro.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Pricing FAQ subset */}
      <FAQAccordion
        badge="Pricing Questions"
        title="Common Subscription Questions"
        description="Frequently asked questions about Locra Free vs Pro and store billing."
        limit={4}
      />

      {/* Download CTA */}
      <DownloadBanner />
    </div>
  );
}
