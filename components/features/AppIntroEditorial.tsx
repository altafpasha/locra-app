"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, CheckCircle2, Navigation, Layers, Compass, ArrowRight } from "lucide-react";
import { Container } from "@/components/common/Container";

export function AppIntroEditorial() {
  const workflowPillars = [
    {
      title: "Universal Media Parser",
      desc: "Drop Instagram Reels, TikToks, Shorts, or screenshots. AI parses audio speech and reads on-screen text in seconds.",
      icon: Sparkles,
      tag: "Multi-Source",
    },
    {
      title: "Google Places Ground Truth",
      desc: "No hallucinated addresses. Every extracted place is matched with canonical Google Place IDs, verified coordinates, and live hours.",
      icon: Navigation,
      tag: "100% Verified",
    },
    {
      title: "Route-Aware Day Clustering",
      desc: "Eliminate endless backtracking. Locra calculates transit times and groups nearby spots into smooth, realistic morning and evening itineraries.",
      icon: Layers,
      tag: "Zero Backtracking",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#070709] border-y border-white/10 relative overflow-hidden" id="experience">
      {/* Ambient background glow */}
      <div className="ambient-orange-spot -left-20 top-1/3 w-[500px] h-[500px]" />

      <Container size="xl" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Statement & Highlights */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/15 border border-accent/30 px-3.5 py-1 text-xs font-bold text-accent">
              <Compass className="w-3.5 h-3.5" />
              <span>Native Android Architecture</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight text-balance">
              Everything you need, <br className="hidden sm:block" />
              <span className="hero-gradient-text">engineered for the road.</span>
            </h2>

            <p className="text-base sm:text-lg text-white/70 leading-relaxed font-normal">
              Most travel planners force you to spend hours copy-pasting addresses into spreadsheets.
              Locra AI replaces the friction with an intelligent, native mobile workspace that organizes
              your saved inspiration into actionable itineraries.
            </p>

            <div className="w-full space-y-4 pt-2">
              {workflowPillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="group rounded-2xl glass-card hover:bg-white/[0.06] p-4.5 transition-all border border-white/10 flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/25 text-accent flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h4 className="text-sm font-bold text-white">{pillar.title}</h4>
                        <span className="text-[10px] font-bold text-accent bg-accent/10 px-2 py-0.5 rounded-md border border-accent/20">
                          {pillar.tag}
                        </span>
                      </div>
                      <p className="text-xs text-white/60 leading-relaxed">{pillar.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: High-End Android Device Presentation */}
          <div className="lg:col-span-6 relative flex justify-center">
            {/* Ambient orange glow behind screenshot */}
            <div className="absolute inset-0 bg-accent/15 blur-3xl rounded-full pointer-events-none" />

            <div className="relative w-full max-w-[340px] sm:max-w-[370px]">
              {/* Premium Android Phone Frame */}
              <div className="relative rounded-[2.8rem] bg-[#050506] p-3 border border-white/15 shadow-2xl ring-1 ring-white/15">
                {/* Camera punch hole */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 w-3.5 h-3.5 rounded-full bg-black border border-white/20" />

                <div className="relative aspect-[320/713] overflow-hidden rounded-[2.2rem] bg-app-2 border border-white/[0.08]">
                  <Image
                    src="/screenshots/web/plan-ai.webp"
                    alt="Locra AI AI Itinerary Planning Interface on Android"
                    fill
                    sizes="(max-width: 640px) 90vw, 370px"
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {/* Floating Bottom Card */}
              <div className="absolute -bottom-6 -left-4 sm:-left-8 glass-strong rounded-2xl p-4 border border-white/15 shadow-2xl max-w-xs z-30">
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle2 className="w-4 h-4 text-ok" />
                  <span className="text-xs font-bold text-white">Smart Day Schedule</span>
                </div>
                <p className="text-[11px] text-white/60 leading-snug">
                  4 places grouped in Old Goa • Estimated travel time: 38 min
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
