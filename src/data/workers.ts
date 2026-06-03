export type Worker = {
  name: string;
  role: string;
  description: string;
  department: Department;
  type: "core" | "extended";
};

export type Department = "marketing" | "sales" | "finance";

// Revenue lifecycle pillars — the core packaging
export const revenuePillars = [
  {
    id: "pipeline" as const,
    label: "Generate Pipeline",
    headline: "Fill the top of funnel — automatically",
    description: "AI workers that create demand, rank you higher, and fill your pipeline with qualified prospects.",
    stat: "+3×",
    statLabel: "pipeline generated",
    workers: ["Content Strategist", "SEO Optimizer", "Campaign Manager", "Social Media Manager"],
  },
  {
    id: "revenue" as const,
    label: "Close Revenue",
    headline: "Turn pipeline into closed deals — faster",
    description: "AI workers that qualify leads, run outreach, manage deals, and accelerate your close rate.",
    stat: "94%",
    statLabel: "qualification accuracy",
    workers: ["Lead Qualifier", "Pipeline Manager", "Outreach Agent", "Deal Closer"],
  },
  {
    id: "cash" as const,
    label: "Protect Cash",
    headline: "Know your numbers — in real time",
    description: "AI workers that process invoices, audit expenses, forecast revenue, and keep you compliant.",
    stat: "70%",
    statLabel: "faster month-end close",
    workers: ["Invoice Processor", "Expense Auditor", "Revenue Forecaster", "Compliance Monitor"],
  },
];

// Departments still used for extended worker categorization
export const departments: { id: Department; label: string; description: string; icon: string }[] = [
  {
    id: "marketing",
    label: "Marketing",
    description: "Content, campaigns, SEO, analytics, and every channel your team runs.",
    icon: "📣",
  },
  {
    id: "sales",
    label: "Sales",
    description: "Prospecting, pipeline, proposals, contracts, and close.",
    icon: "🎯",
  },
  {
    id: "finance",
    label: "Finance",
    description: "AP, AR, compliance, forecasting, and month-end close.",
    icon: "📊",
  },
];

