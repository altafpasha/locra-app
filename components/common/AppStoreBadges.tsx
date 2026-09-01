"use client";

import React, { useState } from "react";
import { QrCode, Smartphone, X, Check, ExternalLink } from "lucide-react";
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

  const handleCopyLink = () => {
    navigator.clipboard.writeText(siteConfig.links.googlePlay);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const sizeStyles = {
    sm: "h-11 px-3.5 py-1.5",
    md: "h-13 px-4.5 py-2",
    lg: "h-14 px-5 py-2.5",
  };

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

        {/* QR Code Quick Scan Trigger for Desktop */}
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

      {/* Download Modal / QR Code Dialog */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-200">
          <div
            className="glass-panel relative w-full max-w-md rounded-3xl p-6 sm:p-8 border border-white/15"
            role="dialog"
            aria-modal="true"
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 rounded-full p-2 text-white/50 hover:bg-white/[0.1] hover:text-white transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col items-center text-center">
              <div className="rounded-2xl bg-accent/15 border border-accent/30 p-3 text-accent mb-3">
                <Smartphone className="w-7 h-7" />
              </div>

              <h3 className="text-xl font-bold text-white">
                Get Locra AI on your phone
              </h3>
              <p className="text-xs sm:text-sm text-white/70 mt-1.5 mb-5 max-w-xs">
                Install directly on Android (package: <code className="text-accent font-mono">com.codesec.locraai</code>) or iOS.
              </p>

              {/* High Quality Styled QR Code */}
              <div className="p-4 bg-white rounded-2xl shadow-2xl mb-5 flex flex-col items-center justify-center">
                <div className="w-44 h-44 flex flex-col items-center justify-center relative">
                  {/* Clean SVG QR matrix graphic */}
                  <svg className="w-full h-full" viewBox="0 0 200 200" fill="none">
                    {/* Corner 1 */}
                    <rect x="10" y="10" width="50" height="50" rx="6" fill="#0B0B0F" />
                    <rect x="20" y="20" width="30" height="30" rx="3" fill="#FFFFFF" />
                    <rect x="28" y="28" width="14" height="14" rx="2" fill="#FF8A3D" />

                    {/* Corner 2 */}
                    <rect x="140" y="10" width="50" height="50" rx="6" fill="#0B0B0F" />
                    <rect x="150" y="20" width="30" height="30" rx="3" fill="#FFFFFF" />
                    <rect x="158" y="28" width="14" height="14" rx="2" fill="#FF8A3D" />

                    {/* Corner 3 */}
                    <rect x="10" y="140" width="50" height="50" rx="6" fill="#0B0B0F" />
                    <rect x="20" y="150" width="30" height="30" rx="3" fill="#FFFFFF" />
                    <rect x="28" y="158" width="14" height="14" rx="2" fill="#FF8A3D" />

                    {/* Matrix dots */}
                    <rect x="70" y="15" width="12" height="12" rx="2" fill="#0B0B0F" />
                    <rect x="90" y="15" width="12" height="12" rx="2" fill="#0B0B0F" />
                    <rect x="110" y="15" width="12" height="12" rx="2" fill="#0B0B0F" />
                    <rect x="75" y="35" width="12" height="12" rx="2" fill="#FF8A3D" />
                    <rect x="105" y="35" width="12" height="12" rx="2" fill="#0B0B0F" />

                    <rect x="15" y="75" width="12" height="12" rx="2" fill="#0B0B0F" />
                    <rect x="35" y="75" width="12" height="12" rx="2" fill="#0B0B0F" />
                    <rect x="15" y="105" width="12" height="12" rx="2" fill="#0B0B0F" />
                    <rect x="40" y="115" width="12" height="12" rx="2" fill="#FF8A3D" />

                    <rect x="145" y="75" width="12" height="12" rx="2" fill="#0B0B0F" />
                    <rect x="170" y="75" width="12" height="12" rx="2" fill="#0B0B0F" />
                    <rect x="145" y="105" width="12" height="12" rx="2" fill="#0B0B0F" />
                    <rect x="170" y="115" width="12" height="12" rx="2" fill="#0B0B0F" />

                    {/* Center Area */}
                    <rect x="70" y="70" width="60" height="60" rx="8" fill="#0B0B0F" />
                    <rect x="74" y="74" width="52" height="52" rx="6" fill="#161620" />
                    <circle cx="100" cy="100" r="16" fill="#FF8A3D" />
                    <path
                      d="M94 100l4 4 8-8"
                      stroke="#FFFFFF"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    {/* Bottom Area */}
                    <rect x="70" y="145" width="12" height="12" rx="2" fill="#0B0B0F" />
                    <rect x="90" y="145" width="12" height="12" rx="2" fill="#0B0B0F" />
                    <rect x="110" y="145" width="12" height="12" rx="2" fill="#FF8A3D" />
                    <rect x="145" y="145" width="12" height="12" rx="2" fill="#0B0B0F" />
                    <rect x="170" y="145" width="12" height="12" rx="2" fill="#0B0B0F" />
                    <rect x="75" y="170" width="12" height="12" rx="2" fill="#0B0B0F" />
                    <rect x="105" y="170" width="12" height="12" rx="2" fill="#0B0B0F" />
                    <rect x="145" y="170" width="12" height="12" rx="2" fill="#0B0B0F" />
                    <rect x="170" y="170" width="12" height="12" rx="2" fill="#FF8A3D" />
                  </svg>
                </div>
                <span className="text-[11px] font-bold text-slate-800 mt-2">
                  Scan with Camera
                </span>
              </div>

              {/* Direct Store Links */}
              <div className="w-full flex flex-col gap-2.5">
                <a
                  href={siteConfig.links.googlePlay}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-black border border-white/20 text-white font-semibold py-3 text-xs hover:border-white/50 hover:bg-[#141418] transition-all"
                >
                  <ExternalLink className="w-4 h-4 text-accent" />
                  <span>Open Google Play (Android)</span>
                </a>

                <a
                  href={siteConfig.links.appStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-black border border-white/20 text-white font-semibold py-3 text-xs hover:border-white/50 hover:bg-[#141418] transition-all"
                >
                  <ExternalLink className="w-4 h-4 text-white" />
                  <span>Open App Store (iOS)</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl glass-card text-white/80 hover:text-white font-medium py-2.5 text-xs transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-ok" />
                      <span className="text-ok font-semibold">Play Store Link Copied!</span>
                    </>
                  ) : (
                    <>
                      <span>Copy Play Store URL</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

