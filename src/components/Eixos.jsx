import React from 'react';
import { Briefcase, Users, HandHeart, Activity, ArrowRight, CheckCircle2, Shield } from 'lucide-react';

const Eixos = ({ onOpenPartnerModal }) => {
  const trilhas = [
    {
      icon: <Briefcase size={30} color="#fff" />,
      color: 'linear-gradient(135deg, #4b2c6b 0%, #271238 100%)',
      badge: 'Carreira & Futuro',
      title: 'Capacitação Socioemocional & Mercado de Trabalho',
      desc: 'Formação comportamental para jovens ingressarem no mercado com maturidade, resiliência, pontualidade e habilidade de resolução pacífica de problemas.',
      highlights: [
        'Oficinas de postura corporativa e inteligência interpessoal',
        'Simulações de entrevistas e elaboração de currículos assertivos',
        'Mentoria vocacional e direcionamento de carreira',
      ],
    },
    {
      icon: <Users size={30} color="#fff" />,
      color: 'linear-gradient(135deg, #5b3285 0%, #2e1545 100%)',
      badge: 'Família & Sociedade',
      title: 'Fortalecimento de Vínculos & Apoio Familiar',
      desc: 'Atendimento estendido ao núcleo familiar para romper ciclos de violência doméstica, evasão escolar e isolamento afetivo, edificando um ambiente protetor.',
      highlights: [
        'Círculos de diálogo e comunicação não-violenta para responsáveis',
        'Acompanhamento psicossocial e mediação familiar',
        'Prevenção ativa da evasão escolar e suporte emocional comunitário',
      ],
    },
    {
      icon: <Activity size={30} color="#fff" />,
      color: 'linear-gradient(135deg, #6c3b9c 0%, #361952 100%)',
      badge: 'Corpo & Foco',
      title: 'Esporte, Disciplina & Capoeira',
      desc: 'Prática de artes marciais e capoeira como catalisadores de autocontrole físico e mental, respeito mútuo, disciplina rigorosa e preservação cultural.',
      highlights: [
        'Canalização de energia e superação de impulsividade',
        'Desenvolvimento de coordenação motora, ritmo e concentração',
        'Resgate da identidade cultural e sentido de pertencimento coletivo',
      ],
    },
    {
      icon: <HandHeart size={30} color="#fff" />,
      color: 'linear-gradient(135deg, #7c44b3 0%, #3f1d5f 100%)',
      badge: 'Solidariedade',
      title: 'Assistência Social, Dignidade & Cidadania',
      desc: 'Ações contínuas de segurança alimentar, arrecadação solidária e estruturação básica que garantem as condições mínimas de dignidade para o aprendizado.',
      highlights: [
        'Campanhas de distribuição de cestas e itens essenciais',
        'Encaminhamento a serviços públicos de saúde e documentação',
        'Parcerias com fundações e redes de solidariedade institucional',
      ],
    },
  ];

  return (
    <section id="trilhas" className="section" style={{ backgroundColor: 'var(--surface-base)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Shield size={15} color="var(--accent)" />
            <span>Estrutura de Programas</span>
          </div>
          <h2 className="section-title">
            Trilhas Formativas & <span>Eixos Estruturantes</span>
          </h2>
          <p className="section-subtitle">
            Um ecossistema abrangente que interliga autoconhecimento, inserção profissional,
            saúde física e amparo comunitário para um desenvolvimento completo.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            marginBottom: '3.5rem',
          }}
        >
          {trilhas.map((item, index) => (
            <div
              key={index}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2.5rem',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '1.5rem',
                  }}
                >
                  <div
                    style={{
                      width: '58px',
                      height: '58px',
                      borderRadius: '16px',
                      background: item.color,
                      border: '1px solid rgba(212, 175, 55, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4)',
                    }}
                  >
                    {item.icon}
                  </div>
                  <span
                    style={{
                      fontSize: '0.785rem',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      color: 'var(--accent)',
                      letterSpacing: '0.08em',
                      background: 'rgba(212, 175, 55, 0.08)',
                      padding: '0.35rem 0.85rem',
                      borderRadius: '50px',
                      border: '1px solid rgba(212, 175, 55, 0.2)',
                    }}
                  >
                    {item.badge}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.35rem', marginBottom: '1rem', lineHeight: '1.3' }}>
                  {item.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.96rem', lineHeight: '1.65', marginBottom: '1.5rem' }}>
                  {item.desc}
                </p>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                    paddingTop: '1rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                  }}
                >
                  {item.highlights.map((hl, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                      <CheckCircle2 size={16} color="var(--accent)" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                      <span style={{ fontSize: '0.885rem', color: 'var(--text-secondary)' }}>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Bar */}
        <div
          style={{
            textAlign: 'center',
            padding: '2.5rem',
            borderRadius: 'var(--radius-xl)',
            background: 'radial-gradient(ellipse at center, rgba(75, 44, 107, 0.3) 0%, rgba(17, 16, 23, 0.9) 100%)',
            border: '1px solid rgba(212, 175, 55, 0.25)',
          }}
        >
          <h3 style={{ fontSize: '1.6rem', marginBottom: '0.75rem' }}>
            Deseja implantar uma dessas trilhas na sua organização ou comunidade?
          </h3>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '640px', margin: '0 auto 1.75rem auto' }}>
            Estruturamos convênios personalizados para escolas, empresas, secretarias de educação e centros comunitários.
          </p>
          <button
            onClick={onOpenPartnerModal}
            className="btn-primary"
            type="button"
          >
            <span>Solicitar Parceria Institucional</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Eixos;
