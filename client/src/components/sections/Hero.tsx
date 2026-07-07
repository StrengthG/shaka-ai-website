/**
 * SHAKA AI — Hero Section
 * Design: Obsidian Command
 * Layout: Asymmetric — headline anchors left, authoritative terminal mock on right
 * Amber discipline: CTAs, metrics, status labels only — no atmospheric glow
 */

import { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

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

    const elements = heroRef.current?.querySelectorAll(".fade-up");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#080A0D" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: "url('https://files.manuscdn.com/user_upload_by_module/session_file/310519663700527934/GVhikPjMnjRiPEAQ.png')" }}
      />

      {/* Gradient overlay — strong left fade */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#080A0D] via-[#080A0D]/85 to-[#080A0D]/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#080A0D] via-transparent to-[#080A0D]/30" />

      {/* Infrastructure grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(30,37,48,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(30,37,48,0.25) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container relative z-10 pt-24 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Headline */}
          <div>
            {/* Version badge */}
            <div className="fade-up inline-flex items-center gap-3 mb-8">
              <span className="font-mono-data text-xs text-amber tracking-widest uppercase border border-amber/30 px-3 py-1 bg-amber/5">
                v1.0.0 — Now Available
              </span>
              <span className="font-mono-data text-xs text-[#3A4555]">Mauritius · SADC · Pan-African</span>
            </div>

            {/* Main headline */}
            <h1
              className="fade-up font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight text-white mb-6"
              style={{ transitionDelay: "60ms" }}
            >
              Turn operational data into decisions,
              <br />
              <em className="text-amber not-italic">in plain English.</em>
            </h1>

            {/* Subhead */}
            <p
              className="fade-up text-lg text-[#7A8499] leading-relaxed mb-10 max-w-xl"
              style={{ transitionDelay: "120ms" }}
            >
              Decision-ready intelligence for African manufacturers, starting in Mauritius. SHAKA AI sits on top of ERP systems and converts raw operational data into plain-English answers, risk alerts, and executive briefings. No SQL. No analyst bottleneck. Seconds, not days.
            </p>

            {/* CTAs */}
            <div
              className="fade-up flex flex-wrap gap-4 mb-12"
              style={{ transitionDelay: "180ms" }}
            >
              <a
                href="https://drive.google.com/file/d/1KWaUycyDlfhQMUZLJ2P615F-02tZwiHN/view?usp=share_link"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-amber rounded-none inline-flex items-center gap-2 text-sm px-6 py-3"
              >
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 1a7 7 0 100 14A7 7 0 008 1zM6.5 5.5l4 2.5-4 2.5V5.5z" />
                </svg>
                See the Demo
              </a>

            </div>

            {/* Stats row */}
            <div
              className="fade-up flex flex-wrap gap-8"
              style={{ transitionDelay: "240ms" }}
            >
              {[
                { value: "92%", label: "Token reduction", sub: "18K → 280 tokens" },
                { value: "5", label: "Intelligence modules", sub: "NL Query to Email" },
                { value: "Dual", label: "Runtime mode", sub: "Online + Offline" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="font-mono-data text-2xl font-semibold text-amber">{stat.value}</span>
                  <span className="text-xs font-medium text-white uppercase tracking-wider">{stat.label}</span>
                  <span className="font-mono-data text-xs text-[#3A4555]">{stat.sub}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Authoritative terminal mock */}
          <div className="fade-up hidden lg:block" style={{ transitionDelay: "300ms" }}>
            <div className="relative">
              {/* Terminal frame */}
              <div
                className="relative rounded-none border border-[#1E2530] overflow-hidden"
                style={{
                  background: "#0A0D12",
                  boxShadow: "0 0 60px rgba(0,0,0,0.8), 0 0 0 1px rgba(30,37,48,0.5)",
                }}
              >
                {/* Terminal header bar */}
                <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#1E2530] bg-[#0F1318]">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#10B981]/50" />
                  </div>
                  <span className="font-mono-data text-xs text-[#3A4555] ml-2">shaka_ai v1.0.0 | operational intelligence</span>
                  <div className="ml-auto">
                    <span className="font-mono-data text-[10px] text-[#10B981] border border-[#10B981]/30 px-1.5 py-0.5 bg-[#10B981]/5">
                      ● DEMO MODE
                    </span>
                  </div>
                </div>

                {/* Top metrics bar */}
                <div className="grid grid-cols-4 border-b border-[#1E2530]">
                  {[
                    { label: "POs Loaded", value: "25", alert: false },
                    { label: "At Risk", value: "8", alert: true },
                    { label: "Exposure", value: "$163K", alert: true },
                    { label: "Tokens Used", value: "280", alert: false },
                  ].map((m) => (
                    <div key={m.label} className="px-3 py-2 border-r border-[#1E2530] last:border-0">
                      <div className={`font-mono-data text-sm font-semibold ${m.alert ? "text-amber" : "text-white"}`}>
                        {m.value}
                      </div>
                      <div className="font-mono-data text-[10px] text-[#3A4555]">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Terminal content */}
                <div className="p-4 space-y-3">
                  {/* Query input */}
                  <div className="border border-[#1E2530] bg-[#080A0D] p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-mono-data text-[10px] text-amber tracking-widest">NL QUERY</span>
                      <div className="flex-1 h-px bg-[#1E2530]" />
                      <span className="font-mono-data text-[10px] text-[#3A4555]">intent: purchase_orders</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono-data text-xs text-[#3A4555]">›</span>
                      <span className="font-mono-data text-sm text-white">Which purchase orders are overdue?</span>
                      <span className="w-1.5 h-4 bg-amber/80 animate-pulse ml-1" />
                    </div>
                  </div>

                  {/* Response card */}
                  <div className="border border-[#1E2530] bg-[#0F1318] p-3">
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="font-mono-data text-[10px] text-amber font-semibold tracking-widest">QUERY RESULT</span>
                      <div className="flex items-center gap-2">
                        <span className="font-mono-data text-[10px] text-[#3A4555]">280 tokens</span>
                        <span className="font-mono-data text-[10px] text-[#3A4555]">·</span>
                        <span className="font-mono-data text-[10px] text-[#10B981]">12ms</span>
                      </div>
                    </div>
                    {/* Column headers */}
                    <div className="grid grid-cols-4 pb-1.5 mb-1.5 border-b border-[#1E2530]">
                      {["Vendor", "Amount", "Delay", "Risk"].map((h) => (
                        <span key={h} className="font-mono-data text-[10px] text-[#3A4555] uppercase tracking-wider">
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
                          className="grid grid-cols-4 items-center py-1 border-b border-[#1E2530]/50 last:border-0"
                        >
                          <span className="font-mono-data text-xs text-white truncate pr-2">{row.vendor}</span>
                          <span className="font-mono-data text-xs text-[#7A8499]">{row.amount}</span>
                          <span className="font-mono-data text-xs text-[#7A8499]">{row.delay}</span>
                          <span
                            className={`font-mono-data text-[10px] px-1.5 py-0.5 w-fit ${
                              row.risk === "HIGH" ? "badge-risk-high" : "badge-risk-medium"
                            }`}
                          >
                            {row.risk}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-2.5 pt-2.5 border-t border-[#1E2530]">
                      <p className="text-xs text-[#7A8499] leading-relaxed">
                        3 POs overdue. Total exposure:{" "}
                        <span className="text-amber font-mono-data font-semibold">$163,350</span>. Escalate TechFlow Systems. 21d delay exceeds SLA threshold.
                      </p>
                    </div>
                  </div>

                  {/* Status bar */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                        <span className="font-mono-data text-[10px] text-[#3A4555]">4 datasets · 85 records</span>
                      </div>
                      <span className="font-mono-data text-[10px] text-[#1E2530]">|</span>
                      <span className="font-mono-data text-[10px] text-[#3A4555]">preprocessor.py active</span>
                    </div>
                    <span className="font-mono-data text-[10px] text-[#3A4555]">SHAKA AI v1.0.0</span>
                  </div>
                </div>
              </div>

              {/* Amber corner accents - amber as structural signal, not decoration */}
              <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-amber" />
              <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-amber" />
              <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-amber" />
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-amber" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080A0D] to-transparent" />
    </section>
  );
}
