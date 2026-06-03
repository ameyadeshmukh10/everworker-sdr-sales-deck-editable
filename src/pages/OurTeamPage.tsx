import { motion } from "framer-motion";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GetStartedButton } from "@/components/ui/get-started-button";

import t1 from "@/assets/team/team-1.jpg";
import t2 from "@/assets/team/team-2.jpg";
import t3 from "@/assets/team/team-3.jpg";
import t4 from "@/assets/team/team-4.jpg";
import t5 from "@/assets/team/team-5.jpg";
import t6 from "@/assets/team/team-6.jpg";
import t7 from "@/assets/team/team-7.jpg";
import t8 from "@/assets/team/team-8.jpg";
import t9 from "@/assets/team/team-9.jpg";
import t10 from "@/assets/team/team-10.jpg";
import t11 from "@/assets/team/team-11.jpg";
import t12 from "@/assets/team/team-12.jpg";

const team = [
  { photo: t1, name: "Maya Okafor", role: "Co-founder & CEO" },
  { photo: t2, name: "Daniel Reeves", role: "Co-founder & CTO" },
  { photo: t3, name: "Amara Bello", role: "Chief Product Officer" },
  { photo: t4, name: "Kenji Tanaka", role: "Chief AI Officer" },
  { photo: t5, name: "Sofia Marín", role: "VP, Customer Outcomes" },
  { photo: t6, name: "Rohan Mehta", role: "VP, Engineering" },
  { photo: t7, name: "Eleanor Whitfield", role: "Chief Operating Officer" },
  { photo: t8, name: "Patrick Sloane", role: "VP, Revenue" },
  { photo: t9, name: "Yuna Park", role: "Head of AI Worker Design" },
  { photo: t10, name: "Marcus Adeyemi", role: "VP, Solutions" },
  { photo: t11, name: "Layla Haddad", role: "Head of Enablement" },
  { photo: t12, name: "Theo Bennett", role: "Head of Platform" },
];

const milestones = [
  {
    eyebrow: "The seed",
    title: "Built for the people doing the work",
    body: "EverWorker started inside the daily reality of revenue teams, pipeline that wouldn't move, invoices that wouldn't close, campaigns that needed five tools and a hero. We knew there had to be a better way to get the work done.",
  },
  {
    eyebrow: "The shift",
    title: "From software to a workforce",
    body: "We saw a generation of AI tools that helped people work, but didn't do the work. So we set out to build something different: AI workers that own a function, hit a KPI and operate inside the systems your business already runs on.",
  },
  {
    eyebrow: "The mission",
    title: "Every business should be able to do more",
    body: "The rules of work are changing. We believe every business, not just the few with massive engineering teams, should get to deploy a real AI workforce and compound what's possible without compounding cost.",
  },
];

const values = [
  {
    title: "Co-accountable",
    body: "We don't ship a tool and walk away. Your outcomes are our outcomes, measured, owned, defended.",
  },
  {
    title: "Operator-first",
    body: "We build for the people running the function. If it doesn't help the work get done, it doesn't ship.",
  },
  {
    title: "Move with conviction",
    body: "45 days, not 45 weeks. We commit, we deliver and we make it right when we don't.",
  },
  {
    title: "Compound the value",
    body: "One worker proves it. The next ten scale it. We're here for the long arc, not the launch day.",
  },
];

const OurTeamPage = () => {
  useEffect(() => {
    document.title = "Our team | The story and people behind EverWorker";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Why we started EverWorker, what we believe and the team building an AI workforce for every business.",
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
            Our team
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-8"
          >
            <span className="hero-gradient-text">Building the AI workforce</span>
            <br />
            <span className="text-foreground">every business deserves</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12"
          >
            EverWorker exists to put proven AI workers inside every business, so the work that drives revenue, protects cash and serves customers gets done at the size of your ambition.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            <a
              href="#team"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("team")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 h-11 px-6 rounded-[4px] text-md font-medium bg-secondary text-secondary-foreground hover:bg-secondary/70 transition-colors"
            >
              Meet the team <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Manifesto / story */}
      <section className="py-24 lg:py-32 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.2]"
          >
            The rules of work are changing. We believe <span className="hero-gradient-text">every business should be able to leverage AI workers and do more.</span>
          </motion.p>
        </div>
      </section>

      {/* Milestones, flowing narrative */}
      <section className="py-12 lg:py-20 px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-5xl mx-auto space-y-20 lg:space-y-28 py-12 lg:py-16">
          {milestones.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-[180px_1fr] gap-8 md:gap-16 items-start"
            >
              <div>
                <span className="text-7xl font-bold tracking-tighter text-foreground/10 leading-none block">
                  0{i + 1}
                </span>
                <p className="mt-3 text-[11px] font-semibold tracking-[0.18em] uppercase text-accent">
                  {m.eyebrow}
                </p>
              </div>
              <div>
                <h3 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-5 leading-[1.15]">
                  {m.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{m.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-muted-foreground mb-4">
              How we work
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
              The values that show up in every customer relationship
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="rounded-2xl border border-border bg-card p-8"
              >
                <h3 className="text-2xl font-bold tracking-tight text-foreground mb-3">{v.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The people */}
      <section id="team" className="py-24 lg:py-32 px-6 lg:px-8 bg-secondary/30 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-accent mb-4">
                The people
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
                The team building EverWorker
              </h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              Operators, engineers, designers and AI specialists, united by one goal: getting your AI workforce live and compounding.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
            {team.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
                className="group"
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-secondary mb-4">
                  <img
                    src={m.photo}
                    alt={`${m.name}, ${m.role}`}
                    width={512}
                    height={512}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-border/40 rounded-2xl pointer-events-none" />
                </div>
                <h3 className="text-lg font-semibold text-foreground tracking-tight">{m.name}</h3>
                <p className="text-sm text-muted-foreground mt-0.5">{m.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-8 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
            Want to build the future of work with us?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Whether you're a customer, a partner or curious about joining the team, we'd love to talk.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <GetStartedButton>Book a demo</GetStartedButton>
            <a
              href="/how-it-works"
              className="inline-flex items-center gap-2 h-11 px-6 rounded-[4px] text-md font-medium bg-secondary text-secondary-foreground hover:bg-secondary/70 transition-colors"
            >
              See how we work <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurTeamPage;
