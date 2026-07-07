/**
 * SHAKA AI - Footer
 * Design: Obsidian Command
 * Layout: Minimal - logo, links, contact, copyright
 */

export default function Footer() {
  return (
    <footer
      className="relative py-16 border-t border-[#1E2530]"
      style={{ background: "#080A0D" }}
    >
      {/* Geometric pattern */}
      <div className="absolute inset-0 ndebele-pattern opacity-20" />

      <div className="container relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <img
                src="/manus-storage/shaka-logo_fac48c32.png"
                alt="SHAKA AI Logo"
                className="w-8 h-8 object-contain"
              />
              <span className="font-mono-data text-sm font-semibold tracking-widest text-white uppercase">
                SHAKA<span className="text-amber ml-1">AI</span>
              </span>
            </div>
            <p className="text-sm text-steel leading-relaxed mb-4 max-w-xs">
              Enterprise operational intelligence platform. An AI layer that converts raw ERP data into decision-ready intelligence.
            </p>
            <span className="font-mono-data text-xs text-amber border border-amber/30 px-2 py-1 bg-amber/5">
              v1.0.0 | Africa-built · Globally ready
            </span>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-mono-data text-xs text-amber tracking-widest uppercase mb-4">Navigate</h4>
            <ul className="space-y-2">
              {[
                { label: "The Problem", href: "#problem" },
                { label: "The Platform", href: "#platform" },
                { label: "How It Works", href: "#architecture" },
                { label: "Built for Trust", href: "#trust" },
                { label: "Founder", href: "#founder" },
                { label: "Vision & Roadmap", href: "#vision" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-sm text-steel hover:text-amber transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono-data text-xs text-amber tracking-widest uppercase mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="mailto:strengthygivenncube@gmail.com"
                className="flex items-center gap-2 text-sm text-steel hover:text-amber transition-colors group"
              >
                <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                strengthygivenncube@gmail.com
              </a>
              <a
                href="https://github.com/StrengthG/ShakaAI"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-steel hover:text-amber transition-colors"
              >
                <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                github.com/StrengthG/ShakaAI
              </a>
            </div>

            <div className="mt-6">
              <h4 className="font-mono-data text-xs text-amber tracking-widest uppercase mb-3">Quick Actions</h4>
              <div className="flex gap-3">
                <a
                  href="https://github.com/StrengthG/ShakaAI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost text-xs rounded-none"
                >
                  GitHub
                </a>
                <a
                  href="mailto:strengthygivenncube@gmail.com"
                  className="btn-amber text-xs rounded-none"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1E2530] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-mono-data text-xs text-steel">
              © 2025 SHAKA AI. Built by Strength-Given Ncube.
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-mono-data text-xs text-steel/50">Africa-built · Globally ready</span>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
              <span className="font-mono-data text-xs text-steel">v1.0.0</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
