import { motion } from "framer-motion";
import { useEffect } from "react";
import {
  Sparkles,
  Target,
  Briefcase,
  Infinity as InfinityIcon,
  MessageSquare,
  Wrench,
  CheckCircle2,
  ShieldCheck,
  Server,
  Lock,
  FileCheck2,
  Brain,
  LifeBuoy,
  Bot,
  Workflow,
  UserCog,
  BookOpen,
  Handshake,
  PhoneCall,
  FlaskConical,
  ArrowRight,
  Quote,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GetStartedButton } from "@/components/ui/get-started-button";
import platformFlagBg from "@/assets/platform-flag-bg.png";
import platformCarsBg from "@/assets/platform-cars-bg.png";

/* ----------------------------------------------------------------- */
/* Reusable shared visuals — match HowItWorksPage / Marketing aesthetic */
/* ----------------------------------------------------------------- */

/** Soft framed image surface used in hero + pillar cards. Same gradient
 *  treatment as the "visual side" tiles on HowItWorksPage. */
const FramedSurface = ({
  className = "",
  ratio = "aspect-[4/3]",
  label,
  children,
}: {
  className?: string;
  ratio?: string;
  label?: string;
  children?: React.ReactNode;
}) => (
  <div
    className={`relative ${ratio} w-full rounded-2xl border border-border bg-gradient-to-br from-secondary/60 via-background to-background overflow-hidden shadow-[0_20px_60px_-20px_hsl(var(--accent)/0.15)] ${className}`}
  >
    <div
      className="absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage:
          "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }}
    />
    <div className="absolute -bottom-16 -right-16 w-56 h-56 rounded-full bg-accent/15 blur-3xl pointer-events-none" />
    <div className="relative h-full w-full flex items-center justify-center text-[11px] font-semibold tracking-[0.18em] uppercase text-muted-foreground/70 px-6 text-center">
      {children ?? label}
    </div>
  </div>
);

/** Eyebrow label used above section H2s. */
const Eyebrow = ({
  children,
  tone = "accent",
  className = "",
}: {
  children: React.ReactNode;
  tone?: "accent" | "muted";
  className?: string;
}) => (
  <p
    className={`text-[11px] font-semibold tracking-[0.18em] uppercase ${
      tone === "accent" ? "text-accent" : "text-muted-foreground"
    } mb-5 ${className}`}
  >
    {children}
  </p>
);

/* ----------------------------------------------------------------- */
/* Content                                                           */
/* ----------------------------------------------------------------- */

const heroPills = [
  { label: "Marketing", href: "/marketing" },
  { label: "Sales", href: "/sales" },
  { label: "Finance", href: "/finance" },
  { label: "Human Resources", href: "/other-departments" },
  { label: "Recruiting", href: "/other-departments" },
  { label: "Customer Experience", href: "/other-departments" },
];

const doMoreCards = [
  {
    icon: Target,
    title: "Measurable performance",
    body: "Launch expert-designed, KPI-focused AI workers quickly. Set up by our team, tuned for yours.",
  },
  {
    icon: Briefcase,
    title: "Built for business",
    body: "EverWorker puts AI workforces within reach of those who use them. No code needed.",
  },
  {
    icon: InfinityIcon,
    title: "Limitless potential",
    body: "Business-friendly yet deeply capable, designed to scale to any AI use-case.",
  },
];

const compareCols = [
  {
    title: "Generic Chat AI",
    bullets: [
      "Low utility from generic chat outputs",
      "Unclear use-cases or work patterns",
      "Loose, sporadic adoption",
    ],
  },
  {
    title: "Builder Platforms",
    bullets: [
      "Unrealistic learning curves",
      "Relegated to technical operators",
      "Difficulty connecting data and business systems",
    ],
  },
  {
    title: "Point Solutions",
    bullets: [
      "Singular utility",
      "Generalized configuration",
      "Low or no data ownership",
    ],
  },
];

