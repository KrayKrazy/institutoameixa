import React, { useState } from 'react';
import { X, HeartHandshake, CheckCircle2, Send, User, Mail, Phone } from 'lucide-react';

const PartnerModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    tipo: 'Empresa Privada / ESG',
    mensagem: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulação de submissão enterprise (pode ser integrado a API ou webhook n8n)
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      tipo: 'Empresa Privada / ESG',
      mensagem: '',
    });
    onClose();
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(8px)',
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
      }}
      onClick={handleResetAndClose}
    >
      <div
        className="glass-card"
        style={{
          width: '100%',
          maxWidth: '580px',
          maxHeight: '90vh',
          overflowY: 'auto',
          background: '#13121b',
          border: '1px solid rgba(212, 175, 55, 0.4)',
          borderRadius: 'var(--radius-xl)',
          padding: '2.5rem',
          position: 'relative',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9), 0 0 30px rgba(121, 66, 171, 0.25)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleResetAndClose}
          type="button"
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: 'var(--text-secondary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
          aria-label="Fechar janela"
        >
          <X size={20} />
        </button>

        {!isSubmitted ? (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'rgba(75, 44, 107, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(212, 175, 55, 0.3)',
                }}
              >
                <HeartHandshake size={22} color="var(--accent)" />
              </div>
              <div>
                <h3 style={{ fontSize: '1.45rem', color: '#fff' }}>Parceria Institucional</h3>
                <span style={{ fontSize: '0.8rem', color: 'var(--accent-light)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Instituto Ameixa
                </span>
              </div>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', marginBottom: '1.75rem', lineHeight: '1.6' }}>
              Conecte sua empresa, mandato parlamentar ou iniciativa pessoal à transformação de jovens através da inteligência emocional.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                  Nome Completo / Organização *
                </label>
                <div style={{ position: 'relative' }}>
                  <input
                    type="text"
                    name="nome"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Ex: Dra. Mariana Costa ou Fundação Alfa"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem 0.75rem 2.5rem',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: 'var(--radius-md)',
                      color: '#fff',
                      fontSize: '0.95rem',
                    }}
                  />
                  <User size={16} color="var(--accent)" style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)' }} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                    E-mail Institucional *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="contato@organizacao.com"
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem 0.75rem 2.5rem',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        borderRadius: 'var(--radius-md)',
                        color: '#fff',
                        fontSize: '0.95rem',
                      }}
                    />
                    <Mail size={16} color="var(--accent)" style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)' }} />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                    Telefone / WhatsApp *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <input
                      type="tel"
                      name="telefone"
                      required
                      value={formData.telefone}
                      onChange={handleChange}
                      placeholder="(XX) XXXXX-XXXX"
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem 0.75rem 2.5rem',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        borderRadius: 'var(--radius-md)',
                        color: '#fff',
                        fontSize: '0.95rem',
                      }}
                    />
                    <Phone size={16} color="var(--accent)" style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)' }} />
                  </div>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                  Modalidade de Interesse *
                </label>
                <select
                  name="tipo"
                  value={formData.tipo}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    background: '#1b1a26',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: 'var(--radius-md)',
                    color: '#fff',
                    fontSize: '0.95rem',
                    cursor: 'pointer',
                  }}
                >
                  <option value="Empresa Privada / ESG">Empresa Privada / Investimento ESG</option>
                  <option value="Emenda Parlamentar / Setor Público">Emenda Parlamentar / Gestão Pública</option>
                  <option value="Adoção de Turma de Formação">Adoção Direta de Turma de Jovens</option>
                  <option value="Doador Recorrente / Mantenedor">Doador Recorrente / Mantenedor</option>
                  <option value="Voluntariado Especializado">Voluntariado Técnico Especializado</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                  Mensagem / Detalhes da Proposta (Opcional)
                </label>
                <textarea
                  name="mensagem"
                  rows={3}
                  value={formData.mensagem}
                  onChange={handleChange}
                  placeholder="Descreva seu interesse de colaboração..."
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: 'var(--radius-md)',
                    color: '#fff',
                    fontSize: '0.95rem',
                    resize: 'none',
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="btn-primary"
                style={{ width: '100%', marginTop: '0.5rem', opacity: isLoading ? 0.7 : 1 }}
              >
                {isLoading ? (
                  <span>Processando envio...</span>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Enviar Solicitação de Parceria</span>
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
            <div
              style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                background: 'rgba(75, 44, 107, 0.5)',
                border: '2px solid var(--accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem auto',
              }}
            >
              <CheckCircle2 size={40} color="var(--accent)" />
            </div>

            <h3 style={{ fontSize: '1.75rem', marginBottom: '0.75rem', color: '#fff' }}>
              Solicitação Registrada!
            </h3>

            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.65', marginBottom: '2rem' }}>
              Agradecemos pelo seu compromisso com a juventude e com o desenvolvimento socioemocional. Nossa equipe de governança entrará em contato em até 24 horas úteis.
            </p>

            <button
              onClick={handleResetAndClose}
              type="button"
              className="btn-primary"
              style={{ width: '100%' }}
            >
              <span>Concluir e Fechar</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PartnerModal;
