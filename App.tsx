import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Pricing from './components/Pricing';
import ChatWidget from './components/ChatWidget';
import { Mail, Phone, MapPin, Linkedin, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => (
  <footer id="contact" className="bg-black py-16 border-t border-white/10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-2xl font-serif text-white mb-6">T.A.R.</h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            Consult With The Architect Ritwik.<br/>
            A premium brand under Branbows Infotech Solutions.<br/>
            Redefining digital excellence through structural precision.
          </p>
          <a href="https://branbows.co.in" target="_blank" rel="noopener noreferrer" className="text-brand-gold text-sm hover:underline inline-flex items-center">
            Visit Parent Entity <ExternalLink className="h-3 w-3 ml-1" />
          </a>
        </div>
        
        <div>
          <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Contact</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="flex items-center hover:text-brand-gold transition-colors cursor-pointer">
              <Mail className="h-4 w-4 mr-3" />
              consultancy@thearchitectritwik.com
            </li>
            <li className="flex items-center hover:text-brand-gold transition-colors cursor-pointer">
              <Phone className="h-4 w-4 mr-3" />
              +91 (Contact Branbows)
            </li>
            <li className="flex items-center hover:text-brand-gold transition-colors cursor-pointer">
              <MapPin className="h-4 w-4 mr-3" />
              Global HQ (Virtual)
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Legal</h4>
          <ul className="space-y-2 text-gray-500 text-sm">
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Terms of Engagement</li>
            <li className="hover:text-white cursor-pointer">Value Exchange Protocols</li>
          </ul>
          <div className="mt-8">
            <a href="#" className="inline-block p-2 bg-slate-800 rounded hover:bg-brand-gold hover:text-black transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="mt-16 pt-8 border-t border-white/5 text-center text-gray-600 text-xs">
        <p>&copy; {new Date().getFullYear()} Consult With The Architect Ritwik (T.A.R.). All Rights Reserved.</p>
        <p className="mt-2">Powered by Branbows Infotech Solutions.</p>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <div className="bg-brand-dark min-h-screen text-slate-50 selection:bg-brand-gold selection:text-black">
      <Navbar />
      <Hero />
      <About />
      <Pricing />
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default App;