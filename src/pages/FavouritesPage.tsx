import { BreadcrumbNav } from '@/components/BreadcrumbNav';
import { ProductCard } from '@/components/ProductCard';
import type { Product } from '@/types';
import { getFromLocale } from '@/utils/storageService';
import { useEffect, useState } from 'react';

import placeholder from '../../public/img/placeholder-angry-heart.png';

export const FavouritesPage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const favs = getFromLocale('favourites');
    setProducts(favs);
  }, []);

  const productsLength = products.length;

  return (
    <>
      <BreadcrumbNav />

      <div className="col-span-24 grid">
        <h1 className="col-span-24 color-white font-mont font-bold text-5xl mb-6">
          Favourites
        </h1>

        <p className="col-span-24 font-extralight text-[14px] text-[#75767F]">
          {productsLength} items
        </p>

        {!productsLength && (
          <div className="col-span-24 grid grid-cols-24 place-items-center">
            <img
              src={placeholder}
              alt="empty bag"
              className="col-span-4 col-start-11"
            />

            <h2 className="col-span-6 col-start-10 font-mont text-[#515151] mt-[-20px]">
              You don&apos;t have any favourite items :(
            </h2>
          </div>
        )}

        <div className="col-span-24 grid grid-cols-24 gap-x-[16px] gap-y-[40px] mt-6">
          {products.map((product) => (
            <div className="col-span-6" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
