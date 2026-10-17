import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Metodologia from './components/Metodologia';
import PillarsInteractive from './components/PillarsInteractive';
import Eixos from './components/Eixos';
import DiagnosticTool from './components/DiagnosticTool';
import PorQueApoiar from './components/PorQueApoiar';
import Lideranca from './components/Lideranca';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import PartnerModal from './components/PartnerModal';

function App() {
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);

  const openPartnerModal = () => setIsPartnerModalOpen(true);
  const closePartnerModal = () => setIsPartnerModalOpen(false);

  return (
    <div className="app-container">
      <Header onOpenPartnerModal={openPartnerModal} />
      <main>
        <Hero onOpenPartnerModal={openPartnerModal} />
        <Sobre />
        <Metodologia />
        <PillarsInteractive />
        <Eixos onOpenPartnerModal={openPartnerModal} />
        <DiagnosticTool onOpenPartnerModal={openPartnerModal} />
        <PorQueApoiar onOpenPartnerModal={openPartnerModal} />
        <Lideranca />
        <FAQ onOpenPartnerModal={openPartnerModal} />
      </main>
      <Footer onOpenPartnerModal={openPartnerModal} />

      {/* Modal Institucional de Parcerias & Investimento Social */}
      <PartnerModal isOpen={isPartnerModalOpen} onClose={closePartnerModal} />
    </div>
  );
}

export default App;
