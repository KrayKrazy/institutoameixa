import React from 'react';
import { Briefcase, Users, HandHeart, Activity } from 'lucide-react';

const Eixos = () => {
  return (
    <section id="eixos" className="section" style={{ backgroundColor: 'var(--surface)' }}>
      <div className="container">
        <h2 className="section-title">Eixos de <span>Atuação</span></h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          <div className="glass-card" style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
            <div style={{ background: 'var(--primary)', padding: '1rem', borderRadius: '12px' }}>
              <Briefcase size={32} color="white" />
            </div>
            <div>
              <h3 style={{ marginBottom: '0.5rem' }}>Capacitação e Mercado de Trabalho</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Fomento à capacitação profissional e inclusão de jovens no mercado de trabalho. Utilizamos a inteligência emocional como base sólida para tomada de decisões, liderança e resolução de conflitos.
              </p>
            </div>
          </div>

          <div className="glass-card" style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
            <div style={{ background: 'var(--primary)', padding: '1rem', borderRadius: '12px' }}>
              <Users size={32} color="white" />
            </div>
            <div>
              <h3 style={{ marginBottom: '0.5rem' }}>Fortalecimento de Vínculos Familiares</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Ações que auxiliam não apenas o jovem, mas também seu núcleo familiar, prevenindo a criminalidade e a evasão escolar, e promovendo a saúde mental da comunidade.
              </p>
            </div>
          </div>

          <div className="glass-card" style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
            <div style={{ background: 'var(--primary)', padding: '1rem', borderRadius: '12px' }}>
              <HandHeart size={32} color="white" />
            </div>
            <div>
              <h3 style={{ marginBottom: '0.5rem' }}>Assistência Social e Arrecadação</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Desenvolvimento de campanhas de arrecadação de alimentos, recursos e doações, além de firmar convênios para o custeio dos programas educacionais.
              </p>
            </div>
          </div>

          <div className="glass-card" style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
            <div style={{ background: 'var(--primary)', padding: '1rem', borderRadius: '12px' }}>
              <Activity size={32} color="white" />
            </div>
            <div>
              <h3 style={{ marginBottom: '0.5rem' }}>Esporte e Lutas</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Promoção de atividades esportivas voltadas às artes marciais, com grande foco na <strong>Capoeira</strong>, estimulando a disciplina, saúde física, resgate cultural e autoconfiança.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Eixos;
