import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  FileCheck,
  Scale,
  Mail,
  Briefcase,
  AlertTriangle,
  Code2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | Frontier Systems (UK)",
  description:
    "Review the Terms of Service governing software development, AI automation, and technology services provided by Frontier Systems under the laws of England and Wales.",
};

export default function TermsOfServicePage() {
  const lastUpdated = "17 September 2026";

  const tableOfContents = [
    { id: "agreement", label: "1. Agreement & Overview" },
    { id: "services", label: "2. Scope of Services & SOWs" },
    { id: "client-obligations", label: "3. Client Responsibilities" },
    { id: "ip-ownership", label: "4. Intellectual Property Rights" },
    { id: "ai-terms", label: "5. AI & Automation Terms" },
    { id: "fees-payment", label: "6. Fees, Invoicing & UK VAT" },
    { id: "confidentiality", label: "7. Confidentiality & Non-Disclosure" },
    { id: "warranties", label: "8. Warranties & 30-Day Defect Warranty" },
    { id: "liability", label: "9. Limitation of Liability" },
    { id: "termination", label: "10. Term & Termination" },
    { id: "disputes", label: "11. Governing Law & Jurisdiction" },
    { id: "contact", label: "12. Contact & Notices" },
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A] pt-[74px]">
      {/* ==================== FIXED HEADER ==================== */}
      <header className="fixed top-0 inset-x-0 z-50 border-b border-[#E2E8F0] bg-[#F8FAFC]/95 backdrop-blur shadow-xs">
        <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <Link href="/" className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/favicon.ico"
              alt="Frontier Systems"
              className="h-9 w-9 rounded-sm"
            />
            <span className="text-sm font-extrabold tracking-[0.14em] text-[#0F172A]">
              FRONTIER SYSTEMS
            </span>
          </Link>

          <div className="flex items-center gap-4 sm:gap-6">
            <Link
              href="/"
              className="flex items-center gap-2 text-sm font-semibold text-[#475569] transition-colors hover:text-[#B45309]"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Home</span>
            </Link>

            <Link
              href="/services"
              className="hidden text-sm font-semibold text-[#475569] transition-colors hover:text-[#B45309] sm:block"
            >
              Services
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-[#0F172A] px-4 py-2 text-xs font-bold text-white transition-all hover:bg-[#D97706]"
            >
              Start a Conversation
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </header>

      {/* ==================== HERO ==================== */}
      <section className="relative overflow-hidden bg-[#0F172A] text-white">
        <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-60" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-96 -translate-x-1/2 rounded-full bg-[#D97706]/15 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-md border border-[#FDE68A]/30 bg-[#78350F]/40 px-3 py-1 text-xs font-semibold text-[#F59E0B]">
              <FileCheck className="h-3.5 w-3.5" />
              <span>COMMERCIAL TERMS & JURISDICTION: ENGLAND & WALES</span>
            </div>

            <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Terms of Service
            </h1>

            <p className="mt-4 text-base leading-7 text-white/70 sm:text-lg">
              Standard commercial terms governing software engineering, AI automation, digital
              platforms, and technical consulting provided by Frontier Systems.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-white/50">
              <span>Governing Law: England & Wales</span>
              <span>·</span>
              <span>Effective Date: {lastUpdated}</span>
              <span>·</span>
              <span>Standard Enterprise Edition</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== MAIN CONTENT & SIDEBAR ==================== */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[280px_1fr]">
          {/* SIDEBAR NAVIGATION */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 rounded-xl border border-[#E2E8F0] bg-white p-5 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-wider text-[#B45309]">
                Table of Contents
              </p>
              <nav className="mt-4 space-y-1.5 text-xs">
                {tableOfContents.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block rounded px-2.5 py-1.5 font-medium text-[#475569] transition-colors hover:bg-[#F8FAFC] hover:text-[#B45309]"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="mt-6 border-t border-[#E2E8F0] pt-4">
                <p className="text-[11px] text-[#64748B]">
                  Legal or contracting inquiry?
                </p>
                <a
                  href="mailto:hello@frontiersystems.co"
                  className="mt-1.5 inline-flex items-center gap-1.5 text-xs font-bold text-[#0F172A] hover:text-[#B45309]"
                >
                  <Mail className="h-3.5 w-3.5 text-[#D97706]" />
                  hello@frontiersystems.co
                </a>
              </div>
            </div>
          </aside>

          {/* TERMS TEXT BODY */}
          <article className="space-y-12 text-sm leading-7 text-[#334155] sm:text-base sm:leading-8">
            {/* Plain English Summary Callout */}
            <div className="rounded-xl border border-[#FDE68A] bg-[#FFFBEB] p-6 text-sm text-[#92400E]">
              <div className="flex items-center gap-2 font-bold text-[#78350F]">
                <Scale className="h-5 w-5 text-[#B45309]" />
                <span>Summary in Plain English</span>
              </div>
              <p className="mt-2 text-[#92400E]">
                We build high-performance software and systems for your business. When you pay for
                bespoke deliverables in full, <strong>you own the custom source code and designs</strong>.
                We provide a <strong>30-day post-launch warranty</strong> for reproducible defects,
                maintain strict confidentiality, and operate under the fair, established commercial laws
                of <strong>England and Wales</strong>.
              </p>
            </div>

            {/* 1. Agreement */}
            <section id="agreement" className="scroll-mt-28">
              <h2 className="text-xl font-bold tracking-tight text-[#0F172A] sm:text-2xl">
                1. Agreement & Overview
              </h2>
              <p className="mt-4">
                These Terms of Service (&ldquo;Terms&rdquo;, &ldquo;Agreement&rdquo;) set out the legal
                framework under which <strong>Frontier Systems</strong> (&ldquo;we&rdquo;,
                &ldquo;us&rdquo;, &ldquo;our&rdquo;) provides technical consultancy, bespoke software
                engineering, AI automation development, SaaS creation, and digital systems to clients
                (&ldquo;Client&rdquo;, &ldquo;you&rdquo;).
              </p>
              <p className="mt-3">
                By entering into a Statement of Work (&ldquo;SOW&rdquo;), signing a project proposal, or
                using our software development services, you agree to be legally bound by these Terms.
              </p>
            </section>

            {/* 2. Scope & SOWs */}
            <section id="services" className="scroll-mt-28 border-t border-[#E2E8F0] pt-8">
              <h2 className="text-xl font-bold tracking-tight text-[#0F172A] sm:text-2xl">
                2. Scope of Services & Statements of Work
              </h2>
              <p className="mt-4">
                Specific project scopes, deliverables, timelines, milestones, and commercial fees will be
                detailed in individual Statements of Work (SOW) or written proposals executed by both
                parties.
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  <strong>Core Specialisations:</strong> Digital Development (Web, Mobile, SaaS, Custom
                  Software, MVP, UI/UX); AI & Automation (Business workflows, AI copilots, Document
                  intelligence); Business Systems (CRM, ERP, Integrations, Modernisation); Data & Cloud
                  Infrastructure (Cloud engineering, DevOps, Cyber security).
                </li>
                <li>
                  <strong>Change Control:</strong> Any requests to alter project scope, deliverables, or
                  timelines after approval will be evaluated through a written Change Order detailing any
                  impact on fees or delivery dates.
                </li>
              </ul>
            </section>

            {/* 3. Client Obligations */}
            <section id="client-obligations" className="scroll-mt-28 border-t border-[#E2E8F0] pt-8">
              <h2 className="text-xl font-bold tracking-tight text-[#0F172A] sm:text-2xl">
                3. Client Responsibilities
              </h2>
              <p className="mt-4">
                Timely, high-quality project delivery requires active client collaboration. The Client
                agrees to:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Provide prompt access to necessary brand assets, content, APIs, and credentials;</li>
                <li>Designate an authorized project representative empowered to review and approve milestones;</li>
                <li>Complete acceptance testing and provide structured feedback within five (5) business days of milestone handover;</li>
                <li>Ensure that all materials and data provided to Frontier Systems do not infringe third-party intellectual property rights.</li>
              </ul>
            </section>

            {/* 4. Intellectual Property Rights */}
            <section id="ip-ownership" className="scroll-mt-28 border-t border-[#E2E8F0] pt-8">
              <h2 className="text-xl font-bold tracking-tight text-[#0F172A] sm:text-2xl">
                4. Intellectual Property Rights (Clear Ownership)
              </h2>
              <div className="mt-4 rounded-lg border border-[#E2E8F0] bg-white p-5">
                <div className="flex items-center gap-2 font-bold text-[#0F172A]">
                  <Code2 className="h-5 w-5 text-[#B45309]" />
                  <span>Full Client Ownership of Bespoke Deliverables</span>
                </div>
                <p className="mt-2 text-sm text-[#475569]">
                  Upon receipt of <strong>full payment</strong> of all agreed fees under the applicable
                  Statement of Work, Frontier Systems hereby assigns to the Client all right, title, and
                  interest (including copyright and intellectual property rights) in the bespoke source
                  code, user interfaces, database schemas, and designs created exclusively for the Client
                  (&ldquo;Foreground IP&rdquo;).
                </p>
              </div>

              <div className="mt-4 space-y-3">
                <p>
                  <strong>Pre-Existing Materials (&ldquo;Background IP&rdquo;):</strong> Frontier Systems
                  retains ownership of its pre-existing code modules, boilerplate frameworks, standard
                  utility libraries, and general technical know-how. To the extent Background IP is
                  incorporated into Client deliverables, Frontier Systems grants the Client a perpetual,
                  irrevocable, royalty-free, worldwide license to use, modify, and maintain that code as
                  part of the deliverable.
                </p>
                <p>
                  <strong>Open Source Components:</strong> Deliverables may include industry-standard open
                  source packages (e.g. Next.js, React, Linux, TailwindCSS). These components remain
                  governed by their respective open-source licenses (such as MIT, Apache 2.0, or BSD).
                </p>
              </div>
            </section>

            {/* 5. AI & Automation Terms */}
            <section id="ai-terms" className="scroll-mt-28 border-t border-[#E2E8F0] pt-8">
              <h2 className="text-xl font-bold tracking-tight text-[#0F172A] sm:text-2xl">
                5. AI & Automation Terms
              </h2>
              <p className="mt-4">
                Where services incorporate machine learning, large language models (LLMs), autonomous
                agents, or automated workflows, the following provisions apply:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  <strong>Probabilistic Technology:</strong> Client acknowledges that generative AI and
                  machine learning models produce statistical inferences and probabilistic outputs.
                  Frontier Systems applies prompt engineering, validation constraints, and deterministic
                  guards, but cannot guarantee 100% infallible output under every edge case.
                </li>
                <li>
                  <strong>Third-Party Cloud Services:</strong> Where solutions rely on external AI API
                  providers (e.g. Anthropic, OpenAI, AWS Bedrock), ongoing API usage fees and uptime are
                  governed by the respective vendor. Frontier Systems advises connecting client-owned
                  billing keys directly for full audit transparency.
                </li>
                <li>
                  <strong>Acceptable Use:</strong> Automated workflows and AI agents developed by
                  Frontier Systems must not be used for illegal activities, mass unsolicited messaging
                  (spam), unlawful surveillance, or defamatory purposes.
                </li>
              </ul>
            </section>

            {/* 6. Fees & Invoicing */}
            <section id="fees-payment" className="scroll-mt-28 border-t border-[#E2E8F0] pt-8">
              <h2 className="text-xl font-bold tracking-tight text-[#0F172A] sm:text-2xl">
                6. Fees, Invoicing & UK VAT
              </h2>
              <ul className="mt-3 list-disc space-y-2.5 pl-6">
                <li>
                  <strong>Currency:</strong> All fees are quoted and payable in United States Dollars
                  (USD, $) unless expressly agreed in writing in the SOW.
                </li>
                <li>
                  <strong>UK VAT:</strong> Where applicable under UK tax law, Value Added Tax (VAT) will be
                  charged at the prevailing statutory UK rate and clearly itemized on invoices.
                </li>
                <li>
                  <strong>Payment Terms:</strong> Invoices are payable within 14 calendar days of invoice date
                  unless otherwise stipulated in the SOW.
                </li>
                <li>
                  <strong>Late Payments (UK Statutory Interest):</strong> Frontier Systems reserves the
                  statutory right to claim interest and compensation on overdue business payments pursuant
                  to the <em>Late Payment of Commercial Debts (Interest) Act 1998</em> (8% per annum above the
                  Bank of England base rate).
                </li>
              </ul>
            </section>

            {/* 7. Confidentiality */}
            <section id="confidentiality" className="scroll-mt-28 border-t border-[#E2E8F0] pt-8">
              <h2 className="text-xl font-bold tracking-tight text-[#0F172A] sm:text-2xl">
                7. Confidentiality & Non-Disclosure
              </h2>
              <p className="mt-4">
                Both parties agree to treat all business secrets, client end-user information, technical
                architecture, financial terms, and source code disclosed during the engagement as strictly
                confidential (&ldquo;Confidential Information&rdquo;).
              </p>
              <p className="mt-3">
                Neither party will disclose Confidential Information to any third party without prior
                written consent, except to employees, professional advisors, and vetted subcontractors who
                need to know such information and are bound by confidentiality obligations no less
                protective than those contained herein.
              </p>
            </section>

            {/* 8. Warranties */}
            <section id="warranties" className="scroll-mt-28 border-t border-[#E2E8F0] pt-8">
              <h2 className="text-xl font-bold tracking-tight text-[#0F172A] sm:text-2xl">
                8. Warranties & 30-Day Defect Warranty
              </h2>
              <div className="mt-4 rounded-xl border border-[#CBD5E1] bg-white p-5">
                <p className="font-bold text-[#0F172A]">Our Professional Standard of Care</p>
                <p className="mt-2 text-sm text-[#475569]">
                  Frontier Systems warrants that all services will be executed with reasonable skill and
                  care in accordance with recognised software engineering standards and Section 13 of the
                  UK <em>Supply of Goods and Services Act 1982</em>.
                </p>
                <div className="mt-4 border-t border-[#E2E8F0] pt-3">
                  <p className="font-bold text-[#B45309]">30-Day Post-Launch Warranty</p>
                  <p className="mt-1 text-sm text-[#475569]">
                    For custom software and web applications delivered under a fixed-scope SOW, Frontier
                    Systems provides a <strong>30-calendar-day warranty</strong> commencing upon production
                    deployment or formal sign-off. During this period, we will diagnose and rectify any
                    reproducible defect or non-conformity to the agreed specification at no additional charge.
                  </p>
                </div>
              </div>
              <p className="mt-4 text-xs text-[#64748B]">
                <em>Exclusions:</em> The warranty does not cover defects caused by client alterations,
                unauthorized third-party modifications, external API outages, server hardware failures, or
                subsequent browser/OS deprecations.
              </p>
            </section>

            {/* 9. Limitation of Liability */}
            <section id="liability" className="scroll-mt-28 border-t border-[#E2E8F0] pt-8">
              <h2 className="text-xl font-bold tracking-tight text-[#0F172A] sm:text-2xl">
                9. Limitation of Liability
              </h2>
              <div className="mt-4 rounded-lg border border-[#FDE68A] bg-[#FFFBEB] p-4 text-xs text-[#92400E]">
                <div className="flex items-center gap-1.5 font-bold text-[#78350F]">
                  <AlertTriangle className="h-4 w-4 text-[#B45309]" />
                  <span>Important Commercial Liability Clause under UK Law</span>
                </div>
                <p className="mt-1">
                  Nothing in this Agreement excludes or limits either party&apos;s liability for:
                  (a) death or personal injury caused by negligence; (b) fraud or fraudulent misrepresentation;
                  or (c) any other liability which cannot be excluded or limited by the laws of England and Wales.
                </p>
              </div>

              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>
                  <strong>Exclusion of Consequential Losses:</strong> To the maximum extent permitted by
                  law, neither party shall be liable for indirect, special, incidental, or consequential
                  losses, including loss of profits, loss of business revenue, loss of goodwill, or loss of
                  anticipated savings.
                </li>
                <li>
                  <strong>Aggregate Financial Cap:</strong> Each party&apos;s total aggregate liability arising
                  out of or in connection with this Agreement or any Statement of Work (whether in contract,
                  tort, negligence, or statutory duty) shall be strictly capped at <strong>100% of the total
                  fees paid or payable by the Client</strong> under the specific SOW in the twelve (12) months
                  preceding the event giving rise to the claim.
                </li>
              </ul>
            </section>

            {/* 10. Termination */}
            <section id="termination" className="scroll-mt-28 border-t border-[#E2E8F0] pt-8">
              <h2 className="text-xl font-bold tracking-tight text-[#0F172A] sm:text-2xl">
                10. Term & Termination
              </h2>
              <p className="mt-4">
                Either party may terminate a Statement of Work immediately upon written notice if:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  The other party commits a material breach of this Agreement and fails to remedy such breach
                  within fourteen (14) days of receiving written notice;
                </li>
                <li>
                  The other party enters into liquidation, administration, or insolvency proceedings in the
                  United Kingdom or any foreign jurisdiction.
                </li>
              </ul>
              <p className="mt-3">
                Upon termination, the Client shall pay Frontier Systems for all work satisfactorily performed
                and pre-approved expenses incurred up to the date of termination, upon which all completed
                deliverables will be transferred to the Client.
              </p>
            </section>

            {/* 11. Governing Law & Jurisdiction */}
            <section id="disputes" className="scroll-mt-28 border-t border-[#E2E8F0] pt-8">
              <h2 className="text-xl font-bold tracking-tight text-[#0F172A] sm:text-2xl">
                11. Governing Law & Jurisdiction
              </h2>
              <div className="mt-4 rounded-xl border border-[#CBD5E1] bg-white p-5">
                <div className="flex items-center gap-2 font-bold text-[#0F172A]">
                  <Scale className="h-5 w-5 text-[#B45309]" />
                  <span>Exclusive Jurisdiction of England & Wales</span>
                </div>
                <p className="mt-2 text-sm text-[#475569]">
                  This Agreement, and any dispute, controversy, or claim arising out of or in connection with
                  it or its subject matter or formation (including non-contractual disputes or claims), shall
                  be governed by and construed in accordance with the laws of <strong>England and Wales</strong>.
                </p>
                <p className="mt-2 text-sm text-[#475569]">
                  Both parties irrevocably agree that the courts of <strong>England and Wales</strong> shall
                  have exclusive jurisdiction to settle any dispute or claim arising out of or in connection
                  with this Agreement.
                </p>
              </div>
            </section>

            {/* 12. Contact */}
            <section id="contact" className="scroll-mt-28 border-t border-[#E2E8F0] pt-8">
              <h2 className="text-xl font-bold tracking-tight text-[#0F172A] sm:text-2xl">
                12. Contact & Formal Notices
              </h2>
              <p className="mt-4">
                Formal legal notices under this Agreement must be delivered in writing via confirmed email:
              </p>
              <div className="mt-4 rounded-xl border border-[#E2E8F0] bg-white p-6 shadow-sm">
                <p className="font-bold text-[#0F172A]">Frontier Systems — Contact & Legal Notices</p>
                <p className="mt-1 text-xs text-[#64748B]">
                  22 Gladstone Street, Walsall, WS2 8BL, United Kingdom
                </p>
                <p className="mt-2 text-sm text-[#475569]">
                  Email:{" "}
                  <a
                    href="mailto:hello@frontiersystems.co"
                    className="font-semibold text-[#B45309] hover:underline"
                  >
                    hello@frontiersystems.co
                  </a>
                </p>
              </div>
            </section>
          </article>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="border-t border-[#E2E8F0] bg-[#0F172A] text-white">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
              <Link href="/" className="flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/favicon.ico"
                  alt="Frontier Systems"
                  className="h-8 w-8 rounded-sm"
                />
                <span className="text-sm font-extrabold tracking-[0.14em] text-white">
                  FRONTIER SYSTEMS
                </span>
              </Link>
              <span className="hidden sm:inline text-white/20">·</span>
              <p className="text-xs text-white/45">
                22 Gladstone Street, Walsall, WS2 8BL, UK
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-white/55">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <Link href="/services" className="hover:text-white">
                Services
              </Link>
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-[#F59E0B] font-semibold">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-white">
                Cookie Policy
              </Link>
            </div>

            <p className="text-xs text-white/35">
              © <span suppressHydrationWarning>{new Date().getFullYear()}</span> Frontier Systems. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
