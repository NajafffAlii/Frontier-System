"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  ShieldCheck,
  Building2,
  User,
  Phone,
  Send,
  Copy,
  ChevronDown,
} from "lucide-react";

const serviceOptions = [
  "Website / Web Development",
  "Custom Software",
  "AI Solution",
  "Business Automation",
  "Data Solution",
  "Technology & Infrastructure",
  "Something Else",
];

export type Currency = "GBP" | "USD";

interface BudgetTier {
  id: string;
  label: (sym: string) => string;
}

const budgetTiers: BudgetTier[] = [
  { id: "under-500", label: (sym) => `Under ${sym}500` },
  { id: "500-1000", label: (sym) => `${sym}500 – ${sym}1,000` },
  { id: "1000-2500", label: (sym) => `${sym}1,000 – ${sym}2,500` },
  { id: "2500-5000", label: (sym) => `${sym}2,500 – ${sym}5,000` },
  { id: "5000-plus", label: (sym) => `${sym}5,000+` },
  { id: "not-sure", label: () => "Not sure yet" },
  { id: "custom", label: () => "Custom Amount" },
];

const timelineOptions = [
  "As soon as possible",
  "1–3 months",
  "3–6 months",
  "6+ months",
  "Flexible",
];

const tags = [
  "Websites",
  "Software",
  "AI",
  "Automation",
  "Data",
  "Cloud",
  "SaaS",
];

