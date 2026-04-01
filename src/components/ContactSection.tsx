/*
 * AGUIAR & AGUIAR — Contact Section
 * Design: Split layout — formulário à esquerda, info + imagem à direita
 * Fundo: Rosé claro com imagem ambiente do escritório
 */

import { useEffect, useRef, useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Phone,
    label: "Telefone",
    value: "(XX) XXXXX-XXXX",
    href: "tel:+5500000000000",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "(XX) XXXXX-XXXX",
    href: "https://wa.me/5500000000000",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "contato@aguiaradvocacia.com.br",
    href: "mailto:contato@aguiaradvocacia.com.br",
  },
  {
    icon: MapPin,
    label: "Endereço",
    value: "Seu endereço completo aqui",
    href: "#",
  },
  {
    icon: Clock,
    label: "Horário",
    value: "Seg–Sex: 8h às 18h",
    href: null,
  },
];

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 120);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Por favor, preencha os campos obrigatórios.");
      return;
    }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Mensagem enviada! Entraremos em contato em breve.", {
        description: "A Dra. Lamdamara responderá em até 24 horas.",
      });
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <section
      id="contato"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-[#E8C4B8]/20 relative overflow-hidden"
    >
      {/* Decorative blob */}
      <div
        className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#6B1F35]/10 blob-animate"
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
              Fale Conosco
            </span>
            <div className="w-8 h-px bg-[#C06840]" />
          </div>
          <h2
            className="font-display text-4xl lg:text-5xl font-bold text-[#3D3530] leading-tight mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Vamos conversar sobre{" "}
            <span className="text-[#6B1F35] italic">o seu caso</span>
          </h2>
          <p
            className="text-[#3D3530]/65 max-w-xl mx-auto leading-relaxed font-body text-lg"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            A primeira consulta é gratuita. Sem compromisso, sem jargões jurídicos
            — apenas uma conversa honesta sobre como podemos ajudá-lo.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_420px] gap-12 xl:gap-16 items-start">
          {/* Left — Form */}
          <div className="reveal bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-[#E8C4B8]/40">
            <h3
              className="font-display text-2xl font-bold text-[#3D3530] mb-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Envie uma mensagem
            </h3>
            <p
              className="text-sm text-[#3D3530]/55 mb-8 font-body"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Campos marcados com * são obrigatórios
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    className="block text-xs font-semibold text-[#3D3530]/70 mb-2 tracking-wide uppercase font-body"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-[#E8C4B8] bg-[#FAF5EF] text-[#3D3530] placeholder-[#3D3530]/40 focus:outline-none focus:ring-2 focus:ring-[#6B1F35]/30 focus:border-[#6B1F35]/50 transition-all duration-200 font-body text-sm"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  />
                </div>
                <div>
                  <label
                    className="block text-xs font-semibold text-[#3D3530]/70 mb-2 tracking-wide uppercase font-body"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Telefone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(XX) XXXXX-XXXX"
                    className="w-full px-4 py-3 rounded-xl border border-[#E8C4B8] bg-[#FAF5EF] text-[#3D3530] placeholder-[#3D3530]/40 focus:outline-none focus:ring-2 focus:ring-[#6B1F35]/30 focus:border-[#6B1F35]/50 transition-all duration-200 font-body text-sm"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  />
                </div>
              </div>

              <div>
                <label
                  className="block text-xs font-semibold text-[#3D3530]/70 mb-2 tracking-wide uppercase font-body"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  E-mail *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com.br"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-[#E8C4B8] bg-[#FAF5EF] text-[#3D3530] placeholder-[#3D3530]/40 focus:outline-none focus:ring-2 focus:ring-[#6B1F35]/30 focus:border-[#6B1F35]/50 transition-all duration-200 font-body text-sm"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                />
              </div>

              <div>
                <label
                  className="block text-xs font-semibold text-[#3D3530]/70 mb-2 tracking-wide uppercase font-body"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Assunto
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-[#E8C4B8] bg-[#FAF5EF] text-[#3D3530] focus:outline-none focus:ring-2 focus:ring-[#6B1F35]/30 focus:border-[#6B1F35]/50 transition-all duration-200 font-body text-sm"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  <option value="">Selecione um assunto</option>
                  <option value="licitacao">Licitações e Pregões</option>
                  <option value="contrato">Contratos Administrativos</option>
                  <option value="recurso">Recursos e Impugnações</option>
                  <option value="compliance">Compliance Licitatório</option>
                  <option value="consultoria">Consultoria Jurídica</option>
                  <option value="outro">Outro Assunto</option>
                </select>
              </div>

              <div>
                <label
                  className="block text-xs font-semibold text-[#3D3530]/70 mb-2 tracking-wide uppercase font-body"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Mensagem *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Descreva brevemente sua situação ou dúvida..."
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-[#E8C4B8] bg-[#FAF5EF] text-[#3D3530] placeholder-[#3D3530]/40 focus:outline-none focus:ring-2 focus:ring-[#6B1F35]/30 focus:border-[#6B1F35]/50 transition-all duration-200 font-body text-sm resize-none"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="btn-fill w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#6B1F35] text-[#FAF5EF] rounded-xl font-body font-semibold tracking-wide hover:bg-[#5a1a2c] disabled:opacity-60 transition-all duration-300 shadow-lg shadow-[#6B1F35]/20"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {sending ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Enviar Mensagem
                  </>
                )}
              </button>

              <p
                className="text-xs text-[#3D3530]/45 text-center font-body"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Seus dados são protegidos e não serão compartilhados.
              </p>
            </form>
          </div>

          {/* Right — Info + Image */}
          <div className="flex flex-col gap-6">
            {/* Image */}
            <div className="reveal rounded-3xl overflow-hidden shadow-lg">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663503360845/SphSS3WP2AX9ZWZMwk7BBJ/contact-section-fqM5mAxbDsScVivXxZrvUd.webp"
                alt="Sala de atendimento da Aguiar & Aguiar"
                className="w-full h-52 object-cover"
              />
            </div>

            {/* Contact info */}
            <div className="reveal bg-white rounded-3xl p-7 shadow-sm border border-[#E8C4B8]/40">
              <h3
                className="font-display text-xl font-bold text-[#3D3530] mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Informações de Contato
              </h3>
              <div className="space-y-4">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#6B1F35]/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-[#6B1F35]" />
                    </div>
                    <div>
                      <div
                        className="text-xs text-[#3D3530]/50 font-body"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {label}
                      </div>
                      {href ? (
                        <a
                          href={href}
                          className="text-sm text-[#3D3530] font-medium hover:text-[#6B1F35] transition-colors duration-200 font-body link-underline"
                          style={{ fontFamily: "'DM Sans', sans-serif" }}
                        >
                          {value}
                        </a>
                      ) : (
                        <span
                          className="text-sm text-[#3D3530] font-medium font-body"
                          style={{ fontFamily: "'DM Sans', sans-serif" }}
                        >
                          {value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="reveal">
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-fill flex items-center justify-center gap-3 w-full py-4 bg-[#25D366] text-white rounded-2xl font-body font-semibold hover:bg-[#1fb855] transition-all duration-300 shadow-lg shadow-green-500/20"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <MessageCircle className="w-5 h-5" />
                Chamar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
