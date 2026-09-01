import type { Metadata } from "next";
import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { DownloadBanner } from "@/components/common/DownloadBanner";
import { Compass, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About Locra AI | Our Mission",
  description:
    "Locra AI exists to close the gap between discovering incredible travel places online and actually experiencing them in the real world.",
  alternates: {
    canonical: "https://locra.app/about",
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Header */}
      <section className="py-16 sm:py-24 bg-app border-b border-white/10">
        <Container size="md" className="text-center">
          <SectionHeader
            badge="Our Mission"
            badgeVariant="accent"
            title="Closing the gap between seeing a place and going there."
            description="Travel inspiration is all around us, but taking an idea from a 15-second social video to a well-planned itinerary in the real world has always been surprisingly difficult."
          />
        </Container>
      </section>

      {/* Main Editorial Story */}
      <section className="py-20 bg-app-2 border-b border-white/10">
        <Container size="md">
          <div className="max-w-none text-white/75 text-base sm:text-lg leading-relaxed space-y-8">
            <div className="rounded-3xl glass-card p-8 sm:p-10 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                The Gap Between Inspiration &amp; Reality
              </h2>

              <p>
                Every day, millions of travelers stumble upon hidden viewpoints, generational bakeries, and tucked-away mountain cabins while scrolling through Instagram, TikTok, and travel blogs.
              </p>

              <p className="text-xl font-medium text-accent bg-accent/10 p-6 rounded-2xl border border-accent/25 italic">
                &ldquo;That place looks amazing.&rdquo; → &ldquo;Let&apos;s actually go.&rdquo;
              </p>

              <p>
                Between those two thoughts sits a mountain of tedious friction: figuring out what the place is actually called, finding its exact address on Google Maps, saving it to a list that won&apos;t get lost, calculating travel times, and trying to align a group of friends who all have different ideas.
              </p>

              <p>
                Most travel saves end up forgotten in digital drawers. Locra AI was built to solve this exact problem.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="glass-card p-6 sm:p-8 rounded-3xl flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4 border border-accent/30">
                    <Compass className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Travel-First, Not AI-Hype
                  </h3>
                  <p className="text-sm text-white/65 leading-relaxed">
                    We use AI as a silent assistant that handles tedious tasks like location extraction and route clustering—so you spend less time planning and more time enjoying the destination.
                  </p>
                </div>
              </div>

              <div className="glass-card p-6 sm:p-8 rounded-3xl flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-ok/10 text-ok flex items-center justify-center mb-4 border border-ok/30">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Verified &amp; Realistic
                  </h3>
                  <p className="text-sm text-white/65 leading-relaxed">
                    We don&apos;t invent fake itineraries. Every location is verified with live Google Places data so you know opening hours, ratings, and exact coordinates before you go.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Download CTA */}
      <DownloadBanner />
    </div>
  );
}
