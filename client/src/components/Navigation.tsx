import { useEffect, useState } from "react";

const navLinks = [
  { label: "The Problem", href: "#problem" },
  { label: "Platform", href: "#platform" },
  { label: "How It Works", href: "#architecture" },
  { label: "Built for Trust", href: "#trust" },
  { label: "Founder", href: "#founder" },
  { label: "Vision", href: "#vision" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-scrolled" : "bg-white border-b border-[#DDE3DF]"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex items-center gap-2.5"
          >
            <div className="w-7 h-7 flex items-center justify-center">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663700527934/hOHijKPVQbaUPgnj.png"
                alt="SHAKA AI Logo"
                width="28"
                height="28"
                decoding="async"
                className="w-7 h-7 object-contain"
              />
            </div>
            <span className="font-mono-data text-sm font-semibold tracking-widest uppercase" style={{ color: "#17201C" }}>
              SHAKA<span style={{ color: "#245C46" }} className="ml-1">AI</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs font-medium tracking-wider uppercase transition-colors duration-150"
                style={{ color: "#5F6964" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#245C46")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#5F6964")}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center">
            <a
              href="https://drive.google.com/file/d/1KWaUycyDlfhQMUZLJ2P615F-02tZwiHN/view?usp=share_link"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs"
            >
              See the Demo
            </a>
          </div>

          <button
            className="lg:hidden p-2 transition-colors"
            style={{ color: "#5F6964" }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className={`block h-px bg-current transition-all duration-200 ${mobileOpen ? "rotate-45 translate-y-1.5" : ""}`} />
              <span className={`block h-px bg-current transition-all duration-200 ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-px bg-current transition-all duration-200 ${mobileOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[#DDE3DF]">
          <div className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium py-2.5 border-b border-[#DDE3DF] transition-colors duration-150"
                style={{ color: "#5F6964" }}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4">
              <a
                href="https://drive.google.com/file/d/1KWaUycyDlfhQMUZLJ2P615F-02tZwiHN/view?usp=share_link"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs w-full justify-center"
              >
                See the Demo
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
