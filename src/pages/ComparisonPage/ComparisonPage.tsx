import { GridContainer } from '@/components/GridContainer';
import { PaddingContainer } from '@/components/PaddingContainer';
import { WidthContainer } from '@/components/WidthContainer';
import { useProductStore } from '@/stores/productStore';
import { useEffect, useState } from 'react';
import { SliderComparison } from './components/SliderComparison';
import { CardComparison } from './components/CardComparison';
import { findProduct } from '@/utils/findProduct';
import { useScreenWidth } from '@/hooks/useScreenWidth';
import { NavBack } from '@/components/common/NavBack';
import { Loader } from '@/components/common/Loader';

export const ComparisonPage = () => {
  const products = useProductStore((state) => state.products);
  const isLoading = useProductStore((state) => state.isLoading);
  const fetchAllProducts = useProductStore((state) => state.fetchAllProducts);

  const [choosedProdId1, setChoosedProdId1] = useState('');
  const [choosedProdId2, setChoosedProdId2] = useState('');
  const [choosedProdId3, setChoosedProdId3] = useState('');

  const width = useScreenWidth();

  useEffect(() => {
    if (products.length === 0) {
      fetchAllProducts();
    }
  }, []);

  useEffect(() => {
    if (products.length >= 3) {
      setChoosedProdId1(products[0].itemId);
      setChoosedProdId2(products[1].itemId);
      setChoosedProdId3(products[2].itemId);
    }
  }, [products]);

  if (isLoading || products.length < 3) {
    return (
      <div className="text-center p-10">
        <Loader />
      </div>
    );
  }

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
          <NavBack />

          {width < 680 ?
            <>
              <div className="col-span-4 sm:col-span-12 xl:col-span-24 grid grid-cols-4 gap-x-3">
                <div className="col-span-2">
                  <SliderComparison
                    products={products}
                    choosedProdId={choosedProdId1}
                    onProdIdChange={setChoosedProdId1}
                    choosedItemIds={choosedItemIds}
                  />
                </div>

                <div className="col-start-3 col-end-5">
                  <SliderComparison
                    products={products}
                    choosedProdId={choosedProdId2}
                    onProdIdChange={setChoosedProdId2}
                    choosedItemIds={choosedItemIds}
                  />
                </div>
              </div>

              <div className="col-span-4 sm:col-span-12 xl:col-span-24 grid  grid-cols-4 gap-x-3">
                <div className="col-span-2">
                  <CardComparison product={product1} />
                </div>

                <div className="col-start-3 col-end-5">
                  <CardComparison product={product2} />
                </div>
              </div>
            </>
          : <>
              <div className="col-span-4 sm:col-span-12 xl:col-span-24 grid sm:grid-cols-9 xl:grid-cols-12 gap-x-3">
                <div className="sm:col-span-3 xl:col-span-4">
                  <SliderComparison
                    products={products}
                    choosedProdId={choosedProdId1}
                    onProdIdChange={setChoosedProdId1}
                    choosedItemIds={choosedItemIds}
                  />
                </div>

                <div className="sm:col-start-4 sm:col-end-7 xl:col-start-5 xl:col-end-9">
                  <SliderComparison
                    products={products}
                    choosedProdId={choosedProdId2}
                    onProdIdChange={setChoosedProdId2}
                    choosedItemIds={choosedItemIds}
                  />
                </div>

                <div className="sm:col-start-7 sm:col-end-10 xl:col-start-9 xl:col-end-13">
                  <SliderComparison
                    products={products}
                    choosedProdId={choosedProdId3}
                    onProdIdChange={setChoosedProdId3}
                    choosedItemIds={choosedItemIds}
                  />
                </div>
              </div>

              <div className="col-span-4 sm:col-span-12 xl:col-span-24 grid sm:grid-cols-9 xl:grid-cols-12 gap-x-3">
                <div className="sm:col-span-3 xl:col-span-4">
                  <CardComparison product={product1} />
                </div>

                <div className="sm:col-start-4 sm:col-end-7 xl:col-start-5 xl:col-end-9">
                  <CardComparison product={product2} />
                </div>

                <div className="sm:col-start-7 sm:col-end-10 xl:col-start-9 xl:col-end-13">
                  <CardComparison product={product3} />
                </div>
              </div>
            </>
          }
        </GridContainer>
      </PaddingContainer>
    </WidthContainer>
  );
};