const everworkerBullets = [
  "Expert-designed solution templates, tuned to you",
  "Intuitive, conversational agent & workflow creation",
  "Impact clarity with AI worker analytics & reporting",
  "Owned and fully configured by us for your business",
  "Services and enablement, a partner in success",
];

const agentTypes = [
  {
    icon: Bot,
    title: "AI Workers",
    body: "Flexible agents able to accomplish complex tasks autonomously.",
  },
  {
    icon: Workflow,
    title: "AI Workflows",
    body: "Agents that execute complex tasks using highly structured, deterministic methods.",
  },
  {
    icon: UserCog,
    title: "AI Assistants",
    body: "Flexible agents that augment human workers across a wide variety of tasks.",
  },
];

const catalogChips = [
  "Your Custom AI Agents",
  "Sales & Marketing Templates",
  "Financial Operations Templates",
  "Customer Service Templates",
  "HR & Recruiting Templates",
];

type Pillar = {
  number: string;
  eyebrow: string;
  kicker: string;
  kickerAccent: string;
  cards: { title: string; body: string; link?: { label: string; href: string } }[];
};

const pillars: Pillar[] = [
  {
    number: "01",
    eyebrow: "Instructions",
    kicker: "Describe what you're",
    kickerAccent: "working on.",
    cards: [
      {
        title: "Just describe the job to do",
        body: "Start by explaining the role, goal or outcome. It's just like briefing a new team member. EverWorker turns everyday instructions into effective AI behavior, no engineering required.",
      },
      {
        title: "AI assists in crafting AI workers",
        body: "When creating new AI agents or workflows, use the platform's built-in agent to work even faster. Describe the solution you're looking for and the platform agent helps bring it to life.",
      },
      {
        title: "Start from pre-built",
        body: "Access proven, expert-designed departmental AI agent use-cases that we'll tune to your business's knowledge and systems. Fast-track meaningful AI ROI.",
      },
    ],
  },
  {
    number: "02",
    eyebrow: "Knowledge",
    kicker: "Add any relevant",
    kickerAccent: "context.",
    cards: [
      {
        title: "Train AI, like you do people",
        body: "Hand your AI workers the same guides, playbooks, and documentation you'd give a new human hire. AI workers learn from what your business already runs on.",
      },
      {
        title: "Memories organize knowledge",
        body: "When assigning relevant knowledge to a new AI worker, just toggle on company docs and data with a click. These \"memories\" serve as working context to drive consistent, relevant outputs.",
      },
      {
        title: "Complexity, handled for you",
        body: "There's no need to stress about vector databases or RAG pipelines when working with EverWorker. Our Enterprise Knowledge Engine smartly manages organizational data to create more effective and consistently high-performance AI agents.",
      },
    ],
  },
  {
    number: "03",
    eyebrow: "Skills",
    kicker: "Give agents tools",
    kickerAccent: "to work with.",
    cards: [
      {
        title: "Connect once, unlock everything",
        body: "Upload an OpenAPI spec (we can help) or connect a system once, and the platform automatically generates every action your workers can take. Low to no manual API setup required. EverWorker also works with MCP.",
      },
      {
        title: "Actions described in plain language",
        body: "Think of how you'd tell a human to use a tool or system, and that's the same way you craft actions in EverWorker. No programming, just describe what should happen.",
      },
      {
        title: "Works across your entire stack",
        body: "High-impact AI workforces take more than an LLM to execute real work assignments. EverWorker is built to work across your entire stack without friction, integrating where needed to do the job.",
      },
    ],
  },
];

const partnerCards = [
  {
    icon: Handshake,
    title: "Co-creation from day one",
    body: "From shaping ideas to creation of workers to enabling teams, we get hands on with your team.",
  },
  {
    icon: PhoneCall,
    title: "Always on-call experts",
    body: "Run into a blocker? Need to troubleshoot a workflow? Something else? We're here.",
  },
  {
    icon: FlaskConical,
    title: "AI R&D obsessive for you",
    body: "We bring the latest AI advances into the platform so your teams keep moving forward.",
  },
];

