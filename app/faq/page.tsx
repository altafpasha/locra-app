import type { Metadata } from "next";
import { FAQAccordion } from "@/components/faq/FAQAccordion";
import { DownloadBanner } from "@/components/common/DownloadBanner";
import { Container } from "@/components/common/Container";
import Link from "next/link";
import { MessageSquare, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Locra AI",
  description:
    "Find answers to all your questions about Locra AI, saving places from Instagram Reels, AI trip planning, maps, and account privacy.",
  alternates: {
    canonical: "https://locra.app/faq",
  },
};

export default function FAQPage() {
  return (
    <div className="flex flex-col">
      {/* Searchable and Filterable FAQ */}
      <FAQAccordion
        showSearch={true}
        showCategoryFilter={true}
        badge="Help & Knowledge Base"
        title="Frequently Asked Questions"
        description="Search or browse questions regarding Locra AI features, Reel extraction, itineraries, pricing, and data security."
      />

      {/* Still Have Questions Box */}
      <section className="py-16 bg-app border-b border-white/10">
        <Container size="md" className="text-center">
          <div className="rounded-3xl glass-card p-8 sm:p-10 flex flex-col items-center">
            <div className="w-12 h-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-4 border border-accent/30">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Still have a question?
            </h3>
            <p className="text-sm text-white/65 max-w-md mb-6 leading-relaxed">
              We&apos;re here to help. Reach out directly to our product support team and we will get back to you promptly.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-accent-soft to-accent px-6 py-3 text-sm font-semibold text-[#1A0F02] accent-glow hover:brightness-110 transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Support</span>
            </Link>
          </div>
        </Container>
      </section>

      {/* Download CTA */}
      <DownloadBanner />
    </div>
  );
}
