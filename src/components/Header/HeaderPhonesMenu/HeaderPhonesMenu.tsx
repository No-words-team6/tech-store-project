import React from 'react';
import { Link } from 'react-router-dom';
import './headerMenu.css';
import { useTranslation } from 'react-i18next';

type Props = {
  type: 'phones' | 'tablets' | 'accessories';
};

const brands = ['Apple', 'Samsung', 'Xiaomi'];

export const HeaderPhonesMenu: React.FC<Props> = ({ type }) => {
  const { t } = useTranslation();

  return (
    <div
      className={`
    w-full min-w-[200px] p-4 
   animate-fade-in flex flex-col gap-2
  `}
    >
      <Link
        to={`/${type}`}
        className="text-link-hover-bg font-bold text-sm uppercase hover:underline transition-colors"
      >
        Nice Gadgets {type}
      </Link>

      <hr className="border-elements my-1 text-black dark:text-white" />

      {brands.map((brand) => (
        <Link
          key={brand}
          to={`/${type}/catalog?brand=${encodeURIComponent(brand)}&numberOfPage=1`}
          className="text-gray-600 dark:text-gray-300 text-sm font-semibold hover:text-link-hover-bg transition-colors"
        >
          {brand}
        </Link>
      ))}

      <hr className="border-elements my-1 text-black dark:text-white" />

      <Link
        to={`/${type}/catalog?numberOfPage=1`}
        className="text-black dark:text-white text-sm font-semibold hover:text-link-hover-bg transition-colors underline"
      >
        {t('choose-all')}
      </Link>
    </div>
  );
};
