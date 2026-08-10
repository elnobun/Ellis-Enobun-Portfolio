import React, { useState, useEffect } from 'react';
import { NavigationTab } from '../types';

interface HeroProps {
  setActiveTab: (tab: NavigationTab) => void;
  onOpenResume: () => void;
  onOpenCalendly: () => void;
}

export const Hero: React.FC<HeroProps> = ({ setActiveTab, onOpenResume, onOpenCalendly }) => {
  const [activeLog, setActiveLog] = useState(0);

  const logs = [
    { time: '08:08:12', status: '200 OK', text: 'WCAG 2.1 AA Accessibility Audit: 100% Passed' },
    { time: '08:08:14', status: '200 OK', text: 'Express API Gateway /api/enquiry - Latency: 18ms' },
    { time: '08:08:16', status: '200 OK', text: 'University Sports Portal hydration: 0.4s [Core Web Vitals Pass]' },
    { time: '08:08:18', status: '200 OK', text: 'Civil Service College form validation engine online' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveLog((prev) => (prev + 1) % logs.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [logs.length]);

  return (
    <section className="relative min-h-[580px] flex items-center justify-center pt-10 pb-16 px-6 overflow-hidden bg-slate-50 border-b border-slate-200">
      <div className="relative z-10 max-w-[1200px] mx-auto w-full flex flex-col items-center text-center gap-6">
        
        {/* System Status Badge */}
        <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-xs leading-none">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="font-mono-code text-[11px] font-semibold text-slate-700 tracking-wider uppercase leading-none">
            ELLIS ENOBUN • LEAD FRONTEND DEVELOPER • UK / HARLOW & REMOTE
          </span>
        </div>

        {/* Hero Headline & Subtitle */}
        <div className="space-y-3 max-w-4xl">
          <h1 className="font-headline text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.15] sm:leading-[1.18] tracking-tight text-center">
            <span className="block">Building Accessible,</span>
            <span className="block my-0.5 sm:my-1">
              Responsive & <span className="gradient-text italic pr-2">User-Focused</span>
            </span>
            <span className="block">Web Applications</span>
          </h1>
          <p className="font-sans text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            Lead Frontend Web Developer with 8+ years of experience crafting high-performance digital services, WCAG 2.1 AA accessible forms, PHP & Bespoke WordPress themes, and robust Express.js REST API integrations.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-3 mt-1">
          <button
            onClick={() => setActiveTab('projects')}
            className="h-11 px-7 bg-blue-600 text-white rounded-lg font-mono-code text-xs font-bold uppercase tracking-wider hover:bg-blue-700 transition-all duration-200 active:scale-95 shadow-md shadow-blue-500/20 inline-flex items-center justify-center gap-2 leading-none border border-transparent"
          >
            <span>Explore 20+ Web Projects</span>
            <span className="material-symbols-outlined text-sm leading-none">arrow_forward</span>
          </button>

          <button
            onClick={onOpenResume}
            className="h-11 px-6 bg-white border border-slate-200 text-slate-800 rounded-lg font-mono-code text-xs font-semibold uppercase tracking-wider hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 active:scale-95 shadow-xs inline-flex items-center justify-center gap-2 leading-none"
          >
            <span className="material-symbols-outlined text-sm leading-none">description</span>
            <span>View CV / Resume</span>
          </button>

          <button
            onClick={onOpenCalendly}
            className="h-11 px-6 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-lg font-mono-code text-xs font-semibold uppercase tracking-wider hover:bg-emerald-100 transition-all duration-200 active:scale-95 inline-flex items-center justify-center gap-2 leading-none"
          >
            <span className="material-symbols-outlined text-sm leading-none">calendar_month</span>
            <span>Schedule Technical Call</span>
          </button>
        </div>

        {/* Telemetry Terminal */}
        <div className="w-full max-w-2xl mt-4 rounded-lg bg-slate-900 border border-slate-800 p-4 font-mono-code text-xs text-left shadow-xl relative overflow-hidden">
          <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block"></span>
              <span className="text-slate-400 ml-2 text-[11px] font-medium">ellis-enobun ~ production-telemetry</span>
            </div>
            <span className="text-emerald-400 text-[11px] inline-flex items-center gap-1 font-semibold leading-none">
              <span className="material-symbols-outlined text-xs leading-none">verified</span> WCAG 2.1 AA Compliant
            </span>
          </div>

          <div className="space-y-1 font-mono-code text-[12px] text-slate-300">
            {logs.map((log, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-2 py-1.5 px-2.5 rounded border-l-2 transition-all duration-200 ${
                  idx === activeLog
                    ? 'text-blue-400 bg-blue-500/10 border-blue-500 font-medium'
                    : 'opacity-60 border-transparent'
                }`}
              >
                <span className="text-slate-500 select-none font-mono-code">[{log.time}]</span>
                <span className="text-emerald-400 font-bold">{log.status}</span>
                <span className="truncate">{log.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Highlights Metrics Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-4xl mt-6">
          <div className="p-3.5 rounded-lg bg-white border border-slate-200 shadow-xs text-center">
            <div className="font-headline text-2xl font-extrabold text-blue-600">8+ Years</div>
            <div className="font-mono-code text-[11px] text-slate-500 mt-0.5">Frontend Delivery</div>
          </div>

          <div className="p-3.5 rounded-lg bg-white border border-slate-200 shadow-xs text-center">
            <div className="font-headline text-2xl font-extrabold text-emerald-600">20+ Projects</div>
            <div className="font-mono-code text-[11px] text-slate-500 mt-0.5">Enterprise & Public Services</div>
          </div>

          <div className="p-3.5 rounded-lg bg-white border border-slate-200 shadow-xs text-center">
            <div className="font-headline text-2xl font-extrabold text-slate-900">15,000+</div>
            <div className="font-mono-code text-[11px] text-slate-500 mt-0.5">Active Portal Users</div>
          </div>

          <div className="p-3.5 rounded-lg bg-white border border-slate-200 shadow-xs text-center">
            <div className="font-headline text-2xl font-extrabold text-amber-600">WCAG 2.1 AA</div>
            <div className="font-mono-code text-[11px] text-slate-500 mt-0.5">Accessibility Standard</div>
          </div>
        </div>

      </div>
    </section>
  );
};
