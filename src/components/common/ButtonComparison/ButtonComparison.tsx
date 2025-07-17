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
      <p className="font-mont text-xs text-drop-description-text-color">
        {t('comparison')}
      </p>
      <Button
        onClick={() => navigation(`/${category}/catalog/comparison`)}
        className="flex items-center 
            text-button-omparison-text-color
            bg-button-omparison-bg hover:bg-button-omparison-bg-hover
            border-2 border-button-omparison-border hover:border-button-omparison-border-hover
            hover:cursor-pointer w-full"
      >
        {t('compare')}
      </Button>
    </div>
  );
};
