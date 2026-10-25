import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0F172A",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://frontiersystems.co"),
  title: {
    default: "Frontier Systems | UK Bespoke Software Engineering & AI Automation Agency",
    template: "%s | Frontier Systems (UK)",
  },
  description:
    "Frontier Systems is a premier UK bespoke software engineering and AI workflow automation agency based in Walsall, West Midlands. We build high-performance web platforms, custom software, and autonomous business workflows.",
  keywords: [
    "UK Software Development Company",
    "Bespoke Software Engineering UK",
    "Custom Web Development Agency UK",
    "AI Automation Agency UK",
    "Business Workflow Automation UK",
    "Software Engineers Walsall",
    "Software Developers West Midlands",
    "Software Developers Birmingham",
    "Cloud Infrastructure & SaaS Development UK",
    "Frontier Systems UK",
    "custom software development UK",
    "web development agency West Midlands",
    "AI workflow automation company UK",
    "SaaS development agency UK",
    "Next.js development agency UK",
  ],
  authors: [{ name: "Frontier Systems", url: "https://frontiersystems.co" }],
  creator: "Frontier Systems",
  publisher: "Frontier Systems",
  category: "technology",
  classification: "Business, Technology, Software Engineering",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  // ─── Search Engine Verification ─────────────────────────────────────────────
  // Add your tokens here after verifying ownership in each platform.
  verification: {
    google: "REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_TOKEN",
    other: {
      // Bing Webmaster Tools / Microsoft Copilot
      "msvalidate.01": "REPLACE_WITH_BING_WEBMASTER_TOKEN",
      // Yandex (optional but good for completeness)
      "yandex-verification": "REPLACE_WITH_YANDEX_TOKEN",
    },
  },
  // ─── Open Graph (Social Sharing) ─────────────────────────────────────────────
  openGraph: {
    title: "Frontier Systems | UK Bespoke Software Engineering & AI Automation Agency",
    description:
      "UK bespoke software engineering, high-performance web development, and AI workflow automation agency based in Walsall, West Midlands.",
    url: "https://frontiersystems.co",
    siteName: "Frontier Systems",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/images/og-card.jpg",
        width: 1200,
        height: 630,
        alt: "Frontier Systems UK — Technology. Automation. Built for What's Next.",
        type: "image/jpeg",
      },
    ],
  },
  // ─── Twitter / X Card ────────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Frontier Systems | UK Bespoke Software Engineering & AI Automation Agency",
    description:
      "Bespoke software engineering, web development, and AI workflow automation for UK businesses.",
    images: ["/images/og-card.jpg"],
  },
  // ─── Apple Web App ───────────────────────────────────────────────────────────
  appleWebApp: {
    capable: true,
    title: "Frontier Systems",
    statusBarStyle: "black-translucent",
  },
  // ─── Robots ──────────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// ─── JSON-LD Structured Data ──────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // Organization / LocalBusiness / ProfessionalService
    {
      "@type": ["ProfessionalService", "LocalBusiness", "Organization"],
      "@id": "https://frontiersystems.co/#organization",
      name: "Frontier Systems",
      alternateName: "Frontier Systems UK",
      url: "https://frontiersystems.co",
      logo: {
        "@type": "ImageObject",
        url: "https://frontiersystems.co/images/og-card.jpg",
        width: 1200,
        height: 630,
      },
      image: "https://frontiersystems.co/images/og-card.jpg",
      description:
        "Leading UK bespoke software engineering, high-performance web development, and AI workflow automation agency based in Walsall, West Midlands.",
      telephone: "+447401826937",
      email: "hello@frontiersystems.co",
      priceRange: "£££",
      currenciesAccepted: "GBP, USD",
      paymentAccepted: "Bank Transfer, Credit Card",
      openingHours: "Mo-Fr 09:00-17:30",
      address: {
        "@type": "PostalAddress",
        streetAddress: "22 Gladstone Street",
        addressLocality: "Walsall",
        addressRegion: "West Midlands",
        postalCode: "WS2 8BL",
        addressCountry: "GB",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 52.5862,
        longitude: -1.9829,
      },
      hasMap: "https://maps.google.com/?q=22+Gladstone+Street,+Walsall,+WS2+8BL",
      areaServed: [
        { "@type": "Country", name: "United Kingdom" },
        { "@type": "AdministrativeArea", name: "West Midlands" },
        { "@type": "City", name: "Walsall" },
        { "@type": "City", name: "Birmingham" },
        { "@type": "City", name: "London" },
        { "@type": "City", name: "Manchester" },
      ],
      sameAs: [
        "https://wa.me/447401826937",
      ],
      knowsAbout: [
        "Bespoke Software Development",
        "Web Application Development",
        "Artificial Intelligence Automation",
        "Enterprise Workflow Engineering",
        "Cloud Infrastructure & DevOps",
        "Business Systems Integration",
        "SaaS Platform Architecture",
        "TypeScript Development",
        "Next.js Development",
        "API Integration",
      ],
      // Service offerings as schema nodes
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Technology Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Bespoke Web Development",
              description:
                "Custom high-performance websites and web applications built with Next.js, React, and TypeScript for UK businesses.",
              url: "https://frontiersystems.co/services/web-development",
              areaServed: { "@type": "Country", name: "United Kingdom" },
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI & Workflow Automation",
              description:
                "AI-powered automation of business processes, workflows, and repetitive tasks using LLM agents and custom pipeline engineering.",
              url: "https://frontiersystems.co/services/ai-automation",
              areaServed: { "@type": "Country", name: "United Kingdom" },
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Software Development",
              description:
                "Purpose-built bespoke software solutions engineered around your specific business requirements.",
              url: "https://frontiersystems.co/services/custom-software-development",
              areaServed: { "@type": "Country", name: "United Kingdom" },
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "SaaS Platform Development",
              description:
                "End-to-end design, architecture, and deployment of scalable SaaS platforms and digital products.",
              url: "https://frontiersystems.co/services/saas-development",
              areaServed: { "@type": "Country", name: "United Kingdom" },
            },
          },
        ],
      },
    },
    // WebSite entity
    {
      "@type": "WebSite",
      "@id": "https://frontiersystems.co/#website",
      url: "https://frontiersystems.co",
      name: "Frontier Systems",
      description: "Technology. Automation. Built for What's Next.",
      publisher: {
        "@id": "https://frontiersystems.co/#organization",
      },
      inLanguage: "en-GB",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://frontiersystems.co/services#{search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
    // WebPage (homepage)
    {
      "@type": "WebPage",
      "@id": "https://frontiersystems.co/#webpage",
      url: "https://frontiersystems.co",
      name: "Frontier Systems | UK Bespoke Software Engineering & AI Automation Agency",
      description:
        "Frontier Systems is a premier UK bespoke software engineering and AI workflow automation agency based in Walsall, West Midlands.",
      isPartOf: { "@id": "https://frontiersystems.co/#website" },
      about: { "@id": "https://frontiersystems.co/#organization" },
      inLanguage: "en-GB",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://frontiersystems.co",
          },
        ],
      },
    },
    // FAQ schema — drives rich FAQ results in Google
    {
      "@type": "FAQPage",
      "@id": "https://frontiersystems.co/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What does Frontier Systems do?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Frontier Systems is a UK bespoke software engineering and AI automation agency based in Walsall, West Midlands. We design and build custom software, high-performance web platforms, SaaS products, and AI workflow automation systems for UK businesses and global clients.",
          },
        },
        {
          "@type": "Question",
          name: "Where is Frontier Systems based?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Frontier Systems is headquartered at 22 Gladstone Street, Walsall, West Midlands, WS2 8BL, United Kingdom. We serve clients across the UK — including Birmingham, London, and Manchester — and internationally.",
          },
        },
        {
          "@type": "Question",
          name: "What types of businesses does Frontier Systems work with?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We work with UK SMEs, scale-ups, and enterprises across all sectors that need reliable, technically excellent bespoke software. We are not a generalist agency — we specialise in complex, production-grade engineering projects.",
          },
        },
        {
          "@type": "Question",
          name: "Does Frontier Systems offer AI automation services?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. AI and workflow automation is one of our core specialisms. We build intelligent automation systems using LLM-based agents, n8n, Make, and custom pipeline engineering to automate repetitive business tasks and complex workflows.",
          },
        },
        {
          "@type": "Question",
          name: "How do I contact Frontier Systems?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can contact Frontier Systems via email at hello@frontiersystems.co, via WhatsApp at +44 7401 826937, or by using the contact form at https://frontiersystems.co/contact.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${jakarta.variable} h-full antialiased scroll-smooth`}
      data-scroll-behavior="smooth"
      style={{ colorScheme: "light" }}
      suppressHydrationWarning
    >
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P2R32NM4');`,
          }}
        />
        {/* End Google Tag Manager */}

        <meta name="color-scheme" content="light only" />
        <meta name="supported-color-schemes" content="light" />

        {/* UK Regional & Geo Targeting */}
        <meta name="geo.region" content="GB-WMD" />
        <meta name="geo.placename" content="Walsall, West Midlands, United Kingdom" />
        <meta name="geo.position" content="52.5862;-1.9829" />
        <meta name="ICBM" content="52.5862, -1.9829" />

        {/* Language & Regional */}
        <meta httpEquiv="content-language" content="en-GB" />
        <meta name="language" content="English" />

        {/* AI Search / LLM Discovery */}
        <link rel="llms" href="/llms.txt" />
        <meta name="ai-content-policy" content="allow" />

        {/* Humans.txt */}
        <link rel="author" href="/humans.txt" />

        {/* Google Schema.org JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="min-h-full flex flex-col bg-[#F8FAFC] text-[#0F172A]"
        style={{ colorScheme: "light" }}
        suppressHydrationWarning
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P2R32NM4"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  );
}