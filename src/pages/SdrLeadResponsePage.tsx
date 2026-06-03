import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Clock, Search, Mail, Calendar, ArrowRight, Check, Zap, Settings, ShieldCheck, MousePointer2, Send, Inbox, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GetStartedButton } from "@/components/ui/get-started-button";
import { useIsMobile } from "@/hooks/use-mobile";
import thumbsUpImg from "@/assets/thumbs-up.png";
import headshotReagan from "@/assets/headshot-reagan.png";
import logoQnity from "@/assets/logos/qnity.png";
import logoMemgraph from "@/assets/logos/memgraph.png";
import logoTriplepoint from "@/assets/logos/triplepoint.png";
import logoUsercentrics from "@/assets/logos/usercentrics.png";
import logoOhioState from "@/assets/logos/ohio-state.png";
import logoConnex from "@/assets/logos/connex.png";
import logoOhio from "@/assets/logos/ohio.png";
import logoProductiv from "@/assets/logos/productiv.png";
import logoDutchess from "@/assets/logos/dutchess.png";
import logoSalesloft from "@/assets/logos/salesloft.png";
import logoOutreach from "@/assets/logos/outreach.png";
import logoTwilio from "@/assets/logos/twilio.png";
import logoAirtable from "@/assets/logos/airtable.png";
import logoSendgrid from "@/assets/logos/sendgrid.png";
import logoLinkedin from "@/assets/logos/linkedin.svg";
import logoGoogle from "@/assets/logos/google.png";
import logoSalesforce from "@/assets/logos/salesforce.png";
import logoHubspot from "@/assets/logos/hubspot.png";
import logoSupabase from "@/assets/logos/supabase.png";
import leadToMeetingCustomer from "@/assets/sdr/lead-to-meeting-customer.png";
import leadToMeetingSeller from "@/assets/sdr/lead-to-meeting-seller.png";
import everworkerOnboard from "@/assets/sdr/everworker-onboard.svg";
import quoteImageContainer from "@/assets/sdr/quote-image-container.svg";
import ewLogomark from "@/assets/sdr/ew-logomark.svg";

const LOGO_ITEMS = [
  { src: logoQnity, alt: "Qnity", h: "h-6" },
  { src: logoMemgraph, alt: "Memgraph", h: "h-7" },
  { src: logoTriplepoint, alt: "TriplePoint Capital", h: "h-8" },
  { src: logoUsercentrics, alt: "Usercentrics", h: "h-4" },
  { src: logoOhioState, alt: "Ohio State", h: "h-6" },
  { src: logoConnex, alt: "Connex Partners", h: "h-8" },
  { src: logoOhio, alt: "OH.io", h: "h-6" },
  { src: logoProductiv, alt: "Productiv", h: "h-5" },
  { src: logoDutchess, alt: "Dutchess", h: "h-7" },
];

const LogoMarquee = () => {
  const loop = [...LOGO_ITEMS, ...LOGO_ITEMS];
  return (
    <div
      className="relative overflow-hidden"
      style={{
        maskImage: "linear-gradient(to right, transparent 0, black 12%, black 88%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to right, transparent 0, black 12%, black 88%, transparent 100%)",
      }}
    >
      <div className="flex w-max items-center gap-x-16 animate-logo-marquee opacity-70">
        {loop.map((l, i) => (
          <img
            key={`${l.alt}-${i}`}
            src={l.src}
            alt={l.alt}
            className={`${l.h} w-auto object-contain shrink-0 grayscale`}
          />
        ))}
      </div>
    </div>
  );
};

/* ============ Sub-beat 1 — Animated Speed Stage ============ */
const GREEN = "#22826F";
const RED = "#FF0D40";

/* Stage frame mirroring SdrWorkerFullPage ImagePlaceholder (verdant variant):
   gradient base + soft blur orbs + dark wash + glass slab + grain noise +
   inner highlight ring. White cards float on this dark wash. */
const NOISE_URL =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix type='matrix' values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.55 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")";

const ScaleToFit = ({
  designWidth,
  aspect,
  children,
}: {
  designWidth: number;
  aspect: string;
  children: React.ReactNode;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [scale, setScale] = useState(1);
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const update = () => {
      const w = el.clientWidth;
      if (w > 0) setScale(Math.min(1, w / designWidth));
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [designWidth]);
  const [aw, ah] = aspect.split("/").map((s) => parseFloat(s.trim()));
  const ratio = aw && ah ? aw / ah : 16 / 10;
  const designHeight = designWidth / ratio;
  return (
    <div ref={ref} className="absolute inset-0">
      <div
        style={{
          width: designWidth,
          height: designHeight,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        {children}
      </div>
    </div>
  );
};

const StageFrame = ({ children, mobileScale }: { children: React.ReactNode; mobileScale?: boolean }) => {
  const isMobile = useIsMobile();
  const scaled = mobileScale && isMobile;
  return (
  <div
    className="relative w-full overflow-hidden rounded-xl sm:rounded-2xl border border-black/[0.06] isolate"
    style={{
      aspectRatio: "16 / 10",
      background: "linear-gradient(135deg, #ECF1ED 0%, #D8E4DD 100%)",
      boxShadow: "0 30px 80px -40px rgba(34,130,111,0.35)",
    }}
  >
    {/* Blur orbs */}
    <div aria-hidden className="absolute rounded-full" style={{ width: "120%", height: "120%", top: "95%", left: "-15%", transform: "translate(-50%,-50%)", background: "#7FAB9C", opacity: 0.32, filter: "blur(80px)" }} />
    <div aria-hidden className="absolute rounded-full" style={{ width: "100%", height: "100%", top: "-10%", left: "82%", transform: "translate(-50%,-50%)", background: "#A8D9C5", opacity: 0.3, filter: "blur(80px)" }} />
    <div aria-hidden className="absolute rounded-full" style={{ width: "140%", height: "140%", top: "55%", left: "95%", transform: "translate(-50%,-50%)", background: "#DDE7E2", opacity: 0.6, filter: "blur(80px)" }} />
    {/* Dark wash */}
    <div aria-hidden className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(8,16,14,0.55) 0%, rgba(8,16,14,0.7) 100%), radial-gradient(ellipse 110% 90% at 50% 40%, rgba(8,16,14,0.35) 0%, rgba(8,16,14,0.55) 60%, rgba(8,16,14,0.7) 100%)" }} />
    {/* Glass slab */}
    <div aria-hidden className="absolute inset-0 pointer-events-none" style={{ clipPath: "polygon(62% 0%, 100% 0%, 100% 100%, 45% 100%)", background: "linear-gradient(115deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 45%, rgba(255,255,255,0.05) 100%)", boxShadow: "inset 1px 0 0 rgba(255,255,255,0.08)" }} />
    {/* Grain */}
    <div aria-hidden className="absolute inset-0 pointer-events-none mix-blend-overlay" style={{ backgroundImage: NOISE_URL, backgroundSize: "220px 220px", opacity: 0.35 }} />
    {/* Inner ring */}
    <div aria-hidden className="absolute inset-0 rounded-xl sm:rounded-2xl pointer-events-none" style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.6), inset 0 0 0 1px rgba(255,255,255,0.18)" }} />
    {/* Content */}
    <div className="absolute inset-0 z-10 overflow-hidden">
      {scaled ? (
        <ScaleToFit designWidth={720} aspect="16 / 10">{children}</ScaleToFit>
      ) : (
        children
      )}
    </div>
  </div>
  );
};

/* ============================================================
   3-act speed stage. Single timeline of phases drives stacked
   layers inside StageFrame. No browser chrome, no floating
   meta strip — content speaks for itself.
   ============================================================ */
type Phase =
  | "cta"
  | "press"
  | "form"
  | "submit"
  | "inbox"
  | "open"
  | "stack"
  | "crm"
  | "stage"
  | "meeting"
  | "thumb"
  | "reset";

const SCHEDULE: { phase: Phase; at: number }[] = [
  { phase: "cta",     at: 0 },
  { phase: "press",   at: 1300 },
  { phase: "form",    at: 1700 },
  { phase: "submit",  at: 4200 },
  { phase: "inbox",   at: 4900 },
  { phase: "open",    at: 6000 },
  { phase: "stack",   at: 8800 },
  { phase: "crm",     at: 10800 },
  { phase: "stage",   at: 11800 },
  { phase: "meeting", at: 12500 },
  { phase: "thumb",   at: 14400 },
  { phase: "reset",   at: 16400 },
];
const LOOP_MS = 17400;

const SpeedSceneStage = () => {
  const [phase, setPhase] = useState<Phase>("cta");

  useEffect(() => {
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    if (reduced) {
      setPhase("thumb");
      return;
    }
    let timeouts: number[] = [];
    const start = () => {
      timeouts.forEach((id) => window.clearTimeout(id));
      timeouts = SCHEDULE.map((b) =>
        window.setTimeout(() => setPhase(b.phase), b.at)
      );
      timeouts.push(window.setTimeout(start, LOOP_MS));
    };
    start();
    return () => timeouts.forEach((id) => window.clearTimeout(id));
  }, []);

  const inAct1 = ["cta", "press", "form", "submit"].includes(phase);
  const inAct2 = ["inbox", "open", "stack"].includes(phase);
  const inAct3 = ["crm", "stage", "meeting", "thumb"].includes(phase);

  return (
    <StageFrame mobileScale>
      <div className="absolute inset-0 flex items-center justify-center px-6 sm:px-10">
        <AnimatePresence mode="wait">
          {inAct1 && <Act1 key="act1" phase={phase} />}
          {inAct2 && <Act2 key="act2" phase={phase} />}
          {inAct3 && <Act3 key="act3" phase={phase} />}
        </AnimatePresence>
      </div>
    </StageFrame>
  );
};

const SPRING_IN = { type: "spring" as const, stiffness: 520, damping: 32, mass: 0.7 };
const SOFT_SPRING = { type: "spring" as const, stiffness: 320, damping: 28 };
const SWIPE_OUT = { duration: 0.22, ease: [0.55, 0, 0.7, 0.2] as [number, number, number, number] };

/* ============ ACT 1 — CTA → form → submit ============ */
const Act1 = ({ phase }: { phase: Phase }) => {
  const showForm = phase === "form" || phase === "submit";
  const pressed = phase === "press";
  const stageRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState<{ w: number; h: number }>({ w: 0, h: 0 });

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const measure = () => {
      const r = el.getBoundingClientRect();
      setSize({ w: r.width, h: r.height });
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Cursor target: dead-center of the stage (CTA is centered there).
  // Slight offset so the pointer's tip lands on the button face.
  const targetX = size.w / 2 - 6;
  const targetY = size.h / 2 + 4;

  return (
    <motion.div
      ref={stageRef}
      className="relative w-full h-full"
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -32, transition: { duration: 0.28, ease: [0.4, 0, 0.2, 1] } }}
      transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Centered stage container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatePresence mode="wait">
          {!showForm && (
            <motion.div
              key="cta"
              className="relative"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{
                opacity: 1,
                scale: pressed ? 0.94 : 1,
                boxShadow: pressed
                  ? "0 0 0 14px rgba(255,13,64,0)"
                  : "0 18px 40px -12px rgba(255,13,64,0.6)",
              }}
              exit={{ opacity: 0, scale: 1.15, transition: { duration: 0.18 } }}
              transition={SPRING_IN}
              style={{
                backgroundColor: RED,
                color: "white",
                padding: "16px 36px",
                borderRadius: 10,
                fontSize: 18,
                fontWeight: 700,
                letterSpacing: "-0.01em",
                position: "relative",
              }}
            >
              Request demo
              {/* Press ripple */}
              {pressed && (
                <motion.span
                  aria-hidden
                  className="absolute inset-0 rounded-[10px] pointer-events-none"
                  style={{ border: `2px solid ${RED}` }}
                  initial={{ opacity: 0.7, scale: 1 }}
                  animate={{ opacity: 0, scale: 1.6 }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                />
              )}
            </motion.div>
          )}
          {showForm && <LeadCaptureForm key="form" submit={phase === "submit"} />}
        </AnimatePresence>
      </div>

      {/* Cursor — measured pixel target so the tip actually lands on the button */}
      {!showForm && size.w > 0 && (
        <motion.div
          className="absolute z-30 pointer-events-none"
          style={{ left: 0, top: 0 }}
          initial={{ x: size.w * 0.14, y: size.h * 0.18, opacity: 0 }}
          animate={{
            x: targetX,
            y: pressed ? targetY + 2 : targetY,
            opacity: 1,
          }}
          transition={{
            x: { duration: 1.1, ease: [0.4, 0.0, 0.2, 1] },
            y: { duration: 1.1, ease: [0.4, 0.0, 0.2, 1] },
            opacity: { duration: 0.22 },
          }}
        >
          <MousePointer2
            className="h-5 w-5 text-foreground"
            fill="white"
            strokeWidth={2.2}
            style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.45))" }}
          />
        </motion.div>
      )}
    </motion.div>
  );
};

