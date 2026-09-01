"use client";

import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { cn } from "@/lib/utils";

export function FeatureGrid() {
  return (
    <section
      className="py-24 sm:py-36 bg-[#050507] text-white relative overflow-hidden"
      id="features"
    >
      {/* Ambient background glow & fine grid */}
      <div className="ambient-orange-spot left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[900px] h-[650px] opacity-70 pointer-events-none" />
      <div className="absolute inset-0 studio-grid opacity-40 pointer-events-none" />

      <Container size="xl" className="relative z-10">
        <SectionHeader
          badge="Autonomous Architecture"
          badgeVariant="accent"
          title={
            <span className="text-white">
              An intelligent OS for <span className="hero-gradient-text">every mile.</span>
            </span>
          }
          description="Engineered with dark glass surfaces, abstract visual precision, and native Android synchronization."
        />

        {/* ============================================================
            ASYMMETRIC 3-COLUMN FUTURISTIC CARD GRID
            ============================================================ */}
        <div className="mt-16 sm:mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start max-w-7xl mx-auto">
          {/* ================= COLUMN 1 (LEFT) ================= */}
          <div className="flex flex-col gap-6 sm:gap-8">
            {/* Card 1: Multi-Signal Video Extraction */}
            <div className="group relative rounded-[28px] sm:rounded-[32px] bg-gradient-to-b from-[#15151C] to-[#0D0D12] p-6 sm:p-8 border border-white/[0.09] hover:border-white/20 transition-all duration-500 shadow-2xl hover:-translate-y-1.5 overflow-hidden flex flex-col justify-between min-h-[460px]">
              {/* Inner glass sheen highlight */}
              <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none" />

              {/* Upper Abstract Artwork: 3D Stacked Floating Glass Parser Card */}
              <div className="relative w-full h-44 flex items-center justify-center">
                <div className="relative w-40 h-32 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                  {/* Subtle background glow */}
                  <div className="absolute w-28 h-28 rounded-full bg-white/[0.03] blur-xl" />

                  {/* Back layered card */}
                  <div className="absolute top-2 w-32 h-20 rounded-2xl bg-[#1A1A24] border border-white/[0.06] shadow-xl opacity-40 -rotate-3" />
                  {/* Middle layered card */}
                  <div className="absolute top-4 w-34 h-22 rounded-2xl bg-[#1E1E2B] border border-white/[0.08] shadow-2xl opacity-70 rotate-2" />

                  {/* Front main card */}
                  <div className="relative z-10 w-36 h-24 rounded-2xl bg-gradient-to-br from-[#242432] to-[#14141C] p-3.5 border border-white/[0.15] shadow-2xl flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-white/90 bg-white/[0.08] px-2 py-0.5 rounded-md border border-white/10">
                        98% AI
                      </span>
                      <div className="flex gap-0.5">
                        <span className="w-1 h-3 rounded-full bg-accent animate-pulse" />
                        <span className="w-1 h-2 rounded-full bg-white/40" />
                        <span className="w-1 h-3.5 rounded-full bg-accent/80" />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <div className="w-16 h-1.5 rounded-full bg-white/20" />
                      <div className="w-24 h-1.5 rounded-full bg-white/10" />
                    </div>
                  </div>

                  {/* Fine technical coordinate grid lines */}
                  <svg
                    className="absolute inset-0 w-full h-full text-white/[0.12] pointer-events-none"
                    viewBox="0 0 160 128"
                    fill="none"
                  >
                    <path d="M20 64H40M120 64H140" stroke="currentColor" strokeDasharray="2 2" />
                    <circle cx="20" cy="64" r="2" fill="#FF7A1A" />
                    <circle cx="140" cy="64" r="2" fill="currentColor" />
                  </svg>
                </div>
              </div>

              {/* Lower Content */}
              <div className="relative z-10 space-y-3 pt-4">
                <span className="text-[10px] font-bold tracking-wider uppercase text-white/40">
                  Universal Video Parser
                </span>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Multi-Signal Reel Extraction
                </h3>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-normal">
                  Transcribes spoken audio while extracting on-screen text overlays to isolate every mentioned spot with zero manual typing.
                </p>
                <div className="pt-2">
                  <a
                    href="#live-extractor"
                    className="inline-flex items-center gap-2 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 px-4 py-2 text-xs font-semibold text-white/80 transition-colors"
                  >
                    <span>Try Extractor</span>
                    <ArrowRight className="w-3.5 h-3.5 text-white/40 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2: Google Places Canonical Metadata */}
            <div className="group relative rounded-[28px] sm:rounded-[32px] bg-gradient-to-b from-[#15151C] to-[#0D0D12] p-6 sm:p-8 border border-white/[0.09] hover:border-white/20 transition-all duration-500 shadow-2xl hover:-translate-y-1.5 overflow-hidden flex flex-col justify-between min-h-[440px]">
              <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none" />

              {/* Upper Abstract Artwork: 3D Folder & Data Verification Stream */}
              <div className="relative w-full h-40 flex items-center justify-center">
                <div className="relative w-36 h-28 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                  {/* Back Folder Silhouette */}
                  <div className="absolute top-1 w-32 h-22 rounded-2xl bg-[#1D1D28] border border-white/[0.06] rotate-3 shadow-lg" />
                  {/* Front Folder Surface */}
                  <div className="relative z-10 w-32 h-22 rounded-2xl bg-gradient-to-br from-[#262634] to-[#161620] p-3 border border-white/[0.14] shadow-2xl flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-mono text-white/40">PLACES.DB</span>
                      <span className="w-2 h-2 rounded-full bg-ok" />
                    </div>
                    <div className="space-y-1 font-mono text-[8px] text-white/30">
                      <p>01100101 · GOOGLE_ID</p>
                      <p>LAT: 15.5804 LNG: 73.74</p>
                    </div>
                  </div>
                  {/* Technical laser verify line */}
                  <div className="absolute z-20 inset-x-2 top-1/2 h-[1px] bg-gradient-to-r from-transparent via-ok/60 to-transparent" />
                </div>
              </div>

              {/* Lower Content */}
              <div className="relative z-10 space-y-3 pt-4">
                <span className="text-[10px] font-bold tracking-wider uppercase text-white/40">
                  Google Places Engine
                </span>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Canonical Place Ground Truth
                </h3>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-normal">
                  Every extracted location is matched with genuine Google Places IDs, live street addresses, and verified operating hours.
                </p>
                <div className="pt-2">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.05] border border-white/10 px-4 py-2 text-xs font-semibold text-white/80">
                    <span>100% Verified Coordinates</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ================= COLUMN 2 (CENTER) ================= */}
          <div className="flex flex-col gap-6 sm:gap-8">
            {/* Card 3: Hands-Free Voice Travel Co-Pilot */}
            <div className="group relative rounded-[28px] sm:rounded-[32px] bg-gradient-to-b from-[#15151C] to-[#0D0D12] p-6 sm:p-7 border border-white/[0.09] hover:border-white/20 transition-all duration-500 shadow-2xl hover:-translate-y-1.5 overflow-hidden flex flex-col justify-between min-h-[380px]">
              <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none" />

              {/* Upper Abstract Artwork: 3D Waveform Audio Capsule */}
              <div className="relative w-full h-32 flex items-center justify-center">
                <div className="relative w-44 h-20 rounded-full bg-gradient-to-r from-[#181824] via-[#222230] to-[#181824] p-2 border border-white/[0.12] shadow-2xl flex items-center justify-center gap-1.5 transition-transform duration-500 group-hover:scale-105">
                  <span className="w-1.5 h-3 rounded-full bg-white/30" />
                  <span className="w-1.5 h-5 rounded-full bg-white/50" />
                  <span className="w-1.5 h-9 rounded-full bg-accent animate-pulse" />
                  <span className="w-1.5 h-12 rounded-full bg-accent" />
                  <span className="w-1.5 h-7 rounded-full bg-accent/80" />
                  <span className="w-1.5 h-4 rounded-full bg-white/50" />
                  <span className="w-1.5 h-2 rounded-full bg-white/30" />
                </div>
              </div>

              <div className="relative z-10 space-y-2 pt-2">
                <span className="text-[10px] font-bold tracking-wider uppercase text-white/40">
                  Voice Intent Co-Pilot
                </span>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Hands-Free Voice Querying
                </h3>
                <p className="text-xs text-white/60 leading-relaxed font-normal">
                  Speak natural instructions on the road to add places, query drive times, and log expenses without touching your phone.
                </p>
              </div>
            </div>

            {/* ============================================================
                CARD 4: THE HERO FOCAL POINT CARD (LARGE CENTER CARD)
                Warm amber/orange + subtle magenta glowing border & radar
                ============================================================ */}
            <div className="group relative rounded-[30px] sm:rounded-[36px] bg-gradient-to-b from-[#181622] via-[#12111A] to-[#0B0A10] p-7 sm:p-9 border-2 border-transparent transition-all duration-500 shadow-2xl hover:-translate-y-2 overflow-hidden flex flex-col justify-between min-h-[540px] ring-1 ring-white/15">
              {/* Outer atmospheric glowing aura */}
              <div className="absolute -inset-1 rounded-[36px] bg-gradient-to-tr from-[#FF7A1A]/35 via-[#FF9447]/20 to-[#A855F7]/30 blur-xl opacity-80 group-hover:opacity-100 transition-opacity pointer-events-none" />

              {/* Glowing gradient border overlay */}
              <div className="absolute inset-0 rounded-[30px] sm:rounded-[36px] p-[1.5px] bg-gradient-to-b from-[#FF9447] via-[#FF7A1A]/40 to-[#A855F7]/60 pointer-events-none [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude]" />

              {/* Inner ambient light sheen */}
              <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#FF9447]/15 via-transparent to-transparent pointer-events-none" />

              {/* Upper Abstract Artwork: Concentric Orbital Radar with Connecting Waypoint Nodes */}
              <div className="relative w-full h-52 flex items-center justify-center">
                <div className="relative w-48 h-48 flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
                  {/* Concentric rings */}
                  <div className="absolute w-44 h-44 rounded-full border border-white/[0.08]" />
                  <div className="absolute w-32 h-32 rounded-full border border-white/[0.12]" />
                  <div className="absolute w-20 h-20 rounded-full border border-accent/30 bg-accent/[0.05]" />

                  {/* Vertical axis line */}
                  <div className="absolute inset-y-2 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent" />
                  {/* Horizontal axis line */}
                  <div className="absolute inset-x-2 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                  {/* Top node */}
                  <div className="absolute top-3 flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-[#242130] border border-white/20 text-white/90 flex items-center justify-center text-xs font-bold shadow-lg">
                      📍
                    </div>
                  </div>

                  {/* Center core */}
                  <div className="relative z-10 w-4 h-4 rounded-full bg-accent shadow-lg shadow-accent/50 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  </div>

                  {/* Bottom node */}
                  <div className="absolute bottom-3 flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-[#242130] border border-accent/40 text-accent flex items-center justify-center text-xs font-bold shadow-lg">
                      ✦
                    </div>
                  </div>

                  {/* Orbiting particles */}
                  <span className="absolute top-10 left-6 w-1.5 h-1.5 rounded-full bg-white/40" />
                  <span className="absolute bottom-10 right-6 w-1.5 h-1.5 rounded-full bg-accent/60" />
                </div>
              </div>

              {/* Lower Content */}
              <div className="relative z-10 space-y-3.5 pt-4">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-accent/20 border border-accent/40 px-3 py-1 text-[10px] font-bold text-accent">
                  <Sparkles className="w-3 h-3" />
                  <span>CORE ROUTE INTELLIGENCE</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                  Distance-Aware Day Clustering
                </h3>

                <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal">
                  Eliminate city backtracking. Locra calculates drive times and clusters morning, afternoon, and evening pins into realistic itineraries.
                </p>

                <div className="pt-3">
                  <a
                    href="#download-app"
                    className="orange-pill-btn inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold text-[#140A02] shadow-lg transition-all"
                  >
                    <span>Experience Smart Itinerary</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Card 5: Real-Time Collaborative Spaces */}
            <div className="group relative rounded-[28px] sm:rounded-[32px] bg-gradient-to-b from-[#15151C] to-[#0D0D12] p-6 sm:p-7 border border-white/[0.09] hover:border-white/20 transition-all duration-500 shadow-2xl hover:-translate-y-1.5 overflow-hidden flex flex-col justify-between min-h-[380px]">
              <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none" />

              {/* Upper Abstract Artwork: 3D Biometric Node / User Circle */}
              <div className="relative w-full h-32 flex items-center justify-center">
                <div className="relative w-28 h-28 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                  <div className="absolute w-24 h-24 rounded-full border border-white/[0.08]" />
                  <div className="absolute w-16 h-16 rounded-full border border-cyan/30 bg-cyan/[0.05]" />
                  <div className="w-10 h-10 rounded-full bg-[#1E202E] border border-white/20 text-cyan flex items-center justify-center text-xs font-bold shadow-lg">
                    👥
                  </div>
                  <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-cyan animate-ping" />
                </div>
              </div>

              <div className="relative z-10 space-y-2 pt-2">
                <span className="text-[10px] font-bold tracking-wider uppercase text-white/40">
                  Shared Trip Spaces
                </span>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Real-Time Group Sync
                </h3>
                <p className="text-xs text-white/60 leading-relaxed font-normal">
                  Invite travel companions via one tap. Everyone votes on dinner pins and views live itinerary updates.
                </p>
              </div>
            </div>
          </div>

          {/* ================= COLUMN 3 (RIGHT) ================= */}
          <div className="flex flex-col gap-6 sm:gap-8">
            {/* Card 6: Multi-Currency Expense Splitter */}
            <div className="group relative rounded-[28px] sm:rounded-[32px] bg-gradient-to-b from-[#15151C] to-[#0D0D12] p-6 sm:p-8 border border-white/[0.09] hover:border-white/20 transition-all duration-500 shadow-2xl hover:-translate-y-1.5 overflow-hidden flex flex-col justify-between min-h-[460px]">
              <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none" />

              {/* Upper Abstract Artwork: 3D Interlocking Hexagonal Currency Badges */}
              <div className="relative w-full h-44 flex items-center justify-center">
                <div className="relative w-40 h-32 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                  {/* Top Hexagon (₹) */}
                  <div className="absolute top-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#262634] to-[#161620] border border-white/20 shadow-xl flex items-center justify-center font-bold text-white text-sm">
                    ₹
                  </div>
                  {/* Left Hexagon ($) */}
                  <div className="absolute bottom-2 left-4 w-12 h-12 rounded-xl bg-gradient-to-br from-[#20202C] to-[#121218] border border-white/15 shadow-xl flex items-center justify-center font-bold text-white/80 text-sm">
                    $
                  </div>
                  {/* Right Hexagon (€) */}
                  <div className="absolute bottom-2 right-4 w-12 h-12 rounded-xl bg-gradient-to-br from-[#20202C] to-[#121218] border border-white/15 shadow-xl flex items-center justify-center font-bold text-white/80 text-sm">
                    €
                  </div>
                  {/* Connecting thin vector line */}
                  <svg className="absolute inset-0 w-full h-full text-white/20 pointer-events-none" viewBox="0 0 160 128">
                    <line x1="80" y1="36" x2="48" y2="90" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                    <line x1="80" y1="36" x2="112" y2="90" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                  </svg>
                </div>
              </div>

              {/* Lower Content */}
              <div className="relative z-10 space-y-3 pt-4">
                <span className="text-[10px] font-bold tracking-wider uppercase text-white/40">
                  Debt Minimization Matrix
                </span>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Multi-Currency Bill Splitting
                </h3>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-normal">
                  Log costs in INR, USD, EUR, or JPY. The engine calculates simplified net balances so the group settles with one single payment.
                </p>
                <div className="pt-2">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.05] border border-white/10 px-4 py-2 text-xs font-semibold text-white/80">
                    <span>Zero Spreadsheets Needed</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Card 7: Offline Native Android Cache */}
            <div className="group relative rounded-[28px] sm:rounded-[32px] bg-gradient-to-b from-[#15151C] to-[#0D0D12] p-6 sm:p-8 border border-white/[0.09] hover:border-white/20 transition-all duration-500 shadow-2xl hover:-translate-y-1.5 overflow-hidden flex flex-col justify-between min-h-[440px]">
              <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none" />

              {/* Upper Abstract Artwork: 3D Frosted Star / Shield Rosette */}
              <div className="relative w-full h-40 flex items-center justify-center">
                <div className="relative w-32 h-32 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                  {/* Rosette outer tick rays */}
                  <div className="absolute inset-0 rounded-full border border-dashed border-white/15 animate-spin [animation-duration:40s]" />
                  {/* Frosted rosette shield */}
                  <div className="relative z-10 w-20 h-20 rounded-2xl bg-gradient-to-br from-[#282838] to-[#14141E] border border-white/20 shadow-2xl flex items-center justify-center rotate-45">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.06] border border-white/15 flex items-center justify-center -rotate-45">
                      <span className="text-white text-base">★</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lower Content */}
              <div className="relative z-10 space-y-3 pt-4">
                <span className="text-[10px] font-bold tracking-wider uppercase text-white/40">
                  Offline Sync &amp; Storage
                </span>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Zero Connectivity Dropouts
                </h3>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-normal">
                  All saved places, daily routes, and split sheets are stored locally on your Android device for reliable offline access in remote regions.
                </p>
                <div className="pt-2">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.05] border border-white/10 px-4 py-2 text-xs font-semibold text-white/80">
                    <span>Cached On-Device</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
