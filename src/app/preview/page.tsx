"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import {
  ChevronRight, ShieldCheck, Zap, TrendingUp, Phone,
  ArrowRight, Building2, Ruler, Clock, CheckCircle2,
  Star, Menu, X, ChevronDown
} from "lucide-react";

const slides = [
  {
    tag: "Líderes em Steel Frame no Norte de SC",
    headline: "CONSTRUÍMOS O FUTURO",
    sub: "NO AÇO.",
    body: "Galpões industriais, condomínios logísticos e obras corporativas com velocidade, precisão e segurança estrutural certificada.",
    cta: "Solicitar Orçamento",
  },
  {
    tag: "Obras entregues em até 40% menos tempo",
    headline: "MAIS RÁPIDO.",
    sub: "MAIS SÓLIDO.",
    body: "Steel frame galvanizado com normatização técnica rigorosa. Do projeto à entrega com cronograma real e equipe especializada.",
    cta: "Ver Portfólio",
  },
  {
    tag: "Tecnologia construtiva do Século XXI",
    headline: "AÇO QUE",
    sub: "NÃO CEDE.",
    body: "Resistência máxima a ventos, cargas e intempéries. A estrutura que grandes indústrias escolhem para expandir com segurança.",
    cta: "Conheça a Tecnologia",
  },
];

const stats = [
  { value: "280+", label: "Obras entregues" },
  { value: "12 anos", label: "De experiência" },
  { value: "40%", label: "Mais rápido que alvenaria" },
  { value: "100%", label: "Norma ABNT" },
];

const services = [
  {
    icon: Building2,
    title: "Galpões Industriais",
    desc: "Estruturas robustas para indústrias, armazéns e plantas logísticas com vãos livres de até 60 metros.",
  },
  {
    icon: Ruler,
    title: "Projetos Personalizados",
    desc: "Do briefing ao memorial descritivo. Engenharia calculada para cada metro quadrado da sua obra.",
  },
  {
    icon: ShieldCheck,
    title: "Garantia Estrutural",
    desc: "Aço galvanizado com laudo técnico, ART e garantia estendida. Sua obra protegida por anos.",
  },
  {
    icon: Clock,
    title: "Entrega Expressa",
    desc: "Cronograma executivo real, com diário de obra digital e relatórios semanais de progresso.",
  },
];

const works = [
  { title: "Galpão Multinacional", location: "Araquari, SC", area: "8.400m²", tag: "Industrial" },
  { title: "Centro Logístico", location: "São Francisco do Sul, SC", area: "12.000m²", tag: "Logística" },
  { title: "Condomínio Empresarial", location: "Joinville, SC", area: "5.200m²", tag: "Corporativo" },
];

