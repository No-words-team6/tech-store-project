import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const ButtonCheckCategory = () => {
  const { t } = useTranslation();

  const handleOnClick = () => {
    const element = document.getElementById(
      'catalogPageRecomendationsSectionId',
    );
    if (!element) {
      return;
    }

    const component = element.getBoundingClientRect();
    const componentCenterY = component.top + component.height / 2;
    const scrollY = window.scrollY + componentCenterY - window.innerHeight / 2;

    window.scrollTo({
      top: scrollY,
      behavior: 'smooth',
    });
  };

  return (
    <button
      id="buttonCheckCategoryId"
      className="
        absolute left-1/2 top-[80%] transform -translate-x-1/2 -translate-y-1/2
        px-8 py-3 rounded-full
      bg-black/30 backdrop-blur-md
        w-[65%] sm:w-auto
      text-white font-bold text-[16px] sm:text-xl
        shadow-lg border border-white
        flex items-center justify-center gap-2
      hover:bg-white/50 dark:hover:bg-black/50 hover:scale-105
        z-11
        opacity-0
        animate-slide-up"
      onClick={handleOnClick}
    >
      <span>{t('browse-categories')}</span>

      <ChevronDown className="h-4 sm:h-7 w-4 sm:w-7" />
    </button>
  );
};
