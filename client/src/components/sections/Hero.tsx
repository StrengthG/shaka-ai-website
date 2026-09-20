import { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    const elements = heroRef.current?.querySelectorAll(".fade-up");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center"
      style={{ background: "#F8F9F6" }}
    >
      <div className="container relative z-10 pt-28 pb-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Left: Headline */}
          <div>
            <h1
              className="fade-up font-display text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] leading-[1.1] mb-6"
              style={{ transitionDelay: "60ms", color: "#17201C" }}
            >
              Turn operational data<br />
              into decisions,{" "}
              <span style={{ color: "#245C46" }}>in plain English.</span>
            </h1>

            <p
              className="fade-up text-lg leading-relaxed mb-10 max-w-[520px]"
              style={{ transitionDelay: "120ms", color: "#5F6964" }}
            >
              Decision-ready intelligence for African manufacturers, starting in Mauritius. SHAKA AI sits on top of ERP systems and converts raw operational data into plain-English answers, risk alerts, and executive briefings. No SQL. No analyst bottleneck. Seconds, not days.
            </p>

            <div
              className="fade-up flex flex-wrap gap-4 mb-14"
              style={{ transitionDelay: "180ms" }}
            >
              <a
                href="https://drive.google.com/file/d/1KWaUycyDlfhQMUZLJ2P615F-02tZwiHN/view?usp=share_link"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 1a7 7 0 100 14A7 7 0 008 1zM6.5 5.5l4 2.5-4 2.5V5.5z" />
                </svg>
                See the Demo
              </a>
              <a
                href="mailto:strengthygivenncube@gmail.com"
                className="btn-secondary"
              >
                Get in Touch
              </a>
            </div>

            <div
              className="fade-up flex flex-wrap gap-10 pt-8 border-t border-[#DDE3DF]"
              style={{ transitionDelay: "240ms" }}
            >
              {[
                { value: "92%", label: "Token reduction", sub: "18K → 280 tokens" },
                { value: "5", label: "Intelligence modules", sub: "NL Query to Email" },
                { value: "Dual", label: "Runtime mode", sub: "Online + Offline" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="font-mono-data text-2xl font-semibold" style={{ color: "#12372A" }}>
                    {stat.value}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wide mt-0.5" style={{ color: "#17201C" }}>
                    {stat.label}
                  </span>
                  <span className="font-mono-data text-xs mt-0.5" style={{ color: "#5F6964" }}>
                    {stat.sub}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Enterprise dashboard panel */}
          <div className="fade-up hidden lg:block" style={{ transitionDelay: "300ms" }}>
            <div
              className="relative border rounded-sm overflow-hidden"
              style={{
                background: "#FFFFFF",
                borderColor: "#DDE3DF",
                boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.06)",
              }}
            >
              {/* Panel header */}
              <div
                className="flex items-center justify-between px-4 py-2.5 border-b"
                style={{ background: "#F8F9F6", borderColor: "#DDE3DF" }}
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono-data text-[10px] tracking-widest uppercase" style={{ color: "#5F6964" }}>
                    shaka_ai v1.0.0
                  </span>
                  <span style={{ color: "#DDE3DF" }}>·</span>
                  <span className="font-mono-data text-[10px]" style={{ color: "#5F6964" }}>
                    operational intelligence
                  </span>
                </div>
                <span
                  className="font-mono-data text-[10px] border px-1.5 py-0.5"
                  style={{ color: "#245C46", borderColor: "#A8BDAF", background: "#EDF3EF" }}
                >
                  ● DEMO MODE
                </span>
              </div>

              {/* Metrics bar */}
              <div className="grid grid-cols-4 border-b" style={{ borderColor: "#DDE3DF" }}>
                {[
                  { label: "POs Loaded", value: "25", alert: false },
                  { label: "At Risk", value: "8", alert: true },
                  { label: "Exposure", value: "$163K", alert: true },
                  { label: "Tokens Used", value: "280", alert: false },
                ].map((m) => (
                  <div
                    key={m.label}
                    className="px-3 py-2.5 border-r last:border-0"
                    style={{ borderColor: "#DDE3DF" }}
                  >
                    <div
                      className="font-mono-data text-sm font-semibold"
                      style={{ color: m.alert ? "#B91C1C" : "#17201C" }}
                    >
                      {m.value}
                    </div>
                    <div className="font-mono-data text-[10px]" style={{ color: "#5F6964" }}>
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Main content */}
              <div className="p-4 space-y-3">
                {/* Query input */}
                <div className="border rounded-sm p-3" style={{ background: "#F8F9F6", borderColor: "#DDE3DF" }}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono-data text-[10px] tracking-widest uppercase" style={{ color: "#4F7766" }}>
                      NL QUERY
                    </span>
                    <div className="flex-1 h-px" style={{ background: "#DDE3DF" }} />
                    <span className="font-mono-data text-[10px]" style={{ color: "#5F6964" }}>
                      intent: purchase_orders
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono-data text-xs" style={{ color: "#A8BDAF" }}>›</span>
                    <span className="font-mono-data text-sm" style={{ color: "#17201C" }}>
                      Which purchase orders are overdue?
                    </span>
                    <span
                      className="w-1.5 h-4 ml-1 animate-pulse"
                      style={{ background: "#245C46" }}
                    />
                  </div>
                </div>

                {/* Result */}
                <div className="border rounded-sm p-3" style={{ background: "#FFFFFF", borderColor: "#DDE3DF" }}>
                  <div className="flex items-center justify-between mb-2.5">
                    <span
                      className="font-mono-data text-[10px] tracking-widest uppercase font-semibold"
                      style={{ color: "#245C46" }}
                    >
                      QUERY RESULT
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="font-mono-data text-[10px]" style={{ color: "#5F6964" }}>280 tokens</span>
                      <span style={{ color: "#DDE3DF" }}>·</span>
                      <span className="font-mono-data text-[10px]" style={{ color: "#245C46" }}>12ms</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-4 pb-1.5 mb-1.5 border-b" style={{ borderColor: "#DDE3DF" }}>
                    {["Vendor", "Amount", "Delay", "Risk"].map((h) => (
                      <span key={h} className="font-mono-data text-[10px] uppercase tracking-wider" style={{ color: "#5F6964" }}>
                        {h}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-1.5">
                    {[
                      { vendor: "Acme Supplies", amount: "$48,200", delay: "14d", risk: "HIGH" },
                      { vendor: "Global Parts Co.", amount: "$23,750", delay: "7d", risk: "MED" },
                      { vendor: "TechFlow Systems", amount: "$91,400", delay: "21d", risk: "HIGH" },
                    ].map((row) => (
                      <div
                        key={row.vendor}
                        className="grid grid-cols-4 items-center py-1 border-b last:border-0"
                        style={{ borderColor: "#DDE3DF" }}
                      >
                        <span className="font-mono-data text-xs truncate pr-2" style={{ color: "#17201C" }}>
                          {row.vendor}
                        </span>
                        <span className="font-mono-data text-xs" style={{ color: "#5F6964" }}>{row.amount}</span>
                        <span className="font-mono-data text-xs" style={{ color: "#5F6964" }}>{row.delay}</span>
                        <span className={`font-mono-data text-[10px] px-1.5 py-0.5 w-fit ${
                          row.risk === "HIGH" ? "badge-risk-high" : "badge-risk-medium"
                        }`}>
                          {row.risk}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-2.5 pt-2.5 border-t" style={{ borderColor: "#DDE3DF" }}>
                    <p className="text-xs leading-relaxed" style={{ color: "#5F6964" }}>
                      3 POs overdue. Total exposure:{" "}
                      <span className="font-mono-data font-semibold" style={{ color: "#17201C" }}>$163,350</span>.
                      {" "}Escalate TechFlow Systems. 21d delay exceeds SLA threshold.
                    </p>
                  </div>
                </div>

                {/* Status bar */}
                <div className="flex items-center justify-between pt-0.5">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#245C46" }} />
                      <span className="font-mono-data text-[10px]" style={{ color: "#5F6964" }}>
                        4 datasets · 85 records
                      </span>
                    </div>
                    <span className="font-mono-data text-[10px]" style={{ color: "#DDE3DF" }}>|</span>
                    <span className="font-mono-data text-[10px]" style={{ color: "#5F6964" }}>preprocessor.py active</span>
                  </div>
                  <span className="font-mono-data text-[10px]" style={{ color: "#A8BDAF" }}>SHAKA AI v1.0.0</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
