import { BreadcrumbNav } from '@/components/BreadcrumbNav';
import { ProductCard } from '@/components/ProductCard';
import { Heart } from 'lucide-react';

export const FavouritesPage = () => {
  const products = [];

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);

    if (key !== null) {
      const product = localStorage.getItem(key);

      if (product !== null) {
        products.push(JSON.parse(product));
      }
    }
  }

  return (
    <div className="col-span-24 grid grid-cols-24 gap-x-[16px] pt-[24px] pb-[80px]">
      <BreadcrumbNav />

      <div className="col-span-24 grid grid-cols-24 gap-x-[16px] gap-y-[24px]">
        <h1 className="col-span-24 color-white font-mont font-bold text-5xl">
          Favourites
          <div className="col-span-24 grid grid-cols-24 gap-x-[16px] gap-y-[40px]">
            {products.length === 0 && (
              <div className="col-span-24">
                <p className="font-light text-2xl">
                  You don`t have any favorites things.
                </p>
                <p className="flex font-extralight text-xs">
                  If you wont to choose someon, you can just click to{' '}
                  <Heart className="w-3 h-3" />
                </p>
              </div>
            )}

            {products.map((product) => (
              <div className="col-span-6" key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </h1>
      </div>
    </div>
  );
};
