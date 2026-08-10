import React, { useState, useEffect } from 'react';
import { Project } from '../types';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenLiveDemo: (project: Project) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onOpenLiveDemo
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'code'>('overview');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white border border-slate-200 rounded-lg w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 bg-slate-50 border-b border-slate-200 flex justify-between items-start gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="h-7 whitespace-nowrap inline-flex items-center justify-center px-3 rounded-full bg-blue-50 text-blue-700 font-mono-code text-[11px] font-semibold border border-blue-200/90 leading-none">
                {project.category}
              </span>
              <span className="font-mono-code text-xs text-slate-500">Case Study Specification</span>
            </div>
            <h2 className="font-headline text-2xl font-bold text-slate-900">
              {project.title}
            </h2>
            <p className="font-mono-code text-xs text-blue-600 mt-0.5">{project.subtitle}</p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors"
            aria-label="Close case study"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex border-b border-slate-200 bg-slate-100/60 px-6 font-mono-code text-xs uppercase tracking-wider">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3 px-4 font-semibold border-b-2 transition-colors ${
              activeTab === 'overview'
                ? 'border-blue-600 text-blue-600 bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Overview & Metrics
          </button>

          <button
            onClick={() => setActiveTab('architecture')}
            className={`py-3 px-4 font-semibold border-b-2 transition-colors ${
              activeTab === 'architecture'
                ? 'border-blue-600 text-blue-600 bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Architecture
          </button>

          {project.caseStudy?.codeSnippet && (
            <button
              onClick={() => setActiveTab('code')}
              className={`py-3 px-4 font-semibold border-b-2 transition-colors ${
                activeTab === 'code'
                  ? 'border-blue-600 text-blue-600 bg-white'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              Code Implementation
            </button>
          )}
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-grow">
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              {/* Image Hero Banner */}
              <div className="h-52 sm:h-64 rounded-lg overflow-hidden relative border border-slate-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              </div>

              {/* Metrics Grid */}
              {project.metrics && project.metrics.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {project.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 text-center shadow-xs"
                    >
                      <div className="font-headline text-xl font-extrabold text-blue-600">
                        {metric.value}
                      </div>
                      <div className="font-mono-code text-xs text-slate-500 mt-0.5">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Problem & Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-amber-50/50 border border-amber-200 space-y-1.5">
                  <div className="flex items-center gap-2 text-amber-700 font-mono-code text-xs font-bold uppercase tracking-wider">
                    <span className="material-symbols-outlined text-sm">warning</span>
                    The Challenge
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {project.caseStudy?.problem}
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-emerald-50/50 border border-emerald-200 space-y-1.5">
                  <div className="flex items-center gap-2 text-emerald-700 font-mono-code text-xs font-bold uppercase tracking-wider">
                    <span className="material-symbols-outlined text-sm">check_circle</span>
                    Engineered Solution
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {project.caseStudy?.solution}
                  </p>
                </div>
              </div>

              {/* Highlights */}
              {project.caseStudy?.highlights && (
                <div className="space-y-2">
                  <h3 className="font-headline text-base font-bold text-slate-900">Key Technical Highlights</h3>
                  <ul className="space-y-1.5">
                    {project.caseStudy.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 font-sans text-xs sm:text-sm text-slate-600">
                        <span className="material-symbols-outlined text-blue-600 text-base mt-0.5">verified</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {activeTab === 'architecture' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="p-4 rounded-lg bg-slate-900 border border-slate-800 space-y-2 font-mono-code text-xs shadow-md">
                <div className="text-blue-400 font-bold uppercase tracking-wider flex items-center gap-2">
                  <span className="material-symbols-outlined text-base">account_tree</span>
                  Data Flow Pipeline
                </div>
                <div className="p-3.5 rounded-lg bg-slate-950 text-slate-200 border border-slate-800 leading-relaxed overflow-x-auto whitespace-pre-wrap">
                  {project.caseStudy?.architecture}
                </div>
              </div>

              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-headline text-base font-bold text-slate-900">Tech Stack & Components</h3>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center justify-center font-mono-code text-[11px] px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200/90 font-semibold leading-none"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'code' && project.caseStudy?.codeSnippet && (
            <div className="space-y-3 animate-in fade-in duration-200">
              <div className="flex items-center justify-between font-mono-code text-xs">
                <span className="text-blue-600 font-semibold flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm">code</span>
                  {project.caseStudy.codeSnippet.filename}
                </span>

                <button
                  onClick={() => handleCopyCode(project.caseStudy!.codeSnippet!.code)}
                  className="px-3 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center gap-1.5 transition-colors border border-slate-200"
                >
                  <span className="material-symbols-outlined text-xs">
                    {copied ? 'check' : 'content_copy'}
                  </span>
                  {copied ? 'Copied!' : 'Copy Snippet'}
                </button>
              </div>

              <div className="rounded-lg bg-slate-900 border border-slate-800 p-4 overflow-x-auto font-mono-code text-xs text-slate-200 shadow-md">
                <pre>{project.caseStudy.codeSnippet.code}</pre>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap justify-between items-center gap-3">
          <div className="font-mono-code text-xs text-slate-500">
            Ellis Enobun • Frontend Engineering Case Study
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => {
                onClose();
                onOpenLiveDemo(project);
              }}
              className="px-4 py-2.5 rounded-lg bg-blue-600 text-white font-mono-code text-xs font-bold uppercase tracking-wider hover:bg-blue-700 transition-all inline-flex items-center justify-center gap-1.5 shadow-xs leading-none"
            >
              <span className="material-symbols-outlined text-sm leading-none">play_circle</span>
              <span>Interactive Sandbox</span>
            </button>

            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 font-mono-code text-xs transition-colors shadow-xs leading-none inline-flex items-center justify-center"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
