/**
 * SHAKA AI — Vision & Roadmap Section
 * Design: Obsidian Command
 * Layout: Timeline-style roadmap with Africa-first framing
 */

import { useEffect, useRef } from "react";

const roadmapStages = [
  {
    phase: "Phase 1",
    status: "current",
    title: "Working Prototype",
    subtitle: "v1.0.0 Released",
    items: [
      "Mock ERP data (SAP/Oracle schema-equivalent)",
      "5 intelligence modules fully functional",
      "Dual-mode runtime (Claude API + offline fallback)",
      "Bloomberg × Palantir enterprise UI",
    ],
  },
  {
    phase: "Phase 2",
    status: "next",
    title: "Live ERP Connectors",
    subtitle: "SAP S/4HANA · Oracle Fusion · Microsoft Dynamics",
    items: [
      "Live API integration with SAP S/4HANA",
      "Oracle Fusion and Microsoft Dynamics connectors",
      "Real-time data ingestion pipeline",
      "Enterprise authentication and access controls",
      "Pilot deployments with African enterprise partners",
    ],
  },
  {
    phase: "Phase 3",
    status: "future",
    title: "Multi-Tenant SaaS",
    subtitle: "Africa-first · Then global",
    items: [
      "Multi-tenant SaaS platform for African enterprises",
      "Self-service onboarding for SMEs and governments",
      "Custom policy document ingestion",
      "Role-based access control and audit logs",
      "Pan-African expansion: Nigeria, Kenya, South Africa, Egypt",
    ],
  },
  {
    phase: "Phase 4",
    status: "future",
    title: "Global Platform",
    subtitle: "Enterprise SaaS · Any ERP · Any market",
    items: [
      "Global enterprise SaaS offering",
      "Support for any ERP system via universal connector",
      "Multi-language support for African and global markets",
      "Advanced analytics and predictive risk modeling",
      "Strategic partnerships with ERP vendors",
    ],
  },
];

const africaOpportunity = [
  { stat: "54", label: "African countries", sub: "with growing ERP adoption" },
  { stat: "$180B", label: "African ERP market", sub: "by 2030 (projected)" },
  { stat: "1.4B", label: "People served", sub: "by African enterprises" },
  { stat: "Scarce", label: "Analytics talent", sub: "SHAKA AI fills the gap" },
];

export default function Vision() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
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
      className="py-24 relative"
      style={{ background: "#0F1318" }}
    >
      <div className="container relative z-10">
        {/* Section label */}
        <div className="fade-up flex items-center gap-3 mb-6">
          <div className="w-8 h-px bg-amber" />
          <span className="font-mono-data text-xs text-amber tracking-widest uppercase">Vision & Roadmap</span>
        </div>

        {/* Headline */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="fade-up font-display text-4xl lg:text-5xl text-white leading-tight" style={{ transitionDelay: "60ms" }}>
              Africa first.<br />
              <span className="text-amber italic">Then the world.</span>
            </h2>
          </div>
          <div className="fade-up flex items-end" style={{ transitionDelay: "120ms" }}>
            <p className="text-steel leading-relaxed">
              African businesses run on ERP data that sits unused because analytics talent is scarce.               SHAKA AI democratises access to operational intelligence, starting with the continent that needs it most, then scaling the same infrastructure globally.
            </p>
          </div>
        </div>

        {/* Africa opportunity stats */}
        <div className="fade-up grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16" style={{ transitionDelay: "180ms" }}>
          {africaOpportunity.map((item) => (
            <div key={item.label} className="border border-[#1E2530] bg-[#080A0D] p-5 relative">
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-amber/40" />
              <div className="font-mono-data text-2xl font-semibold text-amber mb-1">{item.stat}</div>
              <div className="text-xs font-semibold text-white mb-0.5">{item.label}</div>
              <div className="font-mono-data text-xs text-steel">{item.sub}</div>
            </div>
          ))}
        </div>

        {/* Roadmap timeline */}
        <div className="space-y-4">
          {roadmapStages.map((stage, i) => (
            <div
              key={stage.phase}
              className="fade-up border border-[#1E2530] relative overflow-hidden"
              style={{
                transitionDelay: `${(i + 1) * 80}ms`,
                background: stage.status === "current" ? "#080A0D" : "#0A0D12",
                borderColor: stage.status === "current" ? "rgba(245,158,11,0.4)" : "#1E2530",
              }}
            >
              {/* Current indicator */}
              {stage.status === "current" && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber" />
              )}

              <div className="p-6 pl-8">
                <div className="grid md:grid-cols-4 gap-6">
                  {/* Phase info */}
                  <div className="md:col-span-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono-data text-xs text-amber tracking-widest">{stage.phase}</span>
                      {stage.status === "current" && (
                        <span className="font-mono-data text-xs text-[#10B981] border border-[#10B981]/30 px-1.5 py-0.5 bg-[#10B981]/5">
                          CURRENT
                        </span>
                      )}
                    </div>
                    <h3 className="text-sm font-semibold text-white mb-1">{stage.title}</h3>
                    <p className="font-mono-data text-xs text-steel">{stage.subtitle}</p>
                  </div>

                  {/* Items */}
                  <div className="md:col-span-3">
                    <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
                      {stage.items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <div
                            className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0"
                            style={{
                              backgroundColor:
                                stage.status === "current"
                                  ? "#F59E0B"
                                  : stage.status === "next"
                                  ? "#7A8499"
                                  : "#3A4555",
                            }}
                          />
                          <span className="text-xs text-steel leading-relaxed">{item}</span>
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
        <div className="fade-up mt-12 text-center" style={{ transitionDelay: "400ms" }}>
          <p className="text-steel mb-6 max-w-xl mx-auto">
            SHAKA AI is actively seeking partnerships with African enterprises, ERP vendors, and investors who share the vision of democratising operational intelligence.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:strengthygivenncube@gmail.com"
              className="btn-amber rounded-none inline-flex items-center gap-2 text-sm"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              Get in Touch
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}
