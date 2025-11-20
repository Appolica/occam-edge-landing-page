import React from 'react';

const marketSegments = [
  "Utilities",
  "Project Developers",
  "Financial Institutions",
  "Engineering Firms",
  "Government Agencies",
];

const TargetMarket: React.FC = () => {
  return (
    <section id="market" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tighter">Empowering Industry Leaders</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">We serve stakeholders across the technology deployment lifecycle, providing clarity and confidence to:</p>
        </div>
        <div className="max-w-4xl mx-auto">
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
            {marketSegments.map((segment, index) => (
                <li key={index} className="text-lg text-foreground border border-gray-200 rounded-md py-4 px-6">
                  {segment}
                </li>
            ))}
            </ul>
        </div>
      </div>
    </section>
  );
};

export default TargetMarket;