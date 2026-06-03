import { motion } from "framer-motion";
import {
  Search,
  PenLine,
  ImagePlus,
  Code2,
  Link2,
  Globe,
  BrainCircuit,
  TrendingUp,
  Sparkles,
  Database,
  Shield,
  Users,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PromiseSection from "@/components/PromiseSection";
import { GetStartedButton } from "@/components/ui/get-started-button";
import { StatCard } from "@/components/ui/stat-card";
import { useState } from "react";

const workflowSteps = [
  {
    icon: Search,
    title: "Researches deeply",
    description:
      "Explores topics, buyer context, and original angles tied to your brand — the depth dialed to your standard.",
  },
  {
    icon: PenLine,
    title: "Drafts on-brand content",
    description:
      "Drafts aligned to your voice and values — written for human readers, with citations and source-grounded claims.",
  },
  {
    icon: ImagePlus,
    title: "Enriches with media & CTAs",
    description:
      "Creates on-brand images, FAQs, quotes, additional resources and CTAs, embedded directly in the draft.",
  },
  {
    icon: Code2,
    title: "Full channel optimization",
    description:
      "Structure, metadata and formatting prepared for search, AI answers and your distribution channels.",
  },
  {
    icon: Link2,
    title: "Drafts in your CMS",
    description:
      "Drafts landed in your CMS, ready for the human last mile — review, refine, approve and publish.",
  },
];

const capabilities = [
  {
    icon: Globe,
    title: "Cover more ground, on-brand",
    description:
      "Topical breadth and depth that an in-house team can't match alone, delivered without ever drifting off-brand.",
  },
  {
    icon: BrainCircuit,
    title: "Always-on production",
    description:
      "A continuous research-to-draft loop, sized to whatever cadence your team wants drafts to land in their inbox.",
  },
  {
    icon: TrendingUp,
    title: "Compounding discoverability",
    description:
      "Every cycle expands coverage, strengthens internal linking and feeds the channels that bring buyers to you.",
  },
  {
    icon: Sparkles,
    title: "Stylistic & purpose tuning",
    description:
      "Fine controls per piece — educational, narrative, technical, conversion — your editorial intent, every time.",
  },
  {
    icon: Database,
    title: "Grounded and cited",
    description:
      "Pulls from approved sources, your product docs and customer evidence. Never invents — always cites.",
  },
  {
    icon: Shield,
    title: "Humans in the loop",
    description:
      "You set how much human review fits each piece. Quality standards, your way — from light touch to deep edit.",
  },
];

const stats = [
  { value: 10, suffix: "×", label: "Topical content coverage" },
  { value: 50, suffix: "+", label: "On-brand drafts / mo." },
  { value: 80, suffix: "%", label: "Lower cost per piece" },
  { value: 4, suffix: "×", label: "Faster cycle time" },
];

const integrations: { name: string; logo: string }[] = [
  { name: "WordPress", logo: "https://cdn.simpleicons.org/wordpress/21759B" },
  { name: "Webflow", logo: "https://cdn.simpleicons.org/webflow/146EF5" },
  { name: "HubSpot CMS", logo: "https://cdn.simpleicons.org/hubspot/FF7A59" },
  { name: "Notion", logo: "https://cdn.simpleicons.org/notion/000000" },
  { name: "Google Docs", logo: "https://cdn.simpleicons.org/googledocs/4285F4" },
  { name: "Figma", logo: "https://cdn.simpleicons.org/figma/F24E1E" },
  { name: "Google Search Console", logo: "https://cdn.simpleicons.org/googlesearchconsole/458CF5" },
  { name: "Google Analytics", logo: "https://cdn.simpleicons.org/googleanalytics/E37400" },
];

const ContentOperationsWorkerPage = () => {
  const [counterStarted, setCounterStarted] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-32 px-6 lg:px-8 overflow-hidden gradient-mesh">
        <div className="gradient-orb w-[500px] h-[500px] bg-accent/20 top-20 -left-40 absolute" />
        <div className="gradient-orb w-[400px] h-[400px] bg-blue-400/15 bottom-10 right-[-10%] absolute" />

        <div className="max-w-6xl 2xl:max-w-7xl mx-auto relative z-10">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="text-sm text-accent tracking-widest uppercase font-semibold mb-6"
          >
            Marketing · Featured Worker
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-bold tracking-tight leading-[1.05] mb-8 text-foreground"
          >
            The Content Operations AI Worker
            <br />
            <span className="hero-gradient-text">deep research to on-brand content, always-on</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl 2xl:text-2xl text-muted-foreground max-w-3xl mb-14 leading-relaxed"
          >
            Walk in each day — or at whatever workflow cadence you choose — to on-brand drafts placed by the AI Worker:
            researched, cited, enriched and tuned to the depth and intent you set. Your team stays in the loop for the
            human last mile. This is so much more than drafting support — change the way your content works.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            <GetStartedButton>Book a demo</GetStartedButton>
          </motion.div>
        </div>
      </section>

      {/* By the numbers */}
      <section className="py-28 lg:py-32 px-6 lg:px-8 border-y border-border/60 bg-secondary/30">
        <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onViewportEnter={() => setCounterStarted(true)}
            className="text-center mb-14"
          >
            <h2 className="text-4xl sm:text-5xl 2xl:text-6xl font-bold tracking-tight text-foreground mb-4">
              By the numbers.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              What an autonomous, human-in-the-loop content engine looks like in market.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {stats.map((s, i) => (
              <StatCard key={s.label} stat={s} index={i} counterStarted={counterStarted} />
            ))}
          </div>

          <p className="text-center text-xl sm:text-2xl italic text-muted-foreground mt-14 max-w-3xl mx-auto">
            Cover more ground at the depth and quality you'd defend in any editorial review.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-32 lg:py-40 px-6 lg:px-8">
        <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-accent tracking-widest uppercase font-semibold mb-4"
          >
            How it works
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl 2xl:text-6xl font-bold tracking-tight text-foreground mb-6 max-w-3xl"
          >
            Topic in. On-brand draft, ready for review, out.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground max-w-2xl mb-20 leading-relaxed"
          >
            End-to-end autonomous research, drafting and enrichment — orchestrated by specialist agents, paced to your
            team's review cadence.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {workflowSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="relative rounded-2xl border border-border/60 bg-card p-8 hover:shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)] transition-all duration-300"
              >
                <div className="absolute top-6 right-6 text-xs font-semibold text-muted-foreground/60 tracking-widest">
                  0{i + 1}
                </div>
                <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                  <step.icon className="h-5 w-5 text-accent" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blueprint */}
      <section className="py-32 lg:py-40 px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-accent tracking-widest uppercase font-semibold mb-4"
          >
            Blueprint
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-16 max-w-3xl"
          >
            Inside the AI Worker
          </motion.h2>

          <div className="rounded-2xl border border-border/60 bg-card overflow-hidden">
            {[
              {
                label: "User input / triggers",
                value: "Topic themes, target audiences, editorial intent (educate, convert, narrative), brand POV, review cadence",
              },
              {
                label: "Knowledge sources",
                value:
                  "Brand guidelines, product docs, approved sources, customer evidence, competitor coverage, internal subject-matter content",
              },
              {
                label: "Agent orchestration",
                value:
                  "Research → Outline → Drafting → Enrichment (FAQs, CTAs, images, quotes, resources) → Channel Optimization → CMS Drop",
              },
              {
                label: "Human-in-the-loop controls",
                value:
                  "Tunable review depth per piece — from light touch approval to full editorial pass — with claim, tone and policy guardrails",
              },
              {
                label: "Integrations",
                value:
                  "WordPress, Webflow, HubSpot CMS, Notion, Google Docs, Figma, Google Search Console, Google Analytics",
              },
              {
                label: "Output",
                value:
                  "On-brand drafts in your CMS — researched, cited, enriched with media, FAQs, CTAs and resources — ready for human review",
              },
            ].map((row, i) => (
              <motion.div
                key={row.label}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className={`grid grid-cols-1 md:grid-cols-[260px_1fr] gap-4 md:gap-10 px-8 py-6 ${i % 2 === 0 ? "bg-secondary/30" : ""}`}
              >
                <div className="text-sm font-semibold text-foreground">{row.label}</div>
                <div className="text-sm text-muted-foreground leading-relaxed">{row.value}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-32 lg:py-40 px-6 lg:px-8">
        <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-accent tracking-widest uppercase font-semibold mb-4 text-center"
          >
            Capabilities
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground text-center mb-6"
          >
            One worker. Your whole content pipeline.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground text-center mb-20 max-w-xl mx-auto"
          >
            Autonomous from research to draft drop — your team stays in the loop wherever it matters most.
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-2xl border border-border/60 bg-card p-8 hover:shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)] transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-accent/20">
                  <cap.icon className="h-5 w-5 text-accent" strokeWidth={2} />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{cap.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{cap.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Human-in-the-loop highlight */}
      <section className="py-32 lg:py-40 px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent/10 mb-8">
            <Users className="h-7 w-7 text-accent" strokeWidth={2} />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6">
            Human in the loop, on your terms.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Your editors set the review depth — light touch on routine pieces, full editorial pass on the ones that
            matter most. Quality standards stay yours. The AI Worker handles the volume.
          </p>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-32 lg:py-40 px-6 lg:px-8 bg-secondary/50">
        <div className="max-w-6xl 2xl:max-w-7xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-accent tracking-widest uppercase font-semibold mb-4"
          >
            Works in your stack
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6"
          >
            Plugs into the tools you already use
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground mb-14 max-w-2xl mx-auto leading-relaxed"
          >
            From research to CMS drop, the Content Operations AI Worker connects to your editorial and publishing stack.
          </motion.p>

          <div className="flex flex-wrap justify-center gap-3">
            {integrations.map((tool, i) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-border/60 bg-card text-sm font-semibold text-foreground"
              >
                <img
                  src={tool.logo}
                  alt={`${tool.name} logo`}
                  loading="lazy"
                  width={18}
                  height={18}
                  className="h-[18px] w-[18px] object-contain"
                />
                <span>{tool.name}</span>
              </motion.div>
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-sm text-muted-foreground/80 mt-10 max-w-xl mx-auto leading-relaxed"
          >
            Don't see yours? Not a problem. EverWorker is designed to integrate with any tool or business system. These
            are just the common ones.
          </motion.p>
        </div>
      </section>

      <PromiseSection />

      {/* CTA */}
      <section className="py-32 lg:py-40 px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-accent tracking-widest uppercase font-semibold mb-4"
          >
            Get started
          </motion.p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6">
            See the Content Operations AI Worker in action
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed">
            Show us your topics. We'll show you what an always-on, on-brand content pipeline looks like — with your
            team in the loop wherever it matters.
          </p>
          <GetStartedButton>Book a demo</GetStartedButton>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default ContentOperationsWorkerPage;
