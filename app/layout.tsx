import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#F8FAFC",
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
  ],
  authors: [{ name: "Frontier Systems", url: "https://frontiersystems.co" }],
  creator: "Frontier Systems",
  publisher: "Frontier Systems",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
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
        url: "/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Frontier Systems UK - Bespoke Software & AI Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frontier Systems | UK Bespoke Software Engineering & AI Automation Agency",
    description:
      "Bespoke software engineering, web development, and AI workflow automation for UK businesses.",
    images: ["/favicon.ico"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["ProfessionalService", "LocalBusiness", "Organization"],
      "@id": "https://frontiersystems.co/#organization",
      name: "Frontier Systems",
      url: "https://frontiersystems.co",
      logo: "https://frontiersystems.co/favicon.ico",
      image: "https://frontiersystems.co/favicon.ico",
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
      areaServed: [
        {
          "@type": "Country",
          name: "United Kingdom",
        },
        {
          "@type": "AdministrativeArea",
          name: "West Midlands",
        },
        {
          "@type": "City",
          name: "Walsall",
        },
        {
          "@type": "City",
          name: "Birmingham",
        },
        {
          "@type": "City",
          name: "London",
        },
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
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://frontiersystems.co/#website",
      url: "https://frontiersystems.co",
      name: "Frontier Systems",
      description: "Technology. Automation. Built for What’s Next.",
      publisher: {
        "@id": "https://frontiersystems.co/#organization",
      },
      inLanguage: "en-GB",
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
        <meta name="color-scheme" content="light only" />
        <meta name="supported-color-schemes" content="light" />
        {/* UK Regional & Geo Targeting Meta Tags */}
        <meta name="geo.region" content="GB-WLS" />
        <meta name="geo.placename" content="Walsall, West Midlands, United Kingdom" />
        <meta name="geo.position" content="52.5862;-1.9829" />
        <meta name="ICBM" content="52.5862, -1.9829" />
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
        {children}
      </body>
    </html>
  );
}