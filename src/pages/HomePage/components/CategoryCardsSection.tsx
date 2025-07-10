import { useProductStore } from '@/stores/productStore';
import { getCategoryCounts } from '@/utils/getCategoryCounts';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';

import phonesCaregory from '../../../../public/img/category-phones.webp';
import tabletsCaregory from '../../../../public/img/category-tablets.png';
import accessoriesCaregory from '../../../../public/img/category-accessories.png';

export const CategoryCardsSection = () => {
  const products = useProductStore((state) => state.products);

  const { phonesCount, tabletsCount, accessoriesCount } = useMemo(
    () => getCategoryCounts(products),
    [products],
  );
  return (
    <section className="col-span-24 grid grid-cols-24 gap-x-[16px] gap-y-[24px]">
      <h2 className="col-span-12 color-white font-mont font-bold text-[32px]">
        Shop by category
      </h2>

      <div className="col-span-24 grid grid-cols-24 gap-[16px]">
        <Link to="/phones" className="col-span-8">
          <div className="h-[368px] phones-category relative overflow-hidden">
            <img
              src={phonesCaregory}
              alt="phones"
              className="absolute bottom-0 right-0 h-[100%] object-contain translate-x-1/4 translate-y-1/4"
            />
          </div>

          <h3 className="color-white font-mont font-semibold text-[20px]">
            Mobile phones
          </h3>

          <p className="font-mont text-gray-500 font-regular text-[14px]">{`${phonesCount} models`}</p>
        </Link>

        <Link to="/tablets" className="col-span-8">
          <div className="h-[368px] tablets-category relative overflow-hidden">
            <img
              src={tabletsCaregory}
              alt="tablets"
              className="absolute bottom-0 right-0 h-[100%] object-contain translate-x-1/4 translate-y-1/4"
            />
          </div>

          <h3 className="color-white font-mont font-semibold text-[20px]">
            Tablets
          </h3>
          <p className="font-mont text-gray-500 font-regular text-[14px]">{`${tabletsCount} models`}</p>
        </Link>

        <Link to="/accessories" className="col-span-8">
          <div className="h-[368px] accessories-category relative overflow-hidden">
            <img
              src={accessoriesCaregory}
              alt="accessories"
              className="absolute bottom-0 right-0 h-[100%] object-contain translate-x-1/4 translate-y-1/4"
            />
          </div>

          <h3 className="color-white font-mont font-semibold text-[20px]">
            Accessories
          </h3>

          <p className="font-mont text-gray-500 font-regular text-[14px]">{`${accessoriesCount} models`}</p>
        </Link>
      </div>
    </section>
  );
};