export function ContactForm() {
  const [currency, setCurrency] = useState<Currency>("GBP");
  const [selectedTierId, setSelectedTierId] = useState<string>("1000-2500");
  const [customBudget, setCustomBudget] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "Website / Web Development",
    timeline: "1–3 months",
    description: "",
    consent: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const symbol = currency === "GBP" ? "£" : "$";
  const isCustomBudget = selectedTierId === "custom";

  const getBudgetText = () => {
    if (selectedTierId === "custom") {
      return customBudget ? `${symbol}${customBudget} (${currency})` : `Custom Amount (${currency})`;
    }
    const tier = budgetTiers.find((t) => t.id === selectedTierId);
    if (!tier) return "Not sure yet";
    if (tier.id === "not-sure") return "Not sure yet";
    return `${tier.label(symbol)} (${currency})`;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hello@frontiersystems.co");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTierSelect = (tierId: string) => {
    setSelectedTierId(tierId);
    if (tierId !== "custom") {
      setCustomBudget("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.consent) {
      alert("Please fill in the required fields and accept the consent checkbox.");
      return;
    }
    // In production, this can send to a backend route or webhook
    setSubmitted(true);
  };

  const faqs = [
    {
      q: "How quickly will I hear back from Frontier Systems?",
      a: "We review every project enquiry internally and typically respond within 24 business hours with initial thoughts or an invitation to an exploratory call.",
    },
    {
      q: "Can we sign an NDA before discussing proprietary details?",
      a: "Yes. We regularly execute bilateral Non-Disclosure Agreements before reviewing confidential architectures, proprietary data, or internal workflows.",
    },
    {
      q: "Can we begin with a small discovery sprint or MVP?",
      a: "Absolutely. Many of our clients start with a rapid 2–4 week MVP, technical audit, or prototype to prove feasibility before committing to a full deployment.",
    },
  ];

  return (
    <div className="grid gap-12 lg:grid-cols-[400px_1fr] xl:grid-cols-[440px_1fr]">
      {/* ==================== LEFT COLUMN: INFO & CONTEXT ==================== */}
      <aside className="space-y-8">
        <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm sm:p-8">
          <div className="inline-flex items-center gap-2 rounded-md border border-[#FDE68A] bg-[#FFFBEB] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#B45309]">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Direct Collaboration</span>
          </div>

          <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-[#0F172A] sm:text-3xl">
            Start a Conversation
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-[#475569]">
            Tell us what you&apos;re working on. Whether you need a high-performance website,
            custom software, an AI solution, workflow automation, or a better way to manage your
            systems, we&apos;d love to understand your requirements.
          </p>

          {/* Key details */}
          <div className="mt-8 space-y-5 border-t border-[#E2E8F0] pt-6 text-sm">
            {/* Email */}
            <div className="flex items-start gap-3.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-[#D97706]">
                <Mail className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
                  Direct Email
                </p>
                <div className="mt-1 flex items-center gap-2">
                  <a
                    href="mailto:hello@frontiersystems.co"
                    className="font-semibold text-[#0F172A] hover:text-[#B45309] transition-colors"
                  >
                    hello@frontiersystems.co
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    title="Copy email address"
                    className="rounded p-1 text-[#64748B] hover:bg-[#F1F5F9] hover:text-[#0F172A] transition-colors"
                  >
                    {copied ? (
                      <span className="text-[10px] font-bold text-emerald-600">Copied!</span>
                    ) : (
                      <Copy className="h-3.5 w-3.5" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-3.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-[#D97706]">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
                  Office & Registered Location
                </p>
                <p className="mt-1 font-semibold text-[#0F172A]">
                  22 Gladstone Street, Walsall, WS2 8BL
                </p>
                <p className="text-xs text-[#64748B]">
                  United Kingdom • Working with businesses worldwide
                </p>
              </div>
            </div>

            {/* Turnaround */}
            <div className="flex items-start gap-3.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-[#D97706]">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
                  Response Window
                </p>
                <p className="mt-1 font-medium text-[#475569]">
                  We typically review and reply within 24 business hours.
                </p>
              </div>
            </div>
          </div>

          {/* What we work with */}
          <div className="mt-8 border-t border-[#E2E8F0] pt-6">
            <p className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
              What We Work With
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-[#E2E8F0] bg-[#F8FAFC] px-2.5 py-1 text-xs font-medium text-[#334155]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Guarantee Banner */}
        <div className="rounded-xl border border-[#CBD5E1] bg-[#F8FAFC] p-5">
          <div className="flex items-center gap-2 font-bold text-[#0F172A]">
            <ShieldCheck className="h-5 w-5 text-[#B45309]" />
            <span>Senior Engineers from Day One</span>
          </div>
          <p className="mt-2 text-xs leading-relaxed text-[#475569]">
            You won&apos;t be handed off to junior account managers. You will speak directly with
            the engineers and architects who design, build, and deploy your software.
          </p>
        </div>

        {/* Quick FAQs */}
        <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#B45309]">
            Frequently Asked
          </h3>
          <div className="mt-4 space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div key={faq.q} className="border-b border-[#F1F5F9] pb-3 last:border-0 last:pb-0">
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between text-left text-xs font-bold text-[#0F172A] hover:text-[#B45309]"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`h-3.5 w-3.5 shrink-0 transition-transform ${
                        isOpen ? "rotate-180 text-[#B45309]" : "text-[#94A3B8]"
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <p className="mt-2 text-xs leading-5 text-[#64748B]">
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </aside>

      {/* ==================== RIGHT COLUMN: INTERACTIVE FORM ==================== */}
      <section>
        {submitted ? (
          /* Confirmation / Success Screen */
          <div className="rounded-2xl border border-emerald-200 bg-white p-8 shadow-sm text-center sm:p-12">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
              <CheckCircle2 className="h-9 w-9" />
            </div>

            <h3 className="mt-6 text-2xl font-extrabold tracking-tight text-[#0F172A] sm:text-3xl">
              Thank you, {formData.name}!
            </h3>

            <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-[#475569] sm:text-base">
              We&apos;ve safely received your project details. Our technical team is reviewing your
              enquiry and will be in touch with you shortly at{" "}
              <strong className="text-[#0F172A]">{formData.email}</strong>.
            </p>

            <div className="mx-auto mt-8 max-w-md rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-5 text-left text-xs text-[#334155]">
              <p className="font-bold text-[#0F172A] border-b border-[#E2E8F0] pb-2">
                Enquiry Summary
              </p>
              <div className="mt-3 space-y-1.5">
                <p>
                  <strong className="text-[#64748B]">Focus Area:</strong> {formData.service}
                </p>
                <p>
                  <strong className="text-[#64748B]">Estimated Budget:</strong>{" "}
                  {getBudgetText()}
                </p>
                <p>
                  <strong className="text-[#64748B]">Timeline:</strong> {formData.timeline}
                </p>
                {formData.company && (
                  <p>
                    <strong className="text-[#64748B]">Company:</strong> {formData.company}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setSelectedTierId("1000-2500");
                  setCustomBudget("");
                  setFormData({
                    name: "",
                    company: "",
                    email: "",
                    phone: "",
                    service: "Website / Web Development",
                    timeline: "1–3 months",
                    description: "",
                    consent: false,
                  });
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border border-[#CBD5E1] bg-white px-5 py-2.5 text-xs font-bold text-[#0F172A] hover:border-[#D97706] hover:text-[#B45309]"
              >
                Send another enquiry
              </button>

              <Link
                href="/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-[#0F172A] px-6 py-2.5 text-xs font-bold text-white hover:bg-[#D97706]"
              >
                Return to Homepage
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        ) : (
          /* Actual Interactive Form */
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm sm:p-10"
          >
            <div className="border-b border-[#E2E8F0] pb-5">
              <h2 className="text-xl font-extrabold tracking-tight text-[#0F172A] sm:text-2xl">
                Tell Us About Your Project
              </h2>
              <p className="mt-1 text-xs text-[#64748B] sm:text-sm">
                Fill out the details below. We read every brief carefully and respond with honest,
                actionable guidance.
              </p>
            </div>

            <div className="mt-8 space-y-7">
              {/* Row 1: Name & Company */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-[#0F172A]">
                    Your Name <span className="text-[#D97706]">*</span>
                  </label>
                  <div className="relative mt-2">
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-lg border border-[#CBD5E1] bg-white px-3.5 py-2.5 text-sm text-[#0F172A] placeholder-[#94A3B8] transition-colors focus:border-[#D97706] focus:outline-none focus:ring-2 focus:ring-[#D97706]/20"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-xs font-bold uppercase tracking-wider text-[#0F172A]">
                    Company / Organisation
                  </label>
                  <div className="relative mt-2">
                    <input
                      id="company"
                      type="text"
                      placeholder="Acme Ltd"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full rounded-lg border border-[#CBD5E1] bg-white px-3.5 py-2.5 text-sm text-[#0F172A] placeholder-[#94A3B8] transition-colors focus:border-[#D97706] focus:outline-none focus:ring-2 focus:ring-[#D97706]/20"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Email & Phone */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#0F172A]">
                    Email Address <span className="text-[#D97706]">*</span>
                  </label>
                  <div className="relative mt-2">
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-lg border border-[#CBD5E1] bg-white px-3.5 py-2.5 text-sm text-[#0F172A] placeholder-[#94A3B8] transition-colors focus:border-[#D97706] focus:outline-none focus:ring-2 focus:ring-[#D97706]/20"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-[#0F172A]">
                    Phone Number <span className="text-[#94A3B8] font-normal lowercase">(optional)</span>
                  </label>
                  <div className="relative mt-2">
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+44 7123 456789"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-lg border border-[#CBD5E1] bg-white px-3.5 py-2.5 text-sm text-[#0F172A] placeholder-[#94A3B8] transition-colors focus:border-[#D97706] focus:outline-none focus:ring-2 focus:ring-[#D97706]/20"
                    />
                  </div>
                </div>
              </div>

              {/* What do you need? */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0F172A]">
                  What do you need? <span className="text-[#D97706]">*</span>
                </label>
                <p className="mt-1 text-xs text-[#64748B]">
                  Select the primary service category that best matches your project:
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {serviceOptions.map((opt) => {
                    const isSelected = formData.service === opt;
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setFormData({ ...formData, service: opt })}
                        className={`rounded-lg px-3.5 py-2 text-xs font-semibold transition-all ${
                          isSelected
                            ? "bg-[#0F172A] text-white shadow-xs"
                            : "border border-[#CBD5E1] bg-white text-[#475569] hover:border-[#D97706] hover:text-[#B45309]"
                        }`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Estimated Budget & Currency Switcher */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0F172A]">
                      Estimated Budget <span className="text-[#D97706]">*</span>
                    </label>
                    <p className="mt-0.5 text-[11px] text-[#64748B]">
                      Select currency & budget range
                    </p>
                  </div>

                  {/* Currency Switcher Toggle */}
                  <div className="inline-flex items-center self-start sm:self-auto rounded-lg border border-[#CBD5E1] bg-[#F1F5F9] p-1">
                    <button
                      type="button"
                      onClick={() => setCurrency("GBP")}
                      className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1 text-xs font-bold transition-all ${
                        currency === "GBP"
                          ? "bg-white text-[#0F172A] shadow-xs"
                          : "text-[#64748B] hover:text-[#0F172A]"
                      }`}
                    >
                      <span>GBP</span>
                      <span className="text-[#B45309] font-extrabold">(£)</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setCurrency("USD")}
                      className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1 text-xs font-bold transition-all ${
                        currency === "USD"
                          ? "bg-white text-[#0F172A] shadow-xs"
                          : "text-[#64748B] hover:text-[#0F172A]"
                      }`}
                    >
                      <span>USD</span>
                      <span className="text-[#B45309] font-extrabold">($)</span>
                    </button>
                  </div>
                </div>

                <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {budgetTiers.map((tier) => {
                    const isSelected = selectedTierId === tier.id;
                    return (
                      <button
                        key={tier.id}
                        type="button"
                        onClick={() => handleTierSelect(tier.id)}
                        className={`rounded-lg px-3 py-2.5 text-xs font-semibold transition-all text-center ${
                          isSelected
                            ? "border-2 border-[#D97706] bg-[#FFFBEB] text-[#B45309] font-bold"
                            : "border border-[#CBD5E1] bg-white text-[#475569] hover:border-[#94A3B8]"
                        }`}
                      >
                        {tier.label(symbol)}
                      </button>
                    );
                  })}
                </div>

                {/* Custom budget input box if Custom Amount is chosen */}
                {isCustomBudget && (
                  <div className="mt-3 rounded-lg border border-[#FDE68A] bg-[#FFFBEB]/60 p-3.5 transition-all">
                    <label htmlFor="customBudget" className="block text-xs font-bold text-[#92400E]">
                      Enter your specific target amount ({symbol}):
                    </label>
                    <div className="relative mt-2 max-w-xs">
                      <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-sm font-bold text-[#92400E]">
                        {symbol}
                      </span>
                      <input
                        id="customBudget"
                        type="number"
                        min="50"
                        step="50"
                        placeholder="e.g. 1,500"
                        value={customBudget}
                        onChange={(e) => setCustomBudget(e.target.value)}
                        className="w-full rounded-md border border-[#CBD5E1] bg-white pl-8 pr-3 py-2 text-sm font-bold text-[#0F172A] placeholder-[#94A3B8] focus:border-[#D97706] focus:outline-none"
                      />
                    </div>
                    <p className="mt-1.5 text-[11px] text-[#64748B]">
                      We will tailor our architecture, scoping, and phases around this exact budget.
                    </p>
                  </div>
                )}
              </div>

              {/* Timeline */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0F172A]">
                  Expected Timeline
                </label>
                <div className="mt-3 flex flex-wrap gap-2">
                  {timelineOptions.map((time) => {
                    const isSelected = formData.timeline === time;
                    return (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setFormData({ ...formData, timeline: time })}
                        className={`rounded-lg px-3.5 py-2 text-xs font-medium transition-all ${
                          isSelected
                            ? "bg-[#0F172A] text-white font-bold"
                            : "border border-[#CBD5E1] bg-white text-[#475569] hover:border-[#94A3B8]"
                        }`}
                      >
                        {time}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Project Description */}
              <div>
                <label htmlFor="description" className="block text-xs font-bold uppercase tracking-wider text-[#0F172A]">
                  Project Description <span className="text-[#D97706]">*</span>
                </label>
                <p className="mt-1 text-xs text-[#64748B]">
                  Briefly explain what you want to achieve, current challenges, or any specific technologies you have in mind:
                </p>
                <textarea
                  id="description"
                  required
                  rows={5}
                  placeholder="We are looking to build a customer portal with automated document processing and CRM synchronization..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="mt-2.5 w-full rounded-lg border border-[#CBD5E1] bg-white p-3.5 text-sm text-[#0F172A] placeholder-[#94A3B8] transition-colors focus:border-[#D97706] focus:outline-none focus:ring-2 focus:ring-[#D97706]/20"
                />
              </div>

              {/* Consent checkbox */}
              <div className="rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-1 h-4 w-4 rounded border-[#CBD5E1] text-[#D97706] focus:ring-[#D97706]"
                  />
                  <span className="text-xs text-[#475569] leading-relaxed">
                    I agree that Frontier Systems can use the information provided to respond to my enquiry in accordance with the{" "}
                    <Link href="/privacy" target="_blank" className="font-semibold text-[#B45309] hover:underline">
                      UK GDPR Privacy Policy
                    </Link>
                    .
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#0F172A] px-8 text-sm font-bold text-white shadow-md transition-all hover:bg-[#D97706] sm:w-auto"
                >
                  <span>Submit Enquiry</span>
                  <Send className="h-4 w-4" />
                </button>

                <p className="mt-3 text-[11px] text-[#64748B] leading-relaxed">
                  By submitting this form, you are asking Frontier Systems to contact you regarding your enquiry. Your details are confidential and never shared with third parties.
                </p>
              </div>
            </div>
          </form>
        )}
      </section>
    </div>
  );
}
