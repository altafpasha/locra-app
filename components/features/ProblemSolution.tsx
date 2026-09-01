"use client";

import React, { useState } from "react";
import {
  Bookmark,
  FileText,
  MapPin,
  MessageSquare,
  Camera,
  ShieldCheck,
  Zap,
  Users,
  Compass,
  Sparkles,
  Navigation,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { cn } from "@/lib/utils";

export function ProblemSolution() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const scatteredSources = [
    { name: "Instagram Saved", icon: Bookmark, tag: "Video Link" },
    { name: "Screenshots Folder", icon: Camera, tag: "Camera Roll" },
    { name: "Google Maps Stars", icon: MapPin, tag: "Scattered Pins" },
    { name: "Notes App Clutter", icon: FileText, tag: "Raw Text" },
    { name: "Group Chat Links", icon: MessageSquare, tag: "Lost Messages" },
    { name: "TikTok Bookmarks", icon: Bookmark, tag: "Video Saves" },
  ];

  const pipelineStages = ["COLLECT", "VERIFY", "ORGANIZE", "OPTIMIZE"];

  return (
    <section
      className="py-24 sm:py-36 bg-[#050507] text-white relative overflow-hidden border-y border-white/10"
      id="experience"
    >
      {/* Background ambient lighting */}
      <div className="ambient-orange-spot left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[1000px] h-[700px] opacity-65 pointer-events-none" />
      <div className="absolute inset-0 studio-grid opacity-35 pointer-events-none" />

      <Container size="xl" className="relative z-10">
        {/* Section Header */}
        <SectionHeader
          badge="Transformation System"
          badgeVariant="accent"
          title={
            <span className="text-white">
              Your travel inspiration is <span className="hero-gradient-text">everywhere.</span>
            </span>
          }
          description="You discover incredible cafes, viewpoints, and hidden gems every week on social media. But when it’s time to travel, your saves are scattered across six different apps with zero geographic organization."
        />

        {/* ============================================================
            MAIN TRANSFORMATION WORKSPACE CANVAS
            ============================================================ */}
        <div className="mt-16 sm:mt-24 rounded-[32px] sm:rounded-[40px] bg-gradient-to-b from-[#13141C] via-[#0E0F16] to-[#08080C] p-6 sm:p-10 lg:p-14 border border-white/[0.12] shadow-2xl relative overflow-hidden">
          {/* Subtle Top Glass Reflection */}
          <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white/[0.05] via-transparent to-transparent pointer-events-none" />

          {/* Desktop/Tablet 3-Phase Transformation Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative z-10">
            {/* ============================================================
                LEFT PHASE: BEFORE LOCRA (FRAGMENTED & LOST IDEAS)
                ============================================================ */}
            <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-red-500/10 border border-red-500/25 px-3.5 py-1 text-xs font-bold text-red-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                  <span>Before Locra</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Fragmented &amp; Lost Ideas
                </h3>

                <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-normal">
                  Saved links sit forgotten. No addresses, no opening hours, and no clue how to visit them in one day.
                </p>
              </div>

              {/* 6 Scattered Source Floating Glass Nodes */}
              <div className="grid grid-cols-2 gap-2.5 pt-2">
                {scatteredSources.map((source, idx) => {
                  const Icon = source.icon;
                  return (
                    <div
                      key={idx}
                      className="group relative rounded-2xl bg-[#181822]/90 hover:bg-[#1E1E2C] p-3 border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex items-center gap-2.5 shadow-lg"
                    >
                      <div className="w-8 h-8 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center shrink-0 text-white/60 group-hover:text-white transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="leading-tight overflow-hidden">
                        <p className="text-xs font-bold text-white/85 truncate">
                          {source.name}
                        </p>
                        <span className="text-[9px] font-medium text-white/40 block">
                          {source.tag}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Visual Chaos Indicator */}
              <div className="p-3 rounded-2xl glass-inset flex items-center justify-between text-[11px] font-mono text-white/45">
                <span>STATUS: DISCONNECTED</span>
                <span className="text-red-400 font-bold">0% Coordinated</span>
              </div>
            </div>

            {/* ============================================================
                CENTER PHASE: LOCRA AI INTELLIGENCE HUB (REFERENCE-INSPIRED CIRCULAR CORE)
                ============================================================ */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center text-center relative py-6">
              {/* Convergence Vector Traces behind center core */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
                <div className="w-72 h-72 rounded-full border border-dashed border-white/15 animate-spin [animation-duration:60s]" />
              </div>

              {/* Glowing Outer Atmospheric Amber Ring */}
              <div className="relative flex items-center justify-center">
                {/* Reference-Style Glowing Sweep Progress Ring */}
                <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full bg-gradient-to-tr from-[#FF7A1A]/30 via-transparent to-[#FFB000]/40 p-[3px] shadow-2xl shadow-accent/25 flex items-center justify-center">
                  {/* Outer Beveled Dark Glass Rim */}
                  <div className="w-full h-full rounded-full bg-[#12121A] border border-white/15 p-3 flex items-center justify-center relative overflow-hidden">
                    {/* Concentric Radar Discs */}
                    <div className="absolute w-44 h-44 rounded-full border border-white/[0.08]" />
                    <div className="absolute w-32 h-32 rounded-full border border-accent/25 bg-accent/[0.04]" />
                    <div className="absolute w-20 h-20 rounded-full border border-white/[0.12]" />

                    {/* Central Radar Sweep Beam */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 via-transparent to-transparent rounded-full animate-spin [animation-duration:8s]" />

                    {/* Central Core Brand Disc */}
                    <div className="relative z-10 w-28 h-28 rounded-full bg-gradient-to-br from-[#222230] to-[#12121A] border border-white/20 shadow-2xl flex flex-col items-center justify-center gap-1">
                      <div className="w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center shadow-lg border border-accent/40">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-black tracking-tight text-white">
                        LOCRA <span className="text-accent">AI</span>
                      </span>
                      <span className="text-[9px] font-mono font-bold text-accent">
                        ACTIVE ENGINE
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Transformation Stage Pills: COLLECT → VERIFY → ORGANIZE → OPTIMIZE */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-1.5 max-w-xs">
                {pipelineStages.map((stage, sIdx) => (
                  <span
                    key={stage}
                    className={cn(
                      "px-2.5 py-1 rounded-full text-[10px] font-bold font-mono tracking-wider transition-all",
                      sIdx === 1 || sIdx === 3
                        ? "bg-accent/20 text-accent border border-accent/40 shadow-sm"
                        : "bg-white/[0.06] text-white/50 border border-white/10"
                    )}
                  >
                    {stage}
                    {sIdx < pipelineStages.length - 1 && " →"}
                  </span>
                ))}
              </div>

              <span className="mt-3 text-[11px] font-semibold text-accent/90 uppercase tracking-widest">
                Locra brings it together
              </span>
            </div>

            {/* ============================================================
                RIGHT PHASE: WITH LOCRA AI (ONE UNIFIED SMART TRIP & BENEFIT CARDS)
                ============================================================ */}
            <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-ok/15 border border-ok/30 px-3.5 py-1 text-xs font-bold text-ok">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>With Locra AI</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  One Unified Smart Trip
                </h3>

                <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-normal">
                  Every save is verified on Google Maps, organized into days, and ready to navigate with friends.
                </p>
              </div>

              {/* Stylized Clean Route Map Widget */}
              <div className="rounded-2xl bg-[#14141E] p-4 border border-white/10 space-y-3 relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                  <div className="flex items-center gap-2">
                    <Navigation className="w-3.5 h-3.5 text-accent" />
                    <span className="text-xs font-bold text-white">Day 1: Coast &amp; Sunsets</span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-ok bg-ok/10 px-2 py-0.5 rounded-md border border-ok/20">
                    3 Stops Verified
                  </span>
                </div>

                {/* Connected Route Timeline Points */}
                <div className="space-y-2 relative pl-4 border-l-2 border-accent/40">
                  <div className="relative">
                    <span className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-accent ring-4 ring-[#14141E]" />
                    <div className="flex items-center justify-between text-xs">
                      <p className="font-bold text-white">Eva Cafe Anjuna</p>
                      <span className="text-[10px] text-white/40">10:00 AM</span>
                    </div>
                    <p className="text-[10px] text-ok">📍 100% Google Places Match</p>
                  </div>

                  <div className="relative pt-1">
                    <span className="absolute -left-[21px] top-2 w-2.5 h-2.5 rounded-full bg-cyan ring-4 ring-[#14141E]" />
                    <div className="flex items-center justify-between text-xs">
                      <p className="font-bold text-white">Barki Waterfalls</p>
                      <span className="text-[10px] text-white/40">01:30 PM</span>
                    </div>
                    <p className="text-[10px] text-accent">⚡ 12 min optimized drive</p>
                  </div>

                  <div className="relative pt-1">
                    <span className="absolute -left-[21px] top-2 w-2.5 h-2.5 rounded-full bg-purple ring-4 ring-[#14141E]" />
                    <div className="flex items-center justify-between text-xs">
                      <p className="font-bold text-white">Chapora Sunset Point</p>
                      <span className="text-[10px] text-white/40">05:45 PM</span>
                    </div>
                    <p className="text-[10px] text-white/45">👥 Shared with 3 friends</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ============================================================
              THREE CORE LOCRA AI BENEFITS (CONNECTED GLASS PODS)
              ============================================================ */}
          <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 relative z-10">
            {/* Benefit 1 */}
            <div className="rounded-2xl glass-card p-5 border border-white/10 hover:border-ok/30 transition-all flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-ok/15 border border-ok/30 text-ok flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-sm font-bold text-white">Verified Place Coordinates</h4>
                  <span className="text-[10px] font-extrabold text-ok font-mono bg-ok/10 px-2 py-0.5 rounded-md border border-ok/20">
                    100% Accurate
                  </span>
                </div>
                <p className="text-xs text-white/60 leading-relaxed">
                  Every spot is canonicalized via Google Places with exact GPS lat/lng and open hours.
                </p>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="rounded-2xl glass-card p-5 border border-white/10 hover:border-accent/30 transition-all flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-accent/15 border border-accent/30 text-accent flex items-center justify-center shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-sm font-bold text-white">AI Optimized Daily Route</h4>
                  <span className="text-[10px] font-extrabold text-accent font-mono bg-accent/10 px-2 py-0.5 rounded-md border border-accent/20">
                    Zero Backtracking
                  </span>
                </div>
                <p className="text-xs text-white/60 leading-relaxed">
                  Clusters morning, afternoon, and evening stops geographically to eliminate transit wasted time.
                </p>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="rounded-2xl glass-card p-5 border border-white/10 hover:border-cyan/30 transition-all flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-cyan/15 border border-cyan/30 text-cyan flex items-center justify-center shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-sm font-bold text-white">Collaborative Group Space</h4>
                  <span className="text-[10px] font-extrabold text-cyan font-mono bg-cyan/10 px-2 py-0.5 rounded-md border border-cyan/20">
                    Live Sync
                  </span>
                </div>
                <p className="text-xs text-white/60 leading-relaxed">
                  Real-time sync for friends to add places, vote on dinners, and auto-settle shared expenses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
