import { GetStartedButton } from "@/components/ui/get-started-button";
import { Shield, Cloud } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative pt-40 pb-40 px-6 lg:px-8 overflow-hidden gradient-mesh">
      <div className="gradient-orb w-[500px] h-[500px] bg-accent/20 top-20 -left-40 absolute" />
      <div className="gradient-orb w-[400px] h-[400px] bg-blue-400/15 bottom-10 right-[-10%] absolute" />

      <div className="max-w-3xl 2xl:max-w-4xl mx-auto text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl 2xl:text-[5.5rem] font-bold tracking-tight leading-[1.05] mb-8"
        >
          <span className="hero-gradient-text">AI Workers</span>
          <br />
          <span className="text-foreground">that Drive Revenue</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xl 2xl:text-2xl text-muted-foreground max-w-xl 2xl:max-w-2xl mx-auto mb-14 leading-relaxed"
        >
          Onboard high-performance AI workers that rethink what's possible in key marketing, sales and finance
          operations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex items-center justify-center gap-4"
        >
          <GetStartedButton>Book a demo</GetStartedButton>
          <button
            onClick={() => document.getElementById("workers")?.scrollIntoView({ behavior: "smooth" })}
            className="h-11 px-8 rounded-[4px] text-md font-medium bg-secondary text-secondary-foreground transition-colors duration-300 hover:bg-secondary/70"
          >
            Explore workers
          </button>
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-20 pt-8 border-t border-border/40"
        >
          <p className="text-sm text-muted-foreground/50 mb-5 tracking-wide">
            AI that changes your business must protect it first
          </p>
          <div className="flex items-center justify-center gap-8">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full border border-border/50 bg-background/60 flex items-center justify-center">
                <Shield className="h-3.5 w-3.5 text-accent" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-foreground/70">SOC 2 Type II</p>
                <p className="text-xs text-muted-foreground/50">Certified</p>
              </div>
            </div>
            <div className="w-px h-8 bg-border/30" />
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full border border-border/50 bg-background/60 flex items-center justify-center">
                <Shield className="h-3.5 w-3.5 text-accent" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-foreground/70">ISO 27001</p>
                <p className="text-xs text-muted-foreground/50">Compliant</p>
              </div>
            </div>
            <div className="w-px h-8 bg-border/30" />
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full border border-border/50 bg-background/60 flex items-center justify-center">
                <Cloud className="h-3.5 w-3.5 text-accent" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-foreground/70">Deploy anywhere</p>
                <p className="text-xs text-muted-foreground/50">On-prem · SaaS · Cloud</p>
              </div>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default HeroSection;
