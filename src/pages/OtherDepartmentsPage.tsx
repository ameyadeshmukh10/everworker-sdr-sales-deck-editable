import { motion } from "framer-motion";
import { useEffect } from "react";
import {
  Users,
  Settings2,
  Headphones,
  Scale,
  Sparkles,
  Infinity as InfinityIcon,
  ArrowRight,
  Wand2,
  Layers,
  ClipboardList,
  BookOpen,
  Wrench,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GetStartedButton } from "@/components/ui/get-started-button";
import { Button } from "@/components/ui/button";
import { openDiscoveryWorkshop } from "@/components/DiscoveryWorkshopDialog";
import { ChevronRight } from "lucide-react";

const DiscoveryButton = ({ children = "Book a discovery" }: { children?: React.ReactNode }) => (
  <Button
    onClick={openDiscoveryWorkshop}
    className="group relative overflow-hidden bg-foreground text-background hover:bg-foreground/90 rounded-[4px]"
    size="lg"
  >
    <span className="mr-8 transition-opacity duration-500 group-hover:opacity-0">{children}</span>
    <i className="absolute right-1 top-1 bottom-1 rounded-[2px] z-10 grid w-1/4 place-items-center transition-all duration-500 bg-primary-foreground/15 group-hover:w-[calc(100%-0.5rem)] group-active:scale-95">
      <ChevronRight size={16} strokeWidth={2} aria-hidden="true" />
    </i>
  </Button>
);

const expandedDepartments = [
  {
    icon: Users,
    name: "Human Resources",
    description: "Recruiting ops, candidate screening, onboarding journeys, policy Q&A, employee lifecycle workflows.",
    examples: ["Talent Sourcing Worker", "Onboarding Worker", "Policy & Benefits Worker"],
  },
  {
    icon: Settings2,
    name: "Operations",
    description: "Vendor management, procurement, supply continuity, internal ticket triage, process orchestration.",
    examples: ["Procurement Worker", "Vendor Ops Worker", "Process Orchestration Worker"],
  },
  {
    icon: Headphones,
    name: "Customer Experience",
    description: "Tier-1 resolution, knowledge-grounded support, CSAT recovery, account health and renewal signals.",
    examples: ["Support Resolution Worker", "Account Health Worker", "Knowledge Worker"],
  },
  {
    icon: Scale,
    name: "Legal",
    description: "Contract review, redlining against playbooks, NDA triage, intake routing, policy compliance checks.",
    examples: ["Contract Review Worker", "NDA Triage Worker", "Compliance Worker"],
  },
];

const platformPillars = [
  {
    icon: InfinityIcon,
    title: "Infinitely scalable",
    body: "One worker, ten workers, a hundred, the EverWorker platform was built to run an AI workforce at the size of your ambition.",
  },
  {
    icon: Layers,
    title: "Any function, any workflow",
    body: "Technically open-ended. If a workflow has inputs, knowledge, systems and outcomes, an AI worker can own it.",
  },
  {
    icon: Wand2,
    title: "Build your own, made easy",
    body: "Business teams shape and ship bespoke AI workers in the platform, supported by our platform AI, no code required.",
  },
];

const OtherDepartmentsPage = () => {
  return <OtherDepartmentsPageInner />;
};

const anatomy = [
  { icon: ClipboardList, label: "Instructions" },
  { icon: BookOpen, label: "Knowledge" },
  { icon: Wrench, label: "Skills & tools" },
];

