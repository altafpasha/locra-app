import type { Metadata } from "next";
import Link from "next/link";
import {
  Trash2,
  Mail,
  Smartphone,
  ShieldCheck,
  AlertTriangle,
  Clock,
  CheckCircle2,
  ArrowLeft,
  FileText,
  Lock,
  ExternalLink,
} from "lucide-react";
import { Container } from "@/components/common/Container";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Delete Your Locra AI Account | Locra AI",
  description:
    "Request permanent deletion of your Locra AI account and associated personal data. Review step-by-step instructions, data retention policies, and deletion request methods.",
  alternates: {
    canonical: "https://locra.app/delete-account",
  },
  openGraph: {
    title: "Delete Your Locra AI Account | Locra AI",
    description:
      "Request permanent deletion of your Locra AI account, saved places, trips, and associated personal data.",
    url: "https://locra.app/delete-account",
    type: "website",
  },
};

export default function DeleteAccountPage() {
  const supportEmail = siteConfig.contact.supportEmail || "support@locra.app";
  const mailtoSubject = encodeURIComponent("Account Deletion Request - Locra AI");
  const mailtoBody = encodeURIComponent(
    "Hello Locra AI Team,\n\nI would like to request the permanent deletion of my Locra AI account and all associated personal data.\n\nAccount Details:\n- Registered Email Address: [Enter your Locra AI account email]\n- User Name / Handle: [Optional]\n\nI understand that this action is irreversible and will permanently delete my trips, saved places, and preferences.\n\nThank you,"
  );

  return (
    <div className="min-h-screen bg-[#050507] text-white py-12 sm:py-20 relative overflow-hidden">
      {/* Soft ambient background glow */}
      <div className="ambient-orange-spot -top-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] opacity-40 pointer-events-none" />

      <Container size="lg" className="relative z-10">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-white/50 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Locra AI</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="border-b border-white/10 pb-8 mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 px-3.5 py-1 text-xs font-bold mb-4">
            <Trash2 className="w-3.5 h-3.5" />
            <span>Account &amp; Data Management</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Delete Your Locra AI Account
          </h1>

          <p className="text-base sm:text-lg text-white/70 mt-3 max-w-2xl leading-relaxed">
            You have full control over your personal data. Follow the instructions below to request
            permanent deletion of your Locra AI account and associated records.
          </p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-white/40 mt-5">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-accent" />
              <span>Last updated: March 1, 2026</span>
            </span>
            <span>•</span>
            <span>Application: <strong className="text-white/70">Locra AI</strong> ({siteConfig.links.androidPackage})</span>
            <span>•</span>
            <span>Google Play Policy Compliant</span>
          </div>
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-10">
            {/* Overview Card */}
            <section className="rounded-2xl p-6 sm:p-7 bg-[#0C0C14] border border-white/10 space-y-4 shadow-xl">
              <h2 className="text-xl font-bold text-white flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-accent" />
                <span>Account Deletion Overview</span>
              </h2>
              <p className="text-sm sm:text-base text-white/75 leading-relaxed">
                At Locra AI, we value your privacy and data autonomy. Users can permanently delete
                their account and all associated personal data at any time. Account deletion is permanent
                and cannot be undone.
              </p>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/8 text-xs sm:text-sm text-white/70 flex items-start gap-3">
                <AlertTriangle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>
                  <strong>Important Notice:</strong> Once your account is deleted, your saved places,
                  custom itineraries, travel collections, and group collaboration history will be
                  permanently purged from our primary databases.
                </span>
              </div>
            </section>

            {/* Method 1: In-App Deletion */}
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-accent/20 border border-accent/40 text-accent font-bold text-xs flex items-center justify-center">
                  1
                </span>
                <h2 className="text-xl font-bold text-white">
                  Delete Directly in the Locra AI App (Recommended)
                </h2>
              </div>
              <p className="text-sm text-white/70 leading-relaxed">
                If you currently have the Locra AI mobile application installed on your Android device:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="p-4 rounded-xl bg-[#0C0C14] border border-white/10 flex items-start gap-3">
                  <span className="font-mono text-xs font-bold text-accent px-2 py-1 rounded bg-accent/10 border border-accent/20">
                    Step 1
                  </span>
                  <div className="text-xs sm:text-sm text-white/80">
                    Open the <strong>Locra AI</strong> Android app on your phone.
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#0C0C14] border border-white/10 flex items-start gap-3">
                  <span className="font-mono text-xs font-bold text-accent px-2 py-1 rounded bg-accent/10 border border-accent/20">
                    Step 2
                  </span>
                  <div className="text-xs sm:text-sm text-white/80">
                    Go to <strong>Profile / Settings</strong> in the navigation.
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#0C0C14] border border-white/10 flex items-start gap-3">
                  <span className="font-mono text-xs font-bold text-accent px-2 py-1 rounded bg-accent/10 border border-accent/20">
                    Step 3
                  </span>
                  <div className="text-xs sm:text-sm text-white/80">
                    Select <strong>Delete Account</strong> (or <em>Privacy &amp; Data Deletion</em>).
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#0C0C14] border border-white/10 flex items-start gap-3">
                  <span className="font-mono text-xs font-bold text-accent px-2 py-1 rounded bg-accent/10 border border-accent/20">
                    Step 4
                  </span>
                  <div className="text-xs sm:text-sm text-white/80">
                    Review the prompt and <strong>confirm account deletion</strong>.
                  </div>
                </div>
              </div>
            </section>

            {/* Method 2: Web & Email Request (Google Play Web Deletion Requirement) */}
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-accent/20 border border-accent/40 text-accent font-bold text-xs flex items-center justify-center">
                  2
                </span>
                <h2 className="text-xl font-bold text-white">
                  Alternative Method: Web &amp; Email Deletion Request
                </h2>
              </div>
              <p className="text-sm text-white/70 leading-relaxed">
                If you no longer have access to the mobile app, have uninstalled the app, or prefer
                requesting deletion without reinstalling, you do not need to log in or create another account.
                You can submit a deletion request directly to our support team:
              </p>

              <div className="p-6 rounded-2xl bg-gradient-to-b from-[#11111A] to-[#0A0A10] border border-white/15 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-accent/15 text-accent border border-accent/30">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Official Support Email</h3>
                    <a
                      href={`mailto:${supportEmail}`}
                      className="text-accent font-mono text-sm font-semibold hover:underline"
                    >
                      {supportEmail}
                    </a>
                  </div>
                </div>

                <div className="space-y-2 text-xs sm:text-sm text-white/75">
                  <p>When sending your deletion request, please include:</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-white/65">
                    <li>
                      The <strong>email address</strong> associated with your Locra AI account.
                    </li>
                    <li>
                      Subject line: <code className="text-accent font-mono bg-white/[0.06] px-1.5 py-0.5 rounded">Account Deletion Request - Locra AI</code>
                    </li>
                    <li>
                      An explicit statement confirming you want your account and associated data permanently removed.
                    </li>
                  </ul>
                </div>

                <div className="pt-2">
                  <a
                    href={`mailto:${supportEmail}?subject=${mailtoSubject}&body=${mailtoBody}`}
                    className="orange-pill-btn inline-flex items-center gap-2 rounded-xl px-5 py-3 text-xs font-bold text-[#140A02] shadow-lg shadow-accent/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send Deletion Request Email</span>
                  </a>
                </div>
              </div>
            </section>

            {/* Data Purged vs Retained Breakdown */}
            <section className="space-y-6">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <FileText className="w-5 h-5 text-accent" />
                <span>What Data is Deleted vs. Retained</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Purged Data */}
                <div className="p-5 rounded-2xl bg-[#0A0A10] border border-emerald-500/20 space-y-3">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Data Permanently Purged</span>
                  </div>
                  <ul className="text-xs sm:text-sm text-white/70 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">•</span>
                      <span><strong>Profile &amp; Account:</strong> Email, username, authentication identifiers.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">•</span>
                      <span><strong>Saved Places:</strong> Bookmarked places, extracted Reel locations, and custom tags.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">•</span>
                      <span><strong>Trips &amp; Itineraries:</strong> Planned itineraries, route groupings, and notes.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">•</span>
                      <span><strong>User Preferences:</strong> App settings, currency choices, and travel interests.</span>
                    </li>
                  </ul>
                </div>

                {/* Retained Data */}
                <div className="p-5 rounded-2xl bg-[#0A0A10] border border-amber-500/20 space-y-3">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                    <Lock className="w-4 h-4" />
                    <span>Legitimate Regulatory Retention</span>
                  </div>
                  <p className="text-xs text-white/65 leading-relaxed">
                    Certain limited information may be retained where strictly required for legal compliance,
                    security, fraud prevention, or financial recordkeeping:
                  </p>
                  <ul className="text-xs sm:text-sm text-white/70 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 font-bold">•</span>
                      <span><strong>Financial/Transaction Records:</strong> Retained for statutory tax and accounting periods as mandated by law.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 font-bold">•</span>
                      <span><strong>Security &amp; Abuse Logs:</strong> Retained for a limited window (up to 90 days) for fraud prevention and system security.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Timeline & Processing Notice */}
            <section className="p-5 rounded-2xl bg-[#0C0C14] border border-white/10 space-y-3 text-xs sm:text-sm text-white/70">
              <h3 className="font-bold text-white text-sm sm:text-base flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent" />
                <span>Processing Timeline</span>
              </h3>
              <p>
                In-app deletion requests are executed immediately. Email-based deletion requests are verified
                for security purposes and processed within <strong>48 to 72 business hours</strong>. You will
                receive a confirmation email once the deletion is finalized.
              </p>
            </section>
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-4 sticky top-24 space-y-5">
            {/* Quick Action Box */}
            <div className="p-6 rounded-2xl bg-[#0C0C14] border border-white/12 space-y-4 shadow-xl">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent">
                <Trash2 className="w-4 h-4" />
                <span>Request Deletion</span>
              </div>
              <p className="text-xs text-white/70 leading-relaxed">
                Need your account and data deleted? Email our compliance team directly without logging in:
              </p>
              <a
                href={`mailto:${supportEmail}?subject=${mailtoSubject}&body=${mailtoBody}`}
                className="w-full orange-pill-btn flex items-center justify-center gap-2 rounded-xl py-2.5 text-xs font-bold text-[#140A02] text-center"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email {supportEmail}</span>
              </a>
              <div className="pt-2 text-[11px] text-white/40 text-center">
                Response within 48–72 hours
              </div>
            </div>

            {/* Application Information Box */}
            <div className="p-5 rounded-2xl bg-[#0A0A10] border border-white/8 space-y-3 text-xs">
              <span className="font-bold text-white/80 uppercase tracking-wider text-[10px]">
                App Details
              </span>
              <div className="space-y-1.5 text-white/60">
                <div>App Name: <strong className="text-white">Locra AI</strong></div>
                <div>Package ID: <code className="text-accent font-mono text-[11px]">com.codesec.locraai</code></div>
                <div>Developer: <strong className="text-white">Locra Team</strong></div>
              </div>
              <div className="pt-2 border-t border-white/10">
                <a
                  href={siteConfig.links.googlePlay}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline flex items-center gap-1 font-semibold"
                >
                  <span>View on Google Play</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Related Policies */}
            <div className="p-5 rounded-2xl bg-[#0A0A10] border border-white/8 space-y-3 text-xs">
              <span className="font-bold text-white/80 uppercase tracking-wider text-[10px]">
                Related Policies
              </span>
              <div className="flex flex-col gap-2">
                <Link href="/privacy" className="text-white/65 hover:text-white transition-colors">
                  → Privacy Policy
                </Link>
                <Link href="/terms" className="text-white/65 hover:text-white transition-colors">
                  → Terms of Service
                </Link>
                <Link href="/contact" className="text-white/65 hover:text-white transition-colors">
                  → Contact Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
