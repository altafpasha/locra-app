import React from "react";
import { Sparkles } from "lucide-react";
import { Container } from "@/components/common/Container";
import { AppStoreBadges } from "@/components/common/AppStoreBadges";

export function DownloadBanner() {
  return (
    <section className="py-20 sm:py-28 bg-app text-white relative overflow-hidden border-t border-white/10" id="download-app">
      <Container size="lg" className="relative z-10 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-accent/[0.14] border border-accent/30 px-3.5 py-1.5 text-xs font-semibold text-accent mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Available on iOS &amp; Android</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 max-w-3xl mx-auto leading-tight">
          Start planning your <span className="accent-gradient-text">next trip.</span>
        </h2>

        <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Never let travel ideas get lost again. Save places from the travel content you love, organize them into trips, and let Locra AI help you plan the journey.
        </p>

        <div className="flex justify-center mb-8">
          <AppStoreBadges size="lg" />
        </div>

        <p className="text-xs text-white/45">
          Subscriptions and features are managed through the mobile app.
        </p>
      </Container>
    </section>
  );
}
