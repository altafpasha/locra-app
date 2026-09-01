import React from "react";
import {
  Compass,
  Sparkles,
  Users,
  Calendar,
  CheckCircle2,
} from "lucide-react";
import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";

export function StepTimeline() {
  const steps = [
    {
      number: "01",
      title: "Find inspiration",
      description:
        "Save an Instagram Reel, photo, screenshot, or travel idea. Hit share and send it straight to Locra with one tap.",
      icon: Compass,
      badge: "Save Anywhere",
    },
    {
      number: "02",
      title: "Extract places",
      description:
        "Locra's AI identifies mentioned spots, verifies them against Google Places, and captures exact addresses, hours, and ratings.",
      icon: Sparkles,
      badge: "AI & Google Places",
    },
    {
      number: "03",
      title: "Build your trip",
      description:
        "Organize places into days. Let AI group spots by neighborhood to eliminate unnecessary transit and wasted time.",
      icon: Calendar,
      badge: "Route Awareness",
    },
    {
      number: "04",
      title: "Travel together",
      description:
        "Share your trip workspace with friends, navigate pins on an interactive map, and split group expenses seamlessly.",
      icon: Users,
      badge: "Group Collaboration",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-app border-b border-white/10" id="how-it-works">
      <Container size="xl">
        <SectionHeader
          badge="4-Step Flow"
          badgeVariant="neutral"
          title="From inspiration to adventure in minutes."
          description="How Locra transforms scattered travel inspiration into an organized, practical trip."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-3xl glass-card p-6 sm:p-7 card-hover-lift flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold text-white font-mono">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-accent/10 text-accent flex items-center justify-center border border-accent/30 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-accent bg-accent/10 px-2.5 py-0.5 rounded-md border border-accent/25 mb-3">
                    {step.badge}
                  </span>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {step.title}
                  </h3>

                  <p className="text-sm text-white/65 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-1 text-[11px] font-semibold text-white/40">
                  <CheckCircle2 className="w-3.5 h-3.5 text-ok" /> Step {step.number} of 04
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
