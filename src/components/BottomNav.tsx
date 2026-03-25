import { motion } from 'motion/react';
import { History, Network, Mail } from 'lucide-react';
import { useLanguage } from '../i18n';
import { useThemeStyles } from '../hooks/useThemeStyles';

interface BottomNavProps {
  view: 'grid' | 'timeline';
  onToggleView: () => void;
  onContactClick: () => void;
}

export function BottomNav({ view, onToggleView, onContactClick }: BottomNavProps) {
  const { t } = useLanguage();
  const s = useThemeStyles();

  return (
    <motion.nav
      initial={{ y: 60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', bounce: 0.15, duration: 0.5, delay: 0.3 }}
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 ${s.bottomNavBg} p-2 rounded-full shadow-2xl backdrop-blur-lg border z-40 transition-colors duration-300`}
    >
      <button
        onClick={onToggleView}
        className={`flex items-center gap-2 px-5 py-2.5 ${s.bottomBtn} rounded-full font-bold text-xs transition-colors`}
      >
        {view === 'grid' ? <History className="w-4 h-4" /> : <Network className="w-4 h-4" />}
        {view === 'grid' ? t('nav.timeline') : t('nav.projects')}
      </button>
      <div className={`w-px h-5 ${s.bottomDivider} mx-1`}></div>
      <button onClick={onContactClick} className={`flex items-center gap-2 px-5 py-2.5 ${s.bottomAccent} rounded-full font-bold text-xs transition-colors`}>
        <Mail className="w-4 h-4" /> {t('nav.contact')}
      </button>
    </motion.nav>
  );
}
