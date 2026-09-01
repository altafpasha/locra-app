import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "accent" | "neutral" | "emerald" | "indigo" | "outline";
  size?: "sm" | "md";
}

export function Badge({
  children,
  variant = "accent",
  size = "md",
  className,
  ...props
}: BadgeProps) {
  const variantClasses = {
    accent: "bg-accent/[0.14] text-accent border-accent/30",
    neutral: "bg-white/[0.06] text-white/70 border-white/10",
    emerald: "bg-ok/[0.14] text-ok border-ok/30",
    indigo: "bg-purple/[0.14] text-purple border-purple/30",
    outline: "bg-transparent text-white/70 border-white/15",
  };

  const sizeClasses = {
    sm: "px-2.5 py-0.5 text-xs font-medium",
    md: "px-3.5 py-1 text-xs sm:text-sm font-semibold tracking-wide",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border transition-colors",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
