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
      id="problem"
      ref={sectionRef}
      className="py-28 bg-white border-t border-[#DDE3DF]"
    >
      <div className="container">
        <div className="fade-up mb-4">
          <span className="font-mono-data text-xs tracking-widest uppercase" style={{ color: "#4F7766" }}>
            The Problem
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h2
              className="fade-up font-display text-3xl lg:text-4xl leading-[1.15] mb-6"
              style={{ transitionDelay: "60ms", color: "#17201C" }}
            >
              The data is there.<br />
              The insight is not.
            </h2>
            <p className="fade-up text-base leading-relaxed mb-5" style={{ transitionDelay: "120ms", color: "#5F6964" }}>
              A factory operations manager in Mauritius opens her ERP system on a Monday morning. Purchase orders, inventory levels, supplier invoices, and production schedules are all there. But to find out which supplier orders are running late, she needs a report from an analyst who is already handling three other requests. By the time the answer arrives, the production line has already stopped.
            </p>
            <p className="fade-up text-base leading-relaxed" style={{ transitionDelay: "180ms", color: "#5F6964" }}>
              Mauritius has a growing manufacturing sector in textiles, food processing, and light industry, with ERP adoption across the board. The analytics layer never followed. Data talent is scarce and expensive. SHAKA AI leapfrogs that gap the same way mobile money leapfrogged banking: by removing the specialist bottleneck entirely and giving operations managers, procurement officers, and executives direct access to the answers already inside their own systems.
            </p>
          </div>

          <div className="fade-up flex flex-col justify-center gap-5" style={{ transitionDelay: "240ms" }}>
            <div
              className="border p-6"
              style={{ borderColor: "#DDE3DF", background: "#FFFFFF" }}
            >
              <div
                className="font-mono-data text-4xl font-semibold mb-2"
                style={{ color: "#12372A" }}
              >
                $2.5T
              </div>
              <div className="text-sm font-semibold mb-1" style={{ color: "#17201C" }}>
                Operational value locked in ERP systems
              </div>
              <div className="font-mono-data text-xs" style={{ color: "#5F6964" }}>
                across African manufacturers
              </div>
            </div>
            <div
              className="border p-6"
              style={{ borderColor: "#DDE3DF", background: "#FFFFFF" }}
            >
              <div
                className="font-mono-data text-4xl font-semibold mb-2"
                style={{ color: "#12372A" }}
              >
                3 days
              </div>
              <div className="text-sm font-semibold mb-1" style={{ color: "#17201C" }}>
                Average time to prepare a board briefing
              </div>
              <div className="font-mono-data text-xs" style={{ color: "#5F6964" }}>
                SHAKA AI surfaces it in seconds, no analyst required
              </div>
            </div>
          </div>
        </div>

        {/* Problem / Solution table */}
        <div className="fade-up" style={{ transitionDelay: "300ms" }}>
          <div className="border border-[#DDE3DF] overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 bg-[#F8F9F6] border-b border-[#DDE3DF]">
              <div className="px-5 py-3 border-b md:border-b-0 md:border-r border-[#DDE3DF]">
                <span className="font-mono-data text-xs uppercase tracking-widest" style={{ color: "#5F6964" }}>
                  The Problem
                </span>
              </div>
              <div className="px-5 py-3 border-b md:border-b-0 md:border-r border-[#DDE3DF]">
                <span className="font-mono-data text-xs uppercase tracking-widest" style={{ color: "#5F6964" }}>
                  Consequence
                </span>
              </div>
              <div className="px-5 py-3">
                <span className="font-mono-data text-xs uppercase tracking-widest" style={{ color: "#245C46" }}>
                  What SHAKA AI Does
                </span>
              </div>
            </div>

            {problemRows.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-1 md:grid-cols-3 border-b border-[#DDE3DF] last:border-0 hover:bg-[#F8F9F6] transition-colors"
              >
                <div className="px-5 py-4 border-b md:border-b-0 md:border-r border-[#DDE3DF]">
                  <div className="flex items-start gap-2.5">
                    <div
                      className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                      style={{ background: "#B91C1C" }}
                    />
                    <span className="text-sm leading-relaxed" style={{ color: "#17201C" }}>
                      {row.problem}
                    </span>
                  </div>
                </div>
                <div className="px-5 py-4 border-b md:border-b-0 md:border-r border-[#DDE3DF]">
                  <span className="text-sm leading-relaxed" style={{ color: "#5F6964" }}>
                    {row.consequence}
                  </span>
                </div>
                <div className="px-5 py-4">
                  <div className="flex items-start gap-2.5">
                    <div
                      className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                      style={{ background: "#245C46" }}
                    />
                    <span className="text-sm leading-relaxed" style={{ color: "#17201C" }}>
                      {row.solution}
                    </span>
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
