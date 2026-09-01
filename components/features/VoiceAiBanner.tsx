"use client";

import React, { useState } from "react";
import { Mic, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/common/Container";

export function VoiceAiBanner() {
  const [activeVoiceCmd, setActiveVoiceCmd] = useState<number>(0);

  const voiceCommands = [
    {
      command: "“Add a coffee break at Blue Tokai at 4 PM on Day 2.”",
      response:
        "Added Blue Tokai Roasters (Fontainhas) to Day 2 at 4:00 PM. 12 min drive from your 2 PM museum stop.",
      tag: "Itinerary Update",
    },
    {
      command: "“Split ₹1,500 taxi fare equally with Ahmed and Altaf.”",
      response: "Logged ₹1,500 Transport expense. Split ₹500 each between You, Ahmed, and Altaf.",
      tag: "Expense Logging",
    },
    {
      command: "“What's the closest beach sunset spot to our villa?”",
      response:
        "You saved Eva Cafe and Anjuna Beach Cliffs from a Reel last week. It is 1.4 km west of your villa.",
      tag: "Location Query",
    },
  ];

  return (
    <section className="py-20 bg-app-2 text-white relative overflow-hidden border-y border-white/10">
      <Container size="xl">
        <div className="rounded-3xl glass-panel-glow p-8 sm:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left: Waveform visualizer & Mic */}
            <div className="lg:col-span-5 flex flex-col items-start space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 border border-accent/35 px-3.5 py-1.5 text-xs font-bold text-accent">
                <Mic className="w-4 h-4 text-accent" />
                <span>Hands-Free Travel Co-Pilot</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Plan and split expenses{" "}
                <span className="accent-gradient-text">completely hands-free.</span>
              </h3>

              <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                Whether you&apos;re behind the wheel or walking through a bustling market, talk naturally to Locra AI to add places, split bills, and adjust schedules.
              </p>

              {/* Animated Waveform Visualizer */}
              <div className="flex items-center gap-1.5 p-4 rounded-2xl glass-inset w-full max-w-sm">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-soft to-accent text-[#1A0F02] flex items-center justify-center shrink-0">
                  <Mic className="w-5 h-5 fill-current" />
                </div>
                <div className="flex items-center gap-1 flex-1 justify-center h-8">
                  {[0.1, 0.3, 0.5, 0.2, 0.4, 0.6, 0.15, 0.35, 0.55].map((delay, i) => (
                    <div
                      key={i}
                      className="w-1 bg-accent rounded-full wave-animation"
                      style={{ animationDelay: `${delay}s` }}
                    />
                  ))}
                </div>
                <span className="text-[10px] font-mono text-ok font-bold px-2 py-1 rounded-md bg-ok/10 border border-ok/20">
                  Listening...
                </span>
              </div>
            </div>

            {/* Right: Interactive Voice Command Selector */}
            <div className="lg:col-span-7 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-white/45 block mb-2">
                Click a voice command to simulate intent extraction:
              </span>

              {voiceCommands.map((cmd, idx) => {
                const isSelected = activeVoiceCmd === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveVoiceCmd(idx)}
                    className={`w-full text-left p-5 rounded-2xl border transition-all flex flex-col gap-2 ${
                      isSelected
                        ? "glass-strong border-accent/60"
                        : "glass-card border-white/10 hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-accent bg-accent/10 px-2.5 py-0.5 rounded-md border border-accent/20">
                        {cmd.tag}
                      </span>
                      <span className="text-[11px] text-white/45">
                        {isSelected ? "Active" : "Click to try"}
                      </span>
                    </div>

                    <p className="text-sm sm:text-base font-bold text-white">{cmd.command}</p>

                    <div className="p-3 rounded-xl glass-inset text-xs text-white/70 flex items-start gap-2 mt-1">
                      <CheckCircle2 className="w-4 h-4 text-ok shrink-0 mt-0.5" />
                      <span>{cmd.response}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
