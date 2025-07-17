import { useThemeStore } from '@/hooks/useThemeStore';
import { useProductStore } from '@/stores/productStore';
import { useEffect, useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
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
    const newLang = i18n.language === 'en' ? 'uk' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="hidden sm:flex items-center">
      <button
        onClick={handleClick}
        className="h-16 w-16 flex items-center justify-center group border border-[#E2E6E9] dark:border-[#323542] transition-colors"
      >
        {isDark ?
          <EyeOff className="text-link-text group-hover:text-link-hover-bg" />
        : <Eye className="text-link-text group-hover:text-link-hover-bg" />}
      </button>

      <button
        onClick={toggleLanguage}
        className="h-16 w-16 flex items-center justify-center group border-t border-b border-r border-[#E2E6E9] dark:border-[#323542] transition-colors text-sm font-medium text-link-text hover:text-link-hover-bg -ml-px"
      >
        {i18n.language === 'en' ? 'EN' : 'UK'}
      </button>
    </div>
  );
};
