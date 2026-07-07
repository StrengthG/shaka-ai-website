/**
 * SHAKA AI - Architecture Section (How It Works)
 * Design: Obsidian Command
 * Layout: 5-layer visual flow diagram with amber connectors
 */

import { useEffect, useRef } from "react";

const layers = [
  {
    id: 1,
    label: "LAYER 1",
    title: "Data Layer",
    description: "Mock ERP CSVs structurally equivalent to SAP/Oracle production schemas: Purchase Orders, Inventory, Invoices, Operations",
    detail: "25 POs · 15 Inventory · 20 Invoices · 25 Ops records",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 2.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125m16.5 2.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    color: "#7A8499",
    output: "raw DataFrames",
  },
  {
    id: 2,
    label: "LAYER 2",
    title: "Intelligence / Preprocessing",
    description: "Intent detection, domain filtering, risk scoring, and token compression. The most technically important layer.",
    detail: "18,000 tokens → ~280 tokens (92% reduction)",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    color: "#F59E0B",
    output: "compressed context",
  },
  {
    id: 3,
    label: "LAYER 3",
    title: "AI Layer (Dual-Mode)",
    description: "Full Mode: Anthropic Claude API. Demo Mode: deterministic fallback engine. No API key required, zero crashes.",
    detail: "Full Mode → Claude API · Demo Mode → Offline",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    color: "#F59E0B",
    output: "AI-generated text",
  },
  {
    id: 4,
    label: "LAYER 4",
    title: "Retrieval Layer (RAG)",
    description: "TF-IDF inverted index over policy documents with section-aware chunking and citation generation. Policy RAG only.",
    detail: "TF-IDF index · Relevance scoring · Citations",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
    color: "#10B981",
    output: "grounded responses",
  },
  {
    id: 5,
    label: "LAYER 5",
    title: "Presentation Layer",
    description: "Streamlit UI with Bloomberg Terminal x Palantir design aesthetic. Five purpose-built modules for distinct user personas.",
    detail: "NL Query · Executive Summary · Risk · Policy · Email",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
      </svg>
    ),
    color: "#7A8499",
    output: null,
  },
];

export default function Architecture() {
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
      id="architecture"
      ref={sectionRef}
      className="py-24 relative"
      style={{ background: "#080A0D" }}
    >
      <div className="container relative z-10">
        {/* Section label */}
        <div className="fade-up flex items-center gap-3 mb-6">
          <div className="w-8 h-px bg-amber" />
          <span className="font-mono-data text-xs text-amber tracking-widest uppercase">How It Works</span>
        </div>

        {/* Headline */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="fade-up font-display text-4xl lg:text-5xl text-white leading-tight" style={{ transitionDelay: "60ms" }}>
              Five layers.<br />
              <span className="text-amber italic">One data flow.</span>
            </h2>
          </div>
          <div className="fade-up flex items-end" style={{ transitionDelay: "120ms" }}>
            <p className="text-steel leading-relaxed">
              SHAKA AI is built on five clearly separated architectural layers. Data flows top-to-bottom through each one. Any layer can be replaced, including swapping Claude for GPT-4 or a local LLM, without touching the others.
            </p>
          </div>
        </div>

        {/* Architecture diagram */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Left: Layer stack */}
          <div className="lg:col-span-2 space-y-0 min-w-0">
            {layers.map((layer, i) => (
              <div key={layer.id} className="fade-up" style={{ transitionDelay: `${(i + 1) * 80}ms` }}>
                <div className="arch-layer p-5 relative">
                  {/* Layer number accent */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-1"
                    style={{ backgroundColor: layer.color, opacity: 0.6 }}
                  />

                  <div className="pl-4">
                    <div className="flex items-start gap-3">
                      <div style={{ color: layer.color }} className="mt-0.5 flex-shrink-0">
                        {layer.icon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-mono-data text-xs tracking-widest" style={{ color: layer.color }}>
                            {layer.label}
                          </span>
                        </div>
                        <h3 className="text-sm font-semibold text-white mb-1">{layer.title}</h3>
                        <p className="text-xs text-steel leading-relaxed">{layer.description}</p>
                        <span className="font-mono-data text-xs text-steel/60 mt-1.5 block break-words">{layer.detail}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connector arrow */}
                {layer.output && (
                  <div className="flex items-center gap-3 py-2 pl-6">
                    <div className="flex flex-col items-center">
                      <div className="w-px h-4 bg-[#1E2530]" />
                      <svg className="w-3 h-3 text-[#1E2530]" viewBox="0 0 12 12" fill="currentColor">
                        <path d="M6 10L1 4h10L6 10z" />
                      </svg>
                    </div>
                    <span className="font-mono-data text-xs text-steel/50 italic">{layer.output}</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right: Key engineering callouts */}
          <div className="space-y-4 min-w-0">
            <div className="fade-up" style={{ transitionDelay: "120ms" }}>
              <h3 className="font-mono-data text-xs text-amber tracking-widest uppercase mb-4">Engineering Highlights</h3>
            </div>

            {[
              {
                title: "92% Token Reduction",
                body: "Intent detection + domain filtering + pre-computation compresses 18,000 raw tokens to ~280. Cost: $0.002/query vs $0.40 without preprocessing.",
                color: "#F59E0B",
                delay: "200ms",
              },
              {
                title: "Dual-Mode Runtime",
                body: "A unified generate_llm_response() interface transparently routes to Claude API or the deterministic offline fallback. No module needs to know which mode is active.",
                color: "#10B981",
                delay: "280ms",
              },
              {
                title: "Deterministic Risk Engine",
                body: "Risk scores are computed by rule-based logic before any AI call. Risk detection is consistent and auditable, not dependent on LLM output.",
                color: "#EF4444",
                delay: "360ms",
              },
              {
                title: "TF-IDF over Vector Search",
                body: "For structured policy documents with precise terminology, TF-IDF outperforms semantic search. Deterministic, auditable, no embedding model required.",
                color: "#7A8499",
                delay: "440ms",
              },
              {
                title: "Schema-Validated Data",
                body: "Data loaders enforce typed schemas with Int64, str, and float64 casting. The same validation pattern used in production ETL pipelines.",
                color: "#F59E0B",
                delay: "520ms",
              },
            ].map((callout) => (
              <div
                key={callout.title}
                className="fade-up border border-[#1E2530] bg-[#0F1318] p-4 relative overflow-hidden"
                style={{ transitionDelay: callout.delay }}
              >
                <div
                  className="absolute top-0 left-0 w-3 h-3 border-t border-l"
                  style={{ borderColor: callout.color }}
                />
                <h4 className="text-xs font-semibold text-white mb-1.5 break-words">{callout.title}</h4>
                <p className="font-mono-data text-xs text-steel leading-relaxed break-words">{callout.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
