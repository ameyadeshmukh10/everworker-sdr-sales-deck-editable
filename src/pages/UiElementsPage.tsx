import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, Mail, Calendar, CheckCircle2, Linkedin, User } from "lucide-react";

/**
 * UI Elements page — vertical column of 3:2 framed marketing illustrations.
 * Each frame is one balanced composition. Light, clean, on-brand. No animation.
 */
const UiElementsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-24">
        <div className="max-w-5xl 2xl:max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col gap-10 lg:gap-14">
            <LeadResearchFrame />
            <PersonalizedMessagingFrame />
            <OutreachSequenceFrame />
            <MeetingBookedFrame />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

/* 3:2 frame — light airy background, square corners, subtle glow + noise */
const Frame = ({ children }: { children: React.ReactNode }) => (
  <div
    className="relative w-full overflow-hidden border border-black/[0.06] shadow-[0_20px_60px_-30px_rgba(15,40,32,0.18)]"
    style={{
      aspectRatio: "3 / 2",
      background:
        "radial-gradient(ellipse 75% 60% at 80% 15%, rgba(82,254,191,0.16) 0%, transparent 60%), radial-gradient(ellipse 55% 45% at 15% 95%, rgba(34,130,111,0.08) 0%, transparent 65%), linear-gradient(180deg, #FBFCFB 0%, #F1F5F3 100%)",
    }}
  >
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.3] mix-blend-multiply"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
      }}
    />
    {children}
  </div>
);

