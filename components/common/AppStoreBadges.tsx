"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { QrCode, Smartphone, X, Check, ExternalLink, Sparkles } from "lucide-react";
import QRCode from "qrcode";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

interface AppStoreBadgesProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showQrTrigger?: boolean;
}

export function AppStoreBadges({
  className,
  size = "md",
  showQrTrigger = true,
}: AppStoreBadgesProps) {
  const [showModal, setShowModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [qrSvg, setQrSvg] = useState<string>("");
  const [activePlatform, setActivePlatform] = useState<"android" | "ios">("android");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentUrl =
    activePlatform === "android" ? siteConfig.links.googlePlay : siteConfig.links.appStore;

  // Generate 100% genuine camera-scannable QR Code SVG
  useEffect(() => {
    QRCode.toString(
      currentUrl,
      {
        type: "svg",
        margin: 2,
        color: {
          dark: "#050507",
          light: "#FFFFFF",
        },
        errorCorrectionLevel: "H",
        width: 190,
      },
      (err, svg) => {
        if (!err && svg) {
          setQrSvg(svg);
        }
      }
    );
  }, [currentUrl]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showModal]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const sizeStyles = {
    sm: "h-11 px-3.5 py-1.5",
    md: "h-13 px-4.5 py-2",
    lg: "h-14 px-5 py-2.5",
  };

  const modalContent = showModal && mounted ? (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-2xl"
      style={{
        WebkitBackdropFilter: "blur(24px)",
      }}
      onClick={() => setShowModal(false)}
    >
      <div
        className="relative w-full max-w-sm sm:max-w-md rounded-[28px] sm:rounded-[32px] p-6 sm:p-7 border border-white/20 shadow-2xl bg-[#0E0E16] text-white max-h-[92vh] overflow-y-auto no-scrollbar"
        style={{
          boxShadow: "0 30px 90px rgba(0,0,0,0.95), 0 0 50px rgba(255,122,26,0.2)",
        }}
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-4 right-4 rounded-full p-2 text-white/60 hover:bg-white/[0.1] hover:text-white transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col items-center text-center">
          {/* Top Smartphone Badge */}
          <div className="rounded-2xl bg-accent/20 border border-accent/35 p-3 text-accent mb-3 shadow-lg shadow-accent/20">
            <Smartphone className="w-6 h-6" />
          </div>

          <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
            Scan with your phone
          </h3>
          <p className="text-xs text-white/70 mt-1 mb-4 max-w-xs leading-relaxed">
            Point your phone camera to download Locra AI directly.
          </p>

          {/* Platform Selector Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-full bg-white/[0.08] border border-white/12 mb-4 w-full max-w-xs">
            <button
              type="button"
              onClick={() => setActivePlatform("android")}
              className={cn(
                "flex-1 py-1.5 rounded-full text-xs font-bold transition-all text-center",
                activePlatform === "android"
                  ? "bg-accent text-[#140A02] shadow-md"
                  : "text-white/60 hover:text-white"
              )}
            >
              Google Play
            </button>
            <button
              type="button"
              onClick={() => setActivePlatform("ios")}
              className={cn(
                "flex-1 py-1.5 rounded-full text-xs font-bold transition-all text-center",
                activePlatform === "ios"
                  ? "bg-white text-black shadow-md"
                  : "text-white/60 hover:text-white"
              )}
            >
              App Store
            </button>
          </div>

          {/* REAL CAMERA-SCANNABLE QR CODE CONTAINER */}
          <div className="p-3.5 bg-white rounded-2xl shadow-2xl mb-4 flex flex-col items-center justify-center border-2 border-white/60">
            <div className="w-44 h-44 flex items-center justify-center overflow-hidden">
              {qrSvg ? (
                <div
                  className="w-full h-full flex items-center justify-center [&>svg]:w-full [&>svg]:h-full"
                  dangerouslySetInnerHTML={{ __html: qrSvg }}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-xs text-black/50 animate-pulse">
                  Generating QR...
                </div>
              )}
            </div>
            <span className="text-[10px] font-bold text-[#050507] mt-1.5 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-accent" />
              <span>Scan with Camera or Lens</span>
            </span>
          </div>

          {/* Package Identification badge */}
          <div className="mb-4 text-[10px] font-mono text-white/60 bg-white/[0.05] px-3 py-1 rounded-lg border border-white/10">
            Package: <span className="text-accent font-bold">com.codesec.locraai</span>
          </div>

          {/* Direct Store Links & Copy */}
          <div className="w-full flex flex-col gap-2">
            <a
              href={currentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-black border border-white/25 text-white font-bold py-2.5 text-xs hover:border-white/50 hover:bg-[#181822] transition-all shadow-md"
            >
              <ExternalLink className="w-3.5 h-3.5 text-accent" />
              <span>Open {activePlatform === "android" ? "Google Play" : "App Store"} URL</span>
            </a>

            <button
              type="button"
              onClick={handleCopyLink}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/12 text-white/85 hover:text-white font-medium py-2 text-xs transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-ok" />
                  <span className="text-ok font-semibold">Store Link Copied!</span>
                </>
              ) : (
                <span>Copy Store Link</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      <div className={cn("flex flex-wrap items-center gap-3", className)}>
        {/* Official Google Play Store Button */}
        <a
          href={siteConfig.links.googlePlay}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "group inline-flex items-center gap-3 rounded-xl bg-black border border-white/20 text-white transition-all hover:border-white/50 hover:bg-[#111115] hover:-translate-y-0.5 active:scale-[0.98] shadow-lg",
            sizeStyles[size]
          )}
          aria-label="Get it on Google Play (com.codesec.locraai)"
        >
          {/* Authentic 4-Color Google Play Vector */}
          <svg
            className="w-6 h-6 shrink-0"
            viewBox="0 0 512 512"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1z"
              fill="#00E676"
            />
            <path
              d="M47 0C34 7.5 25 21.6 25 38.3v435.3c0 16.8 9 30.9 22 38.4l242.3-242L47 0z"
              fill="#0086F8"
            />
            <path
              d="M471.2 234.3l-85.8-49.8-60.1 60.1 60.1 60.1 85.8-49.8c16.8-9.8 24.8-27.1 0-20.6z"
              fill="#FFC400"
            />
            <path
              d="M104.6 499L325.3 277.7l60.1 60.1L104.6 499z"
              fill="#FF3D00"
            />
          </svg>
          <div className="flex flex-col text-left leading-tight">
            <span className="text-[9px] font-semibold tracking-wider text-white/80 uppercase">
              GET IT ON
            </span>
            <span className="text-[15px] sm:text-[16px] font-bold tracking-tight text-white leading-tight">
              Google Play
            </span>
          </div>
        </a>

        {/* Official Apple App Store Button */}
        <a
          href={siteConfig.links.appStore}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "group inline-flex items-center gap-3 rounded-xl bg-black border border-white/20 text-white transition-all hover:border-white/50 hover:bg-[#111115] hover:-translate-y-0.5 active:scale-[0.98] shadow-lg",
            sizeStyles[size]
          )}
          aria-label="Download on the Apple App Store"
        >
          {/* Authentic Apple Logo SVG */}
          <svg
            className="w-6 h-6 shrink-0 fill-white"
            viewBox="0 0 170 170"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.67-7.81-11.96-14.34-6.3-9.59-11.18-20.84-14.63-33.76-3.46-12.92-5.19-24.91-5.19-35.98 0-14.35 3.58-26.35 10.74-36 7.16-9.65 16.33-14.65 27.5-15 4.58 0 9.77 1.25 15.58 3.75 5.8 2.5 9.77 3.86 11.91 4.09 1.74-.33 5.99-1.8 12.74-4.41 6.75-2.61 12.28-3.75 16.6-3.41 12.94.76 23.36 5.56 31.25 14.4-11.31 6.86-16.85 16.44-16.63 28.74.22 9.69 3.99 17.76 11.31 24.23 7.33 6.47 16.05 10.12 26.17 10.95-2.18 6.74-4.8 13.59-7.88 20.55zM119.22 33.15c0-7.39 2.66-14.28 7.99-20.67 5.33-6.39 11.85-10.45 19.56-12.18.98 7.07-.93 13.93-5.73 20.58-4.8 6.64-11.27 10.97-19.41 12.98-.76-.23-1.57-.47-2.41-.71z" />
          </svg>
          <div className="flex flex-col text-left leading-tight">
            <span className="text-[9px] font-normal tracking-tight text-white/80">
              Download on the
            </span>
            <span className="text-[15px] sm:text-[16px] font-bold tracking-tight text-white leading-tight">
              App Store
            </span>
          </div>
        </a>

        {/* QR Code Quick Scan Trigger */}
        {showQrTrigger && (
          <button
            type="button"
            onClick={() => setShowModal(true)}
            className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-white/80 hover:text-white border border-white/15 px-3.5 py-2.5 text-xs font-semibold tracking-wide transition-all active:scale-[0.98]"
            title="Scan QR Code to get app on mobile"
          >
            <QrCode className="w-4 h-4 text-accent" />
            <span>Scan QR</span>
          </button>
        )}
      </div>

      {/* Render modal directly into document.body to prevent parent stacking context clipping */}
      {mounted && modalContent && createPortal(modalContent, document.body)}
    </>
  );
}
