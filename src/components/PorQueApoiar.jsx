import React from 'react';
import { ShieldCheck, BarChart3, Building } from 'lucide-react';

const PorQueApoiar = () => {
  return (
    <section id="apoie" className="section">
      <div className="container">
        <h2 className="section-title">Por que Investir no <span>Instituto Ameixa?</span></h2>
        <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.2rem' }}>
          Um projeto sólido, estruturado e com potencial de transformação em larga escala, ideal para parcerias governamentais e emendas parlamentares.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div className="glass-card" style={{ borderTop: '4px solid var(--accent)' }}>
            <BarChart3 size={32} color="var(--accent)" style={{ marginBottom: '1rem' }} />
            <h3>Alto Retorno Social (ROI)</h3>
            <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>
              Investir na inteligência emocional da base reduz custos futuros com segurança pública e saúde mental, além de gerar jovens produtivos para o estado.
            </p>
          </div>

          <div className="glass-card" style={{ borderTop: '4px solid var(--accent)' }}>
            <ShieldCheck size={32} color="var(--accent)" style={{ marginBottom: '1rem' }} />
            <h3>Transparência e Seriedade</h3>
            <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>
              Garantia estatutária (Art. 14º) de aplicação integral de recursos no desenvolvimento dos objetivos institucionais, sem distribuição de lucros.
            </p>
          </div>

          <div className="glass-card" style={{ borderTop: '4px solid var(--accent)' }}>
            <Building size={32} color="var(--accent)" style={{ marginBottom: '1rem' }} />
            <h3>Alinhamento com Políticas Públicas</h3>
            <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>
              Atuação direta na prevenção da criminalidade e evasão escolar, complementando o papel do Estado em regiões de vulnerabilidade como Vicente Pires.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PorQueApoiar;
