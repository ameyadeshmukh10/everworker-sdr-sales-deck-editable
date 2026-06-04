import { motion } from "framer-motion";
import { MessageSquareText, ArrowRight, FileJson } from "lucide-react";
import { SlideFrame, Kicker, BRAND } from "../primitives";

const EASE: [number, number, number, number] = [0.22, 0.61, 0.36, 1];

const SELECTED = [
  "kubernetes", "docker", "harbor",
  "jenkins", "gitlab_ci_cd", "teamcity",
  "amazon_web_services", "google_cloud", "azure", "cloudflare",
  "datadog", "new_relic", "grafana", "sentry",
  "gitlab", "atlassian_bitbucket", "sonarqube",
  "postgresql", "mongodb", "redis",
];

const TechConfigSlide = () => {
  return (
    <SlideFrame>
      <div className="absolute inset-0 flex flex-col" style={{ padding: "58px 60px 52px" }}>
        <div className="flex flex-col items-center text-center shrink-0">
          <Kicker delay={0.05}>Configured to you</Kicker>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: EASE }}
            className="font-medium tracking-tight"
            style={{ fontSize: 46, lineHeight: 1.04, color: BRAND.ink, marginTop: 12 }}
          >
            A plain-English brief in. <span className="font-extrabold">A tuned profile out.</span>
          </motion.h1>
        </div>

        <div className="flex items-center" style={{ gap: 18, marginTop: 40 }}>
          {/* Brief */}
          <motion.div
            initial={{ opacity: 0, x: -14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: EASE }}
            className="rounded-3xl flex flex-col self-stretch"
            style={{ width: 520, padding: "24px 26px", background: "rgba(255,255,255,0.72)", border: "1px solid rgba(15,28,24,0.07)", boxShadow: "0 22px 54px -30px rgba(15,40,32,0.4)" }}
          >
            <div className="flex items-center gap-2.5" style={{ marginBottom: 14 }}>
              <span className="grid place-items-center rounded-lg" style={{ width: 30, height: 30, background: "rgba(34,130,111,0.1)" }}>
                <MessageSquareText size={16} color={BRAND.emerald} strokeWidth={2.1} />
              </span>
              <span className="font-semibold uppercase" style={{ fontSize: 11, letterSpacing: "0.16em", color: BRAND.emerald }}>The brief</span>
            </div>
            <p className="font-medium tracking-tight" style={{ fontSize: 15.5, lineHeight: 1.55, color: BRAND.ink }}>
              &ldquo;Configure for <b>Testkube</b>, a Kubernetes-native test orchestration platform.
              We sell to platform engineering, DevOps, and QA teams at enterprises running Kubernetes.
              Surface accounts with serious cloud-native infra: containers, CI/CD, cloud, and
              observability. Must include Jenkins, GitLab CI, Datadog. PLG and sales-led.&rdquo;
            </p>
          </motion.div>

          {/* arrow */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.55 }} className="shrink-0">
            <span className="grid place-items-center rounded-full" style={{ width: 44, height: 44, background: "linear-gradient(135deg, #52FEBF, #22826F)", boxShadow: "0 0 18px rgba(82,254,191,0.5)" }}>
              <ArrowRight size={22} color="#0F1C18" strokeWidth={2.3} />
            </span>
          </motion.div>

          {/* selection.json */}
          <motion.div
            initial={{ opacity: 0, x: 14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: EASE }}
            className="rounded-3xl flex-1 self-stretch"
            style={{ padding: "20px 22px", background: "linear-gradient(160deg, #16241f 0%, #0F1C18 120%)", border: "1px solid rgba(82,254,191,0.28)", boxShadow: "0 24px 60px -28px rgba(15,40,32,0.6)" }}
          >
            <div className="flex items-center gap-2.5" style={{ marginBottom: 14 }}>
              <FileJson size={16} color="#52FEBF" strokeWidth={2.1} />
              <span className="font-mono" style={{ fontSize: 12.5, color: "#52FEBF" }}>selection.testkube.json</span>
            </div>
            <div className="font-mono" style={{ fontSize: 11.5, lineHeight: 1.5, color: "rgba(255,255,255,0.82)" }}>
              <div><span style={{ color: "rgba(255,255,255,0.45)" }}>{"{"}</span></div>
              <div style={{ paddingLeft: 14 }}>&quot;client&quot;: &quot;testkube&quot;,</div>
              <div style={{ paddingLeft: 14 }}>&quot;render&quot;: &quot;always&quot;,</div>
              <div style={{ paddingLeft: 14 }}>&quot;selected&quot;: [</div>
              <div className="flex flex-wrap" style={{ paddingLeft: 28, gap: "2px 6px" }}>
                {SELECTED.map((s) => (
                  <span key={s} style={{ color: "#9EF5D4" }}>&quot;{s}&quot;,</span>
                ))}
              </div>
              <div style={{ paddingLeft: 14 }}>]</div>
              <div><span style={{ color: "rgba(255,255,255,0.45)" }}>{"}"}</span></div>
            </div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-center font-medium tracking-tight"
          style={{ fontSize: 14.5, color: "rgba(15,28,24,0.58)", marginTop: 28 }}
        >
          Scoping to the signals that matter to your go-to-market is faster and sharper than scanning all 7,528, with fewer false positives.
        </motion.p>
      </div>
    </SlideFrame>
  );
};

export default TechConfigSlide;
