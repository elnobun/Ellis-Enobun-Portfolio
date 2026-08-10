import React, { useState } from 'react';

export const LocationWidget: React.FC = () => {
  const [activeCoverage, setActiveCoverage] = useState<'harlow' | 'london' | 'uk' | 'global'>('harlow');

  const coverageDetails = {
    harlow: {
      title: 'Harlow & Essex, UK',
      distance: 'On-site / Hybrid Ready',
      desc: 'Based in Harlow, Essex. Direct access to Stansted tech corridor and Greater London area.',
      commute: '< 30 mins to Central London via Greater Anglia line',
      status: 'Primary Hub'
    },
    london: {
      title: 'Greater London & Tech Belt',
      distance: 'Day-Commute Range',
      desc: 'Regular presence in London tech hubs (Old Street, King’s Cross, City of London).',
      commute: 'Flexible hybrid or client site availability',
      status: 'Active Zone'
    },
    uk: {
      title: 'Nationwide UK Services',
      distance: 'Remote & On-site Visits',
      desc: 'Full UK coverage for sprint planning, workshops, accessibility audits, and release signoffs.',
      commute: 'UK Wide Travel',
      status: 'Nationwide'
    },
    global: {
      title: 'Global Remote Teams',
      distance: 'UTC/GMT Timezone Focus',
      desc: 'Experienced working with US West/East Coast (Udacity) and European distributed Agile teams.',
      commute: 'Async / Sync Agile Support',
      status: 'Global Remote'
    }
  };

  const active = coverageDetails[activeCoverage];

  return (
    <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-xs space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-blue-600">location_on</span>
            <h3 className="font-headline text-lg font-bold text-slate-900">
              Location & Working Coverage
            </h3>
          </div>
          <p className="font-mono-code text-xs text-slate-500 mt-0.5">
            Harlow, Essex • London Area • UK & Global Remote
          </p>
        </div>

        <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 font-mono-code text-xs font-semibold border border-emerald-200 leading-none">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          <span>UK / GMT Timezone</span>
        </div>
      </div>

      {/* Coverage Radius Toggles */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono-code text-xs">
        <button
          onClick={() => setActiveCoverage('harlow')}
          className={`p-3 rounded-lg border text-left transition-all ${
            activeCoverage === 'harlow'
              ? 'bg-blue-50 border-blue-500 text-blue-700 font-bold shadow-xs'
              : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
          }`}
        >
          <div className="text-[10px] text-slate-400 font-normal">01. BASE</div>
          Harlow & Essex
        </button>

        <button
          onClick={() => setActiveCoverage('london')}
          className={`p-3 rounded-lg border text-left transition-all ${
            activeCoverage === 'london'
              ? 'bg-blue-50 border-blue-500 text-blue-700 font-bold shadow-xs'
              : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
          }`}
        >
          <div className="text-[10px] text-slate-400 font-normal">02. REGIONAL</div>
          London Area
        </button>

        <button
          onClick={() => setActiveCoverage('uk')}
          className={`p-3 rounded-lg border text-left transition-all ${
            activeCoverage === 'uk'
              ? 'bg-blue-50 border-blue-500 text-blue-700 font-bold shadow-xs'
              : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
          }`}
        >
          <div className="text-[10px] text-slate-400 font-normal">03. NATIONAL</div>
          Nationwide UK
        </button>

        <button
          onClick={() => setActiveCoverage('global')}
          className={`p-3 rounded-lg border text-left transition-all ${
            activeCoverage === 'global'
              ? 'bg-blue-50 border-blue-500 text-blue-700 font-bold shadow-xs'
              : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
          }`}
        >
          <div className="text-[10px] text-slate-400 font-normal">04. REMOTE</div>
          Global Remote
        </button>
      </div>

      {/* SVG Interactive Map Diagram */}
      <div className="relative h-48 w-full bg-slate-900 rounded-lg overflow-hidden border border-slate-800 p-4 text-white flex flex-col justify-between">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]" />

        {/* Map Rings SVG */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 600 200">
          <circle cx="150" cy="100" r="30" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 4" className="animate-spin origin-[150px_100px]" style={{ animationDuration: '20s' }} />
          <circle cx="150" cy="100" r="70" fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0.4" />
          <circle cx="150" cy="100" r="110" fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0.2" />
          
          {/* Connecting Line to London */}
          <line x1="150" y1="100" x2="320" y2="120" stroke="#10b981" strokeWidth="2" strokeDasharray="5 5" />
          <circle cx="320" cy="120" r="5" fill="#10b981" />
          <text x="330" y="125" fill="#94a3b8" fontSize="10" fontFamily="sans-serif">London (30m)</text>

          {/* Harlow Pin */}
          <circle cx="150" cy="100" r="8" fill="#3b82f6" />
          <circle cx="150" cy="100" r="4" fill="#ffffff" />
          <text x="165" y="104" fill="#ffffff" fontSize="12" fontWeight="bold" fontFamily="sans-serif">Harlow, Essex (HQ)</text>
        </svg>

        {/* Overlay Card Details */}
        <div className="relative z-10 flex justify-between items-start font-mono-code text-xs">
          <span className="inline-flex items-center justify-center px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 font-bold uppercase leading-none">
            {active.status}
          </span>
          <span className="text-slate-400">UK GMT Time Zone</span>
        </div>

        <div className="relative z-10 space-y-1 bg-slate-950/85 p-3 rounded-lg border border-slate-800 backdrop-blur-md max-w-md min-h-[96px]">
          <div className="font-headline font-bold text-sm text-blue-400">{active.title}</div>
          <p className="font-sans text-xs text-slate-300">{active.desc}</p>
          <div className="font-mono-code text-[11px] text-emerald-400 pt-1 flex items-center gap-1">
            <span className="material-symbols-outlined text-xs">directions_transit</span>
            {active.commute}
          </div>
        </div>
      </div>
    </div>
  );
};
