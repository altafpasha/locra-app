"use client";

import React, { useState } from "react";
import { Mail, Shield, HelpCircle, CheckCircle2, Send } from "lucide-react";
import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { siteConfig } from "@/lib/site-config";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    topic: "support",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl glass-inset border border-white/10 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-accent";

  return (
    <div className="py-16 sm:py-24 bg-app">
      <Container size="lg">
        <SectionHeader
          badge="Get in Touch"
          badgeVariant="accent"
          title="We’d love to hear from you."
          description="Have questions about Locra AI, found a bug in the app, or interested in partnership opportunities? Send us a message."
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl glass-card p-6 sm:p-8 space-y-6">
              <h3 className="text-xl font-bold text-white">
                Official Channels
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-accent/10 text-accent border border-accent/25 shrink-0">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-semibold text-white block">
                      Customer Support
                    </span>
                    <p className="text-white/45 text-xs mt-0.5">
                      For app help, trip syncing, or feature assistance
                    </p>
                    <a
                      href={`mailto:${siteConfig.contact.supportEmail}`}
                      className="text-accent font-semibold hover:underline text-xs mt-1 inline-block"
                    >
                      {siteConfig.contact.supportEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-4 border-t border-white/10">
                  <div className="p-2.5 rounded-xl bg-ok/10 text-ok border border-ok/25 shrink-0">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-semibold text-white block">
                      Privacy & Data Inquiries
                    </span>
                    <p className="text-white/45 text-xs mt-0.5">
                      For data deletion, GDPR, or compliance requests
                    </p>
                    <a
                      href={`mailto:${siteConfig.contact.privacyEmail}`}
                      className="text-accent font-semibold hover:underline text-xs mt-1 inline-block"
                    >
                      {siteConfig.contact.privacyEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-4 border-t border-white/10">
                  <div className="p-2.5 rounded-xl bg-purple/10 text-purple border border-purple/25 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-semibold text-white block">
                      General & Business Inquiries
                    </span>
                    <p className="text-white/45 text-xs mt-0.5">
                      Partnerships, press, and brand inquiries
                    </p>
                    <a
                      href={`mailto:${siteConfig.contact.businessEmail}`}
                      className="text-accent font-semibold hover:underline text-xs mt-1 inline-block"
                    >
                      {siteConfig.contact.businessEmail}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-accent/10 border border-accent/25 text-xs text-white/80 leading-relaxed">
              <span className="font-bold block mb-1 text-white">Mobile App Support</span>
              You can also submit feedback, report place verification errors, or access your account settings directly inside the Locra mobile app.
            </div>
          </div>

          {/* Message Form */}
          <div className="lg:col-span-7 rounded-3xl glass-card p-6 sm:p-10">
            {submitted ? (
              <div className="py-12 flex flex-col items-center text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-ok/15 text-ok flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Message Received!
                </h3>
                <p className="text-white/70 text-sm max-w-sm">
                  Thank you for contacting Locra AI. A member of our team will review your message and reply to <strong className="text-white">{form.email}</strong> shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs font-semibold text-accent hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-white/70 mb-1.5 uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Alex Taylor"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-white/70 mb-1.5 uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="alex@example.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-white/70 mb-1.5 uppercase tracking-wider">
                    Topic
                  </label>
                  <select
                    value={form.topic}
                    onChange={(e) => setForm({ ...form, topic: e.target.value })}
                    className={`${inputClass} [&>option]:bg-app-2 [&>option]:text-white`}
                  >
                    <option value="support">App Support & Help</option>
                    <option value="bug">Report a Bug / Reel Issue</option>
                    <option value="feedback">Feature Suggestion</option>
                    <option value="privacy">Privacy & Data Request</option>
                    <option value="business">Business / Press Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-white/70 mb-1.5 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us how we can help..."
                    className={inputClass}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-accent-soft to-accent text-[#1A0F02] font-semibold py-3.5 text-sm hover:brightness-110 transition-all accent-glow"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
