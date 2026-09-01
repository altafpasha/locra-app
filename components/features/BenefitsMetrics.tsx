"use client";

import React from "react";
import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ShieldCheck, Zap, Users, Compass } from "lucide-react";

export function BenefitsMetrics() {
  const outcomes = [
    {
      stat: "100%",
      label: "Verified Places",
      desc: "Every extracted spot is matched with Google Places IDs, real street addresses, and verified operating hours.",
      icon: ShieldCheck,
      color: "text-ok",
    },
    {
      stat: "0",
      label: "Backtracking Hours",
      desc: "Day itineraries group morning, afternoon, and evening pins by neighborhood to eliminate wasted city transit.",
      icon: Zap,
      color: "text-accent",
    },
    {
      stat: "1-Tap",
      label: "Group Debt Settlement",
      desc: "Multi-currency expense splitting with automated debt minimization eliminates endless post-trip math.",
      icon: Users,
      color: "text-purple",
    },
    {
      stat: "100%",
      label: "Privacy by Design",
      desc: "Your trips, locations, and group chat notes remain private. No telemetry selling, zero bloatware.",
      icon: Compass,
      color: "text-cyan",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#050507] border-b border-white/10 relative overflow-hidden">
      <Container size="xl">
        <SectionHeader
          badge="Measurable Impact"
          badgeVariant="accent"
          title={
            <span className="text-white">
              Designed to feel <span className="hero-gradient-text">completely effortless.</span>
            </span>
          }
          description="How Locra AI removes the four biggest friction points in group travel planning."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {outcomes.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-3xl glass-panel p-6 sm:p-8 card-hover-lift flex flex-col justify-between relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl sm:text-5xl font-extrabold text-white font-mono tracking-tight">
                      {item.stat}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center">
                      <Icon className={`w-5 h-5 ${item.color}`} />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.label}
                  </h3>

                  <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 text-[11px] font-semibold text-white/40 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span>Real App Outcome</span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
