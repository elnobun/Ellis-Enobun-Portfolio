import React from 'react';
import { NavigationTab } from '../types';

interface FooterProps {
  setActiveTab: (tab: NavigationTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (tab: NavigationTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 w-full py-10 border-t border-slate-800 relative z-10 text-slate-400">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 inline-flex items-center justify-center text-blue-400 shadow-2xs">
              <span className="material-symbols-outlined text-base leading-none select-none">code</span>
            </div>
            <span className="font-headline font-bold text-lg text-white">Ellis Enobun</span>
          </div>
          <p className="font-mono-code text-xs text-slate-400 mt-1">
            © {new Date().getFullYear()} Ellis Enobun. Lead Frontend Developer • Harlow, Essex, UK.
          </p>
        </div>

        {/* Quick Nav Links */}
        <div className="flex flex-wrap justify-center gap-6 font-mono-code text-xs text-slate-300">
          <button
            onClick={() => handleNav('projects')}
            className="hover:text-white transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => handleNav('about')}
            className="hover:text-white transition-colors"
          >
            About & CV
          </button>
          <button
            onClick={() => handleNav('stack')}
            className="hover:text-white transition-colors"
          >
            Tech Stack
          </button>
          <button
            onClick={() => handleNav('contact')}
            className="hover:text-white transition-colors"
          >
            Contact
          </button>
        </div>

        {/* Contact Links & Back to Top */}
        <div className="flex items-center gap-4 font-mono-code text-xs text-slate-300">
          <a
            href="mailto:elnobun@gmail.com"
            className="hover:text-blue-400 transition-colors flex items-center gap-1"
          >
            elnobun@gmail.com
          </a>
          <button
            onClick={scrollToTop}
            className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1 px-3 py-1.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 font-semibold"
          >
            Top <span className="material-symbols-outlined text-xs">arrow_upward</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
