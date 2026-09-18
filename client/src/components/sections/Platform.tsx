import { useEffect, useRef } from "react";

const features = [
  {
    id: "nl-query",
    num: "01",
    title: "Natural Language Query",
    tagline: "Ask your ERP in plain English. Get structured answers in seconds.",
    description: "Intent-detection preprocessing routes your question to the correct ERP domain, filters relevant rows, and compresses 18,000 tokens to ~280 before any AI call. Fast, accurate, grounded responses.",
    badge: "92% token reduction",
    badgeGreen: true,
  },
  {
    id: "executive-summary",
    num: "02",
    title: "Executive Summary",
    tagline: "Board-ready briefings tailored to CEO, CFO, COO, and Compliance. On demand.",
    description: "Role-based operational intelligence aggregated from all four ERP datasets. Each briefing presents prioritised KPIs and recommended actions appropriate for the selected executive persona.",
    badge: "4 executive personas",
    badgeGreen: true,
  },
  {
    id: "risk-analysis",
    num: "03",
    title: "Risk Analysis",
    tagline: "Deterministic risk scoring before any AI call. Consistent, auditable, and proactive.",
    description: "A rule-based risk engine scores every entity in the dataset against a severity taxonomy before Claude is invoked. Risk detection is consistent and rule-based; the narrative briefing is human-readable.",
    badge: "Deterministic engine",
    badgeGreen: false,
  },
  {
    id: "policy-rag",
    num: "04",
    title: "Policy Retrieval (RAG)",
    tagline: "Cited, grounded answers from policy documents. Every response traceable to its source.",
    description: "TF-IDF inverted index over policy documents, with section-aware chunking and relevance scoring. Compliance officers can trace every answer back to the exact policy clause.",
    badge: "TF-IDF + citations",
    badgeGreen: true,
  },
  {
    id: "email-generator",
    num: "05",
    title: "Email Generator",
    tagline: "Enterprise-grade business communications drafted from live ERP data.",
    description: "Drafts escalations, approvals, notifications, and executive communications grounded in real operational data. Configurable tone (formal/diplomatic/urgent) with a one-click revision flow.",
    badge: "Grounded in ERP data",
    badgeGreen: true,
  },
];

const techStack = [
  ["Web framework", "Streamlit"],
  ["AI / LLM", "Anthropic Claude API"],
  ["Data", "pandas 2.2+, numpy"],
  ["Reliability", "tenacity (retry logic)"],
  ["Language", "Python 3.10+"],
];

export default function Platform() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    const elements = sectionRef.current?.querySelectorAll(".fade-up");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="platform"
      ref={sectionRef}
      className="py-28 border-t border-[#DDE3DF]"
      style={{ background: "#EDF3EF" }}
    >
      <div className="container">
        <div className="fade-up mb-4">
          <span className="font-mono-data text-xs tracking-widest uppercase" style={{ color: "#4F7766" }}>
            The Platform
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2
              className="fade-up font-display text-3xl lg:text-4xl leading-[1.15]"
              style={{ transitionDelay: "60ms", color: "#17201C" }}
            >
              Five intelligence modules.<br />
              One unified platform.
            </h2>
          </div>
          <div className="fade-up flex items-end" style={{ transitionDelay: "120ms" }}>
            <p className="text-base leading-relaxed" style={{ color: "#5F6964" }}>
              Each module serves a distinct user persona: from the analyst querying procurement data to the CFO needing a board briefing in 30 seconds. All five share the same preprocessing engine, risk scorer, and dual-mode runtime.
            </p>
          </div>
        </div>

        {/* Numbered feature list */}
        <div className="border-t border-[#DDE3DF]">
          {features.map((feature, i) => (
            <div
              key={feature.id}
              className="fade-up grid md:grid-cols-[5rem_1fr_1fr] gap-6 py-8 border-b border-[#DDE3DF]"
              style={{ transitionDelay: `${(i + 1) * 60}ms` }}
            >
              <div className="flex items-start pt-0.5">
                <span
                  className="font-mono-data text-2xl font-semibold leading-none select-none"
                  style={{ color: "#A8BDAF" }}
                >
                  {feature.num}
                </span>
              </div>

              <div>
                <h3 className="text-base font-semibold mb-1.5" style={{ color: "#17201C" }}>
                  {feature.title}
                </h3>
                <p className="text-sm font-medium leading-snug" style={{ color: "#245C46" }}>
                  {feature.tagline}
                </p>
              </div>

              <div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#5F6964" }}>
                  {feature.description}
                </p>
                <span
                  className="font-mono-data text-xs border px-2 py-0.5"
                  style={{
                    color: feature.badgeGreen ? "#245C46" : "#5F6964",
                    borderColor: feature.badgeGreen ? "#A8BDAF" : "#DDE3DF",
                    background: feature.badgeGreen ? "#EDF3EF" : "#F8F9F6",
                  }}
                >
                  {feature.badge}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Tech stack — minimal inline display */}
        <div className="fade-up mt-12 pt-8 border-t border-[#DDE3DF]" style={{ transitionDelay: "360ms" }}>
          <span className="font-mono-data text-xs uppercase tracking-widest block mb-5" style={{ color: "#4F7766" }}>
            Tech Stack
          </span>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {techStack.map(([layer, tech]) => (
              <div key={layer} className="flex items-center gap-2">
                <span className="font-mono-data text-xs" style={{ color: "#5F6964" }}>{layer}</span>
                <span style={{ color: "#DDE3DF" }}>—</span>
                <span className="font-mono-data text-xs font-medium" style={{ color: "#17201C" }}>{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
