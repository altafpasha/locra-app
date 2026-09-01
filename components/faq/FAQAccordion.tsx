"use client";

import React, { useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { faqData } from "@/lib/faq-data";
import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { cn } from "@/lib/utils";

interface FAQAccordionProps {
  showSearch?: boolean;
  showCategoryFilter?: boolean;
  limit?: number;
  badge?: string;
  title?: string;
  description?: string;
}

export function FAQAccordion({
  showSearch = false,
  showCategoryFilter = false,
  limit,
  badge = "Got Questions?",
  title = "Frequently Asked Questions",
  description = "Everything you need to know about Locra AI, Reel extraction, place verification, and trip planning.",
}: FAQAccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>([faqData[0]?.id || ""]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = faqData
    .filter((item) => {
      const matchesSearch =
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "all" || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .slice(0, limit || faqData.length);

  const categories = [
    { id: "all", label: "All Questions" },
    { id: "general", label: "General" },
    { id: "features", label: "Features" },
    { id: "pricing", label: "Pricing & Plans" },
    { id: "privacy", label: "Privacy & Data" },
  ];

  return (
    <section className="py-20 sm:py-28 bg-app-2 border-y border-white/10" id="faq">
      <Container size="md">
        <SectionHeader
          badge={badge}
          badgeVariant="neutral"
          title={title}
          description={description}
        />

        {/* Optional Search & Filters */}
        {(showSearch || showCategoryFilter) && (
          <div className="mt-10 flex flex-col gap-4">
            {showSearch && (
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <input
                  type="text"
                  placeholder="Search questions (e.g., Reel, itinerary, group, pricing)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-2xl glass-inset border border-white/10 text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-all text-white placeholder:text-white/40"
                />
              </div>
            )}

            {showCategoryFilter && (
              <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={cn(
                      "px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors border",
                      selectedCategory === cat.id
                        ? "bg-accent/[0.14] text-accent border-accent/30"
                        : "bg-white/[0.06] text-white/60 border-transparent hover:bg-white/[0.1]"
                    )}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Accordion List */}
        <div className="mt-12 space-y-3.5">
          {filteredFaqs.length === 0 ? (
            <div className="p-8 text-center text-white/45 glass-inset rounded-2xl text-sm">
              No matching questions found for &ldquo;{searchQuery}&rdquo;.
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openIds.includes(faq.id);
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl glass-card overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-white text-base sm:text-lg hover:text-accent transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 text-white/40 shrink-0 transition-transform duration-200",
                        isOpen && "rotate-180 text-accent"
                      )}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 pt-1 text-sm sm:text-base text-white/65 leading-relaxed border-t border-white/10 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </Container>
    </section>
  );
}
