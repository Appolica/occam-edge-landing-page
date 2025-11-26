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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-sm border-b border-gray-200' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 h-20 flex items-center relative">
        <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="flex items-center">
          <img 
            src="/logo-full.svg" 
            alt="Occam Edge" 
            className={`h-28 transition-all duration-300 ${isScrolled ? 'brightness-0' : 'brightness-0 invert'}`}
          />
        </a>
        <nav className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`} onClick={(e) => scrollToSection(e, link.id)} className={`font-semibold transition-colors duration-300 ${isScrolled ? 'text-muted-foreground hover:text-foreground' : 'text-gray-300 hover:text-white'}`}>
              {link.name}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center space-x-4 ml-auto">
            <Button onClick={(e) => scrollToSection(e, 'contact')}>Request a Demo</Button>
            <button 
              onClick={() => window.open('https://dashboard.occam-edge.com/login', '_blank')}
              className={`inline-flex items-center justify-center font-semibold rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none transition-all duration-300 py-1.5 px-5 text-sm border-2 ${isScrolled ? 'border-primary text-primary hover:bg-primary hover:text-white' : 'border-white text-white hover:bg-white hover:text-primary'}`}
            >
              Login
            </button>
        </div>
      </div>
    </header>
  );
};

export default Header;