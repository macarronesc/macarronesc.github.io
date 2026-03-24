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

export function FilterBar({ visible, activeFilter, onFilterClick }: FilterBarProps) {
  const { t } = useLanguage();
  const s = useThemeStyles();

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.25 }}
          className="overflow-hidden mb-8"
        >
          <div className={`flex items-center gap-2 text-[10px] font-bold ${s.filterLabelColor} uppercase tracking-widest mb-3`}>
            <Filter className="w-3 h-3" /> {t('filter.label')}
          </div>
          <div className="flex flex-wrap gap-2">
            {techFilters.map((f) => {
              const key = f === 'AI & LLMs' ? 'ai' : f.toLowerCase();
              return (
                <button
                  key={f}
                  onClick={() => onFilterClick(f)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-colors duration-200 ${activeFilter === f ? s.filterBtnActive : s.filterBtnInactive}`}
                >
                  {t(`filter.${key}`)}
                  {f === 'Cloud' && (
                    <span className={`ml-2 px-1.5 py-0.5 rounded text-[10px] ${activeFilter === 'Cloud' ? 'bg-white/20' : 'bg-black/10'}`}>12+</span>
                  )}
                </button>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
