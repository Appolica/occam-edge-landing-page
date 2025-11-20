import React, { useState, useEffect } from 'react';
import Button from './ui/Button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'features', name: 'What We Do' },
    { id: 'market', name: 'Who We Serve' },
    { id: 'mission', name: 'Our Mission' },
  ];

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-sm border-b border-gray-200' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 h-20 flex justify-between items-center">
        <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="text-2xl font-bold text-foreground tracking-tight">
          Occam Edge
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`} onClick={(e) => scrollToSection(e, link.id)} className="text-muted-foreground hover:text-foreground transition-colors duration-300">
              {link.name}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center space-x-4">
            <Button onClick={(e) => scrollToSection(e, 'contact')}>Request a Demo</Button>
            <Button variant="outline" onClick={() => window.open('https://dashboard.occamedge.com', '_blank')}>
              Login
            </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;