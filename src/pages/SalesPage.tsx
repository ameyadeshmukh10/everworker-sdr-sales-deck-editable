import { motion } from "framer-motion";
import { ArrowRight, Link, Workflow, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PromiseSection from "@/components/PromiseSection";
import { GetStartedButton } from "@/components/ui/get-started-button";
import { Counter } from "@/components/ui/animated-counter";
import { useState } from "react";
import sdrChecker from "@/assets/sdr-checker.png";
import sdrHelmet from "@/assets/sdr-helmet.png";

const coreWorkers = [
  {
    name: "SDR AI Worker",
    description:
      "Always-on, always on-brand. Outbound and inbound handling, personalizes outreach, updates lead data and books meetings 24/7.",
    href: "/sales/sdr",
  },
  {
    name: "Sales Playbook AI Worker",
    description:
      "Reads every deal in real time and tells reps exactly what to say, send and do next, turning your playbook into live coaching in every conversation.",
    href: "/sales/playbook",
  },
  {
    name: "Pipeline Reporting AI Worker",
    description:
      "Reads every deal continuously, surfaces what's at risk and rolls a bottoms-up forecast you can defend, with the data behind every number.",
    href: "/sales/pipeline",
  },
];

const extendedWorkers = [
  {
    name: "Lead Enrichment AI Worker",
    description:
      "Enriches every contact with firmographic data, intent signals and social context the moment they enter your pipeline.",
  },
  {
    name: "Business Case & Proposal AI Worker",
    description: "Generates tailored business cases and proposals from deal data, ready for executive review.",
  },
  {
    name: "RFP Response AI Worker",
    description: "Drafts comprehensive RFP responses using your knowledge base, cutting turnaround from days to hours.",
  },
  {
    name: "Competitive Differentiation AI Worker",
    description: "Surfaces competitive intel and battle cards in real time so reps win more head-to-head deals.",
  },
];

const SalesPage = () => {
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
            Sales AI Workers
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-bold tracking-tight leading-[1.05] mb-8 text-foreground"
          >
            Multiply meetings that convert
            <br />
            <span className="hero-gradient-text">without adding cost</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl 2xl:text-2xl text-muted-foreground max-w-2xl mb-14 leading-relaxed"
          >
            From first touch to signed contract, AI workers that unblock sales bottlenecks to drive more revenue.
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

      {/* Inbound SDR Worker Feature Card */}
      <section id="inbound-sdr" className="py-32 lg:py-40 px-6 lg:px-8">
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
                    SDR AI Worker
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Always-on, always on-brand, at any scale. Does outbound and qualifies inbound, personalizes outreach
                    to every contact and books meetings straight onto your reps' calendars, 24/7.
                  </p>
                </div>

                <div className="shrink-0 text-right">
                  {counterStarted ? (
                    <div className="inline-flex items-center gap-0.5">
                      <Counter end={98} duration={2.5} fontSize={48} className="text-accent font-bold tracking-tight" />
                      <span className="text-[48px] font-bold leading-none text-accent tracking-tight">%+</span>
                    </div>
                  ) : (
                    <span className="text-[48px] font-bold leading-none text-accent tracking-tight">0%</span>
                  )}
                  <p className="text-sm text-muted-foreground mt-2">lower cost per contact</p>
                </div>
              </div>

              {/* Capabilities grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    icon: Link,
                    title: "Qualification at scale",
                    description:
                      "Routes real buyers and filters out noise. Every lead scored against your ICP and intent signals.",
                  },
                  {
                    icon: Workflow,
                    title: "Personalized to every contact",
                    description:
                      "Tailored outreach to persona, role and signal. Convert more leads. 0% generic, 100% on-brand.",
                  },
                  {
                    icon: Zap,
                    title: "100% coverage, rapid response",
                    description:
                      "24/7 handling in minutes, not hours. Books meetings and updates your CRM automatically.",
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
                <div className="relative rounded-xl overflow-hidden min-h-[120px] h-full">
                  <img
                    src={sdrChecker}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <img
                    src={sdrHelmet}
                    alt=""
                    aria-hidden="true"
                    className="absolute bottom-3 right-3 w-20 h-20 sm:w-24 sm:h-24 object-contain drop-shadow-lg"
                  />
                </div>
              </div>

              {/* Bottom CTA strip */}
              <div className="mt-14 pt-8 border-t border-border/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <p className="text-muted-foreground">
                  <span className="text-foreground font-semibold">Stop losing leads to slow follow-up.</span>{" "}
                </p>
                <a
                  href="/sales/sdr"
                  className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all duration-300"
                >
                  Learn more about the AI Worker <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Full Sales AI Workers Roster */}
      <section className="py-32 lg:py-40 px-6 lg:px-8 bg-secondary/50">
        <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-accent tracking-widest uppercase font-semibold mb-4 text-center"
          >
            Full Sales Roster
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground text-center mb-6"
          >
            Every sales workflow, covered
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground text-center mb-20 max-w-lg mx-auto"
          >
            Sales AI workers that take the operational tedium away and make sales human again.
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

      {/* Why EverWorker - reuse PromiseSection */}
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
            Scope your Sales AI Workforce
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed">
            Tell us about your sales workflows and we'll map the right AI workers to your pipeline, from inbound to
            close.
          </p>
          <GetStartedButton>Book a discussion</GetStartedButton>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default SalesPage;
