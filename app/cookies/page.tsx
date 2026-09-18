import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Cookie,
  ShieldCheck,
  Scale,
  Mail,
  CheckCircle2,
  Sliders,
  Settings,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Cookie Policy | Frontier Systems (UK)",
  description:
    "Learn how Frontier Systems uses strictly necessary and performance cookies in compliance with UK PECR and UK GDPR.",
};

export default function CookiePolicyPage() {
  const lastUpdated = "17 September 2026";

  const tableOfContents = [
    { id: "what-are-cookies", label: "1. What Are Cookies?" },
    { id: "our-approach", label: "2. Our Privacy-First Approach" },
    { id: "categories", label: "3. Categories of Cookies We Use" },
    { id: "cookie-table", label: "4. Detailed Cookies Inventory" },
    { id: "third-party", label: "5. Third-Party Technologies" },
    { id: "managing-cookies", label: "6. How to Control Cookies in Your Browser" },
    { id: "updates", label: "7. Policy Updates & Contact" },
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
              <Cookie className="h-3.5 w-3.5" />
              <span>UK PECR & UK GDPR COMPLIANCE</span>
            </div>

            <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Cookie Policy
            </h1>

            <p className="mt-4 text-base leading-7 text-white/70 sm:text-lg">
              Understand how Frontier Systems uses cookies and web technologies to ensure
              security, stability, and speed without invasive cross-site advertising.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-white/50">
              <span>Jurisdiction: United Kingdom</span>
              <span>·</span>
              <span>Effective Date: {lastUpdated}</span>
              <span>·</span>
              <span>No Cross-Site Ad Trackers</span>
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
                  Cookie or privacy inquiries?
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

          {/* POLICY TEXT BODY */}
          <article className="space-y-12 text-sm leading-7 text-[#334155] sm:text-base sm:leading-8">
            {/* Plain English Summary Callout */}
            <div className="rounded-xl border border-[#FDE68A] bg-[#FFFBEB] p-6 text-sm text-[#92400E]">
              <div className="flex items-center gap-2 font-bold text-[#78350F]">
                <Scale className="h-5 w-5 text-[#B45309]" />
                <span>Summary in Plain English</span>
              </div>
              <p className="mt-2 text-[#92400E]">
                We adopt a privacy-first stance. <strong>We do not use invasive third-party
                advertising cookies or cross-site behavioral trackers</strong>. We only use
                strictly necessary cookies to route pages, prevent cybersecurity attacks, and
                remember essential preferences.
              </p>
            </div>

            {/* 1. What Are Cookies */}
            <section id="what-are-cookies" className="scroll-mt-28">
              <h2 className="text-xl font-bold tracking-tight text-[#0F172A] sm:text-2xl">
                1. What Are Cookies?
              </h2>
              <p className="mt-4">
                Cookies are small text files that are downloaded to your browser or device when you
                visit a website. They enable web applications to recognise your device, remember
                session preferences, and ensure that secure pages load smoothly.
              </p>
              <p className="mt-3">
                In this policy, &ldquo;cookies&rdquo; also refers to similar browser storage
                mechanisms, including <code>localStorage</code>, <code>sessionStorage</code>, and HTTP
                security headers used under the UK <em>Privacy and Electronic Communications
                Regulations 2003 (PECR)</em> and the <em>Data Protection Act 2018</em>.
              </p>
            </section>

            {/* 2. Privacy-First Approach */}
            <section id="our-approach" className="scroll-mt-28 border-t border-[#E2E8F0] pt-8">
              <h2 className="text-xl font-bold tracking-tight text-[#0F172A] sm:text-2xl">
                2. Our Privacy-First Approach
              </h2>
              <div className="mt-4 rounded-xl border border-[#E2E8F0] bg-white p-5">
                <div className="flex items-center gap-2 font-bold text-[#0F172A]">
                  <CheckCircle2 className="h-5 w-5 text-[#D97706]" />
                  <span>No Commercial Ad Retargeting</span>
                </div>
                <p className="mt-2 text-sm text-[#475569]">
                  Unlike typical marketing platforms, Frontier Systems does not deploy intrusive
                  third-party tracking pixels (such as Meta Pixel, TikTok tracking, or invasive
                  cross-web ad networks). Our focus is pure engineering excellence: sub-second page
                  loads, clean Next.js architecture, and bulletproof security.
                </p>
              </div>
            </section>

            {/* 3. Categories */}
            <section id="categories" className="scroll-mt-28 border-t border-[#E2E8F0] pt-8">
              <h2 className="text-xl font-bold tracking-tight text-[#0F172A] sm:text-2xl">
                3. Categories of Cookies We Use
              </h2>

              <div className="mt-5 space-y-4">
                <div className="rounded-lg border border-[#E2E8F0] bg-white p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-[#0F172A]">A. Strictly Necessary Cookies</h3>
                    <span className="rounded bg-[#FEF3C7] px-2 py-0.5 text-[10px] font-bold text-[#92400E]">
                      MANDATORY
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-[#475569]">
                    These cookies are essential for you to navigate our site securely. They maintain
                    edge CDN caching, deliver cryptographic DDoS mitigation tokens, and manage
                    stateless Next.js routing. Under Regulation 6(4) of PECR, these cookies do not
                    require prior user consent as the website cannot operate safely without them.
                  </p>
                </div>

                <div className="rounded-lg border border-[#E2E8F0] bg-white p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-[#0F172A]">B. Functional & Preference Cookies</h3>
                    <span className="rounded bg-[#F1F5F9] px-2 py-0.5 text-[10px] font-bold text-[#475569]">
                      FUNCTIONAL
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-[#475569]">
                    These allow the website to remember choices you make (such as maintaining our
                    curated light interface theme, dismissed announcements, or accessibility
                    preferences).
                  </p>
                </div>

                <div className="rounded-lg border border-[#E2E8F0] bg-white p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-[#0F172A]">C. Performance & Diagnostics</h3>
                    <span className="rounded bg-[#F1F5F9] px-2 py-0.5 text-[10px] font-bold text-[#475569]">
                      ANONYMISED
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-[#475569]">
                    Anonymised technical telemetry (such as Core Web Vitals, server response times, and
                    404 error tracking) used solely to optimize website speed, fix broken routes, and
                    ensure smooth rendering across different browsers.
                  </p>
                </div>
              </div>
            </section>

            {/* 4. Table */}
            <section id="cookie-table" className="scroll-mt-28 border-t border-[#E2E8F0] pt-8">
              <h2 className="text-xl font-bold tracking-tight text-[#0F172A] sm:text-2xl">
                4. Detailed Cookies Inventory
              </h2>
              <p className="mt-4">
                The following table specifies the cookies and storage keys utilized on this website:
              </p>

              <div className="mt-5 overflow-x-auto">
                <table className="w-full border-collapse text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-[#CBD5E1] bg-[#F1F5F9] text-[#0F172A]">
                      <th className="p-3 font-bold">Cookie / Key</th>
                      <th className="p-3 font-bold">Provider</th>
                      <th className="p-3 font-bold">Purpose</th>
                      <th className="p-3 font-bold">Duration</th>
                      <th className="p-3 font-bold">Classification</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E2E8F0] bg-white">
                    <tr>
                      <td className="p-3 font-mono font-bold text-[#0F172A]">__vercel_edge</td>
                      <td className="p-3 text-[#64748B]">Vercel Edge Network</td>
                      <td className="p-3">Edge server routing and distributed caching</td>
                      <td className="p-3 text-[#64748B]">Session</td>
                      <td className="p-3 font-medium text-[#B45309]">Strictly Necessary</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono font-bold text-[#0F172A]">_cfuvid / __cf_bm</td>
                      <td className="p-3 text-[#64748B]">Cloudflare / Edge CDN</td>
                      <td className="p-3">Automated bot mitigation and DDoS rate-limiting</td>
                      <td className="p-3 text-[#64748B]">30 minutes</td>
                      <td className="p-3 font-medium text-[#B45309]">Strictly Necessary</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono font-bold text-[#0F172A]">fs_theme</td>
                      <td className="p-3 text-[#64748B]">Frontier Systems</td>
                      <td className="p-3">Ensures uniform light mode rendering across viewports</td>
                      <td className="p-3 text-[#64748B]">1 year</td>
                      <td className="p-3 font-medium text-[#475569]">Functional</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 5. Third-Party Technologies */}
            <section id="third-party" className="scroll-mt-28 border-t border-[#E2E8F0] pt-8">
              <h2 className="text-xl font-bold tracking-tight text-[#0F172A] sm:text-2xl">
                5. Third-Party Technologies
              </h2>
              <p className="mt-4">
                Our website utilizes high-security global content delivery networks (CDNs) and font
                distribution services:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  <strong>Next.js / Vercel Edge:</strong> Serves our static pages globally with
                  sub-second latency and automated zero-downtime rollouts.
                </li>
                <li>
                  <strong>Google Fonts (Plus Jakarta Sans):</strong> Self-hosted at build time via Next.js
                  font optimization, meaning no direct font telemetry cookies are issued to third-party
                  servers during your visit.
                </li>
              </ul>
            </section>

            {/* 6. Managing Cookies */}
            <section id="managing-cookies" className="scroll-mt-28 border-t border-[#E2E8F0] pt-8">
              <h2 className="text-xl font-bold tracking-tight text-[#0F172A] sm:text-2xl">
                6. How to Control Cookies in Your Browser
              </h2>
              <p className="mt-4">
                You have the right to accept, refuse, or delete cookies at any time through your web
                browser settings. Please note that disabling strictly necessary cookies may degrade site
                performance or break page routing.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  {
                    browser: "Google Chrome",
                    instruction: "Settings → Privacy and security → Third-party cookies",
                  },
                  {
                    browser: "Apple Safari",
                    instruction: "Preferences → Privacy → Block all cookies / Manage Website Data",
                  },
                  {
                    browser: "Microsoft Edge",
                    instruction: "Settings → Cookies and site permissions → Manage and delete cookies",
                  },
                  {
                    browser: "Mozilla Firefox",
                    instruction: "Options → Privacy & Security → Enhanced Tracking Protection",
                  },
                ].map((item) => (
                  <div
                    key={item.browser}
                    className="rounded-lg border border-[#E2E8F0] bg-white p-4"
                  >
                    <div className="flex items-center gap-2">
                      <Settings className="h-4 w-4 text-[#B45309]" />
                      <p className="font-bold text-[#0F172A]">{item.browser}</p>
                    </div>
                    <p className="mt-1 text-xs text-[#64748B]">{item.instruction}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 7. Updates & Contact */}
            <section id="updates" className="scroll-mt-28 border-t border-[#E2E8F0] pt-8">
              <h2 className="text-xl font-bold tracking-tight text-[#0F172A] sm:text-2xl">
                7. Policy Updates & Contact
              </h2>
              <p className="mt-4">
                We may periodically update this Cookie Policy to reflect changes in our technological
                infrastructure or UK regulatory guidance. Any revisions will be published on this page
                with an updated effective date.
              </p>

              <div className="mt-5 rounded-xl border border-[#E2E8F0] bg-white p-6 shadow-sm">
                <p className="font-bold text-[#0F172A]">Frontier Systems — Contact & Enquiries</p>
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
              <Link href="/terms" className="hover:text-white">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-[#F59E0B] font-semibold">
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
