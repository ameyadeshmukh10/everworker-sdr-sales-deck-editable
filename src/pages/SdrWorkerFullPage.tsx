import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GetStartedButton } from "@/components/ui/get-started-button";
import { useIsMobile } from "@/hooks/use-mobile";
import { SiSalesforce, SiHubspot, SiGmail, SiSlack } from "react-icons/si";
import { FaLinkedin, FaMicrosoft } from "react-icons/fa";
import { ChevronDown, Check, MessageCircle, Linkedin, Mail, Plus, Clock, CheckCircle2, Building2, Users, User, Sparkles, Zap, Phone, X, MousePointer2, Globe, Newspaper, Briefcase, TrendingUp, MapPin, ArrowRight, Search } from "lucide-react";
import logotypeBlack from "@/assets/everworker-logotype-black.svg";
import logoQnity from "@/assets/logos/qnity.png";
import logoMemgraph from "@/assets/logos/memgraph.png";
import logoTriplepoint from "@/assets/logos/triplepoint.png";
import logoUsercentrics from "@/assets/logos/usercentrics.png";
import logoOhioState from "@/assets/logos/ohio-state.png";
import logoConnex from "@/assets/logos/connex.png";
import logoOhio from "@/assets/logos/ohio.png";
import logoProductiv from "@/assets/logos/productiv.png";
import logoDutchess from "@/assets/logos/dutchess.png";
import logoSalesloft from "@/assets/logos/salesloft.png";
import logoOutreach from "@/assets/logos/outreach.png";
import logoTwilio from "@/assets/logos/twilio.png";
import logoAirtable from "@/assets/logos/airtable.png";
import logoSupabase from "@/assets/logos/supabase.png";
import logoSendgrid from "@/assets/logos/sendgrid.png";
import logoLinkedin from "@/assets/logos/linkedin.svg";
import logoGoogle from "@/assets/logos/google.png";
import logoSalesforce from "@/assets/logos/salesforce.png";
import logoHubspot from "@/assets/logos/hubspot.png";
import badgeGdpr from "@/assets/badges/gdpr.png";
import badgeSoc2 from "@/assets/badges/soc2.png";
import badgeIso from "@/assets/badges/iso27001.png";

const LOGO_ITEMS = [
  { src: logoQnity, alt: "Qnity", h: "h-6" },
  { src: logoMemgraph, alt: "Memgraph", h: "h-7" },
  { src: logoTriplepoint, alt: "TriplePoint Capital", h: "h-8" },
  { src: logoUsercentrics, alt: "Usercentrics", h: "h-4" },
  { src: logoOhioState, alt: "The Ohio State University", h: "h-6" },
  { src: logoConnex, alt: "Connex Partners", h: "h-8" },
  { src: logoOhio, alt: "OH.io", h: "h-6" },
  { src: logoProductiv, alt: "Productiv", h: "h-5" },
  { src: logoDutchess, alt: "Dutchess Management", h: "h-7" },
];

const LogoMarquee = () => {
  const loop = [...LOGO_ITEMS, ...LOGO_ITEMS];
  return (
    <div
      className="relative overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0, black 12%, black 88%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0, black 12%, black 88%, transparent 100%)",
      }}
    >
      <div className="flex w-max items-center gap-x-16 animate-logo-marquee opacity-70">
        {loop.map((l, i) => (
          <img
            key={`${l.alt}-${i}`}
            src={l.src}
            alt={l.alt}
            className={`${l.h} w-auto object-contain shrink-0 grayscale`}
          />
        ))}
      </div>
    </div>
  );
};

/* SDR Flow visualization — horizontal chain matching mockup */
const SDR_FLOW_NODES: { label: string; variant: "default" | "outline" | "filled" }[] = [
  { label: "Signals", variant: "default" },
  { label: "CRM", variant: "default" },
  { label: "SDR AI Worker", variant: "outline" },
  { label: "Research + Knowledge", variant: "default" },
  { label: "Sequencing Tool", variant: "default" },
  { label: "Meetings Booked", variant: "filled" },
];

const SDR_FLOW_SUBLABELS = ["24/7 Always-On", "45-Day Deployment", "Logs to Your CRM"];

const RED = "#FF0D40";

const SdrFlowNode = ({
  label,
  variant,
  delay,
}: {
  label: string;
  variant: "default" | "outline" | "filled";
  delay: number;
}) => {
  const base =
    "px-4 py-3 lg:px-5 lg:py-3.5 rounded-md text-sm lg:text-[15px] font-semibold tracking-tight whitespace-nowrap text-center";
  let style: React.CSSProperties = {};
  let cls = base;
  if (variant === "default") {
    cls += " bg-white border border-border/70 text-foreground";
  } else if (variant === "outline") {
    cls += " bg-white";
    style = { border: `1.5px solid ${RED}`, color: RED };
  } else {
    cls += " text-white rounded-lg";
    style = { backgroundColor: RED };
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.35, delay, ease: "easeOut" }}
      className={cls}
      style={style}
    >
      {label}
    </motion.div>
  );
};

const SdrFlowArrow = ({ delay, vertical = false }: { delay: number; vertical?: boolean }) => (
  <motion.span
    initial={{ opacity: 0, scale: 0.6 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: "-10%" }}
    transition={{ duration: 0.25, delay, ease: "easeOut" }}
    className="flex items-center justify-center text-lg font-bold leading-none"
    style={{ color: RED }}
    aria-hidden="true"
  >
    {vertical ? "↓" : "→"}
  </motion.span>
);

const SdrFlowOverview = () => {
  const stagger = 0.09;
  return (
    <div className="relative w-full max-w-6xl mx-auto px-2">
      {/* Desktop: single horizontal row */}
      <div className="hidden lg:flex items-center justify-center gap-3 xl:gap-4 flex-wrap">
        {SDR_FLOW_NODES.map((n, i) => (
          <div key={n.label} className="flex items-center gap-3 xl:gap-4">
            <SdrFlowNode label={n.label} variant={n.variant} delay={i * stagger} />
            {i < SDR_FLOW_NODES.length - 1 && <SdrFlowArrow delay={i * stagger + stagger / 2} />}
          </div>
        ))}
      </div>

      {/* Mobile: stacked vertical */}
      <div className="flex lg:hidden flex-col items-center gap-2">
        {SDR_FLOW_NODES.map((n, i) => (
          <div key={n.label} className="flex flex-col items-center gap-2">
            <SdrFlowNode label={n.label} variant={n.variant} delay={i * stagger} />
            {i < SDR_FLOW_NODES.length - 1 && (
              <SdrFlowArrow delay={i * stagger + stagger / 2} vertical />
            )}
          </div>
        ))}
      </div>

      {/* Sub-labels row */}
      <motion.div
        initial={{ opacity: 0, y: 4 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.4, delay: SDR_FLOW_NODES.length * stagger + 0.1 }}
        className="mt-6 lg:mt-7 flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-12 text-sm text-muted-foreground"
      >
        {SDR_FLOW_SUBLABELS.map((s) => (
          <span key={s} className="font-medium tracking-tight">
            {s}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

/* ============================================================
   SDR Worker Full — homepage-style, story-led product page.
   Linked only from the Footer.
   No icons. White image containers. Brand greens, glowy gradients.
   ============================================================ */

const SdrWorkerFullPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative pt-28 pb-12 sm:pt-36 sm:pb-16 lg:pt-44 lg:pb-24 px-6 lg:px-8 overflow-hidden bg-background">
        <div className="max-w-5xl mx-auto w-full relative z-10 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="text-sm text-accent tracking-widest uppercase font-semibold mb-6"
          >
            Meet The SDR AI Worker
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-7xl lg:text-[5.25rem] xl:text-[6rem] 2xl:text-[6.5rem] font-bold tracking-tight leading-[0.95] sm:leading-[0.9] mb-6 sm:mb-8"
          >
            <span className="text-foreground">Double your pipeline.</span>
            <br />
            <span className="hero-gradient-text">This quarter.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base sm:text-lg 2xl:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed"
          >
            EverWorker is the AI SDR for CROs and sales teams. It works directly on your CRM, signals, and sequencing
            tool to run end-to-end prospecting plays and deliver meetings — without you needing to ask. Generate 3x to
            5x more meetings per sales rep without hiring more headcount.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex justify-center"
          >
            <GetStartedButton>Book a demo</GetStartedButton>
          </motion.div>

          {/* Client logo group: between CTA and hero diagram */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 sm:mt-16"
          >
            <p className="text-center text-xs tracking-[0.25em] uppercase text-muted-foreground/60 font-semibold mb-6">
              Trusted by revenue teams scaling output without scaling headcount
            </p>
            <LogoMarquee />
          </motion.div>

          {/* Security & compliance callout */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 0.65, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-8 sm:mt-10 flex items-center justify-center gap-3 sm:gap-4"
          >
            <img src={badgeSoc2} alt="SOC 2 Type II" className="h-8 w-8 sm:h-9 sm:w-9 object-contain" />
            <img src={badgeIso} alt="ISO 27001" className="h-8 w-8 sm:h-9 sm:w-9 object-contain" />
            <img src={badgeGdpr} alt="GDPR" className="h-8 w-8 sm:h-9 sm:w-9 object-contain" />
            <span className="ml-2 text-xs sm:text-sm text-muted-foreground/80">
              SOC 2 Type II · ISO 27001 · GDPR
            </span>
          </motion.div>
        </div>

      </section>

      {/* ================= SDR FLOW OVERVIEW ================= */}
      <section className="pt-20 pb-20 sm:pt-32 sm:pb-32 lg:pt-40 lg:pb-44 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-16 lg:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl 2xl:text-6xl font-bold tracking-tight text-foreground"
          >
            SDR work,
            <br />
            on <span className="hero-gradient-text">end-to-end autopilot.</span>
          </motion.h2>
        </div>
        <SdrFlowOverview />
      </section>

      <section className="pt-4 pb-12 sm:pt-8 sm:pb-20 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl 2xl:text-6xl font-bold tracking-tight text-foreground mb-4 sm:mb-5"
          >
            Turn leads into meetings
            <br />
            <span className="hero-gradient-text">automatically.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            EverWorker works around the clock as your dedicated AI SDR.{" "}
            <strong className="font-semibold text-foreground">
              It analyzes signal data in your CRM, researches and sequences contacts in real time before they go cold,
              and gets you proactive always-on speed to lead.
            </strong>{" "}
            Multi-channel outreach across email, LinkedIn, and webchat lands against your entire signal intelligence
            layer as it emerges, so you never miss an opportunity.
          </motion.p>
        </div>
      </section>

      {/* Wide image under first section */}
      <section className="px-6 lg:px-8 pb-16 sm:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-6xl 2xl:max-w-7xl mx-auto w-full"
        >
          <ImagePlaceholder
            aspect="16 / 9"
            variant="azure"
            designWidth={1024}
            mobileAspect="3 / 4"
            mobileDesignWidth={420}
            mobileChildren={<LeadFunnelDiagram mobile />}
          >
            <LeadFunnelDiagram />
          </ImagePlaceholder>
        </motion.div>
      </section>

      {/* ================= FIND YOUR IDEAL LEADS ================= */}
      <section className="pt-10 pb-12 sm:pt-16 sm:pb-20 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl 2xl:text-6xl font-bold tracking-tight text-foreground mb-4 sm:mb-5"
          >
            Find your <span className="hero-gradient-text">ideal leads.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-muted-foreground leading-relaxed"
          >
            Skip the spreadsheets. Stop waiting for revops or sales reps to import contact data into your CRM.{" "}
            <strong className="font-semibold text-foreground">
              EverWorker instantly populates your CRM with buying-group members from in-market accounts, analyzing your
              account and prospect-level signal intelligence in real time.
            </strong>{" "}
            Trigger-based workflows populate in-market accounts with business contacts and route them into the AI SDR —
            so your signal intelligence is always on and always actioned.
          </motion.p>
        </div>
      </section>

      <section className="px-6 lg:px-8 pb-16 sm:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-6xl 2xl:max-w-7xl mx-auto w-full"
        >
          <ImagePlaceholder
            aspect="16 / 9"
            variant="verdant"
            designWidth={1024}
            mobileAspect="3 / 4"
            mobileDesignWidth={420}
            mobileChildren={<AccountEnrichmentDiagram mobile />}
          >
            <AccountEnrichmentDiagram />
          </ImagePlaceholder>
        </motion.div>
      </section>

      {/* ================= IDENTIFY IN-MARKET ACCOUNTS ================= */}
      <section className="pt-10 pb-12 sm:pt-16 sm:pb-20 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl 2xl:text-6xl font-bold tracking-tight text-foreground mb-4 sm:mb-5"
          >
            Identify <span className="hero-gradient-text">in-market accounts.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-muted-foreground leading-relaxed"
          >
            <strong className="font-semibold text-foreground">
              EverWorker creates a personalized signal intelligence layer that handles the essential account intent
              enrichment automatically.
            </strong>{" "}
            Actionable insight on each signal. Accounts evaluating you on your website. Technographic install base.
            Company news. Hiring signals. Delivered on your preferred schedule, while you stay informed and in control.
          </motion.p>
        </div>
      </section>

      <section className="px-6 lg:px-8 pb-20 sm:pb-40">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-6xl 2xl:max-w-7xl mx-auto w-full"
        >
          <ImagePlaceholder
            aspect="16 / 9"
            variant="dawn"
            designWidth={1100}
            mobileAspect="3 / 4"
            mobileDesignWidth={420}
            mobileChildren={<SignalIntelligenceDiagram mobile />}
          >
            <SignalIntelligenceDiagram />
          </ImagePlaceholder>
        </motion.div>
      </section>

      {/* ================= ONBOARDED IN DAYS (full-width, brand-aligned) ================= */}
      <OnboardSection />

      {/* ================= QUOTE ================= */}
      <section className="py-20 sm:py-32 lg:py-48 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl sm:text-3xl 2xl:text-4xl font-bold tracking-tight leading-snug text-foreground mb-6 sm:mb-8">
            "We replaced an entire outsourced SDR vendor and doubled qualified meetings in the first quarter. The AI
            worker is on-brand, on-message, and never sleeps."
          </p>
          <div className="flex items-center justify-center gap-3">
            <div
              className="h-10 w-10 rounded-full flex items-center justify-center text-white text-sm font-bold"
              style={{ background: "linear-gradient(135deg, #22826F, #52FEBF)" }}
            >
              A
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-foreground">Alex</p>
              <p className="text-xs text-muted-foreground">VP Sales · Mid-market SaaS</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FULL PACKAGED SERVICE — three product extensions ================= */}
      {false && (
        <section className="pt-16 pb-48 px-6 lg:px-8">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16 max-w-2xl mx-auto"
            >
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-5">
                One worker. End-to-end coverage.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From identifying who to reach, to enriching them, to turning them into booked meetings — packaged, not
                pieced together.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  tag: "Core",
                  title: "Turn Leads Into Meetings",
                  body: "The autonomous SDR motion — research, message, sequence, book, update CRM.",
                },
                {
                  tag: "Extension",
                  title: "Find & Enrich New ICP Leads",
                  body: "Sources net-new contacts that match your ICP and enriches them with the signals that matter.",
                },
                {
                  tag: "Extension",
                  title: "ID In-Market Accounts",
                  body: "Surface accounts showing intent and de-anonymize the ones already visiting your website.",
                },
              ].map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="rounded-2xl border border-border/60 bg-card p-8 flex flex-col shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_40px_-8px_rgba(0,0,0,0.1)] transition-all duration-500"
                >
                  <h3 className="text-2xl 2xl:text-3xl font-bold text-foreground tracking-tight mb-3">{card.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">{card.body}</p>
                  <div className="mt-auto pt-8">
                    <ImagePlaceholder aspect="4 / 3" variant="mist" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= FINAL CTA ================= */}
      <section className="px-6 lg:px-8 pb-20 sm:pb-40">
        <div className="max-w-7xl mx-auto">
          <div
            className="relative overflow-hidden rounded-3xl px-6 py-16 sm:px-16 sm:py-24 text-center"
            style={{
              background:
                "radial-gradient(ellipse 60% 80% at 50% 0%, rgba(82,254,191,0.35) 0%, transparent 60%), linear-gradient(180deg, #0F1C18 0%, #1d3530 100%)",
            }}
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-overlay"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
              }}
            />
            <div className="relative">
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4 sm:mb-5">
                Ready to 2X your meetings?
              </h2>
              <p className="text-base sm:text-lg text-white/70 max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed">
                See the SDR AI Worker run on your actual inbound flow. Live demo, your data, your playbook.
              </p>
              <GetStartedButton>Book a demo</GetStartedButton>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <FAQSection />

      <Footer />
    </div>
  );
};

/* =============================================================
   IMAGE PLACEHOLDER — simple white container
   ============================================================= */
const ImagePlaceholder = ({
  aspect = "5 / 4",
  subtle = false,
  variant = "mist",
  overlay = false,
  children,
  designWidth,
  mobileAspect,
  mobileDesignWidth,
  mobileChildren,
}: {
  aspect?: string;
  subtle?: boolean;
    variant?: "mist" | "ember" | "verdant" | "dawn" | "azure";
  overlay?: boolean;
  children?: React.ReactNode;
  designWidth?: number;
  mobileAspect?: string;
  mobileDesignWidth?: number;
  mobileChildren?: React.ReactNode;
}) => {
  const isMobile = useIsMobile();
  const useMobileVariant = isMobile && mobileChildren;
  const activeAspect = useMobileVariant && mobileAspect ? mobileAspect : aspect;
  const activeChildren = useMobileVariant ? mobileChildren : children;
  // Only apply ScaleToFit when we're rendering the mobile variant with an
  // explicit mobileDesignWidth. The desktop diagrams were authored to fill
  // the placeholder via `absolute inset-0` and must NOT be wrapped — doing so
  // constrains them to the design width and breaks the layout.
  const scaleDesignWidth = useMobileVariant ? mobileDesignWidth : undefined;
  // Each variant defines the colored blur orbs that bleed through the frame.
  // Orbs sit OFFSCREEN/offset behind a clipped, rounded white-ish frame so
  // we get those soft color washes rather than visible discs.
  const palettes: Record<
    string,
    { base: string; orbs: { color: string; size: string; top: string; left: string; opacity: number }[] }
  > = {
    mist: {
      base: "linear-gradient(135deg, #EEF2F4 0%, #DCE5E8 100%)",
      orbs: [
        { color: "#A8C4CE", size: "130%", top: "60%", left: "75%", opacity: 0.32 },
        { color: "#9BB3A8", size: "100%", top: "100%", left: "-20%", opacity: 0.22 },
        { color: "#E2EAEC", size: "160%", top: "-30%", left: "85%", opacity: 0.7 },
      ],
    },
    ember: {
      base: "linear-gradient(135deg, #F3ECEA 0%, #E8DAD6 100%)",
      orbs: [
        { color: "#C98A88", size: "115%", top: "-15%", left: "80%", opacity: 0.28 },
        { color: "#7A4044", size: "100%", top: "-5%", left: "100%", opacity: 0.22 },
        { color: "#A8C0C2", size: "115%", top: "100%", left: "5%", opacity: 0.22 },
      ],
    },
    verdant: {
      base: "linear-gradient(135deg, #ECF1ED 0%, #D8E4DD 100%)",
      orbs: [
        { color: "#7FAB9C", size: "120%", top: "95%", left: "-15%", opacity: 0.32 },
        { color: "#A8D9C5", size: "100%", top: "-10%", left: "82%", opacity: 0.3 },
        { color: "#DDE7E2", size: "140%", top: "55%", left: "95%", opacity: 0.6 },
      ],
    },
    dawn: {
      base: "linear-gradient(135deg, #F0EAEE 0%, #DDD3DA 100%)",
      orbs: [
        { color: "#C58195", size: "105%", top: "-10%", left: "-5%", opacity: 0.22 },
        { color: "#9FBAC4", size: "115%", top: "90%", left: "85%", opacity: 0.32 },
        { color: "#B8C9B8", size: "90%", top: "55%", left: "45%", opacity: 0.18 },
      ],
    },
    azure: {
      base: "linear-gradient(135deg, #DCE6EC 0%, #B9CCD6 100%)",
      orbs: [
        { color: "#9FB7C4", size: "120%", top: "60%", left: "20%", opacity: 0.32 },
        { color: "#C9DDE0", size: "110%", top: "-10%", left: "95%", opacity: 0.45 },
        { color: "#A8BDC8", size: "130%", top: "100%", left: "80%", opacity: 0.28 },
      ],
    },
  };

  const p = palettes[variant] ?? palettes.mist;

  // Inline SVG noise turned into a data URL for the grain overlay.
  const noiseUrl =
    "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix type='matrix' values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.55 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")";

  return (
    <div
      className="relative w-full overflow-hidden rounded-xl sm:rounded-2xl border border-black/[0.06] isolate"
      style={{
        aspectRatio: activeAspect,
        background: p.base,
        boxShadow: subtle ? "0 8px 24px -16px rgba(15,40,32,0.18)" : "0 4px 16px -8px rgba(15,40,32,0.08)",
      }}
    >
      {/* Soft colored blur orbs — offset/clipped by the frame */}
      {p.orbs.map((orb, i) => (
        <div
          key={i}
          aria-hidden
          className="absolute rounded-full"
          style={{
            width: orb.size,
            height: orb.size,
            top: orb.top,
            left: orb.left,
            transform: "translate(-50%, -50%)",
            background: orb.color,
            opacity: orb.opacity,
            filter: "blur(80px)",
            mixBlendMode: "normal",
          }}
        />
      ))}

      {/* Dark wash — deepens the colored backdrop so frames + popups pop */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(8,16,14,0.55) 0%, rgba(8,16,14,0.7) 100%), radial-gradient(ellipse 110% 90% at 50% 40%, rgba(8,16,14,0.35) 0%, rgba(8,16,14,0.55) 60%, rgba(8,16,14,0.7) 100%)",
        }}
      />

      {/* Diagonal "glass slab" overlaying roughly the right half of the
          frame — a soft, mostly transparent white pane clipped on a tilt so
          one side of the image reads as if a sheet of glass sits on top. */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          clipPath: "polygon(62% 0%, 100% 0%, 100% 100%, 45% 100%)",
          background:
            "linear-gradient(115deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 45%, rgba(255,255,255,0.05) 100%)",
          boxShadow: "inset 1px 0 0 rgba(255,255,255,0.08)",
        }}
      />

      {/* Grain / noise overlay — clipped to the frame */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: noiseUrl,
          backgroundSize: "220px 220px",
          opacity: 0.35,
        }}
      />

      {/* Inner highlight ring for that polished glass edge */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-xl sm:rounded-2xl pointer-events-none"
        style={{
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.6), inset 0 0 0 1px rgba(255,255,255,0.18)",
        }}
      />

      {/* Optional semi-transparent white wash to brighten the frame */}
      {overlay && (
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{ background: "rgba(255,255,255,0.86)" }}
        />
      )}

      {/* Optional content layered above the frame (e.g. diagrams) */}
      {activeChildren && (
        <div className="absolute inset-0 z-10 overflow-hidden">
          {scaleDesignWidth ? (
            <ScaleToFit designWidth={scaleDesignWidth} aspect={activeAspect}>
              {activeChildren}
            </ScaleToFit>
          ) : (
            activeChildren
          )}
        </div>
      )}
    </div>
  );
};

