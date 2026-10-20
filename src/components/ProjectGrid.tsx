import { motion } from 'motion/react';
import { useLanguage } from '../i18n';
import { useThemeStyles } from '../hooks/useThemeStyles';
import { projects, isProjectVisible } from '../data/projects';

interface ProjectGridProps {
  activeFilter: string | null;
  onSelectProject: (id: string) => void;
}

const containerV = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const cardV = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

export function ProjectGrid({ activeFilter, onSelectProject }: ProjectGridProps) {
  const { t } = useLanguage();
  const s = useThemeStyles();
  const visible = projects.filter(project => isProjectVisible(project.id, activeFilter));

  return (
    <motion.div
      key={`grid-${activeFilter || 'all'}`}
      variants={containerV}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="grid grid-cols-1 md:grid-cols-12 gap-6"
    >
      {visible.map((project, index) => {
        const themeIndex = projects.indexOf(project);
        const Icon = project.icon;
        const title = project.id === 'core' || project.id === 'speaking' ? t(`${project.id}.title`) : project.title;
        // Keep the bento layout; filtered rows expand to avoid empty cells.
        const remainder = visible.length % 3;
        const span = activeFilter
          ? visible.length === 1 || (remainder === 1 && index === visible.length - 1)
            ? 'md:col-span-12'
            : remainder === 2 && index >= visible.length - 2
              ? 'md:col-span-6'
              : 'md:col-span-4'
          : project.id === 'klipso' || project.id === 'core'
            ? 'md:col-span-8'
            : project.id === 'soundless' || project.id === 'f1'
              ? 'md:col-span-6'
              : 'md:col-span-4';

        return (
          <motion.article
            key={project.id}
            variants={cardV}
            className={s.getCardClass(themeIndex, span) + ' relative text-left justify-between'}
          >
            <div>
              <div className="flex items-start justify-between gap-3 mb-6">
                <Icon aria-hidden="true" className={`w-7 h-7 shrink-0 ${s.iconColor(themeIndex)}`} />
                <span className={`${s.smallTagBg(themeIndex)} px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider`}>
                  {t(`${project.id}.role`)}
                </span>
              </div>
              <h2 className={`${project.id === 'klipso' ? 'text-3xl font-black' : 'text-2xl font-bold'} tracking-tight mb-3`}>{title}</h2>
              <p className={`${s.textMuted(themeIndex)} text-sm leading-relaxed`}>{t(`${project.id}.description`)}</p>
            </div>

            <div className="mt-7 w-full">
              {project.stats && (
                <div className={`grid ${project.stats.length === 3 ? 'grid-cols-3' : 'grid-cols-1'} gap-3 mb-5`}>
                  {project.stats.map(stat => (
                    <div key={stat} className={`${s.statBg(themeIndex)} rounded-xl p-3 border`}>
                      <span className={`block text-2xl font-black tracking-tight ${s.statBoxText(themeIndex)}`}>{t(`${project.id}.stats.${stat}.value`)}</span>
                      <span className={`block text-[10px] font-bold uppercase tracking-wider mt-1 ${s.textMuted(themeIndex)}`}>{t(`${project.id}.stats.${stat}.label`)}</span>
                    </div>
                  ))}
                </div>
              )}
              {project.stats && <p className={`${s.textMuted(themeIndex)} text-xs leading-relaxed mb-5`}>{t(`${project.id}.evidence`)}</p>}
              <div className="flex flex-wrap gap-2">
                {project.stack.map(tag => (
                  <span key={tag} className={`${s.tagBg(themeIndex)} text-[10px] font-bold px-2.5 py-1 rounded-md tracking-wide`}>{tag}</span>
                ))}
              </div>
              <button
                type="button"
                onClick={() => onSelectProject(project.contentId ?? project.id)}
                aria-label={`${t('project.explore')}: ${title}`}
                aria-haspopup="dialog"
                className={`block text-[10px] font-bold uppercase tracking-wider mt-6 ${s.textMuted(themeIndex)} after:absolute after:inset-0 after:rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4`}
              >
                {t('project.explore')} ↗
              </button>
            </div>
          </motion.article>
        );
      })}
    </motion.div>
  );
}
