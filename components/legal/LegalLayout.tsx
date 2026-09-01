import React from "react";
import Link from "next/link";
import { Shield, Clock, FileText, ArrowLeft } from "lucide-react";
import { Container } from "@/components/common/Container";
import { cn } from "@/lib/utils";

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  badge?: string;
  children: React.ReactNode;
  activePath: string;
}

export function LegalLayout({
  title,
  lastUpdated,
  badge = "Legal & Compliance",
  children,
  activePath,
}: LegalLayoutProps) {
  const legalLinks = [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookies Policy", href: "/cookies" },
    { label: "Refund Policy", href: "/refund-policy" },
    { label: "Subscription Terms", href: "/subscription-terms" },
    { label: "Community Guidelines", href: "/community-guidelines" },
    { label: "Data Deletion", href: "/data-deletion" },
    { label: "Delete Account", href: "/delete-account" },
  ];

  return (
    <div className="py-12 sm:py-16 bg-app">
      <Container size="lg">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/45 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Header */}
        <div className="border-b border-white/10 pb-8 mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] text-white/70 px-3 py-1 text-xs font-semibold mb-4 border border-white/10">
            <Shield className="w-3.5 h-3.5 text-white/45" />
            <span>{badge}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {title}
          </h1>
          <div className="flex items-center gap-2 text-xs text-white/45 mt-4">
            <Clock className="w-3.5 h-3.5" />
            <span>Last updated: {lastUpdated}</span>
            <span>•</span>
            <span>Official Locra AI Policy</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Legal Content */}
          <div className="lg:col-span-8 max-w-none text-white/75 text-sm sm:text-base leading-relaxed space-y-6 [&_h2]:text-xl sm:[&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:border-b [&_h2]:border-white/10 [&_h2]:pb-2 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-white/90 [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_li]:text-white/65 [&_code]:text-accent [&_code]:bg-white/[0.06] [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_strong]:text-white">
            {children}
          </div>

          {/* Sticky Legal Navigation Sidebar */}
          <div className="lg:col-span-4 sticky top-24 rounded-2xl glass-card p-6 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/45">
              <FileText className="w-4 h-4" />
              <span>All Legal Policies</span>
            </div>

            <nav className="flex flex-col gap-1.5 text-xs sm:text-sm">
              {legalLinks.map((link) => {
                const isActive = activePath === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "px-3 py-2 rounded-xl font-medium transition-colors",
                      isActive
                        ? "bg-accent/[0.14] text-accent font-semibold"
                        : "text-white/60 hover:text-white hover:bg-white/[0.06]"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="pt-4 border-t border-white/10 text-xs text-white/45 space-y-2">
              <p>Questions about our policies or data security?</p>
              <Link
                href="/contact"
                className="font-semibold text-accent hover:underline block"
              >
                Contact our support team →
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
