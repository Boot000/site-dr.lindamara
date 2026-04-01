/*
 * AGUIAR & AGUIAR — About Section
 * Design: Split layout com foto à esquerda, texto à direita
 * Elementos: Linha dourada, citação em Cormorant, timeline de formação
 */

import { useEffect, useRef } from "react";
import { Award, BookOpen, Users, CheckCircle2 } from "lucide-react";

const credentials = [
  { icon: Award, text: "Pós-graduada em Direito Administrativo e Licitações" },
  { icon: BookOpen, text: "Especialista na Nova Lei de Licitações (Lei 14.133/2021)" },
  { icon: Users, text: "Atendimento personalizado para empresas e pessoas físicas" },
  { icon: CheckCircle2, text: "Atuação em todo o território nacional" },
];

export default function AboutSection() {
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
      id="sobre"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-[#FAF5EF] relative overflow-hidden"
    >
      {/* Decorative element */}
      <div
        className="absolute top-0 right-0 w-64 h-64 bg-[#E8C4B8]/20 opacity-60"
        style={{ borderRadius: "0 0 0 100%" }}
      />

      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          {/* Left — Image */}
          <div className="relative reveal">
            {/* Background accent */}
            <div className="absolute -top-6 -left-6 w-full h-full bg-[#E8C4B8]/40 rounded-3xl" />

            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/sobre.jpeg"
                alt="Dra. Lindamara Mota Aguiar"
                className="w-full h-[500px] lg:h-[600px] object-cover object-top"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#6B1F35]/30 via-transparent to-transparent" />
            </div>

            {/* Name card overlay */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-5 shadow-lg">
              <div
                className="font-display text-xl font-bold text-[#6B1F35]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Dra. Lindamara Mota Aguiar
              </div>
              <div
                className="text-sm text-[#C06840] font-medium mt-0.5"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Advogada Analista de Licitação
              </div>
              <div className="flex items-center gap-2 mt-2">
                <div className="h-px flex-1 bg-[#E8C4B8]" />
                <span
                  className="text-xs text-[#3D3530]/50 font-body"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Aguiar & Aguiar Advocacia
                </span>
                <div className="h-px flex-1 bg-[#E8C4B8]" />
              </div>
            </div>
          </div>

          {/* Right — Content */}
          <div className="flex flex-col gap-6">
            {/* Section label */}
            <div className="reveal flex items-center gap-3">
              <div className="w-8 h-px bg-[#C06840]" />
              <span
                className="text-xs text-[#C06840] font-medium tracking-widest uppercase font-body"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Sobre a Advogada
              </span>
            </div>

            {/* Headline */}
            <h2
              className="reveal font-display text-4xl lg:text-5xl font-bold text-[#3D3530] leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Advocacia com{" "}
              <span className="text-[#6B1F35] italic">alma</span> e{" "}
              <span className="text-[#6B1F35] italic">propósito</span>
            </h2>

            {/* Quote */}
            <blockquote
              className="reveal border-l-4 border-[#C06840] pl-6 py-2"
            >
              <p
                className="font-accent text-xl italic text-[#6B1F35]/80 leading-relaxed"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                "Acredito que o direito deve ser acessível, humano e transformador.
                Cada cliente que me procura traz consigo uma história que merece ser
                ouvida com atenção e defendida com excelência."
              </p>
              <footer
                className="mt-3 text-sm text-[#3D3530]/60 font-body"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                — Dra. Lindamara Mota Aguiar
              </footer>
            </blockquote>

            {/* Body text */}
            <div className="reveal space-y-4">
              <p
                className="text-[#3D3530]/75 leading-relaxed font-body"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Com mais de uma década de experiência no direito público e administrativo,
                a Dra. Lindamara construiu sua trajetória com dedicação, estudo constante
                e um compromisso inabalável com a ética profissional.
              </p>
              <p
                className="text-[#3D3530]/75 leading-relaxed font-body"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Especialista na Nova Lei de Licitações (Lei 14.133/2021), atua assessorando
                empresas e órgãos públicos em todas as fases dos processos licitatórios,
                desde a elaboração de propostas até a gestão de contratos administrativos.
              </p>
            </div>

            {/* Credentials */}
            <ul className="reveal space-y-3 mt-2">
              {credentials.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#6B1F35]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-[#6B1F35]" />
                  </div>
                  <span
                    className="text-sm text-[#3D3530]/80 font-body leading-relaxed"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {text}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="reveal mt-4">
              <a
                href="#contato"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 text-[#6B1F35] font-body font-semibold hover:gap-4 transition-all duration-300 group"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Agendar uma conversa
                <span className="text-[#C06840] group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
