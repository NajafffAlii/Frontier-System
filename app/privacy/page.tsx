import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Mail,
  Scale,
  Cpu,
  UserCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Frontier Systems (UK)",
  description:
    "Learn how Frontier Systems collects, uses, and safeguards your personal data in compliance with the UK GDPR and the Data Protection Act 2018.",
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "17 September 2026";

  const tableOfContents = [
    { id: "introduction", label: "1. Introduction & UK GDPR" },
    { id: "controller", label: "2. Data Controller Details" },
    { id: "data-we-collect", label: "3. Personal Data We Collect" },
    { id: "ai-processing", label: "4. AI & Automation Data Processing" },
    { id: "lawful-bases", label: "5. Lawful Bases for Processing" },
    { id: "how-we-use", label: "6. How We Use Your Data" },
    { id: "data-sharing", label: "7. Sharing & Third-Party Processors" },
    { id: "international-transfers", label: "8. International Transfers" },
    { id: "retention", label: "9. Data Retention" },
    { id: "your-rights", label: "10. Your UK GDPR Rights" },
    { id: "security", label: "11. Technical & Organisational Security" },
    { id: "contact-ico", label: "12. Contact Us & ICO Complaints" },
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      {/* ==================== STICKY HEADER ==================== */}
      <header className="sticky top-0 z-50 border-b border-[#E2E8F0] bg-[#F8FAFC]/95 backdrop-blur">
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
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-[#0F172A] px-4 py-2 text-xs font-bold text-white transition-all hover:bg-[#D97706]"
            >
              Start a Project
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
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>UK DATA PROTECTION & PRIVACY COMPLIANCE</span>
            </div>

            <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Privacy Policy
            </h1>

            <p className="mt-4 text-base leading-7 text-white/70 sm:text-lg">
              How Frontier Systems collects, manages, and protects personal data
              under the UK General Data Protection Regulation (UK GDPR) and the Data
              Protection Act 2018.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-white/50">
              <span>Jurisdiction: England & Wales (UK)</span>
              <span>·</span>
              <span>Effective Date: {lastUpdated}</span>
              <span>·</span>
              <span>Regulated by: Information Commissioner&apos;s Office (ICO)</span>
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
                  Questions about our privacy practices?
                </p>
                <a
                  href="mailto:privacy@frontiersystems.co"
                  className="mt-1.5 inline-flex items-center gap-1.5 text-xs font-bold text-[#0F172A] hover:text-[#B45309]"
                >
                  <Mail className="h-3.5 w-3.5 text-[#D97706]" />
                  privacy@frontiersystems.co
                </a>
              </div>
            </div>
          </aside>

          {/* POLICY TEXT BODY */}
          <article className="space-y-12 text-sm leading-7 text-[#334155] sm:text-base sm:leading-8">
            {/* Plain English Summary Callout */}
            <div className="rounded-xl border border-[#FDE68A] bg-[#FFFBEB] p-6 text-sm text-[#92400E]">
              <div className="flex items-center gap-2 font-bold text-[#78350F]">
                <Scale className="h-5 w-5 text-[#B45309]" />
                <span>Summary in Plain English</span>
              </div>
              <p className="mt-2 text-[#92400E]">
                We respect your privacy. We only collect the minimal information
                needed to deliver high-quality technology solutions, communicate
                with clients, and ensure platform security. <strong>We do not sell
                your personal data</strong>, and <strong>we do not use client
                confidential data to train public artificial intelligence models</strong>.
              </p>
            </div>

            {/* 1. Introduction */}
            <section id="introduction" className="scroll-mt-28">
              <h2 className="text-xl font-bold tracking-tight text-[#0F172A] sm:text-2xl">
                1. Introduction & UK GDPR
              </h2>
              <p className="mt-4">
                Frontier Systems (&ldquo;Frontier Systems&rdquo;, &ldquo;we&rdquo;,
                &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is a UK-based technology
                firm delivering custom software development, artificial intelligence
                (AI) automation, SaaS platforms, and enterprise digital solutions.
              </p>
              <p className="mt-3">
                This Privacy Policy explains how we collect, process, store, and
                safeguard your personal data when you visit our website (
                <code>frontiersystems.co</code>), engage our consulting and engineering
                services, or communicate with our team. We operate in accordance
                with the <strong>UK General Data Protection Regulation (UK GDPR)</strong>,
                the <strong>Data Protection Act 2018 (DPA 2018)</strong>, and the
                <strong> Privacy and Electronic Communications Regulations (PECR)</strong>.
              </p>
            </section>

            {/* 2. Data Controller */}
            <section id="controller" className="scroll-mt-28 border-t border-[#E2E8F0] pt-8">
              <h2 className="text-xl font-bold tracking-tight text-[#0F172A] sm:text-2xl">
                2. Data Controller Details
              </h2>
              <p className="mt-4">
                Under the UK GDPR, Frontier Systems acts as the <strong>Data Controller</strong> for
                personal data collected directly through our public website, marketing
                inquiries, and client account administration.
              </p>
              <div className="mt-4 rounded-lg border border-[#E2E8F0] bg-white p-5">
                <p className="font-semibold text-[#0F172A]">Frontier Systems</p>
                <p className="text-xs text-[#64748B]">United Kingdom</p>
                <p className="mt-2 text-sm">
                  <strong>Privacy & Data Inquiries:</strong>{" "}
                  <a
                    href="mailto:privacy@frontiersystems.co"
                    className="font-medium text-[#B45309] hover:underline"
                  >
                    privacy@frontiersystems.co
                  </a>
                </p>
                <p className="mt-1 text-sm">
                  <strong>General Inquiries:</strong>{" "}
                  <a
                    href="mailto:hello@frontiersystems.co"
                    className="font-medium text-[#B45309] hover:underline"
                  >
                    hello@frontiersystems.co
                  </a>
                </p>
              </div>
              <p className="mt-4 text-xs text-[#64748B]">
                <em>Note:</em> When we build bespoke systems, host client databases, or
                implement workflows where the client provides their own end-user data, Frontier
                Systems typically acts as a <strong>Data Processor</strong> under a separate,
                binding Data Processing Agreement (DPA) executed with the client.
              </p>
            </section>

            {/* 3. Personal Data We Collect */}
            <section id="data-we-collect" className="scroll-mt-28 border-t border-[#E2E8F0] pt-8">
              <h2 className="text-xl font-bold tracking-tight text-[#0F172A] sm:text-2xl">
                3. Personal Data We Collect
              </h2>
              <p className="mt-4">
                We only collect data that is strictly necessary for fulfilling our contractual
                commitments, answering inquiries, and maintaining cyber defence standards:
              </p>

              <div className="mt-5 space-y-4">
                <div className="rounded-lg border border-[#E2E8F0] bg-white p-4">
                  <h3 className="font-bold text-[#0F172A]">A. Contact & Commercial Data</h3>
                  <p className="mt-1 text-sm text-[#475569]">
                    When you initiate contact, book a consultation, or request a proposal:
                    name, business email address, phone number, company name, job role, and
                    project requirements submitted via email or contact forms.
                  </p>
                </div>

                <div className="rounded-lg border border-[#E2E8F0] bg-white p-4">
                  <h3 className="font-bold text-[#0F172A]">B. Technical & Operational Information</h3>
                  <p className="mt-1 text-sm text-[#475569]">
                    When accessing our web services: IP address, operating system, browser
                    type and version, device identifiers, time-zone settings, and diagnostic logs
                    utilised solely for infrastructure health, DDoS prevention, and routing.
                  </p>
                </div>

                <div className="rounded-lg border border-[#E2E8F0] bg-white p-4">
                  <h3 className="font-bold text-[#0F172A]">C. Billing & Project Administration</h3>
                  <p className="mt-1 text-sm text-[#475569]">
                    For corporate clients: billing contact details, company registration
                    numbers, VAT identifiers, invoicing address, and payment transaction
                    confirmations (processed via secure banking or PCI-DSS certified gateways).
                  </p>
                </div>
              </div>
            </section>

            {/* 4. AI & Automation Processing */}
            <section id="ai-processing" className="scroll-mt-28 border-t border-[#E2E8F0] pt-8">
              <h2 className="text-xl font-bold tracking-tight text-[#0F172A] sm:text-2xl">
                4. AI & Automation Data Processing
              </h2>
              <div className="mt-4 flex items-start gap-3 rounded-lg border border-[#E2E8F0] bg-[#F1F5F9] p-4 text-xs text-[#334155]">
                <Cpu className="mt-0.5 h-5 w-5 shrink-0 text-[#D97706]" />
                <div>
                  <p className="font-bold text-[#0F172A]">Strict AI Data Governance Policy</p>
                  <p className="mt-1">
                    Frontier Systems adheres to rigorous standards regarding machine learning
                    and automated reasoning tools.
                  </p>
                </div>
              </div>

              <ul className="mt-4 list-disc space-y-2.5 pl-6">
                <li>
                  <strong>No Public Model Training:</strong> We do not submit client
                  confidential data, proprietary code, business logic, or customer records to
                  public machine learning models for training or reinforcement.
                </li>
                <li>
                  <strong>Zero-Retention Enterprise APIs:</strong> Where third-party AI APIs
                  (e.g., Anthropic Claude, OpenAI Enterprise, AWS Bedrock) are incorporated into
                  client architectures, they are configured under enterprise agreements featuring
                  explicit zero-data-retention and non-training clauses.
                </li>
                <li>
                  <strong>Human-in-the-Loop Safeguards:</strong> Autonomous agents and automation
                  pipelines designed by Frontier Systems enforce deterministic fallback logic, audit
                  logging, and administrative oversight to prevent unmonitored decision-making.
                </li>
              </ul>
            </section>

            {/* 5. Lawful Bases */}
            <section id="lawful-bases" className="scroll-mt-28 border-t border-[#E2E8F0] pt-8">
              <h2 className="text-xl font-bold tracking-tight text-[#0F172A] sm:text-2xl">
                5. Lawful Bases for Processing (UK GDPR Art. 6)
              </h2>
              <p className="mt-4">
                We process your personal information only when there is a valid lawful basis under UK
                law:
              </p>

              <div className="mt-4 overflow-x-auto">
                <table className="w-full border-collapse text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-[#CBD5E1] bg-[#F1F5F9] text-[#0F172A]">
                      <th className="p-3 font-bold">Purpose of Processing</th>
                      <th className="p-3 font-bold">Data Categories</th>
                      <th className="p-3 font-bold">UK GDPR Lawful Basis</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E2E8F0] bg-white">
                    <tr>
                      <td className="p-3 font-medium">Responding to inquiries & project scoping</td>
                      <td className="p-3 text-[#64748B]">Name, email, project brief</td>
                      <td className="p-3 font-medium text-[#B45309]">Legitimate Interests / Pre-contract</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Delivering bespoke software & consulting</td>
                      <td className="p-3 text-[#64748B]">Client contacts, technical access</td>
                      <td className="p-3 font-medium text-[#B45309]">Performance of a Contract</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Statutory accounting & tax records (HMRC)</td>
                      <td className="p-3 text-[#64748B]">Invoices, company billing info</td>
                      <td className="p-3 font-medium text-[#B45309]">Legal Obligation</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Website security & firewall protection</td>
                      <td className="p-3 text-[#64748B]">IP address, server error logs</td>
                      <td className="p-3 font-medium text-[#B45309]">Legitimate Interests (Cybersecurity)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 6. How We Use Data */}
            <section id="how-we-use" className="scroll-mt-28 border-t border-[#E2E8F0] pt-8">
              <h2 className="text-xl font-bold tracking-tight text-[#0F172A] sm:text-2xl">
                6. How We Use Your Data
              </h2>
              <p className="mt-4">
                We use the data collected strictly for legitimate operational purposes:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>To negotiate, execute, and deliver client software development contracts;</li>
                <li>To provide ongoing support, bug remediation, and infrastructure maintenance;</li>
                <li>To invoice for professional services rendered and maintain corporate accounts;</li>
                <li>To detect, prevent, and mitigate cyber security threats and malicious traffic;</li>
                <li>To comply with statutory legal and regulatory obligations in the United Kingdom.</li>
              </ul>
            </section>

            {/* 7. Sharing & Third-Party Processors */}
            <section id="data-sharing" className="scroll-mt-28 border-t border-[#E2E8F0] pt-8">
              <h2 className="text-xl font-bold tracking-tight text-[#0F172A] sm:text-2xl">
                7. Sharing & Third-Party Processors
              </h2>
              <p className="mt-4">
                We never sell, rent, or trade your personal data. We only share data with vetted
                sub-processors that maintain ISO 27001, SOC 2, or UK GDPR-compliant data processing
                agreements:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  <strong>Hosting & CDN Providers:</strong> Vercel Inc., Amazon Web Services (AWS),
                  and Cloudflare for edge routing, security headers, and website availability.
                </li>
                <li>
                  <strong>Communication & Productivity:</strong> Google Workspace / Microsoft 365
                  for secure corporate communications under UK/EU data residency guarantees.
                </li>
                <li>
                  <strong>Statutory Authorities:</strong> UK law enforcement or regulatory bodies
                  (such as HMRC) where required by a binding legal court order.
                </li>
              </ul>
            </section>

            {/* 8. International Data Transfers */}
            <section id="international-transfers" className="scroll-mt-28 border-t border-[#E2E8F0] pt-8">
              <h2 className="text-xl font-bold tracking-tight text-[#0F172A] sm:text-2xl">
                8. International Data Transfers
              </h2>
              <p className="mt-4">
                As a UK company, our primary processing occurs within the United Kingdom and the
                European Economic Area (EEA). Where technical infrastructure requires transfer to
                jurisdictions outside the UK, we ensure appropriate safeguards are implemented in
                compliance with Chapter V of the UK GDPR, such as:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>UK International Data Transfer Agreements (IDTA);</li>
                <li>The UK Addendum to EU Standard Contractual Clauses (SCCs); or</li>
                <li>Countries covered by UK adequacy regulations.</li>
              </ul>
            </section>

            {/* 9. Data Retention */}
            <section id="retention" className="scroll-mt-28 border-t border-[#E2E8F0] pt-8">
              <h2 className="text-xl font-bold tracking-tight text-[#0F172A] sm:text-2xl">
                9. Data Retention
              </h2>
              <p className="mt-4">
                We retain personal data only for as long as necessary to fulfil the purposes for
                which it was collected:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  <strong>General Inquiries:</strong> Retained for 12 months following last contact
                  unless a commercial project contract ensues.
                </li>
                <li>
                  <strong>Client Contract & Project Deliverables:</strong> Retained for 6 years
                  following project completion in accordance with the UK Limitation Act 1980.
                </li>
                <li>
                  <strong>Statutory Financial Records:</strong> Retained for 6 years plus the current
                  financial year to satisfy UK HMRC corporate tax requirements.
                </li>
              </ul>
            </section>

            {/* 10. Your UK GDPR Rights */}
            <section id="your-rights" className="scroll-mt-28 border-t border-[#E2E8F0] pt-8">
              <h2 className="text-xl font-bold tracking-tight text-[#0F172A] sm:text-2xl">
                10. Your UK GDPR Rights
              </h2>
              <p className="mt-4">
                Under UK data protection law, you possess significant rights regarding your personal
                information:
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  {
                    title: "Right of Access",
                    desc: "Request a copy of the personal data we hold about you (Subject Access Request).",
                  },
                  {
                    title: "Right to Rectification",
                    desc: "Require us to correct incomplete or inaccurate personal data promptly.",
                  },
                  {
                    title: "Right to Erasure",
                    desc: "Request the deletion of your personal data where no legal ground requires its retention.",
                  },
                  {
                    title: "Right to Restriction",
                    desc: "Ask us to pause processing your data under specific contested circumstances.",
                  },
                  {
                    title: "Right to Data Portability",
                    desc: "Receive your personal data in a structured, commonly used, machine-readable format.",
                  },
                  {
                    title: "Right to Object",
                    desc: "Object to processing based on legitimate interests or direct marketing.",
                  },
                ].map((right) => (
                  <div
                    key={right.title}
                    className="rounded-lg border border-[#E2E8F0] bg-white p-4"
                  >
                    <div className="flex items-center gap-2">
                      <UserCheck className="h-4 w-4 text-[#B45309]" />
                      <h3 className="font-bold text-[#0F172A]">{right.title}</h3>
                    </div>
                    <p className="mt-1 text-xs text-[#475569]">{right.desc}</p>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-xs text-[#64748B]">
                To exercise any of these rights, email us at{" "}
                <a
                  href="mailto:privacy@frontiersystems.co"
                  className="font-medium text-[#B45309] hover:underline"
                >
                  privacy@frontiersystems.co
                </a>
                . We respond to verified requests within one calendar month, free of charge.
              </p>
            </section>

            {/* 11. Security */}
            <section id="security" className="scroll-mt-28 border-t border-[#E2E8F0] pt-8">
              <h2 className="text-xl font-bold tracking-tight text-[#0F172A] sm:text-2xl">
                11. Technical & Organisational Security
              </h2>
              <p className="mt-4">
                We implement industry-grade technical safeguards to prevent accidental loss,
                unauthorised access, alteration, or disclosure of data:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>End-to-end encryption in transit via modern TLS 1.3 protocols;</li>
                <li>Encryption at rest using AES-256 for all databases and project repositories;</li>
                <li>Strict role-based access control (RBAC) and mandatory multi-factor authentication (MFA);</li>
                <li>Continuous dependency auditing and automated vulnerability monitoring.</li>
              </ul>
            </section>

            {/* 12. Contact & ICO */}
            <section id="contact-ico" className="scroll-mt-28 border-t border-[#E2E8F0] pt-8">
              <h2 className="text-xl font-bold tracking-tight text-[#0F172A] sm:text-2xl">
                12. Contact Us & ICO Complaints
              </h2>
              <p className="mt-4">
                If you have questions, concerns, or requests regarding this Privacy Policy, please
                reach out directly to our privacy officer:
              </p>

              <div className="mt-4 rounded-xl border border-[#E2E8F0] bg-white p-6 shadow-sm">
                <p className="font-bold text-[#0F172A]">Frontier Systems — Data Privacy</p>
                <p className="mt-1 text-sm text-[#475569]">
                  Email:{" "}
                  <a
                    href="mailto:privacy@frontiersystems.co"
                    className="font-semibold text-[#B45309] hover:underline"
                  >
                    privacy@frontiersystems.co
                  </a>
                </p>
                <p className="mt-1 text-sm text-[#475569]">
                  General Communications:{" "}
                  <a
                    href="mailto:hello@frontiersystems.co"
                    className="font-semibold text-[#B45309] hover:underline"
                  >
                    hello@frontiersystems.co
                  </a>
                </p>
              </div>

              <div className="mt-6 rounded-lg border border-[#CBD5E1] bg-[#F8FAFC] p-4 text-xs text-[#475569]">
                <p className="font-bold text-[#0F172A]">Information Commissioner&apos;s Office (ICO)</p>
                <p className="mt-1">
                  You have the right to lodge a complaint at any time with the UK data protection
                  supervisory authority:
                </p>
                <p className="mt-1">
                  <strong>Website:</strong>{" "}
                  <a
                    href="https://ico.org.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[#B45309] hover:underline"
                  >
                    ico.org.uk
                  </a>{" "}
                  · <strong>Helpline:</strong> 0303 123 1113
                </p>
                <p className="mt-1 text-[#64748B]">
                  We would appreciate the chance to address your concerns before you approach the ICO,
                  so please feel welcome to contact us first.
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

            <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-white/55">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <Link href="/services" className="hover:text-white">
                Services
              </Link>
              <Link href="/privacy" className="text-[#F59E0B] font-semibold">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white">
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
