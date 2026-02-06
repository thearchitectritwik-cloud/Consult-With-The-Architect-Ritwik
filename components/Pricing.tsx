import React, { useState } from 'react';
import { Currency } from '../types';
import { Check, Info, ShieldCheck, Zap } from 'lucide-react';

const Pricing: React.FC = () => {
  const [currency, setCurrency] = useState<Currency>(Currency.INR);
  const currentYear = new Date().getFullYear();

  const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrency(e.target.value as Currency);
  };

  return (
    <section id="pricing" className="py-24 bg-slate-900 relative">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-brand-gold font-sans tracking-[0.3em] text-sm uppercase mb-4">
            The Investment Models
          </h2>
          <h3 className="text-3xl md:text-5xl font-serif text-white font-bold mb-6">
            Choose Your Protocol
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Engagement with The Architect is structured around two distinct philosophies. 
            Select the model that aligns with your resource allocation strategy.
          </p>
          
          <div className="mt-8 inline-flex items-center space-x-4 bg-white/5 p-2 rounded-lg border border-white/10">
            <span className="text-gray-400 text-sm uppercase tracking-wider pl-2">Currency:</span>
            <select 
              value={currency} 
              onChange={handleCurrencyChange}
              className="bg-transparent text-brand-gold font-bold focus:outline-none cursor-pointer text-sm"
            >
              {Object.values(Currency).map(c => (
                <option key={c} value={c} className="bg-slate-900">{c}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          
          {/* Plan 2: The Year Protocol (Standard) */}
          <div className="relative group bg-slate-800/50 border border-white/10 rounded-xl p-8 hover:border-brand-gold/30 transition-all duration-300 flex flex-col">
            <div className="mb-6">
              <div className="w-12 h-12 bg-blue-900/20 rounded-lg flex items-center justify-center mb-4 text-blue-400">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-serif text-white font-bold">The Year Protocol</h3>
              <p className="text-gray-400 text-sm mt-2">Standard Professional Engagement</p>
            </div>
            
            <div className="mb-8 p-6 bg-slate-900/50 rounded-lg border border-white/5 text-center">
              <span className="text-4xl font-serif text-white font-bold">
                {currentYear} <span className="text-base text-brand-gold align-top ml-1">{currency}</span>
              </span>
              <p className="text-xs text-gray-500 mt-2 uppercase tracking-wide">One Time Consultation</p>
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
              {[
                "Strategic Roadmap Audit",
                "1-Hour Deep Dive Session",
                "Actionable Business Architecture",
                "Follow-up Documentation",
                "Priority Email Support"
              ].map((feature, i) => (
                <li key={i} className="flex items-start">
                  <Check className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="w-full py-4 bg-transparent border border-white/20 text-white font-bold uppercase text-sm tracking-widest hover:bg-white hover:text-slate-900 transition-colors rounded-sm">
              Initialize Protocol
            </button>
          </div>

          {/* Plan 1: The Value Exchange (Ultra Premium) */}
          <div className="relative group bg-gradient-to-b from-slate-800 to-slate-900 border border-brand-gold/30 rounded-xl p-8 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] transition-all duration-300 flex flex-col transform md:-translate-y-4">
            <div className="absolute top-0 right-0 bg-brand-gold text-slate-900 text-xs font-bold px-3 py-1 uppercase tracking-widest rounded-bl-lg rounded-tr-lg">
              Ultra Premium
            </div>
            
            <div className="mb-6">
              <div className="w-12 h-12 bg-brand-gold/20 rounded-lg flex items-center justify-center mb-4 text-brand-gold">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-serif text-white font-bold">The Value Exchange</h3>
              <p className="text-gray-400 text-sm mt-2">Give and Take Policy</p>
            </div>
            
            <div className="mb-8 p-6 bg-gradient-to-r from-brand-gold/10 to-transparent rounded-lg border border-brand-gold/20 text-center">
              <span className="text-4xl font-serif text-brand-gold font-bold">
                Free of Cost
              </span>
              <p className="text-xs text-brand-gold/70 mt-2 uppercase tracking-wide">Value Barter Model</p>
            </div>

            <div className="bg-brand-gold/5 p-4 rounded mb-6 border-l-2 border-brand-gold">
              <div className="flex items-start">
                <Info className="h-4 w-4 text-brand-gold mr-2 mt-1 flex-shrink-0" />
                <p className="text-xs text-gray-300 italic">
                  "We do not accept money for this tier. We accept value. Access, network, equity, or strategic partnerships."
                </p>
              </div>
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
              {[
                "Full Access to The Architect",
                "Unlimited Strategic Intervention",
                "Partnership & JV Opportunities",
                "Network Access & Resource Sharing",
                "Lifetime Association Status"
              ].map((feature, i) => (
                <li key={i} className="flex items-start">
                  <Check className="h-5 w-5 text-brand-gold mr-3 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="w-full py-4 bg-brand-gold text-slate-900 font-bold uppercase text-sm tracking-widest hover:bg-yellow-400 transition-colors rounded-sm shadow-lg shadow-brand-gold/20">
              Apply for Value Exchange
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;