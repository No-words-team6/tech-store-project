import { GridContainer } from '@/components/GridContainer';
import { PaddingContainer } from '@/components/PaddingContainer';
import { WidthContainer } from '@/components/WidthContainer';
import { useProductStore } from '@/stores/productStore';
import { useState } from 'react';
import type { Product } from '@/types';
import { SliderComparison } from './components/SliderComparison';
import { CardComparison } from './components/CardComparison';

export const ComparisonPage = () => {
  const [choosedProdId1, setChoosedProdId1] = useState('');
  const [choosedProdId2, setChoosedProdId2] = useState('');
  const [choosedProdId3, setChoosedProdId3] = useState('');

  const products = useProductStore((state) => state.products);

  const findProd = (choosedProdId: Product['itemId']): Product | undefined => {
    return choosedProdId ?
        products.find((product) => product.itemId === choosedProdId)
      : undefined;
  };

  const product1 = findProd(choosedProdId1);
  const product2 = findProd(choosedProdId2);
  const product3 = findProd(choosedProdId3);

  return (
    <WidthContainer>
      <PaddingContainer>
        <GridContainer>
          <div className="col-span-24 flex justify-between">
            <SliderComparison
              products={products}
              choosedProdId={choosedProdId1}
              onProdIdChange={setChoosedProdId1}
            />

            <SliderComparison
              products={products}
              choosedProdId={choosedProdId2}
              onProdIdChange={setChoosedProdId2}
            />

            <SliderComparison
              products={products}
              choosedProdId={choosedProdId3}
              onProdIdChange={setChoosedProdId3}
            />
          </div>

          <div className="col-span-24 flex justify-between">
            <CardComparison product={product1} />
            <CardComparison product={product2} />
            <CardComparison product={product3} />
          </div>
        </GridContainer>
      </PaddingContainer>
    </WidthContainer>
  );
};
