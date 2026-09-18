import { useEffect, useRef } from "react";

const layers = [
  {
    id: 1,
    label: "Layer 1",
    title: "Data Layer",
    description: "Mock ERP CSVs structurally equivalent to SAP/Oracle production schemas: Purchase Orders, Inventory, Invoices, Operations",
    detail: "25 POs · 15 Inventory · 20 Invoices · 25 Ops records",
    accentColor: "#A8BDAF",
    output: "raw DataFrames",
  },
  {
    id: 2,
    label: "Layer 2",
    title: "Intelligence / Preprocessing",
    description: "Intent detection, domain filtering, risk scoring, and token compression. The most technically important layer.",
    detail: "18,000 tokens → ~280 tokens (92% reduction)",
    accentColor: "#245C46",
    output: "compressed context",
    highlight: true,
  },
  {
    id: 3,
    label: "Layer 3",
    title: "AI Layer (Dual-Mode)",
    description: "Full Mode: Anthropic Claude API. Demo Mode: deterministic fallback engine. No API key required, zero crashes.",
    detail: "Full Mode → Claude API · Demo Mode → Offline",
    accentColor: "#245C46",
    output: "AI-generated text",
  },
  {
    id: 4,
    label: "Layer 4",
    title: "Retrieval Layer (RAG)",
    description: "TF-IDF inverted index over policy documents with section-aware chunking and citation generation. Policy RAG only.",
    detail: "TF-IDF index · Relevance scoring · Citations",
    accentColor: "#4F7766",
    output: "grounded responses",
  },
  {
    id: 5,
    label: "Layer 5",
    title: "Presentation Layer",
    description: "Streamlit UI with Bloomberg Terminal x Palantir design aesthetic. Five purpose-built modules for distinct user personas.",
    detail: "NL Query · Executive Summary · Risk · Policy · Email",
    accentColor: "#A8BDAF",
    output: null,
  },
];

const callouts = [
  {
    title: "92% Token Reduction",
    body: "Intent detection + domain filtering + pre-computation compresses 18,000 raw tokens to ~280. Cost: $0.002/query vs $0.40 without preprocessing.",
  },
  {
    title: "Dual-Mode Runtime",
    body: "A unified generate_llm_response() interface transparently routes to Claude API or the deterministic offline fallback. No module needs to know which mode is active.",
  },
  {
    title: "Deterministic Risk Engine",
    body: "Risk scores are computed by rule-based logic before any AI call. Risk detection is consistent and auditable, not dependent on LLM output.",
  },
  {
    title: "TF-IDF over Vector Search",
    body: "For structured policy documents with precise terminology, TF-IDF outperforms semantic search. Deterministic, auditable, no embedding model required.",
  },
  {
    title: "Schema-Validated Data",
    body: "Data loaders enforce typed schemas with Int64, str, and float64 casting. The same validation pattern used in production ETL pipelines.",
  },
];

export default function Architecture() {
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
      id="architecture"
      ref={sectionRef}
      className="py-28 bg-white border-t border-[#DDE3DF]"
    >
      <div className="container">
        <div className="fade-up mb-4">
          <span className="font-mono-data text-xs tracking-widest uppercase" style={{ color: "#4F7766" }}>
            How It Works
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2
              className="fade-up font-display text-3xl lg:text-4xl leading-[1.15]"
              style={{ transitionDelay: "60ms", color: "#17201C" }}
            >
              Five layers.<br />
              One data flow.
            </h2>
          </div>
          <div className="fade-up flex items-end" style={{ transitionDelay: "120ms" }}>
            <p className="text-base leading-relaxed" style={{ color: "#5F6964" }}>
              SHAKA AI is built on five clearly separated architectural layers. Data flows top-to-bottom through each one. Any layer can be replaced, including swapping Claude for GPT-4 or a local LLM, without touching the others.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Left: Layer stack */}
          <div className="lg:col-span-2 space-y-0 min-w-0">
            {layers.map((layer, i) => (
              <div key={layer.id} className="fade-up" style={{ transitionDelay: `${(i + 1) * 80}ms` }}>
                <div
                  className="arch-layer p-5 relative"
                  style={{
                    background: layer.highlight ? "#F8F9F6" : "#FFFFFF",
                    borderLeft: `3px solid ${layer.accentColor}`,
                    borderColor: layer.highlight ? "#A8BDAF" : "#DDE3DF",
                    borderLeftColor: layer.accentColor,
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-20 pt-0.5">
                      <span
                        className="font-mono-data text-[10px] uppercase tracking-widest font-semibold"
                        style={{ color: layer.accentColor }}
                      >
                        {layer.label}
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm font-semibold mb-1" style={{ color: "#17201C" }}>
                        {layer.title}
                      </h3>
                      <p className="text-xs leading-relaxed" style={{ color: "#5F6964" }}>
                        {layer.description}
                      </p>
                      <span
                        className="font-mono-data text-xs mt-1.5 block break-words"
                        style={{ color: "#A8BDAF" }}
                      >
                        {layer.detail}
                      </span>
                    </div>
                  </div>
                </div>

                {layer.output && (
                  <div className="flex items-center gap-2 py-1.5 pl-[5.5rem]">
                    <div className="flex flex-col items-center">
                      <div className="w-px h-3" style={{ background: "#DDE3DF" }} />
                      <svg className="w-2.5 h-2.5" viewBox="0 0 10 10" fill="#DDE3DF">
                        <path d="M5 8L1 3h8L5 8z" />
                      </svg>
                    </div>
                    <span className="font-mono-data text-[10px]" style={{ color: "#A8BDAF" }}>
                      {layer.output}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right: Engineering callouts */}
          <div className="min-w-0">
            <div className="fade-up mb-6" style={{ transitionDelay: "120ms" }}>
              <span className="font-mono-data text-xs uppercase tracking-widest" style={{ color: "#4F7766" }}>
                Engineering Highlights
              </span>
            </div>

            <div className="space-y-0">
              {callouts.map((callout, i) => (
                <div
                  key={callout.title}
                  className="fade-up py-5 border-b border-[#DDE3DF] last:border-0"
                  style={{ transitionDelay: `${200 + i * 80}ms` }}
                >
                  <h4 className="text-xs font-semibold mb-1.5 break-words" style={{ color: "#17201C" }}>
                    {callout.title}
                  </h4>
                  <p className="font-mono-data text-xs leading-relaxed break-words" style={{ color: "#5F6964" }}>
                    {callout.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
