import React, { useState } from 'react';
import { TECH_STACK } from '../data/portfolioData';

export const StackView: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeTechId, setActiveTechId] = useState<string>('typescript-javascript');
  const [copied, setCopied] = useState(false);

  const categories = ['All', 'Frontend', 'Backend', 'Tooling & AI'];

  const filteredStack = TECH_STACK.filter((tech) => {
    if (selectedCategory === 'All') return true;
    return tech.category === selectedCategory;
  });

  const currentTech = TECH_STACK.find((t) => t.id === activeTechId) || TECH_STACK[0];

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-12 px-6 max-w-[1200px] mx-auto w-full space-y-10" id="stack">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center gap-3">
        <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 font-mono-code text-xs font-semibold border border-blue-200/90 leading-none">
          <span className="material-symbols-outlined text-sm leading-none">memory</span>
          <span>Ellis Enobun Technical Arsenal</span>
        </div>
        <h1 className="font-headline text-3xl sm:text-5xl font-extrabold text-slate-900">
          Core Competencies & Tooling
        </h1>
        <p className="font-sans text-base text-slate-600 max-w-2xl">
          Deep expertise across modern JavaScript/TypeScript, PHP & Bespoke WordPress, WCAG 2.1 AA accessibility, SASS/SCSS styling, Express APIs, and PageSpeed/Core Web Vitals.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 justify-center mt-3 p-1.5 bg-white rounded-full border border-slate-200/90 shadow-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`inline-flex items-center justify-center px-4 py-2 rounded-full font-mono-code text-xs font-semibold tracking-wider transition-all duration-150 leading-none ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid: Left Tech List & Right Code Viewer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Cards (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          {filteredStack.map((tech) => {
            const isSelected = tech.id === activeTechId;
            return (
              <div
                key={tech.id}
                onClick={() => setActiveTechId(tech.id)}
                className={`p-5 rounded-lg cursor-pointer transition-all duration-200 border ${
                  isSelected
                    ? 'bg-white border-blue-500 shadow-md ring-2 ring-blue-500/20'
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-xs'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                      <span className="material-symbols-outlined text-xl">{tech.iconName}</span>
                    </div>
                    <div>
                      <h3 className="font-headline text-lg font-bold text-slate-900">
                        {tech.name}
                      </h3>
                      <p className="font-mono-code text-xs text-slate-500">
                        {tech.category} • {tech.experienceYears} Years Production Exp
                      </p>
                    </div>
                  </div>

                  <span className="inline-flex items-center justify-center font-mono-code text-xs font-bold text-emerald-700 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 leading-none">
                    {tech.proficiency}%
                  </span>
                </div>

                <p className="font-sans text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                  {tech.description}
                </p>

                {/* Progress Bar */}
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mt-3">
                  <div
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 h-full rounded-full transition-all duration-500"
                    style={{ width: `${tech.proficiency}%` }}
                  />
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-1.5 mt-3 pt-2">
                  {tech.features.map((feat, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center justify-center font-mono-code text-[11px] px-2.5 py-1 rounded-full bg-slate-50 text-slate-700 border border-slate-200/90 leading-none"
                    >
                      ✓ {feat}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Code Viewer (5 cols) */}
        <div className="lg:col-span-5 sticky top-24 space-y-4">
          <div className="p-6 rounded-lg bg-slate-900 border border-slate-800 shadow-xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 font-mono-code text-xs">
              <div className="flex items-center gap-2 text-blue-400 font-bold">
                <span className="material-symbols-outlined text-sm">code</span>
                {currentTech.codeSnippet.filename}
              </div>

              <button
                onClick={() => handleCopyCode(currentTech.codeSnippet.code)}
                className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center gap-1.5 transition-colors border border-slate-700"
              >
                <span className="material-symbols-outlined text-xs">
                  {copied ? 'check' : 'content_copy'}
                </span>
                {copied ? 'Copied' : 'Copy'}
              </button>
            </div>

            <p className="font-sans text-xs text-slate-400">
              Ellis Enobun's production-grade code implementation pattern:
            </p>

            <div className="p-4 rounded-lg bg-slate-950 border border-slate-800 font-mono-code text-xs text-slate-200 overflow-x-auto leading-relaxed max-h-[380px]">
              <pre>{currentTech.codeSnippet.code}</pre>
            </div>

            <div className="pt-2 border-t border-slate-800 flex items-center justify-between font-mono-code text-xs text-slate-400">
              <span>WCAG & Clean Code Standard</span>
              <span className="text-emerald-400">Strict Mode Active</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
