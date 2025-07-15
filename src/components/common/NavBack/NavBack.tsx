import { ChevronLeft } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const NavBack = () => {
  const { state } = useLocation();
  const { t } = useTranslation();

  return (
    <Link
      to={{
        pathname: state?.previousPage || '/',
        search: state?.search || '',
      }}
      className="flex gap-x-[4px] col-span-4 sm:col-span-12 xl:col-span-24 text-gray-100 font-bold cursor-pointer mb-[16px]"
    >
      <ChevronLeft className="w-[16px] h-[16px]" />
      <p className="font-mont text-xs">{t('back')}</p>
    </Link>
  );
};
