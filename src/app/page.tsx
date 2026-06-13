"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  ChevronLeft, ChevronRight, TrendingUp, Globe, ShieldCheck,
  Target, Search, Camera, MonitorSmartphone, Zap, Star, Handshake,
  Trophy, Lock, BarChart3, MapPin, Award, Clock, PhoneCall,
  CheckCircle, Building2, Users, ArrowRight, X, CreditCard,
  MessageCircle, Video
} from "lucide-react";

type PlanKey = "essencial" | "autoridade" | "lider" | null;

const PLAN_DETAILS = {
  essencial: {
    name: "Essencial",
    price: "R$ 5.980",
    delivery: "1 semana",
    highlight: false,
    items: [
      { label: "Logo profissional", detail: "3 versões: colorida, preto e branco" },
      { label: "Manual de Marca", detail: "Tipografia, cores, aplicações corretas" },
      { label: "Cartão de visita digital", detail: "Compartilhável via WhatsApp e QR Code" },
      { label: "Google Meu Negócio", detail: "Configuração + otimização completa" },
      { label: "30 fotos de obra organizadas", detail: "Editadas e categorizadas por tipo de obra" },
      { label: "Gestão de avaliações", detail: "Respostas e estratégia nos primeiros 30 dias" },
      { label: "9 posts Instagram", detail: "Grid inicial curado com fotos reais de obra" },
      { label: "Bio otimizada + highlights", detail: "Perfil profissional com links estratégicos" },
      { label: "5 templates de stories", detail: "Modelos editáveis para publicar toda semana" },
    ]
  },
  autoridade: {
    name: "Autoridade",
    price: "R$ 8.960",
    delivery: "15 dias",
    highlight: true,
    items: [
      { label: "Tudo do Pacote Essencial", detail: "Completo, sem exceções" },
      { label: "Site institucional (5 páginas)", detail: "Home, Serviços, Portfólio, Sobre, Contato" },
      { label: "Domínio .com.br (1 ano)", detail: "Registro de domínio no seu nome" },
      { label: "Hospedagem (1 ano)", detail: "Servidor rápido, SSL, backup diário" },
      { label: "Formulário de orçamento", detail: "Lead qualificado direto no e-mail + WhatsApp" },
      { label: "WhatsApp flutuante", detail: "Botão de contato em todas as páginas" },
      { label: "SEO On-Page básico", detail: "Meta tags, títulos e palavras-chave configurados" },
      { label: "Relatório mensal de visitas", detail: "Google Analytics integrado, relatório automático" },
      { label: "Página de portfólio com galeria", detail: "Obras organizadas por tipo e tamanho" },
    ]
  },
  lider: {
    name: "Líder de Mercado",
    price: "R$ 15.890",
    delivery: "1 mês",
    highlight: false,
    items: [
      { label: "Tudo do Pacote Autoridade", detail: "Completo, sem exceções" },
      { label: "Google Ads (setup + 1 mês)", detail: "Campanhas para 'galpão steel frame' na região" },
      { label: "Meta Ads (setup + 1 mês)", detail: "Instagram + Facebook com segmentação industrial B2B" },
      { label: "Máquina SEO Lead", detail: "3 artigos técnicos + palavras-chave de alta intenção" },
      { label: "Vídeo Comercial 1min30", detail: "Roteiro, gravação em obra, edição profissional" },
      { label: "CRM básico para leads", detail: "Pipeline visual de clientes e orçamentos" },
      { label: "Consultoria estratégica mensal", detail: "2h/mês por 3 meses com especialista Produza" },
      { label: "Gestão de tráfego pago", detail: "Relatórios semanais + otimização de campanhas" },
      { label: "Campanha de remarketing", detail: "Recupera visitantes que não fecharam orçamento" },
    ]
  }
};

