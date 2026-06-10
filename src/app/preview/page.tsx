"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ShieldCheck, ChevronRight, Menu, Zap, TrendingUp, MonitorSmartphone } from "lucide-react";

export default function PreviewSite() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-[family-name:var(--font-space)] overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-zinc-800 py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center rounded-sm transform rotate-45">
              <span className="text-black font-bold transform -rotate-45">R</span>
            </div>
            <span className="font-bold text-xl tracking-widest uppercase">RUDINEI<span className="font-light text-zinc-500">.ENG</span></span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wider text-zinc-400 uppercase">
            <a href="#" className="hover:text-cyan-400 transition-colors">Início</a>
            <a href="#solucoes" className="hover:text-cyan-400 transition-colors">Soluções</a>
            <a href="#obras" className="hover:text-cyan-400 transition-colors">Obras</a>
            <button className="bg-white text-black px-6 py-2 hover:bg-cyan-400 transition-colors font-bold">Orçamento</button>
          </nav>
          <button className="md:hidden text-white"><Menu /></button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image src="/steelframe_hero.png" alt="Steel Frame" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/40 z-10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.08)_0%,transparent_60%)] z-10"></div>
        </div>

        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-cyan-800/50 rounded-sm text-xs font-bold tracking-widest uppercase text-cyan-400 bg-cyan-950/20 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <Zap className="w-4 h-4"/> Construção Metálica Avançada
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter leading-none mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-100">O FUTURO É</span><br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 animate-shine">MOLDADO NO AÇO.</span>
            </h1>
            <p className="text-xl text-zinc-400 mb-10 max-w-2xl font-light leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
              Velocidade, resistência e precisão milimétrica. Estruturas em Steel Frame para indústrias, galpões logísticos e corporações que não podem perder tempo.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
              <button className="w-full sm:w-auto bg-cyan-500 text-black px-8 py-4 font-bold tracking-wider uppercase hover:bg-cyan-400 transition-colors flex items-center justify-center gap-2">
                Solicitar Viabilidade <ChevronRight className="w-5 h-5"/>
              </button>
              <button className="w-full sm:w-auto border border-zinc-700 text-white px-8 py-4 font-bold tracking-wider uppercase hover:bg-zinc-800 transition-colors">
                Ver Portfólio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="solucoes" className="py-24 bg-zinc-950 border-t border-zinc-900 relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-zinc-800 bg-black hover:border-cyan-500/50 transition-colors group">
              <TrendingUp className="w-12 h-12 text-zinc-600 group-hover:text-cyan-400 transition-colors mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight">Expansão Rápida</h3>
              <p className="text-zinc-400">Obras limpas e até 3x mais rápidas que a alvenaria convencional. Seu galpão operando em tempo recorde.</p>
            </div>
            <div className="p-8 border border-zinc-800 bg-black hover:border-cyan-500/50 transition-colors group">
              <ShieldCheck className="w-12 h-12 text-zinc-600 group-hover:text-cyan-400 transition-colors mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight">Segurança Extrema</h3>
              <p className="text-zinc-400">Aço galvanizado normatizado, com resistência a intempéries e precisão estrutural para cargas pesadas.</p>
            </div>
            <div className="p-8 border border-zinc-800 bg-black hover:border-cyan-500/50 transition-colors group">
              <MonitorSmartphone className="w-12 h-12 text-zinc-600 group-hover:text-cyan-400 transition-colors mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight">Acompanhamento Digital</h3>
              <p className="text-zinc-400">Acesso transparente a cronogramas e diários de obra diretamente pelo portal do cliente.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 bg-black border-t border-zinc-900 text-center text-zinc-600 text-sm tracking-widest uppercase">
        <p>&copy; 2026 Rudinei Engenharia. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
