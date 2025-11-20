import React from 'react';

const Mission: React.FC = () => {
  return (
    <section id="mission" className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center tracking-tighter">Our Mission</h2>
          <div className="text-lg text-muted-foreground space-y-6 leading-relaxed">
            <p>
              Clean technology is the engine of sustainable progress — powering safe homes, clean water, thriving industries, and opportunity for all. Yet the very innovations most capable of sustainably driving humanity forward often stall outside the lab, not for lack of science, but for lack of conviction.
            </p>
            <p>
              Early‐stage projects often have misaligned expectations amongst stakeholders, and traditional risk frameworks magnify the uncertainty, starving breakthrough ideas of the capital and momentum they need.
            </p>
            <p className="text-xl text-foreground font-medium border-l-4 border-primary pl-6 py-2">
              Our mission is to turn uncertainty into investable clarity, so emerging hardware technologies can accelerate their path to scaling with aligned stakeholder confidence.
            </p>
            <p>
              By marrying deep historical benchmarks with real-time data and clear analytics, we translate complex technical and execution risks into a language investors, developers, and policymakers can act on with confidence. When every stakeholder sees the path forward, capital flows earlier, projects scale sooner, and breakthrough technologies move from possibility to reality—at the speed the world demands.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;