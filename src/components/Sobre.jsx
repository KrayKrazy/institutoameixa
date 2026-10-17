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
            marginBottom: '4rem',
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

        {/* Seção Exclusiva da Identidade Visual: A Simbologia da Árvore */}
        <div
          className="glass-card"
          style={{
            border: '1px solid rgba(212, 175, 55, 0.35)',
            padding: '3.5rem 3rem',
            background: 'radial-gradient(ellipse at 50% 20%, rgba(75, 44, 107, 0.35) 0%, rgba(19, 18, 27, 0.95) 100%)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 35px rgba(121, 66, 171, 0.2)',
            marginBottom: '3rem',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '3rem',
              alignItems: 'center',
            }}
          >
            {/* Visual da Árvore */}
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: '180px',
                  height: '180px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(126, 70, 155, 0.4) 0%, rgba(39, 18, 56, 0.8) 70%)',
                  border: '2px solid rgba(212, 175, 55, 0.5)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem auto',
                  boxShadow: '0 0 35px rgba(212, 175, 55, 0.3)',
                }}
              >
                <img
                  src="/logo-symbol-gold.svg"
                  alt="Símbolo Oficial da Árvore"
                  style={{ width: '130px', height: '130px' }}
                />
              </div>
              <span
                style={{
                  fontSize: '0.8rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: 'var(--accent)',
                  fontWeight: '700',
                }}
              >
                Identidade Visual Oficial
              </span>
              <h3 style={{ fontSize: '1.6rem', color: '#fff', marginTop: '0.35rem' }}>
                A Árvore da Inteligência Emocional
              </h3>
            </div>

            {/* Tríade de Significado */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ borderLeft: '3px solid var(--accent)', paddingLeft: '1.25rem' }}>
                <h4 style={{ fontSize: '1.15rem', color: '#fff', marginBottom: '0.25rem' }}>
                  1. Raízes Profundas • Autoconsciência
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', lineHeight: '1.6' }}>
                  Ancoram o jovem em seus valores fundamentais, promovendo autoconhecimento e
                  fortalecimento dos laços familiares para resistir às pressões do meio.
                </p>
              </div>

              <div style={{ borderLeft: '3px solid var(--accent)', paddingLeft: '1.25rem' }}>
                <h4 style={{ fontSize: '1.15rem', color: '#fff', marginBottom: '0.25rem' }}>
                  2. Tronco Estruturado • Autorregulação & Disciplina
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', lineHeight: '1.6' }}>
                  O eixo de sustentação comportamental. Desenvolve a serenidade sob pressão,
                  a canalização positiva de energias e a firmeza ética nas decisões.
                </p>
              </div>

              <div style={{ borderLeft: '3px solid var(--accent)', paddingLeft: '1.25rem' }}>
                <h4 style={{ fontSize: '1.15rem', color: '#fff', marginBottom: '0.25rem' }}>
                  3. Copa & 22 Folhas • Empatia & Liderança Cidadã
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', lineHeight: '1.6' }}>
                  A multiplicidade de competências socioemocionais traduzida em frutos:
                  jovens preparados para o mercado, solidariedade comunitária e transformação coletiva.
                </p>
              </div>
            </div>
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
