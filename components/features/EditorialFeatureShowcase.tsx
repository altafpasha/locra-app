"use client";

import React from "react";
import Image from "next/image";
import {
  Sparkles,
  Share2,
  Calendar,
  Users,
  DollarSign,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { cn } from "@/lib/utils";

interface EditorialFeature {
  number: string;
  badge: string;
  title: string;
  description: string;
  highlights: string[];
  screenshot: string;
  screenshotAlt: string;
  reverseLayout: boolean;
  pillGlow?: string;
  tagColor: string;
}

const FEATURES: EditorialFeature[] = [
  {
    number: "01",
    badge: "Universal Video & OCR Ingestion",
    title: "Extract every place from Reels with zero typing.",
    description:
      "Paste any Instagram Reel, TikTok, or photo link. Our multi-modal engine reads on-screen text and transcribes audio to isolate every single mentioned place, verifying each coordinate with the Google Places API.",
    highlights: [
      "Transcribes speech audio & reads video text overlays simultaneously",
      "Matches canonical Google Place IDs with 100% address accuracy",
      "Auto-detects duplicates so your trip list stays organized",
    ],
    screenshot: "/screenshots/web/trip-places.webp",
    screenshotAlt: "Locra AI Multi-Place Saved Workspace on Android",
    reverseLayout: false,
    tagColor: "text-accent bg-accent/15 border-accent/30",
  },
  {
    number: "02",
    badge: "Route & Distance-Aware Engine",
    title: "Intelligent day clustering. Zero backtracking.",
    description:
      "Locra groups your saved places by geographic neighborhood and calculates realistic transit times between stops. Choose your daily pace—relaxed, balanced, or packed—and get a route-optimized itinerary in seconds.",
    highlights: [
      "Calculates realistic driving and walking transit times between stops",
      "Automatic morning, afternoon, and evening neighborhood clustering",
      "Toggle status from 'To Visit' to 'Visited' on the go",
    ],
    screenshot: "/screenshots/web/plan-ai.webp",
    screenshotAlt: "Locra AI Route Optimization Itinerary Planner on Android",
    reverseLayout: true,
    tagColor: "text-purple bg-purple/15 border-purple/30",
  },
  {
    number: "03",
    badge: "Collaborative Trip Spaces",
    title: "One shared hub for the entire group.",
    description:
      "Invite friends with a single invite link. Everyone can drop saved spots from social media, vote on lunch stops, view the synchronized itinerary, and see real-time updates without messy group chat threads.",
    highlights: [
      "Instant invite links with live real-time synchronization",
      "Group voting on dinner, beach, and activity pins",
      "Shared live notes, confirmation codes, and booking links",
    ],
    screenshot: "/screenshots/web/trip-hub.webp",
    screenshotAlt: "Locra AI Collaborative Group Hub on Android",
    reverseLayout: false,
    tagColor: "text-cyan bg-cyan/15 border-cyan/30",
  },
  {
    number: "04",
    badge: "Automated Debt Minimization",
    title: "Splitwise-grade expense splitting built right in.",
    description:
      "Log expenses in any currency (INR, USD, EUR, JPY) with equal, custom, or percentage splits. Locra's debt settlement algorithm minimizes transfers so everyone settles with a single tap.",
    highlights: [
      "Multi-currency support with auto-converted exchange rates",
      "Debt minimization matrix: eliminates multi-hop friend IOUs",
      "Exportable summary for transparent post-trip settlements",
    ],
    screenshot: "/screenshots/web/home.webp",
    screenshotAlt: "Locra AI Expense Splitter and Trip Dashboard on Android",
    reverseLayout: true,
    tagColor: "text-ok bg-ok/15 border-ok/30",
  },
];

export function EditorialFeatureShowcase() {
  return (
    <section className="py-20 sm:py-32 bg-[#050507] relative overflow-hidden" id="features">
      {/* Ambient lighting spots */}
      <div className="ambient-orange-spot -right-32 top-1/4 w-[600px] h-[600px]" />
      <div className="ambient-orange-spot -left-32 top-2/3 w-[600px] h-[600px]" />

      <Container size="xl" className="relative z-10">
        <SectionHeader
          badge="Product Capabilities"
          badgeVariant="accent"
          title={
            <span className="text-white">
              Built for how travelers <span className="hero-gradient-text">actually plan.</span>
            </span>
          }
          description="A visual walkthrough of the four core pillars powering Locra AI on Android."
        />

        <div className="mt-20 sm:mt-28 space-y-24 sm:space-y-36">
          {FEATURES.map((feat, idx) => (
            <div
              key={feat.number}
              className={cn(
                "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center",
                feat.reverseLayout && "lg:grid-flow-dense"
              )}
            >
              {/* Device Visual Column */}
              <div
                className={cn(
                  "lg:col-span-6 flex justify-center relative",
                  feat.reverseLayout && "lg:col-start-7"
                )}
              >
                {/* Ambient glow behind screenshot */}
                <div className="absolute inset-0 bg-accent/12 blur-3xl rounded-full pointer-events-none" />

                <div className="relative w-full max-w-[310px] sm:max-w-[340px]">
                  {/* Android Phone Frame */}
                  <div className="relative rounded-[2.6rem] bg-[#07070A] p-2.5 sm:p-3 border border-white/15 shadow-2xl ring-1 ring-white/10">
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 w-3.5 h-3.5 rounded-full bg-black border border-white/20" />
                    <div className="relative aspect-[320/713] overflow-hidden rounded-[2rem] bg-app-2 border border-white/[0.08]">
                      <Image
                        src={feat.screenshot}
                        alt={feat.screenshotAlt}
                        fill
                        sizes="(max-width: 640px) 80vw, 340px"
                        className="object-cover object-top"
                      />
                    </div>
                  </div>

                  {/* Corner Index Tag */}
                  <div className="absolute -top-4 -left-4 w-10 h-10 rounded-2xl glass-strong border border-white/15 text-white font-mono font-bold text-xs flex items-center justify-center shadow-xl">
                    {feat.number}
                  </div>
                </div>
              </div>

              {/* Text Editorial Column */}
              <div
                className={cn(
                  "lg:col-span-6 flex flex-col items-start space-y-5",
                  feat.reverseLayout && "lg:col-start-1"
                )}
              >
                <div
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-bold border",
                    feat.tagColor
                  )}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{feat.badge}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight tracking-tight">
                  {feat.title}
                </h3>

                <p className="text-base text-white/70 leading-relaxed">
                  {feat.description}
                </p>

                <div className="w-full space-y-3 pt-3">
                  {feat.highlights.map((point, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-3 text-xs sm:text-sm text-white/80">
                      <CheckCircle2 className="w-4 h-4 text-ok shrink-0 mt-0.5" />
                      <span className="leading-snug">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
