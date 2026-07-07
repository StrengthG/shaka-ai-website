/**
 * SHAKA AI — The Problem Section
 * Design: Obsidian Command
 * Layout: Left narrative, right problem/solution comparison table
 */

import { useEffect, useRef } from "react";

const problemRows = [
  {
    problem: "ERP data is locked behind SQL and analyst queues",
    consequence: "Operations managers wait days for answers that should take seconds",
    solution: "Plain-English queries return direct answers from live ERP data in seconds",
  },
  {
    problem: "Supplier delays are invisible until production stops",
    consequence: "Late purchase orders trigger line stoppages and missed export deadlines",
    solution: "Deterministic risk engine surfaces overdue POs and SLA breaches before they escalate",
  },
  {
    problem: "Executives receive raw data exports, not intelligence",
    consequence: "Board briefings take days to prepare and are already outdated on delivery",
    solution: "Role-typed briefings (CEO/CFO/COO/Compliance) generated on demand in 30 seconds",
  },
  {
    problem: "Compliance and procurement policy is buried in documents",
    consequence: "Procurement officers make decisions without checking policy, creating audit risk",
    solution: "RAG-powered retrieval returns exact policy clauses with citations on demand",
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
              The data is there.<br />
              <span className="text-amber italic">The insight is not.</span>
            </h2>
            <p className="fade-up text-steel leading-relaxed mb-6" style={{ transitionDelay: "120ms" }}>
              A factory operations manager in Mauritius opens her ERP system on a Monday morning. Purchase orders, inventory levels, supplier invoices, and production schedules are all there. But to find out which supplier orders are running late, she needs a report from an analyst who is already handling three other requests. By the time the answer arrives, the production line has already stopped.
            </p>
            <p className="fade-up text-steel leading-relaxed" style={{ transitionDelay: "180ms" }}>
              Mauritius has a growing manufacturing sector in textiles, food processing, and light industry, with ERP adoption across the board. The analytics layer never followed. Data talent is scarce and expensive. SHAKA AI leapfrogs that gap the same way mobile money leapfrogged banking: by removing the specialist bottleneck entirely and giving operations managers, procurement officers, and executives direct access to the answers already inside their own systems.
            </p>
          </div>

          {/* Stats callout */}
          <div className="fade-up flex flex-col justify-center gap-6" style={{ transitionDelay: "240ms" }}>
            <div className="border border-[#1E2530] bg-[#0F1318] p-6 relative">
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-amber" />
              <div className="font-mono-data text-4xl font-semibold text-amber mb-2">$2.5T</div>
              <div className="text-sm text-white font-medium mb-1">Operational value locked in ERP systems</div>
              <div className="font-mono-data text-xs text-steel">locked in ERP systems across African manufacturers</div>
            </div>
            <div className="border border-[#1E2530] bg-[#0F1318] p-6 relative">
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-amber" />
              <div className="font-mono-data text-4xl font-semibold text-amber mb-2">3 days</div>
              <div className="text-sm text-white font-medium mb-1">Average time to prepare a board briefing</div>
              <div className="font-mono-data text-xs text-steel">SHAKA AI surfaces it in seconds, no analyst required</div>
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
