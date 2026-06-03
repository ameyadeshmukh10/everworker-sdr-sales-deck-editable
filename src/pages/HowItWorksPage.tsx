import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Search, PenTool, Rocket, TrendingUp, ArrowRight, CheckCircle2, Briefcase, Database, ShieldCheck, Activity, BarChart3, Users, LineChart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GetStartedButton } from "@/components/ui/get-started-button";

const steps = [
  {
    number: "01",
    icon: Search,
    eyebrow: "Discover",
    title: "We map where AI workers create the most leverage",
    description:
      "A working session with your leaders to pinpoint the workflows, functions and outcomes where an AI workforce will move the needle first and a clear, prioritized path forward.",
    bullets: [
      "Workflow and opportunity mapping",
      "Prioritized AI workforce roadmap",
      "Aligned business case and ROI model",
    ],
    timing: "Week 1",
  },
  {
    number: "02",
    icon: PenTool,
    eyebrow: "Shape",
    title: "We design your AI workers around your business",
    description:
      "We translate the roadmap into specific AI worker designs, inputs, knowledge, agent orchestration, integrations, outputs, scoped and de-risked for your environment.",
    bullets: [
      "Worker design and agent orchestration",
      "Integrations and data sources defined",
      "Guardrails, governance and success metrics",
    ],
    timing: "Weeks 2–3",
  },
  {
    number: "03",
    icon: Rocket,
    eyebrow: "Deploy",
    title: "We get your AI workers live and producing",
    description:
      "We configure, connect and tune each worker in the EverWorker platform, then put them to work alongside your team, with hands-on enablement so adoption sticks from day one.",
    bullets: [
      "Configured and tuned to your workflows",
      "Connected to your stack of record",
      "Team enablement and confident adoption",
    ],
    timing: "Weeks 3–6",
  },
  {
    number: "04",
    icon: TrendingUp,
    eyebrow: "Scale",
    title: "We compound the value, worker after worker",
    description:
      "Your AI workers learn your business and we keep tuning them as it changes. New workers get added to the workforce, multiplying output and outcomes without multiplying cost.",
    bullets: [
      "Continuous tuning and refinement",
      "Performance reviews and ROI tracking",
      "Roadmap for the next workers in line",
    ],
    timing: "Ongoing",
  },
];

const principles = [
  {
    title: "Co-accountable",
    description:
      "Your goals are our goals. We don't hand off a tool, we partner on outcomes, end to end.",
  },
  {
    title: "Business-first",
    description:
      "Every worker is shaped around a real workflow and a defensible business case. No science projects.",
  },
  {
    title: "Built to compound",
    description:
      "One worker proves the model. The next ones get faster and the value compounds across functions.",
  },
];

