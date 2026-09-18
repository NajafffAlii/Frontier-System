import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { ServiceIcon } from "@/components/service-icon";
import { serviceCategories } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Services | Frontier Systems",
  description:
    "Technology services for businesses — web development, AI automation, custom software, SaaS, business systems, cloud solutions, and more.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A] pt-[74px]">
      {/* ==================== NAVIGATION ==================== */}
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
              className="flex items-center gap-2 text-sm font-semibold text-[#334155] transition-colors hover:text-[#B45309]"
            >
              <ArrowLeft className="h-4 w-4" />
              Home
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

      {/* ==================== PAGE HEADER ==================== */}
      <section className="relative overflow-hidden bg-[#0F172A]">
        {/* Background grid */}
        <div className="pointer-events-none absolute inset-0 bg-grid-pattern" />

        {/* Ambient glow */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-[#D97706]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-16 lg:px-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-white/40">
            <Link href="/" className="transition-colors hover:text-white/70">
              Home
            </Link>
            <span>/</span>
            <span className="text-white/60">Services</span>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F59E0B]">
                Our Specialisations
              </p>

              <h1 className="mt-4 text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-[44px]">
                Everything your business needs to build, automate, and scale.
              </h1>
            </div>

            <p className="max-w-md text-sm leading-7 text-white/60 lg:text-base lg:leading-8">
              From high-performance websites and custom software to autonomous AI
              pipelines and cloud infrastructure — click on any capability below
              to see why Frontier Systems builds it better.
            </p>
          </div>

          {/* Quick nav pills */}
          <div className="mt-10 flex flex-wrap gap-2">
            {serviceCategories.map((category) => (
              <a
                key={category.slug}
                href={`#${category.slug}`}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 ${
                  category.highlight
                    ? "border border-[#F59E0B]/30 bg-[#F59E0B]/10 text-[#F59E0B] hover:bg-[#F59E0B]/20"
                    : "border border-white/10 bg-white/5 text-white/60 hover:border-white/20 hover:text-white/80"
                }`}
              >
                <ServiceIcon name={category.iconName} className="h-3.5 w-3.5" />
                {category.title}
                <span
                  className={`ml-1 rounded-full px-1.5 py-0.5 text-[10px] ${
                    category.highlight
                      ? "bg-[#F59E0B]/20 text-[#F59E0B]"
                      : "bg-white/10 text-white/40"
                  }`}
                >
                  {category.services.length}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SERVICE CATEGORIES ==================== */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {serviceCategories.map((category, categoryIndex) => {
          const isLast = categoryIndex === serviceCategories.length - 1;

          return (
            <section
              key={category.slug}
              id={category.slug}
              className={`scroll-mt-20 py-16 lg:py-20 ${
                !isLast ? "border-b border-[#E2E8F0]" : ""
              }`}
            >
              {/* Category header */}
              <div className="flex flex-col gap-3">
                <div className="flex flex-wrap items-center gap-3">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                      category.highlight
                        ? "bg-[#D97706] text-white"
                        : "bg-[#0F172A] text-white"
                    }`}
                  >
                    <ServiceIcon name={category.iconName} className="h-5 w-5" />
                  </div>

                  <h2 className="text-2xl font-extrabold tracking-tight text-[#0F172A] sm:text-3xl">
                    {category.title}
                  </h2>

                  {category.highlight && (
                    <span className="rounded-full border border-[#FDE68A] bg-[#FFFBEB] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#B45309]">
                      Core Specialism
                    </span>
                  )}
                </div>

                <p className="max-w-3xl text-sm leading-relaxed text-[#64748B]">
                  {category.description}
                </p>
              </div>

              {/* Service grid - Each card is a direct link to the service detail page */}
              <div
                className={`mt-10 grid gap-5 ${
                  category.services.length === 6
                    ? "sm:grid-cols-2 lg:grid-cols-3"
                    : "sm:grid-cols-2"
                }`}
              >
                {category.services.map((service) => {
                  return (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className={`group relative flex flex-col justify-between overflow-hidden rounded-xl border p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${
                        category.highlight
                          ? "border-[#FDE68A]/60 bg-white hover:border-[#D97706] hover:shadow-[0_12px_35px_rgba(217,119,6,0.08)]"
                          : "border-[#E2E8F0] bg-white hover:border-[#94A3B8] hover:shadow-[0_12px_35px_rgba(15,23,42,0.06)]"
                      }`}
                    >
                      <div>
                        <div className="flex items-start justify-between">
                          <div
                            className={`flex h-11 w-11 items-center justify-center rounded-lg transition-colors ${
                              category.highlight
                                ? "bg-[#FFFBEB] text-[#B45309] group-hover:bg-[#FEF3C7]"
                                : "bg-[#F1F5F9] text-[#475569] group-hover:bg-[#E2E8F0]"
                            }`}
                          >
                            <ServiceIcon
                              name={service.iconName}
                              className="h-5 w-5"
                            />
                          </div>

                          <div className="flex items-center gap-1.5 text-xs font-bold text-[#D97706] opacity-0 transition-all duration-200 group-hover:opacity-100">
                            <span>Explore</span>
                            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                          </div>
                        </div>

                        <h3 className="mt-5 text-lg font-bold text-[#0F172A] group-hover:text-[#B45309] transition-colors">
                          {service.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-[#64748B]">
                          {service.shortDescription}
                        </p>
                      </div>

                      <div className="mt-6 flex items-center justify-end border-t border-[#F1F5F9] pt-4">
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B45309] transition-transform group-hover:translate-x-1">
                          <span>Explore service</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>

              {/* Category footer */}
              <div className="mt-6 flex items-center justify-between">
                <span className="text-xs text-[#94A3B8]">
                  {category.services.length} services in {category.title}
                </span>

                <Link
                  href="/contact"
                  className={`inline-flex items-center gap-2 text-xs font-bold transition-colors ${
                    category.highlight
                      ? "text-[#B45309] hover:text-[#92400E]"
                      : "text-[#475569] hover:text-[#0F172A]"
                  }`}
                >
                  Discuss a project in {category.title}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </section>
          );
        })}
      </div>

      {/* ==================== BOTTOM CTA ==================== */}
      <section className="bg-[#0F172A]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F59E0B]">
                Ready to start?
              </p>

              <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl">
                Tell us what you need built.
              </h2>

              <p className="mt-4 max-w-lg text-sm leading-7 text-white/50">
                Whether it&apos;s a website, software, automation, or an idea
                you&apos;re still shaping — our senior engineering team is ready
                to talk.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <a
                href="mailto:hello@frontiersystems.co"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#D97706] px-6 text-sm font-bold text-white transition-colors hover:bg-[#B45309]"
              >
                hello@frontiersystems.co
                <ArrowRight className="h-4 w-4" />
              </a>

              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/15 px-6 text-sm font-semibold text-white transition-colors hover:border-white/30 hover:bg-white/5"
              >
                Start a Conversation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="border-t border-white/5 bg-[#020617]">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
          <div className="grid gap-10 md:grid-cols-4">
            {/* Brand */}
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/favicon.ico"
                  alt="Frontier Systems"
                  className="h-9 w-9 rounded-sm"
                />

                <span className="text-sm font-extrabold tracking-[0.12em] text-white">
                  FRONTIER SYSTEMS
                </span>
              </Link>

              <p className="mt-5 text-sm font-semibold text-white/50">
                Technology. Automation. Built for What&apos;s Next.
              </p>

              <p className="mt-2 max-w-sm text-sm leading-6 text-white/30">
                UK-based technology solutions for businesses worldwide.
              </p>

              <div className="mt-4 text-xs leading-5 text-white/35">
                <p className="font-semibold text-white/60">Frontier Systems</p>
                <p>22 Gladstone Street, Walsall</p>
                <p>WS2 8BL, United Kingdom</p>
              </div>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-[11px] font-bold uppercase tracking-widest text-white/25">
                Company
              </h3>

              <div className="mt-5 space-y-3">
                <Link
                  href="/#why"
                  className="block text-sm text-white/45 transition-colors hover:text-[#F59E0B]"
                >
                  About
                </Link>

                <Link
                  href="/services"
                  className="block text-sm text-white/45 transition-colors hover:text-[#F59E0B]"
                >
                  Services
                </Link>

                <Link
                  href="/contact"
                  className="block text-sm text-white/45 transition-colors hover:text-[#F59E0B]"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Connect */}
            <div>
              <h3 className="text-[11px] font-bold uppercase tracking-widest text-white/25">
                Connect
              </h3>

              <div className="mt-5 space-y-3">
                <a
                  href="mailto:hello@frontiersystems.co"
                  className="block text-sm text-white/45 transition-colors hover:text-[#F59E0B]"
                >
                  hello@frontiersystems.co
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition-colors hover:text-[#F59E0B]"
                >
                  Start a Conversation
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <p className="pt-2 text-xs leading-relaxed text-white/35">
                  <span className="block font-medium text-white/50">Office</span>
                  22 Gladstone Street, Walsall, WS2 8BL
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-4 border-t border-white/5 pt-6 text-xs text-white/20 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © <span suppressHydrationWarning>{new Date().getFullYear()}</span> Frontier Systems. All rights
              reserved.
            </p>

            <div className="flex gap-5">
              <Link href="/privacy" className="transition-colors hover:text-white/60">
                Privacy Policy
              </Link>

              <Link href="/terms" className="transition-colors hover:text-white/60">
                Terms of Service
              </Link>

              <Link href="/cookies" className="transition-colors hover:text-white/60">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
