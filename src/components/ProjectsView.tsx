import React, { useState, useMemo } from 'react';
import { Project } from '../types';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectSlider } from './ProjectSlider';

interface ProjectsViewProps {
  onSelectCaseStudy: (project: Project) => void;
  onSelectLiveDemo: (project: Project) => void;
}

export const ProjectsView: React.FC<ProjectsViewProps> = ({ onSelectCaseStudy, onSelectLiveDemo }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const categories = ['All', 'Web App', 'UI/UX', 'Backend & WebApp', 'Backend'];

  // Collect all unique tags
  const allTags = useMemo(() => {
    const set = new Set<string>();
    PROJECTS_DATA.forEach((p) => p.tags.forEach((t) => set.add(t)));
    return Array.from(set);
  }, []);

  // Filter projects based on category, search, and selected tag
  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((p) => {
      const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
      const matchesTag = !selectedTag || p.tags.includes(selectedTag);
      const matchesSearch =
        !searchQuery ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesTag && matchesSearch;
    });
  }, [selectedCategory, searchQuery, selectedTag]);

  return (
    <section className="py-12 px-6 max-w-[1200px] mx-auto w-full space-y-12" id="projects">
      {/* Header */}
      <div className="flex flex-col items-center text-center gap-3">
        <h1 className="font-headline text-3xl sm:text-5xl font-extrabold text-slate-900">
          Featured Web Engineering Delivery
        </h1>
        <p className="font-sans text-base sm:text-lg text-slate-600 max-w-2xl">
          Highlights from 20+ frontend projects led by Ellis Enobun across public services, university portals, commercial platforms, and REST APIs.
        </p>
      </div>

      {/* Interactive Image Slider Showcase */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="font-headline text-lg font-bold text-slate-900 flex items-center gap-2">
            <span className="material-symbols-outlined text-blue-600">view_carousel</span>
            Interactive Showcase Slider
          </h2>
          <span className="font-mono-code text-xs text-slate-500">Auto-playing • Swipe / Click Controls</span>
        </div>
        <ProjectSlider
          projects={PROJECTS_DATA}
          onSelectCaseStudy={onSelectCaseStudy}
          onSelectLiveDemo={onSelectLiveDemo}
        />
      </div>

      {/* Filter & Search Toolbar */}
      <div className="space-y-4 pt-2">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 p-1.5 bg-white rounded-full border border-slate-200/90 shadow-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setSelectedTag(null);
                }}
                className={`inline-flex items-center justify-center px-4 py-2 rounded-full font-mono-code text-xs font-semibold tracking-wider transition-all duration-150 leading-none ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {cat === 'All' ? 'All Delivery Projects' : cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
              search
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by project or stack..."
              className="w-full pl-9 pr-9 py-2 rounded-lg bg-white border border-slate-200 text-slate-900 placeholder-slate-400 font-sans text-xs focus:outline-none focus:border-blue-500 shadow-xs transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <span className="material-symbols-outlined text-xs">close</span>
              </button>
            )}
          </div>
        </div>

        {/* Quick Tag Filter Pills */}
        <div className="flex flex-wrap gap-1.5 items-center">
          <span className="font-mono-code text-[11px] text-slate-400 mr-1">Filter by tag:</span>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
              className={`inline-flex items-center justify-center px-2.5 py-1 rounded-full font-mono-code text-[11px] leading-none transition-colors border ${
                selectedTag === tag
                  ? 'bg-blue-600 text-white border-blue-600 font-semibold shadow-xs'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              #{tag}
            </button>
          ))}
          {selectedTag && (
            <button
              onClick={() => setSelectedTag(null)}
              className="inline-flex items-center justify-center font-mono-code text-[11px] px-2 py-1 text-rose-600 hover:underline leading-none"
            >
              Reset tag
            </button>
          )}
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-xl border border-slate-200 p-8 shadow-xs">
          <span className="material-symbols-outlined text-4xl text-slate-400 mb-2">find_in_page</span>
          <h3 className="font-headline text-lg text-slate-900">No matching projects found</h3>
          <p className="font-sans text-sm text-slate-500 mt-1">Try resetting search query or switching categories.</p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
              setSelectedTag(null);
            }}
            className="mt-4 px-4 py-2 rounded-lg bg-blue-50 text-blue-600 font-mono-code text-xs font-semibold border border-blue-200 hover:bg-blue-100 inline-flex items-center justify-center leading-none"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="flex flex-col bg-white rounded-xl border border-slate-200/90 overflow-hidden hover:border-blue-400 hover:shadow-md transition-all duration-300 group"
            >
              {/* Image Preview */}
              <div className="h-56 w-full bg-slate-100 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-2 items-center">
                  <span className="h-7 whitespace-nowrap inline-flex items-center justify-center px-3 bg-white/95 backdrop-blur-md text-slate-900 font-mono-code text-[11px] font-semibold rounded-full border border-slate-200/90 shadow-2xs leading-none">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="h-7 whitespace-nowrap inline-flex items-center justify-center gap-1 px-3 bg-emerald-600/90 backdrop-blur-md text-white font-mono-code text-[11px] font-semibold rounded-full border border-emerald-500/30 shadow-2xs leading-none">
                      <span className="material-symbols-outlined text-xs leading-none">star</span>
                      <span>Featured</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col gap-3 flex-grow">
                <div>
                  <h2 className="font-headline text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h2>
                  <p className="font-mono-code text-xs text-blue-600 mt-0.5 font-semibold">{project.subtitle}</p>
                </div>

                <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Metrics */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="grid grid-cols-3 gap-2 py-2.5 bg-slate-50/80 rounded-lg px-3 my-1">
                    {project.metrics.map((m, idx) => (
                      <div key={idx} className="text-center">
                        <div className="font-headline text-xs font-bold text-slate-900">{m.value}</div>
                        <div className="font-mono-code text-[10px] text-slate-500 truncate">{m.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setSelectedTag(tag)}
                      className={`inline-flex items-center justify-center font-mono-code text-[11px] px-2.5 py-1 rounded-full border transition-colors leading-none ${
                        selectedTag === tag
                          ? 'bg-blue-600 text-white border-blue-600 font-bold'
                          : 'bg-slate-50 text-slate-700 border-slate-200/80 hover:bg-slate-100'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>

                <div className="h-[1px] w-full bg-slate-100 my-1" />

                {/* Actions */}
                <div className="flex flex-wrap gap-2.5">
                  <button
                    onClick={() => onSelectCaseStudy(project)}
                    className="flex-1 inline-flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-mono-code text-xs font-semibold py-2.5 px-4 rounded-lg transition-colors shadow-xs leading-none"
                  >
                    <span className="material-symbols-outlined text-base leading-none">visibility</span>
                    <span>View Case Study</span>
                  </button>

                  <button
                    onClick={() => onSelectLiveDemo(project)}
                    className="inline-flex justify-center items-center gap-1.5 text-slate-700 hover:text-blue-600 font-mono-code text-xs font-semibold py-2.5 px-3.5 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors leading-none"
                  >
                    <span className="material-symbols-outlined text-base leading-none">play_circle</span>
                    <span>Interactive Sandbox</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};
