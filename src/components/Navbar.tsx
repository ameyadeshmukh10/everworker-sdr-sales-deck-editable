import { useEffect, useState } from "react";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import everworkerLogo from "@/assets/everworker-logo.svg";
import { openBookDemo } from "@/components/BookDemoDialog";

type Department = "marketing" | "sales" | "finance";

const departmentNav: { id: Department; label: string; solutionsHref: string; solutionsLabel: string }[] = [
  { id: "marketing", label: "Marketing", solutionsHref: "/marketing", solutionsLabel: "Marketing Solutions" },
  { id: "sales", label: "Sales", solutionsHref: "/sales", solutionsLabel: "Sales Solutions" },
  { id: "finance", label: "Finance", solutionsHref: "/finance", solutionsLabel: "Finance Solutions" },
];

const deptWorkers: Record<Department, { name: string; role: string; href: string; comingSoon?: boolean }[]> = {
  marketing: [
    { name: "Content Operations AI Worker", role: "Always-on, on-brand content pipeline", href: "/marketing/content-operations" },
    { name: "Advertising AI Worker", role: "Paid media at scale", href: "/marketing/advertising" },
    { name: "Conversion Assets AI Worker", role: "Whitepapers, eBooks & rich design assets", href: "/marketing/content", comingSoon: true },
  ],
  sales: [
    { name: "SDR AI Worker", role: "Instant lead qualification", href: "/sales/sdr" },
    { name: "Sales Playbook AI Worker", role: "Context-driven talk tracks", href: "/sales/playbook" },
    { name: "Pipeline Reporting AI Worker", role: "Real-time deal intelligence", href: "/sales/pipeline" },
  ],
  finance: [
    { name: "Accts. Payable AI Worker", role: "Zero-touch invoice processing", href: "/finance/accounts-payable" },
    { name: "Accts. Receivable AI Worker", role: "Automated collections", href: "/finance/accounts-receivable" },
    { name: "Cash Flow AI Worker", role: "Forecasts, optimizes and protects liquidity", href: "/finance/cash-flow" },
  ],
};

const howItWorksLinks: { name: string; role: string; href: string }[] = [
  { name: "How it works", role: "Our four-step partnership", href: "/how-it-works" },
  { name: "Platform", role: "Inside the EverWorker platform", href: "/platform" },
  { name: "Services", role: "Discovery, shaping, enablement", href: "/services" },
  { name: "UI Elements", role: "Illustrative library of in-product moments", href: "/ui-elements" },
  { name: "Our story & team", role: "The story and people behind EverWorker", href: "/our-team" },
];

