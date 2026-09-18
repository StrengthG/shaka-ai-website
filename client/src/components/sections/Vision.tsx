import { useEffect, useRef } from "react";

const roadmapStages = [
  {
    phase: "Stage 1",
    status: "current",
    title: "Mauritius Manufacturing",
    subtitle: "Beachhead market · v1.0.0 prototype ready",
    items: [
      "Target: Mauritian manufacturers (textiles, food processing, light industry)",
      "5 intelligence modules: NL Query, Risk Engine, Briefings, Policy RAG, Email Drafting",
      "Dual-mode runtime (Claude API + offline fallback for low-connectivity environments)",
      "ERP connectors: SAP S/4HANA, Oracle Fusion, Microsoft Dynamics",
      "Prove unit economics and product-market fit with Mauritian operations teams",
    ],
  },
  {
    phase: "Stage 2",
    status: "next",
    title: "SADC Region Expansion",
    subtitle: "South Africa · Kenya · Regional manufacturing and logistics hubs",
    items: [
      "Expand to manufacturing and logistics hubs across the SADC region",
      "South Africa: mining supply chains, automotive components, retail distribution",
      "Kenya: export-oriented agriculture, logistics corridors, light manufacturing",
      "Multi-tenant SaaS platform with self-service onboarding",
      "Role-based access control, audit logs, and enterprise authentication",
    ],
  },
  {
    phase: "Stage 3",
    status: "future",
    title: "Pan-African Enterprise SaaS",
    subtitle: "Continent-wide · Any ERP · Any sector",
    items: [
      "Full pan-African coverage: Nigeria, Egypt, Ghana, Ethiopia, and beyond",
      "Universal ERP connector supporting any SAP, Oracle, or Dynamics deployment",
      "Government and public-sector procurement intelligence modules",
      "Multi-language support for African enterprise markets",
      "Strategic partnerships with ERP vendors and regional system integrators",
    ],
  },
];

const africaOpportunity = [
  { stat: "Mauritius", label: "Beachhead market", sub: "Manufacturing sector, ERP-ready" },
  { stat: "SADC", label: "Stage 2 expansion", sub: "South Africa, Kenya, and beyond" },
  { stat: "Pan-African", label: "End state", sub: "Enterprise SaaS across 54 countries" },
  { stat: "Scarce", label: "Analytics talent", sub: "The gap SHAKA AI is built to close" },
];

export default function Vision() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.08 }
    );
    const elements = sectionRef.current?.querySelectorAll(".fade-up");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="vision"
      ref={sectionRef}
      className="py-28"
      style={{ background: "#12372A" }}
    >
      <div className="container">
        <div className="fade-up mb-4">
          <span className="font-mono-data text-xs tracking-widest uppercase" style={{ color: "#A8BDAF" }}>
            Vision & Roadmap
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2
              className="fade-up font-display text-3xl lg:text-4xl leading-[1.15]"
              style={{ transitionDelay: "60ms", color: "#FFFFFF" }}
            >
              Mauritius first.<br />
              Then the continent.
            </h2>
          </div>
          <div className="fade-up flex items-end" style={{ transitionDelay: "120ms" }}>
            <p className="text-base leading-relaxed" style={{ color: "#A8BDAF" }}>
              African enterprises adopted ERP systems. The analytics layer never followed, because data talent is scarce and expensive. SHAKA AI proves the model with Mauritian manufacturers, then expands through the SADC region to become the pan-African enterprise intelligence platform. The same way mobile money leapfrogged banking, SHAKA AI leapfrogs the analytics bottleneck.
            </p>
          </div>
        </div>

        {/* Opportunity stats */}
        <div className="fade-up grid grid-cols-2 lg:grid-cols-4 gap-0 mb-16 border border-[rgba(255,255,255,0.08)]" style={{ transitionDelay: "180ms" }}>
          {africaOpportunity.map((item, i) => (
            <div
              key={item.label}
              className="p-6 border-b lg:border-b-0 border-r last:border-r-0"
              style={{
                borderColor: "rgba(255,255,255,0.08)",
                borderRightColor: i < 3 ? "rgba(255,255,255,0.08)" : "transparent",
              }}
            >
              <div className="font-mono-data text-2xl font-semibold mb-1" style={{ color: "#FFFFFF" }}>
                {item.stat}
              </div>
              <div className="text-xs font-semibold mb-0.5" style={{ color: "#EDF3EF" }}>
                {item.label}
              </div>
              <div className="font-mono-data text-xs" style={{ color: "#A8BDAF" }}>
                {item.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Roadmap */}
        <div className="space-y-3">
          {roadmapStages.map((stage, i) => (
            <div
              key={stage.phase}
              className="fade-up border relative overflow-hidden"
              style={{
                transitionDelay: `${(i + 1) * 80}ms`,
                background: stage.status === "current" ? "rgba(36,92,70,0.4)" : "rgba(255,255,255,0.04)",
                borderColor: stage.status === "current" ? "rgba(168,189,175,0.5)" : "rgba(255,255,255,0.08)",
                borderLeftWidth: stage.status === "current" ? "3px" : "1px",
                borderLeftColor: stage.status === "current" ? "#A8BDAF" : "rgba(255,255,255,0.08)",
              }}
            >
              <div className="p-6">
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="md:col-span-1">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="font-mono-data text-xs tracking-widest" style={{ color: "#A8BDAF" }}>
                        {stage.phase}
                      </span>
                      {stage.status === "current" && (
                        <span
                          className="font-mono-data text-[10px] border px-1.5 py-0.5"
                          style={{ color: "#EDF3EF", borderColor: "rgba(168,189,175,0.4)", background: "rgba(168,189,175,0.1)" }}
                        >
                          CURRENT
                        </span>
                      )}
                    </div>
                    <h3 className="text-sm font-semibold mb-1" style={{ color: "#FFFFFF" }}>
                      {stage.title}
                    </h3>
                    <p className="font-mono-data text-xs" style={{ color: "#A8BDAF" }}>
                      {stage.subtitle}
                    </p>
                  </div>

                  <div className="md:col-span-3">
                    <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
                      {stage.items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <div
                            className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0"
                            style={{
                              backgroundColor:
                                stage.status === "current" ? "#A8BDAF"
                                : stage.status === "next" ? "rgba(168,189,175,0.5)"
                                : "rgba(168,189,175,0.25)",
                            }}
                          />
                          <span className="text-xs leading-relaxed" style={{ color: "#A8BDAF" }}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="fade-up mt-16 pt-12 border-t" style={{ transitionDelay: "400ms", borderColor: "rgba(255,255,255,0.08)" }}>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <p className="text-base leading-relaxed" style={{ color: "#A8BDAF" }}>
              SHAKA AI is actively seeking partnerships with Mauritian manufacturers, SADC-region enterprises, ERP vendors, and investors who share the vision of democratising operational intelligence across Africa.
            </p>
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <a
                href="mailto:strengthygivenncube@gmail.com"
                className="btn-primary"
                style={{ background: "#FFFFFF", color: "#12372A", borderColor: "#FFFFFF" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "#EDF3EF";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "#EDF3EF";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "#FFFFFF";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "#FFFFFF";
                }}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