export default function PreviewSiteAcosGalpoes() {
  const [slide, setSlide] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSlide((p) => (p + 1) % slides.length);
    }, 5000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  const goSlide = (i: number) => {
    setSlide(i);
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => setSlide((p) => (p + 1) % slides.length), 5000);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-[family-name:var(--font-inter)] overflow-x-hidden selection:bg-cyan-500/30">

      {/* ── HEADER ── */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800 py-3" : "bg-transparent py-5"}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center rounded-sm transform rotate-45">
              <span className="font-black text-black transform -rotate-45 text-sm">R</span>
            </div>
            <div>
              <span className="font-black text-xl tracking-tighter text-white uppercase">AÇOS & GALPÕES</span>
              <span className="text-cyan-400 font-light text-xl"> ENG.</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wider text-zinc-400 uppercase">
            {["Início", "Serviços", "Portfólio", "Tecnologia", "Contato"].map((item) => (
              <a key={item} href="#" className="hover:text-white transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+5547999999999" className="flex items-center gap-2 text-zinc-400 text-sm hover:text-white transition-colors">
              <Phone className="w-4 h-4" /> (47) 9 9999-9999
            </a>
            <button className="bg-cyan-500 text-black px-6 py-2.5 font-bold tracking-wider uppercase text-sm hover:bg-cyan-400 transition-colors">
              Orçamento Grátis
            </button>
          </div>

          <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-zinc-950 border-t border-zinc-800 px-6 py-6 space-y-4">
            {["Início", "Serviços", "Portfólio", "Tecnologia", "Contato"].map((item) => (
              <a key={item} href="#" className="block text-zinc-300 font-semibold text-lg uppercase tracking-wider hover:text-cyan-400 transition-colors">{item}</a>
            ))}
            <button className="w-full bg-cyan-500 text-black py-4 font-bold uppercase tracking-wider mt-4">Solicitar Orçamento</button>
          </div>
        )}
      </header>

      {/* ── HERO SLIDER ── */}
      <section className="relative min-h-screen flex items-end pb-24 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image src="/steelframe_hero.png" alt="Steel Frame" fill className="object-cover scale-105 transition-transform duration-[8000ms]" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-zinc-950/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/40"></div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-4xl">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-cyan-500/40 text-cyan-400 text-xs font-bold tracking-[0.25em] uppercase mb-8 bg-cyan-950/20">
              <Zap className="w-3.5 h-3.5" />
              {slides[slide].tag}
            </div>

            {/* Headline */}
            <h1 className="text-6xl md:text-8xl xl:text-[9rem] font-black uppercase tracking-tighter leading-none mb-4 font-[family-name:var(--font-space)]">
              <span className="text-white block">{slides[slide].headline}</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 block">
                {slides[slide].sub}
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-zinc-300 max-w-2xl mb-10 font-light leading-relaxed">
              {slides[slide].body}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group flex items-center gap-3 bg-cyan-500 text-black px-10 py-5 font-black tracking-wider uppercase text-base hover:bg-white transition-colors">
                {slides[slide].cta}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="flex items-center gap-3 border border-zinc-600 text-white px-10 py-5 font-bold tracking-wider uppercase text-base hover:border-cyan-400 hover:text-cyan-400 transition-colors">
                Ver Portfólio
              </button>
            </div>
          </div>

          {/* Slide indicators */}
          <div className="flex items-center gap-3 mt-16">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goSlide(i)}
                className={`h-1 rounded-full transition-all duration-500 ${slide === i ? "w-12 bg-cyan-400" : "w-4 bg-zinc-600 hover:bg-zinc-400"}`}
              />
            ))}
          </div>
        </div>

        {/* Scroll arrow */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <ChevronDown className="w-8 h-8 text-zinc-500" />
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-zinc-900 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-4xl md:text-5xl font-black text-white tracking-tighter font-[family-name:var(--font-space)]">{s.value}</div>
              <div className="text-zinc-400 text-sm uppercase tracking-widest mt-1 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVIÇOS ── */}
      <section id="servicos" className="py-28 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <div className="text-xs font-bold tracking-[0.3em] uppercase text-cyan-400 mb-4">O que fazemos</div>
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter font-[family-name:var(--font-space)] leading-none">
              SOLUÇÕES EM<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-600">ESTRUTURA METÁLICA</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc) => (
              <div key={svc.title} className="group p-8 border border-zinc-800 bg-zinc-900/40 hover:bg-zinc-800/60 hover:border-cyan-500/40 transition-all duration-300 cursor-pointer relative overflow-hidden">
                <div className="absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-500"></div>
                <svc.icon className="w-10 h-10 text-zinc-600 group-hover:text-cyan-400 transition-colors mb-6" />
                <h3 className="text-xl font-black text-white uppercase tracking-tight mb-3 font-[family-name:var(--font-space)]">{svc.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-950 to-blue-950"></div>
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(6,182,212,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="text-xs font-bold tracking-[0.3em] uppercase text-cyan-400 mb-6">Orçamento sem compromisso</div>
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter font-[family-name:var(--font-space)] leading-none mb-6">
            SEU GALPÃO PRONTO<br />
            <span className="text-cyan-400">EM SEMANAS.</span>
          </h2>
          <p className="text-xl text-zinc-300 max-w-2xl mx-auto mb-10 font-light">
            Fale agora com um engenheiro especialista. Análise de viabilidade gratuita para seu projeto.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group flex items-center gap-3 bg-white text-black px-12 py-5 font-black tracking-wider uppercase text-base hover:bg-cyan-400 transition-colors">
              Quero Meu Orçamento <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex items-center gap-2 text-white font-bold tracking-wider uppercase text-sm hover:text-cyan-400 transition-colors">
              <Phone className="w-4 h-4" /> (47) 9 9999-9999
            </button>
          </div>
        </div>
      </section>

      {/* ── PORTFÓLIO ── */}
      <section id="portfolio" className="py-28 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
            <div>
              <div className="text-xs font-bold tracking-[0.3em] uppercase text-cyan-400 mb-4">Obras executadas</div>
              <h2 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter font-[family-name:var(--font-space)] leading-none">
                NOSSO<br />PORTFÓLIO
              </h2>
            </div>
            <button className="flex items-center gap-2 text-zinc-400 text-sm font-bold tracking-widest uppercase hover:text-cyan-400 transition-colors">
              Ver todos <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {works.map((work) => (
              <div key={work.title} className="group relative h-80 overflow-hidden bg-zinc-800 cursor-pointer">
                <Image src="/steelframe_hero.png" alt={work.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-cyan-500 text-black text-xs font-black uppercase tracking-widest px-3 py-1">{work.tag}</span>
                </div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-xl font-black text-white uppercase tracking-tight font-[family-name:var(--font-space)]">{work.title}</h3>
                  <p className="text-zinc-400 text-sm mt-1">{work.location} · {work.area}</p>
                </div>
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-6 h-6 text-cyan-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIFERENCIAIS ── */}
      <section className="py-28 bg-zinc-900 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-xs font-bold tracking-[0.3em] uppercase text-cyan-400 mb-4">Por que nos escolher</div>
            <h2 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter font-[family-name:var(--font-space)] leading-none mb-10">
              ENGENHARIA<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">SEM SURPRESAS.</span>
            </h2>
            <div className="space-y-6">
              {[
                "Projeto + execução sob um único contrato",
                "Aço galvanizado com laudo técnico e ART",
                "Obra até 3x mais rápida que alvenaria",
                "Relatório semanal digital para o cliente",
                "Garantia estrutural de 10 anos",
              ].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                  <span className="text-zinc-200 text-lg font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[500px] rounded-sm overflow-hidden">
            <Image src="/steelframe_hero.png" alt="Obra" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 bg-zinc-950/90 backdrop-blur-md border border-zinc-800 p-6">
              <div className="flex items-center gap-3 mb-3">
                {[1,2,3,4,5].map((s) => <Star key={s} className="w-5 h-5 text-amber-400 fill-amber-400" />)}
              </div>
              <p className="text-white text-lg font-medium italic">"Entregaram o galpão em 3 semanas. Qualidade e prazo impecáveis. Recomendo sem hesitar."</p>
              <p className="text-zinc-400 text-sm mt-2 uppercase tracking-wider font-bold">— Diretor Industrial, Araquari</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-black border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center rounded-sm transform rotate-45">
                <span className="font-black text-black transform -rotate-45 text-sm">R</span>
              </div>
              <span className="font-black text-2xl tracking-tighter text-white uppercase">RUDINEI <span className="text-cyan-400 font-light">ENG.</span></span>
            </div>
            <p className="text-zinc-500 text-base leading-relaxed max-w-xs">
              Construindo o futuro industrial do Norte de Santa Catarina em Steel Frame.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Serviços</h4>
            <ul className="space-y-3 text-zinc-500 text-sm">
              {["Galpões Industriais", "Estruturas Comerciais", "Coberturas Metálicas", "Laudos Técnicos"].map((i) => (
                <li key={i}><a href="#" className="hover:text-cyan-400 transition-colors">{i}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Contato</h4>
            <ul className="space-y-3 text-zinc-500 text-sm">
              <li>(47) 9 9999-9999</li>
              <li>contato@acosgalpoes.com.br</li>
              <li>Araquari, SC — Brasil</li>
            </ul>
            <button className="mt-6 bg-cyan-500 text-black px-6 py-3 font-bold uppercase tracking-wider text-sm hover:bg-cyan-400 transition-colors w-full">
              Orçamento Grátis
            </button>
          </div>
        </div>
        <div className="border-t border-zinc-900 py-6">
          <p className="text-center text-zinc-600 text-xs uppercase tracking-widest">
            © 2026 Aços e Galpões SC — Steel Frame · CREA/SC
          </p>
        </div>
      </footer>

    </div>
  );
}
