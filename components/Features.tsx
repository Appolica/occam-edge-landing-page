import React from 'react';

const RiskIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const CompareIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>;
const FinanceIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>;
const ProcessIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>;
const DataIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" /></svg>;

const features = [
  { icon: <RiskIcon />, title: "Comprehensive Risk Analysis", description: "Evaluates technology projects across economic competitiveness, cost overruns, process complexity, and operational reliability." },
  { icon: <CompareIcon />, title: "Technology Comparison", description: "Enables side-by-side analysis of different technologies with standardized metrics and visualizations." },
  { icon: <FinanceIcon />, title: "Financial Modeling", description: "Provides sophisticated cashflow analysis, sensitivity testing, and bankability assessments for project financing." },
  { icon: <ProcessIcon />, title: "Process Optimization", description: "Analyzes technology process networks to identify bottlenecks, critical components, and reliability risks." },
  { icon: <DataIcon />, title: "Data-Driven Insights", description: "Combines Monte Carlo simulations, network analysis, and statistical modeling to quantify project risks and opportunities." }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tighter">A Complete Risk Intelligence System</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Our platform provides end-to-end analysis to de-risk complex technology deployments.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-start">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;