import { useState, lazy, Suspense } from 'react';
import { AnimatePresence } from 'motion/react';
import { useThemeStyles } from './hooks/useThemeStyles';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FilterBar } from './components/FilterBar';
import { ProjectGrid } from './components/ProjectGrid';
import { Footer } from './components/Footer';
import { BottomNav } from './components/BottomNav';

// Lazy-load heavy components that aren't needed on initial render
const TimelineView = lazy(() => import('./components/TimelineView'));
const ProjectModal = lazy(() => import('./components/ProjectModal'));

export default function App() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [view, setView] = useState<'grid' | 'timeline'>('grid');
  const s = useThemeStyles();

  const handleFilterClick = (filter: string) => {
    setActiveFilter((prev) => (prev === filter ? null : filter));
  };

  const handleToggleView = () => {
    setView((prev) => (prev === 'grid' ? 'timeline' : 'grid'));
    setActiveFilter(null);
  };

  return (
    <div className={`min-h-screen ${s.pageBg} ${s.pageText} font-sans pb-24 transition-colors duration-300`}>
      <Navbar />

      <main className="p-6 max-w-[1200px] mx-auto min-h-[500px]">
        <HeroSection />
        <FilterBar visible={view === 'grid'} activeFilter={activeFilter} onFilterClick={handleFilterClick} />

        <AnimatePresence mode="wait">
          {view === 'grid' ? (
            <ProjectGrid key={`grid-${activeFilter || 'all'}`} activeFilter={activeFilter} onSelectProject={setSelectedProject} />
          ) : (
            <Suspense key="timeline" fallback={null}>
              <TimelineView onSelectProject={setSelectedProject} />
            </Suspense>
          )}
        </AnimatePresence>
      </main>

      <Footer />
      <BottomNav view={view} onToggleView={handleToggleView} />

      {selectedProject && (
        <Suspense fallback={null}>
          <ProjectModal projectId={selectedProject} onClose={() => setSelectedProject(null)} />
        </Suspense>
      )}
    </div>
  );
}
