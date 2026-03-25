import { memo } from 'react';
import { Terminal } from 'lucide-react';
import { useLanguage } from '../i18n';
import { useThemeStyles } from '../hooks/useThemeStyles';

export const Footer = memo(function Footer() {
  const { t } = useLanguage();
  const s = useThemeStyles();

  return (
    <footer className={`w-full py-6 px-6 border-t ${s.footerBorder} mt-12 transition-colors duration-300`}>
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 w-full max-w-[1200px] mx-auto">
        <div className="flex gap-6">
          {[
            { name: 'Github', url: 'https://github.com/macarronesc' },
            { name: 'LinkedIn', url: 'https://www.linkedin.com/in/daniel-alejandro-coll-tejeda/' },
            { name: 'Scholar', url: 'https://scholar.google.com/scholar?q=Daniel+Coll+Tejeda' }
          ].map((l) => (
            <a key={l.name} className={`${s.footerText} font-bold tracking-widest text-[10px] transition-all uppercase hover:opacity-70`} href={l.url} target="_blank" rel="noopener noreferrer">{l.name}</a>
          ))}
        </div>
        <div className={`${s.footerMuted} font-bold tracking-widest text-[10px] uppercase flex items-center gap-2`}>
          <Terminal className="w-3.5 h-3.5" /> © {new Date().getFullYear()} {t('footer.copyright')}
        </div>
      </div>
    </footer>
  );
});
