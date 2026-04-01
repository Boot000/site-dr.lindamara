/*
 * AGUIAR & AGUIAR — Testimonials Section
 * Design: Cards com aspas tipográficas grandes, avatares com iniciais
 * Fundo: Areia com padrão sutil
 */

import { useEffect, useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ricardo Mendes",
    role: "Diretor Comercial — Construtora Mendes & Filhos",
    text: "A Dra. Lindamara foi fundamental para nossa empresa vencer uma licitação de grande porte. Seu conhecimento técnico e atenção aos detalhes do edital fizeram toda a diferença. Profissional excepcional!",
    rating: 5,
    initials: "RM",
    color: "#6B1F35",
  },
  {
    name: "Carla Rodrigues",
    role: "Gestora de Contratos — Prefeitura Municipal",
    text: "Contratamos a Aguiar & Aguiar para revisar nossos processos licitatórios e o resultado foi surpreendente. Identificaram irregularidades que poderiam nos causar sérios problemas. Recomendo sem hesitar.",
    rating: 5,
    initials: "CR",
    color: "#C06840",
  },
  {
    name: "Paulo Ferreira",
    role: "Sócio-fundador — TechGov Soluções",
    text: "Nossa empresa estava sendo injustamente desclassificada em pregões eletrônicos. A Dra. Lindamara elaborou recursos impecáveis e conseguimos reverter todas as decisões. Competência e dedicação raras.",
    rating: 5,
    initials: "PF",
    color: "#6B1F35",
  },
  {
    name: "Ana Beatriz Costa",
    role: "Empresária — Setor de Saúde",
    text: "O atendimento é diferenciado — ela realmente ouve e entende o seu negócio. Além de resolver meu problema jurídico, me ensinou a me prevenir para o futuro. Uma parceira de verdade.",
    rating: 5,
    initials: "AB",
    color: "#C06840",
  },
  {
    name: "Marcos Oliveira",
    role: "Gerente de Licitações — Grupo Oliveira",
    text: "Trabalhamos juntos há 3 anos e a qualidade do serviço só melhora. A Dra. Lindamara está sempre atualizada com as mudanças na legislação e nos mantém protegidos em todos os processos.",
    rating: 5,
    initials: "MO",
    color: "#6B1F35",
  },
  {
    name: "Fernanda Lima",
    role: "Coordenadora Jurídica — Cooperativa Agro",
    text: "Precisávamos de uma advogada que entendesse tanto o lado técnico quanto o humano das licitações. A Dra. Lindamara superou todas as expectativas. Nosso escritório de referência em licitações.",
    rating: 5,
    initials: "FL",
    color: "#C06840",
  },
];

export default function TestimonialsSection() {
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
      id="depoimentos"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-[#FAF5EF] relative overflow-hidden"
    >
      {/* Decorative blob */}
      <div
        className="absolute -top-20 -left-20 w-80 h-80 bg-[#E8C4B8]/30 blob-animate"
        style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}
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
              Depoimentos
            </span>
            <div className="w-8 h-px bg-[#C06840]" />
          </div>
          <h2
            className="font-display text-4xl lg:text-5xl font-bold text-[#3D3530] leading-tight mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            O que nossos clientes{" "}
            <span className="text-[#6B1F35] italic">dizem</span>
          </h2>
          <p
            className="text-[#3D3530]/65 max-w-xl mx-auto leading-relaxed font-body text-lg"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            A confiança dos nossos clientes é o nosso maior patrimônio.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="reveal group bg-white rounded-3xl p-7 shadow-sm hover:shadow-lg transition-all duration-400 hover:-translate-y-1 border border-[#E8C4B8]/30 relative overflow-hidden"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {/* Large quote mark */}
              <div
                className="absolute top-4 right-6 font-display text-8xl font-bold leading-none select-none opacity-10 group-hover:opacity-15 transition-opacity duration-300"
                style={{
                  color: testimonial.color,
                  fontFamily: "'Playfair Display', serif",
                  lineHeight: 1,
                }}
              >
                "
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[#C06840] text-[#C06840]"
                  />
                ))}
              </div>

              {/* Text */}
              <p
                className="text-[#3D3530]/75 leading-relaxed font-body text-sm mb-6 relative z-10"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#E8C4B8]/50">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{ backgroundColor: testimonial.color, fontFamily: "'DM Sans', sans-serif" }}
                >
                  {testimonial.initials}
                </div>
                <div>
                  <div
                    className="font-semibold text-[#3D3530] text-sm"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {testimonial.name}
                  </div>
                  <div
                    className="text-xs text-[#3D3530]/55 leading-tight"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 reveal">
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {[
              { label: "Google Reviews", value: "5.0 ★" },
              { label: "Clientes Ativos", value: "200+" },
              { label: "Anos de Atuação", value: "10+" },
              { label: "Taxa de Sucesso", value: "98%" },
            ].map((badge) => (
              <div key={badge.label} className="text-center">
                <div
                  className="font-display text-3xl font-bold text-[#6B1F35]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {badge.value}
                </div>
                <div
                  className="text-xs text-[#3D3530]/55 font-body mt-1 tracking-wide"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {badge.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
