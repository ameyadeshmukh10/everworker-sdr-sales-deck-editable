import { motion } from "framer-motion";
import {
  UserCheck,
  CornerUpLeft,
  Mic,
  CalendarCheck,
  ShieldCheck,
  UserPlus,
  Mail,
  Repeat,
  Check,
} from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { SlideFrame, Kicker, BRAND } from "../primitives";

const EASE: [number, number, number, number] = [0.22, 0.61, 0.36, 1];
const LI_BLUE = "#0A66C2";

type Activity = {
  initials: string;
  name: string;
  detail: string;
  kind: "connected" | "replied" | "voice" | "meeting";
  unread?: boolean;
};

const ACTIVITY: Activity[] = [
  { initials: "PS", name: "Priya Shah · Acme Corp", detail: "Connection request accepted", kind: "connected", unread: true },
  { initials: "MR", name: "Marcus Reid · Northwind", detail: "Re: a quick intro", kind: "replied", unread: true },
  { initials: "LP", name: "Lena Park · Globex", detail: "Voice note · 0:24", kind: "voice" },
  { initials: "JT", name: "Jordan Tate · Initech", detail: "Thursday · 2:00 PM", kind: "meeting" },
];

const CAPABILITIES = [
  { Icon: UserPlus, label: "Connect" },
  { Icon: Mail, label: "InMail" },
  { Icon: Repeat, label: "Sequence" },
  { Icon: Mic, label: "Voice note" },
  { Icon: CalendarCheck, label: "Schedule" },
];

const Waveform = () => (
  <span className="flex items-end gap-[2px]" style={{ height: 16 }}>
    {[6, 11, 8, 14, 9, 13, 7, 12, 6, 10, 5].map((h, i) => (
      <span key={i} className="rounded-full" style={{ width: 2.5, height: h, background: LI_BLUE, opacity: 0.55 }} />
    ))}
  </span>
);

const ActivityTag = ({ kind }: { kind: Activity["kind"] }) => {
  if (kind === "meeting") {
    return (
      <span className="flex items-center gap-1 rounded-md" style={{ padding: "3px 8px", background: "linear-gradient(135deg, #1C826E, #33B690)" }}>
        <CalendarCheck size={12} color="#fff" strokeWidth={2.5} />
        <span style={{ fontSize: 11, fontWeight: 700, color: "#fff" }}>Meeting</span>
      </span>
    );
  }
  if (kind === "replied") {
    return (
      <span className="flex items-center gap-1 rounded-md" style={{ padding: "3px 8px", background: "rgba(34,130,111,0.1)", border: "1px solid rgba(34,130,111,0.2)" }}>
        <CornerUpLeft size={12} color={BRAND.emerald} strokeWidth={2.5} />
        <span style={{ fontSize: 11, fontWeight: 700, color: BRAND.emerald }}>Replied</span>
      </span>
    );
  }
  if (kind === "connected") {
    return (
      <span className="flex items-center gap-1 rounded-md" style={{ padding: "3px 8px", background: "rgba(10,102,194,0.1)", border: "1px solid rgba(10,102,194,0.22)" }}>
        <UserCheck size={12} color={LI_BLUE} strokeWidth={2.5} />
        <span style={{ fontSize: 11, fontWeight: 700, color: LI_BLUE }}>Connected</span>
      </span>
    );
  }
  return <Waveform />;
};

const ActivityRow = ({ a, index }: { a: Activity; index: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -14 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.45, delay: 0.5 + index * 0.11, ease: EASE }}
    className="flex items-center gap-3.5"
    style={{
      padding: "14px 18px",
      borderBottom: "1px solid rgba(15,28,24,0.06)",
      background: a.unread ? "rgba(34,130,111,0.035)" : "transparent",
    }}
  >
    <span className="relative shrink-0">
      <span
        className="grid place-items-center rounded-lg text-white font-bold"
        style={{ width: 38, height: 38, fontSize: 13, background: "linear-gradient(135deg, #22826F, #52FEBF)", boxShadow: "0 0 16px rgba(82,254,191,0.35)" }}
      >
        {a.initials}
      </span>
      <span
        className="absolute grid place-items-center rounded-full"
        style={{ width: 16, height: 16, right: -3, bottom: -3, background: "#fff", border: "1px solid rgba(15,28,24,0.08)" }}
      >
        <FaLinkedin size={11} color={LI_BLUE} />
      </span>
    </span>

    <div className="min-w-0 flex-1">
      <p className="tracking-tight leading-tight truncate" style={{ fontSize: 14.5, color: BRAND.ink, fontWeight: a.unread ? 700 : 600 }}>
        {a.name}
      </p>
      <p className="tracking-tight leading-tight truncate" style={{ fontSize: 13, color: "rgba(15,28,24,0.55)", marginTop: 3 }}>
        {a.detail}
      </p>
    </div>

    <div className="shrink-0">
      <ActivityTag kind={a.kind} />
    </div>
  </motion.div>
);

