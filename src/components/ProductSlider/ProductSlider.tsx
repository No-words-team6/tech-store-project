import type { Product } from '@/types';
import type React from 'react';
import { ProductCard } from '../ProductCard';
import { Loader } from '../Loader';
import { ButtonSwipe } from '../ButtonSwipe';

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

        <ButtonSwipe />
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
