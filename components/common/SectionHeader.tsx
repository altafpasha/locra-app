import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "./Badge";

interface SectionHeaderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  badge?: string;
  badgeVariant?: "accent" | "neutral" | "emerald" | "indigo" | "outline";
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
}

export function SectionHeader({
  badge,
  badgeVariant = "accent",
  title,
  description,
  align = "center",
  className,
  ...props
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3.5",
        align === "center" ? "items-center text-center max-w-3xl mx-auto" : "items-start text-left max-w-2xl",
        className
      )}
      {...props}
    >
      {badge && <Badge variant={badgeVariant}>{badge}</Badge>}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
        {title}
      </h2>
      {description && (
        <p className="text-base sm:text-lg text-white/65 leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
