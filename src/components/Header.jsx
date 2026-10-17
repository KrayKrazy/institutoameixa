import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, HeartHandshake } from 'lucide-react';
import styles from './Header.module.css';

const Header = ({ onOpenPartnerModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Quem Somos', href: '#sobre' },
    { label: 'Metodologia', href: '#metodologia' },
    { label: '5 Pilares', href: '#pilares' },
    { label: 'Trilhas de Formação', href: '#trilhas' },
    { label: 'Diagnóstico Emocional', href: '#diagnostico' },
    { label: 'Governança & ESG', href: '#governanca' },
    { label: 'Liderança', href: '#lideranca' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={`container ${styles.headerContent}`}>
          <a href="#" className={styles.logoArea} aria-label="Instituto Ameixa - Início">
            <div className={styles.logoIcon}>
              <img src="/logo-symbol-gold.svg" alt="Símbolo Árvore Instituto Ameixa" style={{ width: '28px', height: '28px' }} />
            </div>
            <div className={styles.logoText}>
              <span className={styles.brandName}>
                Instituto <span>Ameixa</span>
              </span>
              <span className={styles.brandTagline}>Inteligência Emocional & Impacto</span>
            </div>
          </a>

          <nav className={styles.desktopNav} aria-label="Navegação principal">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className={styles.navLink}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className={styles.navActions}>
            <button
              onClick={onOpenPartnerModal}
              className={`btn-primary ${styles.partnerBtn}`}
              type="button"
            >
              <HeartHandshake size={17} />
              <span>Seja um Parceiro</span>
            </button>

            <button
              className={styles.menuToggle}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Abrir menu de navegação"
              type="button"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Backdrop Mobile */}
      {mobileOpen && (
        <div className={styles.drawerBackdrop} onClick={() => setMobileOpen(false)} />
      )}

      {/* Drawer Mobile */}
      <aside className={`${styles.mobileDrawer} ${mobileOpen ? styles.mobileDrawerOpen : ''}`}>
        <div className={styles.drawerHeader}>
          <div className={styles.logoArea}>
            <div className={styles.logoIcon}>
              <img src="/logo-symbol-gold.svg" alt="Símbolo Árvore Instituto Ameixa" style={{ width: '26px', height: '26px' }} />
            </div>
            <span className={styles.brandName}>
              Instituto <span>Ameixa</span>
            </span>
          </div>
          <button
            className={styles.menuToggle}
            onClick={() => setMobileOpen(false)}
            aria-label="Fechar menu"
            type="button"
          >
            <X size={20} />
          </button>
        </div>

        <nav className={styles.drawerLinks}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.drawerLink}
              onClick={handleLinkClick}
            >
              <span>{link.label}</span>
              <ArrowUpRight size={16} color="var(--accent)" />
            </a>
          ))}
        </nav>

        <div className={styles.drawerFooter}>
          <button
            onClick={() => {
              setMobileOpen(false);
              onOpenPartnerModal();
            }}
            className="btn-primary"
            style={{ width: '100%' }}
            type="button"
          >
            <HeartHandshake size={18} />
            <span>Apoiar Projeto / Parcerias</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Header;
