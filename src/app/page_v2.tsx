"use client";

import { useState } from "react";
import Image from "next/image";

export default function PresentationDashboardV2() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [activeAvatar, setActiveAvatar] = useState<number | null>(null);

  const nextScreen = () => {
    setActiveAvatar(null);
    setCurrentScreen((prev) => Math.min(prev + 1, 3));
  };
  const prevScreen = () => {
    setActiveAvatar(null);
    setCurrentScreen((prev) => Math.max(prev - 1, 0));
  };

  return (
    <main className="min-h-screen bg-[#050505] text-zinc-300 font-sans selection:bg-zinc-700 selection:text-white flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900/40 via-[#050505] to-[#050505] -z-20"></div>
      
      {/* Floating Header */}
      <header className="fixed top-8 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between w-[90%] max-w-5xl">
        <div className="text-[10px] tracking-[0.3em] font-medium text-zinc-500 uppercase">
          PRODUZA CONSULTORIA NEUROMARKETING
        </div>
        
        <div className="flex gap-1 bg-white/5 backdrop-blur-xl border border-white/10 p-1 rounded-full">
          {["I", "II", "III", "IV"].map((step, idx) => (
            <button 
              key={idx}
              onClick={() => setCurrentScreen(idx)}
              className={`w-10 h-10 rounded-full flex items-center justify-center text-xs transition-all duration-500 ${currentScreen === idx ? "bg-white text-black font-bold shadow-[0_0_20px_rgba(255,255,255,0.2)]" : "text-zinc-500 hover:text-zinc-300"}`}
            >
              {step}
            </button>
          ))}
        </div>
      </header>

      {/* Screen Container */}
      <div className="w-full max-w-5xl h-[70vh] flex items-center justify-center relative">
        
        {/* Screen 0: Cover */}
        <div className={`absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-1000 ${currentScreen === 0 ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-12 pointer-events-none"}`}>
          <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-zinc-500 to-transparent mb-8"></div>
          <h1 className="text-5xl md:text-8xl font-light tracking-tighter text-white mb-6">
            PROJETO <span className="font-semibold text-zinc-500">RUDINEI</span>
          </h1>
          <p className="text-zinc-500 uppercase tracking-[0.4em] text-xs md:text-sm max-w-md">
            Arquitetura de Marca & Vendas
          </p>
          <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-zinc-500 to-transparent mt-8"></div>
        </div>

        {/* Screen 1: Market */}
        <div className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 ${currentScreen === 1 ? "opacity-100 scale-100 translate-y-0 delay-300" : "opacity-0 scale-95 translate-y-12 pointer-events-none"}`}>
          <h2 className="text-2xl md:text-4xl font-light text-white mb-16 tracking-tight text-center">
            MERCADO LOGÍSTICO <span className="text-zinc-500 font-serif italic">Araquari</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
            <div className="bg-white/[0.02] border border-white/[0.05] backdrop-blur-2xl p-8 rounded-2xl flex flex-col items-center justify-center text-center hover:bg-white/[0.05] transition-colors">
              <span className="text-4xl font-light text-white mb-2">101</span>
              <span className="text-xs uppercase tracking-widest text-zinc-500">Eixo BR</span>
            </div>
            <div className="bg-white/[0.02] border border-white/[0.05] backdrop-blur-2xl p-8 rounded-2xl flex flex-col items-center justify-center text-center hover:bg-white/[0.05] transition-colors">
              <span className="text-4xl font-light text-white mb-2">+340%</span>
              <span className="text-xs uppercase tracking-widest text-zinc-500">Busca Digital</span>
            </div>
            <div className="bg-white/[0.02] border border-white/[0.05] backdrop-blur-2xl p-8 rounded-2xl flex flex-col items-center justify-center text-center hover:bg-white/[0.05] transition-colors">
              <span className="text-4xl font-light text-white mb-2">5+</span>
              <span className="text-xs uppercase tracking-widest text-zinc-500">Concorrentes</span>
            </div>
            <div className="bg-white/[0.02] border border-white/[0.05] backdrop-blur-2xl p-8 rounded-2xl flex flex-col items-center justify-center text-center hover:bg-white/[0.05] transition-colors">
              <span className="text-4xl font-light text-white mb-2">PREMIUM</span>
              <span className="text-xs uppercase tracking-widest text-zinc-500">Posicionamento</span>
            </div>
          </div>
        </div>

        {/* Screen 2: Solutions / Avatars */}
        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${currentScreen === 2 ? "opacity-100 scale-100 translate-y-0 delay-300" : "opacity-0 scale-95 translate-y-12 pointer-events-none"}`}>
          
          {/* Main Selection Area */}
          <div className={`transition-all duration-700 w-full flex flex-col items-center ${activeAvatar ? "blur-sm opacity-30 scale-95" : "blur-0 opacity-100 scale-100"}`}>
            <h2 className="text-sm uppercase tracking-[0.4em] text-zinc-500 mb-12">SELECIONE O MÓDULO</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { id: 1, name: "Identidade", num: "01" },
                { id: 2, name: "Google", num: "02" },
                { id: 3, name: "Instagram", num: "03" },
                { id: 4, name: "Ecosistema", num: "04" }
              ].map((item) => (
                <div 
                  key={item.id}
                  onClick={() => setActiveAvatar(item.id)}
                  className="w-40 h-56 bg-gradient-to-b from-white/[0.08] to-transparent border border-white/10 rounded-2xl flex flex-col items-center justify-between p-6 cursor-pointer hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all duration-500 group"
                >
                  <span className="text-xs font-serif text-zinc-600 group-hover:text-zinc-400 transition-colors">{item.num}</span>
                  <div className="text-center">
                    <span className="block text-sm font-light text-white">{item.name}</span>
                  </div>
                  <div className="w-8 h-[1px] bg-zinc-700 group-hover:bg-white transition-colors"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Modal / Reveal Area */}
          <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${activeAvatar ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none scale-105"}`}>
            {activeAvatar && (
              <div className="w-full max-w-4xl h-[600px] bg-black/60 backdrop-blur-3xl border border-white/10 rounded-3xl p-12 relative flex items-center justify-center shadow-2xl">
                <button 
                  onClick={() => setActiveAvatar(null)}
                  className="absolute top-6 right-6 text-xs uppercase tracking-widest text-zinc-500 hover:text-white transition-colors"
                >
                  [ Fechar ]
                </button>

                {activeAvatar === 1 && (
                  <div className="text-center space-y-8">
                    <div className="text-xs uppercase tracking-[0.3em] text-zinc-500">Naming Estratégico</div>
                    <div className="space-y-6">
                      <div className="text-4xl font-light text-white">MetalPro Galpões</div>
                      <div className="text-4xl font-light text-zinc-600">AçoNorte Estruturas</div>
                      <div className="text-4xl font-light text-zinc-800">RudiAço Construções</div>
                    </div>
                  </div>
                )}

                {activeAvatar === 2 && (
                  <div className="flex w-full items-center justify-between gap-12">
                    <div className="flex-1 text-left">
                      <div className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-6">02. Captação</div>
                      <h3 className="text-4xl font-light text-white mb-6 leading-tight">Posicionamento<br/>Local e Busca.</h3>
                      <p className="text-zinc-500 text-sm font-light leading-relaxed max-w-xs">A porta de entrada para o cliente corporativo que busca estruturistas na região de Joinville e Araquari.</p>
                    </div>
                    <div className="w-72 h-[500px] relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                      <Image src="/google.png" alt="Google Mockup" fill className="object-cover" />
                    </div>
                  </div>
                )}

                {activeAvatar === 3 && (
                  <div className="flex w-full items-center justify-between gap-12">
                    <div className="flex-1 text-left">
                      <div className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-6">03. Autoridade</div>
                      <h3 className="text-4xl font-light text-white mb-6 leading-tight">Vitrine<br/>Arquitetônica.</h3>
                      <p className="text-zinc-500 text-sm font-light leading-relaxed max-w-xs">Organização de portfólio de alto padrão. Engenharia, robustez e estética voltadas para a decisão de compra B2B.</p>
                    </div>
                    <div className="w-72 h-[500px] relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                      <Image src="/instagram.png" alt="Instagram Mockup" fill className="object-cover" />
                    </div>
                  </div>
                )}

                {activeAvatar === 4 && (
                  <div className="text-center space-y-6">
                    <div className="text-xs uppercase tracking-[0.3em] text-zinc-500">O Ecossistema Completo</div>
                    <h3 className="text-5xl font-light text-white">Hub de Vendas</h3>
                    <p className="text-zinc-500 max-w-md mx-auto">Web app desenvolvido para conversão. Páginas com velocidade ultrarrápida apresentando o catálogo de estruturas de lata e pré-moldados.</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Screen 3: Pricing */}
        <div className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 ${currentScreen === 3 ? "opacity-100 scale-100 translate-y-0 delay-300" : "opacity-0 scale-95 translate-y-12 pointer-events-none"}`}>
          <h2 className="text-sm uppercase tracking-[0.4em] text-zinc-500 mb-16">ARQUITETURA DE VALOR</h2>
          
          <div className="grid grid-cols-3 gap-1 w-full max-w-4xl border border-white/[0.05] rounded-3xl p-1 bg-white/[0.02] backdrop-blur-2xl">
            
            <div className="p-10 flex flex-col text-center border-r border-white/[0.05]">
              <span className="text-xs uppercase tracking-widest text-zinc-600 mb-2">Essencial</span>
              <span className="text-2xl font-light text-white mb-8">6k</span>
              <span className="text-xs text-zinc-500">Identidade + Redes</span>
            </div>

            <div className="p-10 flex flex-col text-center bg-white/[0.03] rounded-2xl relative shadow-[0_0_30px_rgba(255,255,255,0.03)]">
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full"></div>
              <span className="text-xs uppercase tracking-widest text-zinc-400 mb-2 mt-2">Autoridade</span>
              <span className="text-3xl font-light text-white mb-8">8k</span>
              <span className="text-xs text-zinc-400">Site Institucional + Setup</span>
            </div>

            <div className="p-10 flex flex-col text-center border-l border-white/[0.05]">
              <span className="text-xs uppercase tracking-widest text-zinc-600 mb-2">Domínio</span>
              <span className="text-2xl font-light text-white mb-8">15k</span>
              <span className="text-xs text-zinc-500">Ecossistema + Tráfego</span>
            </div>

          </div>
        </div>

      </div>

      {/* Footer Navigation */}
      <footer className="fixed bottom-8 flex gap-8 z-50">
        <button 
          onClick={prevScreen}
          className={`text-xs tracking-[0.2em] uppercase transition-all duration-300 ${currentScreen === 0 ? "opacity-0 pointer-events-none" : "text-zinc-500 hover:text-white"}`}
        >
          [ Voltar ]
        </button>
        <button 
          onClick={nextScreen}
          className={`text-xs tracking-[0.2em] uppercase transition-all duration-300 ${currentScreen === 3 ? "opacity-0 pointer-events-none" : "text-white hover:text-zinc-300"}`}
        >
          [ Avançar ]
        </button>
      </footer>

    </main>
  );
}
