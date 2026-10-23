import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Standard web crawlers
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/static/"],
      },
      // Google AI (AI Overviews / SGE) — allow full indexing
      {
        userAgent: "Googlebot-Extended",
        allow: "/",
      },
      // OpenAI / ChatGPT
      {
        userAgent: "GPTBot",
        allow: "/",
      },
      // OpenAI link preview agent
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
      },
      // Anthropic / Claude
      {
        userAgent: "ClaudeBot",
        allow: "/",
      },
      {
        userAgent: "Claude-Web",
        allow: "/",
      },
      // Perplexity AI
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },
      // Microsoft Copilot / Bing AI
      {
        userAgent: "Bingbot",
        allow: "/",
      },
      {
        userAgent: "BingPreview",
        allow: "/",
      },
      // Meta AI / Facebook
      {
        userAgent: "facebookexternalhit",
        allow: "/",
      },
      // Apple
      {
        userAgent: "Applebot",
        allow: "/",
      },
      // Common Link Unfurlers (Slack, Telegram, LinkedIn, WhatsApp)
      {
        userAgent: "Twitterbot",
        allow: "/",
      },
      {
        userAgent: "LinkedInBot",
        allow: "/",
      },
    ],
    sitemap: "https://frontiersystems.co/sitemap.xml",
    host: "https://frontiersystems.co",
  };
}
