"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { 
  ChevronLeft, 
  ChevronRight, 
  TrendingUp, 
  Globe, 
  ShieldCheck,
  Target,
  Search,
  Camera,
  MonitorSmartphone,
  Zap,
  Star,
  Handshake,
  Trophy,
  Lock
} from "lucide-react";

export default function PresentationDashboardFinal() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [activeAvatar, setActiveAvatar] = useState<number | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [authError, setAuthError] = useState(false);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Usa o valor direto do DOM (útil para preenchimento automático do Chrome) ou o estado
    const input = e.currentTarget.querySelector('input[type="password"]') as HTMLInputElement;
    const pwd = input?.value || passwordInput;

    if (pwd === "rudinei2026") {
      setIsAuthenticated(true);
    } else {
      setAuthError(true);
      setTimeout(() => setAuthError(false), 2000);
    }
  };

  const nextScreen = useCallback(() => {
    setActiveAvatar(null);
    setCurrentScreen((prev) => Math.min(prev + 1, 3));
  }, []);

  const prevScreen = useCallback(() => {
    setActiveAvatar(null);
    setCurrentScreen((prev) => Math.max(prev - 1, 0));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") nextScreen();
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") prevScreen();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextScreen, prevScreen]);

  useEffect(() => {
    let lastScroll = 0;
    const handleWheel = (e: WheelEvent) => {
      const now = new Date().getTime();
      if (now - lastScroll < 800) return;
      if (e.deltaY > 50) { nextScreen(); lastScroll = now; } 
      else if (e.deltaY < -50) { prevScreen(); lastScroll = now; }
    };
    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, [nextScreen, prevScreen]);

  // Metallic Grey Backgrounds
  const backgrounds = [
    "from-zinc-800 via-zinc-900 to-zinc-950", 
    "from-slate-800 via-zinc-900 to-zinc-950",
    "from-gray-800 via-zinc-900 to-slate-950",
    "from-zinc-700 via-zinc-800 to-zinc-950", 
  ];

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden font-[family-name:var(--font-space)] selection:bg-cyan-900 selection:text-white">
        <div className="absolute inset-0 z-0">
          <Image src="/propostas/rudinei/bg_steelframe.png" alt="Steel Frame" fill className="object-cover opacity-30 mix-blend-luminosity" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
        </div>
        <div className="relative z-10 w-full max-w-md p-6">
          <div className="bg-zinc-900/60 backdrop-blur-2xl border border-zinc-700/50 p-10 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] animate-in zoom-in-95 fade-in duration-700">
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.4)]">
                <Lock className="w-8 h-8 text-black" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-white text-center mb-2 tracking-tighter uppercase">Acesso Restrito</h2>
            <p className="text-zinc-400 text-center mb-8 font-light">Insira a credencial da proposta.</p>
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <input 
                  type="password" 
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="Senha de acesso" 
                  className={`w-full bg-black/50 border ${authError ? 'border-red-500' : 'border-zinc-700'} rounded-lg px-4 py-4 text-white focus:outline-none focus:border-cyan-500 transition-colors tracking-widest text-center`}
                  autoFocus
                />
              </div>
              <button type="submit" className="w-full bg-cyan-500 text-black font-bold py-4 rounded-lg uppercase tracking-wider hover:bg-cyan-400 transition-colors">
                Desbloquear Proposta
              </button>
            </form>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-zinc-900 text-zinc-300 font-[family-name:var(--font-inter)] selection:bg-cyan-900 selection:text-white flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Shiny Metallic Background */}
      <div className={`absolute inset-0 transition-colors duration-1000 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] -z-30 ${backgrounds[currentScreen]}`}></div>
      
      {/* Cinematic Background for All Screens (CSS Panning Image) */}
      <div className={`absolute inset-0 transition-opacity duration-1000 -z-20 overflow-hidden pointer-events-none opacity-15 mix-blend-luminosity`}>
        <div className="absolute inset-0 w-[110%] h-[110%] -top-[5%] -left-[5%] animate-pan">
          <Image src="/propostas/rudinei/steelframe_bg_light.png" alt="Steel Frame Panning" fill className="object-cover" priority />
        </div>
        <div className="absolute inset-0 bg-black/30 z-20"></div>
      </div>
      
      {/* Header (Logo bigger on top, slogan below) */}
      <header className="fixed top-0 w-full z-50 bg-zinc-900/70 backdrop-blur-3xl border-b border-zinc-700/50 shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex flex-col items-start gap-1">
            <div className="relative w-48 h-12 md:w-56 md:h-14 drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:scale-105 transition-transform duration-500">
              <Image src="/propostas/rudinei/logo-produza.png" alt="Logo Produza" fill className="object-contain object-left" />
            </div>
            <div className="text-xs md:text-sm text-zinc-400 font-medium tracking-wide">
              Neuromarketing para pessoas e marcas.
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-base font-medium tracking-wider text-zinc-500 uppercase">
            {["Visão Geral", "Mercado", "Soluções", "Proposta"].map((item, idx) => (
              <button 
                key={item} 
                onClick={() => setCurrentScreen(idx)}
                className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-500 ${currentScreen === idx ? "bg-cyan-950/40 text-cyan-400 border border-cyan-800/50 shadow-[0_0_15px_rgba(6,182,212,0.15)]" : "hover:text-cyan-400 hover:bg-zinc-800/50"}`}
              >
                <span className="opacity-50 text-[8px]">{idx + 1}</span> {item}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="w-full max-w-6xl h-full mt-32 flex items-center justify-center relative">
        
        {/* Screen 0: Cover */}
        <div className={`absolute inset-0 flex flex-col items-center justify-center p-8 transition-all duration-1000 ${currentScreen === 0 ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-12 pointer-events-none"}`}>
          <div className="inline-flex items-center gap-2 px-6 py-2 border border-cyan-800/50 rounded-md text-sm font-bold tracking-widest uppercase text-cyan-400 bg-cyan-950/20 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <Zap className="w-4 h-4"/> PROJETO ESTRATÉGICO EXCLUSIVO
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-bold tracking-tighter text-white mb-6 animate-in slide-in-from-bottom-8 fade-in duration-1000 delay-200 font-[family-name:var(--font-space)] leading-none uppercase">
            <span className="relative inline-block overflow-hidden pb-2">
              NEW BUSINESS
              <span className="absolute top-0 left-[-100%] w-[40%] h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-80 skew-x-[-20deg] animate-[laser_3s_ease-in-out_infinite]"></span>
            </span>
            <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 via-cyan-300 to-zinc-500 animate-shine drop-shadow-[0_0_30px_rgba(6,182,212,0.3)]">
              RUDINEI
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed animate-in slide-in-from-bottom-8 fade-in duration-1000 delay-300">
            Estratégia pesada de engenharia de valor B2B para fechar os maiores galpões do norte de SC.
          </p>
        </div>

        {/* Screen 1: Market */}
        <div className={`absolute inset-0 flex flex-col items-center justify-center p-8 transition-all duration-1000 ${currentScreen === 1 ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-12 pointer-events-none"}`}>
          <div className="w-full max-w-6xl">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-2 animate-in slide-in-from-bottom-8 fade-in duration-700 font-[family-name:var(--font-space)] uppercase tracking-tight">
              MERCADO DE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">ARAQUARI</span> E REGIÃO
            </h2>
            <p className="text-xl md:text-2xl text-zinc-400 mb-2 animate-in slide-in-from-bottom-8 fade-in duration-700 delay-100 font-light">A maior concentração industrial. Indústrias compram segurança estrutural (Steel Frame), não preço.</p>
            <div className="text-[10px] uppercase tracking-widest text-zinc-500 mb-12 animate-in fade-in delay-200 border border-zinc-700 bg-zinc-900/50 inline-block px-3 py-1 rounded">
              📊 CRUZAMENTO DE DADOS: FIESC / SINDUSCON-SC / GOOGLE TRENDS
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 w-full">
              <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-600/50 backdrop-blur-3xl p-10 rounded-xl hover:bg-zinc-800 transition-all duration-500 hover:border-cyan-500/30 group animate-in zoom-in-95 fade-in duration-700 delay-200 shadow-[0_20px_40px_rgba(0,0,0,0.5)] flex flex-col">
                <Globe className="w-10 h-10 text-zinc-500 mb-6 group-hover:text-cyan-400 transition-colors" />
                <span className="text-4xl md:text-5xl font-bold text-white mb-2 block tracking-tighter font-[family-name:var(--font-space)]">BR-101 / 280</span>
                <h3 className="text-xl font-bold text-cyan-400 mb-2 uppercase font-[family-name:var(--font-space)]">Eixo Logístico</h3>
                <p className="text-zinc-400 text-sm flex-1">Demanda massiva por galpões logísticos impulsionada pelo Porto de São Francisco do Sul e plantas multinacionais.</p>
                <div className="mt-4 pt-4 border-t border-zinc-700/50 text-[10px] text-zinc-500 font-mono tracking-wider">
                  &gt; FONTE: OBSERVATÓRIO FIESC 2026
                </div>
              </div>
              <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-600/50 backdrop-blur-3xl p-10 rounded-xl hover:bg-zinc-800 transition-all duration-500 hover:border-cyan-500/30 group animate-in zoom-in-95 fade-in duration-700 delay-300 shadow-[0_20px_40px_rgba(0,0,0,0.5)] flex flex-col">
                <TrendingUp className="w-10 h-10 text-zinc-500 mb-6 group-hover:text-cyan-400 transition-colors" />
                <span className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300 mb-2 block tracking-tighter font-[family-name:var(--font-space)]">+340%</span>
                <h3 className="text-xl font-bold text-cyan-400 mb-2 uppercase font-[family-name:var(--font-space)]">Volume Buscas</h3>
                <p className="text-zinc-400 text-sm flex-1">Alta abrupta de empresas do eixo Sul-Sudeste caçando construtoras locais de Steel Frame para expansão rápida.</p>
                <div className="mt-4 pt-4 border-t border-zinc-700/50 text-[10px] text-zinc-500 font-mono tracking-wider">
                  &gt; FONTE: GOOGLE TRENDS & SEMRUSH
                </div>
              </div>
              <div className="bg-gradient-to-br from-zinc-700 to-zinc-900 border border-zinc-500/50 backdrop-blur-3xl p-10 rounded-xl hover:bg-zinc-700 transition-all duration-500 hover:border-cyan-500/50 group animate-in zoom-in-95 fade-in duration-700 delay-400 shadow-[0_0_40px_rgba(255,255,255,0.05)] flex flex-col">
                <ShieldCheck className="w-10 h-10 text-white mb-6 group-hover:text-cyan-400 transition-colors animate-pulse" />
                <span className="text-4xl md:text-5xl font-bold text-white mb-2 block tracking-tighter font-[family-name:var(--font-space)]">ALTO</span>
                <h3 className="text-xl font-bold text-cyan-400 mb-2 uppercase font-[family-name:var(--font-space)]">Ticket de Obra</h3>
                <p className="text-zinc-300 text-sm flex-1">Orçamentos pesados exigem vitrine de multinacional. O cliente compra credibilidade (mitigação de risco).</p>
                <div className="mt-4 pt-4 border-t border-zinc-500/50 text-[10px] text-zinc-400 font-mono tracking-wider">
                  &gt; FONTE: DADOS SINDUSCON-SC
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Screen 2: Solutions */}
        <div className={`absolute inset-0 flex items-center justify-center p-8 transition-all duration-1000 ${currentScreen === 2 ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-12 pointer-events-none"}`}>
          
          <div className={`transition-all duration-700 w-full max-w-6xl flex flex-col ${activeAvatar ? "blur-xl opacity-0 scale-95 pointer-events-none" : "blur-0 opacity-100 scale-100 pointer-events-auto"}`}>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-in slide-in-from-bottom-8 fade-in duration-700 font-[family-name:var(--font-space)] uppercase tracking-tighter">
              O ECOSSISTEMA DE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">NEUROMARKETING</span>
            </h2>
            <p className="text-2xl text-zinc-400 mb-12 animate-in slide-in-from-bottom-8 fade-in duration-700 delay-100 font-light">Pilares da máquina de vendas.</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { id: 1, name: "Identidade Visual", desc: "A base da confiança.", icon: ShieldCheck },
                { id: 2, name: "Google Meu Negócio", desc: "Domínio nas buscas.", icon: Search },
                { id: 3, name: "Vitrine Instagram", desc: "O portfólio de engenharia.", icon: Camera },
                { id: 4, name: "Site Institucional", desc: "Sede digital premium.", icon: MonitorSmartphone }
              ].map((item, index) => (
                <div 
                  key={item.id}
                  onClick={() => setActiveAvatar(item.id)}
                  style={{ animationDelay: `${200 + index * 100}ms` }}
                  className="bg-zinc-800/80 border border-zinc-600/50 rounded-xl p-8 cursor-pointer hover:bg-zinc-700 hover:border-cyan-500/50 transition-all duration-300 group shadow-[0_10px_30px_rgba(0,0,0,0.5)] animate-in zoom-in-95 fade-in duration-700 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <item.icon className="w-10 h-10 text-zinc-500 mb-6 group-hover:text-cyan-400 transition-colors" />
                  <div className="text-xl md:text-2xl font-bold text-white mb-2 uppercase font-[family-name:var(--font-space)] tracking-tight">{item.name}</div>
                  <p className="text-base text-zinc-400 group-hover:text-zinc-300 transition-colors">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Modals */}
          <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 p-8 ${activeAvatar ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none scale-105"}`}>
            {activeAvatar && (
              <div className="w-full max-w-6xl h-[80vh] bg-zinc-900/95 backdrop-blur-3xl border-2 border-zinc-700 rounded-2xl p-8 md:p-16 relative flex items-center shadow-[0_0_80px_rgba(0,0,0,0.8)]">
                <button 
                  onClick={() => setActiveAvatar(null)}
                  className="absolute top-6 right-8 text-sm font-bold tracking-widest uppercase text-white hover:bg-cyan-950 hover:text-cyan-400 transition-colors bg-zinc-800 px-6 py-3 rounded-md border border-zinc-600 font-[family-name:var(--font-space)]"
                >
                  FECHAR ✕
                </button>

                {activeAvatar === 1 && (
                  <div className="flex flex-col md:flex-row w-full items-center justify-between gap-12 animate-in fade-in zoom-in-95 duration-500">
                    <div className="flex-1 space-y-6">
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-cyan-800 rounded-sm text-xs font-bold tracking-widest uppercase text-cyan-400 bg-cyan-950/30"><ShieldCheck className="w-4 h-4"/> 01. Identidade</div>
                      <h3 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-400 leading-tight uppercase font-[family-name:var(--font-space)] tracking-tight">A Marca de Peso.</h3>
                      <p className="text-xl text-zinc-400 leading-relaxed font-light">Nomes imponentes. Nada de serralheria de bairro. Uma identidade geométrica, pesada, feita em aço digital. O cliente B2B precisa sentir que você dá conta de erguer 5 mil metros quadrados de galpão.</p>
                    </div>
                    <div className="w-full md:w-[500px] h-[500px] relative rounded-xl overflow-hidden border border-zinc-600 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                      <Image src="/propostas/rudinei/identidade.png" alt="Identidade Visual Rudinei" fill className="object-cover" />
                    </div>
                  </div>
                )}
                {activeAvatar === 2 && (
                  <div className="flex flex-col md:flex-row w-full items-center justify-between gap-12 animate-in fade-in zoom-in-95 duration-500">
                    <div className="flex-1 space-y-6">
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-cyan-800 rounded-sm text-xs font-bold tracking-widest uppercase text-cyan-400 bg-cyan-950/30"><Search className="w-4 h-4"/> 02. Google</div>
                      <h3 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-400 leading-tight uppercase font-[family-name:var(--font-space)] tracking-tight">Dono das Buscas.</h3>
                      <p className="text-xl text-zinc-400 leading-relaxed font-light">Quando um diretor industrial digitar "galpão steel frame Araquari" no Google, o seu nome aparece primeiro. Ficha técnica completa, avaliações 5 estrelas e fotos profissionais de obra — tudo configurado para fechar o lead antes da ligação.</p>
                    </div>
                    <div className="w-full md:w-[500px] h-[500px] relative rounded-xl overflow-hidden border border-zinc-600 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                      <Image src="/propostas/rudinei/google.png" alt="Google Meu Negócio" fill className="object-cover" />
                    </div>
                  </div>
                )}
                {activeAvatar === 3 && (
                  <div className="flex flex-col md:flex-row w-full items-center justify-between gap-12 animate-in fade-in zoom-in-95 duration-500">
                    <div className="flex-1 space-y-6">
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-cyan-800 rounded-sm text-xs font-bold tracking-widest uppercase text-cyan-400 bg-cyan-950/30"><Camera className="w-4 h-4"/> 03. Instagram</div>
                      <h3 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-400 leading-tight uppercase font-[family-name:var(--font-space)] tracking-tight">O Portfólio Vivo.</h3>
                      <p className="text-xl text-zinc-400 leading-relaxed font-light">Grid curado com fotos de obra, drone e detalhes estruturais. Cada post é uma prova social visual para o decisor de compra. Antes de contratar qualquer construtora, ele vai olhar seu Instagram. E vai ficar impressionado.</p>
                    </div>
                    <div className="w-full md:w-[500px] h-[500px] relative rounded-xl overflow-hidden border border-zinc-600 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                      <Image src="/propostas/rudinei/instagram.png" alt="Instagram Rudinei" fill className="object-cover" />
                    </div>
                  </div>
                )}
                {activeAvatar === 4 && (
                  <div className="flex flex-col md:flex-row w-full items-center justify-between gap-12 animate-in fade-in zoom-in-95 duration-500">
                    <div className="flex-1 space-y-6">
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-cyan-800 rounded-sm text-xs font-bold tracking-widest uppercase text-cyan-400 bg-cyan-950/30"><MonitorSmartphone className="w-4 h-4"/> 04. Web App</div>
                      <h3 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-400 leading-tight uppercase font-[family-name:var(--font-space)] tracking-tight">A Sede Digital.</h3>
                      <p className="text-xl text-zinc-400 leading-relaxed font-light">Carregamento ultrarrápido, visual corporativo escuro (Metálico). Especificações técnicas das vigas, catálogo de galpões pré-moldados e funil direto pro seu WhatsApp.</p>
                      <a href="/propostas/rudinei/preview" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-cyan-500 text-black px-8 py-4 font-bold tracking-wider uppercase hover:bg-cyan-400 transition-colors rounded-sm shadow-lg">
                        Abrir Site Completo <MonitorSmartphone className="w-5 h-5"/>
                      </a>
                    </div>
                    <div className="w-full md:w-[500px] lg:w-[600px] h-[500px] relative rounded-xl overflow-hidden border border-zinc-500 shadow-[0_20px_60px_rgba(255,255,255,0.1)] bg-zinc-900">
                      <Image src="/propostas/rudinei/steelframe_hero.png" alt="Site Preview" fill className="object-cover opacity-40" />
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-8">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center rounded-sm rotate-45">
                            <span className="font-black text-black -rotate-45 text-xs">R</span>
                          </div>
                          <span className="font-black text-2xl tracking-tighter text-white uppercase">RUDINEI <span className="text-cyan-400 font-light">ENG.</span></span>
                        </div>
                        <p className="text-zinc-300 text-center text-lg">Site completo com hero slider, portfólio, serviços, CTA e rodapé profissional.</p>
                        <a href="/propostas/rudinei/preview" target="_blank" rel="noopener noreferrer" className="bg-cyan-500 text-black px-8 py-4 font-bold tracking-wider uppercase hover:bg-cyan-400 transition-colors flex items-center gap-2 rounded-sm">
                          Ver Site do Rudinei <MonitorSmartphone className="w-5 h-5"/>
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Screen 4: Pricing */}
        <div className={`absolute inset-0 flex flex-col items-center justify-center p-8 transition-all duration-1000 ${currentScreen === 3 ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-12 pointer-events-none"}`}>
          <div className="w-full max-w-6xl">
            <h2 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-400 text-center mb-4 animate-in slide-in-from-bottom-8 fade-in duration-700 font-[family-name:var(--font-space)] uppercase tracking-tighter">Planos Estratégicos</h2>
            <p className="text-xl md:text-2xl text-zinc-400 text-center mb-16 animate-in slide-in-from-bottom-8 fade-in duration-700 delay-100 font-light">Para diferentes velocidades de expansão.</p>
            
            <div className="grid md:grid-cols-3 gap-8 w-full">
              <div className="bg-zinc-800/80 border border-zinc-700 backdrop-blur-xl p-10 rounded-xl flex flex-col shadow-2xl animate-in zoom-in-95 fade-in duration-700 delay-200">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 uppercase font-[family-name:var(--font-space)] tracking-tight">Essencial</h3>
                <p className="text-zinc-400 text-base mb-4 h-12">O alicerce básico para a marca.</p>
                <div className="inline-flex items-center gap-2 mb-6 bg-zinc-700/50 border border-zinc-600 px-3 py-1.5 rounded-sm w-fit">
                  <span className="text-cyan-400 text-lg">⏱</span>
                  <span className="text-xs font-bold tracking-widest uppercase text-zinc-300">Entrega em <span className="text-white">1 semana</span></span>
                </div>
                <div className="mb-8">
                  <div className="text-sm text-zinc-500 line-through font-mono">de R$ 7.900</div>
                  <div className="text-5xl font-bold text-zinc-300 tracking-tighter font-[family-name:var(--font-space)]">R$ 5.980</div>
                </div>
                <div className="w-full h-[1px] bg-zinc-700 mb-8"></div>
                <ul className="space-y-4 text-zinc-300 text-base flex-1">
                  <li className="flex items-center gap-3"><ShieldCheck className="w-5 h-5 text-zinc-500"/> Identidade Visual</li>
                  <li className="flex items-center gap-3"><Search className="w-5 h-5 text-zinc-500"/> Google Meu Negócio</li>
                  <li className="flex items-center gap-3"><Camera className="w-5 h-5 text-zinc-500"/> Instagram Grid</li>
                </ul>
              </div>

              <div className="bg-gradient-to-b from-zinc-700 to-zinc-800 border-2 border-cyan-500/50 backdrop-blur-2xl p-10 rounded-xl flex flex-col relative shadow-[0_0_60px_rgba(6,182,212,0.15)] transform md:-translate-y-6 animate-in zoom-in-95 fade-in duration-700 delay-300">
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-6 py-2 rounded-sm text-xs tracking-[0.2em] uppercase font-bold shadow-[0_0_30px_rgba(6,182,212,0.5)] font-[family-name:var(--font-space)]">
                  ALTO IMPACTO
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 uppercase font-[family-name:var(--font-space)] tracking-tight mt-2">Autoridade</h3>
                <p className="text-cyan-100 text-base mb-4 h-12">O ecossistema para fechar galpões pesados.</p>
                <div className="inline-flex items-center gap-2 mb-6 bg-cyan-950/60 border border-cyan-700/50 px-3 py-1.5 rounded-sm w-fit">
                  <span className="text-cyan-400 text-lg">⏱</span>
                  <span className="text-xs font-bold tracking-widest uppercase text-cyan-100">Entrega em <span className="text-white">15 dias</span></span>
                </div>
                <div className="mb-8">
                  <div className="text-base text-cyan-200/50 line-through font-mono">de R$ 12.700</div>
                  <div className="text-6xl font-bold text-white tracking-tighter font-[family-name:var(--font-space)] drop-shadow-lg">R$ 8.960</div>
                </div>
                <div className="w-full h-[1px] bg-cyan-900 mb-8"></div>
                <ul className="space-y-4 text-white text-base flex-1 font-medium">
                  <li className="flex items-center gap-3"><ShieldCheck className="w-5 h-5 text-cyan-400"/> Tudo do Pacote Essencial</li>
                  <li className="flex items-center gap-3"><MonitorSmartphone className="w-5 h-5 text-cyan-400"/> Site Institucional Premium</li>
                  <li className="flex items-center gap-3"><Globe className="w-5 h-5 text-cyan-400"/> Hospedagem Integrada</li>
                </ul>
              </div>

              <div className="bg-zinc-800/80 border border-zinc-700 backdrop-blur-xl p-10 rounded-xl flex flex-col shadow-2xl animate-in zoom-in-95 fade-in duration-700 delay-400">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 uppercase font-[family-name:var(--font-space)] tracking-tight">Líder de Mercado</h3>
                <p className="text-zinc-400 text-base mb-4 h-12">Máquina de vendas massiva regional.</p>
                <div className="inline-flex items-center gap-2 mb-6 bg-zinc-700/50 border border-zinc-600 px-3 py-1.5 rounded-sm w-fit">
                  <span className="text-cyan-400 text-lg">⏱</span>
                  <span className="text-xs font-bold tracking-widest uppercase text-zinc-300">Entrega em <span className="text-white">1 mês</span></span>
                </div>
                <div className="mb-8">
                  <div className="text-sm text-zinc-500 line-through font-mono">de R$ 18.400</div>
                  <div className="text-5xl font-bold text-zinc-300 tracking-tighter font-[family-name:var(--font-space)]">R$ 15.890</div>
                </div>
                <div className="w-full h-[1px] bg-zinc-700 mb-8"></div>
                <ul className="space-y-4 text-zinc-300 text-base flex-1">
                  <li className="flex items-center gap-3"><MonitorSmartphone className="w-5 h-5 text-zinc-500"/> Tudo pacote Autoridade</li>
                  <li className="flex items-center gap-3"><TrendingUp className="w-5 h-5 text-zinc-500"/> Tráfego Pago Pesado</li>
                  <li className="flex items-center gap-3"><Target className="w-5 h-5 text-zinc-500"/> Máquina SEO Lead</li>
                  <li className="flex items-center gap-3"><Zap className="w-5 h-5 text-cyan-400"/> Vídeo Comercial 1min30</li>
                </ul>
              </div>
            </div>

            {/* Partnership Clause */}
            <div className="mt-12 max-w-4xl mx-auto bg-zinc-800/40 border border-zinc-700/50 backdrop-blur-md p-6 rounded-lg flex flex-col md:flex-row items-center justify-between gap-6 animate-in slide-in-from-bottom-8 fade-in duration-700 delay-500">
              <div className="flex items-center gap-4">
                <ShieldCheck className="w-8 h-8 text-cyan-400 animate-pulse" />
                <div>
                  <h4 className="text-xl font-bold text-white font-[family-name:var(--font-space)] tracking-tight">Condição de Parceria (Longo Prazo)</h4>
                  <p className="text-zinc-400 text-sm">Cláusula de orçamento diferenciado para clientes parceiros corporativos.</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Star className="w-5 h-5 text-amber-400 fill-amber-400/20 animate-pulse" style={{animationDelay: '0ms'}} />
                <Star className="w-5 h-5 text-amber-400 fill-amber-400/20 animate-pulse" style={{animationDelay: '100ms'}} />
                <Star className="w-5 h-5 text-amber-400 fill-amber-400/20 animate-pulse" style={{animationDelay: '200ms'}} />
                <Star className="w-5 h-5 text-amber-400 fill-amber-400/20 animate-pulse" style={{animationDelay: '300ms'}} />
                <Star className="w-5 h-5 text-amber-400 fill-amber-400/20 animate-pulse" style={{animationDelay: '400ms'}} />
                <div className="w-px h-8 bg-zinc-700 mx-2"></div>
                <Handshake className="w-6 h-6 text-cyan-500 animate-pulse" />
                <Trophy className="w-6 h-6 text-yellow-500 animate-pulse" />
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Modern Metallic Floating Navigation */}
      <button 
        onClick={prevScreen}
        className={`fixed left-4 md:left-10 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-md bg-zinc-800/80 backdrop-blur-lg border border-zinc-600 flex items-center justify-center hover:bg-cyan-900/50 hover:border-cyan-400 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:scale-110 ${currentScreen === 0 ? "opacity-0 pointer-events-none translate-x-[-20px]" : "opacity-100 translate-x-0"}`}
      >
        <ChevronLeft className="w-8 h-8 text-white" />
      </button>

      <button 
        onClick={nextScreen}
        className={`fixed right-4 md:right-10 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-md bg-zinc-800/80 backdrop-blur-lg border border-zinc-600 flex items-center justify-center hover:bg-cyan-900/50 hover:border-cyan-400 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:scale-110 ${currentScreen === 3 ? "opacity-0 pointer-events-none translate-x-[20px]" : "opacity-100 translate-x-0"}`}
      >
        <ChevronRight className="w-8 h-8 text-white" />
      </button>

    </main>
  );
}