/* ScaleToFit — renders children at a fixed design width and uniformly scales
   the whole composition to fit the parent. Used so dashboard diagrams shrink
   proportionally on mobile instead of reflowing into a smashed layout. */
const ScaleToFit = ({
  designWidth,
  aspect,
  children,
}: {
  designWidth: number;
  aspect: string;
  children: React.ReactNode;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [scale, setScale] = useState(1);
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const update = () => {
      const w = el.clientWidth;
      if (w > 0) setScale(Math.min(1, w / designWidth));
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [designWidth]);

  // Parse aspect ("W / H") to compute design height matching parent ratio.
  const [aw, ah] = aspect.split("/").map((s) => parseFloat(s.trim()));
  const ratio = aw && ah ? aw / ah : 16 / 9;
  const designHeight = designWidth / ratio;

  return (
    <div ref={ref} className="absolute inset-0">
      <div
        style={{
          width: designWidth,
          height: designHeight,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        {children}
      </div>
    </div>
  );
};

/* =============================================================
   LEAD FUNNEL DIAGRAM — multi-channel messages funnel into CRM
   One single time-driven phase governs every visual: card pop,
   line glow, traveling dot, CRM row insertion, and reset. This
   guarantees the sequence stays in lockstep on every loop.
   ============================================================= */
const LeadFunnelDiagram = ({ mobile = false }: { mobile?: boolean }) => {
  const RED = "#FF0D40";
  const GREEN = "#22826F";

  // Per-channel timing in seconds inside one loop.
  // Sequence per channel:
  //   cardStart .. cardEnd    -> card pops (scale + opacity + red shadow)
  //   lineStart .. lineEnd    -> line glows red, dot travels left -> right
  //   rowAt                   -> new CRM row appears, then persists
  // After the third channel, holdEnd keeps everything visible, then a
  // smooth reset window collapses added rows before the loop restarts.
  const STAGE = [
    { cardStart: 0.7, cardEnd: 1.4, lineStart: 1.1, lineEnd: 1.9, rowAt: 1.7 },
    { cardStart: 2.4, cardEnd: 3.1, lineStart: 2.8, lineEnd: 3.6, rowAt: 3.4 },
    { cardStart: 4.1, cardEnd: 4.8, lineStart: 4.5, lineEnd: 5.3, rowAt: 5.1 },
  ];
  // After all rows are in (~5.45), each of the 4 CRM leads converts to a
  // meeting in sequence. A status pill slides across the Source+Score
  // cells. Index 2 (third added — Lena Park) shows "Following up";
  // the others show "Meeting booked".
  const CONVERT = [
    { at: 5.9 }, // baseline (Devon Hale)
    { at: 6.4 }, // Priya Shah
    { at: 6.9 }, // Marcus Reid
    { at: 7.4 }, // Lena Park (Following up)
  ];
  const HOLD_END = 8.6;   // leads + statuses remain visible until here
  const RESET_END = 9.4;  // rows finish collapsing
  const LOOP = 10.0;      // total loop length, with a small breath before restart

  // Single source of truth: elapsed seconds within the loop.
  const [t, setT] = useState(0);
  useEffect(() => {
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const elapsed = ((now - start) / 1000) % LOOP;
      setT(elapsed);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Helpers
  const clamp01 = (v: number) => Math.max(0, Math.min(1, v));
  // smooth 0->1->0 pulse across [a,b], peak in the middle.
  const pulse = (time: number, a: number, b: number) => {
    if (time <= a || time >= b) return 0;
    const mid = (a + b) / 2;
    return time < mid ? (time - a) / (mid - a) : 1 - (time - mid) / (b - mid);
  };
  // 0 before a, ramps to 1 between a..b.
  const ramp = (time: number, a: number, b: number) => {
    if (time <= a) return 0;
    if (time >= b) return 1;
    return (time - a) / (b - a);
  };

  const channels = [
    {
      kind: "Webchat",
      icon: MessageCircle,
      tint: "#3B82F6",
      who: "Priya Shah · Acme Corp",
      body: "Can you show pricing for 200 seats?",
      pathY: 56,
      lead: { name: "Priya Shah", co: "Acme Corp", src: "Webchat", score: "+94" },
    },
    {
      kind: "LinkedIn",
      icon: Linkedin,
      tint: "#0A66C2",
      who: "Marcus Reid · VP Sales, Northwind",
      body: "Open to a 15-min intro next week.",
      pathY: 120,
      lead: { name: "Marcus Reid", co: "Northwind", src: "LinkedIn", score: "+88" },
    },
    {
      kind: "Email",
      icon: Mail,
      tint: GREEN,
      who: "Lena Park · Director RevOps, Globex",
      body: "Reviewed the deck — let's talk Tuesday.",
      pathY: 184,
      lead: { name: "Lena Park", co: "Globex", src: "Email", score: "+91" },
    },
  ];

  const baselineLead = { name: "Devon Hale", co: "Initech", src: "Inbound", score: "+72" };

  // Decide per-row visibility from the single phase clock.
  // Each added row becomes visible at its rowAt and stays until the
  // collapse window (HOLD_END..RESET_END) animates it back to 0.
  const rowProgress = (i: number) => {
    const appear = STAGE[i].rowAt;
    if (t < appear) return 0;
    if (t < HOLD_END) return clamp01((t - appear) / 0.35); // expand in
    if (t < RESET_END) return 1 - clamp01((t - HOLD_END) / (RESET_END - HOLD_END));
    return 0;
  };

  // Status pill slide-in progress for one of the four CRM leads.
  // 0 = hidden, 1 = fully covering Source+Score cells.
  const convertProgress = (i: number) => {
    const at = CONVERT[i].at;
    if (t < at) return 0;
    if (t < HOLD_END) return clamp01((t - at) / 0.45);
    if (t < RESET_END) return 1 - clamp01((t - HOLD_END) / (RESET_END - HOLD_END));
    return 0;
  };

  // Status overlay rendered on top of the Source + Score cells of a CRM row.
  // followUp = true renders an amber "Following up" pill; otherwise green
  // "Meeting booked" with a check.
  const StatusOverlay = ({ progress, followUp }: { progress: number; followUp?: boolean }) => {
    if (progress <= 0) return null;
    const bg = followUp ? "#FFF7E6" : "#E8F5F0";
    const fg = followUp ? "#B86E00" : GREEN;
    const border = followUp ? "rgba(184,110,0,0.25)" : "rgba(34,130,111,0.28)";
    return (
      <div
        aria-hidden
        className="absolute top-1/2 -translate-y-1/2 right-3 flex items-center justify-end overflow-hidden pointer-events-none"
        style={{
          // Cover Source + Score columns: grid is 1.4fr 1fr 0.7fr inside px-4.
          // Start ~45% from row left edge.
          left: "45%",
          height: "28px",
          clipPath: `inset(0 ${(1 - progress) * 100}% 0 0)`,
          transition: "clip-path 360ms cubic-bezier(0.22,0.61,0.36,1)",
        }}
      >
        <div
          className="flex items-center gap-1.5 h-full px-2.5 rounded-md"
          style={{
            background: bg,
            border: `1px solid ${border}`,
            color: fg,
            width: "100%",
            justifyContent: "center",
          }}
        >
          {followUp ? (
            <Clock className="h-3 w-3" strokeWidth={2.5} />
          ) : (
            <CheckCircle2 className="h-3.5 w-3.5" strokeWidth={2.5} />
          )}
          <span className="text-[11px] font-semibold tracking-tight whitespace-nowrap">
            {followUp ? "Following up" : "Meeting booked"}
          </span>
        </div>
      </div>
    );
  };

  if (mobile) {
    return (
      <div className="absolute inset-0 flex flex-col gap-4 p-5">
        {/* TOP — three message cards in a row */}
        <div className="grid grid-cols-3 gap-2.5">
          {channels.map((c, i) => {
            const Icon = c.icon;
            const active = pulse(t, STAGE[i].cardStart, STAGE[i].cardEnd);
            const scale = 1 + 0.04 * active;
            const shadow =
              active > 0
                ? `0 10px 28px -8px rgba(255,13,64,${0.5 * active})`
                : "0 6px 20px -14px rgba(15,40,32,0.18)";
            return (
              <div
                key={c.kind}
                className="relative rounded-xl px-3 py-2.5 bg-white"
                style={{
                  border: "1px solid rgba(0,0,0,0.06)",
                  transform: `scale(${scale})`,
                  boxShadow: shadow,
                  transformOrigin: "center",
                  transition: "transform 220ms ease-out, box-shadow 220ms ease-out",
                }}
              >
                <div className="flex items-center gap-1.5 mb-1.5">
                  <span
                    className="h-6 w-6 rounded-md flex items-center justify-center"
                    style={{ background: `${c.tint}1A` }}
                  >
                    <Icon className="h-3.5 w-3.5" style={{ color: c.tint }} strokeWidth={2.25} />
                  </span>
                  <span className="text-[9px] tracking-[0.14em] uppercase font-semibold" style={{ color: c.tint }}>
                    {c.kind}
                  </span>
                </div>
                <div className="text-[11px] font-semibold text-black/80 leading-tight line-clamp-1">{c.who.split(" · ")[0]}</div>
                <div className="text-[10.5px] text-black/55 leading-snug mt-0.5 line-clamp-2">{c.body}</div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM — CRM table (full width) */}
        <div className="flex-1 min-h-0 rounded-xl bg-white/95 border border-black/[0.06] shadow-[0_12px_32px_-14px_rgba(15,40,32,0.22)] overflow-hidden flex flex-col">
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-black/5 bg-[#FAFBFB]">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full" style={{ background: GREEN }} />
              <span className="text-[12px] font-semibold tracking-wide text-black/75">CRM · New Leads</span>
            </div>
            <span className="text-[10px] tracking-[0.14em] uppercase text-black/40">Live</span>
          </div>
          <div className="grid grid-cols-[1.4fr_1fr_0.7fr] text-[10px] tracking-[0.12em] uppercase text-black/40 px-4 py-2 border-b border-black/5">
            <span>Lead</span>
            <span>Source</span>
            <span className="text-right">Score</span>
          </div>
          <div className="divide-y divide-black/[0.05] flex-1">
            <div className="grid grid-cols-[1.4fr_1fr_0.7fr] items-center px-4 py-2.5 relative">
              <div className="min-w-0">
                <div className="text-[12px] font-semibold text-black/80 truncate">{baselineLead.name}</div>
                <div className="text-[10px] text-black/45 truncate">{baselineLead.co}</div>
              </div>
              <span className="text-[11px] text-black/60">{baselineLead.src}</span>
              <span className="text-[11px] font-mono font-semibold text-right" style={{ color: GREEN }}>{baselineLead.score}</span>
              <StatusOverlay progress={convertProgress(0)} />
            </div>
            {channels.map((c, i) => {
              const p = rowProgress(i);
              const height = 48 * p;
              const flash = pulse(t, STAGE[i].rowAt, STAGE[i].rowAt + 0.7);
              return (
                <div
                  key={c.kind}
                  className="grid grid-cols-[1.4fr_1fr_0.7fr] items-center px-4 relative overflow-hidden"
                  style={{
                    height: `${height}px`,
                    opacity: p,
                    transition: "height 220ms ease-out, opacity 220ms ease-out",
                  }}
                >
                  <span aria-hidden className="absolute inset-0 pointer-events-none" style={{ background: `rgba(255,13,64,${0.22 * flash})` }} />
                  <div className="relative min-w-0 flex items-center gap-1.5">
                    <Plus className="h-3 w-3 shrink-0" style={{ color: GREEN }} strokeWidth={2.5} />
                    <div className="min-w-0">
                      <div className="text-[12px] font-semibold text-black/85 truncate">{c.lead.name}</div>
                      <div className="text-[10px] text-black/50 truncate">{c.lead.co}</div>
                    </div>
                  </div>
                  <span className="relative text-[11px] font-semibold" style={{ color: c.tint }}>
                    {c.lead.src}
                  </span>
                  <span className="relative text-[11px] font-mono font-semibold text-right" style={{ color: GREEN }}>
                    {c.lead.score}
                  </span>
                  <StatusOverlay progress={convertProgress(i + 1) * p} followUp={i === 2} />
                </div>
              );
            })}
          </div>
          <div className="flex items-center justify-between px-4 py-2 bg-[#FAFBFB] border-t border-black/5">
            <span className="text-[10px] text-black/45">Synced to Salesforce · HubSpot</span>
            <motion.span
              className="text-[10px] font-semibold"
              style={{ color: GREEN }}
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            >
              ● updating
            </motion.span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center p-5 lg:p-8 2xl:p-12">
      <div className="grid w-full h-full grid-cols-12 gap-4 lg:gap-6 items-center">
        {/* LEFT — always-visible message cards, each pulses red on its turn */}
        <div className="col-span-5 flex flex-col gap-6 lg:gap-8">
          {channels.map((c, i) => {
            const Icon = c.icon;
            const active = pulse(t, STAGE[i].cardStart, STAGE[i].cardEnd);
            const opacity = 0.95 + 0.05 * active;
            const scale = 1 + 0.04 * active;
            const shadow =
              active > 0
                ? `0 10px 32px -8px rgba(255,13,64,${0.45 * active}), 0 0 0 0 rgba(0,0,0,0)`
                : "0 6px 20px -14px rgba(15,40,32,0.18)";
            return (
              <div
                key={c.kind}
                className="relative rounded-xl px-3.5 py-2.5 lg:px-4 lg:py-3 bg-white backdrop-blur"
                style={{
                  border: "1px solid rgba(0,0,0,0.06)",
                  transformOrigin: "center",
                  transform: `scale(${scale})`,
                  opacity,
                  boxShadow: shadow,
                  transition: "transform 220ms ease-out, opacity 220ms ease-out, box-shadow 220ms ease-out",
                }}
              >
                <div className="relative flex items-center gap-2 mb-1.5">
                  <span
                    className="h-6 w-6 rounded-md flex items-center justify-center"
                    style={{ background: `${c.tint}1A` }}
                  >
                    <Icon className="h-3.5 w-3.5" style={{ color: c.tint }} strokeWidth={2.25} />
                  </span>
                  <span className="text-[10px] tracking-[0.14em] uppercase font-semibold" style={{ color: c.tint }}>
                    {c.kind}
                  </span>
                  <span
                    className="ml-auto text-[10px] font-semibold tracking-[0.12em] uppercase"
                    style={{ color: RED, opacity: active, transition: "opacity 200ms ease-out" }}
                  >
                    Live
                  </span>
                </div>
                <div className="relative text-[11px] font-semibold text-black/80 leading-tight">{c.who}</div>
                <div className="relative text-[11px] text-black/55 leading-snug mt-0.5 line-clamp-1">{c.body}</div>
              </div>
            );
          })}
        </div>

        {/* MIDDLE — connection lines, each glows red on its channel's turn */}
        <div className="col-span-2 relative h-full flex items-center justify-center">
          <svg viewBox="0 0 200 240" className="w-full h-full" preserveAspectRatio="none" aria-hidden>
            <defs>
              <filter id="redGlow" filterUnits="userSpaceOnUse" x="-20" y="-20" width="240" height="280">
                <feGaussianBlur stdDeviation="3" result="b" />
                <feMerge>
                  <feMergeNode in="b" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            {channels.map((c, i) => {
              const lineStart = STAGE[i].lineStart;
              const lineEnd = STAGE[i].lineEnd;
              const lineActive = pulse(t, lineStart, lineEnd);
              // Cubic Bezier: P0=(0,pathY) C1=(80,pathY) C2=(110,120) P3=(200,120)
              // Evaluate exact (x,y) along the curve at parameter u so the dot
              // visually follows the rendered path.
              const u = ramp(t, lineStart, lineEnd);
              const mu = 1 - u;
              const b0 = mu * mu * mu;
              const b1 = 3 * mu * mu * u;
              const b2 = 3 * mu * u * u;
              const b3 = u * u * u;
              const cx = b0 * 0 + b1 * 80 + b2 * 110 + b3 * 200;
              const cy = b0 * c.pathY + b1 * c.pathY + b2 * 120 + b3 * 120;
              const d = `M 0 ${c.pathY} C 80 ${c.pathY}, 110 120, 200 120`;
              return (
                <g key={c.kind}>
                  {/* baseline faint line (always visible) */}
                  <path d={d} stroke="#F3F4F6" strokeOpacity="0.35" strokeWidth="1" fill="none" />
                  {/* full red overlay for this channel's line — opacity driven by single clock */}
                  <path
                    d={d}
                    stroke={RED}
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                    filter="url(#redGlow)"
                    style={{ opacity: lineActive, transition: "opacity 120ms linear" }}
                  />
                  {/* travelling dot landing into CRM */}
                  <circle
                    r="3.5"
                    fill={RED}
                    cx={cx}
                    cy={cy}
                    style={{ opacity: lineActive > 0 ? 1 : 0 }}
                  />
                </g>
              );
            })}
          </svg>
        </div>

        {/* RIGHT — CRM table */}
        <div className="col-span-5">
          <div className="rounded-xl bg-white/95 backdrop-blur border border-black/[0.06] shadow-[0_12px_32px_-14px_rgba(15,40,32,0.22)] overflow-hidden flex flex-col">
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-black/5 bg-[#FAFBFB]">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full" style={{ background: GREEN }} />
                <span className="text-[11px] font-semibold tracking-wide text-black/75">CRM · New Leads</span>
              </div>
              <span className="text-[10px] tracking-[0.14em] uppercase text-black/40">Live</span>
            </div>

            <div className="grid grid-cols-[1.4fr_1fr_0.7fr] text-[10px] tracking-[0.12em] uppercase text-black/40 px-4 py-2 border-b border-black/5">
              <span>Lead</span>
              <span>Source</span>
              <span className="text-right">Score</span>
            </div>

            <div className="divide-y divide-black/[0.05] min-h-[220px]">
              {/* Pre-existing baseline lead — always visible */}
              <div className="grid grid-cols-[1.4fr_1fr_0.7fr] items-center px-4 py-2.5 relative">
                <div className="min-w-0">
                  <div className="text-[12px] font-semibold text-black/80 truncate">{baselineLead.name}</div>
                  <div className="text-[10px] text-black/45 truncate">{baselineLead.co}</div>
                </div>
                <span className="text-[11px] text-black/60">{baselineLead.src}</span>
                <span className="text-[11px] font-mono font-semibold text-right" style={{ color: GREEN }}>{baselineLead.score}</span>
                <StatusOverlay progress={convertProgress(0)} />
              </div>

              {/* Three rows added in sequence; collapse before next loop */}
              {channels.map((c, i) => {
                const p = rowProgress(i);
                const height = 44 * p;
                const opacity = p;
                // Brief red flash right after the row appears.
                const flash = pulse(t, STAGE[i].rowAt, STAGE[i].rowAt + 0.7);
                return (
                  <div
                    key={c.kind}
                    className="grid grid-cols-[1.4fr_1fr_0.7fr] items-center px-4 relative overflow-hidden"
                    style={{
                      height: `${height}px`,
                      opacity,
                      transition: "height 220ms ease-out, opacity 220ms ease-out",
                    }}
                  >
                    <span
                      aria-hidden
                      className="absolute inset-0 pointer-events-none"
                      style={{ background: `rgba(255,13,64,${0.22 * flash})` }}
                    />
                    <div className="relative min-w-0 flex items-center gap-1.5">
                      <Plus className="h-3 w-3 shrink-0" style={{ color: GREEN }} strokeWidth={2.5} />
                      <div className="min-w-0">
                        <div className="text-[12px] font-semibold text-black/85 truncate">{c.lead.name}</div>
                        <div className="text-[10px] text-black/50 truncate">{c.lead.co}</div>
                      </div>
                    </div>
                    <span className="relative text-[11px] font-semibold" style={{ color: c.tint }}>
                      {c.lead.src}
                    </span>
                    <span
                      className="relative text-[11px] font-mono font-semibold text-right"
                      style={{ color: GREEN }}
                    >
                      {c.lead.score}
                    </span>
                    <StatusOverlay
                      progress={convertProgress(i + 1) * p}
                      followUp={i === 2}
                    />
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-between px-4 py-2 bg-[#FAFBFB] border-t border-black/5">
              <span className="text-[10px] text-black/45">Synced to Salesforce · HubSpot</span>
              <motion.span
                className="text-[10px] font-semibold"
                style={{ color: GREEN }}
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              >
                ● updating
              </motion.span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* =============================================================
   SDR FLOW DIAGRAM — signal → CRM → AI SDR → meetings
   Styled to mirror reference: minimal, mono type, accent red lines.
   ============================================================= */
const AccountEnrichmentDiagram = ({ mobile = false }: { mobile?: boolean }) => {
  const RED = "#FF0D40";
  const GREEN = "#22826F";
  const AMBER = "#B86E00";

  // ---------- Phase clock ----------
  const LOOP = 14.0;
  const A_ROW_START = 0.2;
  const A_ROW_STEP = 0.14; // 12 rows -> last appears at 0.2 + 11*0.14 = 1.74
  const A_DONE = 2.1;
  const B_SELECT_START = 4.2;
  const B_SELECT_STEP = 0.07;
  const B_COLLAPSE_START = 4.95;
  const B_COLLAPSE_END = 5.55;
  const B_DONE = 6.0;
  const C_PRUNE_START = 6.05;
  const C_PRUNE_STEP = 0.07;
  const C_MORPH_START = 6.6;
  const C_MORPH_END = 7.0;
  const C_ROW_START = 7.05;
  const C_ROW_STEP = 0.13; // 12 rows -> 7.05 + 11*0.13 = 8.48
  const C_ENRICH_START = 8.6;
  const C_ENRICH_STEP = 0.13; // 8.6 + 11*0.13 = 10.03
  const C_OUTREACH_START = 10.4;
  const C_OUTREACH_STEP = 0.10; // 10.4 + 11*0.10 = 11.5
  const C_FOOTER_START = 11.8;
  const C_FOOTER_PEAK = 12.2;
  const HOLD_END = 12.5;
  const RESET_END = 13.4;

  const [t, setT] = useState(0);
  useEffect(() => {
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const elapsed = ((now - start) / 1000) % LOOP;
      setT(elapsed);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const clamp01 = (v: number) => Math.max(0, Math.min(1, v));
  const ramp = (time: number, a: number, b: number) =>
    time <= a ? 0 : time >= b ? 1 : (time - a) / (b - a);
  const pulse = (time: number, a: number, b: number) => {
    if (time <= a || time >= b) return 0;
    const mid = (a + b) / 2;
    return time < mid ? (time - a) / (mid - a) : 1 - (time - mid) / (b - mid);
  };

  // ---------- Data ----------
  const accounts = [
    { co: "Northwind Logistics", ind: "Logistics", emp: "1,240", reg: "NA",  sig: "Pricing×12, Hiring", fit: 91, sel: true },
    { co: "Helix Biotech",       ind: "Healthcare", emp: "640",   reg: "NA", sig: "Funding round",       fit: 87, sel: true },
    { co: "Vantage Manufacturing", ind: "Industrial", emp: "3,100", reg: "EU", sig: "Exec hire, RFP",   fit: 84, sel: true },
    { co: "Cobalt Energy",       ind: "Energy",     emp: "910",   reg: "NA", sig: "Site search",         fit: 58, sel: false },
    { co: "Lattice Software",    ind: "SaaS",       emp: "420",   reg: "EU", sig: "Pricing×8, Demo req", fit: 89, sel: true },
    { co: "Argent Capital",      ind: "Fintech",    emp: "210",   reg: "NA", sig: "Hiring AEs",          fit: 82, sel: true },
    { co: "Brightline Retail",   ind: "Retail",     emp: "5,400", reg: "APAC", sig: "Low intent",        fit: 49, sel: false },
    { co: "Meridian Health",     ind: "Healthcare", emp: "2,200", reg: "NA", sig: "Compliance review",   fit: 81, sel: true },
    { co: "Ironwood Realty",     ind: "Real estate", emp: "180",  reg: "NA", sig: "—",                   fit: 41, sel: false },
    { co: "Polaris Logistics",   ind: "Logistics",  emp: "770",   reg: "EU", sig: "Pricing×5",           fit: 80, sel: true },
    { co: "Quill Media",         ind: "Media",      emp: "330",   reg: "NA", sig: "Tech swap",           fit: 77, sel: true },
    { co: "Fenway Foods",        ind: "CPG",        emp: "1,900", reg: "NA", sig: "—",                   fit: 52, sel: false },
  ];

  type OutreachKind = "email" | "linkedin" | "call" | "await";
  const contacts: { name: string; title: string; loc: string; out: OutreachKind; tint: string; initials: string }[] = [
    { name: "Sara Chen",      title: "CRO",                 loc: "Boston, MA",     out: "email",    tint: "#22826F", initials: "SC" },
    { name: "Marcus Reid",    title: "VP Sales",            loc: "Austin, TX",     out: "linkedin", tint: "#0A66C2", initials: "MR" },
    { name: "Lena Park",      title: "RevOps Lead",         loc: "New York, NY",   out: "email",    tint: "#7C3AED", initials: "LP" },
    { name: "Jamal Owens",    title: "Dir. Marketing",      loc: "Chicago, IL",    out: "email",    tint: "#B86E00", initials: "JO" },
    { name: "Priya Shah",     title: "VP Demand Gen",       loc: "San Mateo, CA",  out: "call",     tint: "#22826F", initials: "PS" },
    { name: "Devon Hale",     title: "Head of Sales Ops",   loc: "Denver, CO",     out: "email",    tint: "#0A66C2", initials: "DH" },
    { name: "Hiro Tanaka",    title: "Sr. Sales Director",  loc: "Seattle, WA",    out: "linkedin", tint: "#7C3AED", initials: "HT" },
    { name: "Maya Alvarez",   title: "Enterprise AE Lead",  loc: "Miami, FL",      out: "email",    tint: "#22826F", initials: "MA" },
    { name: "Ben Whittaker",  title: "VP Customer Success", loc: "Toronto, ON",    out: "await",    tint: "#B86E00", initials: "BW" },
    { name: "Aisha Khan",     title: "Director, RevOps",    loc: "London, UK",     out: "email",    tint: "#0A66C2", initials: "AK" },
    { name: "Rafael Ortiz",   title: "VP Partnerships",     loc: "Mexico City",    out: "call",     tint: "#7C3AED", initials: "RO" },
    { name: "Eve Lambert",    title: "Sales Enablement",    loc: "Paris, FR",      out: "email",    tint: "#22826F", initials: "EL" },
  ];

  // Selected indices in original 12-account list (for B selection sweep)
  const selectedIdx: number[] = accounts.map((a, i) => (a.sel ? i : -1)).filter((i) => i >= 0);

  // ---------- Per-row progress helpers ----------
  const rowAppearA = (i: number) => clamp01(ramp(t, A_ROW_START + i * A_ROW_STEP, A_ROW_START + i * A_ROW_STEP + 0.30));
  const rowFlashA = (i: number) => pulse(t, A_ROW_START + i * A_ROW_STEP, A_ROW_START + i * A_ROW_STEP + 0.55);

  // Selection check appearing on selected rows top-down
  const selectCheck = (selOrder: number) => clamp01(ramp(t, B_SELECT_START + selOrder * B_SELECT_STEP, B_SELECT_START + selOrder * B_SELECT_STEP + 0.25));
  // Unselected rows: faint X tag appears slightly later all together
  const rejectTag = clamp01(ramp(t, B_SELECT_START + 0.2, B_SELECT_START + 0.6));

  // Collapse of unselected rows in B
  const unselectedCollapse = clamp01(ramp(t, B_COLLAPSE_START, B_COLLAPSE_END)); // 0->1, 1 = collapsed

  // Pruning in C: 7 of the 8 selected rows collapse (all except first selected = idx 0)
  // Order: bottom-up to feel like leftover settling, but spec says quick stagger top-down. We'll do top-down skipping the kept one.
  const pruneOrder = selectedIdx.slice(1); // 7 indices to prune
  const pruneProg = (origIdx: number) => {
    const order = pruneOrder.indexOf(origIdx);
    if (order < 0) return 0;
    return clamp01(ramp(t, C_PRUNE_START + order * C_PRUNE_STEP, C_PRUNE_START + order * C_PRUNE_STEP + 0.30));
  };

  // Morph: top row becomes tab pill 6.6 -> 7.0
  const morphProg = clamp01(ramp(t, C_MORPH_START, C_MORPH_END));

  // Scene visibility cross-fades
  const sceneAOpacity = t < C_MORPH_START ? 1 : 1 - clamp01(ramp(t, C_MORPH_START, C_MORPH_END));
  const sceneCOpacity =
    t < C_MORPH_START
      ? 0
      : t < HOLD_END
      ? clamp01(ramp(t, C_MORPH_START, C_MORPH_END))
      : t < RESET_END
      ? 1 - clamp01(ramp(t, HOLD_END, RESET_END))
      : 0;

  // Scene C contact rows
  const cRowProg = (i: number) => {
    const at = C_ROW_START + i * C_ROW_STEP;
    if (t < at) return 0;
    if (t < HOLD_END) return clamp01((t - at) / 0.30);
    if (t < RESET_END) return 1 - clamp01((t - HOLD_END) / (RESET_END - HOLD_END));
    return 0;
  };
  const cRowFlash = (i: number) => pulse(t, C_ROW_START + i * C_ROW_STEP, C_ROW_START + i * C_ROW_STEP + 0.45);
  const cEnrichProg = (i: number) => {
    const at = C_ENRICH_START + i * C_ENRICH_STEP;
    if (t < at) return 0;
    if (t < HOLD_END) return clamp01((t - at) / 0.30);
    return 1;
  };
  const cOutreachProg = (i: number) => {
    const at = C_OUTREACH_START + i * C_OUTREACH_STEP;
    if (t < at) return 0;
    if (t < HOLD_END) return clamp01((t - at) / 0.28);
    return 1;
  };

  const footerProg =
    t < C_FOOTER_START
      ? 0
      : t < HOLD_END
      ? clamp01((t - C_FOOTER_START) / (C_FOOTER_PEAK - C_FOOTER_START))
      : t < RESET_END
      ? 1 - clamp01((t - HOLD_END) / (RESET_END - HOLD_END))
      : 0;

  // Footer-A counter tick
  const scanCount = Math.min(412, Math.round(80 + 332 * clamp01(t / A_DONE)));
  const showFoundA = t >= A_DONE && t < B_DONE;

  // ---------- Sub renderers ----------
  const StatusPill = ({
    progress,
    tone,
    icon,
    label,
  }: {
    progress: number;
    tone: "green" | "amber";
    icon: React.ReactNode;
    label: string;
  }) => {
    if (progress <= 0) return null;
    const bg = tone === "green" ? "#E8F5F0" : "#FFF7E6";
    const fg = tone === "green" ? GREEN : AMBER;
    const bd = tone === "green" ? "rgba(34,130,111,0.28)" : "rgba(184,110,0,0.28)";
    return (
      <div
        aria-hidden
        className="absolute inset-0 flex items-center pointer-events-none"
        style={{
          clipPath: `inset(0 ${(1 - progress) * 100}% 0 0)`,
          transition: "clip-path 280ms cubic-bezier(0.22,0.61,0.36,1)",
        }}
      >
        <div
          className="flex items-center gap-1 h-[18px] px-1.5 rounded-[5px]"
          style={{ background: bg, border: `1px solid ${bd}`, color: fg }}
        >
          {icon}
          <span className="text-[9.5px] font-semibold tracking-tight whitespace-nowrap">{label}</span>
        </div>
      </div>
    );
  };

  const LoaderPill = () => (
    <div
      className="flex items-center gap-1 h-[18px] px-1.5 rounded-[5px]"
      style={{ background: "#FFF7E6", border: "1px solid rgba(184,110,0,0.28)", color: AMBER }}
    >
      <span className="flex items-center gap-[2px]">
        {[0, 1, 2].map((d) => (
          <span
            key={d}
            className="h-[3px] w-[3px] rounded-full animate-pulse"
            style={{ background: AMBER, animationDelay: `${d * 140}ms` }}
          />
        ))}
      </span>
      <span className="text-[9.5px] font-semibold tracking-tight whitespace-nowrap">Enriching</span>
    </div>
  );

  const outreachLabel = (k: OutreachKind) => {
    if (k === "email") return { label: "Email sent", icon: <Mail className="h-2.5 w-2.5" strokeWidth={2.5} />, tone: "green" as const };
    if (k === "linkedin") return { label: "LinkedIn sent", icon: <Linkedin className="h-2.5 w-2.5" strokeWidth={2.5} />, tone: "green" as const };
    if (k === "call") return { label: "Call scheduled", icon: <Phone className="h-2.5 w-2.5" strokeWidth={2.5} />, tone: "green" as const };
    return { label: "Awaiting signal", icon: <Clock className="h-2.5 w-2.5" strokeWidth={2.5} />, tone: "amber" as const };
  };

  // ---------- Render ----------
  // Filtered/limited datasets for mobile (fewer rows + columns)
  const accountsMobile = accounts.slice(0, 7);
  const contactsMobile = contacts.slice(0, 7);

  if (mobile) {
    return (
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="relative w-full h-full">
          {/* SCENE A/B */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ opacity: sceneAOpacity, transition: "opacity 240ms ease-out", pointerEvents: "none" }}
          >
            <div className="w-full rounded-xl bg-white/95 border border-black/[0.06] shadow-[0_12px_32px_-14px_rgba(15,40,32,0.22)] overflow-hidden">
              <div className="flex items-center justify-between px-3 py-2 border-b border-black/5 bg-[#FAFBFB]">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full" style={{ background: GREEN }} />
                  <span className="text-[12px] font-semibold tracking-wide text-black/75">Target accounts · ICP scan</span>
                </div>
                <span className="text-[10px] tracking-[0.14em] uppercase text-black/40">Live</span>
              </div>
              <div className="grid grid-cols-[16px_1.6fr_1.6fr_0.55fr] gap-2 text-[10px] tracking-[0.12em] uppercase text-black/40 px-3 py-1.5 border-b border-black/5">
                <span></span>
                <span>Company</span>
                <span>Intent signals</span>
                <span className="text-right">Fit</span>
              </div>
              <div>
                {accountsMobile.map((a) => {
                  const i = accounts.indexOf(a);
                  const appear = rowAppearA(i);
                  const flash = rowFlashA(i);
                  const isSel = a.sel;
                  const selOrder = isSel ? selectedIdx.indexOf(i) : -1;
                  const checkP = isSel ? selectCheck(selOrder) : 0;
                  const xP = !isSel ? rejectTag : 0;
                  let collapseP = 0;
                  if (!isSel) collapseP = unselectedCollapse;
                  else collapseP = pruneProg(i);
                  const keepFlash = isSel ? pulse(t, 5.4, 5.8) : 0;
                  const baseH = 28;
                  const h = baseH * (1 - collapseP) * appear;
                  const op = appear * (1 - collapseP);
                  return (
                    <div
                      key={a.co}
                      className="grid grid-cols-[16px_1.6fr_1.6fr_0.55fr] gap-2 items-center px-3 relative overflow-hidden border-b border-black/[0.04]"
                      style={{ height: `${h}px`, opacity: op, transition: "height 260ms ease-out, opacity 260ms ease-out" }}
                    >
                      <span aria-hidden className="absolute inset-0 pointer-events-none" style={{ background: `rgba(255,13,64,${0.14 * flash})` }} />
                      <span aria-hidden className="absolute inset-0 pointer-events-none" style={{ background: `rgba(34,130,111,${0.10 * keepFlash})` }} />
                      <span className="relative flex items-center justify-center">
                        {isSel ? (
                          <span className="h-3.5 w-3.5 rounded-[3px] flex items-center justify-center" style={{ background: GREEN, opacity: checkP, transform: `scale(${0.6 + 0.4 * checkP})` }}>
                            <Check className="h-2.5 w-2.5 text-white" strokeWidth={3.5} />
                          </span>
                        ) : (
                          <span className="h-3.5 w-3.5 rounded-[3px] flex items-center justify-center" style={{ background: "rgba(15,40,32,0.06)", color: "rgba(0,0,0,0.35)", opacity: xP }}>
                            <X className="h-2.5 w-2.5" strokeWidth={3} />
                          </span>
                        )}
                      </span>
                      <span className="relative text-[12px] font-semibold text-black/85 truncate">{a.co}</span>
                      <span className="relative text-[11px] text-black/55 truncate">{a.sig}</span>
                      <span className="relative text-[12px] font-mono font-semibold text-right" style={{ color: a.fit >= 75 ? GREEN : "rgba(0,0,0,0.40)" }}>
                        {a.fit}
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className="flex items-center justify-between px-3 py-1.5 bg-[#FAFBFB] border-t border-black/5">
                <span className="text-[10px] text-black/45">Synced to CRM</span>
                <span className="text-[10px] font-semibold" style={{ color: showFoundA ? GREEN : RED }}>
                  {showFoundA ? (t > 5.4 ? "● 8 qualified" : "● 12 in-market") : `● scanning ${scanCount}`}
                </span>
              </div>
            </div>
          </div>

          {/* SCENE C — Contacts */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ opacity: sceneCOpacity, transition: "opacity 240ms ease-out" }}
          >
            <div className="w-full rounded-xl bg-white/95 border border-black/[0.06] shadow-[0_12px_32px_-14px_rgba(15,40,32,0.22)] overflow-hidden">
              <div className="flex items-end gap-1 px-3 pt-2 bg-[#FAFBFB] border-b border-black/5">
                <div
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-t-md border border-b-0"
                  style={{
                    background: "white",
                    borderColor: "rgba(0,0,0,0.06)",
                    transform: `scale(${0.85 + 0.15 * morphProg})`,
                    transformOrigin: "bottom left",
                    opacity: morphProg,
                  }}
                >
                  <Building2 className="h-3 w-3" style={{ color: GREEN }} strokeWidth={2.5} />
                  <span className="text-[11px] font-semibold text-black/80">Northwind Logistics</span>
                </div>
                <span className="ml-auto text-[10px] tracking-[0.14em] uppercase text-black/40 pb-1.5">Contacts</span>
              </div>
              <div className="grid grid-cols-[1.6fr_1.4fr_1.4fr] gap-2 text-[10px] tracking-[0.12em] uppercase text-black/40 px-3 py-1.5 border-b border-black/5">
                <span>Contact</span>
                <span>Title</span>
                <span>Status</span>
              </div>
              <div>
                {contactsMobile.map((c, i) => {
                  const p = cRowProg(i);
                  const flash = cRowFlash(i);
                  const eP = cEnrichProg(i);
                  const oP = cOutreachProg(i);
                  const baseH = 28;
                  const h = baseH * p;
                  const out = outreachLabel(c.out);
                  const showLoader = p > 0.5 && eP < 0.05;
                  return (
                    <div
                      key={c.name}
                      className="grid grid-cols-[1.6fr_1.4fr_1.4fr] gap-2 items-center px-3 relative overflow-hidden border-b border-black/[0.04]"
                      style={{ height: `${h}px`, opacity: p, transition: "height 240ms ease-out, opacity 240ms ease-out" }}
                    >
                      <span aria-hidden className="absolute inset-0 pointer-events-none" style={{ background: `rgba(255,13,64,${0.12 * flash})` }} />
                      <div className="relative min-w-0 flex items-center gap-1.5">
                        <span className="h-4 w-4 rounded-[4px] flex items-center justify-center text-[8px] font-bold shrink-0" style={{ background: `${c.tint}1A`, color: c.tint }}>
                          {c.initials}
                        </span>
                        <span className="text-[11px] font-semibold text-black/85 truncate">{c.name}</span>
                      </div>
                      <span className="relative text-[11px] text-black/60 truncate">{c.title}</span>
                      <div className="relative flex items-center h-full">
                        {showLoader && <LoaderPill />}
                        <StatusPill progress={eP * (1 - oP)} tone="green" icon={<CheckCircle2 className="h-2.5 w-2.5" strokeWidth={2.5} />} label="Enriched" />
                        <StatusPill progress={oP} tone={out.tone} icon={out.icon} label={out.label} />
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="relative flex items-center justify-between px-3 py-1.5 bg-[#FAFBFB] border-t border-black/5 overflow-hidden">
                <span className="text-[10px] text-black/45">Synced to CRM</span>
                <span className="text-[10px] font-semibold" style={{ color: GREEN, opacity: 1 - footerProg }}>
                  ● enriching
                </span>
                <div
                  className="absolute inset-0 flex items-center justify-center gap-1.5 px-3"
                  style={{
                    opacity: footerProg,
                    background: `linear-gradient(90deg, rgba(255,13,64,${0.08 * footerProg}), rgba(34,130,111,${0.10 * footerProg}))`,
                    pointerEvents: "none",
                  }}
                >
                  <Zap className="h-3 w-3" style={{ color: RED }} strokeWidth={2.5} />
                  <span className="text-[10px] font-semibold tracking-[0.08em] uppercase" style={{ color: GREEN }}>
                    7 outreach actions sent
                  </span>
                  <Sparkles className="h-3 w-3" style={{ color: GREEN }} strokeWidth={2.5} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center p-4 lg:p-6 2xl:p-10">
      <div className="relative w-full h-full">
        {/* ============== SCENE A / B — Accounts table ============== */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ opacity: sceneAOpacity, transition: "opacity 240ms ease-out", pointerEvents: "none" }}
        >
          <div className="w-full rounded-xl bg-white/95 backdrop-blur border border-black/[0.06] shadow-[0_12px_32px_-14px_rgba(15,40,32,0.22)] overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-black/5 bg-[#FAFBFB]">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full" style={{ background: GREEN }} />
                <span className="text-[11px] font-semibold tracking-wide text-black/75">Target accounts · Q2 ICP scan</span>
              </div>
              <span className="text-[10px] tracking-[0.14em] uppercase text-black/40">Live</span>
            </div>
            {/* Column headers */}
            <div className="grid grid-cols-[14px_1.7fr_1fr_0.7fr_0.6fr_1.4fr_0.55fr] gap-2 text-[9.5px] tracking-[0.12em] uppercase text-black/40 px-4 py-1.5 border-b border-black/5">
              <span></span>
              <span>Company</span>
              <span>Industry</span>
              <span>Employees</span>
              <span>Region</span>
              <span>Intent signals</span>
              <span className="text-right">Fit</span>
            </div>
            {/* Rows */}
            <div>
              {accounts.map((a, i) => {
                const appear = rowAppearA(i);
                const flash = rowFlashA(i);
                const isSel = a.sel;
                const selOrder = isSel ? selectedIdx.indexOf(i) : -1;
                const checkP = isSel ? selectCheck(selOrder) : 0;
                const xP = !isSel ? rejectTag : 0;
                // Collapse state
                let collapseP = 0;
                if (!isSel) collapseP = unselectedCollapse;
                else collapseP = pruneProg(i);
                // Highlight green flash for kept rows after B
                const keepFlash = isSel ? pulse(t, 5.4, 5.8) : 0;
                const baseH = 22; // px row height when expanded
                const h = baseH * (1 - collapseP) * (appear);
                const op = appear * (1 - collapseP);
                return (
                  <div
                    key={a.co}
                    className="grid grid-cols-[14px_1.7fr_1fr_0.7fr_0.6fr_1.4fr_0.55fr] gap-2 items-center px-4 relative overflow-hidden border-b border-black/[0.04]"
                    style={{
                      height: `${h}px`,
                      opacity: op,
                      transition: "height 260ms ease-out, opacity 260ms ease-out",
                    }}
                  >
                    {/* row flash */}
                    <span
                      aria-hidden
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: `rgba(255,13,64,${0.14 * flash}) `,
                      }}
                    />
                    {/* keep highlight */}
                    <span
                      aria-hidden
                      className="absolute inset-0 pointer-events-none"
                      style={{ background: `rgba(34,130,111,${0.10 * keepFlash})` }}
                    />
                    {/* selection indicator */}
                    <span className="relative flex items-center justify-center">
                      {isSel ? (
                        <span
                          className="h-3 w-3 rounded-[3px] flex items-center justify-center"
                          style={{
                            background: GREEN,
                            opacity: checkP,
                            transform: `scale(${0.6 + 0.4 * checkP})`,
                            transition: "opacity 180ms ease-out, transform 180ms ease-out",
                          }}
                        >
                          <Check className="h-2 w-2 text-white" strokeWidth={3.5} />
                        </span>
                      ) : (
                        <span
                          className="h-3 w-3 rounded-[3px] flex items-center justify-center"
                          style={{
                            background: "rgba(15,40,32,0.06)",
                            color: "rgba(0,0,0,0.35)",
                            opacity: xP,
                            transition: "opacity 180ms ease-out",
                          }}
                        >
                          <X className="h-2 w-2" strokeWidth={3} />
                        </span>
                      )}
                    </span>
                    <span className="relative text-[11px] font-semibold text-black/85 truncate">{a.co}</span>
                    <span className="relative text-[10.5px] text-black/55 truncate">{a.ind}</span>
                    <span className="relative text-[10.5px] font-mono text-black/60">{a.emp}</span>
                    <span className="relative text-[10.5px] text-black/55">{a.reg}</span>
                    <span className="relative text-[10.5px] text-black/55 truncate">{a.sig}</span>
                    <span
                      className="relative text-[11px] font-mono font-semibold text-right"
                      style={{ color: a.fit >= 75 ? GREEN : "rgba(0,0,0,0.40)" }}
                    >
                      {a.fit}
                    </span>
                  </div>
                );
              })}
            </div>
            {/* Footer */}
            <div className="flex items-center justify-between px-4 py-1.5 bg-[#FAFBFB] border-t border-black/5">
              <span className="text-[10px] text-black/45">Synced to Salesforce · HubSpot</span>
              <span
                className="text-[10px] font-semibold"
                style={{ color: showFoundA ? GREEN : RED }}
              >
                {showFoundA
                  ? t > 5.4
                    ? "● 8 accounts qualified for outreach"
                    : "● 12 in-market accounts found"
                  : `● scanning ${scanCount} accounts`}
              </span>
            </div>
          </div>
        </div>

        {/* ============== SCENE C — Contacts table ============== */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ opacity: sceneCOpacity, transition: "opacity 240ms ease-out" }}
        >
          <div className="w-full rounded-xl bg-white/95 backdrop-blur border border-black/[0.06] shadow-[0_12px_32px_-14px_rgba(15,40,32,0.22)] overflow-hidden">
            {/* Header with tab strip */}
            <div className="flex items-end gap-1 px-3 pt-2 bg-[#FAFBFB] border-b border-black/5">
              <div
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-t-md border border-b-0"
                style={{
                  background: "white",
                  borderColor: "rgba(0,0,0,0.06)",
                  transform: `scale(${0.85 + 0.15 * morphProg})`,
                  transformOrigin: "bottom left",
                  opacity: morphProg,
                  transition: "transform 280ms ease-out, opacity 240ms ease-out",
                }}
              >
                <Building2 className="h-3 w-3" style={{ color: GREEN }} strokeWidth={2.5} />
                <span className="text-[10.5px] font-semibold text-black/80">Northwind Logistics</span>
                <span className="text-[10px] text-black/40">· Logistics</span>
              </div>
              <div
                className="flex items-center px-2 py-1 rounded-t-md text-[10px] text-black/40"
                style={{ opacity: 0.6 * morphProg }}
              >
                + 7 more
              </div>
              <span className="ml-auto text-[10px] tracking-[0.14em] uppercase text-black/40 pb-1.5">Contacts</span>
            </div>
            {/* Column headers */}
            <div className="grid grid-cols-[1.5fr_1.4fr_1.2fr_1.4fr] gap-2 text-[9.5px] tracking-[0.12em] uppercase text-black/40 px-4 py-1.5 border-b border-black/5">
              <span>Contact</span>
              <span>Title</span>
              <span>Location</span>
              <span>Status</span>
            </div>
            {/* Rows */}
            <div>
              {contacts.map((c, i) => {
                const p = cRowProg(i);
                const flash = cRowFlash(i);
                const eP = cEnrichProg(i);
                const oP = cOutreachProg(i);
                const baseH = 22;
                const h = baseH * p;
                const out = outreachLabel(c.out);
                const showLoader = p > 0.5 && eP < 0.05;
                return (
                  <div
                    key={c.name}
                    className="grid grid-cols-[1.5fr_1.4fr_1.2fr_1.4fr] gap-2 items-center px-4 relative overflow-hidden border-b border-black/[0.04]"
                    style={{
                      height: `${h}px`,
                      opacity: p,
                      transition: "height 240ms ease-out, opacity 240ms ease-out",
                    }}
                  >
                    <span
                      aria-hidden
                      className="absolute inset-0 pointer-events-none"
                      style={{ background: `rgba(255,13,64,${0.12 * flash})` }}
                    />
                    <div className="relative min-w-0 flex items-center gap-1.5">
                      <span
                        className="h-4 w-4 rounded-[4px] flex items-center justify-center text-[8px] font-bold shrink-0"
                        style={{ background: `${c.tint}1A`, color: c.tint }}
                      >
                        {c.initials}
                      </span>
                      <span className="text-[10.5px] font-semibold text-black/85 truncate">{c.name}</span>
                    </div>
                    <span className="relative text-[10.5px] text-black/60 truncate">{c.title}</span>
                    <span className="relative text-[10.5px] text-black/55 truncate">{c.loc}</span>
                    <div className="relative flex items-center h-full">
                      {showLoader && <LoaderPill />}
                      {/* Enriched pill (green) — slides in on top of loader */}
                      <StatusPill
                        progress={eP * (1 - oP)}
                        tone="green"
                        icon={<CheckCircle2 className="h-2.5 w-2.5" strokeWidth={2.5} />}
                        label="Enriched"
                      />
                      {/* Outreach pill — slides on top of enriched */}
                      <StatusPill
                        progress={oP}
                        tone={out.tone}
                        icon={out.icon}
                        label={out.label}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            {/* Footer */}
            <div className="relative flex items-center justify-between px-4 py-1.5 bg-[#FAFBFB] border-t border-black/5 overflow-hidden">
              <span className="text-[10px] text-black/45">Synced to Salesforce · HubSpot</span>
              <span
                className="text-[10px] font-semibold"
                style={{ color: GREEN, opacity: 1 - footerProg, transition: "opacity 200ms ease-out" }}
              >
                ● enriching
              </span>
              <div
                className="absolute inset-0 flex items-center justify-center gap-1.5 px-4"
                style={{
                  opacity: footerProg,
                  background: `linear-gradient(90deg, rgba(255,13,64,${0.08 * footerProg}), rgba(34,130,111,${0.10 * footerProg}))`,
                  transition: "opacity 220ms ease-out",
                  pointerEvents: "none",
                }}
              >
                <Zap className="h-3 w-3" style={{ color: RED }} strokeWidth={2.5} />
                <span
                  className="text-[10px] font-semibold tracking-[0.08em] uppercase"
                  style={{ color: GREEN }}
                >
                  11 outreach actions sent · 1 awaiting
                </span>
                <Sparkles className="h-3 w-3" style={{ color: GREEN }} strokeWidth={2.5} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* =============================================================
   SIGNAL INTELLIGENCE DIAGRAM — website / news / hiring / funding
   Four scenes cross-fade in left stage; right feed accumulates pop-ins.
   ============================================================= */
const SignalIntelligenceDiagram = ({ mobile = false }: { mobile?: boolean }) => {
  const RED = "#FF0D40";
  const GREEN = "#22826F";

  // Each scene 8s: frame appears, holds 1.8s, popup appears and stays ~6s,
  // then both fade out together before the next scene begins.
  const LOOP = 36.0;
  const SCENES = [
    { start: 0.8,   popAt: 2.6,   type: "web" as const },
    { start: 9.6,   popAt: 11.4,  type: "news" as const },
    { start: 18.4,  popAt: 20.2,  type: "hiring" as const },
    { start: 27.2,  popAt: 29.0,  type: "funding" as const },
  ];
  const HOLD_END = 34.4;
  const RESET_END = 35.4;

  const SIGNALS = [
    { icon: Globe,      tag: "Website intent", company: "Northwind Logistics", insight: "Visited pricing 4× this month — high intent." },
    { icon: Newspaper,  tag: "News · M&A",     company: "Northwind Logistics", insight: "Expanding into Canada via Maple Freight acquisition." },
    { icon: Briefcase,  tag: "Hiring",         company: "Ravencrest Analytics", insight: "Hiring SDRs nationally — 6 open roles." },
    { icon: TrendingUp, tag: "Funding",        company: "Halcyon Robotics",    insight: "Just raised $24M Series A — budget unlocked." },
  ];
  const SOURCE_LABELS = ["Website", "News", "Job board", "Funding"];

  const clamp01 = (v: number) => Math.max(0, Math.min(1, v));
  const ramp = (x: number, a: number, b: number) => (x - a) / (b - a);
  const pulse = (x: number, a: number, b: number) => {
    if (x < a || x > b) return 0;
    const m = (a + b) / 2;
    return x < m ? (x - a) / (m - a) : 1 - (x - m) / (b - m);
  };
  const lerp = (a: number, b: number, p: number) => a + (b - a) * p;

  const [t, setT] = useState(0);
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      setT(((now - start) / 1000) % LOOP);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const sceneOpacity = (i: number) => {
    const s = SCENES[i];
    const next = i < SCENES.length - 1 ? SCENES[i + 1].start : HOLD_END;
    if (i === SCENES.length - 1 && t >= HOLD_END)
      return 1 - clamp01((t - HOLD_END) / (RESET_END - HOLD_END));
    const fadeIn = clamp01(ramp(t, s.start, s.start + 0.5));
    // Fade frame out earlier so a clean empty gap sits between scenes
    const fadeOut = 1 - clamp01(ramp(t, next - 1.6, next - 1.0));
    return Math.min(fadeIn, fadeOut);
  };

  const cursorPath = [
    { at: 0.5, x: 18, y: 30 },
    { at: 1.1, x: 50, y: 55 },
    { at: 1.7, x: 50, y: 78 },
    { at: 2.5, x: 50, y: 78 },
    { at: 4.0, x: 50, y: 78 },
  ];
  const cursorPos = () => {
    const local = t;
    let prev = cursorPath[0];
    for (let i = 1; i < cursorPath.length; i++) {
      const cur = cursorPath[i];
      if (local <= cur.at) {
        const p = clamp01((local - prev.at) / (cur.at - prev.at));
        const e = p * p * (3 - 2 * p);
        return { x: lerp(prev.x, cur.x, e), y: lerp(prev.y, cur.y, e) };
      }
      prev = cur;
    }
    return { x: prev.x, y: prev.y };
  };

  const firedCount = SCENES.filter((s) => t >= s.popAt).length;
  const cursor = cursorPos();

  // Active scene index by time (for top-strip label crossfade)
  let activeIdx = 0;
  for (let i = 0; i < SCENES.length; i++) if (t >= SCENES[i].start) activeIdx = i;

  // Popup progress per scene: enters fast, holds long, exits just before next scene.
  const popupProgress = (i: number) => {
    const s = SCENES[i];
    const next = i < SCENES.length - 1 ? SCENES[i + 1].start : HOLD_END;
    const enter = clamp01(ramp(t, s.popAt - 0.4, s.popAt - 0.05));
    // Popup exits in sync with the frame, well before next scene begins
    const exit = 1 - clamp01(ramp(t, next - 1.7, next - 1.1));
    return Math.min(enter, exit);
  };

  const SignalPopup = ({ i }: { i: number }) => {
    const p = popupProgress(i);
    if (p <= 0.001) return null;
    const sig = SIGNALS[i];
    const Icon = sig.icon;
    const enter = clamp01(ramp(t, SCENES[i].popAt - 0.4, SCENES[i].popAt - 0.05));
    const ringT = clamp01(ramp(t, SCENES[i].popAt - 0.3, SCENES[i].popAt + 0.5));
    const glowPulse = 0.55 + 0.45 * pulse(t, SCENES[i].popAt - 0.2, SCENES[i].popAt + 2.4);
    if (mobile) {
      return (
        <div className="absolute inset-0 pointer-events-none">
          {/* Halo */}
          <div
            aria-hidden
            className="absolute rounded-2xl"
            style={{
              left: "5%",
              right: "5%",
              top: "2%",
              height: "32%",
              background: `radial-gradient(ellipse at center, ${GREEN}3D 0%, ${GREEN}12 45%, transparent 75%)`,
              opacity: p * glowPulse,
              filter: "blur(2px)",
            }}
          />
          {/* Card */}
          <div
            className="absolute rounded-xl bg-white overflow-hidden"
            style={{
              left: "5%",
              right: "5%",
              top: "3%",
              transform: `translateY(${(1 - enter) * 8}px) scale(${0.96 + enter * 0.04})`,
              opacity: p,
              border: `1px solid ${GREEN}40`,
              boxShadow: `0 0 0 1px ${GREEN}22, 0 18px 50px -10px ${GREEN}55, 0 0 60px -8px ${GREEN}66`,
            }}
          >
            <div className="h-[3px] w-full" style={{ background: `linear-gradient(90deg, ${GREEN}, #52FEBF)` }} />
            <div className="px-3.5 pt-3 pb-2 flex items-center gap-2">
              <span
                className="h-6 w-6 rounded-md flex items-center justify-center"
                style={{ background: `${GREEN}18`, border: `1px solid ${GREEN}40` }}
              >
                <Sparkles className="h-3.5 w-3.5" style={{ color: GREEN }} strokeWidth={2.6} />
              </span>
              <div className="flex flex-col leading-tight">
                <span className="text-[9px] uppercase tracking-[0.18em] font-bold" style={{ color: GREEN }}>EverWorker AI</span>
                <span className="text-[9px] font-semibold text-black/50">Signal detected</span>
              </div>
              <span className="ml-auto h-1.5 w-1.5 rounded-full" style={{ background: GREEN, boxShadow: `0 0 0 3px ${GREEN}25` }} />
            </div>
            <div className="px-3.5 pb-3 flex flex-col gap-2">
              <div className="text-[12.5px] font-bold text-black/85 leading-snug">{sig.insight}</div>
              <div className="flex items-center gap-1.5 flex-wrap">
                <span
                  className="text-[8.5px] uppercase tracking-[0.14em] font-bold rounded px-1.5 py-0.5 inline-flex items-center gap-1"
                  style={{ color: GREEN, background: `${GREEN}15` }}
                >
                  <Icon className="h-2.5 w-2.5" strokeWidth={2.6} />
                  {sig.tag}
                </span>
                <div className="flex items-center gap-1 ml-auto">
                  <Building2 className="h-2.5 w-2.5 text-black/45" strokeWidth={2.5} />
                  <span className="text-[9.5px] font-semibold text-black/60 truncate">{sig.company}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="absolute inset-0 pointer-events-none">
        {/* Outer green halo */}
        <div
          aria-hidden
          className="absolute rounded-2xl"
          style={{
            right: "2%",
            top: "50%",
            width: "40%",
            height: "78%",
            transform: "translateY(-50%)",
            background: `radial-gradient(ellipse at center, ${GREEN}33 0%, ${GREEN}10 45%, transparent 75%)`,
            opacity: p * glowPulse,
            filter: "blur(2px)",
          }}
        />
        {/* Soft ping ring (green) */}
        <span
          aria-hidden
          className="absolute rounded-full border-2"
          style={{
            right: "21%",
            top: "50%",
            width: 28,
            height: 28,
            borderColor: GREEN,
            transform: `translate(50%,-50%) scale(${1 + ringT * 3.2})`,
            opacity: (1 - ringT) * 0.55 * p,
          }}
        />
        {/* Popup card */}
        <div
          className="absolute rounded-xl bg-white overflow-hidden"
          style={{
            right: "3.5%",
            top: "50%",
            width: "37%",
            transform: `translate(0, calc(-50% + ${(1 - enter) * 10}px)) scale(${0.94 + enter * 0.06})`,
            opacity: p,
            border: `1px solid ${GREEN}40`,
            boxShadow: `0 0 0 1px ${GREEN}22, 0 18px 50px -10px ${GREEN}55, 0 0 60px -8px ${GREEN}66`,
          }}
        >
          {/* Top accent bar */}
          <div
            className="h-[3px] w-full"
            style={{ background: `linear-gradient(90deg, ${GREEN}, #52FEBF)` }}
          />
          <div className="px-3.5 pt-3 pb-2 flex items-center gap-2">
            <span
              className="h-6 w-6 rounded-md flex items-center justify-center"
              style={{ background: `${GREEN}18`, border: `1px solid ${GREEN}40` }}
            >
              <Sparkles className="h-3.5 w-3.5" style={{ color: GREEN }} strokeWidth={2.6} />
            </span>
            <div className="flex flex-col leading-tight">
              <span className="text-[9px] uppercase tracking-[0.18em] font-bold" style={{ color: GREEN }}>
                EverWorker AI
              </span>
              <span className="text-[9px] font-semibold text-black/50">Signal detected</span>
            </div>
            <span
              className="ml-auto h-1.5 w-1.5 rounded-full"
              style={{ background: GREEN, boxShadow: `0 0 0 3px ${GREEN}25` }}
            />
          </div>
          <div className="px-3.5 pb-3 flex flex-col gap-2">
            <div className="text-[12.5px] font-bold text-black/85 leading-snug">{sig.insight}</div>
            <div className="flex items-center gap-1.5">
              <span
                className="text-[8.5px] uppercase tracking-[0.14em] font-bold rounded px-1.5 py-0.5 inline-flex items-center gap-1"
                style={{ color: GREEN, background: `${GREEN}15` }}
              >
                <Icon className="h-2.5 w-2.5" strokeWidth={2.6} />
                {sig.tag}
              </span>
              <div className="flex items-center gap-1 ml-auto">
                <Building2 className="h-2.5 w-2.5 text-black/45" strokeWidth={2.5} />
                <span className="text-[9.5px] font-semibold text-black/60 truncate">{sig.company}</span>
              </div>
            </div>
            <div className="h-1 w-full rounded-full bg-black/[0.06] overflow-hidden">
              <div
                className="h-full"
                style={{
                  width: `${enter * 100}%`,
                  background: `linear-gradient(90deg, ${GREEN}, #52FEBF)`,
                  transition: "width 360ms ease-out",
                }}
              />
            </div>
            <div
              className="flex items-center gap-1.5 text-[10px] font-semibold pt-0.5"
              style={{ color: GREEN, opacity: clamp01(ramp(t, SCENES[i].popAt + 0.4, SCENES[i].popAt + 0.9)) }}
            >
              <ArrowRight className="h-3 w-3" strokeWidth={2.6} />
              <span>Routed to AI SDR · added to outbound queue</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Frame position for source surface: desktop uses left half (popup floats right),
  // mobile stacks the surface beneath the popup (popup sits at top).
  const frameStyle: React.CSSProperties = mobile
    ? { left: "5%", right: "5%", top: "40%", bottom: "3%" }
    : { left: "2%", top: "3%", bottom: "3%", width: "58%" };

  return (
    <div className="absolute inset-0 p-5 sm:p-7">
      <div className="relative h-full w-full">
        {/* ===== STAGE (transparent — frames are the only "card") ===== */}
        <div className="relative h-full flex flex-col">
          {/* Top status strip — slim, full width, no card chrome */}
          <div className="flex items-center justify-between px-1 py-2">
            <div className="flex items-center gap-2">
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: RED, opacity: 0.5 + 0.5 * pulse(t, t - 0.01, t + 1.4) }}
              />
              <span className="text-[10px] uppercase tracking-[0.18em] font-semibold text-white/80">
                Signal monitor · live
              </span>
            </div>
            <div className="relative h-3 flex-1 mx-4">
              {SOURCE_LABELS.map((label, i) => (
                <span
                  key={label}
                  className="absolute inset-0 flex items-center justify-center text-[10px] uppercase tracking-[0.18em] font-semibold text-white/65"
                  style={{ opacity: i === activeIdx && t < HOLD_END ? 1 : 0, transition: "opacity 240ms linear" }}
                >
                  {label}
                </span>
              ))}
            </div>
            <span className="text-[10px] font-mono text-white/65">
              {firedCount}/4 in-market
            </span>
          </div>

          {/* Scene container */}
          <div className="relative flex-1">
            {/* SCENE 1 — Website */}
            <div
              className="absolute inset-0 p-3"
              style={{ opacity: sceneOpacity(0), transition: "opacity 200ms linear", pointerEvents: "none" }}
            >
              <div
                className="absolute"
                style={frameStyle}
              >
              <SourceShell url="northwind-logistics.io/pricing" />
              <div className="absolute inset-0 pt-7 flex flex-col">
                {/* Site nav */}
                <div className="flex items-center gap-2 px-3 py-2 border-b border-black/[0.06]">
                  <div className="h-3 w-14 rounded" style={{ background: GREEN }} />
                  <div className="flex items-center gap-3 ml-3">
                    {["Product", "Solutions", "Pricing", "Docs"].map((l, k) => (
                      <span key={l} className="text-[9.5px] font-semibold text-black/55" style={{ color: k === 2 ? GREEN : undefined }}>{l}</span>
                    ))}
                  </div>
                  <div className="ml-auto h-5 w-16 rounded-full" style={{ background: GREEN }} />
                </div>
                {/* Hero */}
                <div className="px-4 py-3 flex flex-col items-center gap-1.5">
                  <div className="text-[13px] font-bold text-black/85 tracking-tight">Smarter freight, end to end.</div>
                  <div className="text-[10px] text-black/50">Pricing that scales with your shipments.</div>
                </div>
                {/* Pricing cards */}
                <div className="grid grid-cols-3 gap-2 px-3 flex-1 pb-2">
                  {[
                    { name: "Starter", price: "$49" },
                    { name: "Growth", price: "$199" },
                    { name: "Scale", price: "$499" },
                  ].map((plan, i) => (
                    <div
                      key={plan.name}
                      className="rounded-lg border bg-white p-2 flex flex-col gap-1.5"
                      style={{
                        borderColor: i === 1 ? `${GREEN}` : "rgba(0,0,0,0.08)",
                        boxShadow: i === 1 ? `0 0 0 1.5px ${GREEN}33` : undefined,
                      }}
                    >
                      <div className="text-[9px] uppercase tracking-[0.14em] font-bold text-black/55">{plan.name}</div>
                      <div className="text-[14px] font-bold text-black/85 font-mono">{plan.price}<span className="text-[8px] text-black/40">/mo</span></div>
                      <div className="space-y-1 mt-1">
                        <div className="h-1 w-full rounded bg-black/[0.07]" />
                        <div className="h-1 w-5/6 rounded bg-black/[0.07]" />
                        <div className="h-1 w-4/6 rounded bg-black/[0.07]" />
                      </div>
                      <div
                        className="mt-auto h-4 rounded text-[8px] font-bold flex items-center justify-center"
                        style={{
                          background: i === 1 ? GREEN : "#F1F2F3",
                          color: i === 1 ? "white" : "rgba(0,0,0,0.5)",
                        }}
                      >
                        {i === 1 ? "Start trial" : "Choose"}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cursor + bubble */}
              <div
                className="absolute pointer-events-none"
                style={{
                  left: `${cursor.x}%`,
                  top: `${cursor.y}%`,
                  transform: "translate(-2px,-2px)",
                }}
              >
                <MousePointer2 className="h-4 w-4 text-black drop-shadow" strokeWidth={2.2} fill="white" />
                <div
                  className="absolute left-4 top-3 flex items-center gap-1.5 rounded-md bg-white border border-black/10 px-2 py-1 shadow-[0_6px_18px_-8px_rgba(0,0,0,0.3)]"
                  style={{ whiteSpace: "nowrap" }}
                >
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: RED }} />
                  <span className="text-[10px] font-semibold text-black/80">Northwind Logistics</span>
                  <span className="text-[9px] text-black/45 font-mono">·deanon</span>
                </div>
              </div>
              </div>
              <SignalPopup i={0} />
            </div>

            {/* SCENE 2 — News */}
            <div
              className="absolute inset-0 p-3"
              style={{ opacity: sceneOpacity(1), transition: "opacity 200ms linear", pointerEvents: "none" }}
            >
              <div
                className="absolute"
                style={frameStyle}
              >
              <SourceShell url="logisticsweekly.com/m-and-a" theme="news" />
              <div className="absolute inset-0 pt-7 flex flex-col bg-[#FBF9F4]">
                {/* Masthead */}
                <div className="flex items-baseline justify-between px-4 pt-2 pb-1.5 border-b border-black/10">
                  <div className="text-[14px] font-bold tracking-tight text-black/85" style={{ fontFamily: "Georgia, serif" }}>
                    Logistics Weekly
                  </div>
                  <div className="text-[8.5px] uppercase tracking-[0.2em] font-semibold text-black/45">Mon · May 4 · 2026</div>
                </div>
                <div className="flex items-center gap-3 px-4 py-1 border-b border-black/[0.06]">
                  {["News", "M&A", "Carriers", "Markets", "Opinion"].map((l) => (
                    <span key={l} className="text-[8.5px] uppercase tracking-[0.16em] font-semibold text-black/50">{l}</span>
                  ))}
                </div>
                {/* Article */}
                <div className="px-4 pt-3 flex flex-col gap-1.5 flex-1">
                  <div className="text-[8.5px] uppercase tracking-[0.2em] font-bold" style={{ color: RED }}>
                    M&A · Toronto, ON · 2h ago
                  </div>
                  <div className="text-[14px] font-bold text-black/85 leading-snug pr-4" style={{ fontFamily: "Georgia, serif" }}>
                    Northwind Logistics acquires Toronto-based Maple Freight in $180M deal
                  </div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="h-3 w-3 rounded-full bg-black/15" />
                    <span className="text-[9px] font-semibold text-black/55">Sarah Chen</span>
                    <span className="text-[8.5px] text-black/35">· 3 min read</span>
                  </div>
                  <div className="grid grid-cols-[80px_1fr] gap-3 mt-2">
                    <div className="rounded bg-black/[0.1] aspect-square" />
                    <div className="space-y-1.5">
                      <div className="h-1.5 w-full rounded bg-black/[0.08]" />
                      <div className="h-1.5 w-11/12 rounded bg-black/[0.08]" />
                      <div className="h-1.5 w-10/12 rounded bg-black/[0.08]" />
                      <div className="h-1.5 w-9/12 rounded bg-black/[0.08]" />
                      <div className="h-1.5 w-8/12 rounded bg-black/[0.08]" />
                    </div>
                  </div>
                </div>
              </div>
              </div>
              <SignalPopup i={1} />
            </div>

            {/* SCENE 3 — Job board */}
            <div
              className="absolute inset-0 p-3"
              style={{ opacity: sceneOpacity(2), transition: "opacity 200ms linear", pointerEvents: "none" }}
            >
              <div
                className="absolute"
                style={frameStyle}
              >
              <SourceShell url="jobs.example.com/sales" theme="jobs" />
              <div className="absolute inset-0 pt-7 flex">
                {/* Sidebar */}
                <div className="w-[28%] border-r border-black/[0.06] p-3 flex flex-col gap-2">
                  <div className="text-[9px] uppercase tracking-[0.18em] font-bold text-black/55">Filters</div>
                  {[
                    { h: "Department", items: ["Sales", "Marketing", "RevOps"] },
                    { h: "Remote", items: ["Remote", "Hybrid"] },
                    { h: "Location", items: ["United States"] },
                  ].map((g) => (
                    <div key={g.h} className="flex flex-col gap-1">
                      <div className="text-[8.5px] uppercase tracking-[0.14em] font-semibold text-black/40">{g.h}</div>
                      {g.items.map((it, k) => (
                        <div key={it} className="flex items-center gap-1.5">
                          <span
                            className="h-2 w-2 rounded-sm border flex items-center justify-center"
                            style={{ borderColor: k === 0 ? GREEN : "rgba(0,0,0,0.2)", background: k === 0 ? GREEN : "transparent" }}
                          >
                            {k === 0 && <Check className="h-1.5 w-1.5 text-white" strokeWidth={3} />}
                          </span>
                          <span className="text-[9px] text-black/65">{it}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                {/* Right pane */}
                <div className="flex-1 p-3 flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-6 rounded-md border border-black/10 bg-white flex items-center px-2 gap-1.5">
                      <Search className="h-3 w-3 text-black/35" strokeWidth={2.2} />
                      <span className="text-[9px] text-black/45">SDR · Sales Development</span>
                    </div>
                    <span className="flex items-center gap-1 text-[9px] font-semibold text-black/55">
                      <MapPin className="h-2.5 w-2.5" strokeWidth={2.5} /> United States
                    </span>
                  </div>
                  <div className="text-[9px] text-black/45 font-mono">126 results</div>
                  {[
                    { t: "Senior SDR — Outbound", c: "Ravencrest Analytics", l: "San Francisco, CA", d: "3d ago", s: "$85K–$110K", hot: true },
                    { t: "SDR — Mid-Market", c: "Ravencrest Analytics", l: "Austin, TX", d: "5d ago", s: "$70K–$90K", hot: false },
                    { t: "BDR — Enterprise", c: "Ravencrest Analytics", l: "Remote · US", d: "1w ago", s: "$75K–$95K", hot: false },
                  ].map((j, i) => (
                    <div
                      key={i}
                      className="rounded-lg border bg-white px-2.5 py-2 flex items-center gap-2"
                      style={{
                        borderColor: j.hot ? `${GREEN}55` : "rgba(0,0,0,0.08)",
                        opacity: j.hot ? 1 : 0.7,
                        boxShadow: j.hot ? `0 0 0 1px ${GREEN}22` : undefined,
                      }}
                    >
                      <div className="h-7 w-7 rounded bg-black/[0.08] flex items-center justify-center">
                        <Building2 className="h-3 w-3 text-black/40" strokeWidth={2.2} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-[11px] font-semibold text-black/85 truncate">{j.t}</div>
                        <div className="text-[9px] text-black/50 truncate">
                          {j.c} · {j.l} · {j.d}
                        </div>
                      </div>
                      <span className="text-[9px] font-mono font-semibold text-black/55">{j.s}</span>
                      {j.hot && (
                        <span
                          className="text-[8.5px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded"
                          style={{
                            color: RED,
                            background: "#FFE8ED",
                            opacity: 0.6 + 0.4 * pulse(t, 7.6, 9.4),
                          }}
                        >
                          New
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              </div>
              <SignalPopup i={2} />
            </div>

            {/* SCENE 4 — Funding */}
            <div
              className="absolute inset-0 p-3"
              style={{ opacity: sceneOpacity(3), transition: "opacity 200ms linear", pointerEvents: "none" }}
            >
              <div
                className="absolute"
                style={frameStyle}
              >
              <SourceShell url="techcrunch.com/2026/05/halcyon-series-a" theme="tech" />
              <div className="absolute inset-0 pt-7 flex flex-col">
                {/* Outlet header */}
                <div className="flex items-center gap-2 px-4 py-2 border-b border-black/10">
                  <div className="h-3 w-3 rounded-sm" style={{ background: "#0BA259" }} />
                  <span className="text-[12px] font-bold tracking-tight text-black/85">TechCrunch</span>
                  <span className="ml-3 text-[8.5px] text-black/40">Startups › Funding</span>
                </div>
                <div className="px-4 pt-3 flex flex-col gap-2 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[18px] font-bold font-mono text-black/85">$24M</span>
                    <span
                      className="text-[9px] uppercase tracking-[0.16em] font-bold rounded px-1.5 py-0.5"
                      style={{ color: GREEN, background: "#E8F5F1" }}
                    >
                      Series A
                    </span>
                    <span className="text-[9px] text-black/45">Led by Atlas Ventures</span>
                  </div>
                  <div className="text-[14px] font-bold text-black/85 leading-snug pr-4">
                    Halcyon Robotics closes $24M Series A to scale warehouse automation
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-black/15" />
                    <span className="text-[9px] font-semibold text-black/55">Marcus Wei</span>
                    <span className="text-[8.5px] text-black/35">· 5h ago</span>
                  </div>
                  <div className="space-y-1 mt-1">
                    <div className="h-1.5 w-full rounded bg-black/[0.08]" />
                    <div className="h-1.5 w-11/12 rounded bg-black/[0.08]" />
                    <div className="h-1.5 w-10/12 rounded bg-black/[0.08]" />
                  </div>
                  {/* Cap table mini */}
                  <div className="mt-1 rounded-md border border-black/[0.08] overflow-hidden">
                    <div className="grid grid-cols-2 gap-2 px-2 py-1 bg-[#FAFBFB] border-b border-black/[0.06]">
                      <span className="text-[8.5px] uppercase tracking-[0.14em] font-bold text-black/45">Investor</span>
                      <span className="text-[8.5px] uppercase tracking-[0.14em] font-bold text-black/45 text-right">Amount</span>
                    </div>
                    {[
                      { n: "Atlas Ventures", a: "$14M" },
                      { n: "Northgate Capital", a: "$6M" },
                      { n: "Beacon Partners", a: "$4M" },
                    ].map((r) => (
                      <div key={r.n} className="grid grid-cols-2 gap-2 px-2 py-1 border-b border-black/[0.04] last:border-0">
                        <span className="text-[9.5px] text-black/70">{r.n}</span>
                        <span className="text-[9.5px] font-mono font-semibold text-black/75 text-right">{r.a}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              </div>
              <SignalPopup i={3} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Faux browser/source chrome used inside SignalIntelligenceDiagram scenes.
const SourceShell = ({
  url,
  badge,
  theme = "web",
}: {
  url: string;
  badge?: string;
  theme?: "web" | "news" | "jobs" | "tech";
}) => {
  const surfaces: Record<string, string> = {
    web: "#FAFBFB",
    news: "#FBF9F4",
    jobs: "#F5F7FA",
    tech: "#FAFBFB",
  };
  return (
    <div
      className="absolute inset-0 rounded-lg border border-black/[0.08] overflow-hidden shadow-[0_8px_24px_-12px_rgba(15,40,32,0.18)]"
      style={{ background: surfaces[theme] }}
    >
      <div className="flex items-center gap-1.5 px-2.5 h-6 border-b border-black/[0.06] bg-white">
        <span className="h-1.5 w-1.5 rounded-full bg-[#FF5F57]" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#FEBC2E]" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#28C840]" />
        <div className="ml-2 flex-1 h-3 rounded-sm bg-black/[0.05] flex items-center px-1.5 gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-black/25" />
          <span className="text-[8.5px] font-mono text-black/55 truncate">{url}</span>
        </div>
        {badge && (
          <span className="text-[8.5px] uppercase tracking-[0.14em] font-bold text-black/45">{badge}</span>
        )}
      </div>
    </div>
  );
};

const SdrPipelineFlow = () => {
  const RED = "#FF0D40";
  const capabilities = [
    "Lead Qualification",
    "Lead & Account Research",
    "Personalized Messaging",
    "Outreach Sequencing",
    "Meeting Booking",
    "CRM Updates",
    "Sales Prep",
  ];

  // Master loop duration for the shimmer → check flash → +1 sequence.
  const LOOP = 5;

  // Subtle floating chevron used between stages. Optional flash sync.
  const FloatChevron = ({
    delay = 0,
    isCheck = false,
    flash = false,
  }: {
    delay?: number;
    isCheck?: boolean;
    flash?: boolean;
  }) => (
    <motion.div
      className="h-7 w-7 rounded-full border flex items-center justify-center"
      animate={
        flash
          ? {
              borderColor: ["rgba(14,21,29,0.18)", "rgba(255,13,64,0.85)", "rgba(14,21,29,0.18)"],
            }
          : undefined
      }
      style={!flash ? { borderColor: "rgba(14,21,29,0.18)" } : undefined}
      transition={
        flash
          ? {
              borderColor: {
                duration: LOOP,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.6, 0.7],
              },
            }
          : undefined
      }
    >
      {isCheck ? (
        <motion.div
          animate={
            flash
              ? {
                  color: ["rgba(14,21,29,0.55)", "#FF0D40", "rgba(14,21,29,0.55)"],
                }
              : undefined
          }
          transition={
            flash
              ? {
                  duration: LOOP,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 0.6, 0.7],
                }
              : undefined
          }
          className="flex"
        >
          <Check className="h-3.5 w-3.5" strokeWidth={2.25} />
        </motion.div>
      ) : (
        <ChevronDown className="h-3.5 w-3.5 text-foreground/55" strokeWidth={2} />
      )}
    </motion.div>
  );

  return (
    <div className="w-full h-full flex flex-col px-8 lg:px-12 pt-10 lg:pt-14 pb-0">
      <div className="flex-1 w-full flex flex-col items-center justify-center">
        {/* Top label */}
        <p className="text-lg lg:text-xl text-foreground/80 font-medium tracking-tight">
          Your Market / Buyer Intent Signals
        </p>

        <div className="my-5">
          <FloatChevron delay={0} />
        </div>

        {/* New leads — subtle red flow pulse outward */}
        <motion.p
          className="relative text-lg lg:text-xl font-bold text-foreground tracking-tight"
          animate={{ color: ["hsl(var(--foreground))", "#FF0D40", "hsl(var(--foreground))"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", times: [0, 0.25, 1] }}
        >
          New Leads in Your CRM
        </motion.p>

        <div className="my-5">
          <FloatChevron delay={0.4} />
        </div>

        {/* AI SDR card — shimmer travels along the red outline */}
        <div className="relative rounded-2xl w-[78%] max-w-[460px]">
          {/* Traveling shimmer along the border. The outer layer is a
              vertical gradient that moves; an inset white box masks the
              middle so only a 1.5px ring of the gradient is visible. */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -inset-px rounded-2xl"
            style={{
              background:
                "linear-gradient(to bottom, rgba(255,13,64,0) 0%, rgba(255,13,64,0) var(--p1,0%), rgba(255,255,255,0.95) var(--p2,0%), rgba(255,255,255,0.95) var(--p3,0%), rgba(255,13,64,0) var(--p4,0%), rgba(255,13,64,0) 100%)",
              padding: "1.5px",
              WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
              filter: "drop-shadow(0 0 4px rgba(255,13,64,0.55))",
            }}
            initial={false}
            animate={{
              // A bright white "gap" travels from top (0%) to bottom (100%),
              // making it look like a red highlight sweeps down the outline.
              ["--p1" as any]: ["-10%", "-10%", "100%", "110%", "110%"],
              ["--p2" as any]: ["-6%", "-6%", "104%", "114%", "114%"],
              ["--p3" as any]: ["-2%", "-2%", "108%", "118%", "118%"],
              ["--p4" as any]: ["2%", "2%", "112%", "122%", "122%"],
            }}
            transition={{
              duration: LOOP,
              repeat: Infinity,
              ease: "linear",
              times: [0, 0.05, 0.6, 0.65, 1],
            }}
          />
          {/* Static red outline underneath so the ring is always visible */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-2xl"
            style={{ border: `1.5px solid ${RED}` }}
          />
          <div className="relative text-center px-10 lg:px-16 py-7 lg:py-9">
            <h3 className="text-2xl lg:text-[28px] font-bold tracking-tight mb-3" style={{ color: RED }}>
              The AI SDR
            </h3>
            <div
              className="mx-auto mb-5"
              style={{
                width: "62%",
                height: 1,
                background: "rgba(255,13,64,0.35)",
              }}
            />
            <motion.ul
              className="space-y-[16px] lg:space-y-[22px] overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
              }}
            >
              {capabilities.map((c) => (
                <motion.li
                  key={c}
                  className="text-[14px] lg:text-[16px] leading-snug font-medium"
                  style={{ color: RED }}
                  variants={{
                    hidden: { opacity: 0, height: 0, y: -4 },
                    visible: {
                      opacity: 1,
                      height: "auto",
                      y: 0,
                      transition: { duration: 0.28, ease: "easeOut" },
                    },
                  }}
                >
                  {c}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>

        <div className="my-5">
          <FloatChevron delay={0.8} isCheck flash />
        </div>

        {/* More meetings — floating +1 indicators */}
        <div className="relative">
          <p className="text-lg lg:text-xl font-bold text-foreground tracking-tight">More, Better, Meetings</p>
          <motion.span
            aria-hidden
            className="absolute -right-7 top-0 text-sm font-semibold"
            style={{ color: RED }}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: [0, 0, 1, 1, 0], y: [0, 0, -10, -28, -36] }}
            transition={{
              duration: LOOP,
              repeat: Infinity,
              ease: "easeOut",
              times: [0, 0.7, 0.78, 0.92, 1],
            }}
          >
            +1
          </motion.span>
        </div>
      </div>

      {/* Footer logo — vertically centered in a fixed-height band */}
      <div className="mt-10 lg:mt-14 w-full border-t border-foreground/10">
        <div className="h-16 lg:h-20 w-full flex items-center justify-center">
          <img src={logotypeBlack} alt="EverWorker" className="h-7 lg:h-9 opacity-95" />
        </div>
      </div>
    </div>
  );
};

/* =============================================================
   ONBOARD SECTION — full-width, brand-aligned, with integrations
   ============================================================= */
const OnboardSection = () => (
  <section className="relative px-6 lg:px-8 py-20 sm:py-32 lg:py-48 overflow-hidden">
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background: "#F2F3F5",
      }}
    />
    <div className="relative max-w-6xl 2xl:max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl sm:text-6xl 2xl:text-7xl font-bold tracking-tight text-foreground leading-[1.05] mb-5 sm:mb-7">
          Live on your GTM stack,
          <br />
          <span className="hero-gradient-text">in days.</span>
        </h2>
        <p className="text-base sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10">
          Onboarding is hands-on and fast. We tune the worker to how your team actually sells — wired into your systems,
          fluent in your playbook, and producing pipeline inside the first sprint.
        </p>
        <ul className="flex flex-col sm:flex-row sm:flex-wrap gap-x-8 gap-y-3 sm:justify-center max-w-3xl mx-auto text-left">
          {[
            "Calibrated to your ICP and qualification bar",
            "Trained on your playbook, voice and objections",
            "Wired into your CRM, inbox and sequencer",
            "Grounded in your knowledge base for every reply",
          ].map((line) => (
            <li key={line} className="flex items-start sm:items-center gap-3">
              <span
                className="h-[8px] w-[8px] rounded-full shrink-0 mt-2 sm:mt-0"
                style={{
                  background: "linear-gradient(135deg, #22826F, #52FEBF)",
                  boxShadow: "0 0 10px rgba(82,254,191,0.6)",
                }}
              />
              <span className="text-base text-foreground">{line}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Integrations line */}
      <div className="mt-20 pt-12 border-t border-foreground/10 text-center">
        <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground/60 font-semibold mb-6">
          Built to work with the tools you already run
        </p>
        {(() => {
          const items = [
            { src: logoSalesforce, alt: "Salesforce", h: "h-9" },
            { src: logoHubspot, alt: "HubSpot", h: "h-7" },
            { src: logoOutreach, alt: "Outreach", h: "h-6" },
            { src: logoSalesloft, alt: "Salesloft", h: "h-7" },
            { src: logoLinkedin, alt: "LinkedIn", h: "h-6" },
            { src: logoGoogle, alt: "Google", h: "h-8" },
            { src: logoSendgrid, alt: "SendGrid", h: "h-6" },
            { src: logoTwilio, alt: "Twilio", h: "h-7" },
            { src: logoAirtable, alt: "Airtable", h: "h-7" },
            { src: logoSupabase, alt: "Supabase", h: "h-7" },
          ];
          const loop = [...items, ...items];
          return (
            <div
              className="relative overflow-hidden"
              style={{
                maskImage:
                  "linear-gradient(to right, transparent 0, black 12%, black 88%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0, black 12%, black 88%, transparent 100%)",
              }}
            >
              <div className="flex w-max items-center gap-x-12 animate-logo-marquee">
                {loop.map((l, i) => (
                  <img
                    key={`${l.alt}-${i}`}
                    src={l.src}
                    alt={l.alt}
                    className={`${l.h} w-auto object-contain shrink-0`}
                  />
                ))}
              </div>
            </div>
          );
        })()}
      </div>
    </div>
  </section>
);

export default SdrWorkerFullPage;

/* =============================================================
   FAQ SECTION — accordion
   ============================================================= */
const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: 'What counts as a "qualified meeting"?',
    a: "You define it. Qualified is whatever combination of signal, ICP fit, persona match, and account context matters to your team. The criteria get encoded into the Worker during onboarding so the meetings booked match the bar your AEs would actually value rather than a volume target. The Worker books the meeting and logs it to the CRM, your team runs the meeting, and post-meeting qualification (did it convert to opportunity, was the buyer real) gets logged back to the same CRM and surfaces through the observability layer we configure with you.",
  },
  {
    q: "How does the Worker stay on brand?",
    a: "Through a brain architecture that runs one brain per persona you sell into. Each brain is grounded in your product specs, style guides, voice standards, and the documentation a human SDR would read, plus the proof points that matter for that specific persona. Writing rules and examples are built during onboarding and refined continuously through testing. A CRO at a logistics company and a Director of Demand Gen at a SaaS company do not get structurally similar emails, which is how quality holds across the contact base.",
  },
  {
    q: "How does the Worker decide who to reach and when?",
    a: "The Worker is signal-driven. Triggers (list-based or property-based) fire on configurable schedules and invoke the workflow, which runs a screening pass to block non-fit contacts and personal email addresses, routes the contact to the matching persona brain, runs intent classification against the contact and company properties, and writes the sequence. A trigger has to fire first, the contact has to clear screening, and the intent class determines what gets sent. Your CRM is the system of record throughout.",
  },
  {
    q: "How does the Worker protect our domain reputation?",
    a: "Your primary domain is never exposed to AI SDR sending volume. Sending runs on dedicated domains and mailboxes provisioned through a managed infrastructure layer, which carries the reputation footprint of the AI SDR work. Your corporate domain, the one your executives email from and the one that hosts your website, sits behind that infrastructure untouched. Even in the worst case where a sending domain is flagged, it is replaced from the buffer pool with no blast radius back to the brand.",
  },
  {
    q: "Will this replace our SDRs?",
    a: "No. The Worker is built to multiply the throughput of the team you have, not substitute for it. Your SDRs spend more time in qualified conversations and less time in research and copywriting. Your AEs spend more time on deals and less time prospecting to fill their own pipeline. The customers who frame this internally as a replacement get a comp-plan revolt and a quality problem; the ones who frame it as an extension of capacity get the lift.",
  },
  {
    q: "How is this different from the AI SDR tools we've already evaluated?",
    a: "Most vertical AI SDR tools ship a single hosted instruction set running over a hosted knowledge base, charge per credit at a 5x to 10x markup over the underlying LLM cost, and leave the customer to reconcile the output against their own CRM. The architecture here is different. The Worker runs one brain per persona against your CRM and your instruction set rather than a hosted single-tenant model. Pricing is transparent against a published Phase 1 contract rather than a credit schedule you cannot audit. The 90-day services engagement is included, which is the work the credit-based vendors typically hand back to you and call it self-service.",
  },
  {
    q: "What system access does the Worker need?",
    a: "The Worker needs access to your CRM and your sequencing tool, with permissions to read and write records and to send on the dedicated mailboxes provisioned for the engagement. The CRM is the system of record, and the Worker reads from and writes back to it continuously. Beyond those baseline requirements, scoped permissions, system-specific user rights, and access controls are worked through during implementation with your security and IT teams.",
  },
  {
    q: "What does the first 90 days look like?",
    a: "Phase 1 implementation, with services included. The first weeks cover infrastructure setup, knowledge engine population from your content, instruction set tuning, persona brain configuration, and CRM workflow wiring. The remaining time is co-iteration with the services team alongside your RevOps lead to validate output against your ICP, refine the writing rules, and tune the trigger configuration based on early performance. If the Worker isn't producing meetings that meet your bar by the end of the engagement, we part ways.",
  },
  {
    q: "Does the Worker cover outbound and inbound SDR work?",
    a: "Both. The architecture is the same on either side, just different triggers. Outbound runs against account-level signals (technographic, news, hiring, intent and ABM) and contact-level marketing signals. Inbound runs the same workflow when a marketing signal fires (form fill, demo request, lead score crossing threshold), routing the contact to the matching persona brain so the follow-up is calibrated to where the buyer is in their evaluation. Two add-ons extend inbound further. The Email Reply AI SDR triages replies in seconds, and the Web Chat AI SDR captures site traffic and books meetings from your website directly.",
  },
  {
    q: "Does this replace our CRM?",
    a: "No. Your CRM stays the system of record throughout. The Worker reads from your contact and company objects, writes activity back to those same records, and updates the SDR status field on every contact it touches. If the data isn't in your CRM, the Worker doesn't know about it, which is by design. The integration runs on top of your existing CRM instance, with no parallel database to maintain.",
  },
  {
    q: "Does this come with built-in contact data providers?",
    a: "Not in Phase 1. The first installation runs against the contacts and signals already in your CRM, however imperfect. Contact enrichment via direct API to providers like Apollo, People Data Labs, Clay, Lusha, and Prospeo is added in Phase 3, after the Phase 1 architecture is operational. The reason we sequence it that way is operational. Enrichment populates contacts that need a working execution layer to prosecute, and the execution layer is what Phase 1 builds.",
  },
  {
    q: "What if our CRM data needs cleanup first?",
    a: "Few customers are ready in the way they imagine they need to be. Phase 1 explicitly works against the existing signal set and the contacts already in your CRM, however imperfect. The 90-day services engagement includes the operational tightening that makes Phase 2, Phase 3, and Phase 4 productive over time. Waiting until the CRM is clean is the reason most CROs cite for never starting; the path forward starts with what's already there.",
  },
  {
    q: "What AI Workers should I onboard next?",
    a: "Phase 2 extends the SDR Worker with the LinkedIn AI SDR (sequencing on the channel buyers actually open), the Web Chat AI SDR (booking meetings from your website directly), and the Email Reply AI SDR (speed-to-lead on reply triage). These three increase yield from the Phase 1 implementation already in place. Phase 3 adds direct-API contact enrichment so accounts triggering your signals get populated with the right buying-group contacts automatically. Phase 4 adds account-level signal enrichment (technographic, news, hiring) and website deanonymization, which closes the loop into a fully orchestrated signal-to-meeting system. The sequence is prescriptive because the prior phase is what makes the next phase work; built out of order, the upgrades degrade the system.",
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="px-6 lg:px-8 pb-24 sm:pb-40">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-[#22826F] mb-4">
            Frequently asked
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
            Questions, answered.
          </h2>
        </motion.div>

        <div className="divide-y divide-border/70 border-y border-border/70">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-start justify-between gap-6 py-6 sm:py-7 text-left group"
                  aria-expanded={isOpen}
                >
                  <span className="flex-1 text-base sm:text-xl font-semibold text-foreground leading-snug group-hover:text-[#22826F] transition-colors">
                    {item.q}
                  </span>
                  <span
                    className={`mt-1 shrink-0 inline-flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-border/80 transition-all duration-300 ${
                      isOpen
                        ? "bg-[#22826F] border-[#22826F] text-white rotate-180"
                        : "bg-background text-foreground/70 group-hover:border-[#22826F] group-hover:text-[#22826F]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
                  </span>
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 sm:pb-8 pr-10 sm:pr-16 text-sm sm:text-base text-foreground/70 leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
