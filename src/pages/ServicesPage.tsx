import { motion } from "framer-motion";
import { Compass, Wrench, Calculator, BookMarked, GraduationCap, LifeBuoy, Sparkles, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PromiseSection from "@/components/PromiseSection";
import { GetStartedButton } from "@/components/ui/get-started-button";

const services = [
  {
    icon: Compass,
    eyebrow: "Discover",
    title: "AI Workforce Discovery Workshop",
    description:
      "A guided session with your leaders to map where AI workers create the most leverage in your business, across functions, workflows and outcomes and to align on a pragmatic path forward.",
    outcome: "A prioritized AI workforce roadmap, owned by your leadership team.",
  },
  {
    icon: Wrench,
    eyebrow: "Shape",
    title: "AI Worker Shaping & Scoping",
    description:
      "We translate the roadmap into specific AI worker designs, inputs, knowledge sources, agent orchestration, integrations and outputs, scoped to your environment and ready to build.",
    outcome: "Production-ready AI worker designs, agreed and de-risked.",
  },
  {
    icon: Calculator,
    eyebrow: "Justify",
    title: "Business Case Development",
    description:
      "Quantified ROI models for every AI worker, throughput, cycle time, accuracy, cost-to-serve and revenue impact, built with your finance team and ready for executive approval.",
    outcome: "A defensible business case, with ROI math your CFO trusts.",
  },
  {
    icon: BookMarked,
    eyebrow: "Deploy",
    title: "AI Worker Catalogue",
    description:
      "A deep roster of expert-designed AI workers across Marketing, Sales, Finance, HR, CX, Legal, Operations and beyond, proven use-cases ready to deploy with our help in days, not quarters.",
    outcome: "Battle-tested AI workers live in your environment, fast.",
  },
  {
    icon: GraduationCap,
    eyebrow: "Adopt",
    title: "Enablement & Training",
    description:
      "Hands-on enablement that helps your teams adopt, work alongside and eventually shape their own AI workers in the EverWorker platform, building real fluency as comfort grows.",
    outcome: "Confident teams operating an AI workforce as a daily habit.",
  },
  {
    icon: LifeBuoy,
    eyebrow: "Sustain",
    title: "Professional Services",
    description:
      "Ongoing partnership to manage, support, tune and refine your AI workers as your business evolves, so performance compounds instead of drifting.",
    outcome: "AI workers that get sharper, safer and more valuable over time.",
  },
];

const journey = [
  { phase: "Discover", note: "Workshop & roadmap" },
  { phase: "Shape", note: "Scope & design" },
  { phase: "Justify", note: "Business case & ROI" },
  { phase: "Deploy", note: "Catalogue & build" },
  { phase: "Adopt", note: "Enablement & training" },
  { phase: "Sustain", note: "Manage, tune, scale" },
];

const ServicesPage = () => {
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
            Services
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-bold tracking-tight leading-[1.05] mb-8 text-foreground"
          >
            <span className="hero-gradient-text">Partners in your AI-first journey</span>
            <br />
            from first workshop to scaled workforce.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl 2xl:text-2xl text-muted-foreground max-w-2xl mb-14 leading-relaxed"
          >
            We're with you across every step, defining, shaping, deploying and managing your AI workforce. Co-accountable to the outcomes, committed to your scale.
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

      {/* Services grid */}
      <section className="py-32 lg:py-40 px-6 lg:px-8">
        <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl 2xl:text-6xl font-bold tracking-tight text-foreground mb-6 max-w-3xl mx-auto text-center"
          >
            Embedded expertise, always there.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-20 leading-relaxed text-center"
          >
            Engage at any point in the journey. Most clients start with a workshop and grow into a long-term partnership, but every service stands on its own.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="rounded-2xl border border-border/60 bg-card p-8 hover:shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center">
                    <s.icon className="h-5 w-5 text-accent" strokeWidth={2} />
                  </div>
                  <span className="text-[10px] font-semibold text-muted-foreground/60 tracking-[0.18em] uppercase">
                    {s.eyebrow}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{s.description}</p>
                <div className="mt-auto pt-5 border-t border-border/60">
                  <p className="text-[11px] font-semibold text-accent tracking-widest uppercase mb-1.5">
                    Outcome
                  </p>
                  <p className="text-sm text-foreground font-medium leading-snug">{s.outcome}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey strip */}
      <section className="py-28 px-6 lg:px-8 bg-secondary/30 border-y border-border/60">
        <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm text-accent tracking-widest uppercase font-semibold mb-4">The journey</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Co-accountable, end to end.
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {journey.map((j, i) => (
              <motion.div
                key={j.phase}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="rounded-xl border border-border/60 bg-card p-5 text-center"
              >
                <p className="text-[10px] font-semibold text-muted-foreground/60 tracking-widest uppercase mb-2">
                  Step 0{i + 1}
                </p>
                <p className="text-base font-semibold text-foreground mb-1">{j.phase}</p>
                <p className="text-xs text-muted-foreground">{j.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform section */}
      <section className="py-32 lg:py-40 px-6 lg:px-8">
        <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-sm text-accent tracking-widest uppercase font-semibold mb-4">
                Beneath it all
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6 leading-tight">
                The EverWorker platform.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our platform is where we started and it remains our core. A business-user-friendly environment for managing, working with and even creating AI workers for novel workflows in plain language, supported by our platform AI.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                It's the foundation under every service we deliver, the place your AI workforce lives, learns and scales.
              </p>
              <GetStartedButton>Request a platform demo</GetStartedButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="rounded-2xl border border-border/60 bg-card p-8 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.08)]">
                <div className="flex items-center gap-2 mb-6">
                  <Sparkles className="h-4 w-4 text-accent" />
                  <span className="text-xs font-semibold text-accent tracking-widest uppercase">
                    Platform capabilities
                  </span>
                </div>
                <ul className="space-y-4">
                  {[
                    { title: "Manage your AI workforce", note: "Monitor, govern and orchestrate every worker in one place." },
                    { title: "Work alongside AI workers", note: "Chat with them like teammates, assign work, review output, course-correct." },
                    { title: "Build your own", note: "Compose new workers in plain language, supported by platform AI." },
                    { title: "Scale safely", note: "Permissions, audit trails and guardrails built for the enterprise." },
                  ].map((item, i) => (
                    <li key={item.title} className="flex items-start gap-4 group">
                      <div className="w-8 h-8 rounded-md bg-accent/10 flex items-center justify-center text-xs font-bold text-accent shrink-0 mt-0.5">
                        0{i + 1}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">{item.title}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.note}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
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
          <p className="text-sm text-accent tracking-widest uppercase font-semibold mb-4">
            Get started
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6">
            Let's shape your AI workforce, together.
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed">
            Start with a discovery workshop, a scoped worker or a platform demo. Whichever door you walk through, we're co-accountable to the outcome.
          </p>
          <GetStartedButton>Book a demo</GetStartedButton>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