const securityCards = [
  {
    icon: Server,
    title: "It lives on your infrastructure, or ours, or your cloud.",
    body: "Choose managed hosting or run inside your infrastructure. Same platform, total flexibility.",
  },
  {
    icon: Lock,
    title: "Your data stays yours, we don't use it.",
    body: "You own your data, workflows and outputs. Zero hidden terms allowing us to use your data.",
  },
  {
    icon: FileCheck2,
    title: "Compliance aligned to enterprise standards.",
    body: "Deep documentation (SOC 2, ISO, GDPR) with dedicated Trust Center to ease security reviews.",
  },
  {
    icon: Brain,
    title: "Use whichever models (LLM) your team prefers.",
    body: "Bring your own model, or use our defaults. Let your business access the latest & greatest, flexibly.",
  },
  {
    icon: ShieldCheck,
    title: "Robust, global security posture, auditable.",
    body: "Access controls, logging, auditability and governance designed for real organizations.",
  },
  {
    icon: LifeBuoy,
    title: "Dedicated support for IT and Security questions.",
    body: "Real experts available when your teams need clear answers, not just tickets.",
  },
];

const evolveTicker = [
  "A new thinking model is available.",
  "34 new workers active.",
  "20% MoM token consumption reduction.",
];

/* ----------------------------------------------------------------- */
/* Page                                                              */
/* ----------------------------------------------------------------- */

