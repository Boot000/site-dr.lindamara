/*
 * AGUIAR & AGUIAR — WhatsApp Floating Button
 * Design: Botão verde flutuante com animação de pulso
 */

import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5500000000000"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      {/* Pulse ring */}
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />

      {/* Button */}
      <div className="relative w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-xl shadow-green-500/30 hover:bg-[#1fb855] transition-colors duration-300 hover:scale-110 transform">
        <MessageCircle className="w-6 h-6 text-white fill-white" />
      </div>

      {/* Tooltip */}
      <div
        className="absolute right-16 top-1/2 -translate-y-1/2 bg-[#3D3530] text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        Falar no WhatsApp
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-[#3D3530] rotate-45" />
      </div>
    </a>
  );
}
