import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  Clock,
  Code2,
  HelpCircle,
  Layers,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaqAccordion } from "@/components/faq-accordion";
import { ServiceIcon } from "@/components/service-icon";
import {
  getAllServices,
  getRelatedServices,
  getServiceBySlug,
} from "@/lib/data/services";

export async function generateStaticParams() {
  const services = getAllServices();
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found | Frontier Systems",
      description: "The requested service could not be found.",
    };
  }

  return {
    title: `${service.title} | Frontier Systems`,
    description: service.shortDescription,
    openGraph: {
      title: `${service.title} — Built by Frontier Systems`,
      description: service.tagline,
      type: "website",
      url: `https://frontiersystems.co/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = getRelatedServices(service.slug, 3);

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
              href="/services"
              className="flex items-center gap-2 text-sm font-semibold text-[#475569] transition-colors hover:text-[#B45309]"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:inline">All Services</span>
              <span className="sm:hidden">Services</span>
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

      {/* ==================== HERO SECTION ==================== */}
      <section className="relative overflow-hidden bg-[#0F172A] text-white">
        {/* Subtle grid pattern */}
        <div className="pointer-events-none absolute inset-0 bg-grid-pattern" />

        {/* Ambient gold glow */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-[#D97706]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-12 sm:px-8 sm:pb-20 sm:pt-16 lg:px-10">
          {/* Breadcrumb Navigation */}
          <nav className="flex flex-wrap items-center gap-2 text-xs text-white/50">
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/services"
              className="transition-colors hover:text-white"
            >
              Services
            </Link>
            <span>/</span>
            <Link
              href={`/services#${service.categorySlug}`}
              className="transition-colors hover:text-white"
            >
              {service.category}
            </Link>
            <span>/</span>
            <span className="font-semibold text-[#F59E0B]">{service.title}</span>
          </nav>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              {/* Category Pill */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[#F59E0B]/30 bg-[#F59E0B]/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#F59E0B]">
                <ServiceIcon name={service.iconName} className="h-3.5 w-3.5" />
                <span>{service.category}</span>
                {service.highlight && (
                  <>
                    <span className="h-1 w-1 rounded-full bg-[#F59E0B]" />
                    <span className="text-white/80">Core Specialism</span>
                  </>
                )}
              </div>

              {/* Title */}
              <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                {service.title}
              </h1>

              {/* Tagline */}
              <p className="mt-4 text-lg font-medium leading-relaxed text-[#FDE68A] sm:text-xl">
                {service.tagline}
              </p>

              {/* Clear description for tech & non-tech */}
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
                {service.shortDescription}
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#D97706] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#D97706]/20 transition-all hover:bg-[#B45309]"
                >
                  Start a Conversation
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <a
                  href="#why-better"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-[#F59E0B] hover:text-[#F59E0B]"
                >
                  Why We Build It Better
                  <ArrowRight className="h-3.5 w-3.5 rotate-90" />
                </a>
              </div>
            </div>

            {/* Clean Project Snapshot Card */}
            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur sm:p-7">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#F59E0B]">
                  PROJECT SNAPSHOT
                </span>
                <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] font-semibold text-white/80">
                  UK Senior Team
                </span>
              </div>

              <div className="mt-5 space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <Check className="h-4 w-4 shrink-0 text-[#F59E0B]" />
                  <span className="text-white/80">
                    <strong className="text-white">Custom Architecture:</strong> Built for your specific workflow
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Check className="h-4 w-4 shrink-0 text-[#F59E0B]" />
                  <span className="text-white/80">
                    <strong className="text-white">100% IP Ownership:</strong> You own all source code and assets
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Check className="h-4 w-4 shrink-0 text-[#F59E0B]" />
                  <span className="text-white/80">
                    <strong className="text-white">Direct Communication:</strong> Talk with senior builders, not juniors
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Check className="h-4 w-4 shrink-0 text-[#F59E0B]" />
                  <span className="text-white/80">
                    <strong className="text-white">Built for Speed:</strong> High-performance, secure, and mobile-ready
                  </span>
                </div>
              </div>

              {/* Technologies */}
              <div className="mt-6 border-t border-white/10 pt-4">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-[11px] font-medium text-white/40 mr-1">Stack:</span>
                  {service.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded bg-white/10 px-2 py-0.5 text-[11px] font-medium text-white/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== WHY WE BUILD IT BETTER ==================== */}
      <section id="why-better" className="scroll-mt-20 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B45309]">
              The Frontier Difference
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl">
              Why we build {service.title.toLowerCase()} better.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#64748B] sm:text-base">
              We combine deep technical expertise with clear, business-first communication.
              Here is what sets our approach apart:
            </p>
          </div>

          {/* Clean Differentiator Cards */}
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {service.whyBetter.map((item, index) => (
              <div
                key={item.title}
                className="rounded-xl border border-[#E2E8F0] bg-white p-6 shadow-sm transition-all hover:border-[#D97706] hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FFFBEB] text-xs font-bold text-[#B45309]">
                    0{index + 1}
                  </span>
                  <h3 className="text-base font-bold text-[#0F172A]">
                    {item.title}
                  </h3>
                </div>

                <p className="mt-3 text-sm leading-6 text-[#475569]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* ==================== PLAIN-ENGLISH COMPARISON ==================== */}
          <div className="mt-14 overflow-hidden rounded-xl border border-[#E2E8F0] bg-white shadow-sm">
            <div className="border-b border-[#E2E8F0] bg-[#F8FAFC] px-6 py-4">
              <h3 className="text-base font-bold text-[#0F172A]">
                How we compare to typical agencies &amp; freelancers
              </h3>
            </div>

            <div className="grid divide-y divide-[#E2E8F0] md:grid-cols-2 md:divide-x md:divide-y-0">
              {/* Typical Agencies */}
              <div className="p-6 bg-rose-50/20">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-600">
                  <X className="h-4 w-4" />
                  The Typical Agency Way
                </div>
                <div className="mt-5 space-y-3">
                  {service.comparison.typical.map((point, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <X className="h-4 w-4 shrink-0 text-rose-500 mt-0.5" />
                      <p className="text-sm leading-relaxed text-[#64748B]">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Frontier Systems */}
              <div className="p-6 bg-amber-50/20">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B45309]">
                  <Check className="h-4 w-4" />
                  The Frontier Systems Way
                </div>
                <div className="mt-5 space-y-3">
                  {service.comparison.frontier.map((point, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <Check className="h-4 w-4 shrink-0 text-[#B45309] mt-0.5" />
                      <p className="text-sm font-medium leading-relaxed text-[#0F172A]">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== WHAT YOU RECEIVE (DELIVERABLES) ==================== */}
      <section className="border-t border-[#E2E8F0] bg-[#F8FAFC] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B45309]">
              Included in Your Project
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#0F172A]">
              What you receive.
            </h2>
            <p className="mt-2 text-sm text-[#64748B]">
              Every project comes complete, fully tested, and ready to drive results.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.deliverables.map((item, index) => (
              <div
                key={item.title}
                className="rounded-lg border border-[#E2E8F0] bg-white p-5 shadow-sm transition-all hover:border-[#CBD5E1]"
              >
                <div className="flex items-center gap-2.5">
                  <div className="flex h-6 w-6 items-center justify-center rounded bg-[#0F172A] text-[11px] font-bold text-white">
                    {index + 1}
                  </div>
                  <h3 className="text-sm font-bold text-[#0F172A]">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-2.5 text-xs leading-5 text-[#64748B]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 4-STEP PROCESS ==================== */}
      <section className="bg-[#0F172A] text-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F59E0B]">
              Simple &amp; Transparent
            </span>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
              How we work with you.
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-xs leading-relaxed text-white/60 sm:text-sm">
              Clear milestones from day one. No surprises, no confusing jargon, and full visibility throughout.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step) => (
              <div
                key={step.step}
                className="rounded-xl border border-white/10 bg-white/[0.035] p-5"
              >
                <div className="text-2xl font-black text-[#F59E0B]">
                  {step.step}
                </div>
                <h3 className="mt-3 text-base font-bold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs leading-5 text-white/60">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FAQS ==================== */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B45309]">
              Common Questions
            </span>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#0F172A] sm:text-3xl">
              Frequently asked questions.
            </h2>
          </div>

          <div className="mt-10">
            <FaqAccordion faqs={service.faqs} />
          </div>
        </div>
      </section>

      {/* ==================== RELATED SERVICES ==================== */}
      <section className="border-t border-[#E2E8F0] bg-white py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#94A3B8]">
                Explore Further
              </span>
              <h3 className="text-xl font-extrabold text-[#0F172A]">
                Related Capabilities
              </h3>
            </div>

            <Link
              href="/services"
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#B45309] hover:underline"
            >
              View all 18 services
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedServices.map((rel) => (
              <Link
                key={rel.slug}
                href={`/services/${rel.slug}`}
                className="group rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-5 transition-all hover:border-[#D97706] hover:bg-white hover:shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-md bg-white p-1.5 text-[#475569] shadow-sm group-hover:bg-[#FFFBEB] group-hover:text-[#B45309]">
                    <ServiceIcon name={rel.iconName} className="h-4 w-4" />
                  </span>
                  <ArrowRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100 text-[#B45309]" />
                </div>
                <h4 className="mt-3 text-sm font-bold text-[#0F172A] group-hover:text-[#B45309]">
                  {rel.title}
                </h4>
                <p className="mt-1 text-xs leading-5 text-[#64748B]">
                  {rel.shortDescription}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== BOTTOM CTA ==================== */}
      <section className="bg-[#0F172A] text-white py-16">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <span className="inline-block rounded-full border border-[#F59E0B]/30 bg-[#F59E0B]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-[#F59E0B]">
            Get Started
          </span>

          <h2 className="mt-4 text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
            Ready to build your {service.title.toLowerCase()}?
          </h2>

          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-white/60">
            Talk directly with our UK team. We&apos;ll discuss your goals, answer any questions,
            and outline a clear, realistic plan with zero pressure.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-[#D97706] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#D97706]/20 transition-all hover:bg-[#B45309]"
            >
              Start a Conversation
              <ArrowRight className="h-4 w-4" />
            </Link>

            <a
              href="mailto:hello@frontiersystems.co"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/40 hover:text-[#F59E0B]"
            >
              hello@frontiersystems.co
            </a>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="border-t border-[#E2E8F0] bg-[#0B1120] text-white">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
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

            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-white/50">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <Link href="/services" className="hover:text-white">
                All Services
              </Link>
              <Link href="/privacy" className="hover:text-white">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-white">
                Terms
              </Link>
              <Link href="/cookies" className="hover:text-white">
                Cookies
              </Link>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
              <a href="mailto:hello@frontiersystems.co" className="hover:text-white">
                hello@frontiersystems.co
              </a>
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