const PlatformPage = () => {
  useEffect(() => {
    document.title = "Platform | The AI workforce platform for business leaders";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "EverWorker is the deeply capable yet business-friendly platform for creating, managing and optimizing AI workforces. Plain language. No code. Real outcomes.",
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* HERO — centered, matches HowItWorksPage rhythm */}
      <section className="relative pt-40 pb-24 px-6 lg:px-8 overflow-hidden gradient-mesh">
        <div className="gradient-orb w-[500px] h-[500px] bg-accent/20 top-20 -left-40 absolute" />
        <div className="gradient-orb w-[400px] h-[400px] bg-blue-400/15 bottom-10 right-[-10%] absolute" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[11px] font-semibold tracking-[0.18em] uppercase text-accent mb-6"
          >
            Platform Overview
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-8"
          >
            The AI workforce platform{" "}
            <span className="hero-gradient-text">designed for business leaders.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            EverWorker empowers leaders and their teams to deploy AI workers that execute real work and report their performance. Create and optimize AI workers rapidly without code, in plain language. From expert-designed departmental solutions, to a platform that grows with team maturity, your AI workforce grows here.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            <GetStartedButton>Let's Explore Your Goals</GetStartedButton>
          </motion.div>
        </div>

        {/* Hero supporting visual — single, framed, on-brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="max-w-6xl 2xl:max-w-7xl mx-auto mt-20 relative z-10"
        >
          <FramedSurface ratio="aspect-[16/7]" label="Platform overview" />
        </motion.div>
      </section>

      {/* DO MORE WITH MORE — section header pattern with gradient continuation */}
      <section className="py-24 lg:py-32 px-6 lg:px-8 bg-background">
        <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Eyebrow>Do more with more</Eyebrow>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-foreground leading-[1.15]">
              EverWorker puts proven AI workers to work, freeing your team from the everyday toil that's burning up time.{" "}
              <span className="hero-gradient-text">And once you see results, it frees you go further.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {doMoreCards.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-border/60 bg-card p-8 hover:shadow-[0_8px_30px_-12px_hsl(var(--accent)/0.2)] hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-5">
                  <c.icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{c.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARE — secondary band with our card pattern */}
      {/* COMPARE — embedded bento: dark "others" tile + red flag EverWorker tile + cars footer tile */}
      <section className="py-24 lg:py-32 px-6 lg:px-8 bg-background">
        <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-5 lg:gap-6">
            {/* LEFT — dark tile with "Others" comparison */}
            <div
              className="relative rounded-3xl text-white p-8 sm:p-10 lg:p-12 overflow-hidden"
              style={{ backgroundColor: "#0B1220" }}
            >
              <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-white/[0.03] blur-3xl pointer-events-none" />
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold tracking-tight leading-[1.1] mb-5 text-white">
                  The other "AI for work" platforms and tools
                </h2>
                <p className="text-white/70 leading-relaxed mb-10 max-w-md">
                  There's plenty of pressure to adopt AI for work. Most still feel lost on where to start.
                </p>

                <div className="space-y-8">
                  {compareCols.map((col) => (
                    <div key={col.title}>
                      <p className="text-[15px] font-semibold text-white mb-3">{col.title}</p>
                      <ul className="space-y-2.5">
                        {col.bullets.map((b) => (
                          <li key={b} className="text-[14px] text-white/75 leading-relaxed flex gap-2.5">
                            <span className="text-white/40 shrink-0 mt-[0.4em] block w-1 h-1 rounded-full bg-white/40" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT — stacked: red flag tile + cars image tile */}
            <div className="flex flex-col gap-5 lg:gap-6">
              {/* Red EverWorker tile with checkered flag bg */}
              <div
                className="relative rounded-3xl overflow-hidden p-8 sm:p-10 lg:p-12 text-white flex-1"
                style={{ backgroundColor: "hsl(var(--destructive))" }}
              >
                {/* Decorative red checkered flag bg image */}
                <img
                  src={platformFlagBg}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-destructive/60 via-destructive/40 to-transparent pointer-events-none" />
                <div className="relative">
                  <h3 className="text-3xl sm:text-4xl lg:text-[2.4rem] font-bold tracking-tight leading-[1.1] mb-5 text-white">
                    Working with EverWorker
                  </h3>
                  <p className="text-white/90 leading-relaxed mb-7 max-w-md">
                    EverWorker starts wherever you are and evolves with your readiness. It just keeps working.
                  </p>
                  <ul className="space-y-3">
                    {everworkerBullets.map((b) => (
                      <li key={b} className="text-[15px] text-white leading-relaxed flex gap-2.5">
                        <span className="shrink-0 mt-[0.55em] block w-1 h-1 rounded-full bg-white" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Cars image tile — Our platform + services difference */}
              <div
                className="relative rounded-3xl overflow-hidden p-8 sm:p-10 text-white border border-destructive/40"
                style={{
                  backgroundImage: `url(${platformCarsBg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#0B1220]/85 via-[#0B1220]/55 to-[#0B1220]/30 pointer-events-none" />
                <div className="relative max-w-md">
                  <p className="text-[16px] font-bold text-white mb-2">
                    Our platform <span className="text-accent">+</span> services difference
                  </p>
                  <p className="text-white/85 leading-relaxed text-[14px]">
                    Change in the age of AI is complicated. It's more than the tools and tech, so we go further. Get real people, partnered with you to drive success end-to-end.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEMPLATE LIBRARY / DEPARTMENTS — centered, on-brand pill set */}
      <section className="py-24 lg:py-32 px-6 lg:px-8 bg-background">
        <div className="max-w-5xl mx-auto text-center">
          <Eyebrow>Template library</Eyebrow>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
            Early AI wins give you traction.{" "}
            <span className="hero-gradient-text">Our template library is your first start.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mt-6 max-w-2xl mx-auto">
            Transform business functions rapidly with department-specific AI workforces ready to configure to your business's data, tools and everyday context. Find your department to get started.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {heroPills.map((p) => (
              <a
                key={p.label}
                href={p.href}
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium text-foreground hover:border-accent/40 hover:bg-accent/5 transition-all"
              >
                {p.label}
                <ArrowRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* AGENT TYPES + CATALOG — secondary band, centered header */}
      <section className="py-24 lg:py-32 px-6 lg:px-8 bg-secondary/30 border-y border-border/60">
        <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <Eyebrow>Platform overview</Eyebrow>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-foreground leading-[1.15]">
              The deeply capable yet business-friendly platform{" "}
              <span className="hero-gradient-text">for creating, managing and optimizing AI workforces.</span>
            </h2>
          </div>

          {/* Agents in Action */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <Eyebrow tone="muted" className="mb-3">Agents in Action</Eyebrow>
              <p className="text-lg text-foreground/80">
                Deploy a variety of agent types with flexible interaction models
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {agentTypes.map((a) => (
                <div
                  key={a.title}
                  className="rounded-2xl border border-border/60 bg-card p-7 hover:shadow-[0_8px_30px_-12px_hsl(var(--accent)/0.2)] hover:-translate-y-0.5 transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
                    <a.icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{a.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{a.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* AI Agent Catalog */}
          <div className="text-center mb-12">
            <Eyebrow tone="muted" className="mb-4">AI Agent Catalog</Eyebrow>
            <div className="flex flex-wrap justify-center gap-3">
              {catalogChips.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground/80"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          <FramedSurface ratio="aspect-[16/7]" label="Platform diagram" />
        </div>
      </section>

      {/* JOB DESCRIPTION INTRO */}
      <section className="py-24 lg:py-32 px-6 lg:px-8 bg-background">
        <div className="max-w-5xl mx-auto text-center">
          <Eyebrow>Three steps</Eyebrow>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
            If you can write the job description,{" "}
            <span className="hero-gradient-text">you can create the AI worker to do the work.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Three steps, radically simpler AI workforce creation. Describe your needs, provide relevant knowledge and assign skills – your AI workers do the rest. The platform makes this entire process as intuitive as onboarding a new team member.
          </p>
        </div>
      </section>

      {/* THREE PILLARS — centered eyebrow + kicker + 3-card grid (no alternating image rows) */}
      {pillars.map((p, idx) => {
        const PillarIcon = idx === 0 ? MessageSquare : idx === 1 ? BookOpen : Wrench;
        const isAlt = idx % 2 === 1;
        return (
          <section
            key={p.eyebrow}
            className={`py-24 lg:py-32 px-6 lg:px-8 ${isAlt ? "bg-secondary/30 border-y border-border/60" : "bg-background"}`}
          >
            <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <div className="inline-flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <PillarIcon className="h-4 w-4 text-accent" />
                  </div>
                  <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-accent">
                    {p.number} — {p.eyebrow}
                  </p>
                </div>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
                  {p.kicker}{" "}
                  <span className="hero-gradient-text">{p.kickerAccent}</span>
                </h3>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {p.cards.map((card, i) => (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="rounded-2xl border border-border/60 bg-card p-7 hover:shadow-[0_8px_30px_-12px_hsl(var(--accent)/0.2)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col"
                  >
                    <FramedSurface ratio="aspect-[5/3]" className="mb-6" label={`${p.eyebrow} — ${i + 1}`} />
                    <h4 className="text-lg font-semibold text-foreground mb-2 leading-snug">
                      {card.title}
                    </h4>
                    <p className="text-[15px] text-muted-foreground leading-relaxed">
                      {card.body}
                    </p>
                    {card.link && (
                      <a
                        href={card.link.href}
                        className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
                      >
                        {card.link.label} <ArrowRight className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* EVOLVE — dark band, mirrors HowItWorks 45-day promise feel */}
      <section className="px-6 lg:px-8 py-24 lg:py-28 section-dark relative overflow-hidden">
        <div className="max-w-6xl 2xl:max-w-7xl mx-auto relative z-10 grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-accent-foreground/70 mb-5">
              Always evolving
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-background leading-[1.1] mb-6">
              Put AI agents to work and keep them performing{" "}
              <span className="text-accent">with the latest and greatest in AI.</span>
            </h2>
            <p className="text-lg text-background/70 leading-relaxed">
              We don't believe in one-shot, forever solutions. In this fast-changing AI landscape, ever-working means always adapting to the latest and greatest potentials of AI. With EverWorker, know that your AI workforce evolves and scales easily to meet the moment.
            </p>
          </div>
          <div className="space-y-3">
            {evolveTicker.map((t, i) => (
              <div
                key={t}
                className="rounded-xl border border-background/15 bg-background/[0.04] backdrop-blur p-5 flex items-center gap-4"
              >
                <div className="w-9 h-9 rounded-lg bg-accent/20 border border-accent/30 flex items-center justify-center shrink-0">
                  <Sparkles className="h-4 w-4 text-accent" />
                </div>
                <p className="text-background/90 font-medium">{t}</p>
                <span className="ml-auto text-[10px] font-semibold tracking-[0.18em] uppercase text-background/40">
                  0{i + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERSHIP */}
      <section className="py-24 lg:py-32 px-6 lg:px-8 bg-background">
        <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Eyebrow>Partnership</Eyebrow>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-foreground leading-[1.15]">
              Partnership drives you further.{" "}
              <span className="hero-gradient-text">Here, you get more than the best AI workforce platform.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mt-6">
              You aren't only onboarding to a platform with EverWorker, you're getting a partner in your successful AI journey. We help you imagine what's possible, we help get your first AI workers and workflows setup, we train and enable your teams to use them and we fixate just as much as you do on the outcomes you're after.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {partnerCards.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-border/60 bg-card p-8 hover:shadow-[0_8px_30px_-12px_hsl(var(--accent)/0.2)] hover:-translate-y-0.5 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-5">
                  <c.icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{c.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECURITY */}
      <section className="py-24 lg:py-32 px-6 lg:px-8 bg-secondary/30 border-y border-border/60">
        <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Eyebrow>Trust & security</Eyebrow>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
              Our uncommon commitment to{" "}
              <span className="hero-gradient-text">security and privacy.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mt-6">
              When you hire people, trust and accountability are part of the job. We think the same about AI workforces. With EverWorker, partner with a company that's built privacy and security into every part of the business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {securityCards.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-border/60 bg-card p-7 hover:shadow-[0_8px_30px_-12px_hsl(var(--accent)/0.2)] hover:-translate-y-0.5 transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
                  <c.icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2 leading-snug">
                  {c.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <FramedSurface ratio="aspect-[8/1]" className="max-w-md mx-auto" label="Compliance badges" />
          </div>
        </div>
      </section>

      {/* TESTIMONIAL — matches the editorial, framed treatment we use elsewhere */}
      <section className="py-24 lg:py-32 px-6 lg:px-8 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <Eyebrow>With EverWorker, you're in good company</Eyebrow>
          </div>
          <div className="rounded-3xl border border-border/60 bg-card p-10 lg:p-14 grid md:grid-cols-[auto_1fr] gap-10 items-center shadow-[0_30px_80px_-30px_hsl(var(--accent)/0.15)]">
            <FramedSurface ratio="aspect-square" className="w-40 md:w-48" label="Headshot" />
            <div>
              <Quote className="h-7 w-7 text-accent mb-5" />
              <p className="text-2xl lg:text-3xl font-semibold text-foreground leading-snug mb-6">
                "As easy as the AI chat you're already using, but ours creates deployable AI workers. Say it, get it."
              </p>
              <p className="text-base font-bold text-foreground">Chris Good</p>
              <p className="text-sm text-muted-foreground">Worldwide CEO</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 px-6 lg:px-8 bg-background">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
            Let's talk about your{" "}
            <span className="hero-gradient-text">AI workforce.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed">
            Do more with more, EverWorker makes it easier. Schedule a call with our people to see how it works.
          </p>
          <GetStartedButton>Find a Good Time</GetStartedButton>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default PlatformPage;