import { motion } from "framer-motion";
import { LineChart, SlidersHorizontal, Sparkles, CheckCheck, Layers, Megaphone, Shield, Target } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PromiseSection from "@/components/PromiseSection";
import { StatCard } from "@/components/ui/stat-card";
import { GetStartedButton } from "@/components/ui/get-started-button";
import { useState } from "react";

const workflowSteps = [
  {
    icon: LineChart,
    title: "Monitor performance",
    description: "Watches spend, CPA, ROAS and creative fatigue across every campaign, channel and variant in real time.",
  },
  {
    icon: SlidersHorizontal,
    title: "Recommend adjustments",
    description: "Surfaces specific bid, budget, audience and creative changes — with the expected impact and a clear rationale.",
  },
  {
    icon: CheckCheck,
    title: "Approve or auto-apply",
    description: "Your team approves recommendations one-click, or sets guardrails so safe, in-policy changes apply automatically.",
  },
  {
    icon: Sparkles,
    title: "Generate fresh creative",
    description: "When variants fatigue, drafts new copy, visuals and on-brand variants — sized and ready for every platform.",
  },
  {
    icon: Layers,
    title: "Deploy & learn",
    description: "Pushes changes back to the ad platforms and feeds outcomes into the next round of recommendations.",
  },
];

const capabilities = [
  {
    icon: SlidersHorizontal,
    title: "Bid & budget intelligence",
    description: "Reallocates spend toward winning campaigns, audiences and placements before performance dips.",
  },
  {
    icon: CheckCheck,
    title: "Human-in-the-loop control",
    description: "Every recommendation is reviewable. Set the guardrails for what auto-applies and what waits for approval.",
  },
  {
    icon: Megaphone,
    title: "Every paid channel",
    description: "Google, LinkedIn, Meta, YouTube and display — optimized and creative-fed from one worker.",
  },
  {
    icon: Sparkles,
    title: "Creative on demand",
    description: "Generates fresh copy, visuals and platform-sized variants the moment performance signals call for them.",
  },
  {
    icon: Target,
    title: "On-brand by design",
    description: "Trained on your brand guidelines, value props and past winners — 0% generic, 100% you.",
  },
  {
    icon: Shield,
    title: "Safe by default",
    description: "Brand-safety guardrails, spend caps and claim controls so nothing ships — or scales — that shouldn't.",
  },
];

const stats = [
  { value: 16, suffix: "+", label: "Hours/week saved per ad team" },
  { value: 10, suffix: "×", label: "More A/B tests live" },
  { value: 50, prefix: "30–", suffix: "%", label: "Lower cost per lead" },
  { value: 24, suffix: "/7", label: "Always-on optimization" },
];

const integrations = ["Google Ads", "LinkedIn Campaign Manager", "Meta Ads Manager", "YouTube Ads", "Canva", "Figma", "Adobe Creative Suite"];

const AdvertisingWorkerPage = () => {
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
            <span className="hero-gradient-text">The Advertising AI Worker</span>
            <br />
            Optimizes ad spend across every paid channel.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl 2xl:text-2xl text-muted-foreground max-w-2xl mb-14 leading-relaxed"
          >
            Always-on bid, budget and creative optimization. Approve in one click, or auto-apply. Win back 16+ hours a week.
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
              What an always-on ad spend optimizer looks like in market.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {stats.map((s, i) => (
              <StatCard key={s.label} stat={s} index={i} counterStarted={counterStarted} />
            ))}
          </div>

          <p className="text-center text-xl sm:text-2xl italic text-muted-foreground mt-14 max-w-3xl mx-auto">
            Spend optimized continuously. Creative refreshed automatically.
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
            A continuous loop, not a launch-and-pray.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground max-w-2xl mb-20 leading-relaxed"
          >
            Specialist agents handle analytics, bid and budget decisions, creative refreshes and deployment — your marketers stay in command of every change.
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
              { label: "User input / triggers", value: "Live campaign data, spend & performance thresholds, brand guidelines, approval guardrails, channel priorities" },
              { label: "Knowledge sources", value: "Real-time ad platform metrics, historical performance, audience insights, competitor activity, creative win/loss patterns" },
              { label: "Agent orchestration", value: "Analytics Agent → Bid & Budget Agent → Recommendation Agent → Creative Refresh Agent → Deployment Agent" },
              { label: "Integrations", value: "Google Ads, LinkedIn Campaign Manager, Meta Ads Manager, YouTube Ads, Canva, Figma, Adobe Creative Suite" },
              { label: "Output", value: "Bid & budget adjustments, audience tweaks, fresh ad copy & visuals, platform-sized variants, approval queues, performance reports" },
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
            One worker. Every lever.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground text-center mb-20 max-w-xl mx-auto"
          >
            Spend, bidding, audiences and creative — managed together, so each pulls its weight.
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
            Plugs into the platforms you already buy on
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground mb-14 max-w-2xl mx-auto leading-relaxed"
          >
            From design tools to ad managers, the Advertising AI Worker connects to your existing creative and media stack.
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
            See the Advertising AI Worker in action
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed">
            Bring a live campaign. We'll show you the recommendations we'd surface today — and the spend they'd reclaim this week.
          </p>
          <GetStartedButton>Book a demo</GetStartedButton>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default AdvertisingWorkerPage;
