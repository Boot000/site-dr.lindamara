/*
 * AGUIAR & AGUIAR — Footer Component
 * Design: Fundo Bordeaux escuro, tipografia clara, links organizados
 */

import { Scale, Heart, Instagram, Linkedin, Facebook } from "lucide-react";

const footerLinks = {
  "Navegação": [
    { label: "Início", href: "#inicio" },
    { label: "Sobre a Dra. Lindamara", href: "#sobre" },
    { label: "Especialidades", href: "#especialidades" },
    { label: "Como Trabalhamos", href: "#processo" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Contato", href: "#contato" },
  ],
  "Especialidades": [
    { label: "Licitações Públicas", href: "#especialidades" },
    { label: "Pregão Eletrônico", href: "#especialidades" },
    { label: "Contratos Administrativos", href: "#especialidades" },
    { label: "Recursos e Impugnações", href: "#especialidades" },
    { label: "Compliance Licitatório", href: "#especialidades" },
    { label: "Consultoria Jurídica", href: "#especialidades" },
  ],
};

export default function Footer() {
  const handleNavClick = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#3D3530] text-[#FAF5EF] relative overflow-hidden">
      {/* Top wave */}
      <div className="wave-divider">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 0 L0 30 Q360 60 720 30 Q1080 0 1440 30 L1440 0 Z" fill="#E8C4B8" fillOpacity="0.2" />
        </svg>
      </div>

      {/* Decorative blob */}
      <div
        className="absolute top-0 right-0 w-80 h-80 bg-[#6B1F35]/20 blob-animate"
        style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}
      />

      <div className="container relative z-10 pt-16 pb-8">
        <div className="grid lg:grid-cols-[1.5fr_1fr_1fr] gap-12 mb-12">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#6B1F35] flex items-center justify-center flex-shrink-0">
                <Scale className="w-5 h-5 text-[#FAF5EF]" />
              </div>
              <div>
                <div
                  className="font-display font-bold text-[#FAF5EF] text-xl leading-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Aguiar & Aguiar
                </div>
                <div
                  className="text-[10px] text-[#E8C4B8]/70 tracking-[0.2em] uppercase font-body"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Advocacia
                </div>
              </div>
            </div>

            <p
              className="text-[#FAF5EF]/60 text-sm leading-relaxed font-body mb-6 max-w-xs"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Assessoria jurídica especializada em licitações e direito administrativo,
              com o cuidado e a atenção que o seu caso merece.
            </p>

            <blockquote
              className="font-accent text-base italic text-[#E8C4B8]/80 border-l-2 border-[#C06840] pl-4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              "Direito que acolhe e protege."
            </blockquote>

            {/* Social links */}
            <div className="flex gap-3 mt-6">
              {[
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Facebook, href: "#", label: "Facebook" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#6B1F35] transition-colors duration-300"
                >
                  <Icon className="w-4 h-4 text-[#FAF5EF]/70 hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4
                className="font-display text-sm font-semibold text-[#E8C4B8] mb-5 tracking-wide"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                      className="text-sm text-[#FAF5EF]/55 hover:text-[#E8C4B8] transition-colors duration-200 font-body link-underline"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p
              className="text-xs text-[#FAF5EF]/40 font-body text-center sm:text-left"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              © {new Date().getFullYear()} Aguiar & Aguiar Advocacia. Todos os direitos reservados.
              <br />
              <span className="text-[#FAF5EF]/30">
                OAB/BR — Dra. Lindamara Mota Aguiar
              </span>
            </p>
            <p
              className="text-xs text-[#FAF5EF]/30 font-body flex items-center gap-1"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Feito com <Heart className="w-3 h-3 text-[#C06840] fill-[#C06840]" /> para servir com excelência
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
