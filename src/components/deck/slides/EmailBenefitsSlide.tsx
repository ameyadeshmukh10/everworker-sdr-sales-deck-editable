import { motion } from "framer-motion";
import {
  TrendingUp,
  ShieldCheck,
  MailCheck,
  Layers,
  Database,
  CornerUpLeft,
  CalendarCheck,
} from "lucide-react";
import { SlideFrame, Kicker, BRAND } from "../primitives";

const EASE: [number, number, number, number] = [0.22, 0.61, 0.36, 1];

type Reply = {
  initials: string;
  name: string;
  subject: string;
  time: string;
  tag: "replied" | "meeting";
  unread?: boolean;
};

const REPLIES: Reply[] = [
  { initials: "SK", name: "Sarah Kim · Acme Corp", subject: "Re: pipeline coverage for emea", time: "9:02 AM", tag: "meeting", unread: true },
  { initials: "MR", name: "Marcus Reid · Northwind", subject: "Re: a quick 15-min intro", time: "8:41 AM", tag: "replied", unread: true },
  { initials: "LP", name: "Lena Park · Globex", subject: "Re: reviewed the deck", time: "Yesterday", tag: "replied" },
];

const BENEFITS = [
  { Icon: TrendingUp, label: "More replies and meetings", sub: "from outbound email" },
  { Icon: ShieldCheck, label: "Protects your domain", sub: "sending stays isolated from yours" },
  { Icon: MailCheck, label: "Reaches the primary inbox", sub: "not spam, not promotions" },
  { Icon: Layers, label: "Dedicated, scalable sending", sub: "the worker's own email accounts" },
  { Icon: Database, label: "Logged in your CRM", sub: "every email, automatically" },
];

const ReplyRow = ({ r, index }: { r: Reply; index: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -14 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.45, delay: 0.5 + index * 0.12, ease: EASE }}
    className="flex items-center gap-3.5"
    style={{
      padding: "15px 18px",
      borderBottom: "1px solid rgba(15,28,24,0.06)",
      background: r.unread ? "rgba(34,130,111,0.035)" : "transparent",
    }}
  >
    {/* unread dot */}
    <span style={{ width: 8 }}>
      {r.unread && (
        <motion.span
          className="block rounded-full"
          style={{ width: 8, height: 8, background: BRAND.emerald, boxShadow: "0 0 8px rgba(82,254,191,0.8)" }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
    </span>

    <span
      className="grid place-items-center rounded-lg text-white font-bold shrink-0"
      style={{
        width: 38,
        height: 38,
        fontSize: 13,
        background: "linear-gradient(135deg, #22826F, #52FEBF)",
        boxShadow: "0 0 16px rgba(82,254,191,0.4)",
      }}
    >
      {r.initials}
    </span>

    <div className="min-w-0 flex-1">
      <p
        className="tracking-tight leading-tight truncate"
        style={{ fontSize: 14.5, color: BRAND.ink, fontWeight: r.unread ? 700 : 600 }}
      >
        {r.name}
      </p>
      <p className="tracking-tight leading-tight truncate" style={{ fontSize: 13, color: "rgba(15,28,24,0.55)", marginTop: 3 }}>
        {r.subject}
      </p>
    </div>

    <div className="flex flex-col items-end gap-1.5 shrink-0">
      <span style={{ fontSize: 11.5, color: "rgba(15,28,24,0.55)", fontWeight: 600 }}>{r.time}</span>
      {r.tag === "meeting" ? (
        <span
          className="flex items-center gap-1 rounded-md"
          style={{ padding: "3px 8px", background: "linear-gradient(135deg, #1C826E, #33B690)" }}
        >
          <CalendarCheck size={12} color="#fff" strokeWidth={2.5} />
          <span style={{ fontSize: 11, fontWeight: 700, color: "#fff" }}>Meeting</span>
        </span>
      ) : (
        <span
          className="flex items-center gap-1 rounded-md"
          style={{ padding: "3px 8px", background: "rgba(34,130,111,0.1)", border: "1px solid rgba(34,130,111,0.2)" }}
        >
          <CornerUpLeft size={12} color={BRAND.emerald} strokeWidth={2.5} />
          <span style={{ fontSize: 11, fontWeight: 700, color: BRAND.emerald }}>Replied</span>
        </span>
      )}
    </div>
  </motion.div>
);

const InboxCard = () => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.55, delay: 0.3, ease: EASE }}
    className="relative overflow-hidden rounded-2xl flex flex-col"
    style={{
      flex: "0 0 600px",
      background: "linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0.94) 100%)",
      border: "1px solid rgba(15,28,24,0.08)",
      boxShadow: "0 30px 70px -34px rgba(15,40,32,0.4)",
    }}
  >
    {/* Title bar */}
    <div className="flex items-center justify-between" style={{ padding: "16px 18px", borderBottom: "1px solid rgba(15,28,24,0.07)", background: "#FAFBFB" }}>
      <div className="flex items-center gap-2.5">
        <span className="rounded-full" style={{ width: 9, height: 9, background: BRAND.emerald, boxShadow: "0 0 8px rgba(82,254,191,0.8)" }} />
        <span className="font-bold tracking-tight" style={{ fontSize: 14, color: BRAND.ink }}>
          SDR AI Worker · Inbox
        </span>
      </div>
      <span className="font-semibold uppercase" style={{ fontSize: 10.5, letterSpacing: "0.14em", color: "rgba(15,28,24,0.55)" }}>
        3 new replies
      </span>
    </div>

    {/* Tabs */}
    <div className="flex items-center gap-1.5" style={{ padding: "12px 16px 10px" }}>
      <span
        className="flex items-center gap-1.5 rounded-full"
        style={{ padding: "6px 14px", background: "rgba(34,130,111,0.1)", border: "1px solid rgba(34,130,111,0.22)" }}
      >
        <MailCheck size={14} color={BRAND.emerald} strokeWidth={2.4} />
        <span className="font-bold tracking-tight" style={{ fontSize: 13, color: BRAND.emerald }}>Primary</span>
      </span>
      {["Promotions", "Spam"].map((t) => (
        <span key={t} className="rounded-full" style={{ padding: "6px 14px" }}>
          <span className="font-semibold tracking-tight" style={{ fontSize: 13, color: "rgba(15,28,24,0.32)" }}>{t}</span>
        </span>
      ))}
    </div>

    {/* Reply rows */}
    <div className="flex-1">
      {REPLIES.map((r, i) => (
        <ReplyRow key={r.initials} r={r} index={i} />
      ))}
    </div>

    {/* Footer */}
    <div className="flex items-center justify-between" style={{ padding: "12px 18px", background: "#FAFBFB", borderTop: "1px solid rgba(15,28,24,0.06)" }}>
      <span style={{ fontSize: 11.5, color: "rgba(15,28,24,0.55)" }}>Synced to Salesforce · HubSpot</span>
      <span className="flex items-center gap-1.5" style={{ fontSize: 11.5, fontWeight: 600, color: BRAND.emerald }}>
        <CornerUpLeft size={12} strokeWidth={2.5} /> auto-logged
      </span>
    </div>
  </motion.div>
);

