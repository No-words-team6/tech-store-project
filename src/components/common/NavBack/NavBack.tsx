import { ChevronLeft } from 'lucide-react';
import type React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

interface Props {
  to: string;
}

export const NavBack: React.FC<Props> = ({ to }) => {
  const { state } = useLocation();
  const { t } = useTranslation();

  return (
    <Link
      to={{
        pathname: `/${to}`,
        search: state?.search,
      }}
      className="flex gap-x-[4px] col-span-4 sm:col-span-12 xl:col-span-24 text-gray-100 font-bold cursor-pointer mb-[16px]"
    >
      <ChevronLeft className="w-[16px] h-[16px]" />
      <p className="font-mont text-xs">{t('back')}</p>
    </Link>
  );
};
