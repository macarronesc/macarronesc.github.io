import { motion } from 'motion/react';
import { useLanguage } from '../i18n';
import { useThemeStyles } from '../hooks/useThemeStyles';
import { projects, isProjectVisible } from '../data/projects';
import { useMemo } from 'react';

interface ProjectGridProps {
  activeFilter: string | null;
  onSelectProject: (id: string) => void;
}

const containerV = { hidden: {}, visible: { transition: { staggerChildren: 0.3, delayChildren: 0.1 } } };
const cardV = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
  exit: { opacity: 0, transition: { duration: 0.4 } },
};

/** Get a project's icon component by ID */
function getIcon(id: string) {
  return projects.find((p) => p.id === id)!.icon;
}

type ProjectId = 'agns' | 'klipso' | 'lithops' | 'pyrun' | 'soundless' | 'f1' | 'core' | 'speaking';

interface GridItem {
  id: ProjectId;
  size: 'large' | 'medium' | 'small' | 'wide';
}

// Default layout configuration
const defaultLayout: GridItem[] = [
  { id: 'agns', size: 'large' },
  { id: 'klipso', size: 'medium' },
  { id: 'lithops', size: 'medium' },
  { id: 'pyrun', size: 'medium' },
  { id: 'soundless', size: 'small' },
  { id: 'f1', size: 'small' },
  { id: 'core', size: 'wide' },
  { id: 'speaking', size: 'medium' },
];

function getSpanClasses(visibleItems: GridItem[]): Record<ProjectId, string> {
  const count = visibleItems.length;
  const ids = visibleItems.map(i => i.id);

  // Default spans (full layout)
  const spans: Record<ProjectId, string> = {
    agns: 'md:col-span-8 md:row-span-2',
    klipso: 'md:col-span-4 md:row-span-2',
    lithops: 'md:col-span-4 md:row-span-2',
    pyrun: 'md:col-span-4 md:row-span-2',
    soundless: 'md:col-span-4',
    f1: 'md:col-span-4',
    core: 'md:col-span-8',
    speaking: 'md:col-span-4',
  };

  // If all items visible, use default layout
  if (count === 8) return spans;

  // Calculate total columns needed and adjust
  const hasLargeItems = ids.some(id => ['agns'].includes(id));
  const hasMediumItems = ids.filter(id => ['klipso', 'lithops', 'pyrun'].includes(id));
  const hasSmallItems = ids.filter(id => ['soundless', 'f1', 'speaking'].includes(id));
  const hasWideItems = ids.includes('core');

  // Single item - full width
  if (count === 1) {
    visibleItems.forEach(item => {
      if (item.size === 'large') {
        spans[item.id] = 'md:col-span-12';
      } else if (item.size === 'wide') {
        spans[item.id] = 'md:col-span-12';
      } else {
        spans[item.id] = 'md:col-span-12';
      }
    });
    return spans;
  }

  // Two items - split evenly or 8/4
  if (count === 2) {
    const [first, second] = visibleItems;
    if (first.size === 'large' || first.size === 'wide') {
      spans[first.id] = 'md:col-span-8';
      spans[second.id] = 'md:col-span-4';
    } else if (second.size === 'large' || second.size === 'wide') {
      spans[first.id] = 'md:col-span-4';
      spans[second.id] = 'md:col-span-8';
    } else {
      spans[first.id] = 'md:col-span-6';
      spans[second.id] = 'md:col-span-6';
    }
    return spans;
  }

  // Three items
  if (count === 3) {
    const hasLarge = visibleItems.find(i => i.size === 'large' || i.size === 'wide');
    if (hasLarge) {
      spans[hasLarge.id] = 'md:col-span-12';
      visibleItems.filter(i => i.id !== hasLarge.id).forEach(item => {
        spans[item.id] = 'md:col-span-6';
      });
    } else {
      // All similar size - 4+4+4
      visibleItems.forEach(item => {
        spans[item.id] = 'md:col-span-4';
      });
    }
    return spans;
  }

  // Four items
  if (count === 4) {
    const hasLarge = visibleItems.find(i => i.size === 'large');
    if (hasLarge) {
      // Large takes 8, others take 4 each
      spans[hasLarge.id] = 'md:col-span-8 md:row-span-2';
      const others = visibleItems.filter(i => i.id !== hasLarge.id);
      others.forEach((item, idx) => {
        if (idx === 0) {
          spans[item.id] = 'md:col-span-4 md:row-span-2';
        } else {
          spans[item.id] = 'md:col-span-6';
        }
      });
    } else {
      // All take 6 cols (2x2 grid)
      visibleItems.forEach(item => {
        spans[item.id] = 'md:col-span-6';
      });
    }
    return spans;
  }

  // Five or more items - use smart distribution
  if (count >= 5) {
    // Check if we have the main large items
    const hasAgns = ids.includes('agns');
    const mediumCount = hasMediumItems.length;
    const smallCount = hasSmallItems.length;

    if (!hasAgns) {
      // No AGNS - redistribute medium items to fill
      hasMediumItems.forEach((id, idx) => {
        if (mediumCount <= 2) {
          spans[id] = 'md:col-span-6 md:row-span-2';
        } else if (idx === 0 && mediumCount === 3) {
          spans[id] = 'md:col-span-8 md:row-span-2';
        }
      });
    }

    // Handle small items in last row
    if (smallCount > 0 && hasWideItems) {
      // Core + small items
      if (smallCount === 1) {
        spans.core = 'md:col-span-8';
        hasSmallItems.forEach(id => {
          spans[id] = 'md:col-span-4';
        });
      } else if (smallCount === 2) {
        spans.core = 'md:col-span-8';
        hasSmallItems.forEach(id => {
          spans[id] = 'md:col-span-4';
        });
      } else {
        // 3 small items + core
        spans.core = 'md:col-span-12';
        hasSmallItems.forEach(id => {
          spans[id] = 'md:col-span-4';
        });
      }
    } else if (smallCount > 0 && !hasWideItems) {
      // Only small items in last row
      if (smallCount === 1) {
        hasSmallItems.forEach(id => {
          spans[id] = 'md:col-span-12';
        });
      } else if (smallCount === 2) {
        hasSmallItems.forEach(id => {
          spans[id] = 'md:col-span-6';
        });
      } else {
        hasSmallItems.forEach(id => {
          spans[id] = 'md:col-span-4';
        });
      }
    }
  }

  return spans;
}

