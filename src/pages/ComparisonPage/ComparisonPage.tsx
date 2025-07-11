import { GridContainer } from '@/components/GridContainer';
import { PaddingContainer } from '@/components/PaddingContainer';
import { WidthContainer } from '@/components/WidthContainer';
import { useProductStore } from '@/stores/productStore';
import { useState } from 'react';
import { SliderComparison } from './components/SliderComparison';
import { CardComparison } from './components/CardComparison';
import { findProduct } from '@/utils/findProduct';

export const ComparisonPage = () => {
  const [choosedProdId1, setChoosedProdId1] = useState('');
  const [choosedProdId2, setChoosedProdId2] = useState('');
  const [choosedProdId3, setChoosedProdId3] = useState('');

  const products = useProductStore((state) => state.products);

  const product1 = findProduct(choosedProdId1, products);
  const product2 = findProduct(choosedProdId2, products);
  const product3 = findProduct(choosedProdId3, products);

  const choosedItemIds = products
    .filter(
      (prod) =>
        prod.itemId === choosedProdId1 ||
        prod.itemId === choosedProdId2 ||
        prod.itemId === choosedProdId3,
    )
    .map((prod) => prod.itemId);

  return (
    <WidthContainer>
      <PaddingContainer>
        <GridContainer>
          <div className="col-span-24 flex justify-between">
            <SliderComparison
              products={products}
              choosedProdId={choosedProdId1}
              onProdIdChange={setChoosedProdId1}
              choosedItemIds={choosedItemIds}
            />

            <SliderComparison
              products={products}
              choosedProdId={choosedProdId2}
              onProdIdChange={setChoosedProdId2}
              choosedItemIds={choosedItemIds}
            />

            <SliderComparison
              products={products}
              choosedProdId={choosedProdId3}
              onProdIdChange={setChoosedProdId3}
              choosedItemIds={choosedItemIds}
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
