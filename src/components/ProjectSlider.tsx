import React, { useState, useEffect, useCallback } from 'react';
import { Project } from '../types';

interface ProjectSliderProps {
  projects: Project[];
  onSelectCaseStudy: (project: Project) => void;
  onSelectLiveDemo: (project: Project) => void;
}

export const ProjectSlider: React.FC<ProjectSliderProps> = ({
  projects,
  onSelectCaseStudy,
  onSelectLiveDemo
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [isZoomed, setIsZoomed] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  }, [projects.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  }, [projects.length]);

  useEffect(() => {
    if (!isAutoplay || isZoomed) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoplay, isZoomed, nextSlide]);

  if (!projects || projects.length === 0) return null;

  const currentProject = projects[currentIndex];

  return (
    <div className="w-full bg-white rounded-lg border border-slate-200 overflow-hidden shadow-xs space-y-0">
      {/* Slider Header Toolbar */}
      <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-4 font-mono-code text-xs">
        <div className="flex items-center gap-2 text-slate-800 font-bold">
          <span className="material-symbols-outlined text-blue-600 text-base">collections</span>
          <span>INTERACTIVE SHOWCASE SLIDER</span>
          <span className="px-2 py-0.5 rounded-lg bg-blue-50 text-blue-600 text-[11px] font-semibold border border-blue-200">
            {currentIndex + 1} / {projects.length}
          </span>
        </div>

        <div className="flex items-center gap-3">
          {/* Autoplay Toggle */}
          <button
            onClick={() => setIsAutoplay(!isAutoplay)}
            className={`px-3 py-1 rounded-lg font-semibold flex items-center gap-1.5 transition-colors border ${
              isAutoplay
                ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                : 'bg-slate-100 text-slate-600 border-slate-200'
            }`}
            title={isAutoplay ? 'Pause Auto-slide' : 'Play Auto-slide'}
          >
            <span className="material-symbols-outlined text-xs">
              {isAutoplay ? 'pause' : 'play_arrow'}
            </span>
            <span>{isAutoplay ? 'Autoplay ON' : 'Paused'}</span>
          </button>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={prevSlide}
              className="w-8 h-8 rounded-full bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 transition-all inline-flex items-center justify-center shadow-2xs active:scale-95"
              aria-label="Previous Slide"
            >
              <span className="material-symbols-outlined text-base leading-none select-none">chevron_left</span>
            </button>
            <button
              onClick={nextSlide}
              className="w-8 h-8 rounded-full bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 transition-all inline-flex items-center justify-center shadow-2xs active:scale-95"
              aria-label="Next Slide"
            >
              <span className="material-symbols-outlined text-base leading-none select-none">chevron_right</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Slide Image Display */}
      <div className="relative h-72 sm:h-96 w-full bg-slate-900 group overflow-hidden">
        <img
          src={currentProject.image}
          alt={currentProject.title}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

        {/* Floating Category & Metric Badges */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2 items-center z-10">
          <span className="h-7 whitespace-nowrap inline-flex items-center justify-center px-3.5 rounded-full bg-white/95 backdrop-blur-md text-slate-900 font-mono-code text-[11px] font-semibold border border-slate-200/90 shadow-2xs leading-none">
            {currentProject.category}
          </span>
          {currentProject.metrics?.[0] && (
            <span className="h-7 whitespace-nowrap inline-flex items-center justify-center px-3.5 rounded-full bg-blue-600/90 backdrop-blur-md text-white font-mono-code text-[11px] font-semibold border border-blue-400/30 shadow-2xs leading-none">
              {currentProject.metrics[0].label}: {currentProject.metrics[0].value}
            </span>
          )}
        </div>

        {/* Zoom Button */}
        <button
          onClick={() => setIsZoomed(true)}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white backdrop-blur-md border border-slate-700/80 transition-all z-10 inline-flex items-center justify-center shadow-xs active:scale-95"
          title="Fullscreen Zoom"
        >
          <span className="material-symbols-outlined text-base leading-none select-none">zoom_in</span>
        </button>

        {/* Left / Right Overlay Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/60 hover:bg-slate-900/90 text-white backdrop-blur-md border border-slate-700/80 opacity-0 group-hover:opacity-100 transition-all z-20 inline-flex items-center justify-center shadow-md active:scale-95"
          aria-label="Previous image"
        >
          <span className="material-symbols-outlined text-xl leading-none select-none">chevron_left</span>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/60 hover:bg-slate-900/90 text-white backdrop-blur-md border border-slate-700/80 opacity-0 group-hover:opacity-100 transition-all z-20 inline-flex items-center justify-center shadow-md active:scale-95"
          aria-label="Next image"
        >
          <span className="material-symbols-outlined text-xl leading-none select-none">chevron_right</span>
        </button>

        {/* Slide Overlay Info Banner */}
        <div className="absolute bottom-4 left-4 right-4 text-white z-10 space-y-2">
          <h3 className="font-headline text-2xl font-bold tracking-tight">
            {currentProject.title}
          </h3>
          <p className="font-sans text-xs sm:text-sm text-slate-200 line-clamp-2 max-w-2xl">
            {currentProject.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-1">
            <button
              onClick={() => onSelectCaseStudy(currentProject)}
              className="px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-mono-code text-xs font-semibold inline-flex items-center gap-1.5 shadow-xs transition-colors leading-none"
            >
              <span className="material-symbols-outlined text-sm leading-none">visibility</span>
              <span>View Case Study</span>
            </button>
            <button
              onClick={() => onSelectLiveDemo(currentProject)}
              className="px-4 py-2.5 rounded-lg bg-white/20 hover:bg-white/30 text-white font-mono-code text-xs font-semibold backdrop-blur-md border border-white/30 inline-flex items-center gap-1.5 transition-colors leading-none"
            >
              <span className="material-symbols-outlined text-sm leading-none">play_circle</span>
              <span>Interactive Sandbox</span>
            </button>
          </div>
        </div>
      </div>

      {/* Thumbnail Bar */}
      <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center gap-3 overflow-x-auto">
        {projects.map((proj, idx) => (
          <button
            key={proj.id}
            onClick={() => setCurrentIndex(idx)}
            className={`flex-shrink-0 relative w-24 h-16 rounded-lg overflow-hidden border-2 transition-all ${
              idx === currentIndex
                ? 'border-blue-600 ring-2 ring-blue-500/30 scale-105'
                : 'border-slate-200 opacity-60 hover:opacity-100'
            }`}
          >
            <img src={proj.image} alt={proj.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-slate-900/20" />
            <span className="absolute bottom-1 left-1 right-1 font-mono-code text-[9px] text-white bg-slate-950/70 px-1 py-0.5 rounded truncate">
              {proj.title}
            </span>
          </button>
        ))}
      </div>

      {/* Zoom Modal */}
      {isZoomed && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setIsZoomed(false)}
        >
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={currentProject.image}
              alt={currentProject.title}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg border border-slate-700 shadow-2xl"
            />
            <div className="mt-4 flex justify-between items-center text-white font-mono-code text-xs">
              <div>
                <span className="font-bold text-blue-400">{currentProject.title}</span> — {currentProject.subtitle}
              </div>
              <button
                onClick={() => setIsZoomed(false)}
                className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white border border-slate-600"
              >
                Close Preview [Esc]
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
