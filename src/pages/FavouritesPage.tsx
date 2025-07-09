import { BreadcrumbNav } from '@/components/BreadcrumbNav';
import { ProductCard } from '@/components/ProductCard';
import type { Product } from '@/types';
import { getFromLocale } from '@/utils/storageService';

export const FavouritesPage = () => {
  const products: Product[] = getFromLocale('favourites');
  const productsLength = products.length;

  return (
    <>
      <BreadcrumbNav />

      <div className="col-span-24 grid gap-y-[24px]">
        <h1 className="col-span-24 color-white font-mont font-bold text-5xl">
          Favourites
        </h1>

        <p className="col-span-24 font-extralight text-[14px] text-gray-600">
          {productsLength} items
        </p>

        <div className="col-span-24 grid grid-cols-24 gap-x-[16px] gap-y-[40px]">
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
