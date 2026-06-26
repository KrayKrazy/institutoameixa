import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContent}`}>
        <div className={styles.logo}>
          Instituto Ameixa
        </div>
        <nav className={styles.nav}>
          <a href="#sobre">Quem Somos</a>
          <a href="#metodologia">Metodologia</a>
          <a href="#eixos">Eixos</a>
          <a href="#apoie" className="btn-primary" style={{ padding: '0.5rem 1.5rem', fontSize: '1rem' }}>
            Apoie o Projeto
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
