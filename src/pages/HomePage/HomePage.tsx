import type { Product } from '@/types';

import phonesCaregory from '../../../public/img/category-phones.webp';
import tabletsCaregory from '../../../public/img/category-tablets.png';
import accessoriesCaregory from '../../../public/img/category-accessories.png';

import './homePage.css';
import { useEffect, useState } from 'react';
import { getNewestProducts } from '@/api';
import { Loader } from '@/components/Loader';
import { ProductCard } from '@/components/ProductCard';
import { Link } from 'react-router-dom';
import { ImageSlider } from '@/components/BannerSlider';

const latestProductYear = 2022;

const getNewestList = (data: Product[], year: number) => {
  return data.filter((product: Product) => product.year === year).slice(0, 4);
};

const getCheapest = (data: Product[]) => {
  return [...data]
    .sort(
      (product1: Product, product2: Product) => product1.price - product2.price,
    )
    .slice(0, 4);
};

export const HomePage = () => {
  const [data, setData] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    getNewestProducts()
      .then(setData)
      .finally(() => setIsLoading(false));
  }, []);

  const newModelsList = getNewestList(data, latestProductYear);
  const hotPricesList = getCheapest(data);

  const phonesCount = 95;
  const tabletsCount = 24;
  const accessoriesCount = 100;

  return (
    <div className="back-color flex-grow flex flex-col items-center gap-y-[80px] pt-[56px] pb-[80px]">
      <h1 className="color-white font-mont font-bold text-5xl">
        Welcome to Nice Gadgets store!
      </h1>

      <section className="">
        <div className="flex gap-x-[16px]">
          <button className="w-[32px] button-color text-white">←</button>
          <div className="w-[600px] max-w-full">
            <ImageSlider />
          </div>
          <button className="w-[32px] button-color text-white">→</button>
        </div>
      </section>

      <section className="flex flex-col gap-y-[24px]">
        <div className="flex items-center justify-between">
          <h2 className="color-white font-mont font-bold text-[32px]">
            Brand new models
          </h2>

          <div className="flex gap-x-[16px] h-[32px]">
            <button className="w-[32px] button-color text-white">←</button>
            <button className="w-[32px] button-color text-white">→</button>
          </div>
        </div>

        {isLoading && <Loader />}
        <div className="flex gap-x-[16px]">
          {newModelsList.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-y-[24px]">
        <h2 className="color-white font-mont font-bold text-[32px]">
          Shop by category
        </h2>

        <div className="flex gap-x-[16px]">
          <Link to="/phones">
            <div className="h-[368px] w-[368px] phones-category relative overflow-hidden">
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

          <Link to="/tablets">
            <div className="h-[368px] w-[368px] tablets-category relative overflow-hidden">
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

          <Link to="/accessories">
            <div className="h-[368px] w-[368px] accessories-category relative overflow-hidden">
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

      <section className="flex flex-col gap-y-[24px]">
        <div className="flex items-center justify-between">
          <h2 className="color-white font-mont font-bold text-[32px]">
            Hot prices
          </h2>

          <div className="flex gap-x-[16px] h-[32px]">
            <button className="w-[32px] button-color text-white">←</button>
            <button className="w-[32px] button-color text-white">→</button>
          </div>
        </div>

        {isLoading && <Loader />}
        <div className="flex gap-x-[16px]">
          {hotPricesList.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};
