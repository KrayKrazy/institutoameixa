import React from 'react';
import { Target, Heart, Globe, Compass, CheckCircle2 } from 'lucide-react';

const Sobre = () => {
  return (
    <section id="sobre" className="section" style={{ backgroundColor: 'var(--surface-base)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Compass size={15} color="var(--accent)" />
            <span>Nossa Identidade & Missão</span>
          </div>
          <h2 className="section-title">
            Transformando o Presente, <span>Edificando o Futuro</span>
          </h2>
          <p className="section-subtitle">
            O Instituto Ameixa é uma organização civil sem fins lucrativos que desenvolve jovens
            através da Inteligência Emocional, oferecendo ferramentas concretas para a superação de
            vulnerabilidades e o florescimento de líderes conscientes.
          </p>
        </div>

        {/* Grade Institucional de 3 Pilares Principais */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem',
          }}
        >
          <div className="glass-card">
            <div
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '16px',
                background: 'rgba(75, 44, 107, 0.4)',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
              }}
            >
              <Heart size={30} color="var(--accent)" />
            </div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>Nossa Natureza</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
              Associação civil independente, sem fins lucrativos e com rigorosa governança
              administrativa. Focada na assistência social, educação de competências socioemocionais
              e estruturação psicológica para jovens.
            </p>
          </div>

          <div className="glass-card">
            <div
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '16px',
                background: 'rgba(75, 44, 107, 0.4)',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
              }}
            >
              <Globe size={30} color="var(--accent)" />
            </div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>Alcance & Abrangência</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
              Atuação ampla e escalável voltada a comunidades e regiões em vulnerabilidade social.
              Nossos programas operam em múltiplos polos integrados com instituições públicas e
              iniciativas privadas em âmbito nacional.
            </p>
          </div>

          <div className="glass-card">
            <div
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '16px',
                background: 'rgba(75, 44, 107, 0.4)',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
              }}
            >
              <Target size={30} color="var(--accent)" />
            </div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>Foco Beneficiário</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
              Jovens e suas famílias que enfrentam vulnerabilidades e necessitam de repertório
              emocional, disciplina e orientação vocacional para conquistar protagonismo cidadão e
              inserção produtiva na sociedade.
            </p>
          </div>
        </div>

        {/* Faixa Institucional de Princípios */}
        <div
          className="glass-card"
          style={{
            background: 'linear-gradient(135deg, rgba(75, 44, 107, 0.25) 0%, rgba(24, 23, 34, 0.9) 100%)',
            border: '1px solid rgba(212, 175, 55, 0.25)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
            padding: '2rem 2.5rem',
          }}
        >
          <div>
            <h4 style={{ fontSize: '1.25rem', color: 'var(--accent-light)', marginBottom: '0.4rem' }}>
              Compromisso com o Desenvolvimento Humano Sustentável
            </h4>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '650px', fontSize: '0.95rem' }}>
              Acreditamos que a inteligência emocional é o alicerce fundamental para a redução da violência,
              prevenção da evasão escolar e criação de ciclos geracionais de prosperidade.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fff', fontSize: '0.9rem' }}>
              <CheckCircle2 size={18} color="var(--accent)" />
              <span>Transparência Estatutária</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fff', fontSize: '0.9rem' }}>
              <CheckCircle2 size={18} color="var(--accent)" />
              <span>Avaliação de Impacto Contínua</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
