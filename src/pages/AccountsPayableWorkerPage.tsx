import { motion } from "framer-motion";
import { Inbox, FileSearch, GitMerge, AlertTriangle, CheckCircle2, CalendarClock, Eye, Workflow, Target, Shield, BarChart3, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PromiseSection from "@/components/PromiseSection";
import { StatCard } from "@/components/ui/stat-card";
import { GetStartedButton } from "@/components/ui/get-started-button";
import { useState } from "react";

const workflowSteps = [
  {
    icon: Inbox,
    title: "Ingest invoices",
    description: "Captures invoices from any source, email, vendor portal, EDI, paper scans and routes them into one queue.",
  },
  {
    icon: FileSearch,
    title: "Extract data",
    description: "Pulls header, line items, tax and remittance details with high accuracy across every format and language.",
  },
  {
    icon: GitMerge,
    title: "Match POs & receipts",
    description: "Runs three-way matching against purchase orders and receiving documents, flags only true exceptions.",
  },
  {
    icon: AlertTriangle,
    title: "Route exceptions",
    description: "Sends mismatches to the right approver with full context, no hunting for the PO owner or buyer.",
  },
  {
    icon: CheckCircle2,
    title: "Approve & code",
    description: "Applies GL coding rules, walks the approval hierarchy and posts clean invoices straight to the ERP.",
  },
  {
    icon: CalendarClock,
    title: "Schedule payments",
    description: "Queues payments for optimal timing, capturing every early-payment discount and preventing duplicates.",
  },
];

const capabilities = [
  {
    icon: Zap,
    title: "78% touchless processing",
    description: "Most invoices flow from receipt to payment with zero human touch, only true exceptions need review.",
  },
  {
    icon: Eye,
    title: "Real-time AP visibility",
    description: "Live dashboards across every entity, pending invoices, exceptions, aging and payment runs in one view.",
  },
  {
    icon: Workflow,
    title: "End-to-end ownership",
    description: "Intake, extraction, matching, exception routing, approval, scheduling and payment, one always-on worker.",
  },
  {
    icon: Target,
    title: "Discount capture",
    description: "Lifts early-payment discount capture from ~23% to 94% by paying on the optimal day, every time.",
  },
  {
    icon: Shield,
    title: "Duplicate prevention",
    description: "99.7% accuracy detecting duplicates across vendors, invoice numbers and amounts, before payment goes out.",
  },
  {
    icon: BarChart3,
    title: "Audit-ready trail",
    description: "Every decision, approver and document captured automatically, clean audit packages on demand.",
  },
];

const stats = [
  { value: 83, suffix: "%", label: "Faster invoice processing" },
  { value: 78, suffix: "%", label: "Touchless processing rate" },
  { value: 94, suffix: "%", label: "Discount capture rate" },
  { value: 84, suffix: "%", label: "Lower cost per invoice" },
];

const integrations = ["SAP", "Oracle", "NetSuite", "Sage", "QuickBooks", "Coupa", "Ariba", "Bill.com", "Tipalti", "Banking platforms"];

const AccountsPayableWorkerPage = () => {
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
            <span className="hero-gradient-text">The Accounts Payable AI Worker</span>
            <br />
            From invoice receipt to payment, zero-touch.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl 2xl:text-2xl text-muted-foreground max-w-2xl mb-14 leading-relaxed"
          >
            Multiply throughput and accuracy without multiplying cost. Captures invoices from any source, matches against POs and receipts, routes exceptions intelligently and schedules payments for optimal timing, turning AP from a paper-shuffling bottleneck into a strategic cash lever.
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
              What an always-on AP engine looks like, based on what we've seen in market.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {stats.map((s, i) => (
              <StatCard key={s.label} stat={s} index={i} counterStarted={counterStarted} />
            ))}
          </div>

          <p className="text-center text-xl sm:text-2xl italic text-muted-foreground mt-14 max-w-3xl mx-auto">
            Multiply invoice throughput and discount capture without multiplying cost.
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
            Invoices in. Payments out.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground max-w-2xl mb-20 leading-relaxed"
          >
            A complete AP operation orchestrated by specialist agents, intake, extraction, matching, exception routing, approval and payment, running on a continuous loop.
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
              { label: "User input / triggers", value: "Invoice receipt (email, portal, scan, EDI), PO creation, goods receipt, payment approval, exception flags, vendor inquiries" },
              { label: "Knowledge sources", value: "Vendor master data, PO terms, receiving records, approval hierarchies, payment policies, discount terms, GL coding rules" },
              { label: "Agent orchestration", value: "Invoice Intake Agent → Data Extraction Agent → PO Matching Agent → Exception Routing Agent → Approval Workflow Agent → Payment Scheduling Agent → Discount Optimization Agent" },
              { label: "Integrations", value: "SAP, Oracle, NetSuite, Sage, QuickBooks, Coupa, Ariba, Bill.com, Tipalti, email systems, OCR services, banking platforms" },
              { label: "Output", value: "Processed invoices, exception reports, approval notifications, payment schedules, discount capture alerts, vendor statements, AP aging reports" },
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
            One worker. Total AP control.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground text-center mb-20 max-w-xl mx-auto"
          >
            Built to clear backlogs, capture every discount and turn AP into a strategic cash function, always-on, always governed, at any scale.
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
            Plugs into every ERP and AP platform
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground mb-14 max-w-2xl mx-auto leading-relaxed"
          >
            Connects to your full AP, procurement and banking stack, no rip-and-replace required.
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
            See the Accounts Payable AI Worker in action
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed">
            Show us your invoice volume and ERP. We'll show you what 78% touchless processing, 94% discount capture and a 2-day cycle does to your bottom line.
          </p>
          <GetStartedButton>Book a demo</GetStartedButton>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default AccountsPayableWorkerPage;
