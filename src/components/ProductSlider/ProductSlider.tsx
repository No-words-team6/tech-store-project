import type { Product } from '@/types';
import type React from 'react';
import { ProductCard } from '../ProductCard';
import { Loader } from '../Loader';

interface Props {
  productList: Product[];
  isLoading: boolean;
}

export const ProductSlider: React.FC<Props> = ({ productList, isLoading }) => {
  return (
    <section className="col-span-24 grid grid-cols-24 gap-x-[16px] gap-y-[24px]">
      <div className="col-span-24 grid grid-cols-24 gap-x-[16px]">
        <h2 className="color-white font-mont font-bold text-[32px] col-span-12">
          Brand new models
        </h2>

        <button className="col-start-23 col-span-1 button-color text-white">
          ←
        </button>
        <button className="col-start-24 col-span-1 button-color text-white">
          →
        </button>
      </div>

      {isLoading && <Loader />}
      <div className="col-span-24 grid grid-cols-24 gap-[16px]">
        {productList.map((product) => (
          <div key={product.id} className="col-span-6">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};
