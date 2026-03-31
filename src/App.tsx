import { useState, lazy, Suspense } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { useThemeStyles } from './hooks/useThemeStyles';
import { useLanguage } from './i18n';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FilterBar } from './components/FilterBar';
import { ProjectGrid } from './components/ProjectGrid';
import { Footer } from './components/Footer';
import { BottomNav } from './components/BottomNav';
import { X, Copy, Check } from 'lucide-react';

// Lazy-load heavy components that aren't needed on initial render
const TimelineView = lazy(() => import('./components/TimelineView'));
const ProjectModal = lazy(() => import('./components/ProjectModal'));

export default function App() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [view, setView] = useState<'grid' | 'timeline'>('grid');
  const [showContact, setShowContact] = useState(false);
  const [copied, setCopied] = useState(false);
  const { t } = useLanguage();
  const s = useThemeStyles();

  const handleFilterClick = (filter: string) => {
    setActiveFilter((prev) => (prev === filter ? null : filter));
  };

  const handleToggleView = () => {
    setView((prev) => (prev === 'grid' ? 'timeline' : 'grid'));
    setActiveFilter(null);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('alegandro2507@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
      <BottomNav view={view} onToggleView={handleToggleView} onContactClick={() => setShowContact(true)} />

      <AnimatePresence>
        {showContact && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowContact(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={`${s.pageBg} rounded-2xl p-6 max-w-sm w-full shadow-2xl border ${s.dark ? 'border-white/10' : 'border-black/10'}`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold">{t('contact.title')}</h3>
                <button onClick={() => setShowContact(false)} className={`p-1 rounded-lg ${s.dark ? 'hover:bg-white/10' : 'hover:bg-black/10'} transition-colors`}>
                  <X className="w-5 h-5" />
                </button>
              </div>
              <p className={`text-sm ${s.dark ? 'text-white/60' : 'text-black/60'} mb-4`}>{t('contact.description')}</p>
              <div className={`flex items-center gap-2 p-3 rounded-xl ${s.dark ? 'bg-white/5' : 'bg-black/5'}`}>
                <span className="flex-1 font-mono text-sm">alegandro2507@gmail.com</span>
                <button
                  onClick={handleCopyEmail}
                  className={`p-2 rounded-lg ${s.dark ? 'hover:bg-white/10' : 'hover:bg-black/10'} transition-colors`}
                >
                  {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {selectedProject && (
        <Suspense fallback={null}>
          <ProjectModal projectId={selectedProject} onClose={() => setSelectedProject(null)} />
        </Suspense>
      )}
    </div>
  );
}
