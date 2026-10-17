import React from 'react';
import { ArrowRight, Brain, HeartHandshake, ShieldCheck, Award } from 'lucide-react';
import styles from './Hero.module.css';

const Hero = ({ onOpenPartnerModal }) => {
  return (
    <section className={styles.hero} id="inicio">
      <div className={styles.heroGlow} />
      <div className={styles.treeWatermark} />
      <div className={styles.gridPattern} />

      <div className={`container ${styles.content}`}>
        <div className={styles.heroSplit}>
          {/* Coluna Esquerda: Mensagem Institucional */}
          <div className={styles.leftCol}>
            <div className={styles.taglineBadge}>
              <img
                src="/logo-symbol-gold.svg"
                alt="Símbolo"
                style={{ width: '18px', height: '18px' }}
              />
              <span>Instituto Ameixa • Formação Socioemocional & Cidadania</span>
            </div>

            <h1 className={styles.title}>
              Desenvolvendo a Juventude através da{' '}
              <span className={styles.titleHighlight}>Inteligência Emocional</span>
            </h1>

            <p className={styles.subtitle}>
              Capacitamos jovens em vulnerabilidade com ferramentas científicas de autoliderança,
              autorregulação emocional, resiliência e foco. Uma metodologia estruturada para
              transformar potencial em realizações concretas para a vida toda.
            </p>

            <div className={styles.ctaGroup}>
              <button
                onClick={onOpenPartnerModal}
                className="btn-primary"
                type="button"
              >
                <HeartHandshake size={20} />
                <span>Investir no Instituto</span>
                <ArrowRight size={18} />
              </button>

              <a href="#diagnostico" className="btn-secondary">
                <Brain size={19} color="var(--accent-light)" />
                <span>Diagnóstico de Inteligência Emocional</span>
              </a>
            </div>
          </div>

          {/* Coluna Direita: Vitrine do Emblema Oficial da Árvore */}
          <div className={styles.rightCol}>
            <div className={styles.emblemCard}>
              <div className={styles.emblemImgWrapper}>
                <div className={styles.emblemAura} />
                <img
                  src="/logo-vertical.svg"
                  alt="Instituto Ameixa"
                  className={styles.emblemLogo}
                />
              </div>

              <h2 className={styles.emblemTitle}>
                Instituto <span>Ameixa</span>
              </h2>
              <p className={styles.emblemSub}>
                Desenvolvimento Humano & Cidadania
              </p>

              <div className={styles.emblemBadges}>
                <span className={styles.emblemPill}>
                  <ShieldCheck size={14} color="var(--accent)" />
                  <span>Governança Aberta</span>
                </span>
                <span className={styles.emblemPill}>
                  <Brain size={14} color="var(--accent)" />
                  <span>Metodologia Sistêmica</span>
                </span>
                <span className={styles.emblemPill}>
                  <Award size={14} color="var(--accent)" />
                  <span>S-ROI Comprovado</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Barra de Impacto & Métricas Enterprise */}
        <div className={styles.statsBar}>
          <div className={styles.statItem}>
            <span className={styles.statValue}>+4.800</span>
            <span className={styles.statLabel}>Jovens e Famílias Impactados</span>
          </div>

          <div className={styles.statItem}>
            <span className={styles.statValue}>96%</span>
            <span className={styles.statLabel}>Evolução Comportamental Aferida</span>
          </div>

          <div className={styles.statItem}>
            <span className={styles.statValue}>100%</span>
            <span className={styles.statLabel}>Governança & Prestação Aberta</span>
          </div>

          <div className={styles.statItem}>
            <span className={styles.statValue}>18+</span>
            <span className={styles.statLabel}>Polos & Parcerias Ativas</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