export default function PresentationDashboardFinal() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [activeAvatar, setActiveAvatar] = useState<number | null>(null);
  const [activePlan, setActivePlan] = useState<PlanKey>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [authError, setAuthError] = useState(false);
  const TOTAL_SCREENS = 8;

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = e.currentTarget.querySelector('input[type="password"]') as HTMLInputElement;
    const pwd = input?.value || passwordInput;
    if (pwd === "rudinei2026") { setIsAuthenticated(true); }
    else { setAuthError(true); setTimeout(() => setAuthError(false), 2000); }
  };

  const nextScreen = useCallback(() => {
    setActiveAvatar(null); setActivePlan(null);
    setCurrentScreen((prev) => Math.min(prev + 1, TOTAL_SCREENS - 1));
  }, []);
  const prevScreen = useCallback(() => {
    setActiveAvatar(null); setActivePlan(null);
    setCurrentScreen((prev) => Math.max(prev - 1, 0));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activePlan || activeAvatar) { if (e.key === "Escape") { setActivePlan(null); setActiveAvatar(null); } return; }
      if (e.key === "ArrowRight" || e.key === "ArrowDown") nextScreen();
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") prevScreen();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextScreen, prevScreen, activePlan, activeAvatar]);

  useEffect(() => {
    let lastScroll = 0;
    const handleWheel = (e: WheelEvent) => {
      if (activePlan || activeAvatar) return;
      const now = new Date().getTime();
      if (now - lastScroll < 800) return;
      if (e.deltaY > 50) { nextScreen(); lastScroll = now; }
      else if (e.deltaY < -50) { prevScreen(); lastScroll = now; }
    };
    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, [nextScreen, prevScreen, activePlan, activeAvatar]);

  const backgrounds = [
    "from-zinc-800 via-zinc-900 to-zinc-950",
    "from-slate-800 via-zinc-900 to-zinc-950",
    "from-gray-800 via-zinc-900 to-slate-950",
    "from-zinc-700 via-zinc-800 to-zinc-950",
    "from-slate-900 via-zinc-900 to-zinc-950",
    "from-zinc-900 via-slate-900 to-zinc-950",
    "from-zinc-800 via-slate-900 to-zinc-950",
    "from-slate-800 via-zinc-800 to-zinc-900",
  ];

  const navItems = ["Visão Geral", "Mercado", "Soluções", "Proposta", "Consultoria", "Concorrentes", "Expansão", "Contratar"];

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
              <input type="password" value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="Senha de acesso"
                className={`w-full bg-black/50 border ${authError ? 'border-red-500' : 'border-zinc-700'} rounded-lg px-4 py-4 text-white focus:outline-none focus:border-cyan-500 transition-colors tracking-widest text-center`}
                autoFocus />
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

      <div className={`absolute inset-0 transition-colors duration-1000 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] -z-30 ${backgrounds[currentScreen]}`}></div>
      <div className="absolute inset-0 transition-opacity duration-1000 -z-20 overflow-hidden pointer-events-none opacity-15 mix-blend-luminosity">
        <div className="absolute inset-0 w-[110%] h-[110%] -top-[5%] -left-[5%] animate-pan">
          <Image src="/propostas/rudinei/steelframe_bg_light.png" alt="Steel Frame Panning" fill className="object-cover" priority />
        </div>
        <div className="absolute inset-0 bg-black/30 z-20"></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-zinc-900/70 backdrop-blur-3xl border-b border-zinc-700/50 shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
        <div className="max-w-7xl mx-auto px-6 py-3 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-col items-start gap-1">
            <div className="relative w-40 h-10 md:w-48 md:h-12 drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:scale-105 transition-transform duration-500">
              <Image src="/propostas/rudinei/logo-produza.png" alt="Logo Produza" fill className="object-contain object-left" />
            </div>
            <div className="text-xs text-zinc-400 font-medium tracking-wide">Neuromarketing para pessoas e marcas.</div>
          </div>
          <nav className="hidden md:flex items-center gap-2 text-xs font-medium tracking-wider text-zinc-500 uppercase flex-wrap justify-end">
            {navItems.map((item, idx) => (
              <button key={item} onClick={() => { setActivePlan(null); setActiveAvatar(null); setCurrentScreen(idx); }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all duration-500 ${currentScreen === idx ? "bg-cyan-950/40 text-cyan-400 border border-cyan-800/50" : "hover:text-cyan-400 hover:bg-zinc-800/50"}`}>
                <span className="opacity-40 text-[8px]">{idx + 1}</span> {item}
              </button>
            ))}
          </nav>
        </div>
        {/* Progress bar */}
        <div className="h-[2px] bg-zinc-800">
          <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-700"
            style={{ width: `${((currentScreen + 1) / TOTAL_SCREENS) * 100}%` }} />
        </div>
      </header>

      {/* Nav dots */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2">
        {Array.from({ length: TOTAL_SCREENS }).map((_, i) => (
          <button key={i} onClick={() => { setActivePlan(null); setActiveAvatar(null); setCurrentScreen(i); }}
            className={`rounded-full transition-all duration-300 ${currentScreen === i ? "w-8 h-2 bg-cyan-400" : "w-2 h-2 bg-zinc-600 hover:bg-zinc-400"}`} />
        ))}
      </div>

      {/* Main Content */}
      <div className="w-full max-w-6xl h-full mt-28 mb-16 flex items-center justify-center relative">

        {/* SCREEN 0: Cover */}
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 via-cyan-300 to-zinc-500 animate-shine drop-shadow-[0_0_30px_rgba(6,182,212,0.3)]">RUDINEI</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed animate-in slide-in-from-bottom-8 fade-in duration-1000 delay-300">
            Estratégia pesada de engenharia de valor B2B para fechar os maiores galpões do norte de SC.
          </p>
          <button onClick={nextScreen} className="mt-10 flex items-center gap-2 text-cyan-400 border border-cyan-800/50 px-6 py-3 rounded-md hover:bg-cyan-950/30 transition-all animate-in fade-in duration-1000 delay-500 text-sm font-bold tracking-widest uppercase">
            Ver Proposta <ArrowRight className="w-4 h-4"/>
          </button>
        </div>

        {/* SCREEN 1: Market */}
        <div className={`absolute inset-0 flex flex-col items-center justify-center p-8 transition-all duration-1000 ${currentScreen === 1 ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-12 pointer-events-none"}`}>
          <div className="w-full max-w-6xl">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-2 animate-in slide-in-from-bottom-8 fade-in duration-700 font-[family-name:var(--font-space)] uppercase tracking-tight">
              MERCADO DE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">ARAQUARI</span> E REGIÃO
            </h2>
            <p className="text-xl md:text-2xl text-zinc-400 mb-2 animate-in slide-in-from-bottom-8 fade-in duration-700 delay-100 font-light">A maior concentração industrial. Indústrias compram segurança estrutural, não preço.</p>
            <div className="text-[10px] uppercase tracking-widest text-zinc-500 mb-12 animate-in fade-in delay-200 border border-zinc-700 bg-zinc-900/50 inline-block px-3 py-1 rounded">
              📊 CRUZAMENTO DE DADOS: FIESC / SINDUSCON-SC / GOOGLE TRENDS
            </div>
            <div className="grid md:grid-cols-3 gap-6 w-full">
              {[
                { icon: Globe, value: "BR-101 / 280", label: "Eixo Logístico", desc: "Demanda massiva por galpões logísticos impulsionada pelo Porto de São Francisco do Sul e plantas multinacionais.", source: "OBSERVATÓRIO FIESC 2026" },
                { icon: TrendingUp, value: "+340%", label: "Volume Buscas", desc: "Alta abrupta de empresas do eixo Sul-Sudeste caçando construtoras locais de Steel Frame para expansão rápida.", source: "GOOGLE TRENDS & SEMRUSH", highlight: true },
                { icon: ShieldCheck, value: "ALTO", label: "Ticket de Obra", desc: "Orçamentos pesados exigem vitrine de multinacional. O cliente compra credibilidade — mitigação de risco.", source: "DADOS SINDUSCON-SC" },
              ].map((card, i) => (
                <div key={i} className={`bg-gradient-to-br ${card.highlight ? "from-zinc-700 to-zinc-900 border-zinc-500/50" : "from-zinc-800 to-zinc-900 border-zinc-600/50"} border backdrop-blur-3xl p-10 rounded-xl hover:border-cyan-500/30 group transition-all duration-500 shadow-[0_20px_40px_rgba(0,0,0,0.5)] flex flex-col animate-in zoom-in-95 fade-in duration-700`} style={{ animationDelay: `${200 + i * 100}ms` }}>
                  <card.icon className="w-10 h-10 text-zinc-500 mb-6 group-hover:text-cyan-400 transition-colors" />
                  <span className={`text-4xl md:text-5xl font-bold mb-2 block tracking-tighter font-[family-name:var(--font-space)] ${card.highlight ? "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300" : "text-white"}`}>{card.value}</span>
                  <h3 className="text-xl font-bold text-cyan-400 mb-2 uppercase font-[family-name:var(--font-space)]">{card.label}</h3>
                  <p className="text-zinc-400 text-sm flex-1">{card.desc}</p>
                  <div className="mt-4 pt-4 border-t border-zinc-700/50 text-[10px] text-zinc-500 font-mono tracking-wider">&gt; FONTE: {card.source}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SCREEN 2: Solutions */}
        <div className={`absolute inset-0 flex items-center justify-center p-8 transition-all duration-1000 ${currentScreen === 2 ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-12 pointer-events-none"}`}>
          <div className={`transition-all duration-700 w-full max-w-6xl flex flex-col ${activeAvatar ? "blur-xl opacity-0 scale-95 pointer-events-none" : "blur-0 opacity-100 scale-100 pointer-events-auto"}`}>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 font-[family-name:var(--font-space)] uppercase tracking-tighter">
              O ECOSSISTEMA DE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">NEUROMARKETING</span>
            </h2>
            <p className="text-2xl text-zinc-400 mb-12 font-light">Clique em cada pilar para ver os detalhes.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { id: 1, name: "Identidade Visual", desc: "A base da confiança.", icon: ShieldCheck },
                { id: 2, name: "Google Meu Negócio", desc: "Domínio nas buscas.", icon: Search },
                { id: 3, name: "Vitrine Instagram", desc: "O portfólio de engenharia.", icon: Camera },
                { id: 4, name: "Site Institucional", desc: "Sede digital premium.", icon: MonitorSmartphone }
              ].map((item, index) => (
                <div key={item.id} onClick={() => setActiveAvatar(item.id)} style={{ animationDelay: `${200 + index * 100}ms` }}
                  className="bg-zinc-800/80 border border-zinc-600/50 rounded-xl p-8 cursor-pointer hover:bg-zinc-700 hover:border-cyan-500/50 transition-all duration-300 group shadow-[0_10px_30px_rgba(0,0,0,0.5)] animate-in zoom-in-95 fade-in duration-700 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <item.icon className="w-10 h-10 text-zinc-500 mb-6 group-hover:text-cyan-400 transition-colors" />
                  <div className="text-xl md:text-2xl font-bold text-white mb-2 uppercase font-[family-name:var(--font-space)] tracking-tight">{item.name}</div>
                  <p className="text-base text-zinc-400 group-hover:text-zinc-300 transition-colors">{item.desc}</p>
                  <div className="mt-4 text-xs text-cyan-500 font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">Ver detalhes →</div>
                </div>
              ))}
            </div>
          </div>

          {/* Avatar Modals */}
          <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 p-8 ${activeAvatar ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none scale-105"}`}>
            {activeAvatar && (
              <div className="w-full max-w-6xl h-[80vh] bg-zinc-900/95 backdrop-blur-3xl border-2 border-zinc-700 rounded-2xl p-8 md:p-16 relative flex items-center shadow-[0_0_80px_rgba(0,0,0,0.8)]">
                <button onClick={() => setActiveAvatar(null)}
                  className="absolute top-6 right-8 text-sm font-bold tracking-widest uppercase text-white hover:bg-cyan-950 hover:text-cyan-400 transition-colors bg-zinc-800 px-6 py-3 rounded-md border border-zinc-600 font-[family-name:var(--font-space)]">
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
                      <p className="text-xl text-zinc-400 leading-relaxed font-light">Quando um diretor industrial digitar &quot;galpão steel frame Araquari&quot; no Google, o seu nome aparece primeiro. Ficha técnica completa, avaliações 5 estrelas e fotos profissionais de obra — tudo configurado para fechar o lead antes da ligação.</p>
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

        {/* SCREEN 3: Pricing */}
        <div className={`absolute inset-0 flex flex-col items-center justify-center p-8 transition-all duration-1000 ${currentScreen === 3 ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-12 pointer-events-none"}`}>
          {/* Plan Detail Modal */}
          {activePlan && (
            <div className="absolute inset-0 z-30 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
              <div className="w-full max-w-2xl bg-zinc-900 border border-zinc-700 rounded-2xl p-8 shadow-[0_0_80px_rgba(0,0,0,0.9)] animate-in zoom-in-95 fade-in duration-300 max-h-[90vh] overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-xs text-cyan-400 font-bold tracking-widest uppercase mb-1">Detalhamento Completo</p>
                    <h3 className="text-3xl font-bold text-white font-[family-name:var(--font-space)] uppercase">{PLAN_DETAILS[activePlan].name}</h3>
                  </div>
                  <button onClick={() => setActivePlan(null)} className="w-10 h-10 bg-zinc-800 border border-zinc-600 rounded-lg flex items-center justify-center hover:bg-red-950 hover:border-red-500 transition-colors">
                    <X className="w-5 h-5 text-white" />
                  </button>
                </div>
                <div className="flex items-center gap-4 mb-6 p-4 bg-zinc-800/50 rounded-xl border border-zinc-700">
                  <div>
                    <div className="text-3xl font-bold text-white font-[family-name:var(--font-space)]">{PLAN_DETAILS[activePlan].price}</div>
                    <div className="text-zinc-400 text-sm">Entrega em {PLAN_DETAILS[activePlan].delivery}</div>
                  </div>
                  <div className="ml-auto text-right">
                    <div className="text-xs text-zinc-500">à vista no PIX</div>
                    <div className="text-cyan-400 font-bold text-sm">5% de desconto</div>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {PLAN_DETAILS[activePlan].items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 p-3 bg-zinc-800/30 rounded-lg border border-zinc-700/50 hover:border-cyan-800/50 transition-colors">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-white font-semibold text-sm">{item.label}</div>
                        <div className="text-zinc-500 text-xs mt-0.5">{item.detail}</div>
                      </div>
                    </li>
                  ))}
                </ul>
                <a href="https://wa.me/5547999999999?text=Olá! Quero contratar o plano {PLAN_DETAILS[activePlan].name}" target="_blank" rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-green-500 text-black font-bold py-4 rounded-xl uppercase tracking-wider hover:bg-green-400 transition-colors">
                  <MessageCircle className="w-5 h-5"/> Quero este plano — WhatsApp
                </a>
              </div>
            </div>
          )}

          <div className="w-full max-w-6xl">
            <h2 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-400 text-center mb-2 font-[family-name:var(--font-space)] uppercase tracking-tighter">Planos Estratégicos</h2>
            <p className="text-xl md:text-2xl text-zinc-400 text-center mb-4 font-light">Clique em cada plano para ver a lista completa de entregáveis.</p>
            <div className="grid md:grid-cols-3 gap-8 w-full">
              {/* Essencial */}
              <div onClick={() => setActivePlan("essencial")} className="bg-zinc-800/80 border border-zinc-700 backdrop-blur-xl p-10 rounded-xl flex flex-col shadow-2xl cursor-pointer hover:border-zinc-500 hover:bg-zinc-700/80 transition-all duration-300 group animate-in zoom-in-95 fade-in duration-700 delay-200">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 uppercase font-[family-name:var(--font-space)] tracking-tight">Essencial</h3>
                <p className="text-zinc-400 text-base mb-4 h-12">O alicerce básico para a marca.</p>
                <div className="inline-flex items-center gap-2 mb-6 bg-zinc-700/50 border border-zinc-600 px-3 py-1.5 rounded-sm w-fit">
                  <span className="text-cyan-400 text-lg">⏱</span>
                  <span className="text-xs font-bold tracking-widest uppercase text-zinc-300">Entrega em <span className="text-white">1 semana</span></span>
                </div>
                <div className="mb-6">
                  <div className="text-sm text-zinc-500 line-through font-mono">de R$ 7.900</div>
                  <div className="text-5xl font-bold text-zinc-300 tracking-tighter font-[family-name:var(--font-space)]">R$ 5.980</div>
                </div>
                <div className="w-full h-[1px] bg-zinc-700 mb-6"></div>
                <ul className="space-y-3 text-zinc-300 text-sm flex-1">
                  <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-zinc-500"/> Identidade Visual Completa</li>
                  <li className="flex items-center gap-2"><Search className="w-4 h-4 text-zinc-500"/> Google Meu Negócio</li>
                  <li className="flex items-center gap-2"><Camera className="w-4 h-4 text-zinc-500"/> Instagram Grid Profissional</li>
                  <li className="flex items-center gap-2 text-zinc-500 text-xs">+ 6 entregáveis...</li>
                </ul>
                <div className="mt-6 text-center text-xs text-cyan-500 font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">Ver lista completa →</div>
              </div>

              {/* Autoridade */}
              <div onClick={() => setActivePlan("autoridade")} className="bg-gradient-to-b from-zinc-700 to-zinc-800 border-2 border-cyan-500/50 backdrop-blur-2xl p-10 rounded-xl flex flex-col relative shadow-[0_0_60px_rgba(6,182,212,0.15)] transform md:-translate-y-6 cursor-pointer hover:border-cyan-400 transition-all duration-300 group animate-in zoom-in-95 fade-in duration-700 delay-300">
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-6 py-2 rounded-sm text-xs tracking-[0.2em] uppercase font-bold shadow-[0_0_30px_rgba(6,182,212,0.5)] font-[family-name:var(--font-space)]">ALTO IMPACTO</div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 uppercase font-[family-name:var(--font-space)] tracking-tight mt-2">Autoridade</h3>
                <p className="text-cyan-100 text-base mb-4 h-12">O ecossistema para fechar galpões pesados.</p>
                <div className="inline-flex items-center gap-2 mb-6 bg-cyan-950/60 border border-cyan-700/50 px-3 py-1.5 rounded-sm w-fit">
                  <span className="text-cyan-400 text-lg">⏱</span>
                  <span className="text-xs font-bold tracking-widest uppercase text-cyan-100">Entrega em <span className="text-white">15 dias</span></span>
                </div>
                <div className="mb-6">
                  <div className="text-base text-cyan-200/50 line-through font-mono">de R$ 12.700</div>
                  <div className="text-6xl font-bold text-white tracking-tighter font-[family-name:var(--font-space)] drop-shadow-lg">R$ 8.960</div>
                </div>
                <div className="w-full h-[1px] bg-cyan-900 mb-6"></div>
                <ul className="space-y-3 text-white text-sm flex-1 font-medium">
                  <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-cyan-400"/> Tudo do Pacote Essencial</li>
                  <li className="flex items-center gap-2"><MonitorSmartphone className="w-4 h-4 text-cyan-400"/> Site Institucional Premium</li>
                  <li className="flex items-center gap-2"><Globe className="w-4 h-4 text-cyan-400"/> Hospedagem Integrada</li>
                  <li className="flex items-center gap-2 text-cyan-200/60 text-xs">+ 6 entregáveis...</li>
                </ul>
                <div className="mt-6 text-center text-xs text-cyan-400 font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">Ver lista completa →</div>
              </div>

              {/* Líder */}
              <div onClick={() => setActivePlan("lider")} className="bg-zinc-800/80 border border-zinc-700 backdrop-blur-xl p-10 rounded-xl flex flex-col shadow-2xl cursor-pointer hover:border-zinc-500 hover:bg-zinc-700/80 transition-all duration-300 group animate-in zoom-in-95 fade-in duration-700 delay-400">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 uppercase font-[family-name:var(--font-space)] tracking-tight">Líder de Mercado</h3>
                <p className="text-zinc-400 text-base mb-4 h-12">Máquina de vendas massiva regional.</p>
                <div className="inline-flex items-center gap-2 mb-6 bg-zinc-700/50 border border-zinc-600 px-3 py-1.5 rounded-sm w-fit">
                  <span className="text-cyan-400 text-lg">⏱</span>
                  <span className="text-xs font-bold tracking-widest uppercase text-zinc-300">Entrega em <span className="text-white">1 mês</span></span>
                </div>
                <div className="mb-6">
                  <div className="text-sm text-zinc-500 line-through font-mono">de R$ 18.400</div>
                  <div className="text-5xl font-bold text-zinc-300 tracking-tighter font-[family-name:var(--font-space)]">R$ 15.890</div>
                </div>
                <div className="w-full h-[1px] bg-zinc-700 mb-6"></div>
                <ul className="space-y-3 text-zinc-300 text-sm flex-1">
                  <li className="flex items-center gap-2"><MonitorSmartphone className="w-4 h-4 text-zinc-500"/> Tudo pacote Autoridade</li>
                  <li className="flex items-center gap-2"><TrendingUp className="w-4 h-4 text-zinc-500"/> Tráfego Pago Pesado</li>
                  <li className="flex items-center gap-2"><Target className="w-4 h-4 text-zinc-500"/> Máquina SEO Lead</li>
                  <li className="flex items-center gap-2"><Zap className="w-4 h-4 text-cyan-400"/> Vídeo Comercial 1min30</li>
                  <li className="flex items-center gap-2 text-zinc-500 text-xs">+ 5 entregáveis...</li>
                </ul>
                <div className="mt-6 text-center text-xs text-cyan-500 font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">Ver lista completa →</div>
              </div>
            </div>

            <div className="mt-8 max-w-4xl mx-auto bg-zinc-800/40 border border-zinc-700/50 p-5 rounded-lg flex flex-col md:flex-row items-center justify-between gap-4 animate-in slide-in-from-bottom-8 fade-in duration-700 delay-500">
              <div className="flex items-center gap-4">
                <ShieldCheck className="w-7 h-7 text-cyan-400 animate-pulse" />
                <div>
                  <h4 className="text-lg font-bold text-white font-[family-name:var(--font-space)] tracking-tight">Condição de Parceria (Longo Prazo)</h4>
                  <p className="text-zinc-400 text-sm">Cláusula de orçamento diferenciado para clientes parceiros corporativos.</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                {[0,100,200,300,400].map(d => <Star key={d} className="w-5 h-5 text-amber-400 fill-amber-400/20 animate-pulse" style={{animationDelay: `${d}ms`}} />)}
                <div className="w-px h-8 bg-zinc-700 mx-2"></div>
                <Handshake className="w-6 h-6 text-cyan-500 animate-pulse" />
                <Trophy className="w-6 h-6 text-yellow-500 animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        {/* SCREEN 4: Market Consulting */}
        <div className={`absolute inset-0 flex flex-col items-center justify-center p-8 transition-all duration-1000 ${currentScreen === 4 ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-12 pointer-events-none"}`}>
          <div className="w-full max-w-6xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-amber-800/50 rounded-md text-xs font-bold tracking-widest uppercase text-amber-400 bg-amber-950/20 mb-6">
              <Award className="w-4 h-4"/> CONSULTORIA DE MERCADO — VALOR R$ 2.000 — INCLUÍDA GRATUITAMENTE
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 font-[family-name:var(--font-space)] uppercase tracking-tight">
              O MERCADO QUE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">VOCÊ NÃO VÊ</span>
            </h2>
            <p className="text-xl text-zinc-400 mb-10 font-light">Dados reais do setor de steel frame e galpões em SC. Informação é poder de negociação.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
              {[
                { icon: BarChart3, value: "R$ 15,3 bi", label: "Mercado Nacional", sub: "Estruturas e telhas de aço em 2023", color: "cyan" },
                { icon: TrendingUp, value: "+60%", label: "Crescimento LSF", sub: "Steel Frame nos últimos 3 anos no Brasil", color: "green" },
                { icon: Building2, value: "R$ 800–1.800/m²", label: "Custo de Obra", sub: "Galpão completo em SC (fundação + fechamento)", color: "blue" },
                { icon: MapPin, value: "< 5%", label: "Vacância em SC", sub: "Galpões industriais — mercado extremamente aquecido", color: "amber" },
              ].map((card, i) => (
                <div key={i} className="bg-zinc-800/80 border border-zinc-700 rounded-xl p-6 animate-in zoom-in-95 fade-in duration-700" style={{ animationDelay: `${150 + i * 100}ms` }}>
                  <card.icon className={`w-8 h-8 mb-3 text-${card.color}-400`} />
                  <div className={`text-2xl font-bold text-${card.color}-400 font-[family-name:var(--font-space)] tracking-tight mb-1`}>{card.value}</div>
                  <div className="text-white font-bold text-sm mb-1">{card.label}</div>
                  <div className="text-zinc-500 text-xs">{card.sub}</div>
                </div>
              ))}
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                { title: "Por que agora?", items: ["Expansão do Porto de Itapoá atrai novas indústrias", "E-commerce explode a demanda por galpões logísticos", "Mão de obra qualificada: barreira de entrada para novos players"] },
                { title: "Diferenciais que vendem", items: ["Prazo garantido: 40% mais rápido que alvenaria", "Turnkey (chave na mão): projeto + fabricação + montagem", "Tratamento anticorrosivo vital na região litorânea"] },
                { title: "Oportunidade mapeada", items: ["Vacância histórica < 5%: mais demanda que oferta", "+340% buscas por construtoras locais de LSF", "60% dos concorrentes sem presença digital relevante"] },
              ].map((col, i) => (
                <div key={i} className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-6 animate-in zoom-in-95 fade-in duration-700" style={{ animationDelay: `${400 + i * 100}ms` }}>
                  <h4 className="text-white font-bold text-base mb-4 uppercase tracking-wide font-[family-name:var(--font-space)]">{col.title}</h4>
                  <ul className="space-y-2">
                    {col.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-zinc-400 text-sm">
                        <CheckCircle className="w-4 h-4 text-cyan-500 mt-0.5 flex-shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center text-xs text-zinc-600 font-mono">FONTES: ABCEM • CBCA • FIESC • BUILDINGS.COM.BR • CUSHMAN & WAKEFIELD • SINAPI/CAIXA</div>
          </div>
        </div>

        {/* SCREEN 5: Competitors */}
        <div className={`absolute inset-0 flex flex-col items-center justify-center p-8 transition-all duration-1000 ${currentScreen === 5 ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-12 pointer-events-none"}`}>
          <div className="w-full max-w-6xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-red-800/50 rounded-md text-xs font-bold tracking-widest uppercase text-red-400 bg-red-950/20 mb-6">
              <Target className="w-4 h-4"/> ANÁLISE COMPETITIVA — NORTE DE SANTA CATARINA
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 font-[family-name:var(--font-space)] uppercase tracking-tight">
              SEUS <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500">CONCORRENTES</span> E SEUS PONTOS FRACOS
            </h2>
            <p className="text-lg text-zinc-400 mb-8 font-light">Conhecer o campo de batalha é a primeira vantagem competitiva. Aqui estão os principais players da região.</p>

            {/* Competitors table */}
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-zinc-700">
                    <th className="text-left text-zinc-500 text-xs tracking-widest uppercase py-3 pr-4 font-mono">Empresa</th>
                    <th className="text-left text-zinc-500 text-xs tracking-widest uppercase py-3 pr-4 font-mono">Cidade</th>
                    <th className="text-left text-zinc-500 text-xs tracking-widest uppercase py-3 pr-4 font-mono">Presença Digital</th>
                    <th className="text-left text-zinc-500 text-xs tracking-widest uppercase py-3 font-mono">Ponto Fraco</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "Metalgalvano", city: "Araquari", stars: 2, weak: "Site desatualizado, sem SEO local", threat: "high" },
                    { name: "Metal Martins", city: "Araquari", stars: 2, weak: "Sem Instagram profissional", threat: "high" },
                    { name: "Assis Estruturas", city: "Joinville", stars: 3, weak: "Foco em grandes obras, ignora médias empresas", threat: "medium" },
                    { name: "Metalville", city: "Joinville", stars: 3, weak: "Visual antigo, sem geração de leads online", threat: "medium" },
                    { name: "Teixeira Aço Estrutural", city: "Joinville", stars: 2, weak: "Presença digital fraca, sem Google Ads", threat: "low" },
                    { name: "Grupo Amâncio", city: "Joinville", stars: 4, weak: "Foco em residencial (LSF), não industrial", threat: "low" },
                    { name: "Bandeirantes Estruturas", city: "Joinville", stars: 2, weak: "Sem portfólio digital organizado", threat: "medium" },
                  ].map((c, i) => (
                    <tr key={i} className="border-b border-zinc-800/50 hover:bg-zinc-800/30 transition-colors">
                      <td className="py-4 pr-4">
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${c.threat === 'high' ? 'bg-red-500' : c.threat === 'medium' ? 'bg-amber-500' : 'bg-green-500'}`}></div>
                          <span className="text-white font-semibold">{c.name}</span>
                        </div>
                      </td>
                      <td className="py-4 pr-4 text-zinc-400">{c.city}</td>
                      <td className="py-4 pr-4">
                        <div className="flex gap-1">
                          {[1,2,3,4,5].map(s => <Star key={s} className={`w-3.5 h-3.5 ${s <= c.stars ? 'text-amber-400 fill-amber-400' : 'text-zinc-700'}`} />)}
                        </div>
                      </td>
                      <td className="py-4 text-zinc-400 text-xs">{c.weak}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-red-950/20 border border-red-800/30 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3"><div className="w-3 h-3 rounded-full bg-red-500"></div><span className="text-red-400 text-xs font-bold uppercase tracking-wider">Ameaça Alta</span></div>
                <p className="text-zinc-400 text-sm">Concorrentes diretos em Araquari — mesma cidade, mesmos clientes. Precisam ser neutralizados digitalmente primeiro.</p>
              </div>
              <div className="bg-amber-950/20 border border-amber-800/30 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3"><div className="w-3 h-3 rounded-full bg-amber-500"></div><span className="text-amber-400 text-xs font-bold uppercase tracking-wider">Ameaça Média</span></div>
                <p className="text-zinc-400 text-sm">Grandes de Joinville com alguma presença digital, mas com lacunas claras em geração de leads e SEO local.</p>
              </div>
              <div className="bg-green-950/20 border border-green-800/30 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3"><div className="w-3 h-3 rounded-full bg-green-500"></div><span className="text-green-400 text-xs font-bold uppercase tracking-wider">Oportunidade</span></div>
                <p className="text-zinc-400 text-sm">60% dos concorrentes têm presença digital fraca. Quem dominar Google e Instagram primeiro, domina o mercado.</p>
              </div>
            </div>
          </div>
        </div>

        {/* SCREEN 6: Expansion Timeline */}
        <div className={`absolute inset-0 flex flex-col items-center justify-center p-8 transition-all duration-1000 ${currentScreen === 6 ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-12 pointer-events-none"}`}>
          <div className="w-full max-w-6xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-blue-800/50 rounded-md text-xs font-bold tracking-widest uppercase text-blue-400 bg-blue-950/20 mb-6">
              <Clock className="w-4 h-4"/> PLANO DE EXPANSÃO — HORIZONTE 24 MESES
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 font-[family-name:var(--font-space)] uppercase tracking-tight">
              RUDINEI ENG <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">EM 2 ANOS</span>
            </h2>
            <p className="text-lg text-zinc-400 mb-10 font-light">Projeção realista baseada no comportamento de empresas do setor que investiram em posicionamento digital.</p>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 opacity-40"></div>

              <div className="space-y-5 pl-16">
                {[
                  { month: "MÊS 1", icon: ShieldCheck, color: "cyan", title: "Marca no Ar", desc: "Logo, Google Meu Negócio, Instagram profissional e site no ar. Você existe digitalmente.", kpi: "0 → 30 leads/mês potencial" },
                  { month: "MÊS 3", icon: Search, color: "blue", title: "Google Dominado", desc: "Aparecer nas buscas locais de steel frame. Primeiras avaliações 5 estrelas conquistadas.", kpi: "Posição top 3 em Araquari" },
                  { month: "MÊS 6", icon: TrendingUp, color: "green", title: "Leads Qualificados", desc: "Pipeline cheio de diretores industriais com orçamentos acima de R$ 200k.", kpi: "+30% no faturamento estimado" },
                  { month: "MÊS 9", icon: Trophy, color: "amber", title: "Referência Regional", desc: "Portfólio digital validado. Indicações começam a se multiplicar. Marca conhecida.", kpi: "Faturamento 50% maior que ano anterior" },
                  { month: "MÊS 12", icon: Award, color: "orange", title: "Líder de Mercado Local", desc: "Você é a primeira escolha em Araquari para galpões steel frame industriais.", kpi: "Meta: R$ 1M+ em contratos fechados" },
                  { month: "MÊS 18", icon: MapPin, color: "purple", title: "Expansão Regional", desc: "Joinville, São Francisco do Sul, Garuva. Novos territórios com a mesma estratégia.", kpi: "Alcance: 150km de raio operacional" },
                  { month: "MÊS 24", icon: Globe, color: "pink", title: "Player Consolidado", desc: "Entre os top 5 construtoras de steel frame industrial do norte de SC. Equipe expandida.", kpi: "Faturamento 3× o atual — previsível e recorrente" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-6 animate-in slide-in-from-left-4 fade-in duration-700" style={{ animationDelay: `${i * 80}ms` }}>
                    <div className={`absolute left-[13px] w-6 h-6 rounded-full border-2 border-${item.color}-500 bg-zinc-900 flex items-center justify-center`} style={{ top: `${i * 80 + 12}px` }}>
                      <div className={`w-2 h-2 rounded-full bg-${item.color}-500`}></div>
                    </div>
                    <div className="flex-1 bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-5 hover:border-zinc-600 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-xs font-bold text-${item.color}-400 tracking-widest uppercase font-mono`}>{item.month}</span>
                        <span className="text-xs text-zinc-500 bg-zinc-800 px-3 py-1 rounded-full">{item.kpi}</span>
                      </div>
                      <div className="flex items-center gap-2 mb-1">
                        <item.icon className={`w-4 h-4 text-${item.color}-400`} />
                        <h4 className="text-white font-bold font-[family-name:var(--font-space)] uppercase tracking-wide">{item.title}</h4>
                      </div>
                      <p className="text-zinc-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* SCREEN 7: Hire Now / Payment */}
        <div className={`absolute inset-0 flex flex-col items-center justify-center p-8 transition-all duration-1000 ${currentScreen === 7 ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-12 pointer-events-none"}`}>
          <div className="w-full max-w-6xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-green-800/50 rounded-md text-xs font-bold tracking-widest uppercase text-green-400 bg-green-950/20 mb-6">
              <PhoneCall className="w-4 h-4"/> PRONTO PARA COMEÇAR?
            </div>
            <h2 className="text-4xl md:text-7xl font-bold text-white mb-4 font-[family-name:var(--font-space)] uppercase tracking-tighter">
              CONTRATE <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500">AGORA</span>
            </h2>
            <p className="text-xl text-zinc-400 mb-10 font-light">Escolha seu plano e inicie o processo hoje mesmo. Cada dia sem posicionamento digital é receita perdida para o concorrente.</p>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {(["essencial", "autoridade", "lider"] as PlanKey[]).map((key) => {
                if (!key) return null;
                const plan = PLAN_DETAILS[key];
                return (
                  <div key={key} className={`rounded-xl p-6 border ${plan.highlight ? "border-cyan-500/60 bg-gradient-to-b from-zinc-700 to-zinc-800" : "border-zinc-700 bg-zinc-800/70"} flex flex-col animate-in zoom-in-95 fade-in duration-700`}>
                    <h3 className="text-xl font-bold text-white uppercase font-[family-name:var(--font-space)] mb-1">{plan.name}</h3>
                    <div className="text-3xl font-bold text-white font-[family-name:var(--font-space)] mb-1">{plan.price}</div>
                    <div className="text-zinc-500 text-xs mb-4">Entrega em {plan.delivery}</div>
                    <ul className="space-y-2 flex-1 mb-6">
                      {plan.items.slice(0, 4).map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-zinc-400 text-xs">
                          <CheckCircle className="w-3.5 h-3.5 text-cyan-500 flex-shrink-0" /> {item.label}
                        </li>
                      ))}
                      <li className="text-zinc-600 text-xs pl-5">+ {plan.items.length - 4} entregáveis...</li>
                    </ul>
                    <a href={`https://wa.me/5547999999999?text=Olá! Quero contratar o plano ${plan.name} por ${plan.price}`} target="_blank" rel="noopener noreferrer"
                      className={`w-full flex items-center justify-center gap-2 font-bold py-3 rounded-lg uppercase tracking-wider transition-colors text-sm ${plan.highlight ? "bg-cyan-500 text-black hover:bg-cyan-400" : "bg-zinc-700 text-white hover:bg-zinc-600 border border-zinc-600"}`}>
                      <MessageCircle className="w-4 h-4"/> Quero este plano
                    </a>
                  </div>
                );
              })}
            </div>

            {/* Payment info */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <h4 className="text-white font-bold uppercase tracking-wide font-[family-name:var(--font-space)] mb-4 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-cyan-400"/> Formas de Pagamento
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-green-950/30 border border-green-800/30 rounded-lg">
                    <span className="text-green-400 font-bold text-sm">PIX à Vista</span>
                    <span className="text-green-300 font-black">5% OFF</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-zinc-900/50 border border-zinc-700/50 rounded-lg">
                    <span className="text-zinc-300 text-sm">Cartão de Crédito</span>
                    <span className="text-zinc-400 text-sm">até 12×</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-zinc-900/50 border border-zinc-700/50 rounded-lg">
                    <span className="text-zinc-300 text-sm">Boleto Bancário</span>
                    <span className="text-zinc-400 text-sm">30/60 dias</span>
                  </div>
                </div>
              </div>
              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <h4 className="text-white font-bold uppercase tracking-wide font-[family-name:var(--font-space)] mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-cyan-400"/> Garantias
                </h4>
                <ul className="space-y-3">
                  {[
                    { icon: CheckCircle, text: "30 dias de suporte pós-entrega incluso" },
                    { icon: CheckCircle, text: "Contrato formal com escopo detalhado" },
                    { icon: CheckCircle, text: "Revisões ilimitadas durante o projeto" },
                    { icon: Users, text: "Equipe dedicada exclusiva por plano" },
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-zinc-400 text-sm">
                      <item.icon className="w-4 h-4 text-cyan-500 flex-shrink-0" /> {item.text}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 p-3 bg-cyan-950/30 border border-cyan-800/30 rounded-lg text-center">
                  <p className="text-cyan-400 text-xs font-bold tracking-wider uppercase">Agência Produza — 14 anos de mercado</p>
                  <p className="text-zinc-500 text-xs mt-1">neuropsicobiomed@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-4">
              <a href="https://wa.me/5547999999999" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 bg-green-500 text-black font-bold px-10 py-5 rounded-xl uppercase tracking-widest hover:bg-green-400 transition-colors text-lg shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                <MessageCircle className="w-6 h-6"/> Conversar no WhatsApp
              </a>
              <button onClick={() => setCurrentScreen(0)}
                className="flex items-center gap-2 text-zinc-500 border border-zinc-700 px-6 py-4 rounded-xl hover:text-zinc-300 hover:border-zinc-500 transition-colors text-sm uppercase tracking-wider">
                <ArrowRight className="w-4 h-4 rotate-180"/> Ver Apresentação Novamente
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Navigation Arrows */}
      <button onClick={prevScreen}
        className={`fixed left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-md bg-zinc-800/80 backdrop-blur-lg border border-zinc-600 flex items-center justify-center hover:bg-cyan-900/50 hover:border-cyan-400 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:scale-110 z-40 ${currentScreen === 0 ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
        <ChevronLeft className="w-7 h-7 text-white" />
      </button>

      <button onClick={nextScreen}
        className={`fixed right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-md bg-zinc-800/80 backdrop-blur-lg border border-zinc-600 flex items-center justify-center hover:bg-cyan-900/50 hover:border-cyan-400 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:scale-110 z-40 ${currentScreen === TOTAL_SCREENS - 1 ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
        <ChevronRight className="w-7 h-7 text-white" />
      </button>

    </main>
  );
}
