import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Data Deletion Instructions | Locra AI",
  description:
    "Step-by-step instructions on how to permanently delete your Locra AI account, trips, and associated personal data.",
  alternates: {
    canonical: "https://locra.app/data-deletion",
  },
};

export default function DataDeletionPage() {
  return (
    <LegalLayout
      title="Data Deletion Instructions"
      lastUpdated="March 1, 2026"
      activePath="/data-deletion"
    >
      <h2>Account & Data Deletion Overview</h2>
      <p>
        At Locra AI, we respect your right to privacy and full control over your personal data. You can delete your account and all associated trips, saved locations, photos, and expense logs at any time.
      </p>

      <h2>Option 1: In-App Immediate Deletion (Recommended)</h2>
      <p>The fastest way to permanently erase your data is directly inside the mobile app:</p>
      <ul>
        <li>Open the <strong>Locra AI</strong> app on your iOS or Android device.</li>
        <li>Tap your <strong>Profile</strong> tab in the bottom navigation.</li>
        <li>Select <strong>Settings & Privacy</strong>.</li>
        <li>Scroll to the bottom and tap <strong>Delete Account & Data</strong>.</li>
        <li>Confirm your decision.</li>
      </ul>
      <p>
        Your account and all associated records in our Supabase databases will be immediately and permanently removed.
      </p>

      <h2>Option 2: Email Deletion Request</h2>
      <p>
        If you no longer have the app installed or cannot access your device, you can submit a manual deletion request:
      </p>
      <ul>
        <li>
          Send an email to <a href="mailto:privacy@locra.app" className="text-accent font-semibold underline">privacy@locra.app</a> from the email address registered to your Locra account.
        </li>
        <li>Include the subject line: <code>Account Deletion Request</code>.</li>
        <li>Our data compliance team will verify your identity and process the deletion within 48 business hours.</li>
      </ul>

      <h2>What Data is Deleted?</h2>
      <p>Upon account deletion, we permanently purge:</p>
      <ul>
        <li>Your user profile, email, authentication tokens, and display name.</li>
        <li>All created trips, itineraries, custom notes, and saved place collections.</li>
        <li>All collaborative group permissions and expense records.</li>
        <li>All temporary content cache and extracted place history.</li>
      </ul>
    </LegalLayout>
  );
}
