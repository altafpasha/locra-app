"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Features", href: "/#features" },
  { label: "Experience", href: "/#experience" },
  { label: "Screenshots", href: "/#screenshots" },
  { label: "Security", href: "/#security" },
  { label: "FAQ", href: "/#faq" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 inset-x-0 z-50 pointer-events-none transition-all duration-300 pt-3 sm:pt-5 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto pointer-events-auto">
        <nav
          className={cn(
            "glass-pill-nav rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between transition-all duration-300",
            scrolled ? "shadow-2xl bg-[#0C0C11]/90" : "bg-[#0C0C11]/75"
          )}
          aria-label="Main Navigation"
        >
          {/* Brand Logo */}
          <Link
            href="/"
            aria-label="Locra AI — Home"
            className="flex items-center gap-2.5 group focus-visible:outline-none rounded-full"
          >
            <div className="relative w-8 h-8 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logo-mark.png"
                alt="Locra AI Logo"
                width={26}
                height={26}
                priority
                className="w-5 h-auto object-contain"
              />
            </div>
            <span className="text-[17px] font-bold tracking-tight text-white flex items-center gap-1">
              Locra <span className="text-accent font-semibold">AI</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3.5 py-1.5 rounded-full text-xs font-medium text-white/70 hover:text-white hover:bg-white/[0.06] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Action CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#download-app"
              className="orange-pill-btn inline-flex items-center gap-2 rounded-full px-4.5 py-2 text-xs font-bold text-[#140A02] transition-all active:scale-[0.98]"
            >
              <Sparkles className="w-3.5 h-3.5 fill-current" />
              <span>Get Locra</span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden rounded-full p-2 text-white/75 hover:bg-white/[0.08] hover:text-white focus:outline-none"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden pointer-events-auto max-w-sm mx-auto mt-2 rounded-3xl glass-panel p-5 animate-in slide-in-from-top-3 duration-200 border border-white/10 shadow-2xl">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-white/40 px-3 mb-1">
              Navigation
            </span>
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium text-white/80 hover:bg-white/[0.06] transition-colors"
              >
                <span>{item.label}</span>
                <ArrowRight className="w-3.5 h-3.5 text-white/40" />
              </Link>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-white/10 flex flex-col gap-2">
            <a
              href="#download-app"
              onClick={() => setMobileMenuOpen(false)}
              className="orange-pill-btn flex items-center justify-center gap-2 rounded-xl py-3 text-xs font-bold text-[#140A02] text-center"
            >
              <Sparkles className="w-3.5 h-3.5 fill-current" />
              <span>Download on Google Play</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
