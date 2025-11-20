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
    <section id="home" className="min-h-screen flex items-center justify-center bg-background pt-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-foreground leading-tight tracking-tighter mb-4">
          Turn Uncertainty into Investable Clarity
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Occam Edge is a risk intelligence system for technology projects, transforming technical and financial data into actionable insights for strategic decision-making.
        </p>
        <div className="flex justify-center items-center space-x-4">
            <Button onClick={(e) => scrollToSection(e, 'contact')} size="lg">Request a Demo</Button>
            <Button onClick={(e) => scrollToSection(e, 'features')} size="lg" variant="outline">Learn More</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;