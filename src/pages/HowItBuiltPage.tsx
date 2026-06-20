import { motion } from "framer-motion";
import { Sparkles, AtSign, Flame, Server, ShieldCheck, Check, Globe, Shuffle, Snowflake, Clock, BadgeCheck } from "lucide-react";
import { FaMicrosoft, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import HomeHeader from "@/components/homev2/HomeHeader";
import { BRAND, Eyebrow, fadeUp, CtaButtons, LIGHT_BG } from "@/components/homev2/ui";

const LI_BLUE = "#0A66C2";

const EMAIL_COMPONENTS = [
  { label: "Sending Domains", sub: "authenticated · SPF/DKIM", chipBg: "rgba(34,130,111,0.1)", render: (s: number) => <AtSign size={s} color={BRAND.emerald} strokeWidth={2.1} /> },
  { label: "Microsoft Inboxes", sub: "Outlook · Microsoft 365", chipBg: "rgba(0,120,212,0.1)", render: (s: number) => <FaMicrosoft size={s} color="#0078D4" /> },
  { label: "Google Inboxes", sub: "Workspace · Gmail", chipBg: "rgba(234,67,53,0.1)", render: (s: number) => <SiGmail size={s} color="#EA4335" /> },
  { label: "Private AI Warmup Pool", sub: "ramps sender reputation", chipBg: "rgba(34,130,111,0.1)", render: (s: number) => <Flame size={s} color={BRAND.emerald} strokeWidth={2.1} /> },
  { label: "Dedicated IP Mail Servers", sub: "max 100 accounts / server", chipBg: "rgba(34,130,111,0.1)", render: (s: number) => <Server size={s} color={BRAND.emerald} strokeWidth={2.1} /> },
  { label: "Deliverability Optimization", sub: "monitored and tuned", chipBg: "rgba(34,130,111,0.1)", render: (s: number) => <ShieldCheck size={s} color={BRAND.emerald} strokeWidth={2.1} /> },
];

const LI_MECHANICS = [
  { label: "Dedicated Proxies & IP Rotation", sub: "residential-grade IP per account", render: (s: number) => <Globe size={s} color={BRAND.emerald} strokeWidth={2.1} /> },
  { label: "Sender Rotation", sub: "50+ accounts, auto-balanced", render: (s: number) => <Shuffle size={s} color={BRAND.emerald} strokeWidth={2.1} /> },
  { label: "Rate Limiting & Auto-Freeze", sub: "holds accounts before limits", render: (s: number) => <Snowflake size={s} color={BRAND.emerald} strokeWidth={2.1} /> },
  { label: "Randomized Human-Pattern Timing", sub: "human cadence, business hours", render: (s: number) => <Clock size={s} color={BRAND.emerald} strokeWidth={2.1} /> },
];

const SENDERS = ["AK", "MR", "PS", "LP", "JT"];

const SenderNode = ({ caption }: { caption: string }) => (
  <motion.div
    {...fadeUp(0.05)}
    className="relative flex w-full flex-col items-center rounded-2xl text-center lg:w-[200px] lg:shrink-0"
    style={{ padding: "26px 18px", background: "linear-gradient(155deg, #22826F 0%, #0F1C18 115%)", border: "1px solid rgba(82,254,191,0.45)", boxShadow: "0 24px 60px -24px rgba(15,40,32,0.55), 0 0 0 6px rgba(82,254,191,0.06)" }}
  >
    <span aria-hidden className="absolute rounded-full" style={{ inset: -18, background: "radial-gradient(circle, rgba(82,254,191,0.4) 0%, transparent 68%)", filter: "blur(14px)", animation: "deck-breathe 3.4s ease-in-out infinite", zIndex: -1 }} />
    <span className="grid place-items-center rounded-xl" style={{ width: 48, height: 48, background: "linear-gradient(135deg, #52FEBF, #22826F)", boxShadow: "0 0 22px rgba(82,254,191,0.65)" }}>
      <Sparkles size={24} color="#0F1C18" strokeWidth={2.1} />
    </span>
    <p className="font-bold tracking-tight text-white" style={{ fontSize: 19, marginTop: 12 }}>SDR AI Worker</p>
    <p className="font-semibold uppercase" style={{ fontSize: 10.5, letterSpacing: "0.16em", color: BRAND.mint, marginTop: 8 }}>{caption}</p>
  </motion.div>
);

const InfoCard = ({ icon, label, sub, delay }: { icon: React.ReactNode; label: string; sub: string; delay: number }) => (
  <motion.div
    {...fadeUp(delay)}
    className="flex items-center gap-3.5 rounded-xl"
    style={{ padding: "16px 18px", background: "linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0.92) 100%)", border: "1px solid rgba(15,28,24,0.07)", boxShadow: "0 14px 32px -24px rgba(15,40,32,0.3)" }}
  >
    <span className="grid place-items-center rounded-lg shrink-0" style={{ width: 42, height: 42, background: "rgba(34,130,111,0.1)" }}>{icon}</span>
    <div className="min-w-0">
      <p className="font-bold tracking-tight leading-tight" style={{ fontSize: 15, color: BRAND.ink }}>{label}</p>
      <p className="font-medium tracking-tight leading-tight" style={{ fontSize: 12, color: "rgba(15,28,24,0.58)", marginTop: 3 }}>{sub}</p>
    </div>
  </motion.div>
);

const InfraSection = ({
  eyebrow,
  title,
  titleStrong,
  senderCaption,
  caption,
  children,
  platformHeader,
}: {
  eyebrow: string;
  title: string;
  titleStrong: string;
  senderCaption: string;
  caption: string;
  children: React.ReactNode;
  platformHeader: React.ReactNode;
}) => (
  <section className="relative overflow-hidden" style={{ background: LIGHT_BG }}>
    <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-24">
      <div className="flex flex-col items-center text-center">
        <Eyebrow>{eyebrow}</Eyebrow>
        <motion.h2 {...fadeUp(0.1)} className="font-medium tracking-tight" style={{ color: BRAND.ink, marginTop: 14, lineHeight: 1.05 }}>
          <span className="text-[30px] sm:text-[42px] lg:text-[48px]">{title} <span className="font-extrabold">{titleStrong}</span></span>
        </motion.h2>
      </div>

      <div className="mt-12 flex flex-col items-stretch gap-5 lg:flex-row lg:items-center">
        <SenderNode caption={senderCaption} />
        <motion.div
          {...fadeUp(0.18)}
          className="relative flex-1 rounded-3xl"
          style={{ padding: "22px 24px 26px", background: "linear-gradient(180deg, rgba(34,130,111,0.05) 0%, rgba(34,130,111,0.02) 100%)", border: "1px solid rgba(34,130,111,0.16)", boxShadow: "0 28px 70px -36px rgba(15,40,32,0.4)" }}
        >
          {platformHeader}
          {children}
        </motion.div>
      </div>

      <motion.div {...fadeUp(0.3)} className="mt-10 flex items-center justify-center gap-2.5 text-center">
        <span className="grid h-7 w-7 place-items-center rounded-lg" style={{ background: "rgba(34,130,111,0.1)" }}>
          <Check size={15} color={BRAND.emerald} strokeWidth={3} />
        </span>
        <span className="font-semibold tracking-tight" style={{ fontSize: 16, color: BRAND.ink }}>{caption}</span>
      </motion.div>
    </div>
  </section>
);

const HowItBuiltPage = () => (
  <div id="top" className="min-h-screen" style={{ fontFamily: "Gilroy, system-ui, -apple-system, sans-serif" }}>
    <HomeHeader />

    {/* Page intro */}
    <section className="relative overflow-hidden" style={{ background: LIGHT_BG }}>
      <div className="relative mx-auto max-w-4xl px-6 pt-20 pb-4 text-center sm:pt-24">
        <Eyebrow>How it's built</Eyebrow>
        <motion.h1 {...fadeUp(0.1)} className="font-bold tracking-tight" style={{ color: BRAND.ink, marginTop: 16, lineHeight: 1.04 }}>
          <span className="text-[36px] sm:text-[52px]">Infrastructure, <span className="hero-gradient-text">done for you.</span></span>
        </motion.h1>
        <motion.p {...fadeUp(0.2)} className="mx-auto font-medium tracking-tight" style={{ fontSize: 18, lineHeight: 1.5, color: "rgba(15,28,24,0.6)", marginTop: 18, maxWidth: 600 }}>
          Email and LinkedIn sending, fully configured, integrated and managed by EverWorker. Nothing for you to set up.
        </motion.p>
      </div>
    </section>

    {/* Email infrastructure (S13) */}
    <InfraSection
      eyebrow="Built-in email infrastructure"
      title="Email infrastructure,"
      titleStrong="done for you."
      senderCaption="sends from ▸"
      caption="All configured, integrated and bundled in. Nothing for you to set up or manage."
      platformHeader={
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="grid place-items-center rounded-md" style={{ width: 26, height: 26, background: "linear-gradient(135deg, #52FEBF, #22826F)", boxShadow: "0 0 14px rgba(82,254,191,0.5)" }}>
              <Check size={15} color="#0F1C18" strokeWidth={3} />
            </span>
            <span className="font-bold uppercase" style={{ fontSize: 12.5, letterSpacing: "0.16em", color: BRAND.emerald }}>Everworker Email Platform</span>
          </div>
          <div className="flex items-center gap-2">
            {["Configured", "Integrated", "Managed"].map((t) => (
              <span key={t} className="flex items-center gap-1.5 rounded-full" style={{ padding: "5px 11px", background: "rgba(34,130,111,0.08)", border: "1px solid rgba(34,130,111,0.16)" }}>
                <Check size={11} color={BRAND.emerald} strokeWidth={3} />
                <span className="font-semibold tracking-tight" style={{ fontSize: 12, color: BRAND.emerald }}>{t}</span>
              </span>
            ))}
          </div>
        </div>
      }
    >
      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
        {EMAIL_COMPONENTS.map((c, i) => (
          <InfoCard key={c.label} icon={c.render(21)} label={c.label} sub={c.sub} delay={0.2 + i * 0.05} />
        ))}
      </div>
    </InfraSection>

    {/* LinkedIn infrastructure (S14) */}
    <InfraSection
      eyebrow="Built-in LinkedIn infrastructure"
      title="LinkedIn infrastructure,"
      titleStrong="done for you."
      senderCaption="operates via ▸"
      caption="Every account stays within human-plausible limits, automatically."
      platformHeader={
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <FaLinkedin size={22} color={LI_BLUE} />
            <span className="font-bold uppercase" style={{ fontSize: 12.5, letterSpacing: "0.16em", color: BRAND.emerald }}>Everworker LinkedIn Platform</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center">
              {SENDERS.map((s, i) => (
                <span key={s} className="grid place-items-center rounded-full font-bold text-white" style={{ width: 28, height: 28, fontSize: 10.5, marginLeft: i === 0 ? 0 : -8, background: "linear-gradient(135deg, #22826F, #52FEBF)", border: "2px solid #F7F9F8", zIndex: SENDERS.length - i }}>
                  {s}
                </span>
              ))}
              <span className="grid place-items-center rounded-full font-bold" style={{ width: 28, height: 28, fontSize: 10, marginLeft: -8, background: "#0F1C18", color: BRAND.mint, border: "2px solid #F7F9F8" }}>+45</span>
            </div>
            <span className="font-semibold tracking-tight" style={{ fontSize: 12, color: "rgba(15,28,24,0.55)" }}>50+ senders · auto-rotated</span>
          </div>
        </div>
      }
    >
      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
        {LI_MECHANICS.map((m, i) => (
          <InfoCard key={m.label} icon={m.render(22)} label={m.label} sub={m.sub} delay={0.2 + i * 0.06} />
        ))}
      </div>
      <motion.div
        {...fadeUp(0.45)}
        className="mt-3.5 flex items-center gap-3.5 rounded-xl"
        style={{ padding: "14px 18px", background: "linear-gradient(135deg, rgba(34,130,111,0.12) 0%, rgba(82,254,191,0.1) 100%)", border: "1px solid rgba(34,130,111,0.22)" }}
      >
        <span className="grid place-items-center rounded-lg shrink-0" style={{ width: 40, height: 40, background: "linear-gradient(135deg, #22826F, #52FEBF)", boxShadow: "0 0 16px rgba(82,254,191,0.45)" }}>
          <BadgeCheck size={21} color="#fff" strokeWidth={2.2} />
        </span>
        <div className="min-w-0 flex-1">
          <p className="font-bold tracking-tight leading-tight" style={{ fontSize: 15, color: BRAND.ink }}>ID-Verified Real Account Rental</p>
          <p className="font-medium tracking-tight leading-tight" style={{ fontSize: 12.5, color: "rgba(15,28,24,0.55)", marginTop: 2 }}>verified, real LinkedIn accounts to scale further</p>
        </div>
        <span className="font-bold uppercase rounded-full shrink-0" style={{ fontSize: 11, letterSpacing: "0.12em", color: BRAND.emerald, padding: "5px 12px", background: "rgba(255,255,255,0.7)", border: "1px solid rgba(34,130,111,0.2)" }}>Scale</span>
      </motion.div>
    </InfraSection>

    {/* CTA */}
    <section className="relative overflow-hidden" style={{ background: LIGHT_BG }}>
      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 pb-24 text-center">
        <motion.h2 {...fadeUp()} className="font-bold tracking-tight" style={{ color: BRAND.ink, lineHeight: 1.05 }}>
          <span className="text-[30px] sm:text-[40px]">See it running on your stack.</span>
        </motion.h2>
        <motion.div {...fadeUp(0.12)} style={{ marginTop: 28 }}>
          <CtaButtons secondaryLabel="" />
        </motion.div>
      </div>
    </section>
  </div>
);

export default HowItBuiltPage;
