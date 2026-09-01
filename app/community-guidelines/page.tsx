import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Community Guidelines | Locra AI",
  description:
    "Standards and rules for sharing travel content, group trip collaboration, and respectful community conduct on Locra AI.",
  alternates: {
    canonical: "https://locra.app/community-guidelines",
  },
};

export default function CommunityGuidelinesPage() {
  return (
    <LegalLayout
      title="Community Guidelines"
      lastUpdated="March 1, 2026"
      activePath="/community-guidelines"
    >
      <h2>1. Our Values</h2>
      <p>
        Locra AI is a collaborative space built to inspire wanderlust, authentic discovery, and stress-free group adventures. We expect all travelers and group trip collaborators to treat fellow members and local destinations with care and respect.
      </p>

      <h2>2. Content Standards</h2>
      <p>When sharing places, photos, notes, or Reel links within shared trips:</p>
      <ul>
        <li>
          <strong>Respect Copyright & Attribution:</strong> Do not claim authorship of travel content or photography created by others.
        </li>
        <li>
          <strong>Accuracy:</strong> Avoid intentionally uploading misleading or fake location pins that could disrupt other travelers&apos; itineraries.
        </li>
        <li>
          <strong>No Inappropriate Content:</strong> Explicit, hateful, harassing, or defamatory media is strictly prohibited and subject to immediate account termination.
        </li>
      </ul>

      <h2>3. Responsible Travel</h2>
      <p>
        We encourage sustainable travel. Respect local ecosystems, private property, sacred cultural sites, and wildlife habitats. Do not trespass on restricted land to capture photos or visit closed locations.
      </p>

      <h2>4. Reporting Violations</h2>
      <p>
        If you encounter abusive content, unauthorized trip access, or guideline violations, please notify our safety team immediately at <a href="mailto:support@locra.app" className="text-accent font-semibold underline">support@locra.app</a>.
      </p>
    </LegalLayout>
  );
}
