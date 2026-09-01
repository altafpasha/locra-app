"use client";

import React from "react";
import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Shield, Lock, Smartphone, WifiOff, CheckCircle2 } from "lucide-react";

export function SecurityTrustSection() {
  const trustPoints = [
    {
      title: "Zero Ad Tracking & Data Selling",
      desc: "Your trip workspaces, saved Reels, and friends' expense logs are yours alone. We never monetize or sell your travel data.",
      icon: Shield,
    },
    {
      title: "Minimal Device Permissions",
      desc: "Locra only asks for location permissions when you actively open maps or navigate. No background telemetry bloat.",
      icon: Lock,
    },
    {
      title: "Offline Trip & Itinerary Sync",
      desc: "Heading into mountain trails or remote beaches? Your saved pins, schedules, and split balances are cached offline locally.",
      icon: WifiOff,
    },
    {
      title: "Lightweight Android Performance",
      desc: "Engineered specifically for Android with optimized memory footprint, instant startup, and battery-friendly geolocation polling.",
      icon: Smartphone,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#070709] border-b border-white/10 relative overflow-hidden" id="security">
      <Container size="xl">
        <SectionHeader
          badge="Security & Privacy"
          badgeVariant="neutral"
          title={
            <span className="text-white">
              Trust, transparency, and <span className="hero-gradient-text">privacy by default.</span>
            </span>
          }
          description="Built from the ground up for modern Android with zero unnecessary permissions."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {trustPoints.map((point, idx) => {
            const Icon = point.icon;
            return (
              <div
                key={idx}
                className="rounded-3xl glass-card hover:bg-white/[0.05] p-6 sm:p-7 border border-white/10 transition-all flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-2xl bg-accent/15 border border-accent/30 text-accent flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <span>{point.title}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-ok" />
                  </h3>
                  <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
