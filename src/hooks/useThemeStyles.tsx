import { useMemo } from 'react';
import { useTheme } from './useTheme.tsx';

/** Generate valid dark card arrangement: max 3, never adjacent */
function generateCardThemes(): boolean[] {
  const indices = [0, 1, 2, 3, 4, 5, 6, 7];
  const adjacent = [
    [0, 1], [2, 3], [4, 5],
    [0, 2], [1, 3], [1, 4], [1, 5],
    [2, 6], [3, 7], [4, 6], [5, 7],
  ];
  for (let attempt = 0; attempt < 100; attempt++) {
    const darkCount = 2 + Math.floor(Math.random() * 2);
    const shuffled = [...indices].sort(() => Math.random() - 0.5);
    const darkSet = new Set(shuffled.slice(0, darkCount));
    if (adjacent.every(([a, b]) => !(darkSet.has(a) && darkSet.has(b)))) {
      return indices.map((i) => darkSet.has(i));
    }
  }
  return [true, false, false, true, false, false, false, true];
}

export function useThemeStyles() {
  const { theme, toggleTheme } = useTheme();
  const dark = theme === 'dark';

  const cardThemes = useMemo(() => generateCardThemes(), []);

  return useMemo(() => {
    const isCardDark = (i: number) => cardThemes[i];
    const isEffDark = (i: number) => (dark ? !isCardDark(i) : isCardDark(i));

    // Reusable card style builders
    const cardBg = (i: number) => {
      const cd = isCardDark(i);
      if (dark) return cd ? 'bg-white text-zinc-900' : 'bg-zinc-900 text-zinc-100 border border-zinc-800';
      return cd ? 'bg-black text-white' : 'bg-white text-[#1a1c1c] border border-zinc-100';
    };
    const cardHover = (i: number) => {
      const cd = isCardDark(i);
      if (dark) return cd ? 'hover:shadow-xl hover:scale-[1.01]' : 'hover:shadow-md hover:border-zinc-700 hover:scale-[1.01]';
      return cd ? 'hover:shadow-xl hover:scale-[1.01]' : 'hover:shadow-md hover:border-zinc-300 hover:scale-[1.01]';
    };
    const smallCardBg = (i: number) => {
      const cd = isCardDark(i);
      if (dark) return cd ? 'bg-white text-zinc-900' : 'bg-zinc-900 text-zinc-100 border border-zinc-800';
      return cd ? 'bg-black text-white' : 'bg-white border border-zinc-100';
    };
    const smallCardHover = (i: number) => {
      const cd = isCardDark(i);
      if (dark) return cd ? 'hover:shadow-lg hover:bg-zinc-100 hover:scale-[1.01]' : 'hover:shadow-md hover:border-zinc-700 hover:scale-[1.01]';
      return cd ? 'hover:shadow-lg hover:bg-zinc-900 hover:scale-[1.01]' : 'hover:shadow-md hover:border-zinc-300 hover:scale-[1.01]';
    };

    return {
      dark,
      theme,
      toggleTheme,
      cardThemes,

      // Page
      pageBg: dark ? 'bg-zinc-950' : 'bg-[#f8f9fa]',
      pageText: dark ? 'text-zinc-100' : 'text-[#1a1c1c]',

      // Nav
      navBg: dark ? 'bg-zinc-950/90 border-zinc-800' : 'bg-white/90 border-zinc-200',
      navIcon: dark ? 'text-zinc-100' : 'text-black',
      toggleBtnBg: dark ? 'bg-zinc-800 hover:bg-zinc-700' : 'bg-zinc-100 hover:bg-zinc-200',

      // Hero
      heroSub: dark ? 'text-zinc-400' : 'text-zinc-500',

      // Filters
      filterLabelColor: dark ? 'text-zinc-500' : 'text-zinc-400',
      filterBtnActive: dark ? 'bg-white text-black hover:bg-zinc-200' : 'bg-black text-white hover:bg-zinc-800',
      filterBtnInactive: dark ? 'bg-zinc-800 border-zinc-700 text-zinc-200 hover:border-zinc-500' : 'bg-white border border-zinc-200 text-black hover:border-black',

      // Footer
      footerBorder: dark ? 'border-zinc-800' : 'border-zinc-200',
      footerText: dark ? 'text-zinc-500 hover:text-zinc-200' : 'text-zinc-400 hover:text-black',
      footerMuted: dark ? 'text-zinc-600' : 'text-zinc-400',

      // Bottom Nav
      bottomNavBg: dark ? 'bg-white/95 text-black border-black/10' : 'bg-black/95 text-white border-white/10',
      bottomBtn: dark ? 'hover:bg-zinc-200' : 'hover:bg-zinc-800',
      bottomAccent: dark ? 'bg-black text-white hover:bg-zinc-900' : 'bg-white text-black hover:bg-zinc-100',
      bottomDivider: dark ? 'bg-zinc-300' : 'bg-zinc-700',

      // Timeline
      tlCardBg: dark ? 'bg-zinc-900 border-zinc-800 hover:bg-zinc-800' : 'bg-zinc-100 border-zinc-100 hover:bg-zinc-200',
      tlCardBg2: dark ? 'bg-zinc-900 border-zinc-700 hover:bg-zinc-800' : 'bg-zinc-50 border-zinc-200 hover:bg-zinc-100',
      tlDot: dark ? 'bg-white border-zinc-950 shadow-[0_0_0_1px_rgba(255,255,255,0.15)]' : 'bg-black border-white shadow-[0_0_0_1px_rgba(0,0,0,0.1)]',
      tlLine: dark ? 'bg-zinc-800' : 'bg-zinc-200',
      tlSubText: dark ? 'text-zinc-400' : 'text-zinc-500',
      tlMuted: dark ? 'text-zinc-500' : 'text-zinc-400',
      tlPyrunBg: dark ? 'bg-zinc-900 border-white border-2 hover:bg-zinc-800' : 'bg-white border-black border-2 hover:bg-zinc-50',
      tlPyrunText: dark ? 'text-zinc-300' : 'text-zinc-600',
      tlLithBg: dark ? 'bg-zinc-900 hover:bg-zinc-800' : 'bg-zinc-100 hover:bg-zinc-200',
      tlSoundBg: dark ? 'bg-zinc-900 border-zinc-800 hover:bg-zinc-800' : 'bg-zinc-50 border-zinc-100 hover:bg-zinc-100',
      tlTagBg: dark ? 'bg-zinc-800' : 'bg-white',
      tlInvertedBg: dark ? 'bg-white text-black' : 'bg-black text-white',
      tlInvertedMuted: dark ? 'text-black/70' : 'text-white/70',
      tlInvertedBorder: dark ? 'border-black/20' : 'border-white/20',
      tlBorderColor: dark ? 'border-zinc-700' : 'border-zinc-200',
      tlProgressBg: dark ? 'bg-zinc-700' : 'bg-zinc-200',
      tlProgressFill: dark ? 'bg-white' : 'bg-black',

      // Card helpers — composable base functions
      isCardDark,
      isEffDark,
      cardBg,
      cardHover,
      smallCardBg,
      smallCardHover,
      textMuted: (i: number) => isEffDark(i) ? 'text-zinc-400' : 'text-zinc-500',
      textSubtle: (i: number) => isEffDark(i) ? 'text-zinc-500' : 'text-zinc-400',
      iconColor: (i: number) => isEffDark(i) ? 'text-white' : 'text-black',
      iconMuted: 'text-zinc-400',
      tagBg: (i: number) => isEffDark(i) ? 'bg-white/10 border-white/10 text-zinc-300' : 'bg-zinc-50 border border-zinc-100 text-zinc-500',
      smallTagBg: (i: number) => isEffDark(i) ? 'text-zinc-400 border border-zinc-600' : 'bg-zinc-100',
      statBoxText: (i: number) => isEffDark(i) ? 'text-white' : 'text-black',
      progressBg: (i: number) => isEffDark(i) ? 'bg-zinc-700' : 'bg-zinc-200',
      progressFill: (i: number) => isEffDark(i) ? 'bg-white' : 'bg-black',
      lineColor: (i: number) => isEffDark(i) ? 'bg-zinc-600' : 'bg-zinc-200',
      accentText: (i: number) => isEffDark(i) ? 'text-blue-400' : 'text-blue-600',
      iconBg: (i: number) => isEffDark(i) ? 'bg-white/10' : 'bg-zinc-100',
      statBg: (i: number) => isEffDark(i) ? 'bg-white/5 border-white/10' : 'bg-zinc-50 border-zinc-100',
      coreBg: (i: number) => isEffDark(i) ? 'bg-white/10' : 'bg-zinc-50 border border-zinc-100',
      coreBorder: (i: number) => isEffDark(i) ? 'border-zinc-700' : 'border-zinc-100',

      // Composed card class builders — use base helpers, no duplication
      getCardClass: (i: number, span: string) =>
        `${span} ${cardBg(i)} ${cardHover(i)} p-8 rounded-2xl shadow-sm flex flex-col cursor-pointer transition-all duration-200 group`,
      getSmallClass: (i: number) =>
        `${smallCardBg(i)} ${smallCardHover(i)} p-6 rounded-2xl flex items-center justify-between cursor-pointer transition-all duration-200 shadow-sm group`,
    };
  }, [dark, cardThemes, toggleTheme]);
}