const LeadCaptureForm = ({ submit }: { submit: boolean }) => {
  const fields = [
    { label: "Name", value: "John Carter" },
    { label: "Work email", value: "john@acmeholdings.com" },
    { label: "Company", value: "ACME Holdings" },
    { label: "Role", value: "VP Operations" },
  ];
  return (
    <motion.div
      className="relative w-full max-w-[380px]"
      initial={{ opacity: 0, scale: 0.6, y: 8 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.2 } }}
      transition={SPRING_IN}
    >
      {/* Submit halo */}
      {submit && (
        <motion.div
          aria-hidden
          className="absolute -inset-10 rounded-[40px] pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at center, ${GREEN}55 0%, ${GREEN}14 45%, transparent 75%)`,
          }}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: [0.1, 1, 0.7], scale: [0.95, 1.08, 1.04] }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        />
      )}
      <div className="relative rounded-xl bg-white border border-black/[0.06] shadow-[0_24px_60px_-24px_rgba(0,0,0,0.55)] p-5">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-[9px] uppercase tracking-[0.2em] font-bold text-muted-foreground">
              EverWorker
            </div>
            <div className="text-[15px] font-bold text-foreground tracking-tight">
              Lead capture
            </div>
          </div>
          <span
            className="text-[9px] uppercase tracking-[0.16em] font-bold rounded px-1.5 py-0.5"
            style={{ color: GREEN, background: `${GREEN}15` }}
          >
            Live
          </span>
        </div>
        <div className="space-y-2.5">
          {fields.map((f, i) => (
            <div key={f.label}>
              <div className="text-[9px] font-semibold text-muted-foreground/80 uppercase tracking-wider mb-1">
                {f.label}
              </div>
              <div className="h-7 rounded-md bg-[#F4F5F7] border border-black/[0.05] px-2 flex items-center overflow-hidden">
                <motion.span
                  className="text-[11px] font-medium text-foreground/85 whitespace-nowrap"
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.22, delay: 0.45 + i * 0.13 }}
                >
                  {f.value}
                </motion.span>
              </div>
            </div>
          ))}
        </div>
        <motion.button
          type="button"
          className="mt-4 w-full h-9 rounded-md text-[12px] font-bold text-white relative overflow-hidden"
          style={{ backgroundColor: GREEN }}
          animate={
            submit
              ? { boxShadow: ["0 0 0 0 rgba(34,130,111,0)", "0 0 0 18px rgba(34,130,111,0)"] }
              : { boxShadow: "0 8px 18px -10px rgba(34,130,111,0.7)" }
          }
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Submit
        </motion.button>
      </div>
    </motion.div>
  );
};

/* ============ ACT 2 — inbox → outbound email → John replies ============ */
const Act2 = ({ phase }: { phase: Phase }) => (
  <motion.div
    className="relative w-full h-full flex items-center justify-center"
    initial={{ opacity: 0, x: 24 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -32, transition: { duration: 0.28, ease: [0.4, 0, 0.2, 1] } }}
    transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
  >
    <AnimatePresence mode="wait">
      {phase === "inbox" && <InboxView key="inbox" />}
      {(phase === "open" || phase === "stack") && (
        <EmailThread key="thread" stack={phase === "stack"} />
      )}
    </AnimatePresence>
  </motion.div>
);

const InboxView = () => (
  <motion.div
    className="w-full max-w-[440px]"
    initial={{ opacity: 0, y: 14, scale: 0.96 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.18 } }}
    transition={SPRING_IN}
  >
    <div className="rounded-xl bg-white border border-black/[0.06] shadow-[0_24px_60px_-24px_rgba(0,0,0,0.55)] overflow-hidden">
      <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-black/[0.05]">
        <div className="flex items-center gap-1.5">
          <Inbox className="h-3.5 w-3.5 text-foreground/70" strokeWidth={2.4} />
          <span className="text-[11px] font-bold text-foreground tracking-tight">Inbox</span>
        </div>
        <motion.span
          className="inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded"
          style={{ color: GREEN, background: `${GREEN}18` }}
          initial={{ opacity: 0, x: 8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.35, ...SOFT_SPRING }}
        >
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: GREEN, boxShadow: `0 0 0 3px ${GREEN}33` }} />
          1 new
        </motion.span>
      </div>
      <div className="divide-y divide-black/[0.04]">
        {[
          { n: "Marcus · EverWorker", s: "Following up on your whitepaper download", t: "now", hot: true },
          { n: "Slack", s: "3 new messages in #revops", t: "2m" },
          { n: "Notion", s: "Weekly digest", t: "1h" },
        ].map((row, i) => (
          <motion.div
            key={i}
            className="flex items-center gap-2.5 px-3.5 py-2.5"
            initial={{ opacity: 0, x: -8 }}
            animate={{
              opacity: row.hot ? 1 : 0.55,
              x: 0,
              backgroundColor: row.hot ? `${GREEN}0D` : "rgba(255,255,255,0)",
            }}
            transition={{ delay: 0.1 + i * 0.08, duration: 0.32 }}
          >
            <div
              className="h-7 w-7 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
              style={{ backgroundColor: row.hot ? GREEN : "hsl(var(--foreground) / 0.4)" }}
            >
              {row.n.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[11px] font-semibold text-foreground truncate">{row.n}</div>
              <div className="text-[10px] text-muted-foreground truncate">{row.s}</div>
            </div>
            <div className="text-[9px] font-mono text-muted-foreground">{row.t}</div>
            {row.hot && (
              <motion.span
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: GREEN }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.45, ...SOFT_SPRING }}
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </motion.div>
);

const EmailThread = ({ stack }: { stack: boolean }) => (
  <motion.div
    className="relative w-full max-w-[440px]"
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.2 } }}
    transition={SPRING_IN}
  >
    {/* Outbound email — Marcus */}
    <motion.div
      animate={{
        scale: stack ? 0.96 : 1,
        opacity: stack ? 0.7 : 1,
        y: stack ? -6 : 0,
      }}
      transition={SOFT_SPRING}
    >
      <OpenEmailCard
        side="out"
        from="Marcus · EverWorker"
        subject="Following up on your whitepaper download"
        showSent
        body={
          <>
            <p>
              Hey John, saw you downloaded our marketing whitepaper and wanted to follow up
              quickly. Looking at the expansion news coming out last week for ACME Holdings,
              I&apos;m guessing you&apos;re curious about best practices for growing in new
              territories like Latin America. We can help on this. Last month in fact, we
              worked with another PE firm also in Chicago doing similar. I&apos;d love to
              walk you through it.
            </p>
            <p>
              Any interest in connecting this week? Let me know and we&apos;ll schedule
              something with our success team to get you started.
            </p>
          </>
        }
      />
    </motion.div>

    {/* Stacked reply — John */}
    <AnimatePresence>
      {stack && (
        <motion.div
          key="reply"
          className="absolute left-4 right-[-18px] top-12"
          initial={{ opacity: 0, y: -120, rotate: 4, scale: 0.94 }}
          animate={{ opacity: 1, y: 24, rotate: 1.5, scale: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.18 } }}
          transition={{ type: "spring", stiffness: 380, damping: 30, mass: 0.85 }}
        >
          {/* Halo */}
          <motion.div
            aria-hidden
            className="absolute -inset-4 rounded-3xl pointer-events-none"
            style={{
              background: `radial-gradient(ellipse at center, ${GREEN}55 0%, ${GREEN}14 45%, transparent 75%)`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.4, 1, 0.7] }}
            transition={{ duration: 1.0, ease: "easeOut" }}
          />
          <OpenEmailCard
            side="in"
            from="John Carter · ACME Holdings"
            subject="Re: Following up on your whitepaper download"
            body={
              <p className="font-medium">
                That sounds great! Exactly what we&apos;re looking for, and good timing.
                Booked!
              </p>
            }
          />
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

