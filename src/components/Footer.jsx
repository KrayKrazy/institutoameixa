import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--background)', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '4rem 0 2rem 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
          
          <div>
            <h3 style={{ color: 'var(--accent)', marginBottom: '1.5rem', fontSize: '1.5rem' }}>Instituto Ameixa</h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              Transformando o futuro de crianças e adolescentes da Vila São José através da inteligência emocional.
            </p>
          </div>

          <div>
            <h4 style={{ marginBottom: '1.5rem' }}>Contato Institucional</h4>
            <ul style={{ listStyle: 'none', color: 'var(--text-secondary)' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <MapPin size={18} /> Brasília - DF (Sede)
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <Mail size={18} /> kelevracontato@gmail.com
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={18} /> (61) 98184-9873
              </li>
            </ul>
          </div>

          <div>
            <h4 style={{ marginBottom: '1.5rem' }}>Links Úteis</h4>
            <ul style={{ listStyle: 'none', color: 'var(--text-secondary)' }}>
              <li style={{ marginBottom: '0.5rem' }}><a href="#sobre" style={{ transition: 'color 0.3s' }}>Estatuto Social (PDF)</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="#metodologia" style={{ transition: 'color 0.3s' }}>Nossa Metodologia</a></li>
              <li><a href="#apoie" style={{ transition: 'color 0.3s' }}>Portal da Transparência</a></li>
            </ul>
          </div>

        </div>

        <div style={{ textAlign: 'center', color: 'rgba(255,255,255,0.3)', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem', fontSize: '0.9rem' }}>
          <p>&copy; {new Date().getFullYear()} Instituto Ameixa. Todos os direitos reservados. CNPJ: XX.XXX.XXX/0001-XX</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
