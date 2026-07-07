/**
 * SHAKA AI Navigation
 * Design: Obsidian Command - thin top bar, amber logo mark, monospace brand name
 * Behavior: transparent on hero, scrolls to opaque with blur
 */

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
        scrolled ? "nav-scrolled" : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-8 h-8 flex items-center justify-center">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663700527934/hOHijKPVQbaUPgnj.png"
                alt="SHAKA AI Logo"
                className="w-8 h-8 object-contain"
              />
            </div>
            <span className="font-mono-data text-sm font-semibold tracking-widest text-white uppercase">
              SHAKA<span className="text-amber ml-1">AI</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs font-medium tracking-wider uppercase text-steel hover:text-amber transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://drive.google.com/file/d/1KWaUycyDlfhQMUZLJ2P615F-02tZwiHN/view?usp=share_link"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-amber text-xs rounded-none"
            >
              See the Demo
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-steel hover:text-amber transition-colors"
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

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#080A0D] border-t border-steel-border">
          <div className="container py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-steel hover:text-amber transition-colors py-2 border-b border-[#1E2530]"
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-3 pt-2">
              <a
                href="https://drive.google.com/file/d/1KWaUycyDlfhQMUZLJ2P615F-02tZwiHN/view?usp=share_link"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-amber text-xs rounded-none flex-1 text-center"
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
