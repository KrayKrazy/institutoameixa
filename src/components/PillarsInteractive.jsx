import React, { useState } from 'react';
import { Eye, Shield, Flame, Heart, Users, Check, ArrowRight, Sparkles } from 'lucide-react';

const PillarsInteractive = () => {
  const [activeTab, setActiveTab] = useState(0);

  const pillars = [
    {
      id: 0,
      title: 'Autoconsciência',
      subtitle: 'O alicerce de todas as decisões',
      icon: <Eye size={24} />,
      quote: 'A capacidade de reconhecer as próprias emoções e seus impactos no comportamento em tempo real.',
      points: [
        'Identificação e nomeação precisa de estados afetivos (raiva, medo, angústia, euforia).',
        'Compreensão profunda dos gatilhos internos e externos que desencadeiam reações impulsivas.',
        'Desenvolvimento de visão realista sobre forças pessoais e pontos a aprimorar.',
      ],
      practicalTool: 'Mapeamento Emocional Diário & Matriz de Gatilhos',
      outcome: 'Aumento de 85% na capacidade do jovem de prever e prevenir crises de frustração.',
    },
    {
      id: 1,
      title: 'Autorregulação',
      subtitle: 'O controle entre o estímulo e a resposta',
      icon: <Shield size={24} />,
      quote: 'O domínio sobre impulsos destrutivos e a habilidade de responder estrategicamente aos desafios.',
      points: [
        'Canalização produtiva de sentimentos intensos sem agressividade ou retraimento.',
        'Práticas de regulação fisiológica e mental frente a conflitos e situações de estresse.',
        'Adaptabilidade flexível em momentos de crise, perdas ou mudanças bruscas de ambiente.',
      ],
      practicalTool: 'Protocolo de Resposta Consciente em 3 Passos',
      outcome: 'Redução drástica em brigas, desobediência escolar e comportamentos de risco.',
    },
    {
      id: 2,
      title: 'Automotivação',
      subtitle: 'A força intrínseca que não depende de aplausos',
      icon: <Flame size={24} />,
      quote: 'Persistência focada na busca de objetivos significativos, superando o desânimo imediato.',
      points: [
        'Construção de um projeto de vida com marcos de curto, médio e longo prazo.',
        'Tolerância ao erro como parte natural e enriquecedora da curva de aprendizagem.',
        'Desenvolvimento de disciplina e consistência diária para além do entusiasmo passageiro.',
      ],
      practicalTool: 'Quadro de Visão de Futuro & Plano de Ação Semanal',
      outcome: 'Elevação da taxa de permanência escolar e busca ativa por qualificação profissional.',
    },
    {
      id: 3,
      title: 'Empatia Ativa',
      subtitle: 'A ponte para compreender o mundo do outro',
      icon: <Heart size={24} />,
      quote: 'Habilidade de perceber, validar e compreender sentimentos e perspectivas alheias.',
      points: [
        'Sensibilidade aos sinais verbais e não-verbais dos colegas, familiares e educadores.',
        'Desconstrução de preconceitos e julgamentos precipitados no convívio comunitário.',
        'Sensocompassivo que impulsiona o altruísmo e o apoio mútuo entre jovens.',
      ],
      practicalTool: 'Círculos de Escuta Empática & Dinâmicas de Troca de Papéis',
      outcome: 'Fortalecimento da solidariedade e proteção social dentro do grupo comunitário.',
    },
    {
      id: 4,
      title: 'Habilidades Sociais',
      subtitle: 'A arte de liderar e cooperar',
      icon: <Users size={24} />,
      quote: 'A maestria em navegar dinâmicas de grupo, mediar conflitos e inspirar cooperação construtiva.',
      points: [
        'Comunicação interpessoal clara, respeitosa e orientada a soluções.',
        'Capacidade de liderar equipes com integridade, incentivando os companheiros.',
        'Resolução de controvérsias com diálogo maduro e inteligência relacional.',
      ],
      practicalTool: 'Oficinas de Oratória e Mediação de Dilemas Reais',
      outcome: 'Jovens aptos a ingressar em processos seletivos e assumir lideranças cívicas.',
    },
  ];

  const current = pillars[activeTab];

  return (
    <section id="pilares" className="section" style={{ backgroundColor: 'var(--surface-base)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={15} color="var(--accent)" />
            <span>Matriz Pedagógica</span>
          </div>
          <h2 className="section-title">
            Os 5 Pilares da <span>Inteligência Emocional</span>
          </h2>
          <p className="section-subtitle">
            Explore interativamente como desenvolvemos cada competência essencial para transformar
            a mentalidade, as escolhas e o destino de nossos jovens.
          </p>
        </div>

        {/* Seletor de Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.75rem',
            flexWrap: 'wrap',
            marginBottom: '3rem',
          }}
        >
          {pillars.map((p) => {
            const isActive = activeTab === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setActiveTab(p.id)}
                type="button"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.85rem 1.6rem',
                  borderRadius: 'var(--radius-full)',
                  background: isActive
                    ? 'var(--accent-gradient)'
                    : 'rgba(255, 255, 255, 0.04)',
                  color: isActive ? '#09090d' : 'var(--text-secondary)',
                  border: isActive
                    ? '1px solid var(--accent-light)'
                    : '1px solid rgba(255, 255, 255, 0.08)',
                  fontWeight: isActive ? '700' : '500',
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  transition: 'var(--transition-smooth)',
                  boxShadow: isActive ? '0 6px 20px rgba(212, 175, 55, 0.35)' : 'none',
                }}
              >
                <span>{p.icon}</span>
                <span>{p.title}</span>
              </button>
            );
          })}
        </div>

        {/* Display do Pilar Selecionado */}
        <div
          className="glass-card"
          style={{
            border: '1px solid rgba(212, 175, 55, 0.3)',
            padding: '3rem',
            position: 'relative',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3rem',
              alignItems: 'center',
            }}
          >
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--accent)',
                  fontWeight: '600',
                  fontSize: '0.9rem',
                  marginBottom: '0.5rem',
                }}
              >
                {current.icon}
                <span>Pilar {current.id + 1} de 5</span>
              </div>

              <h3 style={{ fontSize: '2.2rem', marginBottom: '0.5rem' }}>{current.title}</h3>
              <p
                style={{
                  color: 'var(--accent-light)',
                  fontWeight: '500',
                  marginBottom: '1.5rem',
                  fontSize: '1.05rem',
                }}
              >
                {current.subtitle}
              </p>

              <blockquote
                style={{
                  borderLeft: '3px solid var(--accent)',
                  paddingLeft: '1.25rem',
                  color: 'var(--text-secondary)',
                  fontStyle: 'italic',
                  marginBottom: '2rem',
                  lineHeight: '1.65',
                }}
              >
                "{current.quote}"
              </blockquote>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {current.points.map((pt, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                    <div
                      style={{
                        background: 'rgba(212, 175, 55, 0.15)',
                        borderRadius: '50%',
                        padding: '0.2rem',
                        marginTop: '0.2rem',
                      }}
                    >
                      <Check size={16} color="var(--accent)" />
                    </div>
                    <span style={{ color: 'var(--text-primary)', fontSize: '0.95rem' }}>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Painel de Aplicação Prática & Resultado */}
            <div
              style={{
                background: 'rgba(75, 44, 107, 0.25)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: 'var(--radius-lg)',
                padding: '2.25rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.75rem',
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    letterSpacing: '0.08em',
                    fontWeight: '700',
                  }}
                >
                  Aplicação em Sala / Oficinas
                </span>
                <h4 style={{ fontSize: '1.2rem', marginTop: '0.4rem', color: '#fff' }}>
                  {current.practicalTool}
                </h4>
              </div>

              <div>
                <span
                  style={{
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    letterSpacing: '0.08em',
                    fontWeight: '700',
                  }}
                >
                  Impacto Verificado na Juventude
                </span>
                <p
                  style={{
                    fontSize: '1.05rem',
                    color: 'var(--accent-light)',
                    marginTop: '0.4rem',
                    fontWeight: '500',
                    lineHeight: '1.5',
                  }}
                >
                  {current.outcome}
                </p>
              </div>

              <div
                style={{
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  paddingTop: '1.25rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  Metodologia Contínua & Sistemática
                </span>
                <button
                  type="button"
                  onClick={() => setActiveTab((activeTab + 1) % pillars.length)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    color: 'var(--accent)',
                    fontWeight: '600',
                    fontSize: '0.9rem',
                  }}
                >
                  <span>Próximo Pilar</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PillarsInteractive;
