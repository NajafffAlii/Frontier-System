"use client";

import {
  ArrowDown,
  ArrowRight,
  Bot,
  ChevronDown,
  Code2,
  Database,
  Globe2,
  Menu,
  Network,
  Settings2,
  Sparkles,
  Workflow,
  X,
} from "lucide-react";
import Link from "next/link";
import { useState, useRef } from "react";
import { serviceCategories } from "@/lib/data/services";

const categoryIcons: Record<string, React.ElementType> = {
  "digital-development": Globe2,
  "ai-automation": Bot,
  "business-systems": Workflow,
  "data-infrastructure": Database,
};

const services = [
  {
    title: "Web Development",
    slug: "web-development",
    description:
      "Fast, responsive websites and web applications designed around your business.",
    icon: Globe2,
    category: "DIGITAL",
  },
  {
    title: "AI Automation",
    slug: "ai-automation",
    description:
      "Automate repetitive tasks and business workflows with practical AI solutions.",
    icon: Bot,
    category: "AI & AUTOMATION",
    featured: true,
  },
  {
    title: "Custom Software",
    slug: "custom-software-development",
    description:
      "Purpose-built software designed to solve specific business problems.",
    icon: Settings2,
    category: "SOFTWARE",
  },
  {
    title: "SaaS & Applications",
    slug: "saas-development",
    description:
      "Scalable digital products, SaaS platforms, and applications from concept to deployment.",
    icon: Sparkles,
    category: "PRODUCT",
  },
];

const reasons = [
  {
    title: "Business First",
    text: "We start with your business and its requirements, not a pre-selected technology.",
  },
  {
    title: "Practical Solutions",
    text: "We focus on useful systems that improve efficiency, experience, or operations.",
  },
  {
    title: "Modern Engineering",
    text: "We use current technologies and development practices to build reliable systems.",
  },
  {
    title: "Long-Term Thinking",
    text: "We build solutions that can adapt as your business and requirements change.",
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "We understand your business, goals, and the problem you need to solve.",
  },
  {
    number: "02",
    title: "Build",
    description:
      "We design and develop the right technology around your requirements.",
  },
  {
    number: "03",
    title: "Launch",
    description:
      "We deploy the solution and make sure everything works as intended.",
  },
  {
    number: "04",
    title: "Support",
    description:
      "We continue improving and supporting your system as your business grows.",
  },
];

