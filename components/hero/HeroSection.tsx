import React from "react";
import Image from "next/image";
import { Sparkles, ShieldCheck, ArrowRight } from "lucide-react";
import { Container } from "@/components/common/Container";
import { AppStoreBadges } from "@/components/common/AppStoreBadges";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-app pt-10 pb-20 sm:pt-16 sm:pb-28">

      <Container size="xl">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-8">
          {/* ---------- Copy ---------- */}
          <div className="flex flex-col items-start lg:col-span-6">
            <div
              className="rise-in glass-pill inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold text-white/80"
              style={{ animationDelay: "0ms" }}
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              Reel → verified trip in one tap
              <ArrowRight className="h-3.5 w-3.5 text-white/40" />
            </div>

            <h1
              className="rise-in mt-6 text-[2.6rem] font-extrabold leading-[1.05] tracking-[-0.02em] text-white text-balance sm:text-6xl"
              style={{ animationDelay: "70ms" }}
            >
              Turn Instagram Reels into{" "}
              <span className="accent-gradient-text">real trips.</span>
            </h1>

            <p
              className="rise-in mt-6 max-w-xl text-lg leading-relaxed text-white/70"
              style={{ animationDelay: "140ms" }}
            >
              Locra AI pulls verified places out of the videos you save, builds route-smart day
              plans, and splits the bills — for the whole group, in seconds.
            </p>

            <div
              id="download-app"
              className="rise-in mt-9 flex w-full flex-col gap-4 sm:flex-row sm:items-center"
              style={{ animationDelay: "210ms" }}
            >
              <AppStoreBadges size="lg" />
            </div>

            <div
              className="rise-in mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-white/50"
              style={{ animationDelay: "280ms" }}
            >
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-ok" /> Google Places verified
              </span>
              <span className="text-white/20">•</span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="h-4 w-4 text-accent" /> Free forever
              </span>
              <span className="text-white/20">•</span>
              <span>iOS &amp; Android</span>
            </div>
          </div>

          {/* ---------- Device ---------- */}
          <div className="lg:col-span-6">
            <div
              className="rise-in relative mx-auto w-[min(320px,80vw)]"
              style={{ animationDelay: "120ms" }}
            >
              {/* device frame */}
              <div className="relative rounded-[2.4rem] border border-white/10 bg-[#050506] p-2.5 shadow-2xl ring-1 ring-white/10">
                <div className="absolute left-1/2 top-4 z-10 h-4 w-20 -translate-x-1/2 rounded-full bg-black" />
                <div className="relative aspect-[320/713] overflow-hidden rounded-[1.9rem] border border-white/[0.06] bg-app-2">
                  <Image
                    src="/screenshots/web/home.webp"
                    alt="Locra AI app home screen — upcoming trips and AI credits"
                    fill
                    priority
                    sizes="(max-width: 1024px) 80vw, 320px"
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {/* Floating chip — verified place */}
              <div className="animate-float-slow absolute -left-8 top-10 hidden sm:block">
                <div className="glass-strong flex items-center gap-2.5 rounded-2xl px-3.5 py-2.5">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-ok/15 text-ok">
                    <ShieldCheck className="h-4 w-4" />
                  </span>
                  <div className="leading-tight">
                    <p className="text-[11px] font-bold text-white">Anjuna Beach</p>
                    <p className="text-[10px] font-semibold text-ok">Verified · 100%</p>
                  </div>
                </div>
              </div>

              {/* Floating chip — expense split */}
              <div className="animate-float-reverse absolute -left-10 bottom-16 hidden sm:block">
                <div className="glass-strong rounded-2xl px-3.5 py-2.5">
                  <p className="text-[11px] font-bold text-white">₹3,000 dinner</p>
                  <p className="text-[10px] text-white/50">→ ₹1,000 each · 3 people</p>
                </div>
              </div>

              {/* Floating chip — live friend */}
              <div className="animate-float-slow absolute -right-6 top-24 hidden sm:block">
                <div className="glass-strong flex items-center gap-2.5 rounded-2xl px-3.5 py-2.5">
                  <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-cyan text-[11px] font-bold text-[#052033]">
                    A
                    <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-[#181820] bg-ok" />
                  </span>
                  <div className="leading-tight">
                    <p className="text-[11px] font-bold text-white">Altaf</p>
                    <p className="text-[10px] font-semibold text-ok">Active now</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
