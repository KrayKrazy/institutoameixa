import React from 'react';
import { Award, UserCheck, CheckCircle2 } from 'lucide-react';

const Lideranca = () => {
  return (
    <section id="lideranca" className="section" style={{ backgroundColor: 'var(--background)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <UserCheck size={15} color="var(--accent)" />
            <span>Liderança & Direção Técnica</span>
          </div>
          <h2 className="section-title">
            Corpo Diretivo & <span>Rigor Metodológico</span>
          </h2>
          <p className="section-subtitle">
            Compromisso ético, formação contínua e paixão pela emancipação humana conduzem cada ação do Instituto Ameixa.
          </p>
        </div>

        <div
          className="glass-card"
          style={{
            maxWidth: '920px',
            margin: '0 auto',
            padding: '3.5rem 3rem',
            border: '1px solid rgba(212, 175, 55, 0.3)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7), 0 0 30px rgba(121, 66, 171, 0.15)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
          }}
        >
          {/* Coluna Visual do Líder */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div
              style={{
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #4b2c6b 0%, #271238 100%)',
                border: '4px solid var(--accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                boxShadow: '0 0 30px rgba(212, 175, 55, 0.35)',
              }}
            >
              <UserCheck size={72} color="var(--accent-light)" />
            </div>

            <h3 style={{ fontSize: '1.9rem', marginBottom: '0.35rem', color: '#fff' }}>
              Solano Cardoso
            </h3>
            <p
              style={{
                color: 'var(--accent)',
                fontWeight: '700',
                fontSize: '0.875rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: '1.25rem',
              }}
            >
              Presidente & Fundador
            </p>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(212, 175, 55, 0.08)',
                border: '1px solid rgba(212, 175, 55, 0.25)',
                padding: '0.5rem 1.25rem',
                borderRadius: '50px',
              }}
            >
              <Award size={18} color="var(--accent)" />
              <span style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: '600' }}>
                Especialista em Inteligência Emocional
              </span>
            </div>
          </div>

          {/* Coluna Biográfica & Visão Técnica */}
          <div>
            <h4 style={{ fontSize: '1.3rem', color: 'var(--accent-light)', marginBottom: '1rem' }}>
              Visão Estratégica & Emancipação Humana
            </h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.025rem', lineHeight: '1.75', marginBottom: '1.5rem' }}>
              Facilitador e estrategista comportamental, lidera a formulação e aprimoramento contínuo dos
              programas pedagógicos do Instituto Ameixa. Seu trabalho fundamenta-se na convicção de que
              o domínio socioemocional e a autorregulação são as chaves definitivas para que jovens
              superem adversidades estruturais e conquistem autonomia pessoal e profissional.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <CheckCircle2 size={18} color="var(--accent)" />
                <span style={{ fontSize: '0.925rem', color: 'var(--text-primary)' }}>
                  Desenvolvimento de metodologias ativas para jovens
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <CheckCircle2 size={18} color="var(--accent)" />
                <span style={{ fontSize: '0.925rem', color: 'var(--text-primary)' }}>
                  Gestão institucional pautada em conformidade e integridade
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <CheckCircle2 size={18} color="var(--accent)" />
                <span style={{ fontSize: '0.925rem', color: 'var(--text-primary)' }}>
                  Articulação de parcerias com setor público, empresas e terceiro setor
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lideranca;
