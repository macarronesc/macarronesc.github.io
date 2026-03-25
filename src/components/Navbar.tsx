import { memo } from 'react';
import { motion } from 'motion/react';
import { Terminal, Sun, Moon, Globe } from 'lucide-react';
import { useLanguage } from '../i18n';
import { useThemeStyles } from '../hooks/useThemeStyles';

export const Navbar = memo(function Navbar() {
  const { t, language, setLanguage } = useLanguage();
  const s = useThemeStyles();

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', bounce: 0, duration: 0.5 }}
      className={`sticky top-0 w-full z-50 backdrop-blur-md border-b py-4 transition-colors duration-300 ${s.navBg}`}
    >
      <div className="px-6 flex justify-between items-center max-w-[1200px] mx-auto">
        <div className="flex items-center gap-2">
          <Terminal className={`w-5 h-5 ${s.navIcon}`} />
          <span className="font-extrabold text-sm tracking-tight uppercase">{t('nav.title')}</span>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={s.toggleTheme} className={`p-2 rounded-full transition-colors ${s.toggleBtnBg}`} aria-label="Toggle theme">
            <motion.div
              animate={{ rotate: s.dark ? 180 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {s.dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </motion.div>
          </button>
          <button
            onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-colors text-[10px] font-bold uppercase tracking-widest ${s.toggleBtnBg}`}
          >
            <Globe className="w-3.5 h-3.5" />
            {language === 'en' ? 'ES' : 'EN'}
          </button>
          <span className={`hidden md:inline text-[10px] font-bold uppercase tracking-widest ${s.filterLabelColor}`}>{t('nav.recruiter')}</span>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
        </div>
      </div>
    </motion.nav>
  );
});
