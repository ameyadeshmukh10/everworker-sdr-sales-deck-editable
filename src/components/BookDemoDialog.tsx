import { useEffect, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Check, Calendar as CalendarIcon, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Step = 1 | 2 | 3;

const TIMES = ["9:00 am", "9:30 am", "10:00 am", "10:30 am", "11:00 am", "1:00 pm", "1:30 pm", "2:00 pm", "2:30 pm", "3:00 pm", "3:30 pm", "4:00 pm"];

const PAGE_INTEREST: { match: RegExp; value: string }[] = [
  { match: /^\/marketing\/content-operations/, value: "Content Operations AI Worker" },
  { match: /^\/marketing\/seo/, value: "Content Operations AI Worker" },
  { match: /^\/marketing\/advertising/, value: "Advertising AI Worker" },
  { match: /^\/marketing\/content/, value: "Conversion Assets AI Worker (early access)" },
  { match: /^\/marketing/, value: "Marketing AI workers" },
  { match: /^\/sales\/sdr/, value: "SDR AI Worker" },
  { match: /^\/sales\/playbook/, value: "Sales Playbook AI Worker" },
  { match: /^\/sales\/pipeline/, value: "Pipeline Reporting AI Worker" },
  { match: /^\/sales/, value: "Sales AI workers" },
  { match: /^\/finance\/cash-flow/, value: "Cash Flow AI Worker" },
  { match: /^\/finance\/accounts-payable/, value: "Accounts Payable AI Worker" },
  { match: /^\/finance\/accounts-receivable/, value: "Accounts Receivable AI Worker" },
  { match: /^\/finance/, value: "Finance AI workers" },
];

const inferInterest = (path: string): string => {
  for (const { match, value } of PAGE_INTEREST) if (match.test(path)) return value;
  return "";
};

function buildMonth(base: Date) {
  const year = base.getFullYear();
  const month = base.getMonth();
  const first = new Date(year, month, 1);
  const startWeekday = first.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (Date | null)[] = [];
  for (let i = 0; i < startWeekday; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, month, d));
  while (cells.length % 7 !== 0) cells.push(null);
  return { cells, label: first.toLocaleString("en-US", { month: "long", year: "numeric" }) };
}

const isPast = (d: Date) => {
  const today = new Date(); today.setHours(0, 0, 0, 0);
  return d < today;
};
const isWeekend = (d: Date) => d.getDay() === 0 || d.getDay() === 6;

