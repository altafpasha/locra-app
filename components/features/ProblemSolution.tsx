import React from "react";
import {
  Bookmark,
  FileText,
  MapPin,
  MessageSquare,
  Camera,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";

export function ProblemSolution() {
  const scatteredSources = [
    {
      name: "Instagram Saved",
      icon: (props: { className?: string }) => (
        <svg className={props.className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      color: "text-[#EC4899] bg-[#EC4899]/10 border-[#EC4899]/25",
    },
    { name: "Screenshots Folder", icon: Camera, color: "text-cyan bg-cyan/10 border-cyan/25" },
    { name: "Google Maps Stars", icon: MapPin, color: "text-danger bg-danger/10 border-danger/25" },
    { name: "Notes App Clutter", icon: FileText, color: "text-accent bg-accent/10 border-accent/25" },
    { name: "Group Chat Links", icon: MessageSquare, color: "text-ok bg-ok/10 border-ok/25" },
    { name: "TikTok Bookmarks", icon: Bookmark, color: "text-purple bg-purple/10 border-purple/25" },
  ];

  return (
    <section className="py-20 sm:py-28 bg-app-2 border-y border-white/10">
      <Container size="xl">
        <SectionHeader
          badge="The Travel Problem"
          badgeVariant="neutral"
          title="Your travel inspiration is everywhere."
          description="You discover incredible cafes, viewpoints, and hidden gems every week on social media. But when it’s time to travel, your saves are scattered across six different apps with zero geographic organization."
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Before: Scattered Chaos */}
          <div className="lg:col-span-5 rounded-3xl glass-card p-6 sm:p-8 relative">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-danger bg-danger/10 border border-danger/25 px-3 py-1 rounded-full mb-6">
              <span>Before Locra</span>
            </div>

            <h3 className="text-xl font-bold text-white mb-2">
              Fragmented &amp; Lost Ideas
            </h3>
            <p className="text-sm text-white/65 mb-6">
              Saved links sit forgotten. No addresses, no opening hours, and no clue how to visit them in one day.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {scatteredSources.map((source, idx) => {
                const Icon = source.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-3 rounded-xl glass-inset text-xs font-semibold text-white/70"
                  >
                    <div className={`p-1.5 rounded-lg border ${source.color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span>{source.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Central Transition Indicator */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center border border-accent/30 mb-2">
              <Sparkles className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-accent">
              Locra brings it together
            </span>
          </div>

          {/* After: Unified Locra Trip */}
          <div className="lg:col-span-5 rounded-3xl glass-strong p-6 sm:p-8 text-white relative">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ok bg-ok/10 border border-ok/25 px-3 py-1 rounded-full mb-6">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>With Locra AI</span>
            </div>

            <h3 className="text-xl font-bold text-white mb-2">
              One Unified Smart Trip
            </h3>
            <p className="text-sm text-white/70 mb-6">
              Every save is verified on Google Maps, organized into days, and ready to navigate with friends.
            </p>

            <div className="space-y-2.5 text-xs">
              <div className="p-3 rounded-xl glass-inset flex items-center justify-between">
                <span className="font-semibold text-white/80">
                  📍 Verified Place Coordinates
                </span>
                <span className="text-ok font-bold">100% Accurate</span>
              </div>
              <div className="p-3 rounded-xl glass-inset flex items-center justify-between">
                <span className="font-semibold text-white/80">
                  🗓️ AI Optimized Daily Route
                </span>
                <span className="text-accent font-bold">Zero Backtracking</span>
              </div>
              <div className="p-3 rounded-xl glass-inset flex items-center justify-between">
                <span className="font-semibold text-white/80">
                  👥 Collaborative Group Space
                </span>
                <span className="text-purple font-bold">Live Sync</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
