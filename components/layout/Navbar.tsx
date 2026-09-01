"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/common/Container";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-200",
        scrolled
          ? "bg-app-2/80 backdrop-blur-xl border-b border-white/10 py-3"
          : "bg-transparent py-4 sm:py-5"
      )}
    >
      <Container size="xl">
        <nav className="flex items-center justify-between" aria-label="Main Navigation">
          {/* Logo */}
          <Link
            href="/"
            aria-label="Locra AI — home"
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg p-1"
          >
            <Image
              src="/logo-mark.png"
              alt=""
              width={34}
              height={30}
              priority
              className="h-[26px] w-auto transition-transform duration-300 group-hover:scale-105"
            />
            <span className="text-[19px] font-bold tracking-tight text-white">
              Locra <span className="text-accent">AI</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {siteConfig.nav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-3.5 py-2 rounded-lg text-sm font-medium transition-colors hover:text-white hover:bg-white/[0.06]",
                    isActive
                      ? "text-white font-semibold bg-white/[0.08]"
                      : "text-white/60"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Right Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="text-sm font-medium text-white/60 hover:text-white px-3 py-2 transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/#download-app"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-accent-soft to-accent px-4 py-2.5 text-sm font-semibold text-[#1A0F02] accent-glow hover:brightness-110 transition-all active:scale-[0.98]"
            >
              <Sparkles className="w-4 h-4" />
              <span>Get Locra</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden rounded-lg p-2 text-white/70 hover:bg-white/[0.06] hover:text-white focus:outline-none focus:ring-2 focus:ring-accent"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </Container>

      {/* Mobile Drawer / Sheet Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] bottom-0 bg-app-2/95 backdrop-blur-xl border-b border-white/10 z-50 p-6 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            <div className="text-xs font-semibold text-white/40 uppercase tracking-wider px-3 mb-1">
              Menu
            </div>
            {siteConfig.nav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors",
                    isActive
                      ? "bg-accent/[0.12] text-accent font-semibold"
                      : "text-white/80 hover:bg-white/[0.05]"
                  )}
                >
                  <span>{item.label}</span>
                  <ArrowRight className="w-4 h-4 text-white/40" />
                </Link>
              );
            })}
          </div>

          <div className="flex flex-col gap-3 pt-6 border-t border-white/10">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center rounded-xl border border-white/15 py-3 text-sm font-semibold text-white/80 hover:bg-white/[0.05]"
            >
              Sign In
            </Link>
            <Link
              href="/#download-app"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-accent-soft to-accent py-3.5 text-sm font-semibold text-[#1A0F02] accent-glow hover:brightness-110"
            >
              <Sparkles className="w-4 h-4" />
              <span>Get Locra for iOS &amp; Android</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
