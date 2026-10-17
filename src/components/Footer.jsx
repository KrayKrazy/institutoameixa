import React, { useState } from 'react';
import { Mail, Phone, Shield, Sparkles, Check, ArrowRight, HeartHandshake } from 'lucide-react';

const Footer = ({ onOpenPartnerModal }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setNewsletterEmail('');
      }, 4000);
    }
  };

  return (
    <footer
      style={{
        backgroundColor: '#09090d',
        borderTop: '1px solid rgba(212, 175, 55, 0.2)',
        padding: '5rem 0 2.5rem 0',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '3rem',
            marginBottom: '4rem',
          }}
        >
          {/* Coluna 1: Marca & Propósito */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #4b2c6b 0%, #271238 100%)',
                  border: '1px solid rgba(212, 175, 55, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img src="/logo-symbol-gold.svg" alt="Símbolo Árvore Instituto Ameixa" style={{ width: '24px', height: '24px' }} />
              </div>
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: '800', color: '#fff' }}>
                Instituto <span style={{ color: 'var(--accent)' }}>Ameixa</span>
              </span>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              Organização social dedicada ao desenvolvimento humano e emancipação da juventude por meio da Inteligência Emocional, cidadania e excelência socioemocional em âmbito nacional.
            </p>

            <button
              onClick={onOpenPartnerModal}
              type="button"
              className="btn-outline-gold"
              style={{ padding: '0.6rem 1.4rem', fontSize: '0.85rem' }}
            >
              <HeartHandshake size={16} />
              <span>Seja um Apoiador</span>
            </button>
          </div>

          {/* Coluna 2: Navegação Institucional */}
          <div>
            <h4
              style={{
                color: '#fff',
                fontSize: '1.05rem',
                fontWeight: '700',
                marginBottom: '1.25rem',
                borderLeft: '3px solid var(--accent)',
                paddingLeft: '0.75rem',
              }}
            >
              Navegação
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <li>
                <a href="#sobre" style={{ color: 'var(--text-secondary)', fontSize: '0.925rem' }}>
                  Quem Somos & Missão
                </a>
              </li>
              <li>
                <a href="#metodologia" style={{ color: 'var(--text-secondary)', fontSize: '0.925rem' }}>
                  Metodologia Científica
                </a>
              </li>
              <li>
                <a href="#pilares" style={{ color: 'var(--text-secondary)', fontSize: '0.925rem' }}>
                  Os 5 Pilares Emocionais
                </a>
              </li>
              <li>
                <a href="#trilhas" style={{ color: 'var(--text-secondary)', fontSize: '0.925rem' }}>
                  Trilhas Formativas & Eixos
                </a>
              </li>
              <li>
                <a href="#diagnostico" style={{ color: 'var(--text-secondary)', fontSize: '0.925rem' }}>
                  Diagnóstico Interativo
                </a>
              </li>
              <li>
                <a href="#lideranca" style={{ color: 'var(--text-secondary)', fontSize: '0.925rem' }}>
                  Liderança & Direção
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Governança & Transparência */}
          <div>
            <h4
              style={{
                color: '#fff',
                fontSize: '1.05rem',
                fontWeight: '700',
                marginBottom: '1.25rem',
                borderLeft: '3px solid var(--accent)',
                paddingLeft: '0.75rem',
              }}
            >
              Governança & Transparência
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <li>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Shield size={14} color="var(--accent)" /> Estatuto Social Registrado
                </span>
              </li>
              <li>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Shield size={14} color="var(--accent)" /> Relatório Anual de Impacto
                </span>
              </li>
              <li>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Shield size={14} color="var(--accent)" /> Código de Ética e Integridade
                </span>
              </li>
              <li>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Shield size={14} color="var(--accent)" /> Prestação de Contas Aberta
                </span>
              </li>
              <li>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Shield size={14} color="var(--accent)" /> Conformidade LGPD & Proteção
                </span>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Contato & Newsletter */}
          <div>
            <h4
              style={{
                color: '#fff',
                fontSize: '1.05rem',
                fontWeight: '700',
                marginBottom: '1.25rem',
                borderLeft: '3px solid var(--accent)',
                paddingLeft: '0.75rem',
              }}
            >
              Comunicação & Relatórios
            </h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.885rem', marginBottom: '1rem', lineHeight: '1.6' }}>
              Receba trimestralmente os boletins de impacto socioemocional e novos editais.
            </p>

            <form onSubmit={handleNewsletter} style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Seu melhor e-mail"
                style={{
                  flex: 1,
                  padding: '0.65rem 0.85rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#fff',
                  fontSize: '0.875rem',
                }}
              />
              <button
                type="submit"
                className="btn-primary"
                style={{ padding: '0.65rem 1rem', fontSize: '0.85rem' }}
                aria-label="Inscrever-se na newsletter"
              >
                {isSubscribed ? <Check size={16} /> : <ArrowRight size={16} />}
              </button>
            </form>

            {isSubscribed && (
              <span style={{ color: 'var(--accent-light)', fontSize: '0.8rem', display: 'block', marginBottom: '1rem' }}>
                ✓ Cadastro efetuado com sucesso!
              </span>
            )}

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={15} color="var(--accent)" />
                <a href="mailto:kelevracontato@gmail.com" style={{ color: 'var(--text-secondary)' }}>
                  kelevracontato@gmail.com
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={15} color="var(--accent)" />
                <span style={{ color: 'var(--text-secondary)' }}>(61) 98184-9873</span>
              </div>
            </div>
          </div>
        </div>

        {/* Linha Inferior com Copyright & Detalhes Legais */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            paddingTop: '2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            color: 'var(--text-muted)',
            fontSize: '0.85rem',
          }}
        >
          <p>
            &copy; {new Date().getFullYear()} Instituto Ameixa. Associação Civil sem fins lucrativos. Todos os direitos reservados.
          </p>
          <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span>Excelência & Rigor em Inteligência Emocional</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
