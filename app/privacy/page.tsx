import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy | Locra AI",
  description:
    "Learn how Locra AI collects, processes, and protects your travel data, saved places, and location information.",
  alternates: {
    canonical: "https://locra.app/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      lastUpdated="March 1, 2026"
      activePath="/privacy"
    >
      <h2>1. Introduction</h2>
      <p>
        Locra AI (&ldquo;Locra&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) operates the mobile travel application Locra AI and the website <code>https://locra.app</code>. We are committed to protecting your personal information and your right to privacy.
      </p>
      <p>
        This Privacy Policy describes what information we collect when you use our mobile application and web platform, how we use and process that data, and your rights regarding your personal information.
      </p>

      <h2>2. Information We Collect</h2>
      <p>
        We collect only the information strictly necessary to provide and improve our travel planning features:
      </p>
      <ul>
        <li>
          <strong>Account Information:</strong> When you register for Locra, we collect your email address, authentication credentials, and display name. Authentication is securely managed through our backend infrastructure powered by Supabase.
        </li>
        <li>
          <strong>Travel & Content Data:</strong> Information you voluntarily share or save within the app, including Instagram Reel links, travel photos, custom trip titles, dates, destinations, saved places, itineraries, and expense records.
        </li>
        <li>
          <strong>Location Information:</strong> With your permission, we access your device location or search coordinates solely to display nearby saved places, calculate walking/driving distances, and assist in route optimization.
        </li>
        <li>
          <strong>App Usage & Telemetry:</strong> Anonymized diagnostic logs, crash reports (via Sentry), and performance metrics to ensure app stability and debug issues.
        </li>
      </ul>

      <h2>3. How We Use Your Information</h2>
      <p>We use the data collected for the following operational purposes:</p>
      <ul>
        <li>To extract place names, visual cues, and location tags from travel content you explicitly share with Locra.</li>
        <li>To query location details (e.g. coordinates, opening hours, ratings) using Google Places API.</li>
        <li>To generate AI-powered day-by-day itineraries and provide conversational travel suggestions.</li>
        <li>To sync collaborative trips and expense splits between members of your shared trip space.</li>
        <li>To process mobile subscriptions via RevenueCat and the Apple App Store / Google Play Store.</li>
        <li>To communicate important app updates, security alerts, and customer support responses.</li>
      </ul>

      <h2>4. AI Processing & Content Analysis</h2>
      <p>
        When you submit travel content (such as Reel URLs, photos, or trip queries), Locra uses artificial intelligence models to extract geographical entities and structure itineraries. 
      </p>
      <p>
        We do not use your private personal trip logs or individual user data to train public foundation models. Travel content submitted for extraction is processed solely to serve your specific trip requests.
      </p>

      <h2>5. Third-Party Service Providers</h2>
      <p>
        We partner with trusted enterprise service providers who adhere to rigorous data privacy standards:
      </p>
      <ul>
        <li><strong>Database & Authentication:</strong> Supabase (PostgreSQL with Row Level Security).</li>
        <li><strong>Mapping & Places Data:</strong> Google Places API & Google Maps Platform.</li>
        <li><strong>Subscription Management:</strong> RevenueCat, Apple In-App Purchases, and Google Play Billing.</li>
        <li><strong>AI Infrastructure:</strong> State-of-the-art AI inference APIs for travel extraction.</li>
        <li><strong>Error Monitoring:</strong> Sentry for crash reporting and app performance.</li>
      </ul>

      <h2>6. Data Retention & Deletion</h2>
      <p>
        We retain your personal data for as long as your account remains active. You can delete individual trips, saved places, or your entire account at any time. When you request account deletion via the app settings or our <a href="/data-deletion" className="text-accent font-semibold underline">Data Deletion page</a>, all associated data is permanently erased from our production databases.
      </p>

      <h2>7. Your Privacy Rights (GDPR & CCPA)</h2>
      <p>
        Depending on your location, you have rights under applicable privacy laws (such as GDPR in Europe or CCPA/CPRA in California), including:
      </p>
      <ul>
        <li>The right to access and export your trip data.</li>
        <li>The right to rectify inaccurate personal information.</li>
        <li>The right to request immediate deletion of your data (&ldquo;Right to be Forgotten&rdquo;).</li>
        <li>The right to withdraw consent for location or push notification permissions at any time via your device settings.</li>
      </ul>

      <h2>8. Contact Us</h2>
      <p>
        If you have any questions, concerns, or requests regarding this Privacy Policy or your data, please contact our Data Protection team at:
      </p>
      <p>
        <strong>Email:</strong> <a href="mailto:privacy@locra.app" className="text-accent font-semibold underline">privacy@locra.app</a>
      </p>
    </LegalLayout>
  );
}
