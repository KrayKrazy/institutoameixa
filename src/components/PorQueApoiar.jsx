import React from 'react';
import { BarChart3, ShieldCheck, Building2, FileCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

const PorQueApoiar = ({ onOpenPartnerModal }) => {
  const cards = [
    {
      icon: <BarChart3 size={32} color="var(--accent)" />,
      badge: 'Eficiência de Impacto',
      title: 'Elevado Retorno Social (S-ROI)',
      desc: 'O investimento na base socioemocional produz efeitos multiplicadores: diminui o risco de evasão escolar, desvia trajetórias de criminalidade e forma cidadãos produtivos e emocionalmente autônomos.',
      metric: '7.4x',
      metricLabel: 'Retorno social estimado por cada real investido',
    },
    {
      icon: <ShieldCheck size={32} color="var(--accent)" />,
      badge: 'Compliance & Transparência',
      title: 'Conformidade Estatutária Estrita',
      desc: 'Garantia legal de destinação integral de 100% das doações e recursos captados ao cumprimento exclusivo dos objetivos institucionais, sem remuneração de conselheiros e com auditoria permanente.',
      metric: '100%',
      metricLabel: 'Dos recursos vertidos aos programas sociais',
    },
    {
      icon: <Building2 size={32} color="var(--accent)" />,
      badge: 'ESG & Políticas Públicas',
      title: 'Alinhamento com Diretrizes Globais',
      desc: 'Adequação plena aos critérios ESG (Social e Governança) e aos Objetivos de Desenvolvimento Sustentável da ONU (ODS 4, 8 e 10), apto a receber termos de colaboração e emendas orçamentárias.',
      metric: 'ODS ONU',
      metricLabel: 'Alinhamento com metas educacionais e laborais',
    },
  ];

  return (
    <section id="governanca" className="section" style={{ backgroundColor: 'var(--surface-base)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <FileCheck size={15} color="var(--accent)" />
            <span>Investimento de Alto Retorno Social</span>
          </div>
          <h2 className="section-title">
            Por que Investir no <span>Instituto Ameixa?</span>
          </h2>
          <p className="section-subtitle">
            Uma estrutura institucional sólida, transparente e desenhada para potencializar recursos
            públicos e privados com métricas auditáveis de transformação de vidas.
          </p>
        </div>

        {/* Grade de 3 Cards de Governança */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            marginBottom: '3.5rem',
          }}
        >
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderTop: '3px solid var(--accent)',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '1.5rem',
                  }}
                >
                  <div
                    style={{
                      width: '54px',
                      height: '54px',
                      borderRadius: '14px',
                      background: 'rgba(75, 44, 107, 0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {card.icon}
                  </div>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      color: 'var(--accent)',
                      background: 'rgba(212, 175, 55, 0.08)',
                      padding: '0.3rem 0.75rem',
                      borderRadius: '50px',
                      border: '1px solid rgba(212, 175, 55, 0.2)',
                    }}
                  >
                    {card.badge}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.35rem', marginBottom: '1rem' }}>{card.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.96rem', lineHeight: '1.65', marginBottom: '1.75rem' }}>
                  {card.desc}
                </p>
              </div>

              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.8rem',
                    fontWeight: '800',
                    color: 'var(--accent)',
                    lineHeight: '1',
                  }}
                >
                  {card.metric}
                </span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.3' }}>
                  {card.metricLabel}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Banner de Modalidades de Parceria */}
        <div
          className="glass-card"
          style={{
            background: 'linear-gradient(135deg, rgba(75, 44, 107, 0.3) 0%, rgba(24, 23, 34, 0.85) 100%)',
            border: '1px solid rgba(212, 175, 55, 0.25)',
            padding: '2.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.75rem',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '0.4rem' }}>
                Canais Institucionais para Parcerias & Recursos
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                Disponibilizamos assessoria jurídica e técnica para celebração de convênios, emendas e investimentos ESG.
              </p>
            </div>
            <button
              onClick={onOpenPartnerModal}
              className="btn-primary"
              type="button"
            >
              <span>Apresentar Proposta Institucional</span>
              <ArrowRight size={18} />
            </button>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1rem',
              paddingTop: '1rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-primary)', fontSize: '0.9rem' }}>
              <CheckCircle2 size={18} color="var(--accent)" />
              <span>Emendas Orçamentárias & Fomento</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-primary)', fontSize: '0.9rem' }}>
              <CheckCircle2 size={18} color="var(--accent)" />
              <span>Aporte Corporativo ESG Direto</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-primary)', fontSize: '0.9rem' }}>
              <CheckCircle2 size={18} color="var(--accent)" />
              <span>Adoção de Turmas de Formação</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-primary)', fontSize: '0.9rem' }}>
              <CheckCircle2 size={18} color="var(--accent)" />
              <span>Portal da Transparência Ativo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PorQueApoiar;
