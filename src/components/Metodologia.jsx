import React from 'react';
import { Brain, Sparkles, TrendingUp } from 'lucide-react';

const Metodologia = () => {
  return (
    <section id="metodologia" className="section">
      <div className="container">
        <h2 className="section-title">Nossa <span>Metodologia</span></h2>
        
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
            O Instituto utiliza como pilar principal o <strong>Método CIS</strong>, fundamentado e ministrado pela <strong>Febracis</strong>, a maior escola de negócios e inteligência emocional do mundo.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          
          <div className="glass-card" style={{ textAlign: 'center' }}>
            <Brain size={48} color="var(--primary-light)" style={{ margin: '0 auto 1rem auto' }} />
            <h3 style={{ marginBottom: '1rem' }}>Reprogramação de Crenças</h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              Substituição de crenças limitantes por crenças fortalecedoras, alterando a percepção de mundo dos jovens.
            </p>
          </div>

          <div className="glass-card" style={{ textAlign: 'center' }}>
            <Sparkles size={48} color="var(--primary-light)" style={{ margin: '0 auto 1rem auto' }} />
            <h3 style={{ marginBottom: '1rem' }}>Resgate da Autoestima</h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              Desenvolvimento de identidade, valor próprio e capacidade, fundamentais para enfrentar desafios.
            </p>
          </div>

          <div className="glass-card" style={{ textAlign: 'center' }}>
            <TrendingUp size={48} color="var(--primary-light)" style={{ margin: '0 auto 1rem auto' }} />
            <h3 style={{ marginBottom: '1rem' }}>Desenvolvimento Sistêmico</h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              Melhoria contínua em todas as áreas da vida, não apenas profissional, mas pessoal e familiar.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Metodologia;
