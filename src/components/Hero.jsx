import React from 'react';
import { ArrowRight } from 'lucide-react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={`container ${styles.content}`}>
        <div className={styles.badge}>Instituto Ameixa</div>
        <h1 className={styles.title}>
          Transformando o Futuro da Juventude com <span>Inteligência Emocional</span>
        </h1>
        <p className={styles.subtitle}>
          Um projeto social de inteligência emocional dedicado ao autodesenvolvimento de jovens em situação de vulnerabilidade na Vila São José (Vicente Pires).
        </p>
        <div className={styles.cta}>
          <a href="#apoie" className="btn-primary">
            Conheça o Impacto <ArrowRight size={20} style={{ marginLeft: '8px' }} />
          </a>
          <a href="#metodologia" className="btn-secondary">
            Nossa Metodologia
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