const Navbar = () => {
  const [openDept, setOpenDept] = useState<Department | null>(null);
  const [howOpen, setHowOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = typeof window !== "undefined" ? window.location.pathname : "/";

  const isDeptActive = (id: Department) => pathname === `/${id}` || pathname.startsWith(`/${id}/`);
  const isHowActive = ["/how-it-works", "/platform", "/services", "/ui-elements", "/our-team"].includes(pathname);
  const isOtherActive = pathname === "/other-departments";
  const activeText = "text-foreground";
  const inactiveText = "text-muted-foreground hover:text-foreground";
  const activeUnderline = "after:content-[''] after:absolute after:left-4 after:right-4 after:-bottom-0.5 after:h-[2px] after:bg-accent after:rounded-full";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 glass-strong transition-shadow duration-300 ease-out ${
        scrolled ? "shadow-[0_4px_20px_-4px_hsl(240_10%_6%/0.08)]" : "shadow-none"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center">
            <img src={everworkerLogo} alt="EverWorker" className="h-6" />
          </a>

          <div className="hidden md:flex items-center gap-1">
            {departmentNav.map((dept) => (
              <div
                key={dept.id}
                className="relative"
                onMouseEnter={() => setOpenDept(dept.id)}
                onMouseLeave={() => setOpenDept(null)}
              >
                <button className={`relative flex items-center gap-1 px-4 py-2 text-[15px] font-medium transition-colors duration-200 rounded-lg ${isDeptActive(dept.id) ? `${activeText} ${activeUnderline}` : inactiveText}`}>
                  {dept.label}
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${openDept === dept.id ? "rotate-180" : ""}`} />
                </button>

                {openDept === dept.id && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[280px]">
                    <div className="rounded-2xl p-5 shadow-xl shadow-black/5 bg-white/95 backdrop-blur-2xl border border-white/60">
                       <a
                         href={dept.solutionsHref}
                         className="block w-full text-center px-4 py-2 rounded-[4px] bg-accent text-white text-sm font-semibold hover:bg-accent/90 transition-colors duration-150 mb-4"
                       >
                         {dept.solutionsLabel}
                       </a>
                      <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-[0.15em] mb-3">
                        Core workers
                      </p>
                      <div className="space-y-1">
                        {deptWorkers[dept.id].map((worker) => (
                          <a
                            key={worker.name}
                            href={worker.href}
                            className={`block px-3 py-2.5 rounded-xl transition-colors duration-150 ${pathname === worker.href ? "bg-secondary ring-1 ring-accent/30" : "hover:bg-secondary"}`}
                          >
                            <div className="flex items-center gap-2">
                              <p className={`text-[15px] font-semibold ${pathname === worker.href ? "text-accent" : "text-foreground"}`}>{worker.name}</p>
                              {worker.comingSoon && (
                                <span className="text-[9px] font-semibold uppercase tracking-widest text-accent border border-accent/30 rounded-full px-1.5 py-0.5">Soon</span>
                              )}
                            </div>
                            <p className="text-[13px] text-muted-foreground mt-0.5">{worker.role}</p>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            <a
              href="/other-departments"
              className={`relative px-4 py-2 text-[15px] font-medium transition-colors duration-200 ${isOtherActive ? `${activeText} ${activeUnderline}` : inactiveText}`}
            >
              Other depts.
            </a>

            <div
              className="relative"
              onMouseEnter={() => setHowOpen(true)}
              onMouseLeave={() => setHowOpen(false)}
            >
              <button className={`relative flex items-center gap-1 px-4 py-2 text-[15px] font-medium transition-colors duration-200 rounded-lg ${isHowActive ? `${activeText} ${activeUnderline}` : inactiveText}`}>
                How it works
                <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${howOpen ? "rotate-180" : ""}`} />
              </button>
              {howOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[300px]">
                  <div className="rounded-2xl p-3 shadow-xl shadow-black/5 bg-white/95 backdrop-blur-2xl border border-white/60">
                    {howItWorksLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        className={`block px-3 py-2.5 rounded-xl transition-colors duration-150 ${pathname === link.href ? "bg-secondary ring-1 ring-accent/30" : "hover:bg-secondary"}`}
                      >
                        <p className={`text-[15px] font-semibold ${pathname === link.href ? "text-accent" : "text-foreground"}`}>{link.name}</p>
                        <p className="text-[13px] text-muted-foreground mt-0.5">{link.role}</p>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button onClick={openBookDemo} className="rounded-[4px] bg-destructive text-destructive-foreground hover:bg-destructive/90 px-5 h-9 text-sm font-semibold shadow-sm">
              Book a demo
            </Button>
          </div>

          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px]">
              <div className="flex flex-col gap-6 mt-8">
                {departmentNav.map((dept) => (
                  <div key={dept.id}>
                    <p className="text-lg font-medium text-foreground mb-2">{dept.label}</p>
                    <div className="pl-4 space-y-2">
                      {deptWorkers[dept.id].map((w) => (
                        <a key={w.name} href={w.href} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>{w.name}</span>
                          {w.comingSoon && <span className="text-[9px] font-semibold uppercase tracking-widest text-accent border border-accent/30 rounded-full px-1.5 py-0.5">Soon</span>}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
                <div>
                  <p className="text-lg font-medium text-foreground mb-2">How it works</p>
                  <div className="pl-4 space-y-2">
                    <a href="/how-it-works" className="block text-sm text-muted-foreground">Our approach</a>
                    <a href="/platform" className="block text-sm text-muted-foreground">Platform</a>
                    <a href="/services" className="block text-sm text-muted-foreground">Services</a>
                    <a href="/ui-elements" className="block text-sm text-muted-foreground">UI Elements</a>
                    <a href="/our-team" className="block text-sm text-muted-foreground">Our story & team</a>
                  </div>
                </div>
                <a href="/other-departments" className="text-lg font-medium text-foreground">Other depts.</a>
                <hr className="border-border" />
                <Button onClick={openBookDemo} className="rounded-[4px] bg-destructive text-destructive-foreground hover:bg-destructive/90 w-full">
                  Book a demo
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
