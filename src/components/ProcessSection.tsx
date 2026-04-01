/*
 * AGUIAR & AGUIAR — Process Section
 * Design: Timeline vertical com numeração grande, fundo Bordeaux escuro
 * Contraste: Texto claro sobre fundo Bordeaux — humanidade em destaque
 */

import { useEffect, useRef } from "react";
import { MessageCircle, Search, FileCheck, Handshake } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Primeiro Contato",
    description:
      "Entre em contato por WhatsApp, telefone ou formulário. Respondemos em até 24 horas para agendar sua consulta inicial gratuita.",
  },
  {
    number: "02",
    icon: Search,
    title: "Análise do Caso",
    description:
      "Realizamos uma análise detalhada da sua situação, identificando as melhores estratégias jurídicas e os caminhos possíveis para o seu caso.",
  },
  {
    number: "03",
    icon: FileCheck,
    title: "Proposta Personalizada",
    description:
      "Apresentamos uma proposta clara e transparente, com honorários justos e um plano de ação detalhado para alcançar os seus objetivos.",
  },
  {
    number: "04",
    icon: Handshake,
    title: "Acompanhamento Contínuo",
    description:
      "Trabalhamos juntos em cada etapa do processo, com comunicação constante e relatórios periódicos sobre o andamento do seu caso.",
  },
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 200);
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
      id="processo"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-[#6B1F35] relative overflow-hidden"
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-white/5 blob-animate"
        style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}
      />
      <div
        className="absolute bottom-0 left-0 w-72 h-72 bg-[#C06840]/20 blob-animate"
        style={{
          borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
          animationDelay: "4s",
        }}
      />

      {/* Grain texture */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: "200px",
        }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#E8C4B8]/60" />
            <span
              className="text-xs text-[#E8C4B8]/80 font-medium tracking-widest uppercase font-body"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Como Trabalhamos
            </span>
            <div className="w-8 h-px bg-[#E8C4B8]/60" />
          </div>
          <h2
            className="font-display text-4xl lg:text-5xl font-bold text-[#FAF5EF] leading-tight mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Do primeiro contato à{" "}
            <span className="text-[#E8C4B8] italic">resolução</span>
          </h2>
          <p
            className="text-[#FAF5EF]/65 max-w-2xl mx-auto leading-relaxed font-body text-lg"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Um processo transparente, humanizado e eficiente — porque você merece
            saber exatamente o que está acontecendo com o seu caso.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-[#E8C4B8]/20" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="reveal flex flex-col items-center text-center group"
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Number + Icon circle */}
                  <div className="relative mb-6">
                    {/* Large number background */}
                    <div
                      className="absolute -top-3 -left-3 font-display text-7xl font-bold text-white/5 leading-none select-none"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {step.number}
                    </div>

                    {/* Icon circle */}
                    <div className="relative w-16 h-16 rounded-full bg-[#FAF5EF]/10 border-2 border-[#E8C4B8]/30 flex items-center justify-center group-hover:bg-[#C06840]/30 group-hover:border-[#C06840]/50 transition-all duration-400">
                      <Icon className="w-7 h-7 text-[#E8C4B8]" />
                    </div>

                    {/* Step number badge */}
                    <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#C06840] flex items-center justify-center">
                      <span
                        className="text-[10px] text-white font-bold"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {index + 1}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <h3
                    className="font-display text-xl font-semibold text-[#FAF5EF] mb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-sm text-[#FAF5EF]/60 leading-relaxed font-body"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom highlight */}
        <div className="mt-16 reveal">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-white/10">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <h3
                  className="font-display text-2xl lg:text-3xl font-bold text-[#FAF5EF] mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Primeira consulta{" "}
                  <span className="text-[#E8C4B8] italic">100% gratuita</span>
                </h3>
                <p
                  className="text-[#FAF5EF]/65 font-body leading-relaxed"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Acreditamos que você deve conhecer seu caso e suas opções antes de
                  tomar qualquer decisão. Por isso, oferecemos uma consulta inicial
                  gratuita e sem compromisso.
                </p>
              </div>
              <div className="flex lg:justify-end">
                <a
                  href="#contato"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="btn-fill inline-flex items-center gap-2 px-8 py-4 bg-[#FAF5EF] text-[#6B1F35] rounded-full font-body font-semibold tracking-wide hover:bg-[#E8C4B8] transition-all duration-300 whitespace-nowrap"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Agendar Agora
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
