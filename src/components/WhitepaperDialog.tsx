import { useEffect, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Download, Check, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const WHITEPAPER_LABELS: Record<string, string> = {
  all: "The AI-First Playbook",
  marketing: "The AI-First Playbook · Marketing",
  sales: "The AI-First Playbook · Sales",
  finance: "The AI-First Playbook · Finance",
};

export function WhitepaperDialog() {
  const [open, setOpen] = useState(false);
  const [done, setDone] = useState(false);
  const [whitepaper, setWhitepaper] = useState<string>("all");
  const [form, setForm] = useState({ name: "", email: "", title: "" });

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail as { whitepaper?: string } | undefined;
      setWhitepaper(detail?.whitepaper || "all");
      setDone(false);
      setOpen(true);
    };
    window.addEventListener("open-whitepaper", handler);
    return () => window.removeEventListener("open-whitepaper", handler);
  }, []);

  useEffect(() => {
    if (!open) {
      setTimeout(() => {
        setForm({ name: "", email: "", title: "" });
        setDone(false);
      }, 200);
    }
  }, [open]);

  const valid = form.name.trim() && form.email.trim() && form.title.trim();
  const label = WHITEPAPER_LABELS[whitepaper] || WHITEPAPER_LABELS.all;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md p-0 gap-0 overflow-hidden border-border/60 rounded-2xl [&>button]:top-4 [&>button]:right-4 [&>button]:z-20">
        <AnimatePresence mode="wait">
          {!done ? (
            <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="p-8">
              <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground mb-4">
                <FileText className="h-3.5 w-3.5" />
                Whitepaper
              </div>
              <h2 className="text-2xl font-bold tracking-tight mb-1">{label}</h2>
              <p className="text-sm text-muted-foreground mb-6">Enter your details to download the PDF.</p>
              <div className="space-y-4">
                <div>
                  <Label className="text-xs font-medium text-muted-foreground mb-1.5 block">Full name</Label>
                  <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value.slice(0, 100) })} placeholder="Jane Doe" />
                </div>
                <div>
                  <Label className="text-xs font-medium text-muted-foreground mb-1.5 block">Work email</Label>
                  <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value.slice(0, 255) })} placeholder="jane@company.com" />
                </div>
                <div>
                  <Label className="text-xs font-medium text-muted-foreground mb-1.5 block">Job title</Label>
                  <Input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value.slice(0, 100) })} placeholder="VP Operations" />
                </div>
              </div>
              <Button
                disabled={!valid}
                onClick={() => setDone(true)}
                className="w-full mt-6 rounded-[4px] bg-foreground text-background hover:bg-foreground/90 h-11 gap-2"
              >
                <Download className="h-4 w-4" />
                Download whitepaper
              </Button>
            </motion.div>
          ) : (
            <motion.div key="done" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="p-10 text-center">
              <div className="mx-auto w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-5">
                <Check className="h-7 w-7 text-accent" strokeWidth={2.5} />
              </div>
              <h2 className="text-2xl font-bold tracking-tight mb-2">Check your inbox</h2>
              <p className="text-sm text-muted-foreground mb-6">
                We've sent <span className="font-medium text-foreground">{label}</span> to <span className="font-medium text-foreground">{form.email}</span>.
              </p>
              <Button onClick={() => setOpen(false)} className="rounded-[4px] bg-foreground text-background hover:bg-foreground/90 h-11 px-6">
                Done
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}

export const openWhitepaper = (whitepaper: "all" | "marketing" | "sales" | "finance") =>
  window.dispatchEvent(new CustomEvent("open-whitepaper", { detail: { whitepaper } }));
