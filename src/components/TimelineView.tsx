import { motion } from 'motion/react';
import { useLanguage } from '../i18n';
import { useThemeStyles } from '../hooks/useThemeStyles';
import { projects } from '../data/projects';

interface TimelineViewProps {
  onSelectProject: (id: string) => void;
}

interface TimelineItem {
  date: string;
  side: 'left' | 'right';
  dateColor?: string;
  content: React.ReactNode;
}

/** Get a project's icon component by ID */
function getIcon(id: string) {
  return projects.find((p) => p.id === id)!.icon;
}

export default function TimelineView({ onSelectProject }: TimelineViewProps) {
  const { t } = useLanguage();
  const s = useThemeStyles();

  const KlipsoIcon = getIcon('klipso');
  const AgnsIcon = getIcon('agns');
  const LithopsIcon = getIcon('lithops');
  const SoundlessIcon = getIcon('soundless');
  const F1Icon = getIcon('f1');
  const CoreIcon = getIcon('core');

  const items: TimelineItem[] = [
    // 1. Lithops (2022-2024) - LEFT
    {
      date: t('timeline.lithops.date'), side: 'left',
      content: (
        <div className={`${s.tlCardBg} p-6 rounded-2xl border text-left md:text-right cursor-pointer transition-transform hover:scale-[1.02]`} onClick={() => onSelectProject('lithops')}>
          <LithopsIcon className="w-8 h-8 mb-4 block md:ml-auto" />
          <h3 className="text-xl font-bold mb-2">{t('timeline.lithops.title')}</h3>
          <p className={`${s.tlSubText} text-sm text-justify`}>{t('timeline.lithops.description')}</p>
        </div>
      ),
    },

    // 2. Soundless (2024-2025) - RIGHT
    {
      date: t('timeline.soundless.date'), side: 'right',
      content: (
        <div className={`${s.tlSoundBg} border p-6 rounded-2xl cursor-pointer transition-transform hover:scale-[1.02]`} onClick={() => onSelectProject('soundless')}>
          <SoundlessIcon className={`w-6 h-6 ${s.tlMuted} mb-4 block`} />
          <h3 className="text-xl font-bold mb-2">{t('timeline.soundless.title')}</h3>
          <p className={`${s.tlSubText} text-sm text-justify`}>{t('timeline.soundless.description')}</p>
        </div>
      ),
    },

    // 3. F1 Oracle (2025) - LEFT
    {
      date: t('timeline.f1.date'), side: 'left',
      content: (
        <div className={`${s.tlCardBg} p-6 rounded-2xl border text-left md:text-right cursor-pointer transition-transform hover:scale-[1.02]`} onClick={() => onSelectProject('f1-oracle')}>
          <F1Icon className={`w-6 h-6 ${s.tlMuted} mb-4 block md:ml-auto`} />
          <h3 className="text-xl font-bold mb-2">{t('timeline.f1.title')}</h3>
          <p className={`${s.tlSubText} text-sm text-justify`}>{t('timeline.f1.description')}</p>
        </div>
      ),
    },

    // 4. PyRun (2025-2026) - RIGHT
    {
      date: t('timeline.pyrun.date'), side: 'right',
      content: (
        <div className={`${s.tlPyrunBg} p-6 rounded-2xl cursor-pointer transition-transform hover:scale-[1.02]`} onClick={() => onSelectProject('pyrun')}>
          <h3 className="text-2xl font-black tracking-tight uppercase italic mb-2">{t('timeline.pyrun.title')}</h3>
          <p className={`${s.tlPyrunText} text-sm text-justify mb-4`}>{t('timeline.pyrun.description')}</p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
            <span className="text-[10px] font-bold tracking-widest opacity-60 uppercase">Active Production</span>
          </div>
        </div>
      ),
    },

    // 5. AGNS (Mid 2025-2026) - LEFT
    {
      date: t('timeline.agns.date'), side: 'left',
      content: (
        <div className={`${s.tlCardBg2} p-6 rounded-2xl border text-left md:text-right cursor-pointer transition-transform hover:scale-[1.02]`} onClick={() => onSelectProject('agns')}>
          <div className="flex justify-between items-center mb-4 md:flex-row-reverse">
            <h3 className="text-2xl font-black tracking-tight">{t('timeline.agns.title')}</h3>
            <AgnsIcon className="w-6 h-6" />
          </div>
          <p className={`${s.tlSubText} text-sm mb-4 text-justify`}>{t('timeline.agns.description')}</p>
          <div className={`h-1.5 w-full ${s.tlProgressBg} rounded-full overflow-hidden`}>
            <div className={`h-full ${s.tlProgressFill} w-[99%]`}></div>
          </div>
        </div>
      ),
    },

    // 6. Conferences (August-October 2025) - RIGHT
    {
      date: t('timeline.conferences'), side: 'right',
      content: (
        <div className={`${s.tlCardBg} p-6 rounded-2xl border cursor-pointer transition-transform hover:scale-[1.02]`} onClick={() => onSelectProject('speaking')}>
          <h3 className={`text-xs font-bold tracking-widest uppercase ${s.tlMuted} mb-4`}>{t('timeline.upcoming')}</h3>
          <div className="space-y-4">
            <div>
              <span className={`text-[10px] font-bold ${s.tlMuted} uppercase`}>{t('timeline.euroscipy.date')}</span>
              <p className="font-black text-lg">{t('timeline.euroscipy')}</p>
              <p className={`text-sm ${s.tlSubText}`}>{t('timeline.euroscipy.location')}</p>
            </div>
            <div className={`pt-4 border-t ${s.tlBorderColor}`}>
              <span className={`text-[10px] font-bold ${s.tlMuted} uppercase`}>{t('timeline.pycon.date')}</span>
              <p className="font-black text-lg">{t('timeline.pycon')}</p>
              <p className={`text-sm ${s.tlSubText}`}>{t('timeline.pycon.location')}</p>
            </div>
          </div>
        </div>
      ),
    },

    // 7. Core Contributions (2026) - LEFT
    {
      date: t('timeline.core.date'), side: 'left',
      content: (
        <div className={`${s.tlCardBg} p-6 rounded-2xl border text-left md:text-right cursor-pointer transition-transform hover:scale-[1.02]`} onClick={() => onSelectProject('core')}>
          <CoreIcon className="w-6 h-6 mb-4 block md:ml-auto" />
          <h3 className="text-xl font-bold mb-2">{t('timeline.core.title')}</h3>
          <p className={`${s.tlSubText} text-sm text-justify`}>{t('timeline.core.description')}</p>
          <div className="flex gap-2 mt-4 md:justify-end flex-wrap">
            {['Ollama', 'Gemini CLI', 'Dask'].map((l) => (
              <span key={l} className={`text-[10px] font-bold ${s.tlTagBg} px-2 py-1 rounded`}>{l}</span>
            ))}
          </div>
        </div>
      ),
    },

    // 8. Klipso (Early 2026) - RIGHT
    {
      date: t('timeline.klipso.date'), side: 'right', dateColor: s.dark ? 'text-white' : 'text-black',
      content: (
        <div className={`${s.tlInvertedBg} p-6 rounded-2xl shadow-xl cursor-pointer transition-transform hover:scale-[1.02]`} onClick={() => onSelectProject('klipso')}>
          <div className="flex justify-between items-start mb-4">
            <KlipsoIcon className="w-5 h-5" />
            <span className={`text-[8px] border ${s.tlInvertedBorder} px-2 py-0.5 rounded uppercase`}>{t('timeline.klipso.badge')}</span>
          </div>
          <h3 className="text-2xl font-black tracking-tight mb-2">{t('timeline.klipso.title')}</h3>
          <p className={`${s.tlInvertedMuted} text-sm mb-4 text-justify`}>{t('timeline.klipso.description')}</p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
            <span className="text-[10px] font-bold tracking-widest opacity-60 uppercase">{t('timeline.klipso.status')}</span>
          </div>
        </div>
      ),
    }
  ];

  return (
    <motion.div
      key="timeline"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.15 } }}
      transition={{ duration: 0.3 }}
      className="space-y-16 relative py-12 max-w-2xl mx-auto"
    >
      <div className={`absolute left-1/2 top-0 bottom-0 w-px ${s.tlLine} -translate-x-1/2 hidden md:block`}></div>

      {items.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: item.side === 'left' ? -20 : 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.08 * idx }}
          className="relative pl-8 md:pl-0"
        >
          <div className={`absolute left-0 md:left-1/2 top-1 md:-translate-x-1/2 w-3 h-3 rounded-full ${s.tlDot} border-4 z-10 box-content`}></div>
          <div className={item.side === 'left' ? 'md:w-1/2 md:pr-12 md:text-right ml-auto md:ml-0' : 'md:w-1/2 md:pl-12 md:ml-auto'}>
            <span className={`text-[10px] font-black tracking-widest ${item.dateColor ?? s.tlMuted} block mb-2 uppercase`}>{item.date}</span>
            {item.content}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
