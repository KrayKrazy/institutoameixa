import React from 'react';
import { Target, Heart, MapPin } from 'lucide-react';

const Sobre = () => {
  return (
    <section id="sobre" className="section" style={{ backgroundColor: 'var(--surface)' }}>
      <div className="container">
        <h2 className="section-title">Quem <span>Somos</span></h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          
          <div className="glass-card">
            <Heart size={40} color="var(--accent)" style={{ marginBottom: '1rem' }} />
            <h3>Nossa Natureza</h3>
            <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>
              O Instituto Ameixa é uma associação civil sem fins lucrativos, com autonomia administrativa e financeira, focada na assistência social, educação e estruturação psicológica.
            </p>
          </div>

          <div className="glass-card">
            <MapPin size={40} color="var(--accent)" style={{ marginBottom: '1rem' }} />
            <h3>Onde Atuamos</h3>
            <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>
              Sediado em Brasília - DF, com atuação prioritária concentrada na Vila São José (Vicente Pires - DF), voltada ao atendimento de sua população carente.
            </p>
          </div>

          <div className="glass-card">
            <Target size={40} color="var(--accent)" style={{ marginBottom: '1rem' }} />
            <h3>Público Alvo</h3>
            <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>
              Crianças, adolescentes e jovens em situação de vulnerabilidade e risco social, oferecendo ferramentas para transformar suas realidades.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Sobre;
