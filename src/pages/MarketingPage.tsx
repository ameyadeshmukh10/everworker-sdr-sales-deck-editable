import { motion } from "framer-motion";
import { ArrowRight, Globe, BrainCircuit, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PromiseSection from "@/components/PromiseSection";
import { GetStartedButton } from "@/components/ui/get-started-button";
import { Counter } from "@/components/ui/animated-counter";
import { useState } from "react";
import contentOpsImage from "@/assets/content-ops-workspace.jpg";

const coreWorkers = [
  {
    name: "Content Operations AI Worker",
    description:
      "End-to-end research, drafting, enrichment and on-brand publishing — humans in the loop, draft cadence on your schedule.",
    href: "/marketing/content-operations",
    comingSoon: false,
  },
  {
    name: "Advertising AI Worker",
    description:
      "Continuously analyzes performance and adjusts bids, budgets and creative variants across every paid channel — recommendations your team approves, or auto-applies, in real time.",
    href: "/marketing/advertising",
    comingSoon: false,
  },
  {
    name: "Conversion Assets AI Worker",
    description:
      "Design-intensive whitepapers, eBooks and richer asset workflows where layout and visual storytelling lead.",
    href: "/marketing/content",
    comingSoon: true,
  },
];

const extendedWorkers = [
  {
    name: "Social Media AI Worker",
    description:
      "Plans, creates and publishes across social platforms with audience-tuned messaging and optimal timing.",
  },
  {
    name: "Webinar Marketing AI Worker",
    description:
      "Handles the full webinar lifecycle: promotion, registration, reminders and post-event nurture sequences.",
  },
  {
    name: "Video Marketing AI Worker",
    description: "Produces, optimizes and distributes video content across channels to maximize reach and engagement.",
  },
  {
    name: "Email Marketing AI Worker",
    description:
      "Builds and sends targeted email campaigns with dynamic segmentation, A/B testing and deliverability optimization.",
  },
  {
    name: "Newsletter AI Worker",
    description: "Curates, writes and distributes recurring newsletters that keep your audience engaged and informed.",
  },
  {
    name: "Product Media & Creative AI Worker",
    description:
      "Generates on-brand product visuals, ad creatives and marketing assets at the speed your campaigns demand.",
  },
];

const MarketingPage = () => {
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
            Marketing AI Workers
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-bold tracking-tight leading-[1.05] mb-8 text-foreground"
          >
            Multiply MQLs and campaigns
            <br />
            <span className="hero-gradient-text">without adding budget</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl 2xl:text-2xl text-muted-foreground max-w-2xl mb-14 leading-relaxed"
          >
            From content creation to demand capture, AI workers automate key operations in your marketing engine. Let
            your people focus on strategy and creativity while AI workers scale impact.
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

      {/* Content Operations Worker Feature Card */}
      <section id="content-operations-worker" className="py-32 lg:py-40 px-6 lg:px-8">
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
                    Content Operations AI Worker
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    One AI Worker that places on-brand, researched and cited drafts on your team's desk at whatever cadence you choose. Autonomous research, drafting, enrichment with FAQs, CTAs, images and quotes — your team stays in the loop for the human last mile.
                  </p>
                </div>

                <div className="shrink-0 text-right">
                  {counterStarted ? (
                    <div className="inline-flex items-center gap-0.5">
                      <Counter end={10} duration={1.5} fontSize={48} className="text-accent font-bold tracking-tight" />
                      <span className="text-[48px] font-bold leading-none text-accent tracking-tight">x</span>
                    </div>
                  ) : (
                    <span className="text-[48px] font-bold leading-none text-accent tracking-tight">0x</span>
                  )}
                  <p className="text-sm text-muted-foreground mt-2">Topical content coverage</p>
                </div>
              </div>

              {/* Capabilities grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    icon: Globe,
                    title: "Deep, brand-aligned research",
                    description:
                      "Builds a full understanding of your targeted topics to inform rich, unique and highly helpful customer-facing content.",
                  },
                  {
                    icon: BrainCircuit,
                    title: "End-to-end content ops",
                    description:
                      "Proactively plans, drafts directly to your CMS, enriches and prepares your team for last-mile review, on schedule.",
                  },
                  {
                    icon: TrendingUp,
                    title: "Always working",
                    description:
                      "Maximize brand discoverability. The AI Worker continuously seeks untapped coverage opportunities.",
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
                {/* Workspace image */}
                <div className="rounded-xl overflow-hidden min-h-[120px]">
                  <img
                    src={contentOpsImage}
                    alt="Modern content operations workspace"
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Bottom CTA strip */}
              <div className="mt-14 pt-8 border-t border-border/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <p className="text-muted-foreground">
                  <span className="text-foreground font-semibold">See the new AI-first approach to content work.</span>{" "}
                </p>
                <a
                  href="/marketing/content-operations"
                  className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all duration-300"
                >
                  Learn more about the AI Worker <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Full Marketing AI Workers Roster */}
      <section className="py-32 lg:py-40 px-6 lg:px-8 bg-secondary/50">
        <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-accent tracking-widest uppercase font-semibold mb-4 text-center"
          >
            Full Marketing Roster
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground text-center mb-6"
          >
            Turn up the marketing volume
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground text-center mb-20 max-w-lg mx-auto"
          >
            Rapidly onboard our expert-designed marketing AI workers, perfectly tuned to your workflows and systems, to
            expand the scope of what's possible in your marketing team.
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
                    <div className="flex items-start gap-2 mb-2">
                      <h4 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                        {worker.name}
                      </h4>
                      {worker.comingSoon && (
                        <span className="shrink-0 text-[10px] font-semibold uppercase tracking-widest text-accent border border-accent/30 rounded-full px-2 py-0.5 mt-1">
                          Coming soon
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">{worker.description}</p>
                  </div>
                  <a
                    href={worker.href}
                    className="flex items-center justify-between px-8 py-4 text-base font-semibold text-accent transition-all duration-500 hover:bg-[hsl(var(--accent))] hover:text-accent-foreground"
                  >
                    <span>{worker.comingSoon ? "Preview" : "Learn more"}</span>
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
            Scope your Marketing AI Workforce
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed">
            Tell us about your marketing workflows and we'll map the right AI workers to your channels, from content to
            conversion.
          </p>
          <GetStartedButton>Book a discussion</GetStartedButton>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default MarketingPage;
