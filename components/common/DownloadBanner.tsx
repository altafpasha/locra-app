"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, ShieldCheck, Zap, Smartphone } from "lucide-react";
import { Container } from "@/components/common/Container";
import { AppStoreBadges } from "@/components/common/AppStoreBadges";

export function DownloadBanner() {
  return (
    <section className="py-20 sm:py-32 bg-[#050507] text-white relative overflow-hidden" id="download-app">
      {/* Soft ambient orange glow */}
      <div className="ambient-orange-spot left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[750px] h-[500px]" />

      <Container size="xl" className="relative z-10">
        <div className="relative rounded-[2.5rem] bg-gradient-to-b from-[#101016] to-[#09090D] p-8 sm:p-14 lg:p-16 border border-white/15 shadow-2xl overflow-hidden">
          {/* Internal ambient corner glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/15 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/15 border border-accent/30 px-4 py-1.5 text-xs font-bold text-accent">
              <Smartphone className="w-3.5 h-3.5" />
              <span>Get Locra AI for Android &amp; iOS</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Ready to turn saved Reels into <br className="hidden sm:block" />
              <span className="hero-gradient-text">your next adventure?</span>
            </h2>

            <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              Download Locra AI today. Save places effortlessly, plan route-smart itineraries,
              and travel smoothly with friends.
            </p>

            <div className="pt-4 flex justify-center">
              <AppStoreBadges size="lg" />
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-white/50">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-ok" /> Android 8.0+ Supported
              </span>
              <span className="text-white/20">•</span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-accent" /> Free Monthly AI Credits
              </span>
              <span className="text-white/20">•</span>
              <span>Direct Google Play Download</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
