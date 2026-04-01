/*
 * AGUIAR & AGUIAR — Hero Section
 * Design: Split assimétrico 55/45, blob orgânico, tipografia expressiva
 * Paleta: Bordeaux como âncora, Areia como fundo, Terracota como acento
 */

import { useEffect, useRef } from "react";
import { ArrowDown, Phone, MessageCircle } from "lucide-react";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        const parallax = heroRef.current.querySelector(".parallax-img") as HTMLElement;
        if (parallax) {
          parallax.style.transform = `translateY(${scrolled * 0.15}px)`;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-[#F5EDE4]"
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663503360845/SphSS3WP2AX9ZWZMwk7BBJ/texture-bg-AUGzVHYaXXguYdoAXXKpcb.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Decorative blob — top right */}
      <div
        className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-[#E8C4B8]/40 blob-animate"
        style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}
      />

      {/* Decorative blob — bottom left */}
      <div
        className="absolute -bottom-32 -left-20 w-[400px] h-[400px] bg-[#C06840]/10 blob-animate"
        style={{
          borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
          animationDelay: "3s",
        }}
      />

      <div className="container relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_480px] gap-12 xl:gap-20 items-center min-h-[calc(100vh-6rem)]">
          {/* Left — Content */}
          <div className="flex flex-col justify-center stagger-children">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#6B1F35]/10 border border-[#6B1F35]/20 rounded-full px-4 py-1.5 w-fit mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-[#C06840] animate-pulse" />
              <span
                className="text-xs text-[#6B1F35] font-medium tracking-widest uppercase"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Advocacia Especializada em Licitações
              </span>
            </div>

            {/* Main headline */}
            <h1
              className="font-display text-5xl md:text-6xl xl:text-7xl font-bold text-[#3D3530] leading-[1.05] mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Direito que{" "}
              <span className="text-[#6B1F35] italic">acolhe</span>
              <br />e{" "}
              <span className="relative inline-block">
                protege
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 6 C50 2, 100 7, 150 3 C175 1, 190 5, 198 4"
                    stroke="#C06840"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </span>
              .
            </h1>

            {/* Tagline */}
            <p
              className="font-accent text-xl md:text-2xl text-[#6B1F35]/80 italic mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              "Cada processo é uma história. Cada cliente, uma confiança."
            </p>

            {/* Description */}
            <p
              className="font-body text-base md:text-lg text-[#3D3530]/70 leading-relaxed max-w-xl mb-10"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Dra. <strong className="text-[#3D3530] font-semibold">Lamdamara Mota Aguiar</strong> oferece
              assessoria jurídica especializada em licitações e direito administrativo, com o cuidado
              e a atenção que o seu caso merece.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contato"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-fill inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#6B1F35] text-[#FAF5EF] rounded-full font-body font-medium text-base tracking-wide hover:bg-[#5a1a2c] transition-all duration-300 shadow-lg shadow-[#6B1F35]/20"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <MessageCircle className="w-4 h-4" />
                Consulta Gratuita
              </a>
              <a
                href="tel:+5500000000000"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#6B1F35] text-[#6B1F35] rounded-full font-body font-medium text-base tracking-wide hover:bg-[#6B1F35]/5 transition-all duration-300"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <Phone className="w-4 h-4" />
                Ligar Agora
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-12 pt-10 border-t border-[#6B1F35]/15">
              {[
                { value: "10+", label: "Anos de Experiência" },
                { value: "500+", label: "Casos Atendidos" },
                { value: "98%", label: "Clientes Satisfeitos" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span
                    className="font-display text-3xl font-bold text-[#6B1F35]"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="text-xs text-[#3D3530]/60 font-body tracking-wide mt-0.5"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Image */}
          <div className="relative hidden lg:flex items-center justify-center">
            {/* Blob background behind image */}
            <div
              className="absolute inset-0 bg-[#6B1F35]/10 blob-animate"
              style={{
                borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
                transform: "scale(1.1)",
              }}
            />
            <div
              className="absolute inset-2 bg-[#E8C4B8]/50 blob-animate"
              style={{
                borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
                animationDelay: "2s",
              }}
            />

            {/* Image container */}
            <div
              className="relative z-10 w-[360px] xl:w-[420px] overflow-hidden shadow-2xl"
              style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}
            >
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663503360845/SphSS3WP2AX9ZWZMwk7BBJ/hero-advocacia-5cXpxE9cn6nHKRq45Q84fV.webp"
                alt="Escritório da Aguiar & Aguiar Advocacia"
                className="parallax-img w-full h-[520px] xl:h-[600px] object-cover"
              />
            </div>

            {/* Floating card — OAB */}
            <div className="absolute -bottom-4 -left-8 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 z-20">
              <div className="w-10 h-10 rounded-xl bg-[#6B1F35] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-bold" style={{ fontFamily: "'DM Sans', sans-serif" }}>OAB</span>
              </div>
              <div>
                <div className="text-xs font-semibold text-[#3D3530]" style={{ fontFamily: "'DM Sans', sans-serif" }}>Advogada Registrada</div>
                <div className="text-xs text-[#3D3530]/60" style={{ fontFamily: "'DM Sans', sans-serif" }}>OAB/BR</div>
              </div>
            </div>

            {/* Floating card — Especialidade */}
            <div className="absolute -top-4 -right-4 bg-[#6B1F35] rounded-2xl shadow-xl p-4 z-20 max-w-[160px]">
              <div className="text-[#FAF5EF] text-xs font-semibold leading-tight" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Especialista em<br />
                <span className="text-[#E8C4B8]">Licitações Públicas</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#6B1F35]/60 hover:text-[#6B1F35] transition-colors duration-200 z-10"
      >
        <span className="text-xs tracking-widest uppercase font-body" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Rolar
        </span>
        <ArrowDown className="w-4 h-4 scroll-bounce" />
      </button>

      {/* Wave bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 wave-divider">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 60 L0 30 Q360 0 720 30 Q1080 60 1440 30 L1440 60 Z" fill="#FAF5EF" />
        </svg>
      </div>
    </section>
  );
}