const EmailBenefitsSlide = () => {
  return (
    <SlideFrame>
      <div className="absolute inset-0 flex flex-col justify-between" style={{ padding: "60px 54px 54px" }}>
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <Kicker delay={0.05}>What you get</Kicker>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: EASE }}
            className="font-medium tracking-tight"
            style={{ fontSize: 50, lineHeight: 1.04, color: BRAND.ink, marginTop: 16 }}
          >
            Lands in the <span className="font-extrabold">primary inbox.</span>
          </motion.h1>
        </div>

        {/* Split: inbox + benefits */}
        <div className="flex items-center" style={{ gap: 48 }}>
          <InboxCard />

          <div className="flex-1 flex flex-col" style={{ gap: 14 }}>
            {BENEFITS.map((b, i) => (
              <motion.div
                key={b.label}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: 0.55 + i * 0.1, ease: EASE }}
                className="flex items-center gap-4"
              >
                <span
                  className="grid place-items-center rounded-xl shrink-0"
                  style={{
                    width: 50,
                    height: 50,
                    background: "linear-gradient(180deg, #FFFFFF, rgba(255,255,255,0.9))",
                    border: "1px solid rgba(34,130,111,0.18)",
                    boxShadow: "0 10px 26px -18px rgba(15,40,32,0.35)",
                  }}
                >
                  <b.Icon size={23} color={BRAND.emerald} strokeWidth={2.1} />
                </span>
                <div>
                  <p className="font-bold tracking-tight leading-tight" style={{ fontSize: 19, color: BRAND.ink }}>
                    {b.label}
                  </p>
                  <p className="font-medium tracking-tight leading-tight" style={{ fontSize: 13.5, color: "rgba(15,28,24,0.58)", marginTop: 3 }}>
                    {b.sub}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SlideFrame>
  );
};

export default EmailBenefitsSlide;
