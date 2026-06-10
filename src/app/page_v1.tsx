"use client";

import { useState } from "react";
import Image from "next/image";

export default function PresentationDashboard() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [activeAvatar, setActiveAvatar] = useState<number | null>(null);

  const nextScreen = () => setCurrentScreen((prev) => Math.min(prev + 1, 3));
  const prevScreen = () => setCurrentScreen((prev) => Math.max(prev - 1, 0));

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-orange-500 selection:text-white flex flex-col">
      {/* Navigation Bar */}
      <header className="w-full bg-zinc-900/80 backdrop-blur-md border-b border-zinc-800/50 p-4 flex justify-between items-center z-50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-orange-600 rounded-md flex items-center justify-center font-bold text-xl shadow-[0_0_15px_rgba(234,88,12,0.5)]">
            A
          </div>
          <div>
            <div className="font-bold text-lg leading-tight">Alex Cavalcante</div>
            <div className="text-xs text-zinc-400">Consultoria Estratégica</div>
          </div>
        </div>
        
        <div className="flex gap-2">
          {["Visão Geral", "Mercado (BI)", "Soluções", "Proposta"].map((step, idx) => (
            <div 
              key={idx} 
              className={`px-3 py-1 text-sm rounded-full transition-colors ${currentScreen === idx ? "bg-orange-500/20 text-orange-400 border border-orange-500/30" : "text-zinc-500"}`}
            >
              {idx + 1}. {step}
            </div>
          ))}
        </div>

        <div className="flex gap-4">
          <button 
            onClick={prevScreen} 
            disabled={currentScreen === 0}
            className="px-4 py-2 text-sm bg-zinc-800 rounded-md disabled:opacity-50"
          >
            Voltar
          </button>
          <button 
            onClick={nextScreen} 
            disabled={currentScreen === 3}
            className="px-4 py-2 text-sm bg-orange-600 text-white rounded-md disabled:opacity-50"
          >
            Avançar
          </button>
        </div>
      </header>

      {/* Screen Content */}
      <div className="flex-1 overflow-auto relative">
        
        {/* Screen 0: Cover */}
        {currentScreen === 0 && (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 animate-in fade-in zoom-in duration-500">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-900/20 via-zinc-950 to-zinc-950 -z-10"></div>
            <div className="inline-block px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-medium mb-6">
              Apresentação Comercial Confidencial
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-4 text-center">
              Estratégia Digital para <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Rudinei</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl text-center mb-12">
              Transformando a experiência de vendas de Galpões e Estruturas Metálicas em Araquari e Região.
            </p>
            <button onClick={nextScreen} className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-zinc-200 transition-transform hover:scale-105">
              Iniciar Apresentação
            </button>
          </div>
        )}

        {/* Screen 1: Market BI */}
        {currentScreen === 1 && (
          <div className="absolute inset-0 p-8 md:p-16 animate-in slide-in-from-bottom-8 fade-in duration-500">
            <h2 className="text-4xl font-bold mb-8 flex items-center gap-4">
              <span className="w-2 h-8 bg-orange-500 rounded-full"></span> 
              Inteligência de Mercado: Araquari
            </h2>
            
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl shadow-xl">
                <div className="text-zinc-500 text-sm font-medium mb-2">Potencial Logístico</div>
                <div className="text-4xl font-black text-white mb-2">Polo BR-101</div>
                <div className="text-xs text-green-400 flex items-center gap-1">↑ Crescimento acelerado</div>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl shadow-xl">
                <div className="text-zinc-500 text-sm font-medium mb-2">Volume de Buscas (Google)</div>
                <div className="text-4xl font-black text-orange-500 mb-2">+340%</div>
                <div className="text-xs text-zinc-400">Por "Galpão pré-moldado"</div>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl shadow-xl">
                <div className="text-zinc-500 text-sm font-medium mb-2">Concorrência Local</div>
                <div className="text-4xl font-black text-white mb-2">Defasada</div>
                <div className="text-xs text-zinc-400">Oportunidade de Destaque Visual</div>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl shadow-xl">
                <div className="text-zinc-500 text-sm font-medium mb-2">Ticket Médio Industrial</div>
                <div className="text-4xl font-black text-green-500 mb-2">Alto</div>
                <div className="text-xs text-zinc-400">Decisão baseada em confiança</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl">
                <h3 className="text-xl font-bold mb-4">Mapeamento de Concorrentes</h3>
                <ul className="space-y-4">
                  <li className="flex items-center justify-between p-4 bg-zinc-950 rounded-xl border border-zinc-800">
                    <span className="font-medium">Metal Martins</span>
                    <span className="text-red-400 text-sm bg-red-400/10 px-2 py-1 rounded">Presença digital fraca</span>
                  </li>
                  <li className="flex items-center justify-between p-4 bg-zinc-950 rounded-xl border border-zinc-800">
                    <span className="font-medium">Assis Estruturas</span>
                    <span className="text-yellow-400 text-sm bg-yellow-400/10 px-2 py-1 rounded">Visual antigo</span>
                  </li>
                  <li className="flex items-center justify-between p-4 bg-zinc-950 rounded-xl border border-zinc-800">
                    <span className="font-medium">Premoldar</span>
                    <span className="text-blue-400 text-sm bg-blue-400/10 px-2 py-1 rounded">Foco corporativo</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-orange-900/30 to-zinc-900 border border-orange-500/30 p-8 rounded-3xl flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">A Nossa Estratégia</h3>
                <p className="text-zinc-300 text-lg mb-6">
                  Não vamos brigar por preço. Vamos brigar por **Posicionamento Premium**. O cliente industrial de Araquari precisa ver a sua marca como uma Gerdau ou Alufer local. Confiável, estruturada e de grande porte.
                </p>
                <button onClick={nextScreen} className="self-start px-6 py-3 bg-orange-600 text-white rounded-lg font-bold hover:bg-orange-500 transition-colors shadow-lg shadow-orange-500/20">
                  Ver Soluções
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Screen 2: Avatars / Products */}
        {currentScreen === 2 && (
          <div className="absolute inset-0 p-8 md:p-16 animate-in slide-in-from-bottom-8 fade-in duration-500 flex flex-col">
            <h2 className="text-4xl font-bold mb-4 flex items-center gap-4">
              <span className="w-2 h-8 bg-blue-500 rounded-full"></span> 
              Nossas Soluções (Clique para Explorar)
            </h2>
            <p className="text-zinc-400 mb-8 text-lg">Produtos mapeados para revolucionar as vendas do Rudinei.</p>
            
            <div className="flex-1 flex gap-8">
              {/* Sidebar Avatars */}
              <div className="w-1/3 space-y-4">
                {[
                  { id: 1, name: "Marca e Identidade", icon: "💎", desc: "Naming e logo premium" },
                  { id: 2, name: "Dominância no Google", icon: "🗺️", desc: "Ficha GMB 5 Estrelas" },
                  { id: 3, name: "Vitrine Instagram", icon: "📸", desc: "Portfólio de Galpões" },
                  { id: 4, name: "Site Institucional", icon: "🌐", desc: "Presença oficial de vendas" }
                ].map((item) => (
                  <div 
                    key={item.id}
                    onClick={() => setActiveAvatar(item.id)}
                    className={`p-6 rounded-2xl border cursor-pointer transition-all duration-300 ${activeAvatar === item.id ? "bg-zinc-800 border-orange-500 scale-105 shadow-xl shadow-orange-500/10" : "bg-zinc-900 border-zinc-800 hover:bg-zinc-800/80"}`}
                  >
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <div className="font-bold text-xl mb-1">{item.name}</div>
                    <div className="text-sm text-zinc-400">{item.desc}</div>
                  </div>
                ))}
              </div>

              {/* Detail View */}
              <div className="w-2/3 bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 flex items-center justify-center relative overflow-hidden">
                {!activeAvatar && (
                  <div className="text-center text-zinc-500 animate-pulse">
                    <div className="text-6xl mb-4">👈</div>
                    <p className="text-xl">Selecione um produto ao lado para ver a prévia.</p>
                  </div>
                )}
                
                {activeAvatar === 1 && (
                  <div className="text-center animate-in zoom-in duration-300">
                    <h3 className="text-3xl font-bold mb-8">Nomes Sugeridos</h3>
                    <div className="space-y-4">
                      <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800 text-2xl font-black text-white">MetalPro Galpões</div>
                      <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800 text-2xl font-black text-orange-400">AçoNorte Estruturas</div>
                      <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800 text-2xl font-black text-zinc-300">RudiAço Construções</div>
                    </div>
                  </div>
                )}

                {activeAvatar === 2 && (
                  <div className="flex gap-8 items-center animate-in fade-in slide-in-from-right-8 duration-300">
                    <div className="flex-1 space-y-4">
                      <h3 className="text-3xl font-bold text-blue-400">Google Meu Negócio</h3>
                      <p className="text-zinc-300">Posicionamento vital para clientes industriais que buscam construtoras na região. Vamos cravar a marca no mapa logístico.</p>
                      <ul className="space-y-2 text-sm text-zinc-400">
                        <li>✓ Ficha ranqueada para "Galpões"</li>
                        <li>✓ Botão direto de ligação</li>
                        <li>✓ Imagens SEO otimizadas</li>
                      </ul>
                    </div>
                    <div className="w-64 h-[500px] bg-zinc-950 rounded-3xl p-2 border-4 border-zinc-800 shadow-2xl relative">
                      <Image src="/google.png" alt="Google" fill className="object-cover rounded-2xl" />
                    </div>
                  </div>
                )}

                {activeAvatar === 3 && (
                  <div className="flex gap-8 items-center animate-in fade-in slide-in-from-right-8 duration-300">
                    <div className="flex-1 space-y-4">
                      <h3 className="text-3xl font-bold text-pink-500">Instagram Premium</h3>
                      <p className="text-zinc-300">Não é para fazer dancinha. É uma vitrine profissional de engenharia e obras para passar segurança na negociação.</p>
                      <ul className="space-y-2 text-sm text-zinc-400">
                        <li>✓ Grid Padronizado</li>
                        <li>✓ Cobertura de Obras</li>
                        <li>✓ Credibilidade B2B</li>
                      </ul>
                    </div>
                    <div className="w-64 h-[500px] bg-zinc-950 rounded-3xl p-2 border-4 border-zinc-800 shadow-2xl relative">
                      <Image src="/instagram.png" alt="Instagram" fill className="object-cover rounded-2xl" />
                    </div>
                  </div>
                )}

                {activeAvatar === 4 && (
                  <div className="text-center max-w-lg animate-in zoom-in duration-300">
                    <div className="text-6xl mb-6">💻</div>
                    <h3 className="text-3xl font-bold mb-4">Site Institucional (Upsell)</h3>
                    <p className="text-zinc-300 text-lg">
                      O fechamento do ecossistema. Um site moderno que carrega rápido, explica a tecnologia do galpão de lata e pré-moldado, e converte leads empresariais direto pro WhatsApp do Rudinei.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Screen 3: Pricing */}
        {currentScreen === 3 && (
          <div className="absolute inset-0 p-8 md:p-16 animate-in slide-in-from-bottom-8 fade-in duration-500 overflow-y-auto">
            <h2 className="text-4xl font-bold mb-12 text-center flex justify-center items-center gap-4">
              <span className="text-orange-500">Proposta de Investimento</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl">
                <h3 className="text-2xl font-bold mb-2">Presença Essencial</h3>
                <p className="text-zinc-400 mb-6 text-sm">O mínimo necessário para existir.</p>
                <div className="text-4xl font-black mb-6">R$ 6.000</div>
                <ul className="space-y-3 mb-8 text-zinc-300 text-sm">
                  <li>✓ Naming e Identidade</li>
                  <li>✓ Google Meu Negócio</li>
                  <li>✓ Instagram Básico</li>
                </ul>
              </div>

              <div className="bg-gradient-to-b from-orange-900/40 to-zinc-900 border-2 border-orange-500 p-8 rounded-3xl transform scale-105 shadow-[0_0_40px_rgba(234,88,12,0.15)] relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold">
                  FOCO DA NEGOCIAÇÃO
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white">Autoridade Digital</h3>
                <p className="text-orange-200/80 mb-6 text-sm">A estrutura perfeita para começar faturando alto.</p>
                <div className="text-4xl font-black mb-6 text-white">R$ 8.000</div>
                <ul className="space-y-3 mb-8 text-zinc-200 text-sm">
                  <li>✓ Tudo do Essencial</li>
                  <li className="font-bold text-orange-400">✓ Site Institucional Premium</li>
                  <li>✓ Hospedagem e Setup</li>
                </ul>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl">
                <h3 className="text-2xl font-bold mb-2">Máquina de Vendas</h3>
                <p className="text-zinc-400 mb-6 text-sm">Pacote corporativo completo.</p>
                <div className="text-4xl font-black mb-6">R$ 15.000</div>
                <ul className="space-y-3 mb-8 text-zinc-300 text-sm">
                  <li>✓ Tudo do pacote Autoridade</li>
                  <li className="text-green-400 font-medium">✓ SEO e Tráfego Pago Integrado</li>
                  <li className="text-green-400 font-medium">✓ Apresentação Comercial em PDF</li>
                </ul>
              </div>
            </div>

            <div className="max-w-6xl mx-auto mt-12 bg-zinc-900/50 p-6 rounded-2xl text-center border border-zinc-800">
              <span className="text-zinc-400">Próximos passos:</span> Ao aprovar hoje, começamos a imersão na marca amanhã.
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
