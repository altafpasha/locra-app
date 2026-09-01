import React from "react";
import { Check, Minus } from "lucide-react";

export function ComparisonTable() {
  const comparisonRows = [
    { feature: "Reel & content extractions", free: "10 / month", pro: "Unlimited" },
    { feature: "Google place verification", free: "Included", pro: "Included" },
    { feature: "Trips & saved places", free: "Unlimited", pro: "Unlimited" },
    { feature: "Interactive trip maps", free: "Included", pro: "Included" },
    { feature: "Manual itinerary builder", free: "Included", pro: "Included" },
    { feature: "Trip sharing & invites", free: "Included", pro: "Included" },
    { feature: "Group expense splitter", free: "Included", pro: "Included" },
    { feature: "AI itinerary generation", free: "Limited preview", pro: "Higher limits" },
    { feature: "Contextual AI Trip Assistant", free: "Limited credits", pro: "Higher limits" },
    { feature: "AI recommendations & nearby spots", free: "Limited credits", pro: "Higher limits" },
    { feature: "Advanced multi-day scheduling", free: "—", pro: "Included" },
  ];

  return (
    <div className="mt-16 overflow-hidden rounded-3xl glass-card max-w-4xl mx-auto">
      <div className="p-6 sm:p-8 border-b border-white/10">
        <h3 className="text-xl font-bold text-white">
          Compare Free vs Pro Features
        </h3>
        <p className="text-sm text-white/65 mt-1">
          Detailed breakdown of what is included in each plan.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-white/10 text-xs font-semibold uppercase tracking-wider text-white/45">
              <th className="py-4 px-6">Feature</th>
              <th className="py-4 px-6 text-center w-36">Free</th>
              <th className="py-4 px-6 text-center w-40 bg-accent/[0.06] text-accent">
                Locra Pro
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/[0.06]">
            {comparisonRows.map((row, idx) => (
              <tr key={idx} className="hover:bg-white/[0.03] transition-colors">
                <td className="py-3.5 px-6 font-medium text-white">
                  {row.feature}
                </td>
                <td className="py-3.5 px-6 text-center text-white/65 font-medium">
                  {row.free === "Included" ? (
                    <Check className="w-4 h-4 text-ok mx-auto" />
                  ) : row.free === "—" ? (
                    <Minus className="w-4 h-4 text-white/25 mx-auto" />
                  ) : (
                    row.free
                  )}
                </td>
                <td className="py-3.5 px-6 text-center font-semibold text-accent bg-accent/[0.06]">
                  {row.pro === "Included" ? (
                    <Check className="w-4 h-4 text-accent mx-auto" />
                  ) : (
                    row.pro
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-4 border-t border-white/10 text-xs text-white/45 text-center">
        Subscriptions are managed securely via the Apple App Store and Google Play Store inside the Locra mobile app.
      </div>
    </div>
  );
}