const OpenEmailCard = ({
  side,
  from,
  subject,
  body,
  showSent = false,
}: {
  side: "in" | "out";
  from: string;
  subject: string;
  body: React.ReactNode;
  showSent?: boolean;
}) => (
  <div className="relative rounded-xl bg-white border border-black/[0.06] shadow-[0_24px_60px_-24px_rgba(0,0,0,0.55)] p-4 overflow-hidden">
    <div
      className="absolute top-0 left-0 right-0 h-[3px]"
      style={{
        background:
          side === "out"
            ? `linear-gradient(90deg, ${GREEN}, #52FEBF)`
            : "linear-gradient(90deg, hsl(var(--foreground)), hsl(var(--foreground) / 0.4))",
      }}
    />
    <div className="flex items-center gap-2.5 mb-2.5">
      <div
        className="h-7 w-7 rounded-full flex items-center justify-center text-[10px] font-bold text-white shrink-0"
        style={{ backgroundColor: side === "out" ? GREEN : "hsl(var(--foreground))" }}
      >
        {from.charAt(0)}
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-[11px] font-semibold text-foreground truncate">{from}</div>
        <div className="text-[10px] text-muted-foreground truncate">{subject}</div>
      </div>
      {showSent && (
        <motion.span
          className="inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded text-white"
          style={{ backgroundColor: GREEN }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.6, type: "spring", stiffness: 600, damping: 18 }}
        >
          <Send className="h-2.5 w-2.5" /> Sent
        </motion.span>
      )}
    </div>
    <motion.div
      className="text-[10.5px] leading-relaxed text-foreground/85 space-y-1.5"
      initial="hidden"
      animate="show"
      variants={{
        show: { transition: { staggerChildren: 0.18, delayChildren: 0.15 } },
      }}
    >
      {Array.isArray((body as any)?.props?.children)
        ? (body as any).props.children.map((c: React.ReactNode, i: number) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 6 },
                show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
              }}
            >
              {c}
            </motion.div>
          ))
        : (
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 6 },
                show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
              }}
            >
              {body}
            </motion.div>
          )}
    </motion.div>
  </div>
);

/* ============ ACT 3 — CRM update + meeting + thumbs-up ============ */
const Act3 = ({ phase }: { phase: Phase }) => {
  const showStage = phase === "stage" || phase === "meeting" || phase === "thumb";
  const showMeeting = phase === "meeting" || phase === "thumb";
  const showThumb = phase === "thumb";

  return (
    <motion.div
      className="relative w-full h-full flex items-center justify-center"
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -32, transition: { duration: 0.32, ease: [0.4, 0, 0.2, 1] } }}
      transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="relative w-full max-w-[560px] flex flex-col gap-3">
        <CrmTable showStage={showStage} />
        <AnimatePresence>
          {showMeeting && <MeetingCard key="meet" />}
        </AnimatePresence>
      </div>

      {/* Thumbs-up overlay */}
      <AnimatePresence>
        {showThumb && (
          <motion.div
            key="thumb"
            className="absolute inset-0 z-40 flex items-center justify-center pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
          >
            {/* glow */}
            <motion.div
              aria-hidden
              className="absolute rounded-full"
              style={{
                width: 280,
                height: 280,
                background: `radial-gradient(circle at center, ${GREEN}66 0%, ${GREEN}18 40%, transparent 75%)`,
              }}
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: [0.6, 1.1, 1], opacity: [0, 0.9, 0.7] }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
            <motion.img
              src={thumbsUpImg}
              alt="Done"
              className="relative w-32 h-32 sm:w-40 sm:h-40"
              style={{ filter: "drop-shadow(0 18px 40px rgba(34,130,111,0.45))" }}
              initial={{ scale: 0.4, rotate: -22, opacity: 0 }}
              animate={{
                scale: [0.4, 1.1, 1],
                rotate: [-22, 6, 0],
                opacity: 1,
              }}
              transition={{ duration: 0.55, times: [0, 0.55, 1], ease: [0.2, 0.8, 0.2, 1] }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const CrmTable = ({ showStage }: { showStage: boolean }) => {
  const rows = [
    { name: "Sarah Chen", co: "Northwind", stage: "Discovery", owner: "Maya" },
    { name: "John Carter", co: "ACME Holdings", stage: showStage ? "Stage 0 · MQL → SQL" : "—", owner: "Marcus", hot: true },
    { name: "Priya N.", co: "Halcyon Robotics", stage: "Proposal", owner: "Maya" },
    { name: "Tom W.", co: "Ravencrest", stage: "Closed-won", owner: "Marcus" },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, transition: { duration: 0.25 } }}
      transition={SPRING_IN}
      className="rounded-xl bg-white border border-black/[0.06] shadow-[0_24px_60px_-24px_rgba(0,0,0,0.55)] overflow-hidden"
    >
      <div className="flex items-center justify-between px-3.5 py-2 border-b border-black/[0.05]">
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: GREEN }} />
          <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-foreground/75">
            CRM · Leads
          </span>
        </div>
        <span className="text-[9px] font-mono text-muted-foreground">4 records</span>
      </div>
      <div className="grid grid-cols-[1.4fr_1.6fr_0.7fr] text-[9px] uppercase tracking-wider font-bold text-muted-foreground/70 px-3.5 py-1.5 bg-[#FAFBFB] border-b border-black/[0.04]">
        <span>Lead</span>
        <span>Stage</span>
        <span className="text-right">Owner</span>
      </div>
      <div className="divide-y divide-black/[0.04]">
        {rows.map((r, i) => (
          <motion.div
            key={i}
            className="grid grid-cols-[1.4fr_1.6fr_0.7fr] items-center px-3.5 py-2 text-[11px]"
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.05 + i * 0.05 }}
            style={{
              backgroundColor: r.hot ? `${GREEN}0F` : undefined,
            }}
          >
            <div className="flex items-center gap-1.5 min-w-0">
              <div
                className="h-5 w-5 rounded-full flex items-center justify-center text-[9px] font-bold text-white shrink-0"
                style={{ backgroundColor: r.hot ? GREEN : "hsl(var(--foreground) / 0.5)" }}
              >
                {r.name.charAt(0)}
              </div>
              <div className="min-w-0">
                <div className="font-semibold text-foreground truncate">{r.name}</div>
                <div className="text-[9px] text-muted-foreground truncate">{r.co}</div>
              </div>
            </div>
            <div className="relative h-5 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={r.stage}
                  className="absolute inset-0 flex items-center"
                  initial={r.hot ? { x: 24, opacity: 0 } : { opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={r.hot ? { x: -24, opacity: 0 } : { opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.2, 0.8, 0.2, 1] }}
                >
                  {r.hot && r.stage !== "—" ? (
                    <span
                      className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-bold"
                      style={{ color: GREEN, background: `${GREEN}1F` }}
                    >
                      <Sparkles className="h-2.5 w-2.5" strokeWidth={2.6} />
                      {r.stage}
                    </span>
                  ) : (
                    <span className={r.stage === "—" ? "text-muted-foreground" : "text-foreground/85"}>
                      {r.stage}
                    </span>
                  )}
                </motion.span>
              </AnimatePresence>
            </div>
            <div className="text-right text-foreground/70 font-medium">{r.owner}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const MeetingCard = () => (
  <motion.div
    initial={{ opacity: 0, x: 60, scale: 0.96 }}
    animate={{ opacity: 1, x: 0, scale: 1 }}
    exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.25 } }}
    transition={SPRING_IN}
    className="rounded-xl bg-white border border-black/[0.06] shadow-[0_24px_60px_-24px_rgba(0,0,0,0.55)] p-3.5 flex items-center gap-3.5"
    style={{ boxShadow: `0 24px 60px -24px ${GREEN}55` }}
  >
    <div
      className="relative h-14 w-14 rounded-lg flex flex-col items-center justify-center shrink-0"
      style={{ background: `${GREEN}14`, border: `1px solid ${GREEN}40` }}
    >
      <div className="text-[8px] uppercase tracking-wider font-bold" style={{ color: GREEN }}>
        Thu
      </div>
      <div className="text-xl font-bold leading-none" style={{ color: GREEN }}>
        15
      </div>
      <motion.div
        className="absolute -top-1.5 -right-1.5 h-4 w-4 rounded-full flex items-center justify-center"
        style={{ background: GREEN }}
        initial={{ scale: 0, rotate: -30 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 700, damping: 16, delay: 0.3 }}
      >
        <Check className="h-2.5 w-2.5 text-white" strokeWidth={3.5} />
      </motion.div>
    </div>
    <div className="flex-1 min-w-0">
      <div className="text-[9px] uppercase tracking-[0.16em] font-bold" style={{ color: GREEN }}>
        Meeting confirmed
      </div>
      <div className="text-[13px] font-bold text-foreground tracking-tight">
        Thu · 10:30 AM with Maya Chen
      </div>
      <div className="text-[10px] text-muted-foreground">30 min · Discovery call · Google Meet</div>
    </div>
    <div className="flex -space-x-1.5 shrink-0">
      {[GREEN, "hsl(var(--foreground))"].map((bg, i) => (
        <div
          key={i}
          className="h-6 w-6 rounded-full border-2 border-white flex items-center justify-center text-[9px] font-bold text-white"
          style={{ backgroundColor: bg }}
        >
          {i === 0 ? "M" : "J"}
        </div>
      ))}
    </div>
  </motion.div>
);


