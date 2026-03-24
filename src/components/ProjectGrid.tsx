import { motion } from 'motion/react';
import { useLanguage } from '../i18n';
import { useThemeStyles } from '../hooks/useThemeStyles';
import { projects, isProjectVisible } from '../data/projects';

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

export function ProjectGrid({ activeFilter, onSelectProject }: ProjectGridProps) {
  const { t } = useLanguage();
  const s = useThemeStyles();

  const AgnsIcon = getIcon('agns');
  const KlipsoIcon = getIcon('klipso');
  const LithopsIcon = getIcon('lithops');
  const PyrunIcon = getIcon('pyrun');
  const SoundlessIcon = getIcon('soundless');
  const F1Icon = getIcon('f1');

  return (
    <motion.div
      key={`grid-${activeFilter || 'all'}`}
      variants={containerV}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="grid grid-cols-1 md:grid-cols-12 gap-6"
    >
      {/* AGNS — Large card */}
      {isProjectVisible('agns', activeFilter) && (
        <motion.div variants={cardV} onClick={() => onSelectProject('agns')} className={s.getCardClass(0, 'md:col-span-8') + ' md:flex-row gap-8'}>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-6">
              <span className={`${s.iconBg(0)} p-2.5 rounded-xl`}><AgnsIcon className={`w-6 h-6 ${s.iconColor(0)}`} /></span>
              <h2 className="text-3xl font-black tracking-tight">{t('agns.title')}</h2>
            </div>
            <p className={`${s.textMuted(0)} text-sm mb-8 leading-relaxed max-w-md`}>{t('agns.description')}</p>
            <div className="flex flex-wrap gap-2">
              {['PyTorch', 'Neo4j', 'LLMs'].map((tag) => <span key={tag} className={`${s.tagBg(0)} text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider`}>{tag}</span>)}
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
        <motion.div variants={cardV} onClick={() => onSelectProject('klipso')} className={s.getCardClass(1, 'md:col-span-4') + ' justify-between'}>
          <div>
            <div className="flex justify-between items-start mb-8">
              <KlipsoIcon className={`w-8 h-8 ${s.iconColor(1)}`} />
              <span className="bg-green-500 px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-widest text-black">{t('klipso.badge')}</span>
            </div>
            <h2 className="text-2xl font-bold mb-3 tracking-tight">{t('klipso.title')}</h2>
            <p className={`${s.textMuted(1)} text-sm leading-relaxed`}>{t('klipso.description')}</p>
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
        <motion.div variants={cardV} onClick={() => onSelectProject('lithops')} className={s.getCardClass(2, 'md:col-span-4') + ' justify-between'}>
          <div>
            <LithopsIcon className={`w-7 h-7 ${s.iconMuted} mb-5`} />
            <h2 className="text-xl font-bold mb-2 tracking-tight">{t('lithops.title')}</h2>
            <p className={`${s.textMuted(2)} text-sm mb-8 leading-relaxed`}>{t('lithops.description')}</p>
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
        <motion.div variants={cardV} onClick={() => onSelectProject('pyrun')} className={s.getCardClass(3, 'md:col-span-4') + ' justify-between'}>
          <div>
            <PyrunIcon className={`w-7 h-7 ${s.iconMuted} mb-5`} />
            <h2 className="text-xl font-bold mb-2 tracking-tight">{t('pyrun.title')}</h2>
            <p className={`${s.textMuted(3)} text-sm mb-8 leading-relaxed`}>{t('pyrun.description')}</p>
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

      {/* Soundless + F1 — Small stacked cards */}
      {(isProjectVisible('soundless', activeFilter) || isProjectVisible('f1', activeFilter)) && (
        <motion.div variants={cardV} className="md:col-span-4 grid grid-rows-2 gap-4">
          {isProjectVisible('soundless', activeFilter) && (
            <div onClick={() => onSelectProject('soundless')} className={s.getSmallClass(4)}>
              <div><h3 className="text-base font-bold tracking-tight mb-1">{t('soundless.title')}</h3><p className={`text-xs ${s.textSubtle(4)}`}>{t('soundless.subtitle')}</p></div>
              <SoundlessIcon className={`w-6 h-6 ${s.iconMuted}`} />
            </div>
          )}
          {isProjectVisible('f1', activeFilter) && (
            <div onClick={() => onSelectProject('f1-oracle')} className={s.getSmallClass(5)}>
              <div><h3 className="text-base font-bold tracking-tight mb-1">{t('f1.title')}</h3><p className={`text-xs ${s.textSubtle(5)}`}>{t('f1.subtitle')}</p></div>
              <F1Icon className={`w-6 h-6 ${s.iconMuted}`} />
            </div>
          )}
        </motion.div>
      )}

      {/* Core Contributions */}
      {isProjectVisible('core', activeFilter) && (
        <motion.div variants={cardV} onClick={() => onSelectProject('core')} className={s.getCardClass(6, 'md:col-span-6')}>
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
        <motion.div variants={cardV} onClick={() => onSelectProject('speaking')} className={s.getCardClass(7, 'md:col-span-6')}>
          <h3 className={`text-[10px] font-black ${s.textSubtle(7)} uppercase tracking-widest mb-6 border-b ${s.coreBorder(7)} pb-3`}>{t('speaking.title')}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[{ name: t('speaking.pycon'), sub: t('speaking.pycon.sub') }, { name: t('speaking.euroscipy'), sub: t('speaking.euroscipy.sub') }].map((c) => (
              <div key={c.name}><span className="block text-sm font-bold tracking-tight mb-0.5">{c.name}</span><span className={`text-[10px] ${s.textMuted(7)} uppercase tracking-wider`}>{c.sub}</span></div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
