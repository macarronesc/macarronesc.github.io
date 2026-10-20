import { motion } from 'motion/react';
import { BriefcaseBusiness } from 'lucide-react';
import { useLanguage } from '../i18n';
import { useThemeStyles } from '../hooks/useThemeStyles';
import { projects, timelineOrder } from '../data/projects';

interface TimelineViewProps {
  onSelectProject: (id: string) => void;
}

export default function TimelineView({ onSelectProject }: TimelineViewProps) {
  const { t } = useLanguage();
  const s = useThemeStyles();

  const milestones = [
    { id: 'hp', title: t('timeline.hp.title'), description: t('timeline.hp.description'), icon: BriefcaseBusiness, contentId: null },
    ...timelineOrder.map(id => {
      const project = projects.find(project => project.id === id)!;
      return { ...project, title: id === 'core' || id === 'speaking' ? t(`${id}.title`) : project.title, description: t(`${id}.description`), contentId: project.contentId ?? id };
    }),
  ];

  return (
    <motion.section
      key="timeline"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.15 } }}
      transition={{ duration: 0.3 }}
      className="relative py-6 max-w-2xl mx-auto"
      aria-labelledby="timeline-title"
    >
      <header className="mb-12">
        <h2 id="timeline-title" className="text-2xl font-bold mb-3">{t('timeline.title')}</h2>
        <p className={`${s.tlSubText} text-sm leading-relaxed`}>{t('timeline.description')}</p>
      </header>
      <div className="relative space-y-12">
        <div aria-hidden="true" className={`absolute left-1/2 top-0 bottom-0 w-px ${s.tlLine} -translate-x-1/2 hidden md:block`} />
        {milestones.map((item, index) => {
          const left = index % 2 === 0;
          const Icon = item.icon;
          const flagship = item.id === 'klipso' || item.id === 'invade';
          const muted = flagship ? s.tlInvertedMuted : s.tlSubText;

          return (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, x: left ? -15 : 15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="relative pl-8 md:pl-0"
            >
              <div aria-hidden="true" className={`absolute left-0 md:left-1/2 top-1 md:-translate-x-1/2 w-3 h-3 rounded-full ${s.tlDot} border-4 box-content`} />
              <div className={left ? 'md:w-1/2 md:pr-8' : 'md:w-1/2 md:pl-8 md:ml-auto'}>
                <p className={`text-[10px] font-bold tracking-widest ${s.tlMuted} mb-2 uppercase`}>{t(`timeline.${item.id}.date`)}</p>
                <div className={`${flagship ? s.tlInvertedBg : s.tlCardBg} relative p-6 rounded-2xl border shadow-sm`}>
                  <Icon aria-hidden="true" className="w-6 h-6 mb-4" />
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className={`${muted} text-sm leading-relaxed`}>{item.description}</p>
                  {item.contentId && (
                    <button
                      type="button"
                      onClick={() => onSelectProject(item.contentId)}
                      aria-label={`${t('project.explore')}: ${item.title}`}
                      aria-haspopup="dialog"
                      className={`${muted} block mt-5 text-[10px] font-bold uppercase tracking-wider after:absolute after:inset-0 after:rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4`}
                    >
                      {t('project.explore')} ↗
                    </button>
                  )}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </motion.section>
  );
}
