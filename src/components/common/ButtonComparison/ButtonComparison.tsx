import { Button } from '@/components/ui/button';
import { useCastomNavigator } from '@/hooks/useCastomNavigator';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

export const ButtonComparison = () => {
  const { t } = useTranslation();

  const navigation = useCastomNavigator();
  const category = useLocation().pathname.split('/')[1];

  return (
    <div className="col-span-4 sm:col-span-6 xl:col-span-3 mt-4 sm:mt-0 order-last sm:order-2 xl:order-last">
      <p className="font-mont text-xs text-[#919a9e] dark:text-[#75767F]">
        {t('comparison')}
      </p>
      <Button
        onClick={() => navigation(`/${category}/catalog/comparison`)}
        className="flex items-center text-link-hover-bg dark:text-dark-link-hover-bg
            bg-white border border-[#B4BDC3] dark:border-none
            dark:bg-gray-700 h-9 px-3 py-2 rounded-none hover:bg-gray-200 dark:hover:bg-gray-600 hover:cursor-pointer w-full"
      >
        {t('compare')}
      </Button>
    </div>
  );
};
