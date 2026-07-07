/**
 * SHAKA AI - Built for Trust Section (Responsible AI)
 * Design: Obsidian Command
 * Layout: Full-width with geometric pattern background, 4 trust pillars
 */

import { useEffect, useRef } from "react";

const trustPillars = [
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 12c0 6.627 5.373 12 12 12s12-5.373 12-12c0-2.03-.505-3.943-1.395-5.617A11.955 11.955 0 0012 3.75c-1.57 0-3.07.3-4.443.845" />
      </svg>
    ),
    title: "Grounded Responses",
    description: "Every answer is grounded in actual ERP data. The preprocessing layer filters and compresses data before the AI call. Responses are anchored to real operational records, not generated from general knowledge.",
    tag: "No hallucination",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    title: "Citation-Backed Policy Answers",
    description: "Policy Retrieval responses include specific document section references. Compliance officers can trace every answer back to its exact source. No ambiguity, no unverifiable claims.",
    tag: "Auditable by design",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
      </svg>
    ),
    title: "Deterministic Risk Scoring",
    description: "Risk scores are computed by a rule-based engine before any AI call is made. Risk detection is consistent, reproducible, and auditable. Not subject to LLM variability or prompt drift.",
    tag: "Rule-based, not probabilistic",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: "Human-in-the-Loop Email Drafting",
    description: "The Email Generator drafts communications for human review and approval. It never sends autonomously. Tone and content are configurable, with a one-click revision flow that keeps the human in control.",
    tag: "Human oversight preserved",
  },
];

export default function Trust() {
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
      id="trust"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      style={{ background: "#0F1318" }}
    >
      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 ndebele-pattern opacity-40" />

      {/* Amber glow top-right */}
      <div
        className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
        style={{
          background: "radial-gradient(circle at top right, rgba(245,158,11,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="container relative z-10">
        {/* Section label */}
        <div className="fade-up flex items-center gap-3 mb-6">
          <div className="w-8 h-px bg-amber" />
          <span className="font-mono-data text-xs text-amber tracking-widest uppercase">Built for Trust</span>
        </div>

        {/* Headline */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="fade-up font-display text-4xl lg:text-5xl text-white leading-tight" style={{ transitionDelay: "60ms" }}>
              Responsible AI is not a feature.<br />
              <span className="text-amber italic">It's the architecture.</span>
            </h2>
          </div>
          <div className="fade-up flex items-end" style={{ transitionDelay: "120ms" }}>
            <p className="text-steel leading-relaxed">
              Enterprise AI that cannot be audited cannot be trusted. SHAKA AI is designed from the ground up for accountability: deterministic risk scoring, citation-backed answers, grounded responses, and human oversight at every decision point.
            </p>
          </div>
        </div>

        {/* Trust pillars */}
        <div className="grid md:grid-cols-2 gap-4 mb-16">
          {trustPillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className="fade-up border border-[#1E2530] bg-[#080A0D] p-6 relative group hover:border-amber/30 transition-colors duration-200"
              style={{ transitionDelay: `${(i + 1) * 80}ms` }}
            >
              {/* Corner accent */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-amber/40 group-hover:border-amber transition-colors duration-200" />

              <div className="flex items-start gap-4">
                <div className="text-amber flex-shrink-0 mt-0.5">{pillar.icon}</div>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-2">{pillar.title}</h3>
                  <p className="text-sm text-steel leading-relaxed mb-3">{pillar.description}</p>
                  <span className="font-mono-data text-xs text-amber/80 border border-amber/20 px-2 py-0.5 bg-amber/5">
                    {pillar.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dual-mode runtime callout */}
        <div className="fade-up border border-[#1E2530] bg-[#080A0D] p-8 relative" style={{ transitionDelay: "400ms" }}>
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-amber" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-amber" />

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <span className="font-mono-data text-xs text-amber tracking-widest uppercase block mb-3">Offline-First Design</span>
              <h3 className="text-xl font-semibold text-white leading-snug">
                The system never fails completely.
              </h3>
            </div>
            <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-amber" />
                  <span className="font-mono-data text-xs text-amber font-semibold">Full Mode</span>
                </div>
                <p className="text-sm text-steel leading-relaxed">
                  When an Anthropic API key is present, all queries are sent to Claude with precisely engineered system prompts. Real-time, context-aware responses.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-[#10B981]" />
                  <span className="font-mono-data text-xs text-[#10B981] font-semibold">Demo Mode</span>
                </div>
                <p className="text-sm text-steel leading-relaxed">
                  Without an API key, the deterministic fallback engine activates. Every number in the output is accurate. The UI is visually identical. Zero crashes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
