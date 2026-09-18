import { useEffect, useRef } from "react";

const trustPillars = [
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 12c0 6.627 5.373 12 12 12s12-5.373 12-12c0-2.03-.505-3.943-1.395-5.617A11.955 11.955 0 0012 3.75c-1.57 0-3.07.3-4.443.845" />
      </svg>
    ),
    title: "Grounded Responses",
    description: "Every answer is grounded in actual ERP data. The preprocessing layer filters and compresses data before the AI call. Responses are anchored to real operational records, not generated from general knowledge.",
    tag: "No hallucination",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    title: "Citation-Backed Policy Answers",
    description: "Policy Retrieval responses include specific document section references. Compliance officers can trace every answer back to its exact source. No ambiguity, no unverifiable claims.",
    tag: "Auditable by design",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
      </svg>
    ),
    title: "Deterministic Risk Scoring",
    description: "Risk scores are computed by a rule-based engine before any AI call is made. Risk detection is consistent, reproducible, and auditable. Not subject to LLM variability or prompt drift.",
    tag: "Rule-based, not probabilistic",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
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
      id="trust"
      ref={sectionRef}
      className="py-28 border-t border-[#DDE3DF]"
      style={{ background: "#F8F9F6" }}
    >
      <div className="container">
        <div className="fade-up mb-4">
          <span className="font-mono-data text-xs tracking-widest uppercase" style={{ color: "#4F7766" }}>
            Built for Trust
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2
              className="fade-up font-display text-3xl lg:text-4xl leading-[1.15]"
              style={{ transitionDelay: "60ms", color: "#17201C" }}
            >
              Responsible AI is not a feature.<br />
              It's the architecture.
            </h2>
          </div>
          <div className="fade-up flex items-end" style={{ transitionDelay: "120ms" }}>
            <p className="text-base leading-relaxed" style={{ color: "#5F6964" }}>
              Enterprise AI that cannot be audited cannot be trusted. SHAKA AI is designed from the ground up for accountability: deterministic risk scoring, citation-backed answers, grounded responses, and human oversight at every decision point.
            </p>
          </div>
        </div>

        {/* Trust pillars — 2×2 cards */}
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          {trustPillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className="fade-up enterprise-card p-6"
              style={{ transitionDelay: `${(i + 1) * 80}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-0.5" style={{ color: "#245C46" }}>
                  {pillar.icon}
                </div>
                <div>
                  <h3 className="text-sm font-semibold mb-2" style={{ color: "#17201C" }}>
                    {pillar.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-3" style={{ color: "#5F6964" }}>
                    {pillar.description}
                  </p>
                  <span
                    className="font-mono-data text-xs border px-2 py-0.5"
                    style={{ color: "#245C46", borderColor: "#A8BDAF", background: "#EDF3EF" }}
                  >
                    {pillar.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dual-mode callout */}
        <div
          className="fade-up border p-8"
          style={{ transitionDelay: "400ms", borderColor: "#DDE3DF", background: "#EDF3EF" }}
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <span
                className="font-mono-data text-xs tracking-widest uppercase block mb-3"
                style={{ color: "#4F7766" }}
              >
                Offline-First Design
              </span>
              <h3 className="text-xl font-semibold leading-snug" style={{ color: "#17201C" }}>
                The system never fails completely.
              </h3>
            </div>
            <div className="md:col-span-2 grid sm:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full" style={{ background: "#245C46" }} />
                  <span className="font-mono-data text-xs font-semibold" style={{ color: "#245C46" }}>
                    Full Mode
                  </span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#5F6964" }}>
                  When an Anthropic API key is present, all queries are sent to Claude with precisely engineered system prompts. Real-time, context-aware responses.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full" style={{ background: "#4F7766" }} />
                  <span className="font-mono-data text-xs font-semibold" style={{ color: "#4F7766" }}>
                    Demo Mode
                  </span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#5F6964" }}>
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
