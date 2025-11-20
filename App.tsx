
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import TargetMarket from './components/TargetMarket';
import Mission from './components/Mission';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <Features />
        <TargetMarket />
        <Mission />
      </main>
      <Footer />
    </div>
  );
};

export default App;
