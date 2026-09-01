import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Cookies Policy | Locra AI",
  description:
    "Learn how Locra AI uses essential cookies and local browser storage to provide authentication and preferences.",
  alternates: {
    canonical: "https://locra.app/cookies",
  },
};

export default function CookiesPage() {
  return (
    <LegalLayout
      title="Cookies Policy"
      lastUpdated="March 1, 2026"
      activePath="/cookies"
    >
      <h2>1. What Are Cookies?</h2>
      <p>
        Cookies and local storage technologies are small text files placed on your computer or mobile device when you visit our website or interact with our platform. They enable our website to remember your device, preferences, and session state.
      </p>

      <h2>2. How Locra Uses Cookies</h2>
      <p>Locra AI uses cookies and local storage for minimal, functional purposes:</p>
      <ul>
        <li>
          <strong>Essential Authentication:</strong> We use secure session cookies to remember your authenticated login state and keep you logged into your account across visits.
        </li>
        <li>
          <strong>Preferences:</strong> To remember your UI preferences (such as collapsed panels or currency filters).
        </li>
        <li>
          <strong>Anonymized Diagnostics:</strong> To measure core web vitals and page load performance to ensure the platform operates smoothly.
        </li>
      </ul>

      <h2>3. Third-Party Tracking & Advertising</h2>
      <p>
        Locra AI does <strong>not</strong> use third-party advertising cookies or cross-site tracking networks to serve targeted ads. We do not sell or monetize your browsing history.
      </p>

      <h2>4. Managing Cookies</h2>
      <p>
        Most web browsers allow you to control and delete cookies through their browser settings. Please note that disabling essential cookies may prevent you from logging into your Locra account on the web.
      </p>

      <h2>5. Contact</h2>
      <p>
        For questions about our cookie practices, reach out to <a href="mailto:privacy@locra.app" className="text-accent font-semibold underline">privacy@locra.app</a>.
      </p>
    </LegalLayout>
  );
}
