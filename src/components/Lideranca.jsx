import React from 'react';
import { Award, UserCheck } from 'lucide-react';

const Lideranca = () => {
  return (
    <section id="lideranca" className="section" style={{ backgroundColor: 'var(--surface)' }}>
      <div className="container">
        <h2 className="section-title">Liderança e <span>Metodologia</span></h2>
        
        <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', border: '4px solid var(--accent)' }}>
            <UserCheck size={64} color="white" />
          </div>
          <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>Solano Cardoso</h3>
          <p style={{ color: 'var(--accent)', fontWeight: '600', marginBottom: '1.5rem', letterSpacing: '1px', textTransform: 'uppercase' }}>
            Presidente & Sócio-Fundador
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2rem' }}>
            Parceiro institucional da <strong>Febracis</strong>. Atua como ponte, facilitador e liderança metodológica para a aplicação dos treinamentos e do Método CIS dentro do Instituto Ameixa.
          </p>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(255,255,255,0.05)', padding: '1rem 2rem', borderRadius: '50px' }}>
            <Award color="var(--primary-light)" />
            <span style={{ fontWeight: '500' }}>Certificação Oficial Método CIS & Febracis</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lideranca;
