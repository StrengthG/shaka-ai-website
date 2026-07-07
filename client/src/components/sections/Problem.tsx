/**
 * SHAKA AI — The Problem Section
 * Design: Obsidian Command
 * Layout: Left narrative, right problem/solution comparison table
 */

import { useEffect, useRef } from "react";

const problemRows = [
  {
    problem: "Operational data exists but is not actionable",
    consequence: "Decisions made on gut feel or outdated reports",
    solution: "Natural language queries return direct answers in seconds",
  },
  {
    problem: "Risk is only identified after it escalates",
    consequence: "Vendor failures, stockouts, and SLA breaches become crises",
    solution: "Deterministic risk engine surfaces vendor failures and SLA breaches proactively",
  },
  {
    problem: "Executives receive raw data, not intelligence",
    consequence: "Boardroom briefings take days to prepare",
    solution: "Role-typed briefings (CEO/CFO/COO/Compliance) generated on demand",
  },
  {
    problem: "Policy knowledge is buried in documents",
    consequence: "Compliance questions go unanswered or answered incorrectly",
    solution: "RAG-powered retrieval returns exact policy clauses with citations",
  },
];

export default function Problem() {
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
      id="problem"
      ref={sectionRef}
      className="py-24 relative"
      style={{ background: "#080A0D" }}
    >
      <div className="absolute inset-0 ndebele-pattern opacity-30" />

      <div className="container relative z-10">
        {/* Section label */}
        <div className="fade-up flex items-center gap-3 mb-6">
          <div className="w-8 h-px bg-amber" />
          <span className="font-mono-data text-xs text-amber tracking-widest uppercase">The Problem</span>
        </div>

        {/* Headline */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="fade-up font-display text-4xl lg:text-5xl text-white leading-tight mb-6" style={{ transitionDelay: "60ms" }}>
              Enterprise data exists.<br />
              <span className="text-amber italic">It just isn't usable.</span>
            </h2>
            <p className="fade-up text-steel leading-relaxed mb-6" style={{ transitionDelay: "120ms" }}>
              Every enterprise running SAP, Oracle, or Microsoft Dynamics has enormous operational data locked in ERP systems — purchase orders, inventory records, invoices, approval workflows. That data exists, but it is accessible only to analysts who know SQL, or buried in reports nobody reads until something goes wrong.
            </p>
            <p className="fade-up text-steel leading-relaxed" style={{ transitionDelay: "180ms" }}>
              In Africa, where analytics talent is scarce and ERP adoption is growing rapidly, this bottleneck is acute. Decisions that should take 10 seconds take 3 days. Risk that should be surfaced proactively becomes a crisis.
            </p>
          </div>

          {/* Stats callout */}
          <div className="fade-up flex flex-col justify-center gap-6" style={{ transitionDelay: "240ms" }}>
            <div className="border border-[#1E2530] bg-[#0F1318] p-6 relative">
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-amber" />
              <div className="font-mono-data text-4xl font-semibold text-amber mb-2">$2.5T</div>
              <div className="text-sm text-white font-medium mb-1">Operational value locked in ERP systems</div>
              <div className="font-mono-data text-xs text-steel">across African enterprises and SMEs</div>
            </div>
            <div className="border border-[#1E2530] bg-[#0F1318] p-6 relative">
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-amber" />
              <div className="font-mono-data text-4xl font-semibold text-amber mb-2">3 days</div>
              <div className="text-sm text-white font-medium mb-1">Average time to prepare a board briefing</div>
              <div className="font-mono-data text-xs text-steel">SHAKA AI generates it in 30 seconds</div>
            </div>
          </div>
        </div>

        {/* Problem/Solution table */}
        <div className="fade-up" style={{ transitionDelay: "300ms" }}>
          <div className="border border-[#1E2530] overflow-hidden">
            {/* Table header */}
            <div className="grid grid-cols-1 md:grid-cols-3 bg-[#0F1318] border-b border-[#1E2530]">
              <div className="px-5 py-3 border-b md:border-b-0 md:border-r border-[#1E2530]">
                <span className="font-mono-data text-xs text-steel uppercase tracking-widest">The Problem</span>
              </div>
              <div className="px-5 py-3 border-b md:border-b-0 md:border-r border-[#1E2530]">
                <span className="font-mono-data text-xs text-steel uppercase tracking-widest">Consequence</span>
              </div>
              <div className="px-5 py-3">
                <span className="font-mono-data text-xs text-amber uppercase tracking-widest">What SHAKA AI Does</span>
              </div>
            </div>

            {/* Table rows */}
            {problemRows.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-1 md:grid-cols-3 border-b border-[#1E2530] last:border-0 hover:bg-[#0F1318]/50 transition-colors"
              >
                <div className="px-5 py-4 border-b md:border-b-0 md:border-r border-[#1E2530]">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#EF4444] mt-1.5 flex-shrink-0" />
                    <span className="text-sm text-white leading-relaxed">{row.problem}</span>
                  </div>
                </div>
                <div className="px-5 py-4 border-b md:border-b-0 md:border-r border-[#1E2530]">
                  <span className="text-sm text-steel leading-relaxed">{row.consequence}</span>
                </div>
                <div className="px-5 py-4">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#10B981] mt-1.5 flex-shrink-0" />
                    <span className="text-sm text-white leading-relaxed">{row.solution}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
