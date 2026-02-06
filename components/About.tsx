import React from 'react';
import { User, Building2, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="architect" className="py-24 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="space-y-8">
            <div className="inline-block border-l-4 border-brand-gold pl-4">
              <h2 className="text-3xl md:text-4xl font-serif text-white font-bold">
                The Architect: <span className="text-gray-400">Ritwik Biswas</span>
              </h2>
            </div>
            
            <p className="text-gray-300 leading-relaxed text-lg">
              In a digital landscape cluttered with noise, structure is your greatest asset. 
              As the Founding Father of <span className="text-brand-gold">Branbows Infotech Solutions</span>, 
              Ritwik Biswas operates not just as a consultant, but as an architect of business logic and digital transformation.
            </p>
            
            <p className="text-gray-400 leading-relaxed">
              T.A.R. (The Architect Ritwik) is a specialized wing dedicated to high-level strategic intervention. 
              We don't just solve problems; we redesign the blueprint of your operation for scalability and dominance.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="bg-white/5 p-6 border border-white/10 hover:border-brand-gold/50 transition-colors">
                <Building2 className="h-8 w-8 text-brand-gold mb-4" />
                <h3 className="text-white font-serif text-lg mb-2">Branbows Infotech</h3>
                <p className="text-sm text-gray-500">The parent entity delivering robust technological solutions globally.</p>
              </div>
              <div className="bg-white/5 p-6 border border-white/10 hover:border-brand-gold/50 transition-colors">
                <Globe className="h-8 w-8 text-brand-gold mb-4" />
                <h3 className="text-white font-serif text-lg mb-2">Global Vision</h3>
                <p className="text-sm text-gray-500">Operating across currencies and borders with a unified strategic vision.</p>
              </div>
            </div>
          </div>

          {/* Visual/Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-brand-gold/20 blur-xl opacity-50"></div>
            <div className="relative aspect-[4/5] bg-gray-800 border border-white/10 overflow-hidden flex items-center justify-center">
             {/* Placeholder for Ritwik's Image - Using abstract representation as specific image isn't provided */}
              <div className="text-center p-8">
                <User className="h-24 w-24 text-brand-gold mx-auto mb-6 opacity-80" />
                <h4 className="text-2xl font-serif text-white">Ritwik Biswas</h4>
                <p className="text-brand-gold uppercase tracking-widest text-xs mt-2">Founding Father</p>
                <div className="mt-8 border-t border-white/10 pt-8">
                  <p className="italic text-gray-500 text-sm">
                    "We build systems, not just software. We design legacies, not just logos."
                  </p>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-brand-gold/10 backdrop-blur-sm border border-brand-gold/30 flex items-center justify-center">
              <span className="text-brand-gold font-bold font-serif text-xl">EST.</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;