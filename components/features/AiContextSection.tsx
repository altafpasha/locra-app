import React from "react";
import { Sparkles, Bot, MessageSquare, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";

export function AiContextSection() {
  const samplePrompts = [
    {
      userQuery: "What should we do tomorrow morning?",
      aiResponse:
        "Based on your saved spots, start with coffee at Fuglen Tokyo (10 min from your hotel), then walk through Yoyogi Park before the crowds arrive at 11:00 AM.",
      tag: "Schedule Optimization",
    },
    {
      userQuery: "Can we fit these 4 places into one afternoon?",
      aiResponse:
        "Yes! Two of your vintage shops and the matcha cafe are on Cat Street (within 200m). I’ve re-ordered them so you end near your 7:00 PM dinner reservation.",
      tag: "Route Awareness",
    },
    {
      userQuery: "What’s a good hidden spot close to our hotel for late night drinks?",
      aiResponse:
        "You saved Torikizoku Omoide Yokocho from a Reel last week—it's only 400m from your lobby and open until 11:30 PM.",
      tag: "Contextual Memory",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-app-2 text-white relative overflow-hidden border-y border-white/10" id="ai-assistant">
      <Container size="xl">
        <SectionHeader
          badge="Trip-Aware AI"
          badgeVariant="accent"
          title={
            <span className="text-white">
              AI that actually <span className="text-accent">knows your trip.</span>
            </span>
          }
          description={
            <span className="text-white/70">
              Locra doesn&apos;t give you generic tourist recommendations. It understands the places you saved, your hotel location, realistic transit times, and your trip schedule.
            </span>
          }
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {samplePrompts.map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl glass-strong p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-accent bg-accent/10 px-2.5 py-1 rounded-md border border-accent/20">
                    {item.tag}
                  </span>
                  <Sparkles className="w-4 h-4 text-accent" />
                </div>

                {/* User Prompt Bubble */}
                <div className="glass-inset p-3.5 rounded-2xl text-sm font-semibold text-white mb-4 flex items-start gap-2.5">
                  <MessageSquare className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>&ldquo;{item.userQuery}&rdquo;</span>
                </div>

                {/* AI Response */}
                <div className="glass-inset p-4 rounded-2xl text-xs sm:text-sm text-white/70 leading-relaxed flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-accent/20 text-accent flex items-center justify-center shrink-0 border border-accent/30">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                  <p>{item.aiResponse}</p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-1.5 text-xs text-ok font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Powered by verified map & distance data</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
