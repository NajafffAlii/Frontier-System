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
  title: "Frontier Systems | Technology. Automation. Built for What’s Next.",
  description:
    "UK-based technology solutions for businesses worldwide. We build modern digital solutions, AI automation, custom software, SaaS, and web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} h-full antialiased scroll-smooth`}
      data-scroll-behavior="smooth"
      style={{ colorScheme: "light" }}
      suppressHydrationWarning
    >
      <head>
        <meta name="color-scheme" content="light only" />
        <meta name="supported-color-schemes" content="light" />
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