export function BookDemoDialog() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>(1);
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", title: "" });
  const [interest, setInterest] = useState("");
  const [monthOffset, setMonthOffset] = useState(0);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  useEffect(() => {
    const handler = () => {
      setStep(1);
      setInterest(inferInterest(window.location.pathname));
      setOpen(true);
    };
    window.addEventListener("open-book-demo", handler);
    return () => window.removeEventListener("open-book-demo", handler);
  }, []);

  useEffect(() => {
    if (!open) {
      setTimeout(() => {
        setStep(1); setForm({ name: "", email: "", phone: "", company: "", title: "" });
        setInterest("");
        setSelectedDate(null); setSelectedTime(null); setMonthOffset(0);
      }, 200);
    }
  }, [open]);

  const step1Valid = form.name.trim() && form.email.trim() && form.company.trim() && form.title.trim();

  const base = new Date();
  base.setMonth(base.getMonth() + monthOffset);
  const { cells, label } = buildMonth(base);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-3xl p-0 gap-0 overflow-hidden border-border/60 rounded-2xl [&>button]:top-4 [&>button]:right-4 [&>button]:z-20">
        <div className="flex items-center justify-between px-6 py-4 pr-14 border-b border-border/60">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              {[1, 2, 3].map((n) => (
                <div key={n} className={`h-1.5 rounded-full transition-all duration-300 ${step >= n ? "w-8 bg-foreground" : "w-4 bg-muted"}`} />
              ))}
            </div>
            <span className="text-xs font-medium text-muted-foreground tracking-wide">
              {step === 1 ? "About you" : step === 2 ? "Pick a time" : "Confirmed"}
            </span>
          </div>
          <span className="text-xs text-muted-foreground">Demo · 30 min</span>
        </div>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div key="s1" initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -8 }} transition={{ duration: 0.2 }} className="p-8">
              <h2 className="text-2xl font-bold tracking-tight mb-1">Tell us about yourself</h2>
              <p className="text-sm text-muted-foreground mb-6">A few details so we can tailor the demo to your team.</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <Label className="text-xs font-medium text-muted-foreground mb-1.5 block">Full name</Label>
                  <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value.slice(0, 100) })} placeholder="Jane Doe" />
                </div>
                <div>
                  <Label className="text-xs font-medium text-muted-foreground mb-1.5 block">Work email</Label>
                  <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value.slice(0, 255) })} placeholder="jane@company.com" />
                </div>
                <div>
                  <Label className="text-xs font-medium text-muted-foreground mb-1.5 block">Phone <span className="text-muted-foreground/50">(optional)</span></Label>
                  <Input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value.slice(0, 30) })} placeholder="+1 (555) 000-0000" />
                </div>
                <div>
                  <Label className="text-xs font-medium text-muted-foreground mb-1.5 block">Company</Label>
                  <Input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value.slice(0, 100) })} placeholder="Acme Inc." />
                </div>
                <div>
                  <Label className="text-xs font-medium text-muted-foreground mb-1.5 block">Job title</Label>
                  <Input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value.slice(0, 100) })} placeholder="VP Operations" />
                </div>
              </div>
              <div className="mt-4">
                <Label className="text-xs font-medium text-muted-foreground mb-1.5 block">
                  What are you interested in? <span className="text-muted-foreground/50">(optional)</span>
                </Label>
                <Input
                  value={interest}
                  onChange={(e) => setInterest(e.target.value.slice(0, 200))}
                  placeholder="e.g. SDR AI Worker, Cash Flow forecasting, custom workers"
                />
              </div>
              <div className="flex justify-end mt-8">
                <Button disabled={!step1Valid} onClick={() => setStep(2)} className="rounded-[4px] bg-foreground text-background hover:bg-foreground/90 h-11 px-6 gap-2">
                  Continue <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div key="s2" initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -8 }} transition={{ duration: 0.2 }} className="p-8">
              <h2 className="text-2xl font-bold tracking-tight mb-1">Select a date and time</h2>
              <p className="text-sm text-muted-foreground mb-6">30-minute demo · America / New York</p>
              <div className="grid grid-cols-1 md:grid-cols-[1fr_220px] gap-6">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <button onClick={() => setMonthOffset((m) => Math.max(0, m - 1))} className="p-1.5 rounded hover:bg-secondary text-muted-foreground disabled:opacity-30" disabled={monthOffset === 0}>
                      <ArrowLeft className="h-4 w-4" />
                    </button>
                    <p className="text-sm font-semibold">{label}</p>
                    <button onClick={() => setMonthOffset((m) => Math.min(3, m + 1))} className="p-1.5 rounded hover:bg-secondary text-muted-foreground">
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="grid grid-cols-7 gap-1 mb-1">
                    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                      <div key={d} className="text-[11px] text-center text-muted-foreground py-1">{d}</div>
                    ))}
                  </div>
                  <div className="grid grid-cols-7 gap-1">
                    {cells.map((d, i) => {
                      if (!d) return <div key={i} />;
                      const disabled = isPast(d) || isWeekend(d);
                      const selected = selectedDate?.toDateString() === d.toDateString();
                      return (
                        <button
                          key={i}
                          disabled={disabled}
                          onClick={() => { setSelectedDate(d); setSelectedTime(null); }}
                          className={`aspect-square text-sm rounded-full transition-colors ${
                            disabled ? "text-muted-foreground/30 cursor-not-allowed" :
                            selected ? "bg-foreground text-background font-semibold" :
                            "bg-accent/10 text-accent font-medium hover:bg-accent/20"
                          }`}
                        >
                          {d.getDate()}
                        </button>
                      );
                    })}
                  </div>
                </div>
                <div className="border-l border-border/60 pl-6 md:pl-6 -ml-0 md:-ml-2">
                  <p className="text-xs font-semibold text-foreground mb-3">
                    {selectedDate ? selectedDate.toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric" }) : "Select a date"}
                  </p>
                  <div className="space-y-2 max-h-[280px] overflow-y-auto pr-1">
                    {selectedDate && TIMES.map((t) => (
                      <button
                        key={t}
                        onClick={() => setSelectedTime(t)}
                        className={`w-full text-sm py-2.5 rounded-full border transition-colors ${
                          selectedTime === t
                            ? "bg-foreground text-background border-foreground"
                            : "border-border hover:border-foreground/50"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center mt-8">
                <button onClick={() => setStep(1)} className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1.5">
                  <ArrowLeft className="h-3.5 w-3.5" /> Back
                </button>
                <Button disabled={!selectedDate || !selectedTime} onClick={() => setStep(3)} className="rounded-[4px] bg-foreground text-background hover:bg-foreground/90 h-11 px-6 gap-2">
                  Confirm booking <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div key="s3" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="p-10 text-center">
              <div className="mx-auto w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-5">
                <Check className="h-7 w-7 text-accent" strokeWidth={2.5} />
              </div>
              <h2 className="text-2xl font-bold tracking-tight mb-2">You're booked, {form.name.split(" ")[0] || "there"}.</h2>
              <p className="text-sm text-muted-foreground max-w-md mx-auto mb-6">
                We've sent a calendar invite to <span className="font-medium text-foreground">{form.email}</span>. An EverWorker operator will join you to walk through your AI workforce.
              </p>
              <div className="inline-flex flex-col gap-2 px-6 py-4 rounded-xl bg-secondary/50 border border-border/60 text-left">
                <div className="flex items-center gap-2.5 text-sm">
                  <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">{selectedDate?.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" })}</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">{selectedTime} · 30 min</span>
                </div>
              </div>
              <div className="mt-8">
                <Button onClick={() => setOpen(false)} className="rounded-[4px] bg-foreground text-background hover:bg-foreground/90 h-11 px-6">
                  Done
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}

export const openBookDemo = () => window.dispatchEvent(new Event("open-book-demo"));
