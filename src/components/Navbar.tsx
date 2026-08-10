import React, { useState } from 'react';
import { NavigationTab } from '../types';

interface NavbarProps {
  activeTab: NavigationTab;
  setActiveTab: (tab: NavigationTab) => void;
  onOpenSearch?: () => void;
  onOpenResume?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (tab: NavigationTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="bg-white/90 backdrop-blur-md sticky top-0 w-full z-50 border-b border-slate-200 shadow-xs transition-all duration-200">
      <div className="max-w-[1200px] mx-auto px-6 h-16 sm:h-20 flex justify-between items-center">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('projects')}
          className="group text-left flex items-center gap-3 focus:outline-none"
        >
          <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-200 inline-flex items-center justify-center group-hover:bg-blue-100 group-hover:border-blue-400 transition-all flex-shrink-0 shadow-2xs">
            <span className="material-symbols-outlined text-blue-600 text-xl leading-none select-none">code</span>
          </div>
          <div>
            <span className="font-headline text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors block leading-tight">
              Ellis Enobun
            </span>
            <span className="font-mono-code text-[11px] text-blue-600 tracking-wider block font-semibold">
              LEAD FRONTEND DEVELOPER
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8 font-mono-code text-xs uppercase tracking-widest">
          <li>
            <button
              onClick={() => handleNavClick('projects')}
              className={`py-2 px-1 transition-all duration-200 border-b-2 ${
                activeTab === 'projects'
                  ? 'text-blue-600 font-bold border-blue-600'
                  : 'text-slate-600 border-transparent hover:text-slate-900 hover:border-slate-300'
              }`}
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavClick('about')}
              className={`py-2 px-1 transition-all duration-200 border-b-2 ${
                activeTab === 'about'
                  ? 'text-blue-600 font-bold border-blue-600'
                  : 'text-slate-600 border-transparent hover:text-slate-900 hover:border-slate-300'
              }`}
            >
              About & CV
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavClick('stack')}
              className={`py-2 px-1 transition-all duration-200 border-b-2 ${
                activeTab === 'stack'
                  ? 'text-blue-600 font-bold border-blue-600'
                  : 'text-slate-600 border-transparent hover:text-slate-900 hover:border-slate-300'
              }`}
            >
              Tech Stack
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavClick('contact')}
              className={`py-2 px-1 transition-all duration-200 border-b-2 ${
                activeTab === 'contact'
                  ? 'text-blue-600 font-bold border-blue-600'
                  : 'text-slate-600 border-transparent hover:text-slate-900 hover:border-slate-300'
              }`}
            >
              Contact
            </button>
          </li>
        </ul>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-3">
          {onOpenResume && (
            <button
              onClick={onOpenResume}
              className="h-9 px-3.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 border border-slate-200 transition-colors inline-flex items-center justify-center gap-1.5 font-mono-code text-xs font-semibold leading-none"
            >
              <span className="material-symbols-outlined text-sm leading-none">description</span>
              <span>View CV</span>
            </button>
          )}

          <button
            onClick={() => handleNavClick('contact')}
            className="h-9 px-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white border border-transparent transition-all duration-200 inline-flex items-center justify-center font-mono-code text-xs font-semibold leading-none shadow-xs active:scale-95"
          >
            Hire Ellis
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-slate-700 p-2 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none"
          aria-label="Toggle mobile navigation"
        >
          <span className="material-symbols-outlined text-2xl">
            {mobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-3 shadow-lg animate-in fade-in duration-200">
          <div className="flex flex-col gap-2 font-mono-code text-sm">
            <button
              onClick={() => handleNavClick('projects')}
              className={`p-3 rounded-lg text-left flex items-center justify-between ${
                activeTab === 'projects' ? 'bg-blue-50 text-blue-600 font-bold border border-blue-200' : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <span>Projects</span>
              <span className="material-symbols-outlined text-sm">chevron_right</span>
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className={`p-3 rounded-lg text-left flex items-center justify-between ${
                activeTab === 'about' ? 'bg-blue-50 text-blue-600 font-bold border border-blue-200' : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <span>About & CV</span>
              <span className="material-symbols-outlined text-sm">chevron_right</span>
            </button>

            <button
              onClick={() => handleNavClick('stack')}
              className={`p-3 rounded-lg text-left flex items-center justify-between ${
                activeTab === 'stack' ? 'bg-blue-50 text-blue-600 font-bold border border-blue-200' : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <span>Tech Stack</span>
              <span className="material-symbols-outlined text-sm">chevron_right</span>
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className={`p-3 rounded-lg text-left flex items-center justify-between ${
                activeTab === 'contact' ? 'bg-blue-50 text-blue-600 font-bold border border-blue-200' : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <span>Contact</span>
              <span className="material-symbols-outlined text-sm">chevron_right</span>
            </button>

            {onOpenResume && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="p-3 rounded-lg text-left flex items-center justify-between bg-slate-100 text-slate-800 border border-slate-200 mt-2 hover:bg-slate-200"
              >
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">description</span>
                  View Full CV (Ellis Enobun)
                </span>
                <span className="material-symbols-outlined text-sm">open_in_new</span>
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};
