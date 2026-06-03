import { motion } from "framer-motion";
import { ArrowRight, FileCheck, Workflow, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PromiseSection from "@/components/PromiseSection";
import { GetStartedButton } from "@/components/ui/get-started-button";
import { Counter } from "@/components/ui/animated-counter";
import { useState } from "react";

const coreWorkers = [
  {
    name: "Accts. Payable AI Worker",
    description:
      "Captures invoices from any source, matches POs and receipts and schedules payments. Go touchless and achieve more early-payment discount capture.",
    href: "/finance/accounts-payable",
  },
  {
    name: "Accts. Receivable AI Worker",
    description:
      "Issues invoices the moment they're earned, runs personalized dunning and auto-applies cash. Cuts DSO with touchless cash application.",
    href: "/finance/accounts-receivable",
  },
  {
    name: "Cash Flow AI Worker",
    description:
      "Real-time visibility across every account, highly accurate rolling forecasts and specific actions to optimize liquidity today, this week and months ahead.",
    href: "/finance/cash-flow",
  },
];

const extendedWorkers = [
  {
    name: "Expense Management AI Worker",
    description:
      "Reviews every expense report against policy, flags violations and auto-approves the clean ones in seconds.",
  },
  {
    name: "Procurement AI Worker",
    description:
      "Manages purchase requests, vendor selection and spend approvals with policy-aware routing and audit trails.",
  },
  {
    name: "Reconciliation AI Worker",
    description:
      "Matches transactions across bank statements, sub-ledgers and ERPs, closing the books faster every month.",
  },
  {
    name: "Financial Reporting AI Worker",
    description:
      "Generates monthly, quarterly and annual financial statements with variance commentary, ready for review.",
  },
  {
    name: "Compliance & Audit AI Worker",
    description: "Monitors transactions for regulatory risk and prepares audit-ready packages on demand.",
  },
  {
    name: "Revenue Forecasting AI Worker",
    description: "Builds rolling revenue forecasts using historical performance, pipeline signals and booking trends.",
  },
];

const FinancePage = () => {
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
            Finance AI Workers
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-bold tracking-tight leading-[1.05] mb-8 text-foreground"
          >
            Close the books autonomously
            <br />
            <span className="hero-gradient-text">end the operational headache</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl 2xl:text-2xl text-muted-foreground max-w-2xl mb-14 leading-relaxed"
          >
            From invoice capture to cash forecasting, AI workers for your finance back office. Focus on strategy, not
            data entry.
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

      {/* Accounts Payable Worker Feature Card */}
      <section id="accounts-payable" className="py-32 lg:py-40 px-6 lg:px-8">
        <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onViewportEnter={() => setCounterStarted(true)}
            className="rounded-2xl border border-border/60 bg-card shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)] overflow-hidden"
          >
            <div className="p-10 md:p-14 lg:p-16">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-14">
                <div className="max-w-xl">
                  <p className="text-xs font-semibold text-accent tracking-widest uppercase mb-4">Featured Worker</p>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold tracking-tight text-foreground mb-5">
                    Accts. Payable AI Worker
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    End-to-end AP automation, from the moment an invoice arrives to the moment payment clears. Every
                    step is handled, audited and reconciled automatically.
                  </p>
                </div>

                <div className="shrink-0 text-right">
                  {counterStarted ? (
                    <div className="inline-flex items-center gap-0.5">
                      <Counter end={70} duration={2.2} fontSize={48} className="text-accent font-bold tracking-tight" />
                      <span className="text-[48px] font-bold leading-none text-accent tracking-tight">%</span>
                    </div>
                  ) : (
                    <span className="text-[48px] font-bold leading-none text-accent tracking-tight">0%</span>
                  )}
                  <p className="text-sm text-muted-foreground mt-2">faster month-end close</p>
                </div>
              </div>

              {/* Capabilities grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    icon: FileCheck,
                    title: "Zero-touch capture",
                    description:
                      "Reads any invoice format, extracts every line item and validates against POs and receipts automatically.",
                  },
                  {
                    icon: Workflow,
                    title: "End-to-end AP ownership",
                    description:
                      "Owns intake, coding, approval routing, payment scheduling and ledger posting, all without handoffs.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Always audit-ready",
                    description:
                      "Every action is logged with full lineage, so audits and controls run on demand, not on deadline.",
                  },
                ].map((cap, i) => (
                  <motion.div
                    key={cap.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                    className="group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-accent/20">
                      <cap.icon className="h-5 w-5 text-accent" strokeWidth={2} />
                    </div>
                    <h3 className="text-base font-semibold text-foreground mb-2">{cap.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{cap.description}</p>
                  </motion.div>
                ))}
                {/* Placeholder */}
                <div className="rounded-xl bg-muted/40 min-h-[120px]" />
              </div>

              {/* Bottom CTA strip */}
              <div className="mt-14 pt-8 border-t border-border/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <p className="text-muted-foreground">
                  <span className="text-foreground font-semibold">Stop drowning in invoices.</span>
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all duration-300"
                >
                  Learn more about the AI Worker <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Full Finance AI Workers Roster */}
      <section className="py-32 lg:py-40 px-6 lg:px-8 bg-secondary/50">
        <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-accent tracking-widest uppercase font-semibold mb-4 text-center"
          >
            Full Finance Roster
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground text-center mb-6"
          >
            Much. Better. Financial Operations.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground text-center mb-20 max-w-lg mx-auto"
          >
            Put specialized AI workers to work. They run the back office and put people in the loop only where it
            matters.
          </motion.p>

          {/* Core Workers */}
          <div className="mb-16">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs font-semibold text-accent tracking-widest uppercase mb-6"
            >
              Core Workers
            </motion.p>
            <div className="grid md:grid-cols-3 gap-4">
              {coreWorkers.map((worker, i) => (
                <motion.div
                  key={worker.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="rounded-2xl border border-accent/20 bg-card hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 group flex flex-col overflow-hidden"
                >
                  <div className="p-8 flex flex-col flex-1">
                    <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {worker.name}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">{worker.description}</p>
                  </div>
                  <a
                    href={worker.href}
                    className="flex items-center justify-between px-8 py-4 text-base font-semibold text-accent transition-all duration-500 hover:bg-[hsl(var(--accent))] hover:text-accent-foreground"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0 hover:translate-x-1.5" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Extended Workers */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs font-semibold text-muted-foreground tracking-widest uppercase mb-6"
            >
              Specialized Workers
            </motion.p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {extendedWorkers.map((worker, i) => (
                <motion.div
                  key={worker.name}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  className="rounded-xl border border-border/40 bg-card/60 px-6 py-5 hover:shadow-md hover:shadow-accent/5 transition-all duration-300 group"
                >
                  <h4 className="text-base font-semibold text-foreground mb-1.5 group-hover:text-accent transition-colors">
                    {worker.name}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{worker.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why EverWorker */}
      <PromiseSection />

      {/* CTA Section */}
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
            Get Started
          </motion.p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6">
            Scope your Finance AI Workforce
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed">
            Tell us about your finance workflows and we'll map the right AI workers to your back office, from invoice to
            insight.
          </p>
          <GetStartedButton>Book a discussion</GetStartedButton>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default FinancePage;
