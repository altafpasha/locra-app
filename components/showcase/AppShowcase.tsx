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
    title: "Home Hub",
    blurb: "Upcoming trips, dates, and monthly AI extraction credits.",
  },
  {
    src: "/screenshots/web/trip-places.webp",
    title: "Verified Pins",
    blurb: "Google-verified badges and location confidence scores.",
  },
  {
    src: "/screenshots/web/trip-hub.webp",
    title: "Group Hub",
    blurb: "Itinerary, group notes, expenses, and friend activity.",
  },
  {
    src: "/screenshots/web/plan-ai.webp",
    title: "Route Engine",
    blurb: "Pace-based distance and neighborhood day clusters.",
  },
  {
    src: "/screenshots/web/new-trip.webp",
    title: "Fast Setup",
    blurb: "Name it, drop destinations, and invite friends in seconds.",
  },
];

const DEPTH = [
  "lg:scale-90 lg:translate-y-8 opacity-75 hover:opacity-100",
  "lg:scale-[0.97] lg:translate-y-3",
  "lg:scale-[1.06] lg:-translate-y-2 z-10",
  "lg:scale-[0.97] lg:translate-y-3",
  "lg:scale-90 lg:translate-y-8 opacity-75 hover:opacity-100",
];

function PhoneCard({ shot, index }: { shot: Shot; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

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
    <div
      ref={ref}
      className={cn(
        "snap-center shrink-0 w-[64vw] max-w-[250px] sm:w-[40vw] lg:w-auto lg:flex-1 lg:max-w-[210px]",
        "flex flex-col items-center gap-4",
        "transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
      style={{ transitionDelay: shown ? `${index * 80}ms` : "0ms" }}
    >
      <div className={cn("w-full transition-transform duration-500", DEPTH[index])}>
        <div
          className={cn(
            "relative w-full",
            index % 2 === 0 ? "animate-float-slow" : "animate-float-reverse"
          )}
        >
          {/* Android device frame */}
          <div className="relative rounded-[2.2rem] bg-[#060608] p-2 border border-white/15 ring-1 ring-white/10 shadow-2xl">
            <div className="absolute top-3.5 left-1/2 -translate-x-1/2 z-10 w-3 h-3 rounded-full bg-black border border-white/20" />
            <div className="relative overflow-hidden rounded-[1.7rem] aspect-[320/713] bg-app-2 border border-white/[0.06]">
              <Image
                src={shot.src}
                alt={`Locra AI Android App — ${shot.title} screen`}
                fill
                sizes="(max-width: 640px) 64vw, (max-width: 1024px) 40vw, 210px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="text-center px-1">
        <p className="text-sm font-bold text-white">{shot.title}</p>
        <p className="mt-1 text-xs text-white/50 leading-relaxed">{shot.blurb}</p>
      </div>
    </div>
  );
}

export function AppShowcase() {
  return (
    <section
      className="py-20 sm:py-32 bg-[#050507] border-y border-white/10 relative overflow-hidden"
      id="screenshots"
    >
      <div className="ambient-orange-spot left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[800px] h-[400px]" />

      <Container size="xl" className="relative z-10">
        <SectionHeader
          badge="Android Gallery"
          badgeVariant="accent"
          title={
            <span className="text-white">
              Inside the <span className="hero-gradient-text">Locra Experience.</span>
            </span>
          }
          description="Direct captures from the Locra AI Android mobile application — dark glassmorphic surfaces engineered for high clarity in bright daylight and low light."
        />

        {/* Gallery Row */}
        <div className="mt-14 sm:mt-20 flex gap-5 sm:gap-6 lg:gap-3.5 items-end overflow-x-auto snap-x snap-mandatory no-scrollbar px-1 lg:overflow-visible lg:justify-center">
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
