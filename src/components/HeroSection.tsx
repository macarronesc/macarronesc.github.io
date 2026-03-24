import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../i18n';
import { useThemeStyles } from '../hooks/useThemeStyles';

export const HeroSection = React.memo(function HeroSection() {
  const { t } = useLanguage();
  const s = useThemeStyles();

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="mb-10"
    >
      <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">{t('hero.title')}</h1>
      <p className={`${s.heroSub} mb-8 max-w-2xl text-base leading-relaxed`}>{t('hero.description')}</p>
    </motion.section>
  );
});
