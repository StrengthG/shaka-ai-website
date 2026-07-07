/**
 * SHAKA AI - Platform Section (Five Features)
 * Design: Obsidian Command
 * Layout: Feature cards with amber left-border hover, icon + title + benefit
 */

import { useEffect, useRef } from "react";

const features = [
  {
    id: "nl-query",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
    title: "Natural Language Query",
    tagline: "Ask your ERP in plain English. Get structured answers in seconds.",
    description: "Intent-detection preprocessing routes your question to the correct ERP domain, filters relevant rows, and compresses 18,000 tokens to ~280 before any AI call. Fast, accurate, grounded responses.",
    badge: "92% token reduction",
    badgeColor: "text-amber",
  },
  {
    id: "executive-summary",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
    title: "Executive Summary",
    tagline: "Board-ready briefings tailored to CEO, CFO, COO, and Compliance. On demand.",
    description: "Role-based operational intelligence aggregated from all four ERP datasets. Each briefing presents prioritised KPIs and recommended actions appropriate for the selected executive persona.",
    badge: "4 executive personas",
    badgeColor: "text-amber",
  },
  {
    id: "risk-analysis",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
    title: "Risk Analysis",
    tagline: "Deterministic risk scoring before any AI call. Consistent, auditable, and proactive.",
    description: "A rule-based risk engine scores every entity in the dataset against a severity taxonomy before Claude is invoked. Risk detection is consistent and rule-based; the narrative briefing is human-readable.",
    badge: "Deterministic engine",
    badgeColor: "text-[#EF4444]",
  },
  {
    id: "policy-rag",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    title: "Policy Retrieval (RAG)",
    tagline: "Cited, grounded answers from policy documents. Every response traceable to its source.",
    description: "TF-IDF inverted index over policy documents, with section-aware chunking and relevance scoring. Compliance officers can trace every answer back to the exact policy clause.",
    badge: "TF-IDF + citations",
    badgeColor: "text-[#10B981]",
  },
  {
    id: "email-generator",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    title: "Email Generator",
    tagline: "Enterprise-grade business communications drafted from live ERP data.",
    description: "Drafts escalations, approvals, notifications, and executive communications grounded in real operational data. Configurable tone (formal/diplomatic/urgent) with a one-click revision flow.",
    badge: "Grounded in ERP data",
    badgeColor: "text-amber",
  },
];

export default function Platform() {
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
      className="py-24 relative"
      style={{ background: "#0F1318" }}
    >
      <div className="container relative z-10">
        {/* Section label */}
        <div className="fade-up flex items-center gap-3 mb-6">
          <div className="w-8 h-px bg-amber" />
          <span className="font-mono-data text-xs text-amber tracking-widest uppercase">The Platform</span>
        </div>

        {/* Headline */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="fade-up font-display text-4xl lg:text-5xl text-white leading-tight" style={{ transitionDelay: "60ms" }}>
              Five intelligence modules.<br />
              <span className="text-amber italic">One unified platform.</span>
            </h2>
          </div>
          <div className="fade-up flex items-end" style={{ transitionDelay: "120ms" }}>
            <p className="text-steel leading-relaxed">
              Each module serves a distinct user persona: from the analyst querying procurement data to the CFO needing a board briefing in 30 seconds. All five share the same preprocessing engine, risk scorer, and dual-mode runtime.
            </p>
          </div>
        </div>

        {/* Feature cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, i) => (
            <div
              key={feature.id}
              className="fade-up feature-card p-6"
              style={{ transitionDelay: `${(i + 1) * 60}ms` }}
            >
              {/* Icon */}
              <div className="text-amber mb-4">{feature.icon}</div>

              {/* Title */}
              <h3 className="text-base font-semibold text-white mb-2">{feature.title}</h3>

              {/* Tagline */}
              <p className="text-sm text-amber/90 font-medium leading-snug mb-3">{feature.tagline}</p>

              {/* Description */}
              <p className="text-sm text-steel leading-relaxed mb-4">{feature.description}</p>

              {/* Badge */}
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-current opacity-60" style={{ color: feature.badgeColor.replace("text-", "") }} />
                <span className={`font-mono-data text-xs ${feature.badgeColor}`}>{feature.badge}</span>
              </div>
            </div>
          ))}

          {/* Sixth card: tech stack */}
          <div
            className="fade-up feature-card p-6 border-dashed"
            style={{ transitionDelay: "420ms" }}
          >
            <div className="text-steel mb-4">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
              </svg>
            </div>
            <h3 className="text-base font-semibold text-white mb-3">Tech Stack</h3>
            <div className="space-y-2">
              {[
                ["Web framework", "Streamlit"],
                ["AI / LLM", "Anthropic Claude API"],
                ["Data", "pandas 2.2+, numpy"],
                ["Reliability", "tenacity (retry logic)"],
                ["Language", "Python 3.10+"],
              ].map(([layer, tech]) => (
                <div key={layer} className="flex justify-between items-center">
                  <span className="font-mono-data text-xs text-steel">{layer}</span>
                  <span className="font-mono-data text-xs text-white">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
