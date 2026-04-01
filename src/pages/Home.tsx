/*
 * AGUIAR & AGUIAR — Home Page
 * Design: "Calor Contemporâneo" — Humanismo Orgânico Moderno
 * Paleta: Bordeaux #6B1F35 · Terracota #C06840 · Rosé #E8C4B8 · Areia #F5EDE4 · Grafite #3D3530
 * Tipografia: Playfair Display (display) + DM Sans (body) + Cormorant Garamond (accent)
 */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import LicitacaoHighlight from "@/components/LicitacaoHighlight";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <LicitacaoHighlight />
      <ProcessSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
