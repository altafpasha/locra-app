import React from "react";
import Link from "next/link";
import { Compass, ArrowRight, Home } from "lucide-react";
import { Container } from "@/components/common/Container";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 bg-app">
      <Container size="sm" className="text-center">
        <div className="w-16 h-16 rounded-3xl bg-accent/10 text-accent flex items-center justify-center mx-auto mb-6 border border-accent/30">
          <Compass className="w-8 h-8 animate-spin" style={{ animationDuration: "12s" }} />
        </div>

        <span className="text-xs font-bold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/25 mb-4 inline-block">
          404 Error • Off Track
        </span>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Looks like this route got lost.
        </h1>

        <p className="text-base text-white/65 max-w-md mx-auto mb-8 leading-relaxed">
          The page you are looking for might have been moved, renamed, or doesn’t exist on this itinerary.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-accent-soft to-accent px-6 py-3 text-sm font-semibold text-[#1A0F02] accent-glow hover:brightness-110 transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Back to Locra</span>
          </Link>

          <Link
            href="/features"
            className="inline-flex items-center gap-2 rounded-xl glass-strong px-6 py-3 text-sm font-semibold text-white hover:bg-white/[0.1] transition-colors"
          >
            <span>Explore Features</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Helpful Shortcut Links */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-6 text-xs text-white/45 font-medium">
          <Link href="/how-it-works" className="hover:text-white">
            How It Works
          </Link>
          <Link href="/pricing" className="hover:text-white">
            Pricing
          </Link>
          <Link href="/faq" className="hover:text-white">
            FAQ
          </Link>
          <Link href="/contact" className="hover:text-white">
            Contact Support
          </Link>
        </div>
      </Container>
    </div>
  );
}
