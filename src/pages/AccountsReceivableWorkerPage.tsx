import { motion } from "framer-motion";
import { FileText, Send, Bell, CreditCard, GitMerge, TrendingDown, Eye, Workflow, Target, Shield, BarChart3, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PromiseSection from "@/components/PromiseSection";
import { StatCard } from "@/components/ui/stat-card";
import { GetStartedButton } from "@/components/ui/get-started-button";
import { useState } from "react";

const workflowSteps = [
  {
    icon: FileText,
    title: "Issue invoices",
    description: "Generates and delivers invoices the moment a billable event fires, across every entity, currency and customer portal.",
  },
  {
    icon: Send,
    title: "Confirm delivery",
    description: "Tracks delivery, opens and acknowledgments, surfaces invoices stuck in customer AP queues before they age.",
  },
  {
    icon: Bell,
    title: "Run dunning",
    description: "Personalized reminder cadences by customer risk, payment history and relationship value, escalating only when warranted.",
  },
  {
    icon: CreditCard,
    title: "Accept payment",
    description: "Offers the right payment method per customer, ACH, card, wire, portal and captures remittance data automatically.",
  },
  {
    icon: GitMerge,
    title: "Apply cash",
    description: "Matches payments to invoices with high accuracy, even with partial pays, deductions or short-pays, straight to the ledger.",
  },
  {
    icon: TrendingDown,
    title: "Resolve disputes",
    description: "Triages disputes, gathers documentation and routes to the right owner, closing them faster than your team ever could.",
  },
];

const capabilities = [
  {
    icon: Zap,
    title: "Lower DSO, faster",
    description: "Cuts days sales outstanding by a third or more, by issuing, reminding and applying cash without the lag.",
  },
  {
    icon: Eye,
    title: "Real-time AR visibility",
    description: "Live aging, dispute and collections dashboards across every entity, no more month-end reconciliation panic.",
  },
  {
    icon: Workflow,
    title: "End-to-end ownership",
    description: "Invoicing, delivery, dunning, payment acceptance, cash application and disputes, one always-on worker.",
  },
  {
    icon: Target,
    title: "Smart dunning",
    description: "Risk-based cadences that protect customer relationships, gentle nudges for top accounts, firm escalation where needed.",
  },
  {
    icon: Shield,
    title: "Cash application accuracy",
    description: "Auto-matches the vast majority of payments, including partial pays and short-pays, with full audit trail.",
  },
  {
    icon: BarChart3,
    title: "Bad-debt early warning",
    description: "Flags at-risk accounts before they go delinquent using payment patterns, credit signals and behavior.",
  },
];

const stats = [
  { value: 35, suffix: "%", label: "Lower DSO" },
  { value: 92, suffix: "%", label: "Touchless cash application" },
  { value: 60, suffix: "%", label: "Faster dispute resolution" },
  { value: 80, suffix: "%", label: "Lower cost to collect" },
];

const integrations = ["SAP", "Oracle", "NetSuite", "Sage", "QuickBooks", "Stripe", "HighRadius", "BlackLine", "Banking platforms"];

const AccountsReceivableWorkerPage = () => {
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
            <span className="hero-gradient-text">The Accounts Receivable AI Worker</span>
            <br />
            From invoice issued to cash applied, automatically.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl 2xl:text-2xl text-muted-foreground max-w-2xl mb-14 leading-relaxed"
          >
            Multiply collections speed and accuracy without multiplying cost. Issues invoices the moment they're earned, runs personalized dunning, accepts payment in any form and applies cash to the ledger, turning AR from a month-end scramble into a daily, predictable cash engine.
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
              What an always-on AR engine looks like, based on what we've seen in market.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {stats.map((s, i) => (
              <StatCard key={s.label} stat={s} index={i} counterStarted={counterStarted} />
            ))}
          </div>

          <p className="text-center text-xl sm:text-2xl italic text-muted-foreground mt-14 max-w-3xl mx-auto">
            Multiply collections speed and accuracy without multiplying cost.
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
            Invoices out. Cash in.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground max-w-2xl mb-20 leading-relaxed"
          >
            A complete AR operation orchestrated by specialist agents, invoicing, delivery, dunning, payment, cash application and disputes, running on a continuous loop.
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
              { label: "User input / triggers", value: "Billable event, contract milestone, subscription renewal, payment received, dispute filed, customer inquiry, credit memo request" },
              { label: "Knowledge sources", value: "Customer master data, contract terms, pricing & tax rules, payment history, credit profiles, dispute history, dunning policies, GL coding rules" },
              { label: "Agent orchestration", value: "Invoice Generation Agent → Delivery Agent → Dunning Agent → Payment Acceptance Agent → Cash Application Agent → Dispute Resolution Agent → Credit Risk Agent" },
              { label: "Integrations", value: "SAP, Oracle, NetSuite, Sage, QuickBooks, Stripe, HighRadius, BlackLine, customer AP portals, banking platforms, credit bureaus" },
              { label: "Output", value: "Issued invoices, dunning communications, applied payments, dispute resolutions, AR aging reports, DSO trending, bad-debt early warnings, customer statements" },
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
            One worker. Total AR control.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground text-center mb-20 max-w-xl mx-auto"
          >
            Built to lower DSO, protect margin and turn AR into a predictable cash engine, always-on, always governed, at any scale.
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
            Plugs into every ERP, billing and payment platform
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground mb-14 max-w-2xl mx-auto leading-relaxed"
          >
            Connects to your full AR, billing and banking stack, no rip-and-replace required.
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
            See the Accounts Receivable AI Worker in action
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed">
            Show us your billing volume and aging. We'll show you what a 35% DSO reduction, 92% touchless cash application and 60% faster dispute resolution does to your cash position.
          </p>
          <GetStartedButton>Book a demo</GetStartedButton>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default AccountsReceivableWorkerPage;
