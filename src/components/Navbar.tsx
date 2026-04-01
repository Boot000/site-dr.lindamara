/*
 * AGUIAR & AGUIAR — Navbar Component
 * Design: Calor Contemporâneo — Humanismo Orgânico Moderno
 * Comportamento: Transparente no topo, sólido com scroll
 */

import { useState, useEffect } from "react";
import { Menu, X, Scale } from "lucide-react";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Processo", href: "#processo" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      // Update active section
      const sections = navLinks.map(l => l.href.replace("#", ""));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#FAF5EF]/95 backdrop-blur-md shadow-sm border-b border-[#E8C4B8]/40"
            : "bg-transparent"
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a
              href="#inicio"
              onClick={(e) => { e.preventDefault(); handleNavClick("#inicio"); }}
              className="flex items-center gap-3 group"
            >
              <div className="w-9 h-9 rounded-full bg-[#6B1F35] flex items-center justify-center flex-shrink-0 group-hover:bg-[#C06840] transition-colors duration-300">
                <Scale className="w-4 h-4 text-[#FAF5EF]" />
              </div>
              <div className="leading-none">
                <div
                  className="font-display font-bold text-[#6B1F35] text-lg leading-tight tracking-wide"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Aguiar & Aguiar
                </div>
                <div
                  className="text-[10px] text-[#C06840] tracking-[0.2em] uppercase font-body font-medium"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Advocacia
                </div>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className={`text-sm font-body font-medium tracking-wide transition-colors duration-200 link-underline ${
                    activeSection === link.href.replace("#", "")
                      ? "text-[#6B1F35]"
                      : "text-[#3D3530]/70 hover:text-[#6B1F35]"
                  }`}
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="#contato"
                onClick={(e) => { e.preventDefault(); handleNavClick("#contato"); }}
                className="btn-fill px-6 py-2.5 bg-[#6B1F35] text-[#FAF5EF] rounded-full text-sm font-body font-medium tracking-wide hover:bg-[#5a1a2c] transition-colors duration-300"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Consulta Gratuita
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden w-10 h-10 flex items-center justify-center text-[#6B1F35]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-400 lg:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-[#6B1F35]/95 backdrop-blur-md"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-[#FAF5EF] shadow-2xl transition-transform duration-400 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-8 pt-24 flex flex-col gap-6">
            <div
              className="font-display text-2xl text-[#6B1F35] font-bold mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Menu
            </div>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="text-[#3D3530] font-body text-lg font-medium hover:text-[#6B1F35] transition-colors duration-200 border-b border-[#E8C4B8]/50 pb-4"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={(e) => { e.preventDefault(); handleNavClick("#contato"); }}
              className="mt-4 px-6 py-3 bg-[#6B1F35] text-[#FAF5EF] rounded-full text-center font-body font-medium"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Consulta Gratuita
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
