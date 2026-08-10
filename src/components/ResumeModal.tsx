import React, { useEffect } from 'react';
import { EXPERIENCES, EDUCATION } from '../data/portfolioData';

interface ResumeModalProps {
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white border border-slate-200 rounded-lg w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-blue-600">description</span>
            <div>
              <h2 className="font-headline text-base sm:text-lg font-bold text-slate-900">
                Curriculum Vitae — Ellis Enobun
              </h2>
              <p className="font-mono-code text-xs text-slate-500">Lead Frontend Web Developer • Harlow, Essex, UK</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-lg bg-blue-50 text-blue-600 font-mono-code text-xs font-semibold border border-blue-200 hover:bg-blue-100 transition-colors flex items-center gap-1.5 shadow-xs"
            >
              <span className="material-symbols-outlined text-sm">print</span>
              Print / Save PDF
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors"
              aria-label="Close CV Modal"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 bg-white text-slate-900 font-sans">
          {/* Header */}
          <div className="border-b border-slate-200 pb-5 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3">
            <div>
              <h1 className="font-headline text-3xl font-extrabold text-slate-900">ELLIS ENOBUN</h1>
              <p className="font-mono-code text-sm text-blue-600 font-bold mt-1">
                FRONTEND DEVELOPER / LEAD FRONTEND WEB DEVELOPER
              </p>
              <p className="font-sans text-xs text-slate-600 mt-1">
                elnobun@gmail.com • Harlow, Essex, UK
              </p>
            </div>

            <div className="font-mono-code text-xs text-emerald-600 space-y-0.5">
              <div className="font-semibold">✓ 8+ Years Production Experience</div>
              <div>Available for Lead Frontend Roles</div>
            </div>
          </div>

          {/* Profile Summary */}
          <div className="space-y-2">
            <h2 className="font-headline text-xs font-bold uppercase tracking-wider text-blue-600 border-b border-slate-200 pb-1">
              PROFILE
            </h2>
            <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
              Frontend developer with more than eight years of experience building accessible, responsive and user-focused websites and digital services. Strong hands-on experience with JavaScript, TypeScript, HTML, CSS, Sass, React and REST API integration. Experienced in leading frontend delivery, improving online forms and user journeys, using analytics to guide changes, and working with designers, backend developers and stakeholders in Agile teams. Brings practical accessibility knowledge, a clear approach to technical problem-solving and a strong interest in improving public-facing services.
            </p>
          </div>

          {/* Core Skills Matrix */}
          <div className="space-y-3">
            <h2 className="font-headline text-xs font-bold uppercase tracking-wider text-blue-600 border-b border-slate-200 pb-1">
              CORE SKILLS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-sans text-xs">
              <div>
                <span className="font-mono-code text-slate-900 font-bold block">Frontend development:</span>
                <span className="text-slate-600">JavaScript, TypeScript, HTML5, CSS3, Sass, React, Next.js</span>
              </div>
              <div>
                <span className="font-mono-code text-slate-900 font-bold block">Accessibility and UX:</span>
                <span className="text-slate-600">WCAG 2.1 AA, semantic HTML, form usability, responsive design</span>
              </div>
              <div>
                <span className="font-mono-code text-slate-900 font-bold block">APIs and backend collaboration:</span>
                <span className="text-slate-600">REST API integration, Express.js fundamentals, validation, error handling</span>
              </div>
              <div>
                <span className="font-mono-code text-slate-900 font-bold block">Performance and analytics:</span>
                <span className="text-slate-600">PageSpeed Insights, Lighthouse, Core Web Vitals, Google Analytics</span>
              </div>
              <div>
                <span className="font-mono-code text-slate-900 font-bold block">Platforms and tools:</span>
                <span className="text-slate-600">WordPress, headless CMS, Cloudflare, Vite, Webpack, npm/yarn</span>
              </div>
              <div>
                <span className="font-mono-code text-slate-900 font-bold block">Ways of working & Governance:</span>
                <span className="text-slate-600">Agile delivery, sprint planning, retrospectives, GDPR principles, data minimisation</span>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-4">
            <h2 className="font-headline text-xs font-bold uppercase tracking-wider text-blue-600 border-b border-slate-200 pb-1">
              PROFESSIONAL EXPERIENCE
            </h2>

            <div className="space-y-5">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-headline text-sm sm:text-base font-bold text-slate-900">{exp.title}</h3>
                      <p className="font-mono-code text-xs text-blue-600 font-semibold">{exp.company} • {exp.location}</p>
                    </div>
                    <span className="font-mono-code text-xs text-slate-500">{exp.period}</span>
                  </div>

                  <p className="font-sans text-xs text-slate-600">{exp.description}</p>

                  <ul className="space-y-1 pl-4 list-disc text-xs text-slate-600">
                    {exp.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Qualifications */}
          <div className="space-y-3">
            <h2 className="font-headline text-xs font-bold uppercase tracking-wider text-blue-600 border-b border-slate-200 pb-1">
              EDUCATION AND PROFESSIONAL DEVELOPMENT
            </h2>
            <div className="space-y-2">
              {EDUCATION.map((edu) => (
                <div key={edu.id} className="flex justify-between items-start text-xs">
                  <div>
                    <div className="font-bold text-slate-900">{edu.degree}</div>
                    <div className="text-slate-600">{edu.institution}</div>
                  </div>
                  <div className="font-mono-code text-slate-500">{edu.period}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Technical Knowledge */}
          <div className="space-y-2 pt-2 border-t border-slate-200">
            <h2 className="font-headline text-xs font-bold uppercase tracking-wider text-blue-600">
              ADDITIONAL TECHNICAL KNOWLEDGE
            </h2>
            <ul className="list-disc pl-4 space-y-1 text-xs text-slate-600 font-sans">
              <li>Working knowledge of Cloudflare for DNS, SSL, caching, website delivery and basic security configuration.</li>
              <li>Built REST APIs with Express.js for personal and production projects, covering routes, requests, responses, validation and error handling.</li>
              <li>Familiar with the principles behind user-centred public services and prepared to develop formal experience of the UK Government Service Standard.</li>
              <li>Comfortable learning new platforms and working across frontend, product, design, content, testing and backend teams.</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-between items-center font-mono-code text-xs">
          <span className="text-slate-500">Ellis Enobun • elnobun@gmail.com</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors shadow-xs font-semibold"
          >
            Close Document
          </button>
        </div>
      </div>
    </div>
  );
};
