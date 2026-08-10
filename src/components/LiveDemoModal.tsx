import React, { useState, useEffect } from 'react';
import { Project } from '../types';

interface LiveDemoModalProps {
  project: Project | null;
  onClose: () => void;
}

export const LiveDemoModal: React.FC<LiveDemoModalProps> = ({ project, onClose }) => {
  const [dataPoints, setDataPoints] = useState<number[]>([45, 62, 58, 79, 85, 94, 88, 102, 115, 120]);
  const [streamActive, setStreamActive] = useState(true);
  const [simulatedRequests, setSimulatedRequests] = useState<string[]>([]);
  const [latencyMs, setLatencyMs] = useState(14);
  const [queryInput, setQueryInput] = useState('How does WCAG 2.1 AA form validation handle error messaging?');
  const [aiOutput, setAiOutput] = useState('');
  const [isAiGenerating, setIsAiGenerating] = useState(false);

  // Live stream simulator
  useEffect(() => {
    if (!streamActive) return;
    const interval = setInterval(() => {
      const nextVal = Math.floor(60 + Math.random() * 80);
      setDataPoints((prev) => [...prev.slice(1), nextVal]);

      const logMsg = `[FORM VALIDATION OK] Session ID #${Math.floor(Math.random() * 89999 + 10000)} -> latency ${latencyMs + Math.floor(Math.random() * 4)}ms`;
      setSimulatedRequests((prev) => [logMsg, ...prev.slice(0, 5)]);
    }, 1200);

    return () => clearInterval(interval);
  }, [streamActive, latencyMs]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const handleRunAiQuery = () => {
    if (!queryInput) return;
    setIsAiGenerating(true);
    setAiOutput('');
    setTimeout(() => {
      setAiOutput(
        `[Ellis Enobun Engineering Spec] Processing query:\n"${queryInput}"\n\nResult:\nWCAG 2.1 AA requires clear, programmatically associated error messages (aria-invalid, aria-describedby) with immediate focus management and visual indicators for colorblind accessibility.`
      );
      setIsAiGenerating(false);
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white border border-slate-200 rounded-lg w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
            <div>
              <div className="font-headline text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                <span>{project.title}</span>
                <span className="inline-flex items-center justify-center font-mono-code text-[11px] px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 font-semibold border border-blue-200/90 leading-none">
                  INTERACTIVE SANDBOX
                </span>
              </div>
              <p className="font-mono-code text-xs text-slate-500">Live Prototype & Telemetry Simulator</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Interactive Controls & Live Display */}
        <div className="p-6 overflow-y-auto space-y-5 flex-grow">
          {/* Top Control Toolbar */}
          <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 flex flex-wrap items-center justify-between gap-4 font-mono-code text-xs shadow-xs">
            <div className="flex items-center gap-3">
              <span className="text-slate-600 font-medium">Stream Status:</span>
              <button
                onClick={() => setStreamActive(!streamActive)}
                className={`px-3 py-1 rounded-lg font-bold transition-colors ${
                  streamActive ? 'bg-emerald-600 text-white' : 'bg-rose-100 text-rose-700 border border-rose-200'
                }`}
              >
                {streamActive ? '▶ STREAM ACTIVE' : '⏸ PAUSED'}
              </button>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-slate-600 font-medium">Simulated Delay:</span>
              <input
                type="range"
                min="4"
                max="100"
                value={latencyMs}
                onChange={(e) => setLatencyMs(Number(e.target.value))}
                className="w-24 accent-blue-600"
              />
              <span className="text-blue-600 font-bold">{latencyMs} ms</span>
            </div>
          </div>

          {/* Real-time Visualizer Chart */}
          <div className="p-4 rounded-lg bg-slate-900 border border-slate-800 space-y-3 shadow-md">
            <div className="flex justify-between items-center font-mono-code text-xs">
              <span className="text-slate-200 font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-blue-400">monitoring</span>
                Form Request Telemetry Rate (req/sec)
              </span>
              <span className="text-emerald-400 font-semibold">60 FPS • Active Hydration</span>
            </div>

            {/* Simulated Bar Chart */}
            <div className="h-36 flex items-end justify-between gap-2 pt-4 px-2 border-b border-slate-800">
              {dataPoints.map((val, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center gap-1 group">
                  <div className="font-mono-code text-[10px] text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    {val}
                  </div>
                  <div
                    className="w-full bg-gradient-to-t from-blue-600/40 to-blue-500 rounded-t transition-all duration-300"
                    style={{ height: `${(val / 140) * 100}%` }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Sandbox Query */}
          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-3 shadow-xs">
            <h3 className="font-headline text-sm font-bold text-slate-900">Interactive Accessibility & Tech Query</h3>
            <div className="flex gap-2">
              <input
                type="text"
                value={queryInput}
                onChange={(e) => setQueryInput(e.target.value)}
                placeholder="Ask an accessibility or frontend question..."
                className="flex-1 px-4 py-2 rounded-lg bg-white border border-slate-200 font-sans text-xs text-slate-900 focus:outline-none focus:border-blue-500 shadow-xs"
              />
              <button
                onClick={handleRunAiQuery}
                disabled={isAiGenerating}
                className="px-4 py-2 rounded-lg bg-blue-600 text-white font-mono-code text-xs font-bold hover:bg-blue-700 transition-colors shadow-xs"
              >
                {isAiGenerating ? 'Evaluating...' : 'Query'}
              </button>
            </div>

            {aiOutput && (
              <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 font-mono-code text-xs text-slate-200 whitespace-pre-wrap animate-in fade-in shadow-md">
                {aiOutput}
              </div>
            )}
          </div>

          {/* Live Console Logs */}
          <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 font-mono-code text-xs text-slate-300 space-y-1 shadow-md">
            <div className="text-slate-400 font-semibold mb-1.5">Live Telemetry Logs:</div>
            {simulatedRequests.length === 0 ? (
              <div className="text-slate-500 italic">Connecting to live stream...</div>
            ) : (
              simulatedRequests.map((req, i) => (
                <div key={i} className="text-emerald-400 font-mono-code">
                  {req}
                </div>
              ))
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-between items-center">
          <span className="font-mono-code text-xs text-slate-500">
            Ellis Enobun Interactive Sandbox
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-blue-600 text-white font-mono-code text-xs font-bold uppercase tracking-wider hover:bg-blue-700 transition-colors shadow-xs"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