const WorkerAnatomy = () => {
  return (
    <div className="relative w-full flex flex-col items-center gap-4 py-4">
      {anatomy.map((a, i) => {
        const Icon = a.icon;
        return (
          <div key={a.label} className="flex flex-col items-center gap-4">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="flex items-center gap-4 rounded-2xl border border-border bg-background/80 backdrop-blur-sm pl-3 pr-6 py-3 shadow-sm min-w-[260px]"
            >
              <div className="relative shrink-0">
                <div className="absolute inset-0 rounded-xl bg-accent/20 blur-md" aria-hidden />
                <div className="relative w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center">
                  <Icon className="h-5 w-5 text-accent" />
                </div>
              </div>
              <span className="text-[13px] font-semibold tracking-[0.14em] uppercase text-foreground">{a.label}</span>
            </motion.div>
            {i < anatomy.length - 1 && (
              <motion.div
                initial={{ opacity: 0, scaleY: 0 }}
                whileInView={{ opacity: 1, scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.12 + 0.2 }}
                className="w-px h-6 bg-gradient-to-b from-accent/50 to-accent/10 origin-top"
                aria-hidden
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

const OtherDepartmentsPageInner = () => {
  useEffect(() => {
    document.title = "Other departments | EverWorker AI Workers for HR, Ops, CX, Legal & beyond";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "EverWorker scales infinitely across departments. Proven AI workers for HR, Operations, Customer Experience, Legal and a platform to build your own bespoke workers without code.",
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-28 px-6 lg:px-8 overflow-hidden gradient-mesh">
        <div className="gradient-orb w-[500px] h-[500px] bg-accent/20 top-20 -left-40 absolute" />
        <div className="gradient-orb w-[400px] h-[400px] bg-blue-400/15 bottom-10 right-[-10%] absolute" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[11px] font-semibold tracking-[0.18em] uppercase text-accent mb-6"
          >
            Other departments
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-8"
          >
            <span className="hero-gradient-text">An AI workforce</span>
            <br />
            <span className="text-foreground">for every part of your business</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Marketing, Sales and Finance are where most teams start. EverWorker scales infinitely from there, into HR,
            Operations, CX, Legal and any workflow you can describe.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex items-center justify-center gap-4 flex-wrap"
          >
            <DiscoveryButton>Book a discovery</DiscoveryButton>
            <a
              href="#catalogue"
              className="inline-flex items-center gap-2 h-11 px-6 rounded-[4px] text-md font-medium bg-secondary text-secondary-foreground hover:bg-secondary/70 transition-colors"
            >
              Explore the catalogue <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Platform pillars */}
      <section className="py-24 lg:py-28 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-muted-foreground mb-4">
              The platform underneath
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
              Designed to be <span className="hero-gradient-text">the only AI worker platform</span> you'll ever need
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {platformPillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="rounded-2xl border border-border bg-card p-8"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-5">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3 tracking-tight">{p.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{p.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Catalogue – expanded departments */}
      <section id="catalogue" className="py-24 lg:py-32 px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-accent mb-4">
                The expanding catalogue
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
                More AI workers, onboarding every week
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md text-lg leading-relaxed">
              Beyond Marketing, Sales and Finance, our catalogue already covers HR, Operations, CX and Legal, with new
              workers added weekly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {expandedDepartments.map((dept, i) => {
              const Icon = dept.icon;
              return (
                <motion.div
                  key={dept.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="group rounded-2xl border border-border bg-background p-8 hover:border-accent/40 transition-colors relative overflow-hidden"
                >
                  <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-accent/5 blur-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-foreground text-background flex items-center justify-center">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground tracking-tight">{dept.name}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6">{dept.description}</p>
                    <div className="pt-5 border-t border-border">
                      <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-muted-foreground mb-3">
                        Example workers
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {dept.examples.map((ex) => (
                          <span
                            key={ex}
                            className="inline-flex items-center px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-[13px] font-medium"
                          >
                            {ex}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-10 flex items-center justify-center gap-3 text-sm text-muted-foreground">
            <Sparkles className="h-4 w-4 text-accent" />
            New workers added every week, across every function.
          </div>
        </div>
      </section>

      {/* Build your own */}
      <section className="py-24 lg:py-32 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl border border-border bg-gradient-to-br from-secondary/60 via-background to-background p-10 lg:p-16 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-accent/15 blur-3xl pointer-events-none" />
            <div className="relative z-10 grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-accent mb-5">
                  Bespoke workers, by your teams
                </p>
                <h3 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-5 leading-[1.1]">
                  If you can describe the work, you can build the worker
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  EverWorker is built business-user first. You onboard an AI worker the same way you'd onboard a person.
                  Set clear expectations, grant access to the tools they need and point them at the same knowledge your
                  team uses (product info, org charts, style guides, playbooks). Then they get to work and report back.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 text-[15px]">
                  {[
                    "Onboard like you would a new hire",
                    "Plain-language, no code required",
                    "Connect your systems and knowledge",
                    "Workers report their work, every time",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                      <span className="text-foreground/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <WorkerAnatomy />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-8 pb-32">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-3xl section-dark p-10 lg:p-16 text-center relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "linear-gradient(hsl(var(--background)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--background)) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />
            <div className="relative z-10">
              <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-background/60 mb-5">
                Go deeper with us
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-background mb-5 leading-[1.1]">
                Have a function in mind? Let's shape the worker for it.
              </h2>
              <p className="text-lg text-background/70 max-w-2xl mx-auto mb-10 leading-relaxed">
                Engage us in an AI Workforce Discovery Workshop or an AI Worker Shaping & Scoping session and we'll map
                exactly what's possible for your business.
              </p>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <DiscoveryButton>Book a discovery</DiscoveryButton>
                <a
                  href="/how-it-works"
                  className="inline-flex items-center gap-2 h-11 px-6 rounded-[4px] text-md font-medium bg-background/10 text-background hover:bg-background/15 transition-colors border border-background/20"
                >
                  See how we work <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OtherDepartmentsPage;
