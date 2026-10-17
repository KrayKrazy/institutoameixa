import React, { useState } from 'react';
import { Brain, RotateCcw, ArrowRight, Award, HeartHandshake } from 'lucide-react';

const DiagnosticTool = ({ onOpenPartnerModal }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  const questions = [
    {
      id: 1,
      theme: 'Autorregulação Sob Pressão',
      question: 'Frente a um imprevisto grave ou cancelamento brusco de um plano importante, qual costuma ser sua primeira reação?',
      options: [
        { text: 'Sinto irritação imediata e costumo reagir de forma impulsiva ou descarregar em quem estiver perto.', score: 1 },
        { text: 'Fico mentalmente paralisado e passo muito tempo remoendo a injustiça da situação.', score: 2 },
        { text: 'Reconheço o incômodo, respiro, avalio o que está sob meu controle e traço uma rota alternativa.', score: 4 },
      ],
    },
    {
      id: 2,
      theme: 'Comunicação & Escuta Empática',
      question: 'Quando alguém no seu convívio expressa uma crítica dura ou discordância enfática sobre sua conduta:',
      options: [
        { text: 'Entro imediatamente na defensiva, interrompo e tento rebater ponto por ponto.', score: 1 },
        { text: 'Engulo seco para evitar conflito, mas guardo ressentimento prolongado.', score: 2 },
        { text: 'Escuto com atenção sem interromper, filtro o aprendizado útil e respondo com clareza serena.', score: 4 },
      ],
    },
    {
      id: 3,
      theme: 'Foco, Disciplina & Projeto de Vida',
      question: 'Sobre seus objetivos de médio e longo prazo e a disciplina para executá-los no dia a dia:',
      options: [
        { text: 'Não costumo definir metas estruturadas; vivo no piloto automático do imediatismo.', score: 1 },
        { text: 'Tenho metas na mente, mas costumo abandonar a rotina assim que a motivação inicial diminui.', score: 2 },
        { text: 'Tenho metas claras e mantenho rituais de disciplina mesmo nos dias em que não sinto entusiasmo.', score: 4 },
      ],
    },
    {
      id: 4,
      theme: 'Impacto Social & Empatia Sistêmica',
      question: 'Ao presenciar um colega, jovem ou colaborador em momento de fragilidade ou estresse emocional:',
      options: [
        { text: 'Costumo ignorar ou me afastar, pois cada um deve saber resolver seus próprios problemas.', score: 1 },
        { text: 'Tento dar conselhos genéricos rápidos ou digo "isso logo passa" para encurtar a conversa.', score: 2 },
        { text: 'Acolho com presença genuína, escuto sem julgamento e ajudo a pessoa a reencontrar seu centro.', score: 4 },
      ],
    },
  ];

  const handleSelectOption = (score) => {
    const nextAnswers = [...answers, score];
    setAnswers(nextAnswers);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult(nextAnswers);
    }
  };

  const calculateResult = (finalAnswers) => {
    const total = finalAnswers.reduce((acc, curr) => acc + curr, 0);
    const max = questions.length * 4;
    const percentage = Math.round((total / max) * 100);

    let level = '';
    let description = '';
    let recommendation = '';

    if (percentage >= 80) {
      level = 'Maturidade Socioemocional Elevada';
      description =
        'Você demonstra excelente capacidade de autorregulação, autoliderança e empatia relacional. Consegue discernir o momento de pausar e responder estrategicamente, sendo um ponto de estabilidade no seu meio.';
      recommendation =
        'Seu perfil é ideal para atuar como mentor, padrinho ou multiplicador de inteligência emocional com jovens em situação de vulnerabilidade.';
    } else if (percentage >= 50) {
      level = 'Inteligência Emocional em Desenvolvimento';
      description =
        'Você já possui consciência de várias das suas emoções, mas ainda vivencia momentos onde gatilhos automáticos ou frustrações cobram um preço alto na sua energia e relacionamentos.';
      recommendation =
        'Práticas diárias de metacognição, respiração regulada e comunicação não-violenta são os próximos passos ideais para consolidar sua estabilidade emocional.';
    } else {
      level = 'Ponto de Atenção: Reatividade Automática';
      description =
        'Seus impulsos e respostas emocionais parecem estar dominando a maior parte das suas tomadas de decisão sob estresse, o que pode gerar desgaste físico, mental e interpessoal.';
      recommendation =
        'Nossas ferramentas pedagógicas básicas de reprogramação comportamental e gestão de impulsos podem provocar uma virada definitiva na sua rotina.';
    }

    setResult({ total, percentage, level, description, recommendation });
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
  };

  const current = questions[currentQuestion];

  return (
    <section id="diagnostico" className="section" style={{ backgroundColor: 'var(--background)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Brain size={15} color="var(--accent)" />
            <span>Avaliação Interativa</span>
          </div>
          <h2 className="section-title">
            Termômetro da <span>Inteligência Emocional</span>
          </h2>
          <p className="section-subtitle">
            Faça um diagnóstico rápido de 4 cenários práticos e descubra seu grau de maturidade
            socioemocional segundo os parâmetros aplicados no Instituto Ameixa.
          </p>
        </div>

        <div
          className="glass-card"
          style={{
            maxWidth: '820px',
            margin: '0 auto',
            padding: '3rem 2.5rem',
            border: '1px solid rgba(212, 175, 55, 0.3)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(121, 66, 171, 0.15)',
          }}
        >
          {!result ? (
            <div>
              {/* Barra de Progresso */}
              <div style={{ marginBottom: '2.5rem' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '0.75rem',
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)',
                  }}
                >
                  <span style={{ color: 'var(--accent)', fontWeight: '600' }}>
                    Questão {currentQuestion + 1} de {questions.length}
                  </span>
                  <span>{current.theme}</span>
                </div>
                <div
                  style={{
                    width: '100%',
                    height: '6px',
                    background: 'rgba(255, 255, 255, 0.08)',
                    borderRadius: '10px',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                      height: '100%',
                      background: 'var(--accent-gradient)',
                      transition: 'width 0.4s ease',
                    }}
                  />
                </div>
              </div>

              {/* Pergunta */}
              <h3
                style={{
                  fontSize: '1.45rem',
                  lineHeight: '1.4',
                  marginBottom: '2rem',
                  color: 'var(--text-primary)',
                }}
              >
                {current.question}
              </h3>

              {/* Opções */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {current.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(option.score)}
                    type="button"
                    style={{
                      textAlign: 'left',
                      padding: '1.25rem 1.5rem',
                      borderRadius: 'var(--radius-md)',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.09)',
                      color: 'var(--text-primary)',
                      fontSize: '1.025rem',
                      lineHeight: '1.5',
                      cursor: 'pointer',
                      transition: 'all 0.25s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '1rem',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(75, 44, 107, 0.35)';
                      e.currentTarget.style.borderColor = 'var(--accent)';
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.09)';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <span>{option.text}</span>
                    <ArrowRight size={18} color="var(--accent)" style={{ flexShrink: 0 }} />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'rgba(75, 44, 107, 0.5)',
                  border: '2px solid var(--accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem auto',
                  boxShadow: '0 0 25px rgba(212, 175, 55, 0.3)',
                }}
              >
                <Award size={42} color="var(--accent)" />
              </div>

              <span
                style={{
                  fontSize: '0.85rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: 'var(--accent-light)',
                  fontWeight: '700',
                }}
              >
                Resultado do Diagnóstico
              </span>

              <h3 style={{ fontSize: '2.1rem', margin: '0.5rem 0 1rem 0', color: '#fff' }}>
                {result.level}
              </h3>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'baseline',
                  gap: '0.3rem',
                  padding: '0.5rem 1.5rem',
                  background: 'rgba(212, 175, 55, 0.1)',
                  borderRadius: '50px',
                  border: '1px solid rgba(212, 175, 55, 0.3)',
                  marginBottom: '2rem',
                }}
              >
                <span style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--accent)' }}>
                  {result.percentage}%
                </span>
                <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Índice de Maturidade</span>
              </div>

              <p
                style={{
                  fontSize: '1.05rem',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.7',
                  maxWidth: '680px',
                  margin: '0 auto 1.5rem auto',
                }}
              >
                {result.description}
              </p>

              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.5rem',
                  maxWidth: '680px',
                  margin: '0 auto 2.5rem auto',
                  textAlign: 'left',
                }}
              >
                <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--accent)', textTransform: 'uppercase' }}>
                  Diretriz Metodológica
                </span>
                <p style={{ color: 'var(--text-primary)', marginTop: '0.4rem', fontSize: '0.95rem' }}>
                  {result.recommendation}
                </p>
              </div>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '1.25rem',
                  flexWrap: 'wrap',
                }}
              >
                <button
                  type="button"
                  onClick={handleReset}
                  className="btn-secondary"
                  style={{ gap: '0.5rem' }}
                >
                  <RotateCcw size={18} />
                  <span>Refazer Diagnóstico</span>
                </button>

                <button
                  type="button"
                  onClick={onOpenPartnerModal}
                  className="btn-primary"
                  style={{ gap: '0.5rem' }}
                >
                  <HeartHandshake size={18} />
                  <span>Apoiar Formação de Jovens</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DiagnosticTool;
