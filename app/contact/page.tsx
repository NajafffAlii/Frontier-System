import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MessageSquare, Sparkles } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Start a Conversation | Frontier Systems (UK)",
  description:
    "Contact Frontier Systems. Tell us about your business, challenge, or the software and automation you want to build. We'll explore the right way forward.",
};

export default function ContactPage() {
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
              className="hidden sm:block text-sm font-semibold text-[#475569] transition-colors hover:text-[#B45309]"
            >
              Services
            </Link>

            <a
              href="mailto:hello@frontiersystems.co"
              className="inline-flex items-center gap-2 rounded-lg border border-[#CBD5E1] bg-white px-4 py-2 text-xs font-bold text-[#0F172A] transition-all hover:border-[#D97706] hover:text-[#B45309]"
            >
              hello@frontiersystems.co
            </a>
          </div>
        </div>
      </header>

      {/* ==================== HERO SECTION ==================== */}
      <section className="relative overflow-hidden bg-[#0F172A] text-white">
        <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-60" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-96 -translate-x-1/2 rounded-full bg-[#D97706]/15 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-18 lg:px-10 lg:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-md border border-[#FDE68A]/30 bg-[#78350F]/40 px-3 py-1 text-xs font-semibold text-[#F59E0B]">
              <MessageSquare className="h-3.5 w-3.5" />
              <span>GET IN TOUCH WITH OUR SENIOR TEAM</span>
            </div>

            <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Let&apos;s build what&apos;s next.
            </h1>

            <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg sm:leading-8">
              Tell us about your business, your challenge, or the system you want to build. We&apos;ll
              explore the right way forward with transparent scoping and practical engineering.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== FORM SECTION ==================== */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <ContactForm />
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
