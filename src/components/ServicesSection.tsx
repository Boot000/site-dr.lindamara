/*
 * AGUIAR & AGUIAR — Services Section
 * Design: Cards com borda superior colorida, ícones de traço fino
 * Fundo: Rosé claro alternando com Areia
 */

import { useEffect, useRef } from "react";
import {
  FileText,
  Shield,
  Search,
  Gavel,
  ClipboardCheck,
  AlertTriangle,
  Building2,
  Scale,
} from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Elaboração de Editais",
    description:
      "Assessoria completa na elaboração e revisão de editais de licitação, garantindo conformidade com a Lei 14.133/2021 e demais normas aplicáveis.",
    color: "#6B1F35",
    accent: "#E8C4B8",
  },
  {
    icon: Shield,
    title: "Impugnação de Editais",
    description:
      "Análise criteriosa e elaboração de impugnações fundamentadas, protegendo os interesses do seu negócio em processos licitatórios.",
    color: "#C06840",
    accent: "#F5EDE4",
  },
  {
    icon: Search,
    title: "Análise de Contratos",
    description:
      "Revisão detalhada de contratos administrativos, identificando cláusulas abusivas e garantindo equilíbrio econômico-financeiro.",
    color: "#6B1F35",
    accent: "#E8C4B8",
  },
  {
    icon: Gavel,
    title: "Recursos Administrativos",
    description:
      "Elaboração e acompanhamento de recursos em todas as fases do processo licitatório, com argumentação técnica e jurídica sólida.",
    color: "#C06840",
    accent: "#F5EDE4",
  },
  {
    icon: ClipboardCheck,
    title: "Compliance Licitatório",
    description:
      "Implementação de programas de conformidade para empresas que participam de licitações, prevenindo irregularidades e sanções.",
    color: "#6B1F35",
    accent: "#E8C4B8",
  },
  {
    icon: AlertTriangle,
    title: "Defesa em Processos",
    description:
      "Representação em processos administrativos sancionatórios, defesa contra penalidades e habilitação de empresas suspensas.",
    color: "#C06840",
    accent: "#F5EDE4",
  },
  {
    icon: Building2,
    title: "Pregão Eletrônico",
    description:
      "Suporte completo em pregões eletrônicos: preparação de propostas, lances, habilitação e acompanhamento em plataformas como ComprasNet e BNC.",
    color: "#6B1F35",
    accent: "#E8C4B8",
  },
  {
    icon: Scale,
    title: "Consultoria Jurídica",
    description:
      "Assessoria jurídica contínua para órgãos públicos e empresas privadas em todas as questões relacionadas ao direito administrativo e licitações.",
    color: "#C06840",
    accent: "#F5EDE4",
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="especialidades"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-[#E8C4B8]/20 relative overflow-hidden"
    >
      {/* Background image overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663503360845/SphSS3WP2AX9ZWZMwk7BBJ/licitacao-bg-Rk6YxygBRiBMJRUcGWRwaa.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#C06840]" />
            <span
              className="text-xs text-[#C06840] font-medium tracking-widest uppercase font-body"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Áreas de Atuação
            </span>
            <div className="w-8 h-px bg-[#C06840]" />
          </div>
          <h2
            className="font-display text-4xl lg:text-5xl font-bold text-[#3D3530] leading-tight mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Especialidades que{" "}
            <span className="text-[#6B1F35] italic">fazem a diferença</span>
          </h2>
          <p
            className="text-[#3D3530]/65 max-w-2xl mx-auto leading-relaxed font-body text-lg"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Atuação focada e especializada em direito administrativo e licitações,
            com profundo conhecimento da legislação vigente e das melhores práticas do mercado.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="reveal group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-400 hover:-translate-y-1 cursor-default border border-transparent hover:border-[#E8C4B8]"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {/* Top accent bar */}
                <div
                  className="w-full h-1 rounded-full mb-5 transition-all duration-300 group-hover:h-1.5"
                  style={{ backgroundColor: service.color }}
                />

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{ backgroundColor: service.accent }}
                >
                  <Icon
                    className="w-5 h-5"
                    style={{ color: service.color }}
                  />
                </div>

                {/* Title */}
                <h3
                  className="font-display text-lg font-semibold text-[#3D3530] mb-3 leading-tight group-hover:text-[#6B1F35] transition-colors duration-300"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm text-[#3D3530]/65 leading-relaxed font-body"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {service.description}
                </p>

                {/* Arrow */}
                <div className="mt-4 flex items-center gap-1 text-[#C06840] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs font-medium font-body" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    Saiba mais
                  </span>
                  <span className="text-sm">→</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14 reveal">
          <p
            className="font-accent text-xl italic text-[#6B1F35]/70 mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Não encontrou o que procura? Entre em contato para uma avaliação personalizada.
          </p>
          <a
            href="#contato"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-fill inline-flex items-center gap-2 px-8 py-4 bg-[#6B1F35] text-[#FAF5EF] rounded-full font-body font-medium tracking-wide hover:bg-[#5a1a2c] transition-all duration-300 shadow-lg shadow-[#6B1F35]/20"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Falar com a Dra. Lindamara
          </a>
        </div>
      </div>
    </section>
  );
}
