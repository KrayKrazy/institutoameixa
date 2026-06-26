import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Metodologia from './components/Metodologia';
import Eixos from './components/Eixos';
import PorQueApoiar from './components/PorQueApoiar';
import Lideranca from './components/Lideranca';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Metodologia />
        <Eixos />
        <PorQueApoiar />
        <Lideranca />
      </main>
      <Footer />
    </>
  );
}

export default App;
