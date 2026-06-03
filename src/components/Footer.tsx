import { Linkedin, Youtube, Twitter, MessageCircle } from "lucide-react";
import everworkerFooterLogo from "@/assets/everworker-footer-logo.svg";

const footerNav = {
  Departments: ["Marketing", "Sales", "Finance"],
  Workers: [
    "Content Strategist",
    "SEO Optimizer",
    "Campaign Manager",
    "Lead Qualifier",
    "Outreach Agent",
    "Pipeline Manager",
    "Invoice Processor",
    "Revenue Forecaster",
    "Compliance Monitor",
  ],
  Resources: ["AI Academy", "Events", "Blog", "Trust Center", "Customer Support"],
  Company: ["About Us", "Careers", "Contact", "SDR Worker Full", "SDR — Lead Response", "SDR — Contact Enrichment", "SDR — Hiring Signals"],
};

const legalLinks = ["Privacy Policy", "Terms of Use", "Cookie Policy"];

const linkHrefs: Record<string, string> = {
  "SDR Worker Full": "/sales/sdr-full",
  "SDR — Lead Response": "/sales/sdr-lead-response",
  "SDR — Contact Enrichment": "/sales/sdr-contact-enrichment",
  "SDR — Hiring Signals": "/sales/sdr-hiring-signals",
};

const Footer = () => {
  return (
    <>
      <footer className="bg-[#F5F5F5] pt-20 pb-0 px-6 lg:px-8 overflow-hidden">
        <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
          {/* Top: Logo + legal left, nav columns right */}
          <div className="flex flex-col md:flex-row gap-12 md:gap-20">
            {/* Left column */}
            <div className="shrink-0">
              <h3 className="text-xl font-extrabold text-foreground tracking-tight italic">
                EverWorker
              </h3>
              <ul className="mt-5 space-y-2">
                {legalLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-2"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Nav columns */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 flex-1">
              {Object.entries(footerNav).map(([category, links]) => (
                <div key={category}>
                  <h4 className="text-sm font-bold text-foreground mb-4">
                    {category}
                  </h4>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link}>
                        <a
                          href={linkHrefs[link] ?? "#"}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Copyright + Social row */}
          <div className="mt-20 pb-10 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground/60">© 2025 EverWorker</p>
            <div className="flex items-center gap-5">
              <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
                </svg>
              </a>
              <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13 12L17.5 4H20.5L16 12L20.5 20H17.5L13 12ZM3.5 4H6.5L11 12L6.5 20H3.5L8 12L3.5 4Z" />
                </svg>
              </a>
              <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Giant red slanted logo banner using actual SVG */}
        <div className="relative w-full" style={{ height: "clamp(140px, 20vw, 300px)" }}>
          <img
            src={everworkerFooterLogo}
            alt="EverWorker"
            className="w-full h-auto absolute bottom-0 left-0"
          />
        </div>
      </footer>

      {/* Sticky chat button */}
      <button
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-[#FF0D40] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
        aria-label="Open chat"
      >
        <MessageCircle className="h-5 w-5" />
      </button>
    </>
  );
};

export default Footer;
