import { memo } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../i18n';
import { useThemeStyles } from '../hooks/useThemeStyles';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export const HeroSection = memo(function HeroSection() {
  const { t } = useLanguage();
  const s = useThemeStyles();

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mb-10"
    >
      <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-black tracking-tight mb-4">
        {t('hero.title')}
      </motion.h1>
      <motion.p variants={itemVariants} className={`${s.heroSub} mb-8 max-w-2xl text-base leading-relaxed`}>
        {t('hero.description')}
      </motion.p>
    </motion.section>
  );
});
