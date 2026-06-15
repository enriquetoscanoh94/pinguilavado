import { useCallback, useEffect, useMemo } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { translations } from '../data/i18n';
import { AppContext } from './AppContextValue';

function detectInitialLang() {
  if (typeof navigator === 'undefined') return 'en';
  return navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en';
}

function detectInitialTheme() {
  if (typeof window === 'undefined') return 'dark';
  return window.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

export function AppProvider({ children }) {
  const [lang, setLang] = useLocalStorage('pp_lang', detectInitialLang());
  const [theme, setTheme] = useLocalStorage('pp_theme', detectInitialTheme());

  useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  useEffect(() => { document.documentElement.dataset.theme = theme; }, [theme]);

  const toggleLang  = useCallback(() => setLang(l  => (l  === 'en'   ? 'es' : 'en')),    [setLang]);
  const toggleTheme = useCallback(() => setTheme(t => (t === 'dark' ? 'light' : 'dark')), [setTheme]);

  const value = useMemo(() => {
    const t = translations[lang];
    const pick = (item) => item?.[lang] ?? item?.en;
    return { lang, theme, toggleLang, toggleTheme, t, pick };
  }, [lang, theme, toggleLang, toggleTheme]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
