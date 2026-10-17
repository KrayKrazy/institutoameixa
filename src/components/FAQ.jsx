import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';

const FAQ = ({ onOpenPartnerModal }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Qual é o fundamento pedagógico da metodologia de Inteligência Emocional do Instituto?',
      a: 'Nossa abordagem fundamenta-se estritamente na literatura científica de desenvolvimento socioemocional, neurociência comportamental e teorias consolidadas de inteligência intrapessoal e interpessoal. O foco é prático e transformador: instrumentalizar jovens para o autoconhecimento, autorregulação sob estresse, empatia e tomada de decisão consciente, sem dependência de métodos de coaching comercial de terceiros.',
    },
    {
      q: 'Como empresas privadas e fundações podem se tornar parceiras do Instituto Ameixa?',
      a: 'Empresas podem atuar como mantenedoras, patrocinar turmas inteiras de capacitação socioemocional, direcionar investimentos corporativos no âmbito de programas ESG ou integrar o programa de contratação de jovens formados pelo Instituto. Emitimos relatórios detalhados de impacto social auditável para fins de governança corporativa.',
    },
    {
      q: 'Qual é o alcance geográfico e como o Instituto atua em diferentes comunidades?',
      a: 'O Instituto Ameixa possui estrutura para atuação ampla e escalável. Nossas operações ocorrem por meio de polos formativos, parcerias com centros comunitários, escolas e secretarias, com capacidade de replicabilidade metodológica em comunidades com vulnerabilidade social em âmbito regional e nacional.',
    },
    {
      q: 'Como é garantida a transparência financeira e governança dos recursos captados?',
      a: 'Em conformidade com nosso Estatuto Social registrado, 100% dos recursos obtidos são integralmente reinvestidos no desenvolvimento e manutenção dos projetos pedagógicos e de assistência. Nossas demonstrações contábeis e relatórios de atividades estão permanentemente à disposição dos órgãos fiscalizadores e parceiros mantenedores.',
    },
    {
      q: 'Como o esporte e as artes marciais (como a Capoeira) se integram à Inteligência Emocional?',
      a: 'A prática corporal estruturada funciona como laboratório vivo de autorregulação: os jovens aprendem ritmo, respeito aos limites do outro, disciplina, concentração e canalização de agressividade em força construtiva. O esporte desenvolve a mente através do corpo.',
    },
  ];

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="section" style={{ backgroundColor: 'var(--surface-base)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <HelpCircle size={15} color="var(--accent)" />
            <span>Transparência & Esclarecimentos</span>
          </div>
          <h2 className="section-title">
            Perguntas <span>Frequentes</span>
          </h2>
          <p className="section-subtitle">
            Tire suas dúvidas sobre nosso modelo de atuação, diretrizes éticas e oportunidades de cooperação institucional.
          </p>
        </div>

        <div style={{ maxWidth: '840px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '1.5rem 2rem',
                  border: isOpen
                    ? '1px solid rgba(212, 175, 55, 0.4)'
                    : '1px solid rgba(255, 255, 255, 0.08)',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                }}
                onClick={() => toggleAccordion(idx)}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '1rem',
                  }}
                >
                  <h3
                    style={{
                      fontSize: '1.15rem',
                      fontWeight: '600',
                      color: isOpen ? 'var(--accent)' : 'var(--text-primary)',
                      lineHeight: '1.4',
                    }}
                  >
                    {faq.q}
                  </h3>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: isOpen ? 'var(--accent)' : 'rgba(255, 255, 255, 0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {isOpen ? <ChevronUp size={18} color="#09090d" /> : <ChevronDown size={18} color="#fff" />}
                  </div>
                </div>

                {isOpen && (
                  <div
                    style={{
                      marginTop: '1.25rem',
                      paddingTop: '1.25rem',
                      borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                      color: 'var(--text-secondary)',
                      fontSize: '0.985rem',
                      lineHeight: '1.7',
                    }}
                  >
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Suporte Adicional */}
        <div
          style={{
            textAlign: 'center',
            marginTop: '3.5rem',
            color: 'var(--text-secondary)',
          }}
        >
          <p style={{ marginBottom: '1rem' }}>
            Precisa de uma minuta de convênio, estatuto social ou informações adicionais?
          </p>
          <button
            type="button"
            onClick={onOpenPartnerModal}
            className="btn-outline-gold"
          >
            <MessageCircle size={18} />
            <span>Falar com o Departamento Institucional</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
