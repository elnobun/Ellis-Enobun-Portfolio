import React, { useState } from 'react';
import { NavigationTab, Project } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { ProjectsView } from './components/ProjectsView';
import { AboutView } from './components/AboutView';
import { StackView } from './components/StackView';
import { ContactView } from './components/ContactView';
import { CaseStudyModal } from './components/CaseStudyModal';
import { LiveDemoModal } from './components/LiveDemoModal';
import { ResumeModal } from './components/ResumeModal';
import { CalendlyModal } from './components/CalendlyModal';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<NavigationTab>('projects');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);
  const [selectedLiveDemo, setSelectedLiveDemo] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Render Hero on Projects tab or as top banner */}
        {activeTab === 'projects' && (
          <Hero
            setActiveTab={setActiveTab}
            onOpenResume={() => setIsResumeOpen(true)}
            onOpenCalendly={() => setIsCalendlyOpen(true)}
          />
        )}

        {/* Dynamic Tab Views */}
        {activeTab === 'projects' && (
          <ProjectsView
            onSelectCaseStudy={(project) => setSelectedCaseStudy(project)}
            onSelectLiveDemo={(project) => setSelectedLiveDemo(project)}
          />
        )}

        {activeTab === 'about' && (
          <AboutView onOpenResume={() => setIsResumeOpen(true)} />
        )}

        {activeTab === 'stack' && <StackView />}

        {activeTab === 'contact' && (
          <ContactView onOpenCalendly={() => setIsCalendlyOpen(true)} />
        )}
      </main>

      {/* Footer */}
      <Footer setActiveTab={setActiveTab} />

      {/* Interactive Overlays / Modals */}
      {selectedCaseStudy && (
        <CaseStudyModal
          project={selectedCaseStudy}
          onClose={() => setSelectedCaseStudy(null)}
          onOpenLiveDemo={(project) => setSelectedLiveDemo(project)}
        />
      )}

      {selectedLiveDemo && (
        <LiveDemoModal
          project={selectedLiveDemo}
          onClose={() => setSelectedLiveDemo(null)}
        />
      )}

      {isResumeOpen && (
        <ResumeModal onClose={() => setIsResumeOpen(false)} />
      )}

      {isCalendlyOpen && (
        <CalendlyModal onClose={() => setIsCalendlyOpen(false)} />
      )}
    </div>
  );
};

export default App;
