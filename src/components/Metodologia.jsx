import React from 'react';
import { Brain, Sparkles, TrendingUp, Cpu, Compass, CheckCircle2 } from 'lucide-react';

const Metodologia = () => {
  const steps = [
    {
      icon: <Brain size={36} color="var(--accent)" />,
      tag: 'Fase 01',
      title: 'Consciência & Metacognição',
      desc: 'Mapeamento das respostas automáticas, identificação de gatilhos emocionais e quebra de crenças desfavoráveis adquiridas no ambiente de vulnerabilidade.',
    },
    {
      icon: <Sparkles size={36} color="var(--accent)" />,
      tag: 'Fase 02',
      title: 'Autorregulação & Fortalecimento da Autoestima',
      desc: 'Desenvolvimento do autocontrole emocional e resgate profundo da identidade e valor individual, gerando resiliência sob pressão e equilíbrio diante de conflitos.',
    },
    {
      icon: <Compass size={36} color="var(--accent)" />,
      tag: 'Fase 03',
      title: 'Empatia Sistêmica & Relações Saudáveis',
      desc: 'Comunicação assertiva e não-violenta, escuta ativa e fortalecimento dos laços familiares e comunitários para proteção e coesão social.',
    },
    {
      icon: <TrendingUp size={36} color="var(--accent)" />,
      tag: 'Fase 04',
      title: 'Autoliderança & Projeto de Vida',
      desc: 'Planejamento de carreira, visão de futuro realizadora, disciplina para metas e consolidação de hábitos positivos para a autonomia financeira e profissional.',
    },
  ];

  return (
    <section id="metodologia" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Cpu size={15} color="var(--accent)" />
            <span>Engenharia Comportamental Aplicada</span>
          </div>
          <h2 className="section-title">
            Metodologia Científica em <span>Inteligência Emocional</span>
          </h2>
          <p className="section-subtitle">
            Nossa abordagem pedagógica combina fundamentos da neurociência comportamental e
            desenvolvimento socioemocional estruturado em 4 etapas contínuas de transformação.
          </p>
        </div>

        {/* Grade das 4 Etapas */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.75rem',
            marginBottom: '3.5rem',
          }}
        >
          {steps.map((step, idx) => (
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
                    marginBottom: '1.25rem',
                  }}
                >
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '14px',
                      background: 'rgba(75, 44, 107, 0.45)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {step.icon}
                  </div>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      color: 'var(--accent)',
                      background: 'rgba(212, 175, 55, 0.1)',
                      padding: '0.3rem 0.75rem',
                      borderRadius: '50px',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {step.tag}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>{step.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.65' }}>
                  {step.desc}
                </p>
              </div>

              <div
                style={{
                  marginTop: '1.5rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.85rem',
                  color: 'var(--accent-light)',
                  fontWeight: '500',
                }}
              >
                <CheckCircle2 size={16} />
                <span>Impacto Comportamental Mensurável</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metodologia;
