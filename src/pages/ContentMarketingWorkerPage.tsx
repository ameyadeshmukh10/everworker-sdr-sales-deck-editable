import { motion } from "framer-motion";
import { ClipboardList, Search, FileText, PenLine, Palette, CheckCircle2, BookOpen, Workflow, Layers, Target, Shield, BarChart3 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PromiseSection from "@/components/PromiseSection";
import { StatCard } from "@/components/ui/stat-card";
import { GetStartedButton } from "@/components/ui/get-started-button";
import { useState } from "react";

const workflowSteps = [
  {
    icon: ClipboardList,
    title: "Brief & topic",
    description: "Translates your topic, audience and narrative goals into a structured content plan and outline.",
  },
  {
    icon: Search,
    title: "Deep research",
    description: "Mines industry sources, competitor content, customer interviews and product docs, synthesizes the strongest angle.",
  },
  {
    icon: PenLine,
    title: "Long-form writing",
    description: "Drafts complete guides, whitepapers and eBooks in your voice, with citations, structure and narrative flow.",
  },
  {
    icon: Palette,
    title: "Design & layout",
    description: "Produces professional, on-brand layouts with covers, callouts and infographics, ready to gate or distribute.",
  },
  {
    icon: CheckCircle2,
    title: "QA & publish",
    description: "Editorial QA against tone, claims and brand guidelines, then exports publication-ready PDFs and CMS uploads.",
  },
];

const capabilities = [
  {
    icon: BookOpen,
    title: "Long-form, every format",
    description: "Whitepapers, eBooks, guides, one-pagers and infographics, the full thought-leadership stack.",
  },
  {
    icon: Workflow,
    title: "End-to-end content ops",
    description: "Research, writing, design, QA and packaging, owned by one worker, with no agency or freelancer handoffs.",
  },
  {
    icon: Layers,
    title: "8–12 long-form / month",
    description: "Production capacity that would typically take weeks per asset, delivered on a continuous publishing rhythm.",
  },
  {
    icon: Target,
    title: "On-brand by design",
    description: "Trained on your voice, narrative and POV. Consistent brand tone across every asset, every cycle.",
  },
  {
    icon: Shield,
    title: "Editorial governance",
    description: "Approval workflows, claim controls and source citations keep every asset publish-ready and authoritative.",
  },
  {
    icon: BarChart3,
    title: "Built for lead gen",
    description: "Designed PDFs ready for gating, feeding nurture, sales enablement and pipeline content directly.",
  },
];

const stats = [
  { value: 12, prefix: "8–", suffix: "", label: "Long-form assets / mo." },
  { value: 90, suffix: "%", label: "Faster cycle time" },
  { value: 3, suffix: "×", label: "Content-driven leads" },
  { value: 70, suffix: "%", label: "Lower production cost" },
];

const integrations = ["Google Docs", "Notion", "Figma", "Canva", "HubSpot", "Marketo", "WordPress", "Webflow"];

const ContentMarketingWorkerPage = () => {
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
            className="inline-flex items-center gap-3 text-sm text-accent tracking-widest uppercase font-semibold mb-6"
          >
            <span>Marketing · Featured Worker</span>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-accent border border-accent/30 rounded-full px-2 py-0.5">
              Coming soon
            </span>
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-bold tracking-tight leading-[1.05] mb-8 text-foreground"
          >
            <span className="hero-gradient-text">The Conversion Assets AI Worker</span>
            <br />
            Whitepapers, eBooks and richer assets where design and layout lead.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl 2xl:text-2xl text-muted-foreground max-w-2xl mb-14 leading-relaxed"
          >
            A dedicated AI Worker for design-intensive editorial — whitepapers, eBooks, guides and richer asset workflows where layout, illustration and packaging carry as much weight as the words. In active development. Join the early access list.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            <GetStartedButton>Get early access</GetStartedButton>
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
              What an always-on content engine looks like, based on what we've seen in market.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {stats.map((s, i) => (
              <StatCard key={s.label} stat={s} index={i} counterStarted={counterStarted} />
            ))}
          </div>

          <p className="text-center text-xl sm:text-2xl italic text-muted-foreground mt-14 max-w-3xl mx-auto">
            Multiply long-form output and pipeline without multiplying cost.
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
            Brief in. Publication-ready asset out.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground max-w-2xl mb-20 leading-relaxed"
          >
            A complete editorial operation orchestrated by specialist agents, research, outline, writing, editing, design and QA, running on a continuous publishing rhythm.
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
              { label: "User input / triggers", value: "Content briefs, topic requests, campaign themes, product launches, quarterly content plans" },
              { label: "Knowledge sources", value: "Industry research, competitor content, customer interviews, product documentation, brand narrative, SEO keyword data" },
              { label: "Agent orchestration", value: "Research Agent → Outline Agent → Writing Agent → Editing Agent → Design Agent → QA Agent" },
              { label: "Integrations", value: "Google Docs, Notion, Figma, Canva, HubSpot, Marketo, WordPress, PDF generation tools" },
              { label: "Output", value: "Whitepapers, eBooks, guides, one-pagers, infographics, designed PDFs ready for gating" },
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
            One worker. Your entire editorial engine.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground text-center mb-20 max-w-xl mx-auto"
          >
            Built to position your brand as the authority, always-on, always on-brand, at any scale.
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
            Plugs into the tools your editorial team already uses
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground mb-14 max-w-2xl mx-auto leading-relaxed"
          >
            From research and writing to design and distribution, connects to your existing content stack.
          </motion.p>

          <div className="flex flex-wrap justify-center gap-3">
            {integrations.map((tool, i) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="px-5 py-2.5 rounded-full border border-border/60 bg-card text-sm font-semibold text-foreground"
              >
                {tool}
              </motion.div>
            ))}
          </div>
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
            Be first in line for the Conversion Assets AI Worker
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed">
            We're building the Conversion Assets AI Worker now. Tell us about your editorial program and we'll bring you in as early access opens.
          </p>
          <GetStartedButton>Get early access</GetStartedButton>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default ContentMarketingWorkerPage;