export function ProjectGrid({ activeFilter, onSelectProject }: ProjectGridProps) {
  const { t } = useLanguage();
  const s = useThemeStyles();

  const AgnsIcon = getIcon('agns');
  const KlipsoIcon = getIcon('klipso');
  const LithopsIcon = getIcon('lithops');
  const PyrunIcon = getIcon('pyrun');
  const SoundlessIcon = getIcon('soundless');
  const F1Icon = getIcon('f1');

  // Calculate visible items and their spans
  const { visibleItems, spans } = useMemo(() => {
    const visible = defaultLayout.filter(item => {
      const checkId = item.id === 'f1' ? 'f1' : item.id;
      return isProjectVisible(checkId, activeFilter);
    });
    return {
      visibleItems: visible,
      spans: getSpanClasses(visible),
    };
  }, [activeFilter]);

  return (
    <motion.div
      key={`grid-${activeFilter || 'all'}`}
      variants={containerV}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="grid grid-cols-1 md:grid-cols-12 md:auto-rows-[minmax(100px,auto)] gap-6"
    >
      {/* AGNS — Large card */}
      {isProjectVisible('agns', activeFilter) && (
        <motion.div variants={cardV} onClick={() => onSelectProject('agns')} className={s.getCardClass(0, spans.agns) + ' md:flex-row gap-8'}>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-6">
              <span className={`${s.iconBg(0)} p-2.5 rounded-xl`}><AgnsIcon className={`w-6 h-6 ${s.iconColor(0)}`} /></span>
              <h2 className="text-3xl font-black tracking-tight">{t('agns.title')}</h2>
            </div>
            <p className={`${s.textMuted(0)} text-sm mb-8 leading-relaxed max-w-md text-justify`}>{t('agns.description')}</p>
            <div className="flex flex-wrap gap-2">
              {['PyTorch', 'RAG', 'LLM'].map((tag) => <span key={tag} className={`${s.tagBg(0)} text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider`}>{tag}</span>)}
            </div>
          </div>
          <div className={`md:w-56 flex flex-col justify-center items-center ${s.statBg(0)} rounded-2xl p-6 border`}>
            <span className={`text-[10px] font-bold ${s.textSubtle(0)} uppercase tracking-widest mb-2`}>{t('agns.stat.label')}</span>
            <span className={`text-5xl font-black ${s.statBoxText(0)} tracking-tighter`}>{t('agns.stat.value')}</span>
            <span className={`text-[10px] font-bold ${s.textMuted(0)} mt-3 uppercase tracking-wider`}>{t('agns.stat.sub')}</span>
          </div>
        </motion.div>
      )}

      {/* Klipso */}
      {isProjectVisible('klipso', activeFilter) && (
        <motion.div variants={cardV} onClick={() => onSelectProject('klipso')} className={s.getCardClass(1, spans.klipso) + ' justify-between'}>
          <div>
            <div className="flex justify-between items-start mb-8">
              <KlipsoIcon className={`w-8 h-8 ${s.iconColor(1)}`} />
              <span className="bg-green-500 px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-widest text-black">{t('klipso.badge')}</span>
            </div>
            <h2 className="text-2xl font-bold mb-3 tracking-tight">{t('klipso.title')}</h2>
            <p className={`${s.textMuted(1)} text-sm leading-relaxed text-justify`}>{t('klipso.description')}</p>
          </div>
          <div className="mt-10">
            <div className="flex justify-between items-end mb-2">
              <span className={`text-[10px] font-bold ${s.textSubtle(1)} uppercase tracking-widest`}>{t('klipso.adoption')}</span>
              <span className="text-xl font-bold tracking-tight">{t('klipso.clips')}</span>
            </div>
            <div className={`w-full ${s.progressBg(1)} h-1.5 rounded-full overflow-hidden mb-5`}><div className={`${s.progressFill(1)} h-full w-[75%] rounded-full`}></div></div>
            <div className="flex gap-2">
              {['GCP', 'FastAPI'].map((tag) => <span key={tag} className={`text-[9px] font-bold ${s.smallTagBg(1)} px-2 py-1 rounded uppercase tracking-wider`}>{tag}</span>)}
            </div>
          </div>
        </motion.div>
      )}

      {/* Lithops */}
      {isProjectVisible('lithops', activeFilter) && (
        <motion.div variants={cardV} onClick={() => onSelectProject('lithops')} className={s.getCardClass(2, spans.lithops) + ' justify-between'}>
          <div>
            <LithopsIcon className={`w-7 h-7 ${s.iconMuted} mb-5`} />
            <h2 className="text-xl font-bold mb-2 tracking-tight">{t('lithops.title')}</h2>
            <p className={`${s.textMuted(2)} text-sm mb-8 leading-relaxed text-justify`}>{t('lithops.description')}</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-extrabold tracking-wider">AWS/GCP/AZURE</span>
              <div className={`flex-1 h-px ${s.lineColor(2)}`}></div>
              <span className={`text-[10px] font-bold ${s.accentText(2)} tracking-wider`}>{t('lithops.native')}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Serverless', 'Distributed Systems', 'HPC'].map((tag) => <span key={tag} className={`${s.smallTagBg(2)} text-[9px] font-bold px-2 py-1 rounded uppercase tracking-wider`}>{tag}</span>)}
            </div>
          </div>
        </motion.div>
      )}

      {/* PyRun */}
      {isProjectVisible('pyrun', activeFilter) && (
        <motion.div variants={cardV} onClick={() => onSelectProject('pyrun')} className={s.getCardClass(3, spans.pyrun) + ' justify-between'}>
          <div>
            <PyrunIcon className={`w-7 h-7 ${s.iconMuted} mb-5`} />
            <h2 className="text-xl font-bold mb-2 tracking-tight">{t('pyrun.title')}</h2>
            <p className={`${s.textMuted(3)} text-sm mb-8 leading-relaxed text-justify`}>{t('pyrun.description')}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[{ label: t('pyrun.sla'), value: '99.98%' }, { label: t('pyrun.users'), value: 'Beta 500' }].map((stat) => (
              <div key={stat.label} className={`${s.statBg(3)} p-4 rounded-xl border shadow-sm`}>
                <span className={`block text-[10px] font-bold ${s.textSubtle(3)} uppercase tracking-widest mb-1`}>{stat.label}</span>
                <span className={`text-xl font-black ${s.statBoxText(3)} tracking-tight`}>{stat.value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Soundless */}
      {isProjectVisible('soundless', activeFilter) && (
        <motion.div variants={cardV} onClick={() => onSelectProject('soundless')} className={s.getCardClass(4, spans.soundless) + ' md:min-h-[100px] md:h-full'}>
          <div className="flex justify-between items-center h-full">
            <div><h3 className="text-base font-bold tracking-tight mb-1">{t('soundless.title')}</h3><p className={`text-xs ${s.textSubtle(4)}`}>{t('soundless.subtitle')}</p></div>
            <SoundlessIcon className={`w-6 h-6 ${s.iconMuted}`} />
          </div>
        </motion.div>
      )}

      {/* F1 Oracle */}
      {isProjectVisible('f1', activeFilter) && (
        <motion.div variants={cardV} onClick={() => onSelectProject('f1-oracle')} className={s.getCardClass(5, spans.f1) + ' md:min-h-[100px] md:h-full'}>
          <div className="flex justify-between items-center h-full">
            <div><h3 className="text-base font-bold tracking-tight mb-1">{t('f1.title')}</h3><p className={`text-xs ${s.textSubtle(5)}`}>{t('f1.subtitle')}</p></div>
            <F1Icon className={`w-6 h-6 ${s.iconMuted}`} />
          </div>
        </motion.div>
      )}

      {/* Core Contributions */}
      {isProjectVisible('core', activeFilter) && (
        <motion.div variants={cardV} onClick={() => onSelectProject('core')} className={s.getCardClass(6, spans.core)}>
          <h3 className={`text-[10px] font-black ${s.textSubtle(6)} uppercase tracking-widest mb-6 border-b ${s.coreBorder(6)} pb-3`}>{t('core.title')}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[{ code: 'OL', name: t('core.ollama'), sub: t('core.ollama.sub') }, { code: 'GC', name: t('core.gemini'), sub: t('core.gemini.sub') }].map((c) => (
              <div key={c.code} className="flex items-center gap-4">
                <div className={`w-10 h-10 ${s.coreBg(6)} rounded-lg flex items-center justify-center font-bold text-sm`}>{c.code}</div>
                <div><p className="text-sm font-bold tracking-tight mb-0.5">{c.name}</p><p className={`text-[10px] ${s.textSubtle(6)} uppercase tracking-wider`}>{c.sub}</p></div>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Technical Speaking */}
      {isProjectVisible('speaking', activeFilter) && (
        <motion.div variants={cardV} onClick={() => onSelectProject('speaking')} className={s.getCardClass(7, spans.speaking)}>
          <h3 className={`text-[10px] font-black ${s.textSubtle(7)} uppercase tracking-widest mb-4 border-b ${s.coreBorder(7)} pb-2`}>{t('speaking.title')}</h3>
          <div className="flex flex-col gap-3">
            {[{ name: t('speaking.pycon'), sub: t('speaking.pycon.sub') }, { name: t('speaking.euroscipy'), sub: t('speaking.euroscipy.sub') }].map((c) => (
              <div key={c.name}><span className="block text-sm font-bold tracking-tight mb-0.5">{c.name}</span><span className={`text-[10px] ${s.textMuted(7)} uppercase tracking-wider`}>{c.sub}</span></div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