const HowItWorksPage = () => {
  useEffect(() => {
    document.title = "How EverWorker works | From discovery to a live AI workforce";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "How EverWorker works: a clean, four-step partnership that takes your AI workforce from discovery to live, measurable impact in 45 days.",
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
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
            How EverWorker works
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-8"
          >
            <span className="hero-gradient-text">Launch your AI Workforce</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            In just a few weeks, see the new possible. Drive more revenue, let AI workers tackle your bottlenecks and make work human again.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex items-center justify-center gap-4"
          >
            <GetStartedButton>Book a demo</GetStartedButton>
          </motion.div>
        </div>
      </section>

      {/* Steps – vertical flowing timeline */}
      <section className="relative py-24 lg:py-32 px-6 lg:px-8 bg-background">
        <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-muted-foreground mb-4">
              The journey
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
              A simple, repeatable path to a live AI workforce
            </h2>
          </div>

          <div className="relative">
            {/* center spine */}
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent" />

            <div className="space-y-20 md:space-y-32">
              {steps.map((step, idx) => {
                const Icon = step.icon;
                const left = idx % 2 === 0;
                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                    className="relative md:grid md:grid-cols-2 md:gap-16 items-center"
                  >
                    {/* node on spine */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 z-10">
                      <div className="w-4 h-4 rounded-full bg-accent shadow-[0_0_0_6px_hsl(var(--background)),0_0_0_7px_hsl(var(--border))]" />
                    </div>

                    {/* text side */}
                    <div className={left ? "md:pr-12" : "md:order-2 md:pl-12"}>
                      <div className="flex items-center gap-3 mb-5">
                        <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-accent">
                          {step.eyebrow}
                        </span>
                        <span className="h-px w-8 bg-border" />
                        <span className="text-[11px] font-medium tracking-wider uppercase text-muted-foreground">
                          {step.timing}
                        </span>
                      </div>
                      <h3 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-5 leading-[1.15]">
                        {step.title}
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                        {step.description}
                      </p>
                      <ul className="space-y-3">
                        {step.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-3 text-[15px] text-foreground/80">
                            <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* visual side */}
                    <div className={left ? "md:order-2 md:pl-12 mt-10 md:mt-0" : "md:pr-12 mt-10 md:mt-0"}>
                      <div className="relative aspect-[5/4] rounded-3xl overflow-hidden border border-border bg-gradient-to-br from-secondary/60 via-background to-background p-10 flex flex-col justify-between shadow-[0_20px_60px_-20px_hsl(var(--accent)/0.15)]">
                        <div className="flex items-start justify-between">
                          <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                            <Icon className="h-6 w-6 text-accent" />
                          </div>
                          <span className="text-7xl font-bold text-foreground/5 leading-none tracking-tighter">
                            {step.number}
                          </span>
                        </div>
                        <div>
                          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-muted-foreground mb-2">
                            Step {step.number}
                          </p>
                          <p className="text-xl font-semibold text-foreground leading-snug">
                            {step.eyebrow}
                          </p>
                        </div>
                        <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 45-day promise band */}
      <section className="px-6 lg:px-8 py-24 lg:py-28 section-dark relative overflow-hidden">
        <div className="max-w-6xl 2xl:max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-[auto_1fr] gap-10 md:gap-16 items-center">
            <div className="text-center md:text-left">
              <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-accent-foreground/70 mb-3">
                Our promise
              </p>
              <p className="text-7xl lg:text-8xl font-bold tracking-tight text-background leading-none">
                45<span className="text-accent">.</span>
              </p>
              <p className="text-lg font-medium text-background/80 mt-2">days to live impact</p>
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-background mb-5 leading-[1.2]">
                Once we've scoped your AI workers, we aim to see them live and delivering measurable impact within 45 days.
              </h2>
              <p className="text-lg text-background/70 leading-relaxed">
                We move at the pace of your comfort, but our goal, every time, is the same: real work done by real AI workers, with results you can show your CFO, in six weeks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's an AI worker */}
      <section className="py-24 lg:py-32 px-6 lg:px-8 bg-background">
        <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-16 items-center">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-accent mb-5">
                What's an AI worker
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
                Not a chatbot. Not a copilot.
                <br />
                <span className="hero-gradient-text">A worker that owns the outcome.</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                An AI worker owns a real function in your business, with KPIs to hit, systems to operate inside and your knowledge to draw on. Always-on, governed and shaped to your environment by experts.
              </p>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
                {[
                  { icon: Briefcase, label: "Owns full functions & KPIs" },
                  { icon: Activity, label: "Autonomous, always-on" },
                  { icon: Database, label: "Works within your systems" },
                  { icon: ShieldCheck, label: "Governed and adaptive" },
                  { icon: Users, label: "Uses your knowledge" },
                  { icon: CheckCircle2, label: "Expert-architected, to you" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                      <Icon className="h-4 w-4 text-accent" />
                    </div>
                    <span className="text-[15px] font-medium text-foreground">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative aspect-square rounded-3xl border border-border bg-gradient-to-br from-secondary/60 via-background to-background p-10 overflow-hidden shadow-[0_30px_80px_-30px_hsl(var(--accent)/0.2)]">
              <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
              <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-accent/15 blur-3xl pointer-events-none" />

              {/* node graph */}
              <div className="relative h-full">
                {[
                  { Icon: Activity, top: "8%", left: "60%" },
                  { Icon: Database, top: "30%", right: "8%" },
                  { Icon: BarChart3, top: "38%", left: "12%" },
                  { Icon: ShieldCheck, top: "62%", left: "48%" },
                ].map(({ Icon, ...pos }, i) => (
                  <div
                    key={i}
                    className="absolute w-12 h-12 rounded-xl bg-foreground text-background flex items-center justify-center shadow-lg"
                    style={pos as React.CSSProperties}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                ))}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-32 rounded-2xl bg-foreground flex flex-col items-center justify-center text-background shadow-2xl">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center mb-2">
                    <Briefcase className="h-5 w-5 text-background" />
                  </div>
                  <span className="text-xs font-semibold tracking-wide">AI Worker</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why revenue first → broader maturity */}
      <section className="py-24 lg:py-32 px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-accent mb-5">
              Where we start, where we go
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
              We start with the revenue lifecycle , 
              <span className="hero-gradient-text"> because that's where AI-first transformation earns the right to go further.</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-[1fr_1fr] gap-16 items-center">
            <div className="space-y-6">
              {[
                {
                  num: "1",
                  title: "Show AI success against core business metrics",
                  body: "Marketing, Sales and Finance are measured every day. Wins here are visible, defensible and easy for your leaders to rally around.",
                },
                {
                  num: "2",
                  title: "Build comfort with AI workers in daily business",
                  body: "Your teams learn to work alongside AI workers in the workflows they already know, turning curiosity into capability.",
                },
                {
                  num: "3",
                  title: "Leverage positive impact to invest in further use-cases",
                  body: "Proven returns fund the next wave: HR, CX, Legal, Operations and beyond. The workforce and the value, compounds.",
                },
              ].map((row) => (
                <div key={row.num} className="flex gap-5 items-start">
                  <div className="w-11 h-11 rounded-full bg-foreground text-background flex items-center justify-center font-bold text-lg shrink-0">
                    {row.num}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1.5 leading-snug">
                      {row.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{row.body}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* growth curve visual */}
            <div className="relative aspect-[5/4] rounded-3xl border border-border bg-background p-8 overflow-hidden">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-muted-foreground">
                    AI workforce maturity
                  </p>
                  <p className="text-2xl font-bold text-foreground mt-1">Compounding value</p>
                </div>
                <LineChart className="h-5 w-5 text-accent" />
              </div>

              <svg viewBox="0 0 400 240" className="w-full h-[70%]" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="curveFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M 0 220 Q 160 215 240 170 T 400 10 L 400 240 L 0 240 Z" fill="url(#curveFill)" />
                <path d="M 0 220 Q 160 215 240 170 T 400 10" fill="none" stroke="hsl(var(--accent))" strokeWidth="2.5" />
                {[
                  { x: 60, y: 218, label: "Revenue lifecycle" },
                  { x: 230, y: 172, label: "Adjacent functions" },
                  { x: 370, y: 30, label: "AI-first operations" },
                ].map((pt) => (
                  <g key={pt.label}>
                    <circle cx={pt.x} cy={pt.y} r="5" fill="hsl(var(--accent))" />
                    <circle cx={pt.x} cy={pt.y} r="10" fill="hsl(var(--accent))" fillOpacity="0.15" />
                  </g>
                ))}
              </svg>

              <div className="flex justify-between text-[11px] font-medium uppercase tracking-wider text-muted-foreground pt-4 border-t border-border">
                <span>Start</span>
                <span>Expand</span>
                <span>Scale</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-24 lg:py-32 px-6 lg:px-8">
        <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-muted-foreground mb-4">
              How we partner
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground max-w-3xl mx-auto leading-tight">
              We're with you in every step of the journey
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {principles.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-border bg-card p-8"
              >
                <div className="text-3xl font-bold tracking-tight text-foreground mb-3">
                  {p.title}
                </div>
                <p className="text-muted-foreground leading-relaxed">{p.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform footer band */}
      <section className="px-6 lg:px-8 pb-32">
        <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
          <div className="rounded-3xl border border-border bg-gradient-to-br from-secondary/60 via-background to-background p-10 lg:p-16 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
            <div className="relative z-10 grid md:grid-cols-[1.4fr_1fr] gap-10 items-center">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-accent mb-4">
                  The platform underneath
                </p>
                <h3 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-5 leading-[1.15]">
                  Every step runs on the EverWorker platform
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Manage your AI workers, work alongside them and shape new ones in plain language, supported by our platform AI. Business-user friendly by design, with the depth your operators and engineers need.
                </p>
              </div>
              <div className="flex md:justify-end">
                <GetStartedButton>Request a demo</GetStartedButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 lg:px-8 pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
            Ready to see step one?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
            Book a demo and we'll walk you through what your first AI worker could look like and the path to your second, third and tenth.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <GetStartedButton>Book a demo</GetStartedButton>
            <a
              href="/services"
              className="inline-flex items-center gap-2 h-11 px-6 rounded-[4px] text-md font-medium bg-secondary text-secondary-foreground hover:bg-secondary/70 transition-colors"
            >
              Explore our services <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorksPage;
