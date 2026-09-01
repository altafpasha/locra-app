"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, ShieldCheck, ArrowRight, MapPin, Zap, Users } from "lucide-react";
import { Container } from "@/components/common/Container";
import { AppStoreBadges } from "@/components/common/AppStoreBadges";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-36 pb-20 sm:pb-32 studio-grid">
      {/* Soft Ambient Studio Lighting Glow */}
      <div className="ambient-orange-top" />

      <Container size="xl" className="relative z-10 text-center">
        {/* Top Badge */}
        <div className="flex justify-center">
          <div
            className="rise-in glass-pill inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold text-white/80 border border-white/10 shadow-lg"
            style={{ animationDelay: "0ms" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="text-white/90">Built for Android</span>
            <span className="text-white/20">•</span>
            <span className="text-accent font-medium">Reel → Verified Trip OS</span>
          </div>
        </div>

        {/* Large Centered Headline */}
        <h1
          className="rise-in mt-7 text-[2.75rem] sm:text-6xl lg:text-7xl font-extrabold leading-[1.08] tracking-[-0.03em] text-white max-w-4xl mx-auto text-balance"
          style={{ animationDelay: "70ms" }}
        >
          Turn Instagram Reels into{" "}
          <span className="hero-gradient-text">real trips.</span>
        </h1>

        {/* Short Value Proposition Description */}
        <p
          className="rise-in mt-6 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-white/70"
          style={{ animationDelay: "140ms" }}
        >
          Locra AI extracts verified Google Places from travel videos you save,
          organizes route-smart day itineraries, and splits group expenses — all in one native Android workspace.
        </p>

        {/* Primary CTA Buttons */}
        <div
          id="download-app"
          className="rise-in mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5"
          style={{ animationDelay: "210ms" }}
        >
          <AppStoreBadges size="lg" />
          <a
            href="#experience"
            className="inline-flex items-center gap-2 rounded-xl glass-card hover:bg-white/[0.08] text-white/80 hover:text-white px-5 py-3.5 text-sm font-semibold border border-white/15 transition-all"
          >
            <span>Explore Experience</span>
            <ArrowRight className="w-4 h-4 text-white/50" />
          </a>
        </div>

        {/* Small Trust Line */}
        <div
          className="rise-in mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-medium text-white/45"
          style={{ animationDelay: "280ms" }}
        >
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-ok" /> Google Places Verified
          </span>
          <span className="text-white/20">•</span>
          <span className="flex items-center gap-1.5">
            <Zap className="h-4 w-4 text-accent" /> Zero Backtracking Routes
          </span>
          <span className="text-white/20">•</span>
          <span className="flex items-center gap-1.5">
            <Users className="h-4 w-4 text-cyan" /> Multi-Currency Splitting
          </span>
        </div>

        {/* ============================================================
            HERO APP VISUAL: 3-Phone Flagship Android Showcase
            ============================================================ */}
        <div
          className="rise-in mt-14 sm:mt-20 relative max-w-5xl mx-auto"
          style={{ animationDelay: "340ms" }}
        >
          {/* Ambient Glow Emitters behind devices */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] max-w-full h-[320px] bg-accent/20 blur-3xl rounded-full pointer-events-none" />

          <div className="relative flex items-center justify-center gap-4 sm:gap-6 lg:gap-8 pt-4">
            {/* Left Offset Android Mockup (Trip Workspace) */}
            <div className="hidden md:block w-52 lg:w-64 opacity-60 hover:opacity-90 transition-all duration-500 scale-90 translate-y-8 -rotate-3 hover:rotate-0">
              <div className="relative rounded-[2.2rem] bg-[#070709] p-2 border border-white/10 shadow-2xl ring-1 ring-white/10">
                <div className="relative aspect-[320/713] overflow-hidden rounded-[1.7rem] bg-app-2 border border-white/[0.06]">
                  <Image
                    src="/screenshots/web/trip-places.webp"
                    alt="Locra AI saved places and verification pins"
                    fill
                    sizes="(max-width: 1024px) 210px, 260px"
                    className="object-cover object-top"
                  />
                </div>
              </div>
              <p className="text-[11px] font-semibold text-white/50 mt-3 text-center">
                Verified Saved Places
              </p>
            </div>

            {/* Center Main Flagship Android Mockup (Home Dashboard) */}
            <div className="relative z-20 w-[min(310px,78vw)] sm:w-[320px] lg:w-[340px]">
              <div className="relative rounded-[2.5rem] bg-[#060608] p-2.5 sm:p-3 border border-white/15 shadow-2xl ring-1 ring-white/15">
                {/* Android Camera Punch Hole / Speaker */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 z-30 w-3.5 h-3.5 rounded-full bg-black border border-white/15" />

                <div className="relative aspect-[320/713] overflow-hidden rounded-[2rem] bg-app-2 border border-white/[0.08]">
                  <Image
                    src="/screenshots/web/home.webp"
                    alt="Locra AI Android App — Home Dashboard with upcoming trips and AI credits"
                    fill
                    priority
                    sizes="(max-width: 640px) 78vw, 340px"
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {/* Floating Glass Chip — 1: Verified Place */}
              <div className="animate-float-slow absolute -left-12 sm:-left-20 top-16 hidden sm:block z-30 pointer-events-none">
                <div className="glass-strong flex items-center gap-3 rounded-2xl px-4 py-3 border border-ok/30 shadow-2xl">
                  <div className="w-8 h-8 rounded-xl bg-ok/15 text-ok flex items-center justify-center border border-ok/30">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <div className="leading-tight text-left">
                    <p className="text-xs font-bold text-white">Eva Cafe Anjuna</p>
                    <p className="text-[10px] font-semibold text-ok">100% Google Places Match</p>
                  </div>
                </div>
              </div>

              {/* Floating Glass Chip — 2: Multi-Currency Split */}
              <div className="animate-float-reverse absolute -right-10 sm:-right-20 bottom-20 hidden sm:block z-30 pointer-events-none">
                <div className="glass-strong rounded-2xl px-4 py-3 border border-accent/30 shadow-2xl text-left">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <p className="text-xs font-bold text-white">₹3,000 Dinner</p>
                  </div>
                  <p className="text-[11px] text-white/70">
                    Auto-split: <span className="text-accent font-bold">₹1,000</span> / person
                  </p>
                </div>
              </div>
            </div>

            {/* Right Offset Android Mockup (Trip Hub & Chat) */}
            <div className="hidden md:block w-52 lg:w-64 opacity-60 hover:opacity-90 transition-all duration-500 scale-90 translate-y-8 rotate-3 hover:rotate-0">
              <div className="relative rounded-[2.2rem] bg-[#070709] p-2 border border-white/10 shadow-2xl ring-1 ring-white/10">
                <div className="relative aspect-[320/713] overflow-hidden rounded-[1.7rem] bg-app-2 border border-white/[0.06]">
                  <Image
                    src="/screenshots/web/trip-hub.webp"
                    alt="Locra AI collaborative trip hub and group features"
                    fill
                    sizes="(max-width: 1024px) 210px, 260px"
                    className="object-cover object-top"
                  />
                </div>
              </div>
              <p className="text-[11px] font-semibold text-white/50 mt-3 text-center">
                Group Hub &amp; Live Sync
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
