import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service | Locra AI",
  description:
    "Review the Terms of Service, travel disclaimers, and user agreements for the Locra AI travel application.",
  alternates: {
    canonical: "https://locra.app/terms",
  },
};

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Service"
      lastUpdated="March 1, 2026"
      activePath="/terms"
    >
      <h2>1. Agreement to Terms</h2>
      <p>
        By creating an account, downloading, or using the Locra AI mobile application or website (collectively, the &ldquo;Service&rdquo;), you agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;). If you do not agree to these Terms, do not use the Service.
      </p>

      <h2>2. Eligibility & Accounts</h2>
      <p>
        You must be at least 13 years old (or the minimum legal age in your country) to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
      </p>

      <h2>3. Travel & AI Information Disclaimer (Important)</h2>
      <p>
        Locra AI provides trip planning tools, place extraction, map visualization, and AI-generated suggestions as planning aids.
      </p>
      <ul>
        <li>
          <strong>Independent Verification Required:</strong> AI suggestions, itinerary timelines, and place details may occasionally be inaccurate, out-of-date, or incomplete. You must independently verify opening hours, ticket availability, entry requirements, local safety conditions, and travel advisories before embarking on your journey.
        </li>
        <li>
          <strong>No Guarantee:</strong> Locra AI makes no guarantees regarding the safety, suitability, accessibility, or quality of any third-party venue, restaurant, accommodation, or transportation provider featured in the app.
        </li>
      </ul>

      <h2>4. User Content & Reel Imports</h2>
      <p>
        When you import content (such as Reel links, photos, notes, or reviews) into Locra, you retain ownership of your content. You grant Locra a non-exclusive, worldwide license to process, analyze, and store this content solely for the purpose of delivering the Service to you and your invited trip collaborators.
      </p>

      <h2>5. Subscriptions & Billing</h2>
      <p>
        Locra offers optional auto-renewing subscriptions (&ldquo;Locra Pro&rdquo;).
      </p>
      <ul>
        <li>
          <strong>In-App Purchases:</strong> Subscriptions purchased through the Apple App Store or Google Play Store are governed by the respective store&apos;s billing and renewal terms.
        </li>
        <li>
          <strong>Automatic Renewal:</strong> Unless canceled at least 24 hours prior to the end of the current billing cycle, your subscription will automatically renew at the current rate.
        </li>
        <li>
          <strong>Cancellation:</strong> You can manage or cancel your subscription at any time via your Apple ID or Google Play account settings.
        </li>
      </ul>

      <h2>6. Prohibited Conduct</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the Service for any unlawful, harassing, fraudulent, or harmful purpose.</li>
        <li>Attempt to reverse engineer, scrape, or extract source code from the mobile app or API without authorization.</li>
        <li>Upload malicious code, viruses, or inappropriate content to shared trip workspaces.</li>
      </ul>

      <h2>7. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, Locra AI and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the Service, missed travel connections, venue closures, or reliance on AI-generated travel itineraries.
      </p>

      <h2>8. Governing Law & Contact</h2>
      <p>
        These Terms shall be governed by and construed in accordance with the laws of Delaware, United States, without regard to its conflict of law principles.
      </p>
      <p>
        For inquiries regarding these Terms, contact us at: <a href="mailto:support@locra.app" className="text-accent font-semibold underline">support@locra.app</a>.
      </p>
    </LegalLayout>
  );
}