export const workers: Worker[] = [
  // Marketing — Core
  { name: "Content Strategist", role: "Content Planning & Creation", description: "Plans calendars, generates briefs, and produces high-performing copy across channels.", department: "marketing", type: "core" },
  { name: "SEO Optimizer", role: "Search & Visibility", description: "Audits pages, finds keyword gaps, and rewrites content to dominate organic rankings.", department: "marketing", type: "core" },
  { name: "Campaign Manager", role: "Campaign Orchestration", description: "Launches, monitors, and optimizes multi-channel campaigns with real-time budget allocation.", department: "marketing", type: "core" },
  { name: "Social Media Manager", role: "Social & Community", description: "Schedules posts, engages audiences, and tracks performance across every platform.", department: "marketing", type: "core" },

  // Marketing — Extended
  { name: "Email Marketer", role: "Email Campaigns", description: "Writes, segments, and A/B tests email sequences that drive conversions.", department: "marketing", type: "extended" },
  { name: "Ad Copywriter", role: "Paid Creative", description: "Generates high-converting ad copy for Google, Meta, LinkedIn, and TikTok.", department: "marketing", type: "extended" },
  { name: "Analytics Analyst", role: "Marketing Analytics", description: "Unifies cross-platform data into dashboards and surfaces actionable insights.", department: "marketing", type: "extended" },
  { name: "Brand Monitor", role: "Brand Intelligence", description: "Tracks mentions, sentiment, and competitive positioning in real time.", department: "marketing", type: "extended" },
  { name: "Landing Page Builder", role: "Conversion Design", description: "Creates and tests high-converting landing pages for any campaign.", department: "marketing", type: "extended" },
  { name: "PR Coordinator", role: "Public Relations", description: "Drafts press releases, pitches journalists, and manages media outreach.", department: "marketing", type: "extended" },
  { name: "Influencer Scout", role: "Influencer Marketing", description: "Identifies and manages influencer partnerships aligned with your brand.", department: "marketing", type: "extended" },
  { name: "Video Producer", role: "Video Content", description: "Scripts, storyboards, and produces short-form video for social and ads.", department: "marketing", type: "extended" },
  { name: "Webinar Host", role: "Event Marketing", description: "Plans, promotes, and runs webinars with automated follow-ups.", department: "marketing", type: "extended" },
  { name: "Localization Agent", role: "Global Marketing", description: "Adapts content for different markets, languages, and cultural contexts.", department: "marketing", type: "extended" },
  { name: "Competitor Analyst", role: "Competitive Intelligence", description: "Monitors competitor activity, pricing, and market positioning.", department: "marketing", type: "extended" },
  { name: "Referral Manager", role: "Growth & Referrals", description: "Designs and manages referral programs that turn customers into advocates.", department: "marketing", type: "extended" },

  // Sales — Core
  { name: "Lead Qualifier", role: "Lead Scoring", description: "Scores inbound leads in real time and routes qualified prospects to the right rep.", department: "sales", type: "core" },
  { name: "Pipeline Manager", role: "Deal Pipeline", description: "Tracks every deal stage, flags at-risk opportunities, and forecasts close dates.", department: "sales", type: "core" },
  { name: "Outreach Agent", role: "Prospecting", description: "Crafts personalized outreach across email, LinkedIn, and phone — at scale.", department: "sales", type: "core" },
  { name: "Deal Closer", role: "Negotiation & Close", description: "Prepares proposals, handles objections, and guides deals through final stages.", department: "sales", type: "core" },

  // Sales — Extended
  { name: "CRM Updater", role: "Data Hygiene", description: "Keeps your CRM clean with automatic enrichment and deduplication.", department: "sales", type: "extended" },
  { name: "Proposal Writer", role: "Proposals & Decks", description: "Generates tailored proposals and pitch decks from deal context.", department: "sales", type: "extended" },
  { name: "Territory Planner", role: "Territory Management", description: "Optimizes territory assignments and coverage strategy.", department: "sales", type: "extended" },
  { name: "Meeting Scheduler", role: "Calendar & Scheduling", description: "Coordinates meetings across time zones with smart availability.", department: "sales", type: "extended" },
  { name: "Call Analyst", role: "Conversation Intelligence", description: "Transcribes and analyzes sales calls to surface winning patterns.", department: "sales", type: "extended" },
  { name: "Contract Manager", role: "Contract Workflow", description: "Drafts, routes, and tracks contracts through review and e-signature.", department: "sales", type: "extended" },
  { name: "Renewal Agent", role: "Renewals & Retention", description: "Proactively engages customers before renewal dates.", department: "sales", type: "extended" },
  { name: "Demo Coordinator", role: "Demo Management", description: "Schedules demos, prepares environments, and follows up automatically.", department: "sales", type: "extended" },
  { name: "Quote Generator", role: "Pricing & Quotes", description: "Builds accurate quotes with approval routing built in.", department: "sales", type: "extended" },
  { name: "Win/Loss Analyst", role: "Deal Analytics", description: "Identifies patterns in wins and losses for strategy refinement.", department: "sales", type: "extended" },
  { name: "Partner Manager", role: "Channel Partnerships", description: "Manages co-selling motions and reports on channel revenue.", department: "sales", type: "extended" },
  { name: "Upsell Agent", role: "Expansion Revenue", description: "Identifies upsell and cross-sell opportunities within existing accounts.", department: "sales", type: "extended" },

  // Finance — Core
  { name: "Invoice Processor", role: "Accounts Payable", description: "Extracts, validates, and processes invoices with three-way matching.", department: "finance", type: "core" },
  { name: "Expense Auditor", role: "Expense Management", description: "Reviews expense reports against policy and flags violations instantly.", department: "finance", type: "core" },
  { name: "Revenue Forecaster", role: "Financial Planning", description: "Builds rolling forecasts using historical data and pipeline signals.", department: "finance", type: "core" },
  { name: "Compliance Monitor", role: "Regulatory Compliance", description: "Monitors transactions for regulatory violations and audit risks.", department: "finance", type: "core" },

  // Finance — Extended
  { name: "Payroll Coordinator", role: "Payroll Processing", description: "Calculates payroll, manages deductions, and ensures timely disbursement.", department: "finance", type: "extended" },
  { name: "Tax Preparer", role: "Tax Filing", description: "Organizes data, calculates liabilities, and prepares filings.", department: "finance", type: "extended" },
  { name: "Budget Analyst", role: "Budget Management", description: "Tracks budgets, flags overspend, and recommends reallocations.", department: "finance", type: "extended" },
  { name: "Cash Flow Monitor", role: "Treasury", description: "Tracks real-time cash positions and forecasts liquidity needs.", department: "finance", type: "extended" },
  { name: "Reconciliation Agent", role: "Account Reconciliation", description: "Matches transactions across bank statements and sub-ledgers.", department: "finance", type: "extended" },
  { name: "Procurement Agent", role: "Purchasing", description: "Manages purchase orders, vendor selection, and spend approvals.", department: "finance", type: "extended" },
  { name: "Financial Reporter", role: "Reporting & Close", description: "Generates monthly, quarterly, and annual financial statements.", department: "finance", type: "extended" },
  { name: "Fraud Detector", role: "Fraud Prevention", description: "Detects anomalies and flags potential fraud in real time.", department: "finance", type: "extended" },
  { name: "Vendor Manager", role: "Vendor Relations", description: "Tracks vendor performance and negotiates renewal terms.", department: "finance", type: "extended" },
  { name: "Collections Agent", role: "Accounts Receivable", description: "Automates payment reminders and escalates delinquent accounts.", department: "finance", type: "extended" },
  { name: "Audit Preparer", role: "Internal Audit", description: "Runs pre-audit checks and prepares audit-ready packages.", department: "finance", type: "extended" },
  { name: "Grant Manager", role: "Grant & Fund Tracking", description: "Tracks grant budgets, milestones, and reporting deadlines.", department: "finance", type: "extended" },
];

export const getCoreWorkers = (dept: Department) => workers.filter(w => w.department === dept && w.type === "core");
export const getExtendedWorkers = (dept: Department) => workers.filter(w => w.department === dept && w.type === "extended");
