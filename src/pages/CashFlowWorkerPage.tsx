import { motion } from "framer-motion";
import { Landmark, TrendingDown, TrendingUp, GitCompare, Lightbulb, BellRing, LineChart, Workflow, Eye, Target, Shield, BarChart3 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PromiseSection from "@/components/PromiseSection";
import { StatCard } from "@/components/ui/stat-card";
import { GetStartedButton } from "@/components/ui/get-started-button";
import { useState } from "react";

const workflowSteps = [
  {
    icon: Landmark,
    title: "Aggregate balances",
    description: "Pulls live balances across every bank account, entity and currency into a single source of truth.",
  },
  {
    icon: TrendingUp,
    title: "Forecast inflows",
    description: "Projects collections from AR aging, scheduled receipts and historical payment behavior.",
  },
  {
    icon: TrendingDown,
    title: "Forecast outflows",
    description: "Models AP commitments, payroll, debt service and scheduled payments across the rolling horizon.",
  },
  {
    icon: GitCompare,
    title: "Identify gaps & surplus",
    description: "Surfaces funding gaps and excess cash before they happen, by day, week and month.",
  },
  {
    icon: Lightbulb,
    title: "Recommend actions",
    description: "Suggests specific moves: accelerate collections, delay payments, draw on credit or invest excess cash.",
  },
  {
    icon: BellRing,
    title: "Alert & report",
    description: "Triggers threshold alerts and produces board-ready liquidity reports, automatically, on cadence.",
  },
];

const capabilities = [
  {
    icon: Eye,
    title: "100% account visibility",
    description: "Real-time cash position across every bank, entity and currency, no more end-of-week spreadsheets.",
  },
  {
    icon: LineChart,
    title: "Rolling forecasts",
    description: "Daily, weekly and monthly forecasts that update continuously as new data lands, 94% accurate at 30-day horizon.",
  },
  {
    icon: Workflow,
    title: "End-to-end treasury ops",
    description: "Aggregation, forecasting, gap analysis, recommendations and reporting, owned by one always-on worker.",
  },
  {
    icon: Target,
    title: "Action-oriented",
    description: "Doesn't just visualize, recommends specific actions to optimize liquidity while meeting every obligation.",
  },
  {
    icon: Shield,
    title: "Covenant-aware",
    description: "Monitors debt covenants, investment policies and FX exposure continuously, flags risk before it materializes.",
  },
  {
    icon: BarChart3,
    title: "Board-ready output",
    description: "Liquidity reports, scenario summaries and variance commentary, generated automatically and audit-ready.",
  },
];

const stats = [
  { value: 94, suffix: "%", label: "30-day forecast accuracy" },
  { value: 100, suffix: "%", label: "Real-time account visibility" },
  { value: 23, suffix: "%", label: "Lower borrowing costs" },
  { value: 31, suffix: "%", label: "Higher investment yield" },
];

const integrations = ["All major banks", "Kyriba", "GTreasury", "NetSuite", "SAP", "Oracle ERP", "Workday", "FX platforms"];

const CashFlowWorkerPage = () => {
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
            Financial Ops · Featured Worker
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-bold tracking-tight leading-[1.05] mb-8 text-foreground"
          >
            <span className="hero-gradient-text">The Cash Flow AI Worker</span>
            <br />
            Forecasts, optimizes and protects every dollar of liquidity.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl 2xl:text-2xl text-muted-foreground max-w-2xl mb-14 leading-relaxed"
          >
            Multiply forecast accuracy and yield without multiplying cost. Real-time visibility across every account and entity, rolling forecasts you can trust and specific actions to take, today, this week and months ahead.
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
              What an always-on treasury engine looks like, based on what we've seen in market.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {stats.map((s, i) => (
              <StatCard key={s.label} stat={s} index={i} counterStarted={counterStarted} />
            ))}
          </div>

          <p className="text-center text-xl sm:text-2xl italic text-muted-foreground mt-14 max-w-3xl mx-auto">
            Multiply forecast accuracy and yield without multiplying cost.
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
            Balances in. Decisions out.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground max-w-2xl mb-20 leading-relaxed"
          >
            A complete treasury operation orchestrated by specialist agents, aggregation, forecasting, gap analysis, recommendations and alerts, running on a continuous loop.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              { label: "User input / triggers", value: "Daily cash position request, forecast horizon, scenario parameters, funding threshold alerts, board reporting needs" },
              { label: "Knowledge sources", value: "Bank account structures, historical cash patterns, AR/AP aging, payment schedules, debt covenants, investment policies, FX exposure data" },
              { label: "Agent orchestration", value: "Bank Aggregation Agent → AR Forecast Agent → AP Forecast Agent → Cash Position Agent → Gap Analysis Agent → Recommendation Agent → Alert Agent" },
              { label: "Integrations", value: "All banking platforms, treasury management systems (Kyriba, GTreasury), ERP systems, AR/AP modules, investment platforms, FX systems" },
              { label: "Output", value: "Daily cash positions, rolling forecasts, funding gap alerts, investment recommendations, liquidity reports, covenant monitoring, board-ready summaries" },
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
            One worker. Total liquidity control.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground text-center mb-20 max-w-xl mx-auto"
          >
            Built to optimize cash, reduce borrowing and improve yield, always-on, always governed, at any scale.
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
            Plugs into every bank, TMS and ERP
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground mb-14 max-w-2xl mx-auto leading-relaxed"
          >
            Connects to your full banking, treasury and finance stack, no rip-and-replace required.
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
            See the Cash Flow AI Worker in action
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed">
            Show us your banking footprint. We'll show you what real-time visibility, 94% forecast accuracy and action-ready recommendations does to your liquidity.
          </p>
          <GetStartedButton>Book a demo</GetStartedButton>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default CashFlowWorkerPage;
