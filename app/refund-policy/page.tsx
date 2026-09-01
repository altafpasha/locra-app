import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Refund Policy | Locra AI",
  description:
    "Learn about Locra AI subscription refund policies across Apple App Store, Google Play Store, and direct purchases.",
  alternates: {
    canonical: "https://locra.app/refund-policy",
  },
};

export default function RefundPolicyPage() {
  return (
    <LegalLayout
      title="Refund Policy"
      lastUpdated="March 1, 2026"
      activePath="/refund-policy"
    >
      <h2>1. Overview</h2>
      <p>
        At Locra AI, we want you to have an exceptional experience planning trips. Because Locra AI Pro subscriptions are distributed primarily through official mobile app stores, refund requests are managed according to the respective platform&apos;s billing rules.
      </p>

      <h2>2. Apple App Store Purchases (iOS)</h2>
      <p>
        If you subscribed to Locra Pro via an Apple iOS device, Apple manages all billing, transaction processing, and refund determinations directly.
      </p>
      <ul>
        <li>
          Locra AI cannot directly issue refunds for transactions billed through Apple In-App Purchases.
        </li>
        <li>
          To request a refund from Apple, visit <a href="https://reportaproblem.apple.com" target="_blank" rel="noreferrer" className="text-accent font-semibold underline">reportaproblem.apple.com</a>, log in with your Apple ID, find your Locra Pro subscription, and select &ldquo;Request a refund.&rdquo;
        </li>
      </ul>

      <h2>3. Google Play Store Purchases (Android)</h2>
      <p>
        If you subscribed to Locra Pro through Google Play on an Android device:
      </p>
      <ul>
        <li>
          You can request a refund directly through the Google Play Store within 48 hours of purchase by visiting Google Play Account Order History.
        </li>
        <li>
          For issues occurring after 48 hours, contact our support team at <a href="mailto:support@locra.app" className="text-accent font-semibold underline">support@locra.app</a> with your Google Play Order Number (GPA.XXXX-XXXX-XXXX-XXXXX) for manual review.
        </li>
      </ul>

      <h2>4. Web Purchases (Dodo Payments / Stripe)</h2>
      <p>
        If you purchased a subscription directly via our website using our web checkout partners (e.g. Dodo Payments), we offer a 14-day money-back guarantee for first-time annual subscribers if you are unsatisfied with the service. Contact <a href="mailto:support@locra.app" className="text-accent font-semibold underline">support@locra.app</a> within 14 days of purchase.
      </p>

      <h2>5. Subscription Cancellations</h2>
      <p>
        Canceling your subscription prevents future automatic renewal charges. You will continue to have full access to Locra Pro features until the end of your prepaid billing period.
      </p>
    </LegalLayout>
  );
}
