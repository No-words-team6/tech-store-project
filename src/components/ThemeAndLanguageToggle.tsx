import { useThemeStore } from '@/hooks/useThemeStore';
import { useProductStore } from '@/stores/productStore';
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const ThemeAndLanguageToggle = () => {
  const { i18n } = useTranslation();
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === 'undefined') return false;
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const zustandSetIsDark = useThemeStore((state) => state.setIsDark);
  const startFakeLoading = useProductStore((state) => state.startFakeLoading);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }

    zustandSetIsDark(isDark);
  }, [isDark, zustandSetIsDark]);

  const handleClick = () => {
    startFakeLoading();
    setIsDark(!isDark);
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ua' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="flex items-center">
      <button
        onClick={handleClick}
        className="h-12 w-12 md:h-16 md:w-16 flex items-center justify-center group 
    md:border border-transparent 
    md:border-[#E2E6E9] md:dark:border-[#323542] 
    transition-colors"
      >
        {isDark ?
          <Moon className="text-link-text group-hover:text-link-hover-bg" />
        : <Sun className="text-link-text group-hover:text-link-hover-bg" />}
      </button>

      <button
        onClick={toggleLanguage}
        className="h-12 w-12 md:h-16 md:w-16 flex items-center justify-center group 
    md:border-t md:border-b md:border-r border-transparent 
    md:border-[#E2E6E9] md:dark:border-[#323542] 
    transition-colors text-sm font-medium text-link-text hover:text-link-hover-bg -ml-px"
      >
        {i18n.language === 'en' ? 'EN' : 'UA'}
      </button>
    </div>
  );
};
