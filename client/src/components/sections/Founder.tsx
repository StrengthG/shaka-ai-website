/**
 * SHAKA AI - Founder Section
 * Design: Obsidian Command
 * Layout: Asymmetric - bio left, branded executive dossier card right
 * Founder: Strength-Given Ncube, Founder & CEO
 * Note: Portrait uses branded executive dossier card with amber data-frame language
 */

import { useEffect, useRef } from "react";

export default function Founder() {
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
      id="founder"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      style={{ background: "#080A0D" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-right-bottom opacity-15"
        style={{ backgroundImage: "url('/manus-storage/shaka-founder-bg_7f09b44e.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#080A0D] via-[#080A0D]/95 to-[#080A0D]/70" />

      {/* Infrastructure grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(30,37,48,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(30,37,48,0.15) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container relative z-10">
        {/* Section label */}
        <div className="fade-up flex items-center gap-3 mb-12">
          <div className="w-8 h-px bg-amber" />
          <span className="font-mono-data text-xs text-amber tracking-widest uppercase">Founder</span>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start lg:flex-row flex-col-reverse">
          {/* Left: Bio - takes 3 cols */}
          <div className="lg:col-span-3">
            <div className="fade-up mb-2" style={{ transitionDelay: "60ms" }}>
              <span className="font-mono-data text-xs text-[#3A4555] tracking-widest uppercase">Founder & CEO</span>
            </div>
            <h2
              className="fade-up font-display text-4xl lg:text-5xl text-white leading-tight mb-6"
              style={{ transitionDelay: "120ms" }}
            >
              Strength-Given<br />
              <span className="text-amber">Ncube</span>
            </h2>

            <div className="fade-up space-y-4 mb-8" style={{ transitionDelay: "180ms" }}>
              <p className="text-[#7A8499] leading-relaxed">
                Strength-Given Ncube is an African AI systems builder who built SHAKA AI to solve a problem he observed directly: enterprises across Africa and emerging markets are running on ERP systems full of valuable operational data that nobody can access without a SQL analyst.
              </p>
              <p className="text-[#7A8499] leading-relaxed">
                His approach is engineering-first. SHAKA AI is not an AI wrapper. It is a purpose-built intelligence layer with a deterministic preprocessing engine, a dual-mode runtime, and a TF-IDF retrieval system designed for auditability and cost efficiency at enterprise scale.
              </p>
              <p className="text-[#7A8499] leading-relaxed">
                The mission is clear: democratise access to operational intelligence for African enterprises, governments, and SMEs first. Then take that same infrastructure global. Africa is not a test market. It is the primary market, and the problems here are the same problems Fortune 500 companies face.
              </p>
            </div>

            {/* Principles */}
            <div className="fade-up grid sm:grid-cols-3 gap-4 mb-8" style={{ transitionDelay: "240ms" }}>
              {[
                { label: "Engineering-first", body: "Every design decision is justified by a production architecture requirement." },
                { label: "Africa-built", body: "Solving African enterprise problems with African engineering talent." },
                { label: "Globally ambitious", body: "The infrastructure built for Africa scales to any enterprise, anywhere." },
              ].map((item) => (
                <div key={item.label} className="border-l-2 border-amber/30 pl-4">
                  <div className="font-mono-data text-xs text-amber font-semibold mb-1">{item.label}</div>
                  <p className="text-xs text-[#7A8499] leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>

            {/* Contact */}
            <div className="fade-up flex flex-wrap gap-4" style={{ transitionDelay: "300ms" }}>
              <a
                href="mailto:strengthygivenncube@gmail.com"
                className="btn-ghost rounded-none inline-flex items-center gap-2 text-xs"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                strengthygivenncube@gmail.com
              </a>
              <a
                href="https://github.com/StrengthG"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost rounded-none inline-flex items-center gap-2 text-xs"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                github.com/StrengthG
              </a>

            </div>
          </div>

          {/* Right: Executive dossier card - 2 cols */}
          <div className="lg:col-span-2 fade-up order-first lg:order-last" style={{ transitionDelay: "360ms" }}>
            <div className="relative">
              {/* Dossier card */}
              <div
                className="border border-[#1E2530] overflow-hidden"
                style={{ background: "#0F1318" }}
              >
                {/* Card header */}
                <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#1E2530] bg-[#0A0D12]">
                  <span className="font-mono-data text-[10px] text-[#3A4555] tracking-widest uppercase">Executive Profile</span>
                  <span className="font-mono-data text-[10px] text-amber border border-amber/30 px-1.5 py-0.5 bg-amber/5">
                    FOUNDER · CEO
                  </span>
                </div>

                {/* Portrait area */}
                <div className="relative overflow-hidden" style={{ aspectRatio: "4/5" }}>
                  {/* Founder photo — object-position tuned so face is always centred */}
                  <img
                    src="/manus-storage/founder-portrait_6f8dfe38.jpeg"
                    alt="Strength-Given Ncube, Founder & CEO of SHAKA AI"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ objectPosition: "center 20%" }}
                  />
                  {/* Subtle dark overlay at bottom for text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1318]/80 via-transparent to-transparent" />

                  {/* Corner data labels */}
                  <div className="absolute top-3 left-3">
                    <span className="font-mono-data text-[10px] text-white/70 bg-[#0A0D12]/60 px-1.5 py-0.5">ZWE → Global</span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="font-mono-data text-[10px] text-white/70 bg-[#0A0D12]/60 px-1.5 py-0.5">2025</span>
                  </div>
                  {/* Name overlay at bottom */}
                  <div className="absolute bottom-3 left-4">
                    <span className="font-mono-data text-[10px] text-[#3A4555] tracking-widest">STRENGTH-GIVEN NCUBE</span>
                  </div>
                </div>

                {/* Profile data */}
                <div className="p-4 space-y-3">
                  <div className="border-b border-[#1E2530] pb-3">
                    <div className="font-display text-xl text-white">Strength-Given Ncube</div>
                    <div className="font-mono-data text-xs text-amber mt-0.5">Founder & CEO, SHAKA AI</div>
                  </div>

                  {[
                    { label: "Role", value: "AI Systems Builder" },
                    { label: "Focus", value: "Enterprise Intelligence" },
                    { label: "Origin", value: "Africa" },
                    { label: "Mission", value: "Democratise ERP intelligence" },
                    { label: "Status", value: "v1.0.0 shipped" },
                  ].map((row) => (
                    <div key={row.label} className="flex justify-between items-center py-1 border-b border-[#1E2530]/50 last:border-0">
                      <span className="font-mono-data text-[10px] text-[#3A4555] uppercase tracking-wider">{row.label}</span>
                      <span className="font-mono-data text-xs text-white">{row.value}</span>
                    </div>
                  ))}
                </div>

                {/* Card footer */}
                <div className="flex items-center justify-between px-4 py-2.5 border-t border-[#1E2530] bg-[#0A0D12]">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                    <span className="font-mono-data text-[10px] text-[#3A4555]">Active · Building</span>
                  </div>
                  <span className="font-mono-data text-[10px] text-[#3A4555]">SHAKA AI</span>
                </div>
              </div>

              {/* Amber corner accents */}
              <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-amber" />
              <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-amber" />
              <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-amber" />
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-amber" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
