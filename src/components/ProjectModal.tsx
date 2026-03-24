import { useEffect, useState, useCallback } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { X } from 'lucide-react';
import { useLanguage } from '../i18n';
import { useTheme } from '../hooks/useTheme.tsx';
import { motion, AnimatePresence } from 'motion/react';

interface ProjectModalProps {
  projectId: string;
  onClose: () => void;
}

const BASE = import.meta.env.BASE_URL;

export default function ProjectModal({ projectId, onClose }: ProjectModalProps) {
  const { t, language } = useLanguage();
  const { theme } = useTheme();
  const dark = theme === 'dark';
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const fetchContent = async () => {
      setLoading(true);
      try {
        const langPath = language === 'en' ? `${BASE}content/${projectId}.md` : `${BASE}content/${language}/${projectId}.md`;
        let response = await fetch(langPath);
        if (!response.ok && language !== 'en') {
          response = await fetch(`${BASE}content/${projectId}.md`);
        }
        if (!response.ok) throw new Error('Failed to load content');
        setContent(await response.text());
      } catch (error) {
        setContent('**Error loading project details.** Please try again later.');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchContent();
    return () => { document.body.style.overflow = 'unset'; };
  }, [projectId, language]);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    setTimeout(onClose, 200);
  }, [onClose]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => { if (e.key === 'Escape') handleClose(); };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={handleClose}
            className={`absolute inset-0 ${dark ? 'bg-black/80' : 'bg-black/60'} backdrop-blur-sm`}
          />
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ type: 'spring', bounce: 0, duration: 0.3 }}
            className={`relative w-full max-w-4xl max-h-[90vh] ${dark ? 'bg-zinc-900' : 'bg-white'} rounded-3xl shadow-2xl flex flex-col overflow-hidden`}
          >
            <div className={`flex items-center justify-between px-6 py-4 border-b ${dark ? 'border-zinc-800 bg-zinc-900/80' : 'border-zinc-100 bg-white/80'} backdrop-blur-md sticky top-0 z-10`}>
              <h3 className={`font-bold text-sm uppercase tracking-widest ${dark ? 'text-zinc-500' : 'text-zinc-400'}`}>{t('modal.title')}</h3>
              <button onClick={handleClose} className={`p-2 ${dark ? 'hover:bg-zinc-800' : 'hover:bg-zinc-100'} rounded-full transition-colors`} aria-label="Close modal">
                <X className={`w-5 h-5 ${dark ? 'text-zinc-400' : 'text-zinc-500'}`} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6 sm:p-10">
              {loading ? (
                <div className="flex justify-center items-center h-40">
                  <div className={`animate-spin rounded-full h-8 w-8 border-b-2 ${dark ? 'border-white' : 'border-black'}`} />
                </div>
              ) : (
                <article className={`prose max-w-none prose-headings:tracking-tight prose-img:rounded-xl prose-img:shadow-sm ${dark ? 'prose-invert prose-zinc' : 'prose-zinc prose-a:text-blue-600 hover:prose-a:text-blue-500'}`}>
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
                </article>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
