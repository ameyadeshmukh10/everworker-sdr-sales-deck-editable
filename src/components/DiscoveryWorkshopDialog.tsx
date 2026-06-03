import { useEffect, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Check, Compass, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function DiscoveryWorkshopDialog() {
  const [open, setOpen] = useState(false);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", title: "", focus: "", notes: "" });

  useEffect(() => {
    const handler = () => {
      setDone(false);
      setOpen(true);
    };
    window.addEventListener("open-discovery-workshop", handler);
    return () => window.removeEventListener("open-discovery-workshop", handler);
  }, []);

  useEffect(() => {
    if (!open) {
      setTimeout(() => {
        setForm({ name: "", email: "", company: "", title: "", focus: "", notes: "" });
        setDone(false);
      }, 200);
    }
  }, [open]);

  const valid = form.name.trim() && form.email.trim() && form.company.trim() && form.title.trim();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-lg p-0 gap-0 overflow-hidden border-border/60 rounded-2xl [&>button]:top-4 [&>button]:right-4 [&>button]:z-20">
        <AnimatePresence mode="wait">
          {!done ? (
            <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="p-8">
              <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground mb-4">
                <Compass className="h-3.5 w-3.5" />
                Discovery & shaping workshop
              </div>
              <h2 className="text-2xl font-bold tracking-tight mb-1">Request more information</h2>
              <p className="text-sm text-muted-foreground mb-6">
                Tell us a little about your team and we'll be in touch with details on our AI Worker discovery and
                shaping workshops.
              </p>
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
                  <Label className="text-xs font-medium text-muted-foreground mb-1.5 block">Company</Label>
                  <Input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value.slice(0, 100) })} placeholder="Acme Inc." />
                </div>
                <div className="col-span-2">
                  <Label className="text-xs font-medium text-muted-foreground mb-1.5 block">Job title</Label>
                  <Input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value.slice(0, 100) })} placeholder="VP Operations" />
                </div>
                <div className="col-span-2">
                  <Label className="text-xs font-medium text-muted-foreground mb-1.5 block">
                    Function or workflow in mind <span className="text-muted-foreground/50">(optional)</span>
                  </Label>
                  <Input value={form.focus} onChange={(e) => setForm({ ...form, focus: e.target.value.slice(0, 200) })} placeholder="e.g. HR onboarding, vendor ops, contract review" />
                </div>
                <div className="col-span-2">
                  <Label className="text-xs font-medium text-muted-foreground mb-1.5 block">
                    Anything else? <span className="text-muted-foreground/50">(optional)</span>
                  </Label>
                  <Textarea
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value.slice(0, 1000) })}
                    placeholder="A sentence or two on what you're hoping to explore."
                    className="min-h-[88px] resize-none"
                  />
                </div>
              </div>
              <Button
                disabled={!valid}
                onClick={() => setDone(true)}
                className="w-full mt-6 rounded-[4px] bg-foreground text-background hover:bg-foreground/90 h-11 gap-2"
              >
                Request more information <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>
          ) : (
            <motion.div key="done" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="p-10 text-center">
              <div className="mx-auto w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-5">
                <Check className="h-7 w-7 text-accent" strokeWidth={2.5} />
              </div>
              <h2 className="text-2xl font-bold tracking-tight mb-2">We'll be in touch, {form.name.split(" ")[0] || "there"}.</h2>
              <p className="text-sm text-muted-foreground mb-6">
                An EverWorker operator will reach out to <span className="font-medium text-foreground">{form.email}</span> with details on our discovery and shaping workshops.
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

export const openDiscoveryWorkshop = () => window.dispatchEvent(new Event("open-discovery-workshop"));
