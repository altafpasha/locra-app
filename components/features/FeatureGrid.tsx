import React from "react";
import {
  Share2,
  Calendar,
  Users,
  DollarSign,
  Mic,
  ShieldCheck,
} from "lucide-react";
import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Badge } from "@/components/common/Badge";

export function FeatureGrid() {
  return (
    <section className="py-24 bg-app text-white relative overflow-hidden border-b border-white/10" id="features">
      <Container size="xl">
        <SectionHeader
          badge="Bento Architecture"
          badgeVariant="accent"
          title={
            <span className="text-white">
              Five Essential Travel Apps, <span className="accent-gradient-text">Consolidated.</span>
            </span>
          }
          description={
            <span className="text-white/70">
              Replace messy Instagram bookmarks, Notion docs, Splitwise tabs, and WhatsApp group chats with a single glassmorphic workspace.
            </span>
          }
        />

        {/* Bento Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* Card 1: Large Span — Multi-Place Extraction */}
          <div className="lg:col-span-8 rounded-3xl glass-panel p-6 sm:p-8 card-hover-lift flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-accent/20 text-accent flex items-center justify-center border border-accent/30">
                  <Share2 className="w-6 h-6" />
                </div>
                <Badge variant="accent" size="sm">
                  1 Reel → 5 Places
                </Badge>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">
                Multi-Place AI Extraction with Confidence Scoring
              </h3>
              <p className="text-sm text-white/70 leading-relaxed mb-6 max-w-xl">
                Paste any video link or travel photo. Our universal parser uses OCR vision and audio transcription to isolate every single mentioned spot, verify coordinates via Google Places API, and prevent duplicates.
              </p>

              {/* Visual simulated UI inside card */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 rounded-2xl glass-inset">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-ok flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" /> 98% Match
                    </span>
                    <h5 className="text-xs font-bold text-white mt-1">Barki Waterfall</h5>
                    <p className="text-[10px] text-white/45">Kolhapur Ghats • Open 7 AM</p>
                  </div>
                  <span className="text-[9px] text-accent font-mono mt-2">lat: 16.7050, lng: 74.2433</span>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-ok flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" /> 95% Match
                    </span>
                    <h5 className="text-xs font-bold text-white mt-1">Eva Cafe Cliffside</h5>
                    <p className="text-[10px] text-white/45">Anjuna Beach • 4.7 ★ (2.8k)</p>
                  </div>
                  <span className="text-[9px] text-cyan font-mono mt-2">lat: 15.5804, lng: 73.7431</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/45">
              <span>Automatic duplicate prevention with Google Place IDs</span>
              <span className="text-accent font-semibold">Instant Trip Pinning</span>
            </div>
          </div>

          {/* Card 2: Group Chat & Realtime Trip Spaces */}
          <div className="lg:col-span-4 rounded-3xl glass-panel p-6 sm:p-8 card-hover-lift flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-cyan/20 text-cyan flex items-center justify-center border border-cyan/30">
                  <Users className="w-6 h-6" />
                </div>
                <Badge variant="indigo" size="sm">
                  Live Sync
                </Badge>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                Collaborative Trip Spaces &amp; Chat
              </h3>
              <p className="text-sm text-white/70 leading-relaxed mb-6">
                Share a single invite code. Everyone can drop saved spots, vote on spots, and see live activity feeds without endless WhatsApp debates.
              </p>

              <div className="space-y-2 p-3 rounded-2xl glass-inset text-xs">
                <div className="p-2 rounded-xl bg-white/[0.03] text-white/70 flex items-center justify-between">
                  <span>Altaf added <strong className="text-white">Barki Falls</strong></span>
                  <span className="text-[10px] text-white/40">2m ago</span>
                </div>
                <div className="p-2 rounded-xl bg-white/[0.03] text-white/70 flex items-center justify-between">
                  <span>Ahmed split <strong className="text-white">₹4,500 Jeep</strong></span>
                  <span className="text-[10px] text-ok">Logged</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-cyan font-semibold">
              Invite friends via locra://trip/link
            </div>
          </div>

          {/* Card 3: Visual Day-by-Day Itinerary */}
          <div className="lg:col-span-4 rounded-3xl glass-panel p-6 sm:p-8 card-hover-lift flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-purple/20 text-purple flex items-center justify-center border border-purple/30">
                  <Calendar className="w-6 h-6" />
                </div>
                <Badge variant="indigo" size="sm">
                  Route Aware
                </Badge>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                Timeline Itinerary Planner
              </h3>
              <p className="text-sm text-white/70 leading-relaxed mb-6">
                Organize stops with driving &amp; walking times calculated automatically. Toggle visit status from &ldquo;To Visit&rdquo; to &ldquo;Visited&rdquo; on the go.
              </p>

              <div className="space-y-2 text-xs border-l-2 border-accent/50 pl-3">
                <div className="relative">
                  <p className="font-bold text-white">09:00 AM • Morning Coffee</p>
                  <p className="text-[10px] text-white/45">10 min drive to next stop</p>
                </div>
                <div className="relative">
                  <p className="font-bold text-white">11:30 AM • Waterfall Trek</p>
                  <p className="text-[10px] text-white/45">Scenic jungle route</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-purple font-semibold">
              Zero backtracking • Smart neighborhood clusters
            </div>
          </div>

          {/* Card 4: Splitwise-Style Expense Engine */}
          <div className="lg:col-span-4 rounded-3xl glass-panel p-6 sm:p-8 card-hover-lift flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-ok/20 text-ok flex items-center justify-center border border-ok/30">
                  <DollarSign className="w-6 h-6" />
                </div>
                <Badge variant="emerald" size="sm">
                  Auto Debt Settlement
                </Badge>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                Smart Expense &amp; Debt Splitter
              </h3>
              <p className="text-sm text-white/70 leading-relaxed mb-6">
                Log costs in any currency with equal, custom, or percentage splits. Locra generates an auto-minimized settlement matrix showing exactly who pays whom.
              </p>

              <div className="p-3.5 rounded-2xl glass-inset text-xs space-y-1.5">
                <div className="flex justify-between font-bold text-white">
                  <span>Total Trip Spend</span>
                  <span className="text-accent">₹14,500</span>
                </div>
                <p className="text-[11px] text-ok">
                  Debt minimized: 1 single transfer settles all 4 members
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-ok font-semibold">
              Supports INR, USD, EUR, JPY &amp; more
            </div>
          </div>

          {/* Card 5: Live Map & Voice Co-Pilot */}
          <div className="lg:col-span-4 rounded-3xl glass-panel p-6 sm:p-8 card-hover-lift flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-accent/20 text-accent flex items-center justify-center border border-accent/30">
                  <Mic className="w-6 h-6" />
                </div>
                <Badge variant="accent" size="sm">
                  Hands-Free Voice AI
                </Badge>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                Voice AI Co-Pilot &amp; Live Map
              </h3>
              <p className="text-sm text-white/70 leading-relaxed mb-6">
                Add places and log expenses while driving using natural voice intent recognition. Track friends on the live map with battery-friendly updates.
              </p>

              <div className="p-3.5 rounded-2xl glass-inset text-xs flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent animate-pulse shrink-0">
                  <Mic className="w-4 h-4" />
                </div>
                <span className="text-white/70 italic">
                  &ldquo;Split ₹1500 taxi with Ahmed and add coffee spot to Day 2&rdquo;
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-accent font-semibold">
              Offline map packs &amp; battery optimization
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