const architectureStages = [
  {
    id: "build",
    icon: Code2,
    label: "Build",
    sub: "Software & Web",
    capability: "Software & Web",
  },
  {
    id: "automate",
    icon: Bot,
    label: "Automate",
    sub: "AI & Workflows",
    capability: "AI & Workflows",
  },
  {
    id: "integrate",
    icon: Workflow,
    label: "Integrate",
    sub: "Systems & APIs",
    capability: "Systems & APIs",
  },
  {
    id: "scale",
    icon: Network,
    label: "Scale",
    sub: "Cloud & Infra",
    capability: "Cloud & Infra",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [hoveredStage, setHoveredStage] = useState<string | null>(null);
  const [selectedStage, setSelectedStage] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const activeStageId = hoveredStage || selectedStage;
  const activeStage = architectureStages.find((s) => s.id === activeStageId);

  const closeMenu = () => {
    setMenuOpen(false);
    setMobileServicesOpen(false);
  };

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 150);
  };

  const handleServiceClick = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setServicesDropdownOpen(false);
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A] pt-[74px]">
      {/* ==================== NAVIGATION ==================== */}

      <header className="fixed top-0 inset-x-0 z-50 border-b border-[#E2E8F0] bg-[#F8FAFC]/95 backdrop-blur shadow-xs">
        <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          {/* BRAND */}

          <a
            href="#home"
            onClick={closeMenu}
            className="flex items-center gap-3"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/favicon.ico"
              alt="Frontier Systems"
              className="h-9 w-9 rounded-sm"
            />

            <span className="text-sm font-extrabold tracking-[0.14em] text-[#0F172A]">
              FRONTIER SYSTEMS
            </span>
          </a>

          {/* DESKTOP NAV */}

          <nav className="hidden items-center gap-8 md:flex">
            {/* SERVICES DROPDOWN */}

            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href="#services"
                onClick={handleServiceClick}
                className="flex items-center gap-1.5 py-7 text-sm font-semibold text-[#334155] transition-colors hover:text-[#B45309]"
              >
                <span>Services</span>
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    servicesDropdownOpen
                      ? "rotate-180 text-[#B45309]"
                      : "text-[#64748B]"
                  }`}
                />
              </a>

              {/* DROPDOWN */}

              <div
                className={`absolute left-1/2 top-full w-[860px] -translate-x-[28%] rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-[0_24px_60px_rgba(15,23,42,0.14)] transition-all duration-200 ${
                  servicesDropdownOpen
                    ? "visible translate-y-0 opacity-100 pointer-events-auto"
                    : "invisible translate-y-2 opacity-0 pointer-events-none"
                }`}
              >
                <div className="mb-4 flex items-center justify-between border-b border-[#E2E8F0] pb-3">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#B45309]">
                      Technology Services
                    </p>
                    <p className="mt-0.5 text-xs text-[#64748B]">
                      18 purpose-built services across 4 core specialisations.
                    </p>
                  </div>

                  <div className="flex items-center gap-3 text-xs">
                    <a
                      href="#services"
                      onClick={handleServiceClick}
                      className="font-semibold text-[#475569] hover:text-[#0F172A] transition-colors"
                    >
                      Overview on page
                    </a>
                    <span className="text-[#CBD5E1]">·</span>
                    <Link
                      href="/services"
                      onClick={handleServiceClick}
                      className="inline-flex items-center gap-1 font-bold text-[#B45309] hover:text-[#92400E] transition-colors"
                    >
                      View all 18 services
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-3.5">
                  {serviceCategories.map((category) => {
                    const CategoryIcon =
                      categoryIcons[category.slug] || Globe2;
                    const isHighlight = category.highlight;

                    return (
                      <div
                        key={category.slug}
                        className={`flex flex-col rounded-lg border p-3.5 transition-colors ${
                          isHighlight
                            ? "border-[#FDE68A] bg-[#FFFBEB]/60"
                            : "border-[#E2E8F0] bg-[#F8FAFC]/60"
                        }`}
                      >
                        <div className="flex items-center gap-2 border-b border-[#E2E8F0] pb-2.5">
                          <div
                            className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md ${
                              isHighlight
                                ? "bg-[#FEF3C7] text-[#B45309]"
                                : "bg-white text-[#475569] shadow-xs"
                            }`}
                          >
                            <CategoryIcon className="h-3.5 w-3.5" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="truncate text-xs font-bold text-[#0F172A]">
                              {category.title}
                            </h3>
                          </div>
                        </div>

                        <div className="mt-2.5 flex flex-col space-y-1">
                          {category.services.map((svc) => (
                            <Link
                              key={svc.slug}
                              href={`/services/${svc.slug}`}
                              onClick={handleServiceClick}
                              className="group/item flex items-center justify-between rounded px-2 py-1.5 text-[11.5px] font-medium text-[#475569] transition-colors hover:bg-white hover:text-[#B45309] hover:shadow-xs"
                              title={svc.title}
                            >
                              <span className="truncate pr-1 transition-transform group-hover/item:translate-x-0.5">
                                {svc.title}
                              </span>
                              <ArrowRight className="h-3 w-3 shrink-0 text-[#D97706] opacity-0 transition-opacity group-hover/item:opacity-100" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-4 flex items-center justify-between rounded-lg bg-[#F1F5F9] px-4 py-2.5 text-xs">
                  <span className="text-[#475569]">
                    Need a tailored architecture or advice on where to start?
                  </span>
                  <Link
                    href="/contact"
                    onClick={handleServiceClick}
                    className="inline-flex items-center gap-1 font-bold text-[#0F172A] transition-colors hover:text-[#B45309]"
                  >
                    Start a Conversation
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>

            <a
              href="#automation"
              className="text-sm font-semibold text-[#334155] transition-colors hover:text-[#B45309]"
            >
              AI Automation
            </a>

            <a
              href="#why"
              className="text-sm font-semibold text-[#334155] transition-colors hover:text-[#B45309]"
            >
              Why Frontier
            </a>

            <a
              href="#approach"
              className="text-sm font-semibold text-[#334155] transition-colors hover:text-[#B45309]"
            >
              Approach
            </a>
          </nav>

          {/* CTA */}

          <Link
            href="/contact"
            className="hidden items-center gap-2 rounded-lg bg-[#0F172A] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#D97706] md:flex"
          >
            Start a Conversation
            <ArrowRight className="h-4 w-4" />
          </Link>

          {/* MOBILE BUTTON */}

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#E2E8F0] bg-white md:hidden"
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* MOBILE MENU */}

        {menuOpen && (
          <div className="border-t border-[#E2E8F0] bg-white shadow-xl md:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col px-5 py-3 sm:px-8">
              {/* Mobile Services Accordion */}
              <div className="border-b border-[#E2E8F0] py-3">
                <div className="flex items-center justify-between">
                  <a
                    href="#services"
                    onClick={closeMenu}
                    className="text-sm font-bold text-[#0F172A] hover:text-[#B45309]"
                  >
                    Services
                  </a>
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    aria-label="Toggle mobile services menu"
                    className="flex h-8 w-8 items-center justify-center rounded-md bg-[#F1F5F9] text-[#475569]"
                  >
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        mobileServicesOpen ? "rotate-180 text-[#B45309]" : ""
                      }`}
                    />
                  </button>
                </div>

                {mobileServicesOpen && (
                  <div className="mt-3 space-y-3 rounded-lg bg-[#F8FAFC] p-3 text-xs">
                    <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-2">
                      <span className="font-bold uppercase tracking-wider text-[#B45309]">
                        All 18 Services
                      </span>
                      <Link
                        href="/services"
                        onClick={closeMenu}
                        className="font-bold text-[#B45309]"
                      >
                        View all →
                      </Link>
                    </div>

                    <div className="space-y-3">
                      {serviceCategories.map((cat) => (
                        <div key={cat.slug}>
                          <p className="font-bold text-[#0F172A]">{cat.title}</p>
                          <div className="mt-1 space-y-1 border-l-2 border-[#E2E8F0] pl-2.5">
                            {cat.services.map((s) => (
                              <Link
                                key={s.slug}
                                href={`/services/${s.slug}`}
                                onClick={closeMenu}
                                className="block py-1 text-[#475569] hover:text-[#B45309]"
                              >
                                {s.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {[
                ["AI Automation", "#automation"],
                ["Why Frontier", "#why"],
                ["Approach", "#approach"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={closeMenu}
                  className="border-b border-[#E2E8F0] py-3.5 text-sm font-semibold text-[#334155]"
                >
                  {label}
                </a>
              ))}

              <div className="py-4">
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#0F172A] text-sm font-bold text-white transition-colors hover:bg-[#D97706]"
                >
                  Start a Conversation
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* ==================== HERO ==================== */}

      <section id="home" className="scroll-mt-20">
        <div className="mx-auto max-w-7xl px-5 pb-16 pt-16 sm:px-8 sm:pt-20 lg:px-10 lg:pb-20 lg:pt-24">
          <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="text-sm font-extrabold tracking-[0.16em] text-[#0F172A]">
                FRONTIER SYSTEMS
              </p>

              <p className="mt-5 text-sm font-bold text-[#B45309] sm:text-base">
                Technology. Automation. Built for What&apos;s Next.
              </p>

              <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight text-[#0F172A] sm:text-5xl lg:text-[60px]">
                We build what business needs.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-[#475569] sm:text-lg sm:leading-8">
                We design and engineer high-performance websites, custom software,
                and AI automation that help modern businesses operate and scale.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#services"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#0F172A] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#D97706]"
                >
                  Explore Services
                  <ArrowRight className="h-4 w-4" />
                </a>

                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-[#CBD5E1] bg-white px-6 text-sm font-semibold text-[#0F172A] transition-colors hover:border-[#D97706] hover:text-[#B45309]"
                >
                  Start a Conversation
                </Link>
              </div>
            </div>

            {/* TECHNICAL VISUAL */}

            <div className="hidden lg:block">
              <div className="relative overflow-hidden rounded-lg bg-[#0F172A] p-8 shadow-[0_25px_60px_rgba(15,23,42,0.15)]">
                {/* Grid pattern background */}
                <div className="pointer-events-none absolute inset-0 bg-blueprint-pattern" />

                {/* Glow - softened density */}
                <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D97706]/6 blur-2xl pointer-events-none" />

                {/* Content */}
                <div className="relative">
                  {/* Top label */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-white/20">
                      ARCHITECTURE
                    </span>

                    <span className="flex items-center gap-2 text-[10px] font-bold tracking-wider text-[#F59E0B]">
                      <span className="relative flex h-3.5 w-3.5 items-center justify-center">
                        {/* Pulse / Ping growing ring 1 */}
                        <span className="absolute inline-flex h-full w-full rounded-full bg-[#F59E0B] opacity-75 animate-ping" />
                        {/* Pulse / Ping growing ring 2 (delayed) */}
                        <span className="absolute inline-flex h-full w-full rounded-full border border-[#F59E0B] opacity-50 animate-ping [animation-delay:400ms]" />
                        {/* Ambient pulse halo */}
                        <span className="absolute inline-flex h-2 w-2 rounded-full bg-[#F59E0B]/30 animate-pulse" />
                        {/* Central beacon dot */}
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#FEF3C7] ring-1.5 ring-[#F59E0B] shadow-[0_0_8px_#F59E0B]" />
                      </span>
                      LIVE
                    </span>
                  </div>

                  {/* Center node with dynamic capability transformation & growing rings outside main logo */}
                  <div className="mt-7 flex flex-col items-center justify-center">
                    <div className="relative flex items-center justify-center">
                      {/* Growing circular rings outside main logo with pulse/ping animation */}
                      <div className="pointer-events-none absolute h-16 w-16 rounded-full border border-[#F59E0B]/50 logo-grow-ring shadow-[0_0_10px_rgba(245,158,11,0.2)]" />
                      <div className="pointer-events-none absolute h-16 w-16 rounded-full border border-[#D97706]/40 logo-grow-ring-delay-1 shadow-[0_0_10px_rgba(217,119,6,0.15)]" />
                      <div className="pointer-events-none absolute h-16 w-16 rounded-full border border-[#F59E0B]/30 logo-grow-ring-delay-2 shadow-[0_0_10px_rgba(245,158,11,0.1)]" />

                      {/* Growing rounded-rect contour ring pulsing outside logo */}
                      <div className="pointer-events-none absolute h-16 w-16 rounded-2xl border border-[#F59E0B]/40 logo-grow-ring shadow-[0_0_12px_rgba(245,158,11,0.25)]" />

                      {/* Ambient radial glow - softened density */}
                      <div className="absolute h-20 w-20 rounded-full bg-[#D97706]/15 blur-lg pointer-events-none" />

                      {/* Main Logo Hub - changes dynamically when any stage is hovered or clicked */}
                      <div
                        className={`relative flex h-16 w-16 items-center justify-center rounded-2xl border transition-all duration-300 ${
                          activeStage
                            ? "border-[#FDE68A]/70 bg-gradient-to-br from-[#B45309] to-[#78350F] shadow-[0_0_18px_rgba(245,158,11,0.3)] scale-105"
                            : "border-[#FDE68A]/35 bg-gradient-to-br from-[#D97706] to-[#B45309] shadow-[0_0_16px_rgba(217,119,6,0.2)] hover:scale-105"
                        }`}
                      >
                        {activeStage ? (
                          <div
                            key={activeStage.id}
                            className="flex items-center justify-center animate-in fade-in zoom-in-75 duration-200"
                          >
                            <activeStage.icon className="h-8 w-8 text-[#FEF3C7] drop-shadow-[0_0_6px_rgba(254,243,199,0.7)]" />
                          </div>
                        ) : (
                          /* eslint-disable-next-line @next/next/no-img-element */
                          <img
                            src="/favicon.ico"
                            alt="Frontier Systems"
                            className="h-9 w-9 rounded-sm drop-shadow transition-all duration-300"
                          />
                        )}
                      </div>
                    </div>

                    {/* Active capability subtitle under the logo hub */}
                    <div className="mt-2.5 h-4 flex items-center justify-center">
                      {activeStage ? (
                        <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-[#FDE68A] transition-all duration-200 animate-in fade-in">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#F59E0B]" />
                          {activeStage.capability}
                        </span>
                      ) : (
                        <span className="text-[10px] font-medium tracking-wide text-white/35">
                          Frontier Systems
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Feeder line connecting hub to stages */}
                  <div className="relative mx-auto mt-3 h-5 w-px overflow-hidden bg-gradient-to-b from-[#D97706]/70 via-[#F59E0B]/40 to-white/10">
                    <div className="absolute h-2 w-full bg-[#F59E0B] shadow-[0_0_5px_#F59E0B] hub-light-pulse" />
                  </div>

                  {/* Connection track + 4 stages */}
                  <div className="relative mt-2">
                    {/* Horizontal connection track between the four stages */}
                    <div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-[44px] -translate-y-1/2">
                      {/* Background track line */}
                      <div className="h-[2px] w-full bg-gradient-to-r from-white/15 via-[#F59E0B]/40 to-white/15" />
                      {/* Ambient track glow - softened */}
                      <div className="absolute inset-0 h-[2px] bg-[#F59E0B]/12 blur-xs" />

                      {/* Small orange light traveling along the connections between the four stages */}
                      <div className="absolute top-1/2 -translate-y-1/2 stage-light-pulse pointer-events-none z-20">
                        <div className="relative flex items-center">
                          {/* Trailing motion streak */}
                          <div className="h-[2px] w-7 bg-gradient-to-r from-transparent via-[#F59E0B]/30 to-[#F59E0B]" />
                          {/* Glowing orange light photon head - softened density */}
                          <div className="relative -ml-1 h-2 w-2 rounded-full bg-[#FEF3C7] shadow-[0_0_4px_1px_#F59E0B,0_0_8px_1.5px_rgba(217,119,6,0.22)] ring-1 ring-[#F59E0B]/50" />
                        </div>
                      </div>

                      {/* Second staggered traveling orange light */}
                      <div className="absolute top-1/2 -translate-y-1/2 stage-light-pulse-delayed pointer-events-none z-20">
                        <div className="relative flex items-center">
                          {/* Trailing motion streak */}
                          <div className="h-[2px] w-7 bg-gradient-to-r from-transparent via-[#F59E0B]/30 to-[#F59E0B]" />
                          {/* Glowing orange light photon head - softened density */}
                          <div className="relative -ml-1 h-2 w-2 rounded-full bg-[#FEF3C7] shadow-[0_0_4px_1px_#F59E0B,0_0_8px_1.5px_rgba(217,119,6,0.22)] ring-1 ring-[#F59E0B]/50" />
                        </div>
                      </div>
                    </div>

                    {/* 4 Stage Nodes - Interactive on cursor hover & click */}
                    <div className="relative z-10 grid grid-cols-4 gap-3">
                      {architectureStages.map((node) => {
                        const NodeIcon = node.icon;
                        const isNodeActive = activeStageId === node.id;

                        return (
                          <div
                            key={node.id}
                            className="group flex flex-col items-center cursor-pointer select-none"
                            onMouseEnter={() => setHoveredStage(node.id)}
                            onMouseLeave={() => setHoveredStage(null)}
                            onClick={() =>
                              setSelectedStage((prev) =>
                                prev === node.id ? null : node.id
                              )
                            }
                          >
                            {/* Vertical connector */}
                            <div
                              className={`h-6 w-px transition-colors duration-200 ${
                                isNodeActive
                                  ? "bg-gradient-to-b from-[#F59E0B]/70 to-[#D97706]/40"
                                  : "bg-gradient-to-b from-white/15 to-white/5 group-hover:from-[#F59E0B]/40 group-hover:to-white/10"
                              }`}
                            />

                            {/* Node Logo Button */}
                            <button
                              type="button"
                              aria-label={`${node.label} - ${node.sub}`}
                              className={`relative flex h-10 w-10 items-center justify-center rounded-lg border transition-all duration-300 ${
                                isNodeActive
                                  ? "border-[#F59E0B] bg-[#78350F] text-[#FDE68A] shadow-[0_0_14px_rgba(245,158,11,0.35)] scale-110"
                                  : "border-white/10 bg-[#1E293B] text-[#94A3B8] shadow-sm group-hover:border-[#F59E0B]/50 group-hover:text-white group-hover:scale-105"
                              }`}
                            >
                              <NodeIcon className="h-4 w-4 transition-transform duration-200" />
                            </button>

                            <p
                              className={`mt-2.5 text-[11px] font-bold transition-colors duration-200 ${
                                isNodeActive
                                  ? "text-[#F59E0B]"
                                  : "text-white/70 group-hover:text-white"
                              }`}
                            >
                              {node.label}
                            </p>

                            <p
                              className={`mt-0.5 text-[9px] transition-colors duration-200 ${
                                isNodeActive ? "text-white/60" : "text-white/30"
                              }`}
                            >
                              {node.sub}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Bottom metrics */}
                  <div className="mt-8 grid grid-cols-3 gap-3 border-t border-white/8 pt-5">
                    {[
                      { value: "18+", label: "Services" },
                      { value: "4", label: "Specialisations" },
                      { value: "UK", label: "Based" },
                    ].map((stat) => (
                      <div key={stat.label} className="text-center">
                        <p className="text-lg font-extrabold text-white/80">
                          {stat.value}
                        </p>

                        <p className="mt-0.5 text-[9px] font-medium uppercase tracking-widest text-white/25">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SERVICES ==================== */}

      <section
        id="services"
        className="scroll-mt-20 border-t border-[#E2E8F0] bg-white"
      >
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#B45309]">
                Our Services
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl">
                What we build.
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-[#64748B] sm:text-base">
              Technology services designed around real business requirements.
            </p>
          </div>

          {/* SERVICE CARDS */}

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <Link
                  key={service.title}
                  href={`/services/${service.slug}`}
                  className={`group relative block overflow-hidden rounded-lg border p-5 sm:p-7 transition-all duration-200 hover:-translate-y-0.5 ${
                    service.featured
                      ? "border-[#FDE68A] bg-[#FFFBEB] shadow-[0_10px_35px_rgba(217,119,6,0.06)] hover:border-[#D97706]"
                      : "border-[#E2E8F0] bg-[#F8FAFC] hover:border-[#94A3B8] hover:shadow-md"
                  }`}
                >
                  {service.featured && (
                    <div className="absolute right-0 top-0 rounded-bl-lg bg-[#D97706] px-3 py-1.5 text-[9px] font-bold tracking-widest text-white">
                      FEATURED
                    </div>
                  )}

                  <div className="flex items-start justify-between">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-lg ${
                        service.featured
                          ? "bg-[#FEF3C7] text-[#B45309]"
                          : "bg-white text-[#475569] shadow-sm"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    <span className="text-[9px] font-bold tracking-widest text-[#94A3B8]">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-bold text-[#0F172A] group-hover:text-[#B45309] transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-3 max-w-lg text-sm leading-7 text-[#475569]">
                    {service.description}
                  </p>

                  <div
                    className={`mt-6 flex items-center gap-2 text-xs font-bold ${
                      service.featured
                        ? "text-[#B45309]"
                        : "text-[#64748B] group-hover:text-[#0F172A]"
                    }`}
                  >
                    Why We Build It Better
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* VIEW ALL SERVICES */}

          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-lg border border-[#CBD5E1] bg-white px-6 py-3 text-sm font-semibold text-[#0F172A] transition-colors hover:border-[#D97706] hover:text-[#B45309]"
            >
              View all services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== AI AUTOMATION ==================== */}

      <section
        id="automation"
        className="scroll-mt-20 bg-[#0F172A] text-white"
      >
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#78350F] text-[#F59E0B]">
                  <Bot className="h-4 w-4" />
                </span>

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F59E0B]">
                  AI & Automation
                </p>
              </div>

              <h2 className="mt-5 max-w-xl text-3xl font-extrabold tracking-tight sm:text-4xl">
                Automate the work that slows you down.
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
                We connect AI with your existing processes and software to
                automate repetitive tasks, move information between systems,
                and create smarter workflows.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-[#F59E0B]"
              >
                Talk to us about automation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* WORKFLOW */}

            <div className="rounded-lg border border-white/10 bg-white/[0.035] p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-widest text-white/30">
                Example workflow
              </p>

              <div className="mt-7 space-y-3">
                <div className="flex items-center justify-between rounded-md border border-white/10 px-5 py-4">
                  <div>
                    <p className="text-sm font-medium text-white/80">
                      Customer enquiry
                    </p>

                    <p className="mt-1 text-xs text-white/35">
                      Incoming information
                    </p>
                  </div>

                  <span className="text-[10px] font-bold tracking-widest text-white/25">
                    INPUT
                  </span>
                </div>

                <div className="flex justify-center">
                  <ArrowDown className="h-4 w-4 text-[#F59E0B]" />
                </div>

                <div className="flex items-center justify-between rounded-md border border-[#D97706]/30 bg-[#D97706]/10 px-5 py-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#78350F]">
                      <Bot className="h-4 w-4 text-[#F59E0B]" />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-white">
                        AI processing
                      </p>

                      <p className="mt-1 text-xs text-white/40">
                        Analyze & classify
                      </p>
                    </div>
                  </div>

                  <span className="text-[10px] font-bold tracking-widest text-[#F59E0B]">
                    AI
                  </span>
                </div>

                <div className="flex justify-center">
                  <ArrowDown className="h-4 w-4 text-[#F59E0B]" />
                </div>

                <div className="flex items-center justify-between rounded-md border border-white/10 px-5 py-4">
                  <div>
                    <p className="text-sm font-medium text-white/80">
                      Automated action
                    </p>

                    <p className="mt-1 text-xs text-white/35">
                      Trigger the next step
                    </p>
                  </div>

                  <span className="text-[10px] font-bold tracking-widest text-white/25">
                    OUTPUT
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== WHY FRONTIER ==================== */}

      <section
        id="why"
        className="scroll-mt-20 border-b border-[#E2E8F0] bg-[#F8FAFC]"
      >
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#B45309]">
                Why Frontier
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl">
                Technology with a purpose.
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-[#64748B] sm:text-base">
                We don&apos;t believe in technology for technology&apos;s sake.
                Every solution should solve a problem or create a useful
                outcome.
              </p>
            </div>

            <div className="grid border-t border-[#E2E8F0] sm:grid-cols-2">
              {reasons.map((item, index) => (
                <article
                  key={item.title}
                  className={`border-b border-[#E2E8F0] py-7 ${
                    index % 2 === 0
                      ? "sm:border-r sm:pr-8"
                      : "sm:pl-8"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#D97706]" />

                    <h3 className="text-lg font-bold text-[#0F172A]">
                      {item.title}
                    </h3>
                  </div>

                  <p className="mt-3 text-sm leading-7 text-[#64748B]">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== APPROACH ==================== */}

      <section id="approach" className="scroll-mt-20 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#B45309]">
                Our Approach
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl">
                Simple from start to finish.
              </h2>
            </div>

            <p className="max-w-lg text-sm leading-7 text-[#64748B]">
              A clear process keeps projects focused and aligned with the
              outcome you need.
            </p>
          </div>

          <div className="mt-12 grid gap-0 border-y border-[#E2E8F0] md:grid-cols-4">
            {process.map((step, index) => (
              <article
                key={step.number}
                className={`py-7 md:px-6 md:py-8 ${
                  index !== process.length - 1
                    ? "border-b border-[#E2E8F0] md:border-b-0 md:border-r"
                    : ""
                } ${index === 0 ? "md:pl-0" : ""}`}
              >
                <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-md bg-[#FEF3C7] px-2 text-[10px] font-bold tracking-widest text-[#B45309]">
                  {step.number}
                </span>

                <h3 className="mt-5 text-lg font-bold text-[#0F172A]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#64748B]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CONTACT ==================== */}

      <section id="contact" className="scroll-mt-20 bg-[#FFFBEB]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#B45309]">
                Start a Conversation
              </p>

              <h2 className="mt-4 max-w-2xl text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-5xl">
                Have something you want to build?
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-[#475569] sm:text-base">
                Tell us what you&apos;re building, what you&apos;re trying to
                improve, or simply where you&apos;re stuck.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#0F172A] px-6 text-sm font-bold text-white transition-colors hover:bg-[#D97706]"
              >
                Start a Conversation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="mailto:hello@frontiersystems.co"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-[#CBD5E1] bg-white px-6 text-sm font-semibold text-[#0F172A] transition-colors hover:border-[#D97706] hover:text-[#B45309]"
              >
                hello@frontiersystems.co
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}

      <footer className="bg-[#0F172A] text-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
          <div className="grid gap-10 md:grid-cols-3">
            {/* BRAND */}

            <div>
              <a href="#home" className="flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/favicon.ico"
                  alt="Frontier Systems"
                  className="h-9 w-9 rounded-sm"
                />

                <span className="text-sm font-extrabold tracking-[0.12em]">
                  FRONTIER SYSTEMS
                </span>
              </a>

              <p className="mt-5 text-sm font-semibold text-white/70">
                Technology. Automation. Built for What&apos;s Next.
              </p>

              <p className="mt-2 max-w-sm text-sm leading-6 text-white/40">
                UK-based technology solutions for businesses worldwide.
              </p>

              <div className="mt-4 text-xs leading-5 text-white/45">
                <p className="font-semibold text-white/70">Frontier Systems</p>
                <p>22 Gladstone Street, Walsall</p>
                <p>WS2 8BL, United Kingdom</p>
              </div>
            </div>

            {/* COMPANY */}

            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-white/30">
                Company
              </h3>

              <div className="mt-5 space-y-3">
                <a
                  href="#why"
                  className="block text-sm text-white/55 hover:text-[#F59E0B]"
                >
                  About
                </a>

                <a
                  href="#services"
                  className="block text-sm text-white/55 hover:text-[#F59E0B]"
                >
                  Services
                </a>

                <Link
                  href="/contact"
                  className="block text-sm text-white/55 hover:text-[#F59E0B]"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* CONNECT */}

            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-white/30">
                Connect
              </h3>

              <div className="mt-5 space-y-3">
                <a
                  href="mailto:hello@frontiersystems.co"
                  className="block text-sm text-white/55 hover:text-[#F59E0B]"
                >
                  hello@frontiersystems.co
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#F59E0B]"
                >
                  Start a Conversation
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <p className="pt-2 text-xs leading-relaxed text-white/40">
                  <span className="block font-semibold text-white/60">Office</span>
                  22 Gladstone Street, Walsall, WS2 8BL
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © <span suppressHydrationWarning>{new Date().getFullYear()}</span> Frontier Systems. All rights
              reserved.
            </p>

            <div className="flex gap-5">
              <Link href="/privacy" className="transition-colors hover:text-white">
                Privacy Policy
              </Link>

              <Link href="/terms" className="transition-colors hover:text-white">
                Terms of Service
              </Link>

              <Link href="/cookies" className="transition-colors hover:text-white">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}