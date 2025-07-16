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
        px-8 py-3 rounded-xl
        bg-white/30 backdrop-blur-md
        text-black font-bold text-xl
        shadow-lg border 
        flex items-center gap-2
        hover:bg-white/50 hover:scale-105
        z-11
        opacity-0
        animate-slide-up"
      onClick={handleOnClick}
    >
      <span>{t('browse-categories')}</span>

      <ChevronDown size={28} />
    </button>
  );
};
