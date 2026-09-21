import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Globe2,
  Layers,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";
import { caseStudiesData } from "@/lib/data/case-studies";

export const metadata: Metadata = {
  title: "Our Work & Case Studies | Frontier Systems",
  description:
    "Explore recent work built by Frontier Systems, including the B2B Pakistan export portal for Dewan Traders (dewantrade.com — Sargodha Kinnow mandarins, fresh produce, Basmati rice), logistics platforms, and automation systems.",
};

export default function WorkPage() {
  const featuredCaseStudy = caseStudiesData.find((cs) => cs.featured) || caseStudiesData[0];
  const otherCaseStudies = caseStudiesData.filter((cs) => cs.id !== featuredCaseStudy.id);

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A] pt-[74px]">
      {/* ==================== FIXED NAVIGATION ==================== */}
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

          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="/"
              className="text-sm font-semibold text-[#475569] transition-colors hover:text-[#B45309]"
            >
              Home
            </Link>

            <Link
              href="/services"
              className="text-sm font-semibold text-[#475569] transition-colors hover:text-[#B45309]"
            >
              Services
            </Link>

            <Link
              href="/work"
              className="text-sm font-bold text-[#B45309] border-b-2 border-[#B45309] py-1"
            >
              Our Work
            </Link>

            <Link
              href="/contact"
              className="text-sm font-semibold text-[#475569] transition-colors hover:text-[#B45309]"
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/447401826937?text=Hello%20Frontier%20Systems%2C%20I%20would%20like%20to%20enquire%20about%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex flex-col items-center justify-center rounded-lg border border-[#BBF7D0] bg-[#F0FDF4] px-3.5 py-1 text-[#15803D] transition-all hover:bg-[#DCFCE7]"
            >
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#16A34A]/80 leading-none">
                WhatsApp
              </span>
              <span className="text-xs font-bold whitespace-nowrap leading-tight mt-0.5">
                +44 7401 826937
              </span>
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-[#0F172A] px-5 py-2.5 text-xs font-bold text-white shadow-sm transition-all hover:bg-[#D97706]"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </header>

      {/* ==================== HERO SECTION ==================== */}
      <section className="relative overflow-hidden bg-[#0F172A] text-white py-16 sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-blueprint-pattern opacity-40" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-[#D97706]/15 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-md border border-[#FDE68A]/30 bg-[#78350F]/40 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#F59E0B]">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Proven Results & Engineering Excellence</span>
            </div>

            <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Our Recent Work.
            </h1>

            <p className="mt-4 text-base leading-relaxed text-[#94A3B8] sm:text-lg sm:leading-8">
              Explore how we design and engineer modern web applications, high-volume B2B trade platforms,
              and intelligent workflow automations that drive real commercial growth.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== FEATURED CASE STUDY: DEWAN TRADERS ==================== */}
      <section id="dewan-traders" className="scroll-mt-24 relative -mt-8 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-xl">
          {/* Top Banner */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E2E8F0] bg-[#FFFBEB] px-6 py-3 sm:px-8">
            <div className="flex items-center gap-2">
              <span className="flex h-2.5 w-2.5 rounded-full bg-[#D97706]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#B45309]">
                Featured Client Case Study
              </span>
            </div>

            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FEF3C7] px-3 py-0.5 text-xs font-semibold text-[#92400E]">
              <Globe2 className="h-3.5 w-3.5" />
              {featuredCaseStudy.industry}
            </span>
          </div>

          <div className="p-6 sm:p-8 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              {/* Left Details */}
              <div>
                <div className="flex items-center gap-3">
                  <span className="rounded bg-[#0F172A] px-2.5 py-1 text-[11px] font-extrabold tracking-wider text-white">
                    WEB & DIGITAL
                  </span>
                  <span className="text-xs font-semibold text-[#64748B]">
                    Timeline: {featuredCaseStudy.timeline}
                  </span>
                </div>

                <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-[#0F172A] sm:text-3xl lg:text-4xl">
                  {featuredCaseStudy.title}
                </h2>

                <p className="mt-3 text-sm font-semibold text-[#B45309] sm:text-base">
                  {featuredCaseStudy.tagline}
                </p>

                <p className="mt-4 text-sm leading-relaxed text-[#475569] sm:text-base">
                  {featuredCaseStudy.description}
                </p>

                {/* Key Metrics Grid */}
                <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {featuredCaseStudy.results.map((res) => (
                    <div
                      key={res.label}
                      className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-4 text-center"
                    >
                      <p className="text-2xl font-black text-[#B45309] sm:text-3xl">
                        {res.metric}
                      </p>
                      <p className="mt-1 text-[11px] font-medium leading-tight text-[#64748B]">
                        {res.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Scope & Deliverables */}
                <div className="mt-8 border-t border-[#E2E8F0] pt-6">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#0F172A]">
                    Key Deliverables Engineered:
                  </h3>
                  <div className="mt-3 space-y-2.5">
                    {featuredCaseStudy.deliverables.map((item) => (
                      <div key={item} className="flex items-start gap-2.5 text-xs text-[#334155] sm:text-sm">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-[#16A34A] mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {featuredCaseStudy.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-[#E2E8F0] bg-[#F1F5F9] px-2.5 py-1 text-xs font-semibold text-[#475569]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Visual / Mockup Preview */}
              <div className="flex flex-col items-center">
                <div className="relative w-full overflow-hidden rounded-xl border border-[#CBD5E1] bg-[#0F172A] p-2 shadow-2xl transition-transform hover:scale-[1.01]">
                  {/* Browser window top bar */}
                  <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                    <span className="ml-3 rounded bg-white/10 px-3 py-0.5 text-[10px] font-medium text-white/50">
                      dewantrade.com • B2B Pakistan Exporter
                    </span>
                  </div>

                  {/* Mockup Image */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={featuredCaseStudy.image}
                    alt="Dewan Traders (dewantrade.com) - B2B Pakistan Exporter website built by Frontier Systems"
                    className="w-full rounded-lg object-cover"
                  />
                </div>

                {/* Direct link to live website */}
                <a
                  href="https://www.dewantrade.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3.5 inline-flex items-center gap-1.5 rounded-lg border border-[#CBD5E1] bg-white px-4 py-2 text-xs font-bold text-[#0F172A] shadow-xs transition-all hover:border-[#D97706] hover:text-[#B45309]"
                >
                  <span>Visit Live Website: dewantrade.com</span>
                  <ExternalLink className="h-3.5 w-3.5 text-[#D97706]" />
                </a>

                {/* Client Quote Box */}
                {featuredCaseStudy.clientQuote && (
                  <div className="mt-6 w-full rounded-xl border border-[#FDE68A] bg-[#FFFBEB] p-5 shadow-xs">
                    <p className="text-xs italic leading-relaxed text-[#78350F] sm:text-sm">
                      &ldquo;{featuredCaseStudy.clientQuote.text}&rdquo;
                    </p>
                    <div className="mt-3 flex items-center justify-between border-t border-[#FDE68A]/60 pt-2 text-xs">
                      <span className="font-bold text-[#0F172A]">
                        {featuredCaseStudy.clientQuote.author}
                      </span>
                      <span className="text-[#92400E] font-medium">
                        {featuredCaseStudy.clientQuote.role}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Deep-Dive: Challenge & Solution */}
            <div className="mt-12 grid gap-6 border-t border-[#E2E8F0] pt-10 md:grid-cols-2">
              <div className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-6">
                <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#B45309]">
                  <Layers className="h-4 w-4" />
                  <span>The Challenge</span>
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-[#475569] sm:text-sm">
                  {featuredCaseStudy.challenge}
                </p>
              </div>

              <div className="rounded-xl border border-[#BBF7D0] bg-[#F0FDF4] p-6">
                <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#15803D]">
                  <Zap className="h-4 w-4" />
                  <span>The Frontier Systems Solution</span>
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-[#166534] sm:text-sm">
                  {featuredCaseStudy.solution}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== ADDITIONAL CASE STUDIES ==================== */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#B45309]">
              More Case Studies
            </p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#0F172A] sm:text-3xl">
              Systems and software solving real operational problems.
            </h2>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B45309] hover:underline"
          >
            Explore all 18 services
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {otherCaseStudies.map((cs) => (
            <div
              key={cs.id}
              className="flex flex-col justify-between rounded-2xl border border-[#E2E8F0] bg-white p-7 shadow-sm transition-all hover:border-[#D97706] hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded bg-[#0F172A] px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-white">
                    {cs.category}
                  </span>
                  <span className="text-xs text-[#64748B]">{cs.timeline}</span>
                </div>

                <h3 className="mt-5 text-xl font-bold text-[#0F172A]">
                  {cs.title}
                </h3>

                <p className="mt-1 text-xs font-semibold text-[#B45309]">
                  {cs.industry}
                </p>

                <p className="mt-3 text-xs leading-relaxed text-[#475569] sm:text-sm">
                  {cs.description}
                </p>

                <div className="mt-6 grid grid-cols-3 gap-2 border-y border-[#E2E8F0] py-3 text-center">
                  {cs.results.map((res) => (
                    <div key={res.label}>
                      <p className="text-lg font-black text-[#0F172A] sm:text-xl">
                        {res.metric}
                      </p>
                      <p className="mt-0.5 text-[10px] text-[#64748B] line-clamp-1">
                        {res.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 space-y-2">
                  {cs.deliverables.map((d) => (
                    <div key={d} className="flex items-start gap-2 text-xs text-[#334155]">
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#16A34A] mt-0.5" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-1.5 border-t border-[#F1F5F9] pt-4">
                {cs.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded bg-[#F8FAFC] border border-[#E2E8F0] px-2 py-0.5 text-[11px] font-medium text-[#475569]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== BOTTOM CALL TO ACTION ==================== */}
      <section className="bg-[#0F172A] py-16 text-white sm:py-20">
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
          <div className="inline-flex items-center gap-2 rounded-md border border-[#FDE68A]/30 bg-[#78350F]/40 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#F59E0B]">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Start Building Today</span>
          </div>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Have a project similar to Dewan Trading House?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
            Whether you need a high-performance export and trade portal, custom B2B software, or an automated
            operational workflow, our senior architects will guide you from architecture to launch.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-[#D97706] px-7 py-3 text-sm font-bold text-white shadow-lg shadow-[#D97706]/30 transition-all hover:bg-[#B45309]"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <a
              href="https://wa.me/447401826937?text=Hello%20Frontier%20Systems%2C%20I%20saw%20your%20work%20for%20Dewan%20Trading%20House%20and%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-col items-center justify-center rounded-lg border border-[#BBF7D0]/40 bg-[#F0FDF4]/10 px-6 py-2 text-sm font-semibold text-[#86EFAC] transition-colors hover:bg-[#F0FDF4]/20 hover:text-white"
            >
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#86EFAC]/80 leading-tight">
                WhatsApp
              </span>
              <span className="text-xs font-bold whitespace-nowrap leading-tight mt-0.5">
                +44 7401 826937
              </span>
            </a>

            <a
              href="mailto:hello@frontiersystems.co?subject=Project%20Enquiry%20-%20Frontier%20Systems&body=Hi%20Frontier%20Systems%20team%2C%0A%0AI%20saw%20your%20work%20for%20Dewan%20Trading%20House%20and%20would%20like%20to%20discuss%20a%20project."
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/40 hover:text-[#F59E0B]"
            >
              hello@frontiersystems.co
            </a>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="border-t border-[#E2E8F0] bg-[#0B1120] text-white">
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
              <Link href="/work" className="text-[#F59E0B] font-bold">
                Our Work
              </Link>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
              <a
                href="https://wa.me/447401826937?text=Hello%20Frontier%20Systems%2C%20I%20would%20like%20to%20enquire%20about%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#22C55E]"
              >
                WhatsApp
              </a>
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white">
                Terms
              </Link>
            </div>

            <p className="text-xs text-white/30">
              © <span suppressHydrationWarning>{new Date().getFullYear()}</span> Frontier Systems. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
