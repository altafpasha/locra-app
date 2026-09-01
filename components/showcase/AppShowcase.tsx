"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { cn } from "@/lib/utils";

interface Shot {
  src: string;
  title: string;
  blurb: string;
}

const SHOTS: Shot[] = [
  {
    src: "/screenshots/web/home.webp",
    title: "Home",
    blurb: "Upcoming trips, dates, and your monthly AI credits at a glance.",
  },
  {
    src: "/screenshots/web/trip-places.webp",
    title: "Trip Workspace",
    blurb: "Saved places carry Google-verified badges and confidence scores.",
  },
  {
    src: "/screenshots/web/trip-hub.webp",
    title: "Trip Hub",
    blurb: "Itinerary, Ask Locra, expenses and group chat in one screen.",
  },
  {
    src: "/screenshots/web/plan-ai.webp",
    title: "Plan with AI",
    blurb: "Pick a pace — Locra clusters your places into route-smart days.",
  },
  {
    src: "/screenshots/web/new-trip.webp",
    title: "New Trip",
    blurb: "Name it, drop a destination, and invite the crew in seconds.",
  },
];

/** persistent depth-fan transform for the desktop row (index 0..4) */
const DEPTH = [
  "lg:scale-90 lg:translate-y-10 opacity-80",
  "lg:scale-[0.97] lg:translate-y-4",
  "lg:scale-[1.08] lg:-translate-y-2 z-10",
  "lg:scale-[0.97] lg:translate-y-4",
  "lg:scale-90 lg:translate-y-10 opacity-80",
];

function PhoneCard({ shot, index }: { shot: Shot; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  const featured = index === 2;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (reduce || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.25, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    /* layer 1 — scroll reveal (opacity + translateY only) */
    <div
      ref={ref}
      className={cn(
        "snap-center shrink-0 w-[64vw] max-w-[260px] sm:w-[42vw] lg:w-auto lg:flex-1 lg:max-w-[210px]",
        "flex flex-col items-center gap-4",
        "transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      )}
      style={{ transitionDelay: shown ? `${index * 90}ms` : "0ms" }}
    >
      {/* layer 2 — persistent depth-fan transform */}
      <div className={cn("w-full transition-transform duration-500", DEPTH[index])}>
        {/* layer 3 — gentle infinite float */}
        <div
          className={cn(
            "relative w-full",
            index % 2 === 0 ? "animate-float-slow" : "animate-float-reverse"
          )}
        >
          {/* device frame */}
          <div className="relative rounded-[2rem] bg-[#050506] p-2 border border-white/10 ring-1 ring-white/10 shadow-2xl">
            <div className="absolute top-3.5 left-1/2 -translate-x-1/2 z-10 w-16 h-4 rounded-full bg-black" />
            <div className="relative overflow-hidden rounded-[1.5rem] aspect-[320/713] bg-app-2 border border-white/[0.06]">
              <Image
                src={shot.src}
                alt={`Locra AI app — ${shot.title} screen`}
                fill
                sizes="(max-width: 640px) 64vw, (max-width: 1024px) 42vw, 210px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="text-center px-1">
        <p className="text-sm font-semibold text-white">{shot.title}</p>
        <p className="mt-1 text-xs text-white/50 leading-relaxed">{shot.blurb}</p>
      </div>
    </div>
  );
}

export function AppShowcase() {
  return (
    <section
      className="py-20 sm:py-28 bg-app border-y border-white/10 relative overflow-hidden"
      id="app-showcase"
    >
      <Container size="xl" className="relative z-10">
        <SectionHeader
          badge="Inside the App"
          badgeVariant="accent"
          title="Every screen, engineered for the road."
          description="Real captures from the Locra AI mobile app — a pure-dark, glassmorphic workspace built for planning on the move."
        />

        {/* gallery */}
        <div className="mt-14 sm:mt-16 flex gap-5 sm:gap-6 lg:gap-3 items-end overflow-x-auto snap-x snap-mandatory no-scrollbar px-1 lg:overflow-visible lg:justify-center">
          {SHOTS.map((shot, i) => (
            <PhoneCard key={shot.src} shot={shot} index={i} />
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-white/35 lg:hidden">
          Swipe to explore every screen →
        </p>
      </Container>
    </section>
  );
}
