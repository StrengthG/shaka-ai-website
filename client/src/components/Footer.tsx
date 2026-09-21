export default function Footer() {
  return (
    <footer
      className="relative py-16"
      style={{ background: "#0B261C" }}
    >
      <div className="container">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663700527934/hOHijKPVQbaUPgnj.png"
                alt="SHAKA AI Logo"
                className="w-7 h-7 object-contain"
              />
              <span className="font-mono-data text-sm font-semibold tracking-widest uppercase" style={{ color: "#FFFFFF" }}>
                SHAKA<span className="ml-1" style={{ color: "#A8BDAF" }}>AI</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-5 max-w-xs" style={{ color: "#A8BDAF" }}>
              Enterprise operational intelligence platform. An AI layer that converts raw ERP data into decision-ready intelligence.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="font-mono-data text-xs tracking-widest uppercase mb-5"
              style={{ color: "#A8BDAF" }}
            >
              Navigate
            </h4>
            <ul className="space-y-2.5">
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
                    className="text-sm transition-colors duration-150"
                    style={{ color: "#A8BDAF" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#A8BDAF")}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="font-mono-data text-xs tracking-widest uppercase mb-5"
              style={{ color: "#A8BDAF" }}
            >
              Contact
            </h4>
            <div className="space-y-3 mb-8">
              <a
                href="mailto:strengthygivenncube@gmail.com"
                className="flex items-center gap-2 text-sm transition-colors"
                style={{ color: "#A8BDAF" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#A8BDAF")}
              >
                <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                strengthygivenncube@gmail.com
              </a>
            </div>

            <a
              href="mailto:strengthygivenncube@gmail.com"
              className="btn-primary text-xs"
              style={{ background: "#245C46", borderColor: "#245C46" }}
            >
              Contact
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderColor: "rgba(168,189,175,0.15)" }}
        >
          <span className="font-mono-data text-xs" style={{ color: "#4F7766" }}>
            © 2026 SHAKA AI. Built by Strength-Given Ncube.
          </span>
        </div>
      </div>
    </footer>
  );
}
