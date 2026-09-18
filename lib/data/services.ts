export interface ServiceItem {
  slug: string;
  title: string;
  shortDescription: string;
  tagline: string;
  category: string;
  categorySlug: string;
  highlight?: boolean;
  iconName: string;
  whyBetter: Array<{
    title: string;
    description: string;
  }>;
  comparison: {
    typical: string[];
    frontier: string[];
  };
  deliverables: Array<{
    title: string;
    description: string;
  }>;
  techStack: string[];
  process: Array<{
    step: string;
    title: string;
    description: string;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export interface ServiceCategory {
  title: string;
  slug: string;
  description: string;
  iconName: string;
  highlight?: boolean;
  services: ServiceItem[];
}

export const servicesData: ServiceItem[] = [
  // ==========================================
  // DIGITAL DEVELOPMENT
  // ==========================================
  {
    slug: "web-development",
    title: "Web Development",
    shortDescription:
      "Fast, responsive websites and web applications designed around your business goals.",
    tagline: "High-performance websites that load instantly, look exceptional, and turn visitors into customers.",
    category: "Digital Development",
    categorySlug: "digital-development",
    iconName: "Monitor",
    whyBetter: [
      {
        title: "Sub-Second Speed on Every Device",
        description:
          "We don't use heavy WordPress templates or bloated page builders. We build clean, lightweight sites that load in under a second so your visitors stay engaged and convert.",
      },
      {
        title: "You Own 100% of the Code",
        description:
          "Full intellectual property ownership from day one. No monthly lock-ins, no hidden fees, and clean documentation so any engineer can work with it in the future.",
      },
      {
        title: "Designed to Convert Visitors",
        description:
          "A fast website is only valuable if it brings in revenue. We design clear customer pathways and friction-free layouts that guide visitors toward booking or buying.",
      },
      {
        title: "Direct Access to UK Senior Builders",
        description:
          "You collaborate directly with senior UK engineers who understand your commercial goals — no junior middlemen or outsourced relay chains.",
      },
    ],
    comparison: {
      typical: [
        "Generic templates with 30+ plugins that slow down and break on updates",
        "Outsourced offshore developers with high turnover and communication delays",
        "Slow 3-5 second load times that frustrate users and lose search rankings",
        "Ongoing lock-in and unexpected maintenance fees to fix basic issues",
      ],
      frontier: [
        "Custom, high-speed website built from scratch around your business needs",
        "Direct collaboration with dedicated, UK-based senior software engineers",
        "Sub-second global speeds with flawless mobile, tablet, and desktop display",
        "100% code ownership, zero plugin bloat, and full technical documentation",
      ],
    },
    deliverables: [
      {
        title: "Custom Responsive Website",
        description: "Pixel-perfect mobile, tablet, and desktop experience tailored to your brand.",
      },
      {
        title: "Easy Content Management",
        description: "Simple administrative dashboard so your team can update copy, images, and posts in seconds.",
      },
      {
        title: "Built-In SEO & Social Sharing",
        description: "Optimized page titles, sitemaps, and metadata so your business ranks well on Google.",
      },
      {
        title: "Ultra-Fast Cloud Hosting Setup",
        description: "Deployed to lightning-fast global cloud networks for maximum speed and 99.9% uptime.",
      },
      {
        title: "Analytics & Lead Tracking",
        description: "Clean tracking setup so you can see exactly where visitors come from and what actions they take.",
      },
      {
        title: "Enterprise Security & Backups",
        description: "Free SSL certificate, automated security protections, and daily backups for peace of mind.",
      },
    ],
    techStack: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Vercel / Cloudflare"],
    process: [
      {
        step: "01",
        title: "Discovery & Strategy",
        description: "We review your goals, your competitors, and what your customers need to see.",
      },
      {
        step: "02",
        title: "Design & Prototype",
        description: "You see and approve interactive visual layouts before we write a single line of code.",
      },
      {
        step: "03",
        title: "Development & Testing",
        description: "We build your site with clean, tested code and verify it across every major device and browser.",
      },
      {
        step: "04",
        title: "Launch & Handover",
        description: "We go live with zero downtime, train your team on updates, and hand over all credentials.",
      },
    ],
    faqs: [
      {
        question: "How long does a website project take?",
        answer: "Most custom websites take between 2 to 4 weeks depending on the number of pages and specific features you need.",
      },
      {
        question: "Can our non-technical team update text and photos?",
        answer: "Yes. We set up an intuitive, user-friendly dashboard so anyone on your team can edit content without touching code.",
      },
      {
        question: "Do we own the website once it's built?",
        answer: "Yes, 100%. All source code, design files, and assets belong entirely to your company.",
      },
    ],
  },
  {
    slug: "ecommerce-development",
    title: "E-Commerce Development",
    shortDescription:
      "Online stores and commerce platforms built for performance, conversion, and growth.",
    tagline: "Fast, reliable online stores with seamless checkouts that turn browsers into buyers.",
    category: "Digital Development",
    categorySlug: "digital-development",
    iconName: "Laptop",
    whyBetter: [
      {
        title: "Instant Browsing & Filtering",
        description:
          "Shoppers leave slow stores. Our stores filter products and update shopping carts instantaneously without reloading the page.",
      },
      {
        title: "Frictionless 1-Click Checkout",
        description:
          "Support for Apple Pay, Google Pay, Klarna, and credit cards with minimal form fields to keep cart abandonment low.",
      },
      {
        title: "Won't Crash During Peak Sales",
        description:
          "Built on modern cloud architecture that handles marketing surges and Black Friday traffic spikes without slowing down.",
      },
      {
        title: "Automatic Stock & Order Sync",
        description:
          "Orders, customer records, and inventory synchronize automatically with your accounting software or warehouse.",
      },
    ],
    comparison: {
      typical: [
        "Heavy themes slowed down by 20+ conflicting store apps",
        "High cart abandonment from clunky, slow multi-step checkouts",
        "Store slows down or crashes during seasonal promotions and traffic spikes",
        "Inventory counts get desynced, causing embarrassing out-of-stock orders",
      ],
      frontier: [
        "Lean, ultra-fast store architecture with instant search and filtering",
        "Streamlined 1-click mobile checkout built to maximize purchase completion",
        "Auto-scaling cloud setup engineered to handle 10x traffic spikes effortlessly",
        "Real-time inventory and order sync directly to your warehouse or accounting tool",
      ],
    },
    deliverables: [
      {
        title: "Mobile-First Storefront",
        description: "Optimized product pages, clear imagery, and fluid shopping cart drawer.",
      },
      {
        title: "Streamlined Payment Checkout",
        description: "Apple Pay, Google Pay, credit cards, and buy-now-pay-later options built right in.",
      },
      {
        title: "Real-Time Stock Management",
        description: "Automatic inventory tracking, out-of-stock alerts, and variant handling.",
      },
      {
        title: "Customer Account Center",
        description: "Self-service order tracking, re-ordering, invoice downloads, and saved addresses.",
      },
      {
        title: "Discounts & Promotions Engine",
        description: "Custom discount codes, bundles, volume pricing, and automated free-shipping thresholds.",
      },
      {
        title: "Accounting & Shipping Integration",
        description: "Direct connections to Xero, QuickBooks, ShipStation, or your preferred logistics tool.",
      },
    ],
    techStack: ["Shopify Plus", "Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
    process: [
      {
        step: "01",
        title: "Store & Catalog Planning",
        description: "We review your products, shipping rules, and payment requirements.",
      },
      {
        step: "02",
        title: "Design & Checkout Flow",
        description: "Crafting a clean mobile shopping journey focused on high conversion.",
      },
      {
        step: "03",
        title: "Integration & Sync Build",
        description: "Connecting payment providers, stock databases, and automated order notifications.",
      },
      {
        step: "04",
        title: "Testing & Launch",
        description: "End-to-end purchase testing, security validation, and smooth store launch.",
      },
    ],
    faqs: [
      {
        question: "Can you migrate our existing store from WooCommerce or Shopify?",
        answer: "Yes. We safely migrate your customers, order history, products, and SEO links with zero lost sales.",
      },
      {
        question: "Do you support B2B wholesale orders?",
        answer: "Yes. We build custom wholesale portals with customer-specific pricing, volume discounts, and invoice billing.",
      },
    ],
  },
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    shortDescription:
      "Purpose-built software designed to solve specific business problems and workflows.",
    tagline: "Software tailored precisely to how your business operates — with zero monthly seat fees.",
    category: "Digital Development",
    categorySlug: "digital-development",
    iconName: "Code2",
    whyBetter: [
      {
        title: "Built for Your Exact Operations",
        description:
          "Off-the-shelf tools force your team into clunky workarounds. We build software around the way your company actually works.",
      },
      {
        title: "Zero Per-User Licensing Fees",
        description:
          "Stop paying hundreds per employee every month. You own the software with unlimited seats for your entire team.",
      },
      {
        title: "Clean, Maintainable Architecture",
        description:
          "Written with modern, industry-standard code that is easy to extend, thoroughly tested, and future-proof.",
      },
      {
        title: "Enterprise Permissions & Security",
        description:
          "Define exactly who can see and do what — from administrators to managers and external clients — with full audit logs.",
      },
    ],
    comparison: {
      typical: [
        "Forcing employees to use rigid off-the-shelf tools that don't fit actual workflows",
        "Escalating subscription costs that punish your business as headcount grows",
        "Fragile code written by contractors with zero documentation or automated testing",
        "Proprietary platforms holding your company data hostage in locked formats",
      ],
      frontier: [
        "Software built precisely around your company's unique competitive advantages",
        "You own the software completely with zero monthly per-user licensing penalties",
        "Clean, thoroughly tested code accompanied by clear technical documentation",
        "Full database access, automated backups, and complete data portability at all times",
      ],
    },
    deliverables: [
      {
        title: "Custom Web Application",
        description: "Secure, responsive web platform tailored to your team's daily administrative tasks.",
      },
      {
        title: "Centralized Database",
        description: "Organized, secure storage for all your operational data with automated daily backups.",
      },
      {
        title: "Team Roles & Permissions",
        description: "Granular access controls separating admins, team members, and external clients.",
      },
      {
        title: "Audit Trail & Activity Log",
        description: "Clear records showing who created, updated, or approved records for accountability.",
      },
      {
        title: "Existing Tool Integrations",
        description: "Automatic connections to your email, accounting, CRM, and cloud storage.",
      },
      {
        title: "Documentation & Training",
        description: "Step-by-step video tutorials and written guides for your staff.",
      },
    ],
    techStack: ["TypeScript", "Next.js", "Node.js / Python", "PostgreSQL", "Supabase / AWS"],
    process: [
      {
        step: "01",
        title: "Workflow Mapping",
        description: "We map how information moves through your team to eliminate manual friction.",
      },
      {
        step: "02",
        title: "Interactive Prototype",
        description: "You click through the interface and verify the workflow before development begins.",
      },
      {
        step: "03",
        title: "Sprint Development",
        description: "We build in 2-week milestones with regular demos so you can see continuous progress.",
      },
      {
        step: "04",
        title: "Rollout & Staff Training",
        description: "We deploy the application, migrate your existing data, and train your team.",
      },
    ],
    faqs: [
      {
        question: "How long does custom software take to build?",
        answer: "Most custom business tools take between 4 to 8 weeks to deploy an initial production version.",
      },
      {
        question: "Can it replace our messy spreadsheets?",
        answer: "Yes. Replacing scattered spreadsheets with a single, secure database that everyone can access safely is one of our most common projects.",
      },
    ],
  },
  {
    slug: "saas-development",
    title: "SaaS Development",
    shortDescription:
      "Scalable software-as-a-service products from concept through to launch and beyond.",
    tagline: "Turn your software idea into a recurring-revenue SaaS platform ready for paying customers.",
    category: "Digital Development",
    categorySlug: "digital-development",
    iconName: "Sparkles",
    whyBetter: [
      {
        title: "Built for Multi-Tenant Security",
        description:
          "Every customer's data is strictly isolated so there is zero risk of data leaks between companies using your software.",
      },
      {
        title: "Turnkey Automated Billing",
        description:
          "Stripe integration that handles subscriptions, credit cards, upgrades, cancellations, and invoices automatically.",
      },
      {
        title: "Low Starting Cloud Costs",
        description:
          "Built on modern serverless infrastructure that costs almost nothing while you launch and scales only as revenue grows.",
      },
      {
        title: "Investor & Enterprise Ready",
        description:
          "Clean code, proper security standards, and comprehensive audit logs that pass technical due diligence smoothly.",
      },
    ],
    comparison: {
      typical: [
        "Agencies that build simple prototypes that crash as soon as more than 50 people sign up",
        "Fragile payment setups that fail when customers upgrade, downgrade, or cancel plans",
        "Expensive server setups costing hundreds per month before you land your first user",
        "No monitoring, so you only find out something broke when a paying customer complains",
      ],
      frontier: [
        "True multi-tenant architecture designed to scale smoothly to thousands of users",
        "Battle-tested Stripe billing handling monthly, annual, seat tiers, and automated receipts",
        "Lean cloud infrastructure with near-zero idle cost that scales proportionally with revenue",
        "Real-time error monitoring and performance tracking built in from day one",
      ],
    },
    deliverables: [
      {
        title: "Customer Web Application",
        description: "The core product interface your subscribers interact with every day.",
      },
      {
        title: "Automated Subscription Engine",
        description: "Self-service customer portal for subscription management, card updates, and invoices.",
      },
      {
        title: "Secure Authentication",
        description: "Email sign-in, Google login, password resets, and multi-factor security.",
      },
      {
        title: "Organization & Team Workspaces",
        description: "Allow your business customers to invite team members and set permission levels.",
      },
      {
        title: "Super-Admin Dashboard",
        description: "Internal control panel to monitor revenue, view users, and troubleshoot accounts.",
      },
      {
        title: "Automated Onboarding Emails",
        description: "Welcome emails, billing notifications, and re-engagement messages.",
      },
    ],
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Stripe Billing", "Supabase / AWS"],
    process: [
      {
        step: "01",
        title: "Product Scope & MVP",
        description: "We define the essential features needed to launch and start charging customers quickly.",
      },
      {
        step: "02",
        title: "Architecture & Wireframes",
        description: "Designing the user flow, onboarding journey, and database structure.",
      },
      {
        step: "03",
        title: "Development & Billing",
        description: "Building the core software and connecting Stripe for recurring subscription payments.",
      },
      {
        step: "04",
        title: "Beta Launch & Diligence",
        description: "Onboarding your first cohort of users, verifying payments, and deploying to production.",
      },
    ],
    faqs: [
      {
        question: "How fast can we launch a SaaS MVP?",
        answer: "We typically deliver a complete, revenue-ready SaaS MVP with login, billing, and core features in 6 to 8 weeks.",
      },
      {
        question: "Do you take equity or royalties?",
        answer: "No. You pay a clear project price and retain 100% equity, ownership, and revenue.",
      },
    ],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    shortDescription:
      "Native and cross-platform mobile applications that extend your business to every device.",
    tagline: "Smooth, fast mobile apps for iOS and Android built from a single clean codebase.",
    category: "Digital Development",
    categorySlug: "digital-development",
    iconName: "Smartphone",
    whyBetter: [
      {
        title: "One Codebase for iOS & Android",
        description:
          "Save up to 40% on ongoing development and maintenance by building a single app that runs natively on both Apple and Android devices.",
      },
      {
        title: "Works Even When Offline",
        description:
          "Your users can continue viewing information and entering data even with poor mobile signal. Changes sync automatically when connected.",
      },
      {
        title: "Native Phone Features",
        description:
          "Seamless support for Face ID, fingerprint login, camera access, push notifications, and location services.",
      },
      {
        title: "Guaranteed App Store Approvals",
        description:
          "We manage Apple App Store and Google Play guidelines, privacy policies, and review submissions from start to finish.",
      },
    ],
    comparison: {
      typical: [
        "Slow web wrapper apps that stutter, drop frames, and feel cheap to users",
        "Two separate codebases forcing you to hire separate iOS and Android teams at double the cost",
        "Apps that freeze or show blank error screens when cellular signal drops",
        "Repeated App Store rejections due to missed privacy rules or broken account deletion flows",
      ],
      frontier: [
        "Fluid 60fps native performance with smooth animations and natural device gestures",
        "Single, modern TypeScript codebase delivering simultaneous updates to iOS and Android",
        "Reliable offline caching so your app never fails when internet connection is spotty",
        "Complete submission management with 100% first-time App Store approval track record",
      ],
    },
    deliverables: [
      {
        title: "Apple iOS App",
        description: "Compiled app ready for iPhone and iPad on the Apple App Store.",
      },
      {
        title: "Google Android App",
        description: "Compiled app published to the Google Play Store for all modern Android phones.",
      },
      {
        title: "Push Notifications",
        description: "Send instant updates and reminders directly to your users' lock screens.",
      },
      {
        title: "Biometric Login",
        description: "Fast, secure sign-in using Apple Face ID and Android Fingerprint.",
      },
      {
        title: "Offline Sync Engine",
        description: "Automatic local data caching so the app works anywhere.",
      },
      {
        title: "Instant Update Pipeline",
        description: "Push bug fixes and visual improvements over the air without waiting for App Store reviews.",
      },
    ],
    techStack: ["React Native", "Expo", "TypeScript", "Tailwind (NativeWind)", "Supabase"],
    process: [
      {
        step: "01",
        title: "User Flow & UX",
        description: "Designing simple, thumb-friendly mobile layouts and key user journeys.",
      },
      {
        step: "02",
        title: "Interactive Prototype",
        description: "Testing gestures, navigation transitions, and screen layouts on real phones.",
      },
      {
        step: "03",
        title: "Development & Testing",
        description: "Building native features and connecting your backend database.",
      },
      {
        step: "04",
        title: "Store Launch",
        description: "Submitting to Apple and Google, handling review compliance, and going live.",
      },
    ],
    faqs: [
      {
        question: "Does the app feel like a real native app?",
        answer: "Yes. It uses native phone UI components, animations, and haptics. Users cannot tell the difference from Swift or Kotlin apps.",
      },
      {
        question: "How do updates work after launch?",
        answer: "We use over-the-air updates so visual tweaks and bug fixes update immediately on users' phones without waiting days for App Store review.",
      },
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    shortDescription:
      "User interfaces and experiences designed for clarity, usability, and engagement.",
    tagline: "Clean, intuitive interface design that makes complex software effortless for your users.",
    category: "Digital Development",
    categorySlug: "digital-development",
    iconName: "Palette",
    whyBetter: [
      {
        title: "Designed for Real Use, Not Dribbble",
        description:
          "Many designers create pretty pictures that can't actually be built. We design practical, buildable interfaces with real data and clean developer specs.",
      },
      {
        title: "Reduced User Frustration",
        description:
          "We structure menus, buttons, and workflows so users never have to guess what to click next, cutting down customer support tickets.",
      },
      {
        title: "Complete Edge-Case Coverage",
        description:
          "We don't just design the perfect path. We include clear error messages, loading animations, empty states, and mobile views.",
      },
      {
        title: "Design System You Can Reuse",
        description:
          "You receive an organized Figma library of buttons, typography, colors, and components that your team can use for future features.",
      },
    ],
    comparison: {
      typical: [
        "Disorganized Figma files with no consistent spacing or component rules",
        "Designers who don't understand code, creating ideas that take months longer to build",
        "Only designing the 'happy path', leaving developers to guess error and empty states",
        "Hard-to-read text with poor contrast that frustrates users and fails accessibility",
      ],
      frontier: [
        "Clean, organized design system with clear components that map directly to code",
        "Designers with engineering backgrounds who build for speed and technical reality",
        "Every screen state designed: mobile, desktop, loading, errors, and empty views",
        "Accessible, high-contrast layouts that are effortless for everyone to use",
      ],
    },
    deliverables: [
      {
        title: "Complete Figma Design System",
        description: "Reusable colors, typography scales, buttons, inputs, and icons.",
      },
      {
        title: "Clickable Prototypes",
        description: "Interactive mockups you can test and share with your team before coding.",
      },
      {
        title: "Mobile & Desktop Responsive Layouts",
        description: "Explicit screen designs across mobile phones, tablets, and desktop displays.",
      },
      {
        title: "User Flow Diagrams",
        description: "Clear visual maps showing how users move from first visit to task completion.",
      },
      {
        title: "Developer Handoff Package",
        description: "Pixel-perfect specifications, CSS values, and exportable assets ready for engineers.",
      },
      {
        title: "UX Review & Recommendations",
        description: "Actionable report identifying where users currently get confused or drop off.",
      },
    ],
    techStack: ["Figma", "Design Tokens", "Tailwind CSS", "WCAG 2.1 AA"],
    process: [
      {
        step: "01",
        title: "User Research & Audit",
        description: "We review your current screens, customer feedback, and user drop-off points.",
      },
      {
        step: "02",
        title: "Wireframes & Information Flow",
        description: "Mapping the simplest layout and screen structure before adding visual styling.",
      },
      {
        step: "03",
        title: "Visual Design & System",
        description: "Applying modern typography, colors, and components to create polished screens.",
      },
      {
        step: "04",
        title: "Testing & Developer Handoff",
        description: "Testing clickable prototypes with users, refining details, and delivering Figma assets.",
      },
    ],
    faqs: [
      {
        question: "Can you redesign our existing application?",
        answer: "Yes. We frequently redesign legacy systems to make them modern, clean, and intuitive without breaking your existing database.",
      },
      {
        question: "Can our in-house developers easily build your designs?",
        answer: "Yes. We deliver organized Figma components with clear CSS values and responsive notes so developers can build quickly without guessing.",
      },
    ],
  },

  // ==========================================
  // AI & AUTOMATION (CORE OFFERING)
  // ==========================================
  {
    slug: "ai-automation",
    title: "AI Automation",
    shortDescription:
      "Automate repetitive tasks and business workflows using AI-powered systems.",
    tagline: "Put your repetitive daily tasks on autopilot with reliable, smart AI workflows.",
    category: "AI & Automation",
    categorySlug: "ai-automation",
    highlight: true,
    iconName: "Bot",
    whyBetter: [
      {
        title: "Real Business Value Over Hype",
        description:
          "We don't build gimmicks. We automate actual time-drains: reading incoming emails, categorizing documents, moving data between software, and drafting replies.",
      },
      {
        title: "Human Approvals Built In",
        description:
          "For sensitive tasks, the AI prepares the work and asks your team for a 1-click confirmation in Slack or email before sending. You stay in total control.",
      },
      {
        title: "Works With Your Existing Tools",
        description:
          "No need to change how you work. Our automations plug directly into your current CRM, email, Slack, Google Drive, and internal databases.",
      },
      {
        title: "Zero Hallucination Guardrails",
        description:
          "Every AI step is strictly checked against validation rules. If anything looks unusual, it alerts a human team member instead of guessing.",
      },
    ],
    comparison: {
      typical: [
        "Unreliable no-code scripts that break silently whenever an email format changes slightly",
        "Raw AI text sent directly to clients without human review, causing embarrassing mistakes",
        "Vague consulting slide decks with buzzwords but zero actual working software",
        "No audit trail or logging, leaving management in the dark when something fails",
      ],
      frontier: [
        "Self-healing automation pipelines with automatic retry logic and instant failure alerts",
        "Human-in-the-loop review queues so your team approves sensitive actions with one click",
        "Fully deployed, production-tested software integrated into the tools you use every day",
        "Clear dashboard tracking every task executed, time saved, and error status in real time",
      ],
    },
    deliverables: [
      {
        title: "Custom Automation Pipeline",
        description: "Workflows that trigger automatically when emails, form submissions, or files arrive.",
      },
      {
        title: "Document & Invoice Processing",
        description: "Extract text, amounts, and dates automatically from PDFs, invoices, and spreadsheets.",
      },
      {
        title: "Slack / Email Approval Bot",
        description: "1-click review alerts allowing your team to confirm or edit AI drafts in seconds.",
      },
      {
        title: "CRM & Database Auto-Sync",
        description: "Keep customer details, status updates, and leads updated across all your tools.",
      },
      {
        title: "Error Alerts & Notifications",
        description: "Instant notification to your team if a third-party tool goes offline.",
      },
      {
        title: "Time-Saved Dashboard",
        description: "Clear reporting showing how many hours your company has saved each month.",
      },
    ],
    techStack: ["Python", "TypeScript", "OpenAI / Claude API", "PostgreSQL", "Slack API"],
    process: [
      {
        step: "01",
        title: "Workflow Audit",
        description: "We review your team's daily manual tasks and pinpoint where automation saves the most hours.",
      },
      {
        step: "02",
        title: "Automation Blueprint",
        description: "We map out the exact trigger, processing steps, and safety approval checkpoints.",
      },
      {
        step: "03",
        title: "Build & Integration",
        description: "Connecting your software, setting up AI prompts, and testing with real-world examples.",
      },
      {
        step: "04",
        title: "Pilot Testing & Rollout",
        description: "We test side-by-side with your team to verify 100% accuracy before full activation.",
      },
    ],
    faqs: [
      {
        question: "What if the AI makes a mistake?",
        answer: "We set up human approval checkpoints for sensitive tasks. The AI drafts the response or action, and your employee reviews and confirms it with one click.",
      },
      {
        question: "Is our company data used to train public AI models?",
        answer: "No. We exclusively use private enterprise API agreements where your data is strictly encrypted and never shared or used for model training.",
      },
    ],
  },
  {
    slug: "ai-solutions",
    title: "AI Solutions",
    shortDescription:
      "Custom AI implementations tailored to your industry and business challenges.",
    tagline: "Private AI assistants that understand your company's documents, policies, and industry.",
    category: "AI & Automation",
    categorySlug: "ai-automation",
    highlight: true,
    iconName: "Sparkles",
    whyBetter: [
      {
        title: "Answers Backed by Your Documents",
        description:
          "Unlike public ChatGPT, our AI searches your private company manuals, contracts, and SOPs and includes direct citations with every answer.",
      },
      {
        title: "Zero Data Training Leaks",
        description:
          "Your business data stays completely private. It is never used to train public AI models and is protected under enterprise privacy guarantees.",
      },
      {
        title: "Speaks Your Industry Language",
        description:
          "Tuned for your specific domain — whether legal, finance, healthcare, manufacturing, or real estate — so it understands your terminology.",
      },
      {
        title: "Available 24/7 in Slack or Web",
        description:
          "Give your team or customers immediate answers around the clock without waiting on busy staff members.",
      },
    ],
    comparison: {
      typical: [
        "Generic chatbots that invent fake information and cite non-existent company policies",
        "Employees pasting sensitive customer data into public AI websites where privacy is compromised",
        "Chatbots that get confused as soon as a customer phrases a question slightly differently",
        "Systems that cannot read tables, PDFs, scanned documents, or spreadsheets",
      ],
      frontier: [
        "Precise answers drawn directly from your verified documentation with clickable source links",
        "Private enterprise API setup with complete data isolation and strict confidentiality",
        "Intelligent understanding that handles complex, nuanced questions naturally",
        "Full document processing that extracts information from complex PDFs and spreadsheets",
      ],
    },
    deliverables: [
      {
        title: "Private Company Knowledge Base",
        description: "Search engine indexing your internal guides, contracts, manuals, and FAQs.",
      },
      {
        title: "Team AI Assistant",
        description: "Private chatbot in Slack, Teams, or browser where staff can query company knowledge instantly.",
      },
      {
        title: "Customer Support AI Agent",
        description: "Helpdesk assistant capable of resolving common client inquiries accurately 24/7.",
      },
      {
        title: "Document Summary Tool",
        description: "Upload long contracts or technical files and receive accurate executive summaries in seconds.",
      },
      {
        title: "Automatic Knowledge Updating",
        description: "Syncs automatically with your Google Drive or Notion when documents are updated.",
      },
      {
        title: "Accuracy Testing & Monitoring",
        description: "Continuous testing against real questions to ensure the AI never gives incorrect guidance.",
      },
    ],
    techStack: ["OpenAI / Claude API", "pgvector", "Python", "Next.js", "Docker"],
    process: [
      {
        step: "01",
        title: "Document Ingestion",
        description: "We gather and organize your company manuals, policy documents, and historical FAQs.",
      },
      {
        step: "02",
        title: "Search & Knowledge Setup",
        description: "Setting up private search indexing so the AI can retrieve the exact right paragraph in milliseconds.",
      },
      {
        step: "03",
        title: "Testing & Guardrails",
        description: "Testing against hundreds of real-world questions to verify accuracy and prevent false answers.",
      },
      {
        step: "04",
        title: "Team Deployment",
        description: "Launching into your team's Slack, Teams, or website with access controls.",
      },
    ],
    faqs: [
      {
        question: "How do you stop the AI from making things up?",
        answer: "We instruct the AI to only answer from your provided documents. If the information isn't in your files, it politely tells the user it doesn't know and routes them to a human.",
      },
      {
        question: "Can it update automatically when we edit our documents?",
        answer: "Yes. We connect it to your shared drive or folder so whenever you edit a file, the AI updates its knowledge automatically.",
      },
    ],
  },
  {
    slug: "business-process-automation",
    title: "Business Process Automation",
    shortDescription:
      "Streamline operations by automating manual processes across your organisation.",
    tagline: "Remove operational bottlenecks and manual data entry so your team can focus on growth.",
    category: "AI & Automation",
    categorySlug: "ai-automation",
    highlight: true,
    iconName: "Zap",
    whyBetter: [
      {
        title: "Eliminate Manual Data Entry",
        description:
          "Stop paying skilled staff to copy-paste information between spreadsheets, emails, and CRMs. We make data flow automatically.",
      },
      {
        title: "Faster Customer Turnaround",
        description:
          "Cut client onboarding and quote turnaround times from days to minutes with automated document creation and routing.",
      },
      {
        title: "Zero Forgotten Steps",
        description:
          "Every task is tracked and accounted for. Never miss a customer follow-up, an invoice approval, or a contract renewal.",
      },
      {
        title: "Reliable & Monitored",
        description:
          "Our automations run on monitored servers with automatic error handling so nothing falls through the cracks.",
      },
    ],
    comparison: {
      typical: [
        "Employees spending 10-15 hours a week manually re-typing data across disconnected tools",
        "Customer onboarding takes days because documents sit waiting in email inboxes",
        "Fragile scripts that stop working without warning, leaving orders unfulfilled",
        "No documentation, meaning processes break whenever an important employee is on holiday",
      ],
      frontier: [
        "Instant, automated data transfer between all your business platforms in seconds",
        "Frictionless 5-minute onboarding with automated contracts and instant welcome emails",
        "Monitored server-grade automations that retry automatically if an external service is down",
        "Clear visual process maps and documentation so your entire team knows how systems work",
      ],
    },
    deliverables: [
      {
        title: "End-to-End Process Mapping",
        description: "Visual diagram showing your current steps, bottlenecks, and the new automated workflow.",
      },
      {
        title: "Automated Client Onboarding",
        description: "Online intake form that creates customer records, generates contracts, and sends welcome packs.",
      },
      {
        title: "Invoice & Bill Matching",
        description: "Automatic extraction of invoice details and matching against purchase orders.",
      },
      {
        title: "Smart Notification System",
        description: "Automatic Slack or email pings to the right person when their action or approval is needed.",
      },
      {
        title: "Operations Dashboard",
        description: "Clear view of active tasks, processing speeds, and saved staff hours.",
      },
      {
        title: "Failover Protection",
        description: "Automatic retries and safety alerts if any third-party system ever fails.",
      },
    ],
    techStack: ["Node.js / Python", "PostgreSQL", "Webhooks", "Slack API", "AWS"],
    process: [
      {
        step: "01",
        title: "Process Discovery",
        description: "We review your daily operations to identify the most time-consuming manual tasks.",
      },
      {
        step: "02",
        title: "Workflow Design",
        description: "Designing the streamlined digital process and getting your team's feedback.",
      },
      {
        step: "03",
        title: "Build & Integration",
        description: "Building the automated pipelines and connecting all your daily tools.",
      },
      {
        step: "04",
        title: "Phased Rollout",
        description: "Testing side-by-side with your existing workflow, verifying accuracy, and switching over.",
      },
    ],
    faqs: [
      {
        question: "Will this disrupt our daily business while being built?",
        answer: "No. We build and test everything in a secure staging environment, only switching over once everything is verified and your team is ready.",
      },
      {
        question: "How much time does this typically save?",
        answer: "Most clients save between 10 to 30 hours of manual staff work per week within the first month.",
      },
    ],
  },
  {
    slug: "api-system-integrations",
    title: "API & System Integrations",
    shortDescription:
      "Connect your tools, platforms, and data sources into a unified system.",
    tagline: "Connect all your software tools into one unified, synchronized system.",
    category: "AI & Automation",
    categorySlug: "ai-automation",
    highlight: true,
    iconName: "Layers",
    whyBetter: [
      {
        title: "No More Disconnected Systems",
        description:
          "Connect your CRM, accounting, inventory, and marketing tools so customer data is always up to date everywhere.",
      },
      {
        title: "Zero Lost Records",
        description:
          "If one of your tools is temporarily down or under maintenance, our system safely holds the data and sends it as soon as it recovers.",
      },
      {
        title: "Two-Way Synchronization",
        description:
          "Update a customer record in one tool and see it update across all other connected platforms automatically.",
      },
      {
        title: "Custom Built for Your Stack",
        description:
          "No matter what combination of tools or legacy software you use, we build reliable bridges between them.",
      },
    ],
    comparison: {
      typical: [
        "Fragile no-code zaps that stop working whenever a field name changes slightly",
        "If a platform goes down for 10 minutes, all customer data during that time is permanently lost",
        "Duplicate records and conflicting customer information scattered across different departments",
        "Batch updates run once a day, leaving staff with outdated information all afternoon",
      ],
      frontier: [
        "Reliable custom connectors with automated retry logic and queueing protection",
        "Zero data loss: every incoming event is safely saved and delivered even during outages",
        "Intelligent conflict rules that ensure you always see the freshest, most accurate data",
        "Real-time updates that synchronize in under a second across all your connected software",
      ],
    },
    deliverables: [
      {
        title: "Custom API Middleware",
        description: "Reliable connector translating and syncing data between your software tools.",
      },
      {
        title: "Webhook Ingestion Engine",
        description: "Real-time receiver that catches events (sales, leads, updates) as soon as they happen.",
      },
      {
        title: "Data Backup & Queue",
        description: "Guarantees no records are lost even if an external tool goes offline.",
      },
      {
        title: "Data Formatting & Cleanup",
        description: "Automatically standardizes phone numbers, dates, and names across all tools.",
      },
      {
        title: "Integration Health Monitor",
        description: "Console displaying live sync status, throughput, and error alerts.",
      },
      {
        title: "Clear Technical Documentation",
        description: "Full guide detailing how each system connects and how data flows.",
      },
    ],
    techStack: ["Node.js / TypeScript", "Python", "Redis", "PostgreSQL", "AWS"],
    process: [
      {
        step: "01",
        title: "System Audit",
        description: "We review the software you currently use and map which data needs to move where.",
      },
      {
        step: "02",
        title: "Data Flow Blueprint",
        description: "Defining the exact fields, sync triggers, and conflict-resolution rules.",
      },
      {
        step: "03",
        title: "Connector Build & Testing",
        description: "Developing the integration and running simulations to verify zero dropped data.",
      },
      {
        step: "04",
        title: "Go-Live & Monitoring",
        description: "Connecting live accounts, monitoring initial syncs, and activating 24/7 health alerts.",
      },
    ],
    faqs: [
      {
        question: "What happens if our CRM or accounting tool is down?",
        answer: "Our queue safely holds the incoming data in encrypted storage and delivers it automatically the moment the service comes back online.",
      },
      {
        question: "Can you connect old on-premise software to modern cloud tools?",
        answer: "Yes. We build secure bridges connecting older SQL databases or local servers to modern cloud apps.",
      },
    ],
  },

  // ==========================================
  // BUSINESS SYSTEMS
  // ==========================================
  {
    slug: "crm-business-systems",
    title: "CRM & Business Systems",
    shortDescription:
      "Customer relationship management and operational systems configured for your workflows.",
    tagline: "CRM systems configured around how your sales team actually works and closes deals.",
    category: "Business Systems",
    categorySlug: "business-systems",
    iconName: "Settings2",
    whyBetter: [
      {
        title: "Configured for High Adoption",
        description:
          "Most CRMs are too complicated, so sales reps stop using them. We configure clean, straightforward pipelines that reps love using.",
      },
      {
        title: "Instant Inbound Lead Routing",
        description:
          "Route website inquiries to the right salesperson's phone within 2 minutes so you can respond while the lead is hot.",
      },
      {
        title: "Automatic Activity Logging",
        description:
          "Emails, calls, and meetings log automatically into customer timelines so reps spend time selling instead of typing notes.",
      },
      {
        title: "Clear Revenue Forecasting",
        description:
          "Executive dashboards that show actual deal stages, pipeline values, and expected monthly revenue in plain numbers.",
      },
    ],
    comparison: {
      typical: [
        "Complicated, bloated CRM setup that sales reps avoid using in favor of messy spreadsheets",
        "New leads sitting in an inbox for 24 hours before being routed to a salesperson",
        "Reps wasting an hour every day typing manual notes and copying email threads",
        "Reports full of vanity numbers that don't reflect actual closing rates or revenue",
      ],
      frontier: [
        "Streamlined CRM configured specifically to support your team's real sales process",
        "Instant lead notification via WhatsApp or SMS so reps can follow up within minutes",
        "Automatic two-way sync capturing emails, calendar meetings, and proposals without manual typing",
        "Clear executive dashboards tracking deal velocity, win rates, and reliable revenue forecasts",
      ],
    },
    deliverables: [
      {
        title: "Custom CRM Configuration",
        description: "Deal stages, pipelines, and mandatory fields tailored to your sales cycle.",
      },
      {
        title: "Automated Lead Routing",
        description: "Instant assignment of new inquiries by territory, deal size, or rep capacity.",
      },
      {
        title: "Email & Calendar Sync",
        description: "Bi-directional connection logging client emails and scheduled meetings automatically.",
      },
      {
        title: "Data Cleanup & Migration",
        description: "Cleaning and importing your existing contacts and past customer history.",
      },
      {
        title: "Sales Forecasting Dashboard",
        description: "Executive visibility into pipeline value, conversion rates, and monthly revenue.",
      },
      {
        title: "Team Training & Quick Guides",
        description: "Short, practical video guides ensuring your team adopts the CRM immediately.",
      },
    ],
    techStack: ["HubSpot", "Salesforce", "PostgreSQL", "Next.js", "Stripe"],
    process: [
      {
        step: "01",
        title: "Sales Process Review",
        description: "We review how leads find you, how you qualify them, and what steps lead to a closed deal.",
      },
      {
        step: "02",
        title: "Pipeline & Property Setup",
        description: "Customizing deal stages, customer fields, and automated task reminders.",
      },
      {
        step: "03",
        title: "Automations & Data Import",
        description: "Wiring up email sync, calendar booking, and cleaning up your historical contacts.",
      },
      {
        step: "04",
        title: "Team Onboarding",
        description: "Walking your sales team through the system with hands-on practice.",
      },
    ],
    faqs: [
      {
        question: "Should we use HubSpot or build a custom CRM?",
        answer: "If your sales process is standard B2B, configuring HubSpot or Salesforce is fast and cost-effective. If you have unique operational requirements, a custom platform can save thousands in licensing fees.",
      },
      {
        question: "What if our existing customer data is messy?",
        answer: "We clean, de-duplicate, and format your contact records before importing them into the new CRM.",
      },
    ],
  },
  {
    slug: "database-solutions",
    title: "Database Solutions",
    shortDescription:
      "Structured data systems designed for performance, reliability, and scale.",
    tagline: "Fast, reliable data architecture that never loses a record and never slows down your software.",
    category: "Business Systems",
    categorySlug: "business-systems",
    iconName: "Database",
    whyBetter: [
      {
        title: "Sub-Second Query Speeds",
        description:
          "We structure and index your database so searching through millions of customer records or generating reports takes milliseconds.",
      },
      {
        title: "Disaster-Proof Backups",
        description:
          "Continuous automated backups allow you to restore your database to any exact minute if accidental deletions occur.",
      },
      {
        title: "Zero Downtime Updates",
        description:
          "We update and expand database tables in the background without taking your application offline.",
      },
      {
        title: "Strict Encryption & Protection",
        description:
          "All sensitive customer and financial data is encrypted at rest and in transit, complying with UK and EU privacy regulations.",
      },
    ],
    comparison: {
      typical: [
        "Unindexed databases that slow down to a crawl as your customer records grow",
        "Database updates that risk corrupting data or taking the site down for hours",
        "Irregular manual backups that fail when a real emergency strikes",
        "Overpaying for expensive cloud servers to mask poorly structured queries",
      ],
      frontier: [
        "Optimized database architecture responding in milliseconds even under high volume",
        "Safe, version-controlled database migrations with zero user interruption",
        "Automated daily backups and point-in-time recovery tested with real recovery drills",
        "Smart database tuning that cuts cloud server bills by up to 50%",
      ],
    },
    deliverables: [
      {
        title: "Optimized Database Architecture",
        description: "Organized PostgreSQL or MySQL schema with clear relationships and fast indexing.",
      },
      {
        title: "Speed & Query Optimization",
        description: "Speed audit eliminating slow database queries and server bottlenecks.",
      },
      {
        title: "High-Speed Caching Layer",
        description: "In-memory caching (Redis) so frequent data loads instantly.",
      },
      {
        title: "Automated Daily Backups",
        description: "Encrypted snapshots stored in separate cloud zones for disaster recovery.",
      },
      {
        title: "Safe Data Migration",
        description: "Extraction, cleaning, and transfer of historical data without downtime.",
      },
      {
        title: "Live Health Telemetry",
        description: "Alerts for CPU spikes, storage capacity, and connection health.",
      },
    ],
    techStack: ["PostgreSQL", "MySQL", "Redis", "Supabase", "AWS RDS"],
    process: [
      {
        step: "01",
        title: "Database Health Audit",
        description: "Analyzing query speeds, table sizes, and bottlenecks.",
      },
      {
        step: "02",
        title: "Schema & Index Optimization",
        description: "Refactoring table structures and adding strategic indexes for speed.",
      },
      {
        step: "03",
        title: "Caching & Stress Testing",
        description: "Deploying high-speed caching and testing under heavy simulated traffic.",
      },
      {
        step: "04",
        title: "Backup & Health Monitoring",
        description: "Activating automated backup schedules and live health monitors.",
      },
    ],
    faqs: [
      {
        question: "Can you fix our slow database without rewriting our app?",
        answer: "Yes. Adding strategic indexes, tuning server parameters, and adding a caching layer usually delivers an instant 5x speed boost without touching application code.",
      },
      {
        question: "How do you protect against data loss?",
        answer: "We configure automated point-in-time backups and write-ahead logs, allowing full recovery to any exact minute.",
      },
    ],
  },
  {
    slug: "digital-transformation",
    title: "Digital Transformation",
    shortDescription:
      "Modernise your operations with technology that improves how your business works.",
    tagline: "Replace slow paper and spreadsheet habits with intuitive modern digital systems.",
    category: "Business Systems",
    categorySlug: "business-systems",
    iconName: "RefreshCw",
    whyBetter: [
      {
        title: "Practical Steps Without Business Halts",
        description:
          "We never attempt risky all-at-once overhauls. We modernize one department or workflow at a time so your business keeps running smoothly.",
      },
      {
        title: "Staff Actually Love Using It",
        description:
          "Software fails if employees find it confusing. We design simple, clean interfaces with step-by-step training so your team adapts immediately.",
      },
      {
        title: "Say Goodbye to Paper & Spreadsheets",
        description:
          "Replace scattered Excel files and physical paperwork with a secure online portal that updates in real time.",
      },
      {
        title: "Clear Return on Investment",
        description:
          "We measure the exact hours saved, errors eliminated, and capacity gained to ensure every project pays for itself.",
      },
    ],
    comparison: {
      typical: [
        "Expensive consultancies delivering 100-page slide decks with zero actual software",
        "Forcing complex corporate software that confuses staff and requires months of training",
        "Attempting to change everything overnight, causing panic and lost customer records",
        "Leaving after launch without providing staff training or ongoing support",
      ],
      frontier: [
        "Actionable, practical modernization roadmaps backed by working software and automations",
        "Intuitive, consumer-simple tools designed for high staff adoption from day one",
        "Phased, low-risk rollout modernizing one department or workflow at a time",
        "Friendly video training, recorded guides, and ongoing partnership support",
      ],
    },
    deliverables: [
      {
        title: "Operational Bottleneck Audit",
        description: "Clear review of where your team currently loses time on manual work.",
      },
      {
        title: "Phased Modernization Roadmap",
        description: "Step-by-step plan showing timelines, costs, and expected time savings.",
      },
      {
        title: "Central Cloud Portal",
        description: "Online workspace replacing paper forms, shared folders, and spreadsheets.",
      },
      {
        title: "Customer Self-Service Portal",
        description: "Web portal where customers can check status, upload files, and make payments.",
      },
      {
        title: "Staff Video Tutorials",
        description: "Short, friendly video guides explaining every new workflow step.",
      },
      {
        title: "Time-Saved & Progress Reporting",
        description: "Clear metrics tracking efficiency gains and customer satisfaction.",
      },
    ],
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Cloudflare", "Tailwind CSS"],
    process: [
      {
        step: "01",
        title: "Team Shadowing & Review",
        description: "We spend time understanding your team's actual daily routine and pain points.",
      },
      {
        step: "02",
        title: "Digital Workflow Prototype",
        description: "Designing the simplest, easiest digital workflow to replace manual paperwork.",
      },
      {
        step: "03",
        title: "Pilot Testing with Staff",
        description: "Testing with a small group of your staff, gathering feedback, and polishing.",
      },
      {
        step: "04",
        title: "Company-Wide Rollout",
        description: "Full team rollout with hands-on training and retirement of legacy paper systems.",
      },
    ],
    faqs: [
      {
        question: "How do you help non-tech-savvy staff adapt?",
        answer: "We design screens that look like familiar consumer apps — big clear buttons, plain English, and zero confusing jargon — accompanied by short video guides.",
      },
      {
        question: "How do we measure the success of this project?",
        answer: "We track the hours spent on manual work before and after launch, showing clear weekly time savings and faster customer response times.",
      },
    ],
  },
  {
    slug: "technology-consulting",
    title: "Technology Consulting",
    shortDescription:
      "Strategic advice on technology decisions, architecture, and implementation.",
    tagline: "Honest, plain-English technical advice and fractional CTO leadership for business owners.",
    category: "Business Systems",
    categorySlug: "business-systems",
    iconName: "Wrench",
    whyBetter: [
      {
        title: "100% Unbiased — Zero Commissions",
        description:
          "We take no kickbacks from software vendors. Our advice is based purely on what is best and most cost-effective for your business.",
      },
      {
        title: "Plain-English Communication",
        description:
          "No technical jargon or acronyms. We explain technology choices in terms of cost, speed, business risk, and practical outcomes.",
      },
      {
        title: "Active Senior Practitioners",
        description:
          "We build and deploy software every day. Our advice is grounded in real production experience, not theoretical textbooks.",
      },
      {
        title: "Cloud Bill Reductions",
        description:
          "We frequently find 30% to 50% in wasted monthly cloud server spending within days of auditing an infrastructure setup.",
      },
    ],
    comparison: {
      typical: [
        "Big consulting firms charging $25k+ for junior analysts recycling generic internet slides",
        "Agencies pushing specific software because they receive lucrative referral commissions",
        "Theoretical advisors who haven't built or launched real software in years",
        "Vague advice that leaves your internal team confused about what to do next",
      ],
      frontier: [
        "Direct advice from active senior software architects who understand business reality",
        "Completely independent recommendations focused solely on your commercial success",
        "Hands-on expertise across modern cloud, web, AI, and scalable architecture",
        "Actionable, step-by-step blueprints and implementation checklists your team can follow",
      ],
    },
    deliverables: [
      {
        title: "Technology Architecture Roadmap",
        description: "Clear blueprint showing recommended software, infrastructure, and milestones.",
      },
      {
        title: "Codebase & Security Review",
        description: "Independent audit of your software quality, test coverage, and hidden technical debt.",
      },
      {
        title: "Cloud Cost Optimization Report",
        description: "Actionable plan to eliminate idle server costs and lower monthly cloud bills.",
      },
      {
        title: "Vendor Proposal Evaluation",
        description: "Impartial review of quotes and proposals from other agencies to protect your budget.",
      },
      {
        title: "Fractional CTO Advisory",
        description: "Regular strategic advice in executive meetings to guide key technology decisions.",
      },
      {
        title: "Security & Backup Audit",
        description: "Comprehensive check ensuring your business data is safe, backed up, and compliant.",
      },
    ],
    techStack: ["Cloud Architecture", "AWS / Azure / GCP", "Security Auditing", "FinOps Cost Modeling"],
    process: [
      {
        step: "01",
        title: "Commercial Goals Review",
        description: "Understanding your growth targets, budget parameters, and current technology challenges.",
      },
      {
        step: "02",
        title: "Technical Deep-Dive",
        description: "Reviewing code, cloud invoices, tool licenses, and team workflows.",
      },
      {
        step: "03",
        title: "Executive Blueprint",
        description: "Presenting plain-English findings, cost trade-offs, and prioritized action steps.",
      },
      {
        step: "04",
        title: "Implementation Guidance",
        description: "Guiding your internal team or vendors to ensure the plan is executed properly.",
      },
    ],
    faqs: [
      {
        question: "Can you review work done by another agency or freelancer?",
        answer: "Yes. We frequently conduct independent code reviews and progress audits to verify whether an agency is delivering quality work or accumulating technical debt.",
      },
      {
        question: "What is a Fractional CTO?",
        answer: "It gives your business the strategic guidance of an experienced Chief Technology Officer on a part-time or advisory basis, without the cost of a full-time executive salary.",
      },
    ],
  },

  // ==========================================
  // DATA & INFRASTRUCTURE
  // ==========================================
  {
    slug: "cloud-solutions",
    title: "Cloud Solutions",
    shortDescription:
      "Cloud architecture, migration, and managed infrastructure for modern businesses.",
    tagline: "Reliable cloud infrastructure that scales with your growth and never goes down.",
    category: "Data & Infrastructure",
    categorySlug: "data-infrastructure",
    iconName: "Cloud",
    whyBetter: [
      {
        title: "Auto-Scaling When Traffic Spikes",
        description:
          "Your servers scale up automatically during busy periods and scale down during quiet hours so you never overpay for idle compute power.",
      },
      {
        title: "Fast Global Delivery",
        description:
          "We distribute your website assets across global networks so customers around the world experience instant load times.",
      },
      {
        title: "Defined in Code (Terraform)",
        description:
          "Your entire cloud setup is documented in code. In an emergency, your complete infrastructure can be recreated in minutes.",
      },
      {
        title: "24/7 Proactive Monitoring",
        description:
          "Automated health checks alert us to memory or traffic spikes before your customers ever notice an issue.",
      },
    ],
    comparison: {
      typical: [
        "Servers manually configured with no documentation of what settings were changed",
        "Single servers that crash and take down your entire website when hardware fails",
        "Cloud bills multiplying each month because no one is managing idle resources",
        "No automated backups, leaving systems vulnerable to human error or ransomware",
      ],
      frontier: [
        "Modern infrastructure-as-code documenting every server, database, and firewall rule",
        "Multi-zone redundancy with automatic self-healing failover to guarantee uptime",
        "Proactive cost governance that rightsizes servers and saves up to 40% monthly",
        "Automated encrypted daily snapshots stored in isolated cloud zones",
      ],
    },
    deliverables: [
      {
        title: "Cloud Architecture Design",
        description: "Secure, scalable cloud network setup on AWS, Google Cloud, or Cloudflare.",
      },
      {
        title: "Infrastructure as Code",
        description: "Clean, reproducible scripts managing all your servers and databases.",
      },
      {
        title: "Global CDN & DDoS Protection",
        description: "Shield your website from malicious attacks and speed up worldwide delivery.",
      },
      {
        title: "Automated Deployment Pipeline",
        description: "Push software updates with one click and zero website downtime.",
      },
      {
        title: "Health & Uptime Monitoring",
        description: "Real-time alerts for server health, CPU usage, and response speeds.",
      },
      {
        title: "Monthly Cost Optimization",
        description: "Regular review to eliminate wasted resources and keep cloud spend lean.",
      },
    ],
    techStack: ["AWS", "Google Cloud", "Cloudflare", "Terraform", "Docker"],
    process: [
      {
        step: "01",
        title: "Workload Assessment",
        description: "Auditing current traffic, database sizes, security requirements, and budget.",
      },
      {
        step: "02",
        title: "Cloud Architecture Build",
        description: "Creating the new cloud environment in code within a secure sandbox.",
      },
      {
        step: "03",
        title: "Data Migration & Stress Test",
        description: "Syncing data volumes and testing failover under simulated high traffic.",
      },
      {
        step: "04",
        title: "Zero-Downtime Cutover",
        description: "Switching traffic seamlessly with 24/7 monitoring activated.",
      },
    ],
    faqs: [
      {
        question: "Can you migrate our software to the cloud without downtime?",
        answer: "Yes. We set up the cloud servers in parallel, synchronize databases in real time, and switch traffic over seamlessly.",
      },
      {
        question: "Which cloud provider do you recommend?",
        answer: "We recommend AWS for enterprise flexibility, Google Cloud for data/AI, and Cloudflare/Vercel for ultra-fast web applications.",
      },
    ],
  },
  {
    slug: "software-modernization",
    title: "Software Modernization",
    shortDescription:
      "Upgrade legacy systems to modern, maintainable technology stacks.",
    tagline: "Upgrade aging software piece-by-piece without risking business disruption.",
    category: "Data & Infrastructure",
    categorySlug: "data-infrastructure",
    iconName: "RefreshCw",
    whyBetter: [
      {
        title: "Zero-Downtime Migration",
        description:
          "We never do risky 'big-bang' complete rewrites. We replace old modules one at a time so your business keeps running without pause.",
      },
      {
        title: "Modern, Maintainable Tech",
        description:
          "Upgrade to modern TypeScript and cloud technology that makes hiring developers easy and drastically lowers maintenance costs.",
      },
      {
        title: "Preserve All Business Rules",
        description:
          "We thoroughly test existing behavior before touching code, ensuring all special pricing, customer rules, and edge cases are preserved.",
      },
      {
        title: "Faster Speeds & Better Security",
        description:
          "Modernized applications run up to 5x faster, work cleanly on mobile phones, and eliminate outdated security vulnerabilities.",
      },
    ],
    comparison: {
      typical: [
        "Risky all-or-nothing rewrites that drag on for two years and get cancelled before launch",
        "Legacy code that no current employee understands, leaving management afraid to touch it",
        "Releases that take weeks of manual testing and cause frequent weekend emergency fixes",
        "Inability to connect with modern payment gateways, mobile apps, or AI tools",
      ],
      frontier: [
        "Proven incremental migration replacing one feature per sprint with continuous delivery",
        "Thorough documentation and reverse-engineering of all historical business rules",
        "Automated testing pipelines that deploy tested updates in minutes rather than weeks",
        "Clean, modern APIs ready to connect with any mobile app, CRM, or cloud service",
      ],
    },
    deliverables: [
      {
        title: "Legacy Codebase Audit",
        description: "Mapping existing business logic, security risks, and database structures.",
      },
      {
        title: "Phased Migration Plan",
        description: "Step-by-step roadmap showing which modules are upgraded and when.",
      },
      {
        title: "Smart API Proxy Layer",
        description: "Transparent bridge routing user traffic between old and new systems smoothly.",
      },
      {
        title: "Modern User Interface",
        description: "Fresh, responsive web screens replacing outdated desktop-only designs.",
      },
      {
        title: "Automated Regression Tests",
        description: "Test harness verifying that calculations match legacy numbers exactly.",
      },
      {
        title: "Database Modernization",
        description: "Cleaning and upgrading legacy database tables into modern structures.",
      },
    ],
    techStack: ["Next.js", "TypeScript", "Node.js / Python", "PostgreSQL", "Docker"],
    process: [
      {
        step: "01",
        title: "Logic Extraction & Audit",
        description: "Documenting hidden business rules, database relations, and security risks.",
      },
      {
        step: "02",
        title: "Test Suite Setup",
        description: "Setting up automated tests to ensure nothing breaks during migration.",
      },
      {
        step: "03",
        title: "Module-by-Module Upgrade",
        description: "Rebuilding and swapping out features in 2-week agile milestones.",
      },
      {
        step: "04",
        title: "Legacy Decommissioning",
        description: "Retiring old servers once 100% of functionality has moved to the modern stack.",
      },
    ],
    faqs: [
      {
        question: "Why not just rewrite our software from scratch all at once?",
        answer: "Over 70% of complete software rewrites fail or exceed budgets. Our incremental approach delivers working improvements in weeks while virtually eliminating risk.",
      },
      {
        question: "Will our customers notice the transition?",
        answer: "Only in a good way: pages will load faster, the screens will look modern, and features will work reliably on their phones.",
      },
    ],
  },
  {
    slug: "cybersecurity-solutions",
    title: "Cybersecurity & Security Solutions",
    shortDescription:
      "Protect your systems, data, and users with security built into every layer.",
    tagline: "Enterprise-grade security protections so your company data and clients stay safe.",
    category: "Data & Infrastructure",
    categorySlug: "data-infrastructure",
    iconName: "Lock",
    whyBetter: [
      {
        title: "Zero-Trust Architecture",
        description:
          "We operate on least privilege: every request and user must verify their identity. No backdoors, no exposed admin screens.",
      },
      {
        title: "Continuous Automated Vulnerability Checks",
        description:
          "Automated scanners check for security flaws and package vulnerabilities on every single software update before it goes live.",
      },
      {
        title: "Web Application Firewall (WAF)",
        description:
          "Intelligent cloud shielding that blocks malicious bots, brute-force password guessing, and hacking attempts automatically.",
      },
      {
        title: "Audit & Compliance Readiness",
        description:
          "We help you implement the security controls required to pass GDPR, SOC2, or enterprise vendor security questionnaires.",
      },
    ],
    comparison: {
      typical: [
        "Unencrypted passwords or API keys stored in plain text or public repositories",
        "Outdated software libraries running with known vulnerabilities for months",
        "Admin accounts protected only by weak passwords without Multi-Factor Authentication",
        "Zero security monitoring, meaning breaches are only discovered months after happening",
      ],
      frontier: [
        "Encrypted credential vaults with zero exposed keys or passwords anywhere",
        "Daily automated dependency scanning with urgent security patches applied within 24 hours",
        "Enforced Multi-Factor Authentication (MFA) and granular permissions across all portals",
        "Complete audit logs recording all data access and administrative changes for accountability",
      ],
    },
    deliverables: [
      {
        title: "Security & Vulnerability Audit",
        description: "Comprehensive check identifying open attack surfaces and security gaps.",
      },
      {
        title: "Cloud Firewall (WAF) Setup",
        description: "Edge firewall filtering malicious bot traffic and brute-force attacks.",
      },
      {
        title: "Multi-Factor Authentication (MFA)",
        description: "Secure login requiring two-factor codes or biometrics for all staff accounts.",
      },
      {
        title: "Encrypted Cloud Vaults",
        description: "All database credentials, API keys, and certificates stored in secure vaults.",
      },
      {
        title: "Activity Audit Logs",
        description: "Tamper-evident logs recording who accessed what data and when.",
      },
      {
        title: "Incident Response Plan",
        description: "Clear step-by-step procedures in case of a suspicious login or alert.",
      },
    ],
    techStack: ["Cloudflare WAF", "AWS KMS", "OpenSSL / TLS 1.3", "Snyk", "Docker"],
    process: [
      {
        step: "01",
        title: "Threat Modeling Audit",
        description: "Identifying vulnerabilities, exposed passwords, and access control gaps.",
      },
      {
        step: "02",
        title: "Remediation & Hardening",
        description: "Patching outdated packages, securing APIs, and turning on firewall filters.",
      },
      {
        step: "03",
        title: "Access Control & MFA",
        description: "Enforcing two-factor authentication across all staff and administrative accounts.",
      },
      {
        step: "04",
        title: "24/7 Monitoring & Compliance",
        description: "Activating automated vulnerability alerts and delivering executive security documentation.",
      },
    ],
    faqs: [
      {
        question: "Can you help us pass enterprise security questionnaires?",
        answer: "Yes. We audit your setup, implement required security controls (like encryption, MFA, and audit logs), and help complete the documentation.",
      },
      {
        question: "How often should security be audited?",
        answer: "We recommend automated daily vulnerability scanning in your deployment pipeline, paired with quarterly review audits.",
      },
    ],
  },
  {
    slug: "maintenance-support",
    title: "Maintenance & Support",
    shortDescription:
      "Ongoing technical support, monitoring, and improvements for your systems.",
    tagline: "Dedicated UK engineers monitoring, updating, and improving your software 24/7.",
    category: "Data & Infrastructure",
    categorySlug: "data-infrastructure",
    iconName: "Wrench",
    whyBetter: [
      {
        title: "Proactive Prevention",
        description:
          "We catch slow queries, database storage limits, and third-party API changes before they ever cause downtime for your customers.",
      },
      {
        title: "Fast Guaranteed Response SLA",
        description:
          "When you need help or have a question, you have a direct line to senior UK software engineers who know your codebase inside out.",
      },
      {
        title: "Monthly Feature Hours Included",
        description:
          "Your support plan includes dedicated development hours every month for minor feature tweaks, new reports, and layout improvements.",
      },
      {
        title: "Transparent Monthly Reporting",
        description:
          "Every month, you receive a clear report showing uptime percentages, security patches applied, and development work completed.",
      },
    ],
    comparison: {
      typical: [
        "Agencies that abandon you after launch, taking 48+ hours to respond to urgent tickets",
        "Vague monthly retainer invoices with zero detail on what work was actually done",
        "Security patches ignored until your website gets hacked or blacklisted by Google",
        "Junior help-desk staff reading scripts instead of engineers who can debug code",
      ],
      frontier: [
        "Fast response SLAs with direct Slack or phone access to senior software engineers",
        "Transparent monthly reports itemizing server metrics, patches, and feature hours spent",
        "Daily automated security scanning with critical security patches deployed within 24 hours",
        "Direct partnership with the same UK-based engineers who architected your software",
      ],
    },
    deliverables: [
      {
        title: "24/7 Global Uptime Monitoring",
        description: "Automated checks testing your site and APIs every 60 seconds from global locations.",
      },
      {
        title: "Priority Incident Response",
        description: "Guaranteed fast response times for critical issues and emergency hotfixes.",
      },
      {
        title: "Continuous Security Updates",
        description: "Regular testing and deployment of software framework and library updates.",
      },
      {
        title: "Database Tuning & Backup Checks",
        description: "Routine database index maintenance and verified mock recovery drills.",
      },
      {
        title: "Dedicated Monthly Feature Hours",
        description: "Allocated development time each month to build new tweaks and improvements.",
      },
      {
        title: "Monthly Executive Report",
        description: "Clear breakdown of uptime, applied updates, and recommended future roadmap items.",
      },
    ],
    techStack: ["BetterStack", "Sentry", "GitHub Actions", "AWS CloudWatch", "Next.js"],
    process: [
      {
        step: "01",
        title: "Codebase Onboarding",
        description: "Reviewing your code, documenting dependencies, and setting up error alerting.",
      },
      {
        step: "02",
        title: "Synthetic Monitoring Setup",
        description: "Deploying automated heartbeat tests on all critical customer pathways.",
      },
      {
        step: "03",
        title: "Direct Slack Channel",
        description: "Setting up a shared communication channel linking your team with our engineers.",
      },
      {
        step: "04",
        title: "Continuous Governance",
        description: "Applying weekly updates, monitoring performance, and executing monthly feature improvements.",
      },
    ],
    faqs: [
      {
        question: "Can you support software that was built by another agency?",
        answer: "Yes. We conduct an initial codebase onboarding sprint to inspect the code, document dependencies, and set up monitoring before taking over maintenance.",
      },
      {
        question: "Do unused feature hours roll over to the next month?",
        answer: "Yes, retainer hours can roll over for up to one billing cycle to give you flexibility for larger feature rollouts.",
      },
    ],
  },
];

export const serviceCategories: ServiceCategory[] = [
  {
    title: "Digital Development",
    slug: "digital-development",
    description:
      "We design and build the digital products your business needs — from websites and e-commerce to mobile apps and full platforms.",
    iconName: "Globe2",
    services: servicesData.filter((s) => s.categorySlug === "digital-development"),
  },
  {
    title: "AI & Automation",
    slug: "ai-automation",
    description:
      "We build practical AI and automation solutions that remove manual effort and make your operations faster and smarter.",
    iconName: "Bot",
    highlight: true,
    services: servicesData.filter((s) => s.categorySlug === "ai-automation"),
  },
  {
    title: "Business Systems",
    slug: "business-systems",
    description:
      "We build and implement the systems your business runs on — from CRMs to custom platforms and digital transformation.",
    iconName: "Workflow",
    services: servicesData.filter((s) => s.categorySlug === "business-systems"),
  },
  {
    title: "Data & Infrastructure",
    slug: "data-infrastructure",
    description:
      "We handle the technology behind your systems — cloud, security, modernisation, and ongoing support.",
    iconName: "Database",
    services: servicesData.filter((s) => s.categorySlug === "data-infrastructure"),
  },
];

export function getAllServices(): ServiceItem[] {
  return servicesData;
}

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return servicesData.find((s) => s.slug === slug);
}

export function getRelatedServices(currentSlug: string, count = 3): ServiceItem[] {
  const current = getServiceBySlug(currentSlug);
  if (!current) return servicesData.slice(0, count);

  const sameCategory = servicesData.filter(
    (s) => s.categorySlug === current.categorySlug && s.slug !== currentSlug
  );
  if (sameCategory.length >= count) {
    return sameCategory.slice(0, count);
  }

  const otherServices = servicesData.filter(
    (s) => s.categorySlug !== current.categorySlug && s.slug !== currentSlug
  );
  return [...sameCategory, ...otherServices].slice(0, count);
}
