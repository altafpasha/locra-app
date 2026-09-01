import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Subscription Terms | Locra AI",
  description:
    "Terms and details regarding Locra Pro subscriptions, renewal cycles, billing management, and cancellation.",
  alternates: {
    canonical: "https://locra.app/subscription-terms",
  },
};

export default function SubscriptionTermsPage() {
  return (
    <LegalLayout
      title="Subscription Terms"
      lastUpdated="March 1, 2026"
      activePath="/subscription-terms"
    >
      <h2>1. Locra Pro Subscriptions</h2>
      <p>
        Locra AI offers auto-renewing subscription plans (&ldquo;Locra Pro&rdquo;) that unlock premium travel planning features, including unlimited Reel place extractions, full AI itinerary generation, route-aware day optimization, and conversational trip assistant access.
      </p>

      <h2>2. Billing & Renewal</h2>
      <ul>
        <li>
          <strong>Billing Cycle:</strong> Subscriptions are billed on a recurring monthly or annual basis, as selected at the time of purchase.
        </li>
        <li>
          <strong>Automatic Renewal:</strong> Your subscription automatically renews unless auto-renew is turned off at least 24 hours before the end of the current billing cycle.
        </li>
        <li>
          <strong>Payment Processing:</strong> Payments are processed securely by Apple, Google, or our certified web payment partners through RevenueCat infrastructure. Locra does not directly store your credit card numbers on our servers.
        </li>
      </ul>

      <h2>3. Free Trials</h2>
      <p>
        If a free trial is offered, you will have access to all Pro features during the trial duration. If you do not cancel before the trial expires, your account will be billed for the chosen subscription plan.
      </p>

      <h2>4. Managing & Canceling Subscriptions</h2>
      <p>
        You can cancel your subscription at any time:
      </p>
      <ul>
        <li>
          <strong>iOS:</strong> Open device Settings → Tap your Name/Apple ID → Subscriptions → Select Locra AI → Cancel Subscription.
        </li>
        <li>
          <strong>Android:</strong> Open Google Play Store → Profile Icon → Payments & subscriptions → Subscriptions → Select Locra AI → Cancel Subscription.
        </li>
      </ul>
      <p>
        After cancellation, you retain full access to Pro features until your current prepaid cycle expires, after which your account reverts to the Free tier without losing any of your saved trips or places.
      </p>
    </LegalLayout>
  );
}
