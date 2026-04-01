/*
 * AGUIAR & AGUIAR — Licitação Highlight Section
 * Design: Full-width com imagem de fundo, overlay Bordeaux, texto claro
 * Posição: Entre Especialidades e Processo
 */

import { useEffect, useRef } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

const highlights = [
  "Nova Lei de Licitações (Lei 14.133/2021)",
  "Pregão Eletrônico e Presencial",
  "Concorrência e Tomada de Preços",
  "Dispensa e Inexigibilidade",
  "Contratos Administrativos",
  "Sanções e Penalidades",
];

export default function LicitacaoHighlight() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 150);
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663503360845/SphSS3WP2AX9ZWZMwk7BBJ/licitacao-bg-Rk6YxygBRiBMJRUcGWRwaa.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#6B1F35]/88" />

      {/* Grain texture */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: "200px",
        }}
      />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="reveal flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#E8C4B8]/60" />
              <span
                className="text-xs text-[#E8C4B8]/80 font-medium tracking-widest uppercase font-body"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Especialidade Principal
              </span>
            </div>

            <h2
              className="reveal font-display text-4xl lg:text-5xl font-bold text-[#FAF5EF] leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Referência em{" "}
              <span className="text-[#E8C4B8] italic">Licitações</span>{" "}
              Públicas
            </h2>

            <p
              className="reveal text-[#FAF5EF]/70 leading-relaxed font-body text-lg mb-8"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Com profundo conhecimento da Nova Lei de Licitações e das melhores
              práticas do mercado, a Dra. Lindamara oferece assessoria completa
              em todas as modalidades licitatórias, garantindo segurança jurídica
              e competitividade para o seu negócio.
            </p>

            <blockquote
              className="reveal font-accent text-xl italic text-[#E8C4B8]/80 border-l-4 border-[#C06840] pl-6 mb-10"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              "Conhecimento técnico profundo aliado a uma visão estratégica
              do processo licitatório — essa é a nossa diferença."
            </blockquote>

            <div className="reveal">
              <a
                href="#contato"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-fill inline-flex items-center gap-2 px-8 py-4 bg-[#FAF5EF] text-[#6B1F35] rounded-full font-body font-semibold hover:bg-[#E8C4B8] transition-all duration-300 group"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Consultar Agora
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Right — Checklist */}
          <div className="reveal">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <h3
                className="font-display text-xl font-bold text-[#FAF5EF] mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Modalidades que atendemos:
              </h3>
              <ul className="space-y-4">
                {highlights.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#E8C4B8] flex-shrink-0" />
                    <span
                      className="text-[#FAF5EF]/80 font-body"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="grid grid-cols-3 gap-4 text-center">
                  {[
                    { value: "100%", label: "Digital" },
                    { value: "24h", label: "Resposta" },
                    { value: "BR", label: "Nacional" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <div
                        className="font-display text-2xl font-bold text-[#E8C4B8]"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {stat.value}
                      </div>
                      <div
                        className="text-xs text-[#FAF5EF]/50 font-body mt-1"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
