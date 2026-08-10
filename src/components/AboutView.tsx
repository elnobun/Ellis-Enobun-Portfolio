import React, { useState } from 'react';
import { EXPERIENCES, EDUCATION, HOBBIES, TESTIMONIALS } from '../data/portfolioData';
import { LocationWidget } from './LocationWidget';

interface AboutViewProps {
  onOpenResume: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onOpenResume }) => {
  const [expandedExperience, setExpandedExperience] = useState<string | null>('exp-1');

  const toggleExp = (id: string) => {
    setExpandedExperience(expandedExperience === id ? null : id);
  };

  return (
    <section className="py-12 px-6 max-w-[1200px] mx-auto w-full space-y-16" id="about">
      {/* Bio Header Section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        {/* Headshot */}
        <div className="md:col-span-4 flex justify-center">
          <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full p-1.5 bg-gradient-to-br from-blue-500 via-indigo-500 to-slate-300 shadow-xl">
            <img
              src="https://avatars.githubusercontent.com/u/15114201?v=4"
              alt="Ellis Enobun - Lead Frontend Developer"
              className="w-full h-full object-cover rounded-full border-4 border-white shadow-inner"
            />
          </div>
        </div>

        {/* Bio Text */}
        <div className="md:col-span-8 space-y-4">
          <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 font-mono-code text-xs font-semibold border border-blue-200/90 leading-none">
            <span className="material-symbols-outlined text-sm leading-none">person</span>
            <span>Ellis Enobun • Lead Frontend Web Developer</span>
          </div>

          <h1 className="font-headline text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            Building accessible, responsive & <span className="gradient-text">user-focused</span> digital services.
          </h1>

          <p className="font-sans text-base text-slate-600 leading-relaxed">
            Frontend developer with more than eight years of experience building accessible, responsive, and user-focused websites and digital services. Strong hands-on experience with JavaScript, TypeScript, PHP, SCSS/Sass, HTML5, CSS3, Bespoke WordPress, and REST API integrations.
          </p>

          <p className="font-sans text-sm text-slate-600 leading-relaxed">
            Experienced in leading frontend delivery, improving online forms and user journeys, using analytics (PageSpeed Insights, Lighthouse, Google Analytics) to guide changes, and working with designers, backend developers, and stakeholders in Agile teams. Brings practical accessibility knowledge (WCAG 2.1 AA) and a clear approach to technical problem solving.
          </p>

          {/* Quick Contact & CV Actions */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={onOpenResume}
              className="px-6 py-3 rounded-lg bg-blue-600 text-white font-mono-code text-xs font-bold uppercase tracking-wider hover:bg-blue-700 transition-all shadow-md shadow-blue-500/20 active:scale-95 inline-flex items-center justify-center gap-2 leading-none"
            >
              <span className="material-symbols-outlined text-base leading-none">description</span>
              <span>View Full CV (PDF)</span>
            </button>

            <a
              href="mailto:elnobun@gmail.com"
              className="px-5 py-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-mono-code text-xs font-semibold border border-slate-200 transition-colors inline-flex items-center justify-center gap-2 leading-none"
            >
              <span className="material-symbols-outlined text-base leading-none">mail</span>
              <span>elnobun@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Location Coverage Widget */}
      <LocationWidget />

      {/* Professional Experience Section */}
      <div className="space-y-6">
        <div>
          <h2 className="font-headline text-2xl font-bold text-slate-900">
            Professional Experience
          </h2>
          <p className="font-mono-code text-xs text-slate-500 mt-1">
            Proven track record leading frontend delivery, accessibility compliance, and agile engineering teams
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-4">
          {EXPERIENCES.map((exp) => {
            const isExpanded = expandedExperience === exp.id;
            return (
              <div
                key={exp.id}
                className={`p-6 rounded-lg bg-white border transition-all duration-300 ${
                  isExpanded ? 'border-blue-400 shadow-md' : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono-code text-xs font-semibold text-blue-600">
                        {exp.period}
                      </span>
                      {exp.current && (
                        <span className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-mono-code text-[10px] font-bold border border-emerald-200 leading-none">
                          CURRENT ROLE
                        </span>
                      )}
                    </div>
                    <h3 className="font-headline text-xl font-bold text-slate-900 mt-1">
                      {exp.title}
                    </h3>
                    <p className="font-mono-code text-xs text-slate-600 mt-0.5">
                      {exp.company} • {exp.location}
                    </p>
                  </div>

                  <button
                    onClick={() => toggleExp(exp.id)}
                    className="font-mono-code text-xs px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-blue-600 border border-slate-200 transition-colors self-start sm:self-auto flex items-center gap-1 font-semibold"
                  >
                    {isExpanded ? 'Hide Achievements' : 'View Achievements'}
                    <span className="material-symbols-outlined text-sm">
                      {isExpanded ? 'expand_less' : 'expand_more'}
                    </span>
                  </button>
                </div>

                <p className="font-sans text-sm text-slate-600 mt-3 leading-relaxed">
                  {exp.description}
                </p>

                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-slate-100 space-y-2.5 animate-in fade-in duration-200">
                    <div className="font-mono-code text-xs font-bold text-slate-900 uppercase tracking-wider">
                      Key Delivery Highlights
                    </div>
                    <ul className="space-y-2">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                          <span className="material-symbols-outlined text-emerald-600 text-base mt-0.5">
                            check_circle
                          </span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex flex-wrap gap-1.5 mt-4 pt-2">
                  {exp.tags.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center justify-center font-mono-code text-[11px] px-2.5 py-1 rounded-full bg-slate-50 text-slate-700 border border-slate-200/90 leading-none"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Education & Certification Section */}
      <div className="space-y-6">
        <div>
          <h2 className="font-headline text-2xl font-bold text-slate-900">
            Education & Professional Development
          </h2>
          <p className="font-mono-code text-xs text-slate-500 mt-1">
            Academic degree and continuous technical certifications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {EDUCATION.map((edu) => (
            <div key={edu.id} className="p-6 rounded-lg bg-white border border-slate-200 shadow-xs space-y-3">
              <span className="font-mono-code text-xs font-semibold text-emerald-600">
                {edu.period}
              </span>
              <h3 className="font-headline text-lg font-bold text-slate-900">
                {edu.degree}
              </h3>
              <p className="font-mono-code text-xs text-slate-600">{edu.institution}</p>
              <p className="font-sans text-xs text-slate-600 leading-relaxed">{edu.description}</p>
              <div className="inline-block font-mono-code text-[11px] px-3 py-1 rounded-lg bg-blue-50 text-blue-600 border border-blue-200 font-medium">
                🏆 {edu.achievement}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hobbies & Beyond the IDE */}
      <div className="p-6 rounded-lg bg-white border border-slate-200 shadow-xs space-y-6">
        <div>
          <h2 className="font-headline text-xl font-bold text-slate-900">Core Focus & Engineering Values</h2>
          <p className="font-mono-code text-xs text-slate-500 mt-0.5">
            Key tenets driving Ellis Enobun's frontend approach
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {HOBBIES.map((hobby, i) => (
            <div
              key={i}
              className="p-4 rounded-lg bg-slate-50 border border-slate-200 hover:border-blue-400 transition-all space-y-2 shadow-xs"
            >
              <div className="flex items-center justify-between">
                <span className="material-symbols-outlined text-2xl text-blue-600">
                  {hobby.icon}
                </span>
                <span className="font-mono-code text-[10px] px-2 py-0.5 rounded-lg bg-white border border-slate-200 text-slate-500">
                  {hobby.tag}
                </span>
              </div>
              <h3 className="font-headline text-sm font-bold text-slate-900">{hobby.title}</h3>
              <p className="font-sans text-xs text-slate-600 leading-relaxed">{hobby.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Endorsements */}
      <div className="space-y-6">
        <h2 className="font-headline text-2xl font-bold text-slate-900">Peer & Leadership Endorsements</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="p-6 rounded-lg bg-white border border-slate-200 shadow-xs space-y-4">
              <span className="material-symbols-outlined text-2xl text-blue-600">format_quote</span>
              <p className="font-sans text-sm text-slate-600 italic leading-relaxed">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-9 h-9 rounded-full object-cover border border-slate-200"
                />
                <div>
                  <div className="font-headline text-sm font-bold text-slate-900">{t.author}</div>
                  <div className="font-mono-code text-xs text-slate-500">
                    {t.role} • {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