const LinkedInCard = () => (
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
    <div className="flex items-center justify-between" style={{ padding: "16px 18px", borderBottom: "1px solid rgba(15,28,24,0.07)", background: "#FAFBFB" }}>
      <div className="flex items-center gap-2.5">
        <FaLinkedin size={18} color={LI_BLUE} />
        <span className="font-bold tracking-tight" style={{ fontSize: 14, color: BRAND.ink }}>
          SDR AI Worker · LinkedIn
        </span>
      </div>
      <span className="font-semibold uppercase" style={{ fontSize: 10.5, letterSpacing: "0.14em", color: "rgba(15,28,24,0.55)" }}>
        Today
      </span>
    </div>

    <div className="flex-1">
      {ACTIVITY.map((a, i) => (
        <ActivityRow key={a.initials} a={a} index={i} />
      ))}
    </div>

    <div className="flex items-center justify-between" style={{ padding: "12px 18px", background: "#FAFBFB", borderTop: "1px solid rgba(15,28,24,0.06)" }}>
      <span style={{ fontSize: 11.5, color: "rgba(15,28,24,0.55)" }}>Synced to Salesforce · HubSpot</span>
      <span className="flex items-center gap-1.5" style={{ fontSize: 11.5, fontWeight: 600, color: BRAND.emerald }}>
        <Check size={13} strokeWidth={2.5} /> auto-logged
      </span>
    </div>
  </motion.div>
);

const CompareBar = ({
  label,
  width,
  value,
  fill,
  valueColor,
  delay,
}: {
  label: string;
  width: string;
  value: string;
  fill: string;
  valueColor: string;
  delay: number;
}) => (
  <div>
    <div className="flex items-center justify-between" style={{ marginBottom: 7 }}>
      <span className="font-semibold tracking-tight" style={{ fontSize: 13.5, color: "rgba(15,28,24,0.6)" }}>{label}</span>
      <span className="font-bold tracking-tight" style={{ fontSize: 15, color: valueColor }}>{value}</span>
    </div>
    <div className="rounded-full overflow-hidden" style={{ height: 16, background: "rgba(15,28,24,0.06)" }}>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.7, delay, ease: EASE }}
        className="h-full rounded-full"
        style={{ width, background: fill, transformOrigin: "left center" }}
      />
    </div>
  </div>
);

const LinkedInBenefitsSlide = () => {
  return (
    <SlideFrame>
      <div className="absolute inset-0 flex flex-col justify-between" style={{ padding: "58px 54px 52px" }}>
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <Kicker delay={0.05}>What you get</Kicker>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: EASE }}
            className="font-medium tracking-tight"
            style={{ fontSize: 50, lineHeight: 1.04, color: BRAND.ink, marginTop: 14 }}
          >
            2x the replies, <span className="font-extrabold">safely scaled.</span>
          </motion.h1>
        </div>

        {/* Split */}
        <div className="flex items-center" style={{ gap: 48 }}>
          <LinkedInCard />

          <div className="flex-1 flex flex-col" style={{ gap: 30 }}>
            {/* Comparison bars */}
            <div>
              <p className="font-bold uppercase" style={{ fontSize: 11.5, letterSpacing: "0.16em", color: "rgba(15,28,24,0.55)", marginBottom: 16 }}>
                Response rates & meetings
              </p>
              <div className="flex flex-col" style={{ gap: 16 }}>
                <CompareBar
                  label="Email alone"
                  width="50%"
                  value="1x"
                  fill="rgba(15,28,24,0.32)"
                  valueColor="rgba(15,28,24,0.58)"
                  delay={0.6}
                />
                <CompareBar
                  label="LinkedIn + Email"
                  width="100%"
                  value="2x"
                  fill="linear-gradient(90deg, #22826F, #52FEBF)"
                  valueColor={BRAND.emerald}
                  delay={0.78}
                />
              </div>
            </div>

            {/* Capability chips */}
            <div className="flex flex-wrap" style={{ gap: 8 }}>
              {CAPABILITIES.map((c, i) => (
                <motion.span
                  key={c.label}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.0 + i * 0.06, ease: EASE }}
                  className="flex items-center gap-1.5 rounded-full"
                  style={{ padding: "7px 13px", background: "rgba(34,130,111,0.08)", border: "1px solid rgba(34,130,111,0.18)" }}
                >
                  <c.Icon size={14} color={BRAND.emerald} strokeWidth={2.2} />
                  <span className="font-semibold tracking-tight" style={{ fontSize: 13, color: BRAND.ink }}>{c.label}</span>
                </motion.span>
              ))}
            </div>

            {/* Scale-safely benefit */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: 1.3, ease: EASE }}
              className="flex items-center gap-4"
            >
              <span
                className="grid place-items-center rounded-xl shrink-0"
                style={{ width: 50, height: 50, background: "linear-gradient(180deg, #FFFFFF, rgba(255,255,255,0.9))", border: "1px solid rgba(34,130,111,0.18)", boxShadow: "0 10px 26px -18px rgba(15,40,32,0.35)" }}
              >
                <ShieldCheck size={23} color={BRAND.emerald} strokeWidth={2.1} />
              </span>
              <div>
                <p className="font-bold tracking-tight leading-tight" style={{ fontSize: 19, color: BRAND.ink }}>
                  Scale safely and predictably
                </p>
                <p className="font-medium tracking-tight leading-tight" style={{ fontSize: 13.5, color: "rgba(15,28,24,0.58)", marginTop: 3 }}>
                  every account stays within human limits
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </SlideFrame>
  );
};

export default LinkedInBenefitsSlide;