/* ============ Sub-beat 2 — Research + Draft Stage ============
   Two-sequence loop on same StageFrame as SpeedSceneStage.
   S1: Reagan enrichment card (2-col) — left chips populate as the
       right-side "research workspace" highlights matching rows with
       a tiny moving cursor. Card fully exits.
   S2: Centered email draft. 3 follow-up clones stair-stack behind it
       with "No reply →" pills. Quality pills light green. Hold. Loop.
============================================================ */
const RD_PHASES = [
  "s1-in",
  "headshot",
  "research-on",
  "chip-1",
  "chip-2",
  "chip-3",
  "chip-4",
  "chip-5",
  "intent-pill",
  "s1-out",
  "draft-in",
  "ph",
  "r-subj",
  "r-open",
  "r-val",
  "r-cta",
  "stack-1",
  "stack-2",
  "stack-3",
  "q1", "q2", "q3", "q4",
  "hold",
  "exit",
] as const;
type RDPhase = typeof RD_PHASES[number];

const RD_SCHEDULE: { phase: RDPhase; at: number }[] = [
  { phase: "s1-in",       at: 0 },
  { phase: "headshot",    at: 300 },
  { phase: "research-on", at: 650 },
  { phase: "chip-1",      at: 1300 },
  { phase: "chip-2",      at: 2200 },
  { phase: "chip-3",      at: 3100 },
  { phase: "chip-4",      at: 4000 },
  { phase: "chip-5",      at: 4900 },
  { phase: "intent-pill", at: 5700 },
  { phase: "s1-out",      at: 6600 },
  { phase: "draft-in",    at: 7000 },
  { phase: "ph",          at: 7250 },
  { phase: "r-subj",      at: 7800 },
  { phase: "r-open",      at: 8500 },
  { phase: "r-val",       at: 9200 },
  { phase: "r-cta",       at: 9900 },
  { phase: "stack-1",     at: 10700 },
  { phase: "stack-2",     at: 11300 },
  { phase: "stack-3",     at: 11900 },
  { phase: "q1",          at: 12700 },
  { phase: "q2",          at: 12880 },
  { phase: "q3",          at: 13060 },
  { phase: "q4",          at: 13240 },
  { phase: "hold",        at: 14500 },
  { phase: "exit",        at: 15500 },
];
const RD_LOOP_MS = 16500;

const rdIdx = (p: RDPhase) => RD_PHASES.indexOf(p);

const SPRING = { type: "spring" as const, stiffness: 420, damping: 30, mass: 0.85 };
const SPRING_SOFT = { type: "spring" as const, stiffness: 380, damping: 32, mass: 0.9 };

const REAGAN_CHIPS: { gate: RDPhase; text: string; source: 0 | 1 | 2; row: number }[] = [
  { gate: "chip-1", text: "Series B logistics SaaS · 180 FTE",  source: 0, row: 0 },
  { gate: "chip-2", text: "Closed $32M round · March 2026",     source: 0, row: 2 },
  { gate: "chip-3", text: "Posted on intent scoring · Tue",     source: 1, row: 1 },
  { gate: "chip-4", text: "Engaged 3× with pricing page",       source: 2, row: 0 },
  { gate: "chip-5", text: "Comparing vs. Cadence + Reachly",    source: 2, row: 2 },
];

const RESEARCH_SOURCES = [
  { tag: "linkedin.com", title: "Reagan Bell · Director of Demand Gen",
    rows: ["Northwind Logistics · Series B", "180 employees · Logistics SaaS", "Closed $32M Series B — March 2026", "Previously RevOps @ Cargo.io"] },
  { tag: "techcrunch.com", title: "Northwind raises $32M to scale ops",
    rows: ["Funding round led by Acme Ventures", "Posted on intent scoring · Tue 9:14am", "Hiring 12 GTM roles this quarter"] },
  { tag: "northwind.io / analytics", title: "Account engagement",
    rows: ["Visited /pricing — 3 sessions this week", "Watched product tour · 4m 12s", "Comparison query: Cadence + Reachly", "Bounced on enterprise tier · Tue"] },
];

const DRAFT_LINES: { key: "subj" | "open" | "val" | "cta"; label: string; text: string; widths: string[] }[] = [
  { key: "subj", label: "Subject", text: "Reagan — intent scoring + the Series B stack moment",
    widths: ["w-[78%]"] },
  { key: "open", label: "Opener",  text: "Congrats on the $32M raise — the RevOps build-out at 180 FTE is the exact moment most teams outgrow their sequencer.",
    widths: ["w-[96%]", "w-[88%]"] },
  { key: "val",  label: "Value",   text: "Your post on intent scoring last Tuesday lined up with what we built the worker around: closing the gap between fit and signal so reps stop guessing which inbound is real.",
    widths: ["w-[97%]", "w-[94%]", "w-[72%]"] },
  { key: "cta",  label: "Ask",     text: "Worth 20 minutes side-by-side with what you're weighing from Cadence + Reachly?",
    widths: ["w-[90%]", "w-[58%]"] },
];

const QUALITY_PILLS = ["Personalized", "Contextualized", "On-Brand", "Timely"] as const;

const ShimmerBar = ({ widthClass }: { widthClass: string }) => (
  <motion.div
    className={`h-3.5 rounded-md ${widthClass}`}
    style={{
      background: "linear-gradient(110deg, rgba(34,130,111,0.45), rgba(82,254,191,0.75), rgba(34,130,111,0.45))",
      backgroundSize: "220% 100%",
      boxShadow: "0 0 18px -4px rgba(82,254,191,0.5)",
    }}
    animate={{ backgroundPositionX: ["0%", "220%"] }}
    transition={{ duration: 1.4, ease: "linear", repeat: Infinity }}
  />
);

const ThinkingDots = () => (
  <div className="flex items-center gap-1">
    {[0, 1, 2].map((i) => (
      <motion.span
        key={i}
        className="h-1.5 w-1.5 rounded-full"
        style={{ background: "#52FEBF" }}
        animate={{ opacity: [0.25, 1, 0.25], scale: [0.85, 1.15, 0.85] }}
        transition={{ duration: 1.0, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }}
      />
    ))}
  </div>
);

