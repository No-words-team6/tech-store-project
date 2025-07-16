import { create } from 'zustand';

interface ThemeStore {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
  isDark:
    typeof window !== 'undefined' ?
      document.documentElement.classList.contains('dark') ||
      window.matchMedia('(prefers-color-scheme: dark)').matches
    : false,
  setIsDark: (value) => {
    set({ isDark: value });
    document.documentElement.classList.toggle('dark', value);
  },
  toggleTheme: () => {
    set((state) => {
      const next = !state.isDark;
      document.documentElement.classList.toggle('dark', next);
      return { isDark: next };
    });
  },
}));
