import React from "react";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Badge } from "@/components/common/Badge";
import { siteConfig } from "@/lib/site-config";

export function PricingCards() {
  const freeFeatures = [
    "10 Reel & content extractions / month",
    "Google Places location verification",
    "Unlimited trips & saved place pins",
    "Interactive trip map & pin filters",
    "Manual day-by-day itinerary builder",
    "Group trip sharing & collaborator invites",
    "Expense logging & group cost splitting",
    "Starter AI trip suggestions",
  ];

  const proFeatures = [
    "Unlimited Reel & content extractions",
    "AI-powered day-by-day itinerary generation",
    "Route & distance-aware day optimization",
    "Contextual AI Trip Assistant & Q&A",
    "Personalized AI spot recommendations",
    "Advanced group trip collaboration",
    "Priority AI processing & higher limits",
    "Early access to new mobile features",
  ];

  return (
    <section className="py-20 sm:py-28 bg-app border-b border-white/10" id="pricing">
      <Container size="xl">
        <SectionHeader
          badge="Simple Transparent Pricing"
          badgeVariant="neutral"
          title="Start free. Upgrade when you’re ready to travel."
          description="Everything you need to collect and verify places is free forever. Unlock unlimited Reel extraction and full AI itinerary generation with Locra Pro."
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {/* Free Tier Card */}
          <div className="rounded-3xl glass-card p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-bold uppercase tracking-wider text-white/70">
                  Free Forever
                </span>
                <Badge variant="neutral" size="sm">
                  Starter
                </Badge>
              </div>

              <div className="flex items-baseline gap-1 mb-3">
                <span className="text-4xl sm:text-5xl font-extrabold text-white">
                  $0
                </span>
                <span className="text-sm text-white/45 font-medium">/ month</span>
              </div>

              <p className="text-sm text-white/65 mb-8">
                Perfect for travelers wanting to save and organize spots from social media.
              </p>

              <div className="space-y-3.5 pt-6 border-t border-white/10">
                <div className="text-xs font-semibold text-white uppercase tracking-wider">
                  Included in Free:
                </div>
                {freeFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-white/70">
                    <Check className="w-4 h-4 text-white shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <a
                href={siteConfig.links.googlePlay}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-black border border-white/20 text-white font-semibold py-3.5 text-sm hover:border-white/50 hover:bg-[#111115] transition-all active:scale-[0.98]"
              >
                <span>Get Started Free on Google Play</span>
                <ArrowRight className="w-4 h-4 text-accent" />
              </a>
              <p className="text-[11px] text-white/40 text-center mt-2.5">
                No credit card required • Android &amp; iOS
              </p>
            </div>
          </div>

          {/* Pro Tier Card */}
          <div className="relative rounded-3xl glass-strong text-white p-8 sm:p-10 border border-accent/50 accent-glow flex flex-col justify-between">
            {/* Top Ribbon */}
            <div className="absolute -top-3.5 right-8 bg-gradient-to-r from-accent-soft to-gold text-[#1A0F02] px-3.5 py-1 rounded-full text-xs font-extrabold tracking-wide uppercase shadow-md flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" /> Most Popular
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-bold uppercase tracking-wider text-accent">
                  Locra Pro
                </span>
                <Badge variant="accent" size="sm">
                  Full AI Power
                </Badge>
              </div>

              <div className="flex items-baseline gap-1.5 mb-3">
                <span className="text-2xl sm:text-3xl font-extrabold text-white">
                  Pro Mobile Access
                </span>
              </div>

              <p className="text-sm text-white/70 mb-8">
                For frequent travelers, group trip leaders, and automated itinerary planning.
              </p>

              <div className="space-y-3.5 pt-6 border-t border-white/10">
                <div className="text-xs font-semibold text-accent uppercase tracking-wider">
                  Everything in Free, plus:
                </div>
                {proFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-white/80">
                    <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <a
                href={siteConfig.links.googlePlay}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-accent-soft to-accent text-[#1A0F02] font-bold py-3.5 text-sm transition-all accent-glow hover:brightness-110 active:scale-[0.98]"
              >
                <Sparkles className="w-4 h-4" />
                <span>Get Locra Pro on Google Play</span>
              </a>
              <p className="text-[11px] text-white/40 text-center mt-2.5">
                Subscriptions are securely managed through Google Play Store or Apple App Store.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
