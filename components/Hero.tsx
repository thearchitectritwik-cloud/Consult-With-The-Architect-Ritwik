import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion'; // Assuming framer-motion is available via standard package, if not, standard CSS would apply, but standard for React usually includes ability to add it. Since instructions say "Use popular libraries", I will use inline styles/classes for animations if framer-motion isn't strictly requested to be avoided. I'll use simple CSS animations via Tailwind for maximum compatibility.

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-dark">
      {/* Abstract Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1),transparent_70%)]"></div>
        <div className="absolute w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl -top-20 -left-20"></div>
        <div className="absolute w-96 h-96 bg-blue-900/10 rounded-full blur-3xl bottom-0 right-0"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h2 className="text-brand-gold font-sans tracking-[0.3em] text-sm uppercase animate-fade-in-up">
            Branbows Infotech Solutions Presents
          </h2>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight animate-fade-in-up delay-100">
            Consult With <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-200">
              The Architect
            </span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 font-light leading-relaxed animate-fade-in-up delay-200">
            Architecting digital empires. Strategic business consultancy for the modern era.
            Led by Ritwik Biswas.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10 animate-fade-in-up delay-300">
            <a 
              href="#pricing"
              className="group relative px-8 py-4 bg-brand-gold text-brand-dark font-bold text-sm uppercase tracking-widest overflow-hidden hover:bg-white transition-colors duration-300"
            >
              <span className="relative z-10 flex items-center">
                View Protocols
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            
            <a 
              href="#architect"
              className="text-gray-400 hover:text-white text-sm uppercase tracking-widest transition-colors border-b border-transparent hover:border-brand-gold pb-1"
            >
              Meet Ritwik
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-gray-500" />
      </div>
    </div>
  );
};

export default Hero;