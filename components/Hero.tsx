import React from 'react';
import Button from './ui/Button';

const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80; // h-20 = 5rem = 80px
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      history.pushState(null, '', `#${targetId}`);
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)'
    }}>
      {/* Top-left decorative node */}
      <div className="absolute top-12 left-12 opacity-20">
        <svg width="200" height="200" viewBox="0 0 240 304" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="140" cy="140" r="20" fill="#60a5fa" />
          <circle cx="220" cy="120" r="20" fill="#60a5fa" />
          <circle cx="180" cy="200" r="20" fill="#60a5fa" />
          <circle cx="120" cy="240" r="20" fill="#60a5fa" />
          <line x1="140" y1="140" x2="220" y2="120" stroke="#60a5fa" strokeWidth="3" />
          <line x1="140" y1="140" x2="180" y2="200" stroke="#60a5fa" strokeWidth="3" />
          <line x1="180" y1="200" x2="220" y2="120" stroke="#60a5fa" strokeWidth="3" />
          <line x1="180" y1="200" x2="120" y2="240" stroke="#60a5fa" strokeWidth="3" />
        </svg>
      </div>

      {/* Bottom-right decorative node */}
      <div className="absolute bottom-12 right-12 opacity-20">
        <svg width="200" height="200" viewBox="0 0 240 304" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="140" cy="140" r="20" fill="#60a5fa" />
          <circle cx="220" cy="120" r="20" fill="#60a5fa" />
          <circle cx="180" cy="200" r="20" fill="#60a5fa" />
          <circle cx="120" cy="240" r="20" fill="#60a5fa" />
          <line x1="140" y1="140" x2="220" y2="120" stroke="#60a5fa" strokeWidth="3" />
          <line x1="140" y1="140" x2="180" y2="200" stroke="#60a5fa" strokeWidth="3" />
          <line x1="180" y1="200" x2="220" y2="120" stroke="#60a5fa" strokeWidth="3" />
          <line x1="180" y1="200" x2="120" y2="240" stroke="#60a5fa" strokeWidth="3" />
        </svg>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tighter mb-4">
          Know the Odds. Invest with Confidence.
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          Occam Edge is a Project Intelligence Platform built to accurately assess critical risks and validate bankability of new hardware technologies
        </p>
        <div className="flex justify-center items-center space-x-4">
            <Button onClick={() => window.location.href = 'mailto:Christian@occam-edge.com'} size="lg">Request a Demo</Button>
            <Button onClick={(e) => scrollToSection(e, 'features')} size="lg" variant="outline">Learn More</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;