const Card = ({
  children,
  className = "",
  style = {},
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) => (
  <div
    className={`relative border border-black/[0.06] ${className}`}
    style={{
      background:
        "linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.88) 100%)",
      backdropFilter: "blur(14px)",
      boxShadow:
        "0 1px 0 rgba(255,255,255,0.9) inset, 0 18px 40px -24px rgba(15,40,32,0.22)",
      ...style,
    }}
  >
    {children}
  </div>
);

const Line = ({
  w,
  h = 6,
  color = "rgba(15,28,24,0.35)",
}: {
  w: string;
  h?: number;
  color?: string;
}) => (
  <div style={{ width: w, height: h, background: color, borderRadius: 999 }} />
);

/* ---------- 1) LEAD RESEARCH ---------- */
const LeadResearchFrame = () => (
  <Frame>
    <div className="absolute inset-0 p-[5%] flex flex-col gap-[3%]">
      {/* Search bar */}
      <Card className="flex items-center gap-3 px-5 py-3.5 shrink-0">
        <Search className="h-[18px] w-[18px] text-[#22826F]" />
        <span className="text-[15px] text-[#0F1C18] font-medium tracking-tight">
          Researching <span className="text-[#22826F]">Acme Corp</span>
        </span>
        <span className="ml-auto flex gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[#22826F]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#22826F]/55" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#22826F]/25" />
        </span>
      </Card>

      {/* Contact card — fills remaining height */}
      <Card className="flex-1 min-h-0 p-6 sm:p-7 flex flex-col">
        <div className="flex items-center gap-4">
          <div
            className="h-14 w-14 flex items-center justify-center text-white text-base font-bold tracking-tight shrink-0"
            style={{
              background: "linear-gradient(135deg, #22826F, #52FEBF)",
              boxShadow: "0 0 28px rgba(82,254,191,0.55)",
            }}
          >
            SK
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[#0F1C18] text-[17px] font-semibold leading-tight truncate">
              Sarah Kim
            </p>
            <p className="text-[#0F1C18]/65 text-[13px] leading-tight mt-1 truncate">
              VP Revenue Ops · Acme Corp
            </p>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-auto pt-5 flex items-end gap-6">
          <div className="flex flex-col gap-1.5">
            <span className="text-[10px] tracking-wider text-[#0F1C18]/45 font-semibold">
              FIT
            </span>
            <span className="text-[#22826F] text-[20px] font-bold leading-none">92</span>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-[10px] tracking-wider text-[#0F1C18]/45 font-semibold">
              SIGNALS
            </span>
            <span className="text-[#0F1C18] text-[20px] font-bold leading-none">7</span>
          </div>
          <div className="flex-1 flex flex-col gap-2 pb-1">
            <Line w="80%" h={5} />
            <Line w="55%" h={5} />
          </div>
        </div>
      </Card>
    </div>
  </Frame>
);

/* ---------- 2) PERSONALIZED MESSAGING ---------- */
const PersonalizedMessagingFrame = () => (
  <Frame>
    <div className="absolute inset-0 p-[5%]">
      <Card className="h-full w-full p-6 sm:p-8 flex flex-col gap-5">
        {/* Header */}
        <div className="flex items-center gap-3 pb-4 border-b border-black/[0.06]">
          <Mail className="h-[18px] w-[18px] text-[#22826F] shrink-0" />
          <div className="flex-1 flex flex-col gap-1.5 min-w-0">
            <Line w="40%" h={6} color="rgba(15,28,24,0.6)" />
            <Line w="22%" h={5} color="rgba(15,28,24,0.28)" />
          </div>
          <span
            className="text-[10px] font-semibold tracking-wider px-2.5 py-1 text-[#0B3A30] shrink-0"
            style={{
              background: "linear-gradient(135deg, #52FEBF, #22826F)",
              boxShadow: "0 0 18px rgba(82,254,191,0.5)",
            }}
          >
            PERSONALIZED
          </span>
        </div>

        {/* Body */}
        <div className="flex-1 min-h-0 flex flex-col gap-3 justify-center">
          <Line w="92%" h={7} />
          <Line w="84%" h={7} />
          <div
            className="h-2.5 rounded-full"
            style={{
              width: "58%",
              background: "linear-gradient(90deg, #22826F, #52FEBF)",
              boxShadow: "0 0 14px rgba(82,254,191,0.55)",
            }}
          />
          <Line w="88%" h={7} />
          <Line w="76%" h={7} />
          <Line w="44%" h={7} />
        </div>

        {/* Cursor */}
        <div className="flex items-center gap-2">
          <div className="h-3.5 w-[2px] bg-[#22826F]" />
          <span className="text-[10px] text-[#0F1C18]/45 tracking-wider font-semibold">
            DRAFTING
          </span>
        </div>
      </Card>
    </div>
  </Frame>
);

/* ---------- 3) OUTREACH SEQUENCE ---------- */
const OutreachSequenceFrame = () => {
  const steps = [
    { day: "Day 1", label: "Email", Icon: Mail, done: true },
    { day: "Day 3", label: "LinkedIn", Icon: Linkedin, done: true },
    { day: "Day 6", label: "Email", Icon: Mail, done: false },
    { day: "Day 10", label: "Reply", Icon: User, done: false },
    { day: "Day 14", label: "Email", Icon: Mail, done: false },
  ];
  return (
    <Frame>
      <div className="absolute inset-0 p-[5%]">
        <Card className="h-full w-full p-6 sm:p-10 flex flex-col">
          {/* Title row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Calendar className="h-[18px] w-[18px] text-[#22826F]" />
              <span className="text-[13px] font-semibold text-[#0F1C18] tracking-tight">
                Outreach sequence
              </span>
            </div>
            <span className="text-[10px] font-semibold tracking-wider text-[#22826F]">
              SCHEDULED
            </span>
          </div>

          {/* Timeline — vertically centered, fills */}
          <div className="flex-1 flex items-center">
            <div className="relative w-full">
              <div
                className="absolute left-[6%] right-[6%] top-1/2 -translate-y-1/2 h-[2px]"
                style={{
                  background:
                    "linear-gradient(90deg, #22826F 0%, #52FEBF 38%, rgba(34,130,111,0.18) 55%, rgba(34,130,111,0.18) 100%)",
                }}
              />
              <div className="relative flex justify-between items-center px-[2%]">
                {steps.map((s, i) => (
                  <div key={i} className="flex flex-col items-center gap-2.5 w-[18%]">
                    <span className="text-[10px] sm:text-[11px] font-semibold tracking-wide text-[#0F1C18]/55">
                      {s.day}
                    </span>
                    <div
                      className="h-5 w-5 rounded-full border-[2px] border-white flex items-center justify-center"
                      style={{
                        background: s.done
                          ? "linear-gradient(135deg, #22826F, #52FEBF)"
                          : "#FFFFFF",
                        boxShadow: s.done
                          ? "0 0 16px rgba(82,254,191,0.7), 0 0 0 2px rgba(34,130,111,0.55)"
                          : "0 0 0 2px rgba(34,130,111,0.32)",
                      }}
                    />
                    <div className="flex items-center gap-1 text-[#0F1C18]/75">
                      <s.Icon className="h-3 w-3" />
                      <span className="text-[10px] sm:text-[11px]">{s.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer progress */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-1 bg-black/[0.06] rounded-full overflow-hidden">
              <div
                className="h-full"
                style={{
                  width: "40%",
                  background: "linear-gradient(90deg, #22826F, #52FEBF)",
                  boxShadow: "0 0 10px rgba(82,254,191,0.6)",
                }}
              />
            </div>
            <span className="text-[10px] font-semibold tracking-wider text-[#0F1C18]/55">
              2 / 5
            </span>
          </div>
        </Card>
      </div>
    </Frame>
  );
};

/* ---------- 4) MEETING BOOKED + CRM ---------- */
const MeetingBookedFrame = () => (
  <Frame>
    <div className="absolute inset-0 p-[5%] flex gap-[3%]">
      {/* Left: meeting confirmation */}
      <Card className="flex-1 min-w-0 p-6 sm:p-7 flex flex-col">
        <div className="flex items-center gap-2.5">
          <div
            className="h-8 w-8 flex items-center justify-center shrink-0"
            style={{
              background: "linear-gradient(135deg, #22826F, #52FEBF)",
              boxShadow: "0 0 22px rgba(82,254,191,0.6)",
            }}
          >
            <CheckCircle2 className="h-[18px] w-[18px] text-white" strokeWidth={2.5} />
          </div>
          <span className="text-[10px] font-semibold tracking-wider text-[#22826F]">
            MEETING BOOKED
          </span>
        </div>

        <div className="mt-5 flex flex-col gap-2.5">
          <Line w="75%" h={8} color="rgba(15,28,24,0.55)" />
          <Line w="50%" h={5} />
        </div>

        <div className="mt-auto pt-5 flex items-center gap-3">
          <div
            className="h-12 w-12 flex flex-col items-center justify-center text-white shrink-0"
            style={{ background: "linear-gradient(160deg, #0F1C18, #1d3530)" }}
          >
            <span className="text-[8px] font-semibold tracking-wider opacity-70">
              THU
            </span>
            <span className="text-[16px] font-bold leading-none">14</span>
          </div>
          <div className="flex-1 min-w-0 flex flex-col gap-1.5">
            <Line w="80%" h={6} color="rgba(15,28,24,0.55)" />
            <Line w="55%" h={5} />
          </div>
        </div>
      </Card>

      {/* Right: CRM updates */}
      <Card className="flex-1 min-w-0 p-6 sm:p-7 flex flex-col">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-semibold tracking-wider text-[#0F1C18]/55">
            CRM · UPDATED
          </span>
          <span
            className="h-2 w-2 rounded-full"
            style={{
              background: "#52FEBF",
              boxShadow: "0 0 10px rgba(82,254,191,0.9)",
            }}
          />
        </div>

        <div className="flex-1 min-h-0 flex flex-col justify-center gap-3.5">
          {[
            { w: "32%", v: "62%", hl: true },
            { w: "28%", v: "48%" },
            { w: "38%", v: "55%" },
            { w: "26%", v: "42%" },
          ].map((row, i) => (
            <div key={i} className="flex items-center gap-3">
              <div
                className="h-1.5 rounded-full bg-[#0F1C18]/25 shrink-0"
                style={{ width: row.w }}
              />
              <div
                className="h-2 rounded-full shrink-0"
                style={{
                  width: row.v,
                  background: row.hl
                    ? "linear-gradient(90deg, #22826F, #52FEBF)"
                    : "rgba(15,28,24,0.5)",
                  boxShadow: row.hl ? "0 0 12px rgba(82,254,191,0.55)" : "none",
                }}
              />
              <CheckCircle2 className="ml-auto h-3.5 w-3.5 text-[#22826F] shrink-0" />
            </div>
          ))}
        </div>
      </Card>
    </div>
  </Frame>
);

export default UiElementsPage;
