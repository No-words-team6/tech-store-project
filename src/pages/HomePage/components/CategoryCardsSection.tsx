import { useProductStore } from '@/stores/productStore';
import { getCategoryCounts } from '@/utils/getCategoryCounts';
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

import phonesCaregory from '../../../../public/img/category-phones.png';
import tabletsCaregory from '../../../../public/img/category-tablets.png';
import accessoriesCaregory from '../../../../public/img/category-accessories.webp';
import { useTranslation } from 'react-i18next';

export const CategoryCardsSection: React.FC = () => {
  const products = useProductStore((state) => state.products);

  const { t } = useTranslation();

  const { phonesCount, tabletsCount, accessoriesCount } = useMemo(
    () => getCategoryCounts(products),
    [products],
  );
  return (
    <section className="col-span-4 sm:col-span-12 xl:col-span-24 grid grid-cols-4 sm:grid-cols-12 xl:grid-cols-24 gap-x-[16px] gap-y-[24px]">
      <h2 className="col-span-2 sm:col-span-6 xl:col-span-12 color-white font-mont font-extrabold text-[22px] sm:text-[32px]">
        {t('category')}
      </h2>

      <div className="col-span-4 sm:col-span-12 xl:col-span-24 grid grid-cols-4 sm:grid-cols-12 xl:grid-cols-24 gap-[16px]">
        <Link
          to="/phones"
          className="col-span-4 sm:col-span-4 xl:col-span-8 group"
        >
          <div className="h-[288px] sm:h-[187px] xl:h-[368px] phones-category relative overflow-hidden transition duration-1000 group-hover:shadow-[0_0_14px_#6D6474]">
            <img
              src={phonesCaregory}
              alt="phones"
              className="absolute bottom-0 right-0 object-contain translate-x-1/3 translate-y-2/7 transition duration-1000 group-hover:scale-115"
            />
          </div>

          <h3 className="color-white font-mont font-semibold text-[20px]">
            {t('mobile-phones')}
          </h3>

          <p className="font-mont text-gray-500 font-regular text-[14px]">{`${phonesCount} ${t('models')}`}</p>
        </Link>

        <Link
          to="/tablets"
          className="col-span-4 sm:col-span-4 xl:col-span-8 group"
        >
          <div className="h-[288px] sm:h-[187px] xl:h-[368px] tablets-category relative overflow-hidden transition duration-1000 group-hover:shadow-[0_0px_14px_#75767F]">
            <img
              src={tabletsCaregory}
              alt="tablets"
              className="absolute bottom-0 right-0 object-contain translate-x-1/2 translate-y-1/2 scale-150 transition duration-1000 group-hover:scale-165"
            />
          </div>

          <h3 className="color-white font-mont font-semibold text-[20px]">
            {t('tablets')}
          </h3>
          <p className="font-mont text-gray-500 font-regular text-[14px]">{`${tabletsCount} ${t('models')}`}</p>
        </Link>

        <Link
          to="/accessories"
          className="col-span-4 sm:col-span-4 xl:col-span-8 group"
        >
          <div className="h-[288px] sm:h-[187px] xl:h-[368px] accessories-category relative overflow-hidden transition duration-1000 group-hover:shadow-[0_0px_14px_#D53C51]">
            <img
              src={accessoriesCaregory}
              alt="accessories"
              className="absolute bottom-0 right-0 object-contain translate-x-1/4 translate-y-3/9 scale-80 transition duration-1000 group-hover:scale-90"
            />
          </div>

          <h3 className="color-white font-mont font-semibold text-[20px]">
            {t('accessories')}
          </h3>

          <p className="font-mont text-gray-500 font-regular text-[14px]">{`${accessoriesCount} ${t('models')}`}</p>
        </Link>
      </div>
    </section>
  );
};
