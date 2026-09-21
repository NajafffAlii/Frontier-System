export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: "Web & Digital" | "AI & Automation" | "Custom Software" | "Cloud & Systems";
  categorySlug: "web-digital" | "ai-automation" | "custom-software" | "cloud-systems";
  industry: string;
  tagline: string;
  description: string;
  featured: boolean;
  image: string;
  year: string;
  timeline: string;
  servicesProvided: string[];
  deliverables: string[];
  techStack: string[];
  results: Array<{
    metric: string;
    label: string;
  }>;
  challenge: string;
  solution: string;
  clientQuote?: {
    text: string;
    author: string;
    role: string;
  };
}

export const caseStudiesData: CaseStudy[] = [
  {
    id: "dewan-traders",
    slug: "dewan-traders",
    title: "Dewan Traders — B2B Pakistan Exporter (Sargodha Kinnow & Produce Portal)",
    client: "Dewan Traders",
    category: "Web & Digital",
    categorySlug: "web-digital",
    industry: "B2B Global Export / Sargodha Kinnow Citrus & Agricultural Commodities",
    tagline: "Consolidating and exporting Sargodha Kinnow mandarins, fresh produce, and aged Basmati rice to global wholesalers.",
    description:
      "Dewan Traders (dewantrade.com) is Sargodha's premier B2B export company, consolidating and exporting world-famous Sargodha Kinnow mandarins, sweet Chaunsa mangoes, export-grade potatoes & red onions, aged Basmati rice, and precision goods. Frontier Systems engineered their complete digital trade platform, featuring a sourced export catalog, live container cargo tracking engine, automated FOB worksheets, phytosanitary clearance verification, and instant WhatsApp trade desk routing.",
    featured: true,
    image: "/images/dewan-traders.png",
    year: "2024",
    timeline: "6 Weeks",
    servicesProvided: [
      "Custom Web Architecture & B2B Portal",
      "Sourced Export Catalog (dewantrade.com/catalog)",
      "Live Container Cargo Tracking Engine (dewantrade.com/track)",
      "Automated FOB Worksheets & Specification Sheets",
      "Phytosanitary & SGS Compliance Integration",
      "Instant WhatsApp Trade Desk & RFQ Pipeline",
    ],
    deliverables: [
      "Responsive international B2B digital portal with produce profiles (Sargodha Kinnow mandarins, Chaunsa mangoes, Super Kernel Basmati rice)",
      "Real-time container cargo tracking system for wholesale consignments in transit",
      "Specification sheets with moisture control, sizing (48–84 calibers for Kinnow), and cold-chain reefer guidelines",
      "Automated FOB worksheets and L/C payment contract inquiry dispatch",
      "Fast global response times for wholesale buyers across Middle East, Europe, and Asia",
    ],
    techStack: [
      "Next.js (App Router)",
      "TypeScript",
      "Tailwind CSS",
      "Cloudflare Global Edge",
      "WhatsApp Business API Linkage",
      "Structured SEO & B2B Schema Markup",
    ],
    results: [
      {
        metric: "85+",
        label: "Export countries served worldwide",
      },
      {
        metric: "1,200+",
        label: "Container shipments handled across global trade routes",
      },
      {
        metric: "25+",
        label: "Produce & export categories in sourced catalog",
      },
      {
        metric: "Est. 1998",
        label: "Over 25 years of trade heritage in Sargodha, Pakistan",
      },
    ],
    challenge:
      "Prior to launching dewantrade.com, Dewan Traders coordinated high-volume export consignments of Sargodha Kinnow mandarins, Basmati rice, and seasonal produce through disconnected WhatsApp messages, paper inspection certificates, and manual freight updates. Wholesale buyers and supermarket distributors across the Middle East, Europe, and Asia lacked a unified digital portal to inspect export-ready specifications, verify phytosanitary certifications, check harvest windows, or track active container shipments.",
    solution:
      "Frontier Systems engineered the official digital export platform for Dewan Traders (dewantrade.com). We built an interactive sourced catalog covering fresh fruits, vegetables, and basmati rice with rigorous grade specifications, an embedded container cargo tracking engine, and instant FOB inquiry forms connected directly to the Sargodha commercial operations desk.",
    clientQuote: {
      text: "Frontier Systems delivered an enterprise export portal that elevated Dewan Traders on the world stage. Our wholesale buyers in Dubai, Central Asia, and Europe now track their container shipments and submit FOB quote requests seamlessly.",
      author: "Operations Director",
      role: "Dewan Traders (Sargodha, Pakistan)",
    },
  },
  {
    id: "apex-logistics-cloud",
    slug: "apex-logistics-cloud",
    title: "Apex Freight Solutions — Multi-Carrier Logistics & Customs Platform",
    client: "Apex Freight Solutions",
    category: "Cloud & Systems",
    categorySlug: "cloud-systems",
    industry: "Freight Forwarding & Cross-Border Logistics",
    tagline: "Automated consignment tracking, multi-carrier API integration, and digital customs documentation.",
    description:
      "A purpose-built operational platform replacing legacy dispatch spreadsheets with unified tracking across 12 maritime and air carriers, reducing customs clearance wait times by 65%.",
    featured: false,
    image: "",
    year: "2024",
    timeline: "8 Weeks",
    servicesProvided: [
      "Systems & API Integration",
      "Cloud Architecture",
      "Custom Workflow Engine",
      "Carrier Webhooks & Telemetry",
    ],
    deliverables: [
      "Real-time carrier tracking hub integrating maritime and air freight APIs",
      "Automated customs document generation and compliance validation",
      "Role-based customer portal for live consignment milestone visibility",
    ],
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Docker", "AWS ECS"],
    results: [
      { metric: "-65%", label: "Reduction in customs documentation delays" },
      { metric: "12", label: "Global carrier APIs unified into a single dashboard" },
      { metric: "99.98%", label: "System uptime across 24/7 global operations" },
    ],
    challenge:
      "Apex was managing over 800 monthly cross-border consignments using spreadsheets and disconnected carrier portals, creating costly customs delays and manual tracking overhead.",
    solution:
      "We engineered a centralized dispatch and tracking hub that connects directly to carrier telemetry feeds, automatically verifies documentation, and alerts operations to potential port hold-ups.",
  },
  {
    id: "vanguard-workflow-ai",
    slug: "vanguard-workflow-ai",
    title: "Vanguard Operations — Autonomous Document & Workflow AI",
    client: "Vanguard Commercial Services",
    category: "AI & Automation",
    categorySlug: "ai-automation",
    industry: "Enterprise B2B Services",
    tagline: "Intelligent document classification, automated invoice reconciliation, and operational agentic workflows.",
    description:
      "An intelligent workflow automation system parsing inbound purchase orders, supplier invoices, and delivery dockets with 99.4% accuracy, eliminating 28 hours of manual data entry weekly.",
    featured: false,
    image: "",
    year: "2024",
    timeline: "5 Weeks",
    servicesProvided: [
      "AI & Automation Engineering",
      "Document Extraction Pipelines",
      "ERP Integration",
      "Audit & Exception Dashboard",
    ],
    deliverables: [
      "Automated OCR and LLM-assisted document parsing engine",
      "Bi-directional sync with internal accounting and ERP systems",
      "Human-in-the-loop exception handling interface",
    ],
    techStack: ["Python", "Next.js", "FastAPI", "OpenAI API", "PostgreSQL"],
    results: [
      { metric: "28 hrs", label: "Weekly operational time saved per department" },
      { metric: "99.4%", label: "Document extraction and validation accuracy" },
      { metric: "< 3s", label: "Average invoice processing turnaround" },
    ],
    challenge:
      "Processing thousands of multi-format supplier invoices, packing lists, and delivery notes manually was causing billing backlogs and human entry discrepancies.",
    solution:
      "We built an agentic document parsing pipeline that ingests emails and attachments, extracts line items, validates totals against purchase orders, and flags discrepancies for human review.",
  },
];