const DraftLineRow = ({
  line,
  state,
  shimmerOnly = false,
}: {
  line: typeof DRAFT_LINES[number];
  state: "hidden" | "placeholder" | "thinking" | "revealed";
  shimmerOnly?: boolean;
}) => (
  <div className="space-y-1.5">
    <div className="flex items-center gap-2">
      <span className="text-[10px] uppercase tracking-[0.18em] font-semibold text-muted-foreground/70">
        {line.label}
      </span>
      <AnimatePresence>
        {!shimmerOnly && state === "thinking" && (
          <motion.div
            key="t"
            initial={{ opacity: 0, x: -4 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <ThinkingDots />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    <div className="relative min-h-[1.5rem]">
      <AnimatePresence mode="wait">
        {(shimmerOnly || state !== "revealed") ? (
          <motion.div
            key="ph"
            initial={{ opacity: 0 }}
            animate={{ opacity: shimmerOnly ? 0.85 : state === "hidden" ? 0.35 : 1 }}
            exit={{ opacity: 0, x: -16, transition: { duration: 0.28, ease: [0.4, 0, 0.2, 1] } }}
            className="space-y-1.5"
          >
            {line.widths.map((w, i) => (
              <ShimmerBar key={i} widthClass={w} />
            ))}
          </motion.div>
        ) : (
          <motion.p
            key="copy"
            initial={{ opacity: 0, x: 14, clipPath: "inset(0 100% 0 0)" }}
            animate={{ opacity: 1, x: 0, clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
            className={`text-foreground/90 ${
              line.key === "subj" ? "text-[13px] font-semibold" : "text-[12px] leading-relaxed"
            }`}
          >
            {line.text}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  </div>
);

/* ----- S1 Research workspace (right column inside Reagan card) ----- */
const ResearchWorkspace = ({
  activeChipIdx,
  foundChips,
}: {
  activeChipIdx: number; // -1 if none yet
  foundChips: boolean[]; // length 5
}) => {
  const active = activeChipIdx >= 0 ? REAGAN_CHIPS[activeChipIdx] : null;
  const activeSource = active?.source ?? 0;

  // Cursor target: rough pixel offsets per (sourceIdx, rowIdx). We position via %.
  // Each source card height ~ 92px, header 22px, row ~16px. Computed inline below.
  return (
    <div
      className="relative h-full w-full rounded-xl overflow-hidden border border-foreground/10"
      style={{
        background: "linear-gradient(180deg, rgba(15,23,20,0.04) 0%, rgba(15,23,20,0.08) 100%)",
      }}
    >
      {/* status bar */}
      <div className="flex items-center justify-between gap-2 px-3 py-2 border-b border-foreground/10 bg-white/40">
        <div className="flex items-center gap-2 min-w-0">
          <Search className="h-3 w-3 shrink-0" style={{ color: "#22826F" }} />
          <span className="text-[10px] font-medium text-foreground/75 truncate">
            Researching reagan@northwind.io
          </span>
        </div>
        <ThinkingDots />
      </div>
      {/* progress */}
      <div className="h-[2px] w-full bg-foreground/10 relative overflow-hidden">
        <motion.div
          className="h-full"
          style={{
            background: "linear-gradient(90deg, #22826F, #52FEBF)",
            boxShadow: "0 0 8px #52FEBF",
          }}
          animate={{
            width: `${Math.max(0, Math.min(100, ((activeChipIdx + 1) / 5) * 100))}%`,
          }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        />
      </div>

      {/* scrolling stack of source cards */}
      <div className="absolute inset-0 pt-[36px] px-2.5 pb-2 overflow-hidden">
        <motion.div
          className="space-y-2"
          animate={{ y: activeSource * -6 }}
          transition={SPRING_SOFT}
        >
          {RESEARCH_SOURCES.map((src, sIdx) => {
            const isActive = sIdx === activeSource && activeChipIdx >= 0;
            return (
              <motion.div
                key={src.tag}
                className="rounded-md bg-white border border-foreground/10 px-2.5 py-2"
                animate={{
                  boxShadow: isActive
                    ? "0 0 0 1.5px rgba(82,254,191,0.7), 0 8px 22px -10px rgba(34,130,111,0.45)"
                    : "0 1px 2px rgba(0,0,0,0.04)",
                  opacity: activeChipIdx < 0 ? 0.55 : isActive ? 1 : 0.55,
                }}
                transition={{ duration: 0.35 }}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[8px] font-semibold uppercase tracking-[0.14em] text-foreground/55">
                    {src.tag}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: isActive ? "#52FEBF" : "#cbd2cf" }} />
                </div>
                <p className="text-[10px] font-semibold text-foreground/85 leading-tight mb-1.5">
                  {src.title}
                </p>
                <ul className="space-y-1">
                  {src.rows.map((row, rIdx) => {
                    const matchedChipIdx = REAGAN_CHIPS.findIndex(
                      (c) => c.source === sIdx && c.row === rIdx
                    );
                    const chipFound = matchedChipIdx >= 0 && foundChips[matchedChipIdx];
                    const isCursorRow = isActive && active && active.row === rIdx;
                    return (
                      <li
                        key={rIdx}
                        className="relative flex items-center gap-1.5 text-[9px] leading-tight rounded px-1 py-[2px]"
                        style={{
                          background: isCursorRow
                            ? "rgba(82,254,191,0.18)"
                            : "transparent",
                          color: chipFound ? "#22826F" : "rgba(20,30,25,0.7)",
                          fontWeight: chipFound ? 600 : 400,
                        }}
                      >
                        {chipFound ? (
                          <Check className="h-2.5 w-2.5 shrink-0" strokeWidth={3} style={{ color: "#22826F" }} />
                        ) : (
                          <span className="h-1 w-1 rounded-full shrink-0 bg-foreground/30" />
                        )}
                        <span className="truncate">{row}</span>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Cursor */}
        <motion.div
          className="absolute pointer-events-none"
          initial={false}
          animate={{
            x: activeChipIdx < 0 ? 24 : 60 + (activeChipIdx % 2) * 14,
            y:
              activeChipIdx < 0
                ? 12
                : 8 + activeSource * 92 + (active?.row ?? 0) * 13,
            opacity: activeChipIdx < 0 ? 0.4 : 1,
            scale: 1,
          }}
          transition={{ ...SPRING_SOFT, stiffness: 220, damping: 24 }}
        >
          <motion.div
            animate={{ scale: [1, 0.82, 1] }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            key={activeChipIdx}
          >
            <MousePointer2
              className="h-3.5 w-3.5"
              style={{ color: "#0E1A14", filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.25))" }}
              fill="#fff"
              strokeWidth={1.5}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

/* ----- S2 Draft card shell (used for primary + clones) ----- */
const DraftCardShell = ({
  variant,
  primaryStates,
  dayLabel,
  subjectText,
}: {
  variant: "primary" | "followup";
  primaryStates?: Record<"subj" | "open" | "val" | "cta", "hidden" | "placeholder" | "thinking" | "revealed">;
  dayLabel?: string;
  subjectText?: string;
}) => (
  <div className="rounded-2xl bg-white border border-border/70 p-4 sm:p-5 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.45)]">
    <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-border/60 gap-2">
      <div className="flex items-center gap-2 min-w-0">
        <img src={headshotReagan} alt="" className="h-5 w-5 rounded-full object-cover shrink-0 opacity-80" />
        <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-muted-foreground/70 truncate">
          {variant === "primary" ? "Draft · v1 · To Reagan" : `${dayLabel} · Reagan`}
        </p>
      </div>
      {variant === "primary" ? (
        <div className="flex items-center gap-1.5 text-[10px] font-semibold shrink-0" style={{ color: "#22826F" }}>
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#22826F", boxShadow: "0 0 8px #52FEBF" }} />
          Composing
        </div>
      ) : (
        <span
          className="text-[9px] font-semibold uppercase tracking-[0.16em] px-1.5 py-[2px] rounded-full shrink-0"
          style={{ background: "rgba(34,130,111,0.1)", color: "#22826F", border: "1px solid rgba(34,130,111,0.25)" }}
        >
          {dayLabel}
        </span>
      )}
    </div>
    <div className="space-y-3">
      {DRAFT_LINES.map((line) => {
        if (variant === "primary") {
          return (
            <DraftLineRow key={line.key} line={line} state={primaryStates?.[line.key] ?? "hidden"} />
          );
        }
        if (line.key === "subj" && subjectText) {
          return (
            <div key={line.key} className="space-y-1.5">
              <span className="text-[10px] uppercase tracking-[0.18em] font-semibold text-muted-foreground/70">
                Subject
              </span>
              <p className="text-[13px] font-semibold text-foreground/85 leading-tight">{subjectText}</p>
            </div>
          );
        }
        return <DraftLineRow key={line.key} line={line} state="placeholder" shimmerOnly />;
      })}
    </div>
  </div>
);

const FOLLOWUPS: { day: string; subject: string; pill: string }[] = [
  { day: "Day 3",  subject: "Re: intent scoring", pill: "No reply →" },
  { day: "Day 7",  subject: "Quick proof point",  pill: "Still no reply →" },
  { day: "Day 14", subject: "One last note",      pill: "No reply?" },
];

const STACK_OFFSETS = [
  { x: 28,  y: 34,  opacity: 0.85, z: 30 },
  { x: 56,  y: 68,  opacity: 0.62, z: 20 },
  { x: 84,  y: 102, opacity: 0.42, z: 10 },
];

const ResearchDraftStage = () => {
  const [phase, setPhase] = useState<RDPhase>("s1-in");

  useEffect(() => {
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    if (reduced) {
      setPhase("hold");
      return;
    }
    let timeouts: number[] = [];
    const start = () => {
      timeouts.forEach((id) => window.clearTimeout(id));
      timeouts = RD_SCHEDULE.map((b) =>
        window.setTimeout(() => setPhase(b.phase), b.at)
      );
      timeouts.push(window.setTimeout(start, RD_LOOP_MS));
    };
    start();
    return () => timeouts.forEach((id) => window.clearTimeout(id));
  }, []);

  const i = rdIdx(phase);
  const passed = (p: RDPhase) => i >= rdIdx(p);
  const reagan = passed("s1-in") && !passed("s1-out");
  const draftIn = passed("draft-in") && !passed("exit");
  const showQuality = passed("stack-1") && !passed("exit");

  // Active chip = highest chip-N reached, only while in S1 research phases.
  const chipGates: RDPhase[] = ["chip-1", "chip-2", "chip-3", "chip-4", "chip-5"];
  const activeChipIdx = passed("research-on")
    ? Math.max(-1, ...chipGates.map((g, idx) => (passed(g) ? idx : -1)))
    : -1;
  const foundChips = chipGates.map((g) => passed(g));

  const lineState = (key: "subj" | "open" | "val" | "cta"): "hidden" | "placeholder" | "thinking" | "revealed" => {
    if (!passed("ph")) return "hidden";
    const order: Record<typeof key, RDPhase> = { subj: "r-subj", open: "r-open", val: "r-val", cta: "r-cta" } as const;
    const reveal = order[key];
    if (passed(reveal)) return "revealed";
    const nextKey = (["subj", "open", "val", "cta"] as const).find((k) => !passed(order[k]));
    return nextKey === key ? "thinking" : "placeholder";
  };
  const primaryStates = {
    subj: lineState("subj"),
    open: lineState("open"),
    val: lineState("val"),
    cta: lineState("cta"),
  };

  return (
    <StageFrame mobileScale>
      <div className="absolute inset-0 p-5 sm:p-7">
        {/* ===== Reagan card (S1) ===== */}
        <AnimatePresence>
          {reagan && (
            <motion.div
              key="reagan"
              className="absolute"
              style={{ top: "50%", left: "50%", width: "78%", x: "-50%", y: "-50%" }}
              initial={{ opacity: 0, y: 28, scale: 0.96 }}
              animate={{ opacity: 1, y: "-50%", scale: 1 }}
              exit={{ opacity: 0, y: "-58%", scale: 0.94, transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] } }}
              transition={SPRING_SOFT}
            >
              <div
                className="rounded-2xl bg-white border border-border/70 p-5 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.45)] grid grid-cols-[48%_52%] gap-5"
                style={{ aspectRatio: "16/9" }}
              >
                {/* Left: identity + chips */}
                <div className="flex flex-col">
                  <div className="flex items-start gap-3 mb-4">
                    <motion.div
                      initial={{ scale: 0.6, rotate: -8, opacity: 0 }}
                      animate={
                        passed("headshot")
                          ? { scale: [0.6, 1.06, 1], rotate: [-8, 2, 0], opacity: 1 }
                          : { scale: 0.6, rotate: -8, opacity: 0 }
                      }
                      transition={{ duration: 0.55, ease: [0.34, 1.56, 0.64, 1] }}
                      className="relative shrink-0"
                    >
                      <div
                        className="rounded-full overflow-hidden h-14 w-14"
                        style={{
                          boxShadow: "0 0 0 2px rgba(82,254,191,0.55), 0 8px 24px -8px rgba(34,130,111,0.4)",
                        }}
                      >
                        <img src={headshotReagan} alt="Reagan Bell" className="w-full h-full object-cover" />
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: passed("headshot") ? 1 : 0, y: passed("headshot") ? 0 : 6 }}
                      transition={{ duration: 0.35 }}
                      className="min-w-0"
                    >
                      <p className="font-bold text-foreground tracking-tight text-base">Reagan Bell</p>
                      <p className="text-muted-foreground leading-tight text-xs">
                        Director of Demand Gen
                        <br />
                        Northwind Logistics
                      </p>
                    </motion.div>
                  </div>

                  <ul className="space-y-2 flex-1">
                    {REAGAN_CHIPS.map((chip, idx) => {
                      const here = passed(chip.gate);
                      return (
                        <motion.li
                          key={chip.text}
                          initial={false}
                          animate={{
                            opacity: here ? 1 : 0,
                            y: here ? 0 : 10,
                          }}
                          transition={{ duration: 0.42, ease: [0.34, 1.4, 0.64, 1] }}
                          className="flex items-start gap-2 text-[12px] text-foreground/85"
                        >
                          <span
                            className="mt-[6px] h-1.5 w-1.5 rounded-full shrink-0"
                            style={{ background: "#22826F", boxShadow: "0 0 6px rgba(82,254,191,0.7)" }}
                          />
                          <span>{chip.text}</span>
                        </motion.li>
                      );
                    })}
                  </ul>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={
                      passed("intent-pill")
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.9 }
                    }
                    transition={{ ...SPRING, stiffness: 480 }}
                    className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.14em] self-start"
                    style={{
                      background: "linear-gradient(90deg, rgba(34,130,111,0.12), rgba(82,254,191,0.22))",
                      color: "#22826F",
                      border: "1px solid rgba(34,130,111,0.25)",
                      boxShadow: "0 0 18px -6px rgba(82,254,191,0.6)",
                    }}
                  >
                    <Sparkles className="h-3 w-3" />
                    Intent signals detected
                  </motion.div>
                </div>

                {/* Right: research workspace */}
                <ResearchWorkspace activeChipIdx={activeChipIdx} foundChips={foundChips} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ===== Draft + stair-stack (S2) ===== */}
        <AnimatePresence>
          {draftIn && (
            <motion.div
              key="s2"
              className="absolute"
              style={{ top: "13%", left: "50%", width: "46%", x: "-50%" }}
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.96, transition: { duration: 0.4 } }}
              transition={SPRING_SOFT}
            >
              <div className="relative">
                {/* Follow-up clones (rendered first so primary sits on top) */}
                {FOLLOWUPS.map((f, idx) => {
                  const gate = (`stack-${idx + 1}`) as RDPhase;
                  const visible = passed(gate);
                  const off = STACK_OFFSETS[idx];
                  return (
                    <div key={f.day}>
                      {/* "No reply →" pill */}
                      <motion.div
                        className="absolute"
                        style={{
                          top: off.y - 14,
                          left: off.x,
                          zIndex: off.z + 1,
                        }}
                        initial={{ opacity: 0, x: -6 }}
                        animate={{ opacity: visible ? 0.9 : 0, x: visible ? 0 : -6 }}
                        transition={{ duration: 0.35, delay: visible ? 0.15 : 0 }}
                      >
                        <span
                          className="text-[9px] font-semibold uppercase tracking-[0.18em] px-2 py-[3px] rounded-full"
                          style={{
                            background: "rgba(255,255,255,0.08)",
                            color: "rgba(255,255,255,0.78)",
                            border: "1px solid rgba(255,255,255,0.18)",
                            backdropFilter: "blur(6px)",
                          }}
                        >
                          {f.pill}
                        </span>
                      </motion.div>

                      <motion.div
                        className="absolute inset-0"
                        style={{ zIndex: off.z, transformOrigin: "top left" }}
                        initial={{ opacity: 0, x: -8, y: -8 }}
                        animate={{
                          opacity: visible ? off.opacity : 0,
                          x: visible ? off.x : -8,
                          y: visible ? off.y : -8,
                        }}
                        transition={SPRING_SOFT}
                      >
                        <DraftCardShell
                          variant="followup"
                          dayLabel={f.day}
                          subjectText={f.subject}
                        />
                      </motion.div>
                    </div>
                  );
                })}

                {/* Primary draft card */}
                <div className="relative" style={{ zIndex: 40 }}>
                  <DraftCardShell variant="primary" primaryStates={primaryStates} />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ===== Quality pills ===== */}
        <AnimatePresence>
          {showQuality && (
            <motion.div
              key="quality"
              className="absolute left-1/2 flex flex-nowrap justify-center items-center gap-2 sm:gap-2.5 max-w-[96%]"
              style={{ bottom: "5%", x: "-50%" }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
            >
              {QUALITY_PILLS.map((label, idx) => {
                const gate = (`q${idx + 1}` as RDPhase);
                const lit = passed(gate);
                return (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, delay: 0.05 * idx }}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.14em] border transition-colors duration-300 whitespace-nowrap"
                    style={
                      lit
                        ? {
                            background: "rgba(34,130,111,0.22)",
                            color: "#52FEBF",
                            borderColor: "rgba(82,254,191,0.5)",
                            boxShadow: "0 0 18px -4px rgba(82,254,191,0.55)",
                          }
                        : {
                            background: "rgba(255,255,255,0.06)",
                            color: "rgba(255,255,255,0.5)",
                            borderColor: "rgba(255,255,255,0.18)",
                          }
                    }
                  >
                    <motion.span
                      initial={false}
                      animate={{ scale: lit ? 1 : 0.6, opacity: lit ? 1 : 0 }}
                      transition={{ ...SPRING, stiffness: 520 }}
                      className="flex items-center"
                    >
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </motion.span>
                    {label}
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </StageFrame>
  );
};

const FlowVisual = () => {
  const nodes = [
    "Form fill",
    "Research",
    "First touch",
    "Follow-up",
    "Objection reply",
    "Send-time tuning",
    "Calendar invite",
  ];
  return (
    <div className="rounded-2xl bg-white border border-border/70 p-6 sm:p-8 shadow-[0_30px_80px_-40px_rgba(34,130,111,0.2)] overflow-x-auto">
      <div className="flex items-center gap-2 sm:gap-3 min-w-max">
        {nodes.map((n, i) => (
          <div key={n} className="flex items-center gap-2 sm:gap-3">
            <div
              className={`px-3 py-2 sm:px-4 sm:py-2.5 rounded-md text-xs sm:text-sm font-semibold whitespace-nowrap ${
                i === 0
                  ? "bg-foreground text-white"
                  : i === nodes.length - 1
                    ? "bg-[#22826F] text-white"
                    : "bg-secondary text-foreground border border-border/60"
              }`}
            >
              {n}
            </div>
            {i < nodes.length - 1 && <ArrowRight className="h-4 w-4 text-foreground/30" />}
          </div>
        ))}
      </div>
      <p className="mt-5 text-xs uppercase tracking-[0.2em] text-muted-foreground/70 font-semibold text-center">
        Owned end-to-end · zero handoff
      </p>
    </div>
  );
};

/* Process architecture (mirrored from SDR Worker Full page SdrFlowOverview) */
const ARCH_RED = "#FF0D40";
const ARCH_NODES: { label: string; variant: "default" | "outline" | "filled" }[] = [
  { label: "Signals", variant: "default" },
  { label: "CRM", variant: "default" },
  { label: "SDR AI Worker", variant: "outline" },
  { label: "Research + Knowledge", variant: "default" },
  { label: "Sequencing Tool", variant: "default" },
  { label: "Meetings Booked", variant: "filled" },
];

const ArchNode = ({
  label,
  variant,
  delay,
}: {
  label: string;
  variant: "default" | "outline" | "filled";
  delay: number;
}) => {
  const base =
    "px-4 py-3 lg:px-5 lg:py-3.5 rounded-md text-sm lg:text-[15px] font-semibold tracking-tight whitespace-nowrap text-center";
  let style: React.CSSProperties = {};
  let cls = base;
  if (variant === "default") {
    cls += " bg-white border border-border/70 text-foreground";
  } else if (variant === "outline") {
    cls += " bg-white";
    style = { border: `1.5px solid ${ARCH_RED}`, color: ARCH_RED };
  } else {
    cls += " text-white rounded-lg";
    style = { backgroundColor: ARCH_RED };
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.35, delay, ease: "easeOut" }}
      className={cls}
      style={style}
    >
      {label}
    </motion.div>
  );
};

const ArchArrow = ({ delay, vertical = false }: { delay: number; vertical?: boolean }) => (
  <motion.span
    initial={{ opacity: 0, scale: 0.6 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: "-10%" }}
    transition={{ duration: 0.25, delay, ease: "easeOut" }}
    className="flex items-center justify-center text-lg font-bold leading-none"
    style={{ color: ARCH_RED }}
    aria-hidden="true"
  >
    {vertical ? "↓" : "→"}
  </motion.span>
);

const ProcessArchitecture = () => {
  const stagger = 0.09;
  return (
    <div className="relative w-full max-w-6xl mx-auto px-2">
      <div className="hidden lg:flex items-center justify-center gap-3 xl:gap-4 flex-wrap">
        {ARCH_NODES.map((n, i) => (
          <div key={n.label} className="flex items-center gap-3 xl:gap-4">
            <ArchNode label={n.label} variant={n.variant} delay={i * stagger} />
            {i < ARCH_NODES.length - 1 && <ArchArrow delay={i * stagger + stagger / 2} />}
          </div>
        ))}
      </div>
      <div className="flex lg:hidden flex-col items-center gap-2">
        {ARCH_NODES.map((n, i) => (
          <div key={n.label} className="flex flex-col items-center gap-2">
            <ArchNode label={n.label} variant={n.variant} delay={i * stagger} />
            {i < ARCH_NODES.length - 1 && <ArchArrow delay={i * stagger + stagger / 2} vertical />}
          </div>
        ))}
      </div>
    </div>
  );
};

/* ============ Page ============ */
const QuoteImageCard = ({
  image,
  alt,
  overlayTitle,
  caption,
}: {
  image: string;
  alt: string;
  overlayTitle: string;
  caption: string;
}) => {
  const isMobile = useIsMobile();
  // Inline the mask SVG as a data URI so the mask is always available
  // synchronously on first paint (external URL refs can race and leave the
  // shape rendering as an unmasked square until the SVG loads).
  const maskDataUri =
    "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1054 1132' preserveAspectRatio='none'><path d='M1015.55 0C1036.35 0 1053.22 16.8682 1053.22 37.6763V976.104C1053.22 986.887 1051.51 991.57 1047.16 1007.58L1045.72 1011.18C1045.7 1011.22 1045.68 1011.27 1045.66 1011.31L1003.81 1132H930.172L968.434 1022.52L37.7381 1024.05C16.906 1024.08 0 1007.2 0 986.371V37.6763C0 16.8682 16.8682 0 37.6762 0H1015.55Z' fill='black'/></svg>\")";
  const maskStyle: React.CSSProperties = {
    WebkitMaskImage: maskDataUri,
    maskImage: maskDataUri,
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskSize: "100% 100%",
    maskSize: "100% 100%",
    WebkitMaskPosition: "center",
    maskPosition: "center",
  };

  const inner = (
    <>
      {/* Image body + tail (mask shape spans the full 1054x1132). Body is the top 90.37%; tail/whitespace is the bottom 9.63%. */}
      <div className="absolute inset-0 overflow-hidden" style={maskStyle}>
          <img
            src={image}
            alt={alt}
            className="w-full h-full object-cover"
            draggable={false}
          />
        {/* Legibility gradient — confined to body via the parent's mask shape. */}
        <div
          className="absolute inset-x-0 pointer-events-none"
          style={{
            top: "55%",
            height: "35.37%",
            background:
              "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.25) 55%, rgba(0,0,0,0) 100%)",
          }}
        />
      </div>
      {/* Overlay headline — sits ~1.93% above the body's bottom edge (mirrors caption spacing below). */}
      <div
        className="absolute inset-x-0 px-4 sm:px-8 bottom-[11.56%]"
      >
        <h3 className="text-white font-bold tracking-tight leading-tight text-2xl lg:text-3xl text-center">
          {overlayTitle}
        </h3>
      </div>
      {/* Caption — anchored low in the 9.63% whitespace so there's ~4x more space above than below. */}
      <div
        className="absolute inset-x-0 flex justify-center px-4 top-[calc(94%-6px)]"
      >
        <p className="text-center text-base text-foreground/70 max-w-xs leading-snug">
          {caption}
        </p>
      </div>
    </>
  );

  return (
    <div
      className="relative w-full"
      style={{ aspectRatio: "1054 / 1132" }}
    >
      {isMobile ? (
        <ScaleToFit designWidth={420} aspect="1054 / 1132">{inner}</ScaleToFit>
      ) : (
        inner
      )}
    </div>
  );
};

const LeadToMeetingSection = () => {
  return (
    <section className="px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl 2xl:text-6xl font-bold tracking-tight text-foreground text-center"
        >
          Lead-to-meeting,<br className="md:hidden" /> on rails.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-5 text-base sm:text-lg text-muted-foreground text-center max-w-xl mx-auto"
        >
          The SDR AI changes lead management operations.
          <br />
          Lead comes in <ArrowRight className="inline h-5 w-5 align-[-2px] mx-1 text-foreground/60" /> meeting comes out.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative mt-14 sm:mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 lg:gap-12"
        >
          <QuoteImageCard
            image={leadToMeetingCustomer}
            alt="Customer engaged at laptop"
            overlayTitle="Your customers, faster to value"
            caption="Why wait on SDR response time, when they're already interested?"
          />
          <QuoteImageCard
            image={leadToMeetingSeller}
            alt="Seller in conversation"
            overlayTitle="Your sellers, full time on selling"
            caption="Let AI transform the way sellers focus their time. Less bottlenecks, more human."
          />

          {/* Centered EW logomark — desktop only. Centered on the image body (excluding the tail at the bottom). */}
          <div
            className="hidden md:flex absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none"
            style={{ top: "45.185%" }}
          >
            <img
              src={ewLogomark}
              alt="EverWorker"
              className="w-20 lg:w-28 drop-shadow-[0_8px_24px_rgba(0,0,0,0.25)]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SdrLeadResponsePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* HERO */}
      <section className="relative pt-28 pb-12 sm:pt-36 sm:pb-16 lg:pt-44 lg:pb-24 px-6 lg:px-8 overflow-hidden bg-background">
        <div className="max-w-5xl mx-auto w-full text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="text-sm text-accent tracking-widest uppercase font-semibold mb-6"
          >
            SDR AI Worker · Lead Response
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-[4.75rem] xl:text-[5.25rem] 2xl:text-[5.75rem] font-bold tracking-tight leading-[0.95] sm:leading-[0.9] mb-6 sm:mb-8"
          >
            <span className="text-foreground">Let every lead</span>
            <br />
            <span className="text-foreground">reach it's meeting potential.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base sm:text-lg 2xl:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed"
          >
            The SDR AI Worker replies in seconds, builds the context a senior rep would research, and runs the cadence
            to a meeting on a rep's calendar. Every form fill now gets the treatment your team used to reserve for your
            top accounts.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex justify-center"
          >
            <GetStartedButton>Book a demo</GetStartedButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 sm:mt-16"
          >
            <p className="text-center text-xs tracking-[0.25em] uppercase text-muted-foreground/60 font-semibold mb-6">
              Trusted by inbound teams at
            </p>
            <LogoMarquee />
          </motion.div>
        </div>
      </section>

      {/* LEAD-TO-MEETING TWO-UP */}
      <LeadToMeetingSection />

      {/* SUB-BEAT 1 — SPEED */}
      <section className="px-6 lg:px-8 pt-16 pb-12 sm:pt-24 sm:pb-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl 2xl:text-6xl font-bold tracking-tight text-foreground mb-4 sm:mb-5"
          >
            Respond in seconds.
            <br />
            <span className="hero-gradient-text">But like your best rep spent hours getting to know them.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-muted-foreground leading-relaxed"
          >
            Inbound lead value decays by the minute. The SDR AI Worker triages, enriches, and replies within seconds of
            a form firing, regardless of timezone or time of day.{" "}
            <strong className="font-semibold text-foreground">
              Your team often sees the meeting on the calendar before they see the original form submission.
            </strong>
          </motion.p>
        </div>
      </section>
      <section className="px-6 lg:px-8 pb-16 sm:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <SpeedSceneStage />
        </motion.div>
      </section>

      {/* SUB-BEAT 2 — QUALITY */}
      <section className="px-6 lg:px-8 pt-10 pb-12 sm:pt-16 sm:pb-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl 2xl:text-6xl font-bold tracking-tight text-foreground mb-4 sm:mb-5"
          >
            Reject generic AI outreach.
            <br />
            <span className="hero-gradient-text">Smart engagement that protects your brand.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-muted-foreground leading-relaxed"
          >
            Before the SDR AI Worker sends a word, it reads the lead's company, role, recent funding, the product
            they're comparing you to, and the post they engaged with last week.{" "}
            <strong className="font-semibold text-foreground">
              Every outbound message reflects the hour of research a senior rep would put in, delivered in the seconds
              before the message ships.
            </strong>
          </motion.p>
        </div>
      </section>
      <section className="px-6 lg:px-8 pb-16 sm:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <ResearchDraftStage />
        </motion.div>
      </section>

      {/* SUB-BEAT 3 — A NEW NORM */}
      <section className="px-6 lg:px-8 pt-10 pb-12 sm:pt-16 sm:pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl 2xl:text-6xl font-bold tracking-tight text-foreground mb-4 sm:mb-5"
          >
            A new norm for
            <br />
            <span className="hero-gradient-text">lead funnel operations.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-muted-foreground leading-relaxed"
          >
            The old model forced a tradeoff: speed of response, depth of personalization, level of value, and which
            leads actually got attention. Reps could pick two on a good day.{" "}
            <strong className="font-semibold text-foreground">
              That bottleneck is over. Your team focuses on meetings. Technology takes on everything up to them.
            </strong>
          </motion.p>
        </div>
      </section>

      {/* Process architecture (mirrored from SDR Worker Full page) */}
      <section className="px-6 lg:px-8 pb-16 sm:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-6xl mx-auto"
        >
          <ProcessArchitecture />
        </motion.div>
      </section>

      {/* Three promise callouts on white */}
      <section className="px-6 lg:px-8 pt-8 pb-24 sm:pt-12 sm:pb-40 lg:pt-16 lg:pb-48">
        <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10 sm:gap-12">
            {[
              {
                icon: Zap,
                title: "Live in days",
                blurb:
                  "Kickoff to production in weeks, not quarters. Wired into your CRM, sequencer, and calendar so it produces pipeline inside the first sprint.",
              },
              {
                icon: Settings,
                title: "We do the work",
                blurb:
                  "Configured for you, not left to you. We tune the worker to your ICP, playbook, voice, and objections, then keep it sharp as your motion evolves.",
              },
              {
                icon: ShieldCheck,
                title: "Risk-free deployment",
                blurb:
                  "Measurable outcomes from day one. The worker performs to expectations or you walk away. No multi-year lock-in, no hidden meter.",
              },
            ].map(({ icon: Icon, title, blurb }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="text-left"
              >
                <div
                  className="h-12 w-12 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background: "linear-gradient(135deg, rgba(34,130,111,0.12), rgba(82,254,191,0.18))",
                    boxShadow: "0 6px 24px -10px rgba(34,130,111,0.35)",
                  }}
                >
                  <Icon className="h-5 w-5" style={{ color: "#22826F" }} strokeWidth={2.25} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-2">{title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">{blurb}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 sm:mt-20 mx-auto max-w-md text-center flex flex-col items-center"
          >
            <img
              src={everworkerOnboard}
              alt="EverWorker onboarding into your team"
              className="w-[42%] max-w-[158px] sm:w-3/5 sm:max-w-[225px] h-auto mb-6"
            />
            <p className="text-base text-muted-foreground leading-relaxed">
              What makes EverWorkers like the AI SDR actually work is that each one is built exactly to your business.
              You don't log into it.{" "}
              <strong className="font-semibold text-foreground">It onboards into your team.</strong>
            </p>
          </motion.div>
        </div>
      </section>

      {/* INTEGRATION */}
      <div className="relative" style={{ background: "#F2F3F5" }}>
        <section className="relative px-6 lg:px-8 pt-20 sm:pt-32 lg:pt-48 pb-16 sm:pb-24 lg:pb-32 overflow-hidden">
          <div className="relative max-w-6xl 2xl:max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-4xl sm:text-6xl 2xl:text-7xl font-bold tracking-tight text-foreground leading-[1.05] mb-5 sm:mb-7">
                Live on your<br className="sm:hidden" /> GTM stack,
                <br />
                <span className="hero-gradient-text">in days.</span>
              </h2>
              <p className="text-base sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10">
                Onboarding is hands-on and fast. We tune the worker to how your team actually sells — wired into your
                systems, fluent in your playbook, and producing pipeline inside the first sprint.
              </p>
              <ul className="flex flex-col sm:flex-row sm:flex-wrap gap-x-8 gap-y-3 sm:justify-center max-w-3xl mx-auto text-left">
                {[
                  "Calibrated to your ICP and qualification bar",
                  "Trained on your playbook, voice and objections",
                  "Wired into your CRM, inbox and sequencer",
                  "Grounded in your knowledge base for every reply",
                ].map((line) => (
                  <li key={line} className="flex items-start sm:items-center gap-3">
                    <span
                      className="h-[8px] w-[8px] rounded-full shrink-0 mt-2 sm:mt-0"
                      style={{
                        background: "linear-gradient(135deg, #22826F, #52FEBF)",
                        boxShadow: "0 0 10px rgba(82,254,191,0.6)",
                      }}
                    />
                    <span className="text-base text-foreground">{line}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <div className="mt-20 pt-12 border-t border-foreground/10 text-center">
              <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground/60 font-semibold mb-6">
                Built to work with the tools you already run
              </p>
              {(() => {
                const items = [
                  { src: logoSalesforce, alt: "Salesforce", h: "h-9" },
                  { src: logoHubspot, alt: "HubSpot", h: "h-7" },
                  { src: logoOutreach, alt: "Outreach", h: "h-6" },
                  { src: logoSalesloft, alt: "Salesloft", h: "h-7" },
                  { src: logoLinkedin, alt: "LinkedIn", h: "h-6" },
                  { src: logoGoogle, alt: "Google", h: "h-8" },
                  { src: logoSendgrid, alt: "SendGrid", h: "h-6" },
                  { src: logoTwilio, alt: "Twilio", h: "h-7" },
                  { src: logoAirtable, alt: "Airtable", h: "h-7" },
                  { src: logoSupabase, alt: "Supabase", h: "h-7" },
                ];
                const loop = [...items, ...items];
                return (
                  <div
                    className="relative overflow-hidden"
                    style={{
                      maskImage: "linear-gradient(to right, transparent 0, black 12%, black 88%, transparent 100%)",
                      WebkitMaskImage:
                        "linear-gradient(to right, transparent 0, black 12%, black 88%, transparent 100%)",
                    }}
                  >
                    <div className="flex w-max items-center gap-x-12 animate-logo-marquee">
                      {loop.map((l, i) => (
                        <img
                          key={`${l.alt}-${i}`}
                          src={l.src}
                          alt={l.alt}
                          className={`${l.h} w-auto object-contain shrink-0`}
                        />
                      ))}
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </section>

        {/* CLOSING CTA */}
        <section className="px-6 lg:px-8 pb-20 sm:pb-40">
          <div className="max-w-7xl mx-auto">
            <div
              className="relative overflow-hidden rounded-3xl px-6 py-16 sm:px-16 sm:py-24 text-center"
              style={{
                background:
                  "radial-gradient(ellipse 60% 80% at 50% 0%, rgba(82,254,191,0.35) 0%, transparent 60%), linear-gradient(180deg, #0F1C18 0%, #1d3530 100%)",
              }}
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-overlay"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
                }}
              />
              <div className="relative">
                <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4 sm:mb-5">
                  Ready to 2X your meetings?
                </h2>
                <p className="text-base sm:text-lg text-white/70 max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed">
                  See the SDR AI Worker run on your actual inbound flow. Live demo, your data, your playbook.
                </p>
                <GetStartedButton>Book a demo</GetStartedButton>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default SdrLeadResponsePage;
