import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Frontier Systems",
    short_name: "Frontier Systems",
    description:
      "UK bespoke software engineering, web development, and AI workflow automation agency based in Walsall, West Midlands.",
    start_url: "/",
    display: "standalone",
    background_color: "#F8FAFC",
    theme_color: "#0F172A",
    orientation: "portrait-primary",
    scope: "/",
    lang: "en-GB",
    dir: "ltr",
    categories: ["business", "productivity", "utilities"],
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
