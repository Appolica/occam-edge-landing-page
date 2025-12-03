import React from 'react';
import Button from './ui/Button';

const Footer: React.FC = () => {
  return (
    <>
    <section id="contact" className="py-20 bg-background text-center">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tighter">Ready to De-Risk Your Next Project?</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Contact us today for a personalized demo and see how Occam Edge can bring clarity to your technology investments.
            </p>
            <Button size="lg" onClick={() => window.location.href = 'mailto:Christian@occam-edge.com'}>Get in Touch</Button>
        </div>
    </section>
    <footer className="bg-muted py-8 border-t border-gray-200">
      <div className="container mx-auto px-6 text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Occam Edge. All Rights Reserved.</p>
      </div>
    </footer>
    </>
  );
};

export default Footer;