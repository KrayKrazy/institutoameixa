import React from 'react';
import { ArrowRight, Sparkles, Brain, HeartHandshake } from 'lucide-react';
import styles from './Hero.module.css';

const Hero = ({ onOpenPartnerModal }) => {
  return (
    <section className={styles.hero} id="inicio">
      <div className={styles.heroGlow} />
      <div className={styles.gridPattern} />

      <div className={`container ${styles.content}`}>
        <div className={styles.taglineBadge}>
          <Sparkles size={16} color="var(--accent)" />
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
