import { motion, AnimatePresence } from 'motion/react';
import { Filter } from 'lucide-react';
import { useLanguage } from '../i18n';
import { useThemeStyles } from '../hooks/useThemeStyles';
import { techFilters } from '../data/projects';

interface FilterBarProps {
  visible: boolean;
  activeFilter: string | null;
  onFilterClick: (filter: string) => void;
}

const containerVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: 'auto',
    transition: {
      duration: 0.25,
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  },
  exit: { opacity: 0, height: 0, transition: { duration: 0.2 } }
};

const pillVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.25, ease: "easeOut" } },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.15 } }
};

export function FilterBar({ visible, activeFilter, onFilterClick }: FilterBarProps) {
  const { t } = useLanguage();
  const s = useThemeStyles();

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="overflow-hidden mb-8"
        >
          <div className={`flex items-center gap-2 text-[10px] font-bold ${s.filterLabelColor} uppercase tracking-widest mb-3`}>
            <Filter className="w-3 h-3" /> {t('filter.label')}
          </div>
          <div className="flex flex-wrap gap-2">
            {techFilters.map((f) => {
              const key = f === 'AI & LLMs' ? 'ai' : f.toLowerCase();
              return (
                <motion.button
                  key={f}
                  variants={pillVariants}
                  onClick={() => onFilterClick(f)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-colors duration-200 ${activeFilter === f ? s.filterBtnActive : s.filterBtnInactive}`}
                >
                  {t(`filter.${key}`)}
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
