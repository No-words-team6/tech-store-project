import type { Product } from '@/types';

import phonesCaregory from '../../../public/img/category-phones.webp';
import tabletsCaregory from '../../../public/img/category-tablets.png';
import accessoriesCaregory from '../../../public/img/category-accessories.png';
import SwiperCore from 'swiper';

import './homePage.css';
import { useEffect, useState } from 'react';
import { getProducts } from '@/api';
import { Link } from 'react-router-dom';
import { ProductSlider } from '@/components/ProductSlider';
import { ImageSlider } from '@/components/BannerSlider';
import { ChevronLeft, ChevronRight } from 'lucide-react';
const latestProductYear = 2022;

const getNewestList = (data: Product[], year: number, limit: number) => {
  return data
    .filter((product: Product) => product.year === year)
    .slice(0, limit);
};

const getCheapest = (data: Product[], limit: number) => {
  return [...data]
    .sort(
      (product1: Product, product2: Product) => product1.price - product2.price,
    )
    .slice(0, limit);
};

export const HomePage = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null);
  const [data, setData] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    getProducts()
      .then(setData)
      .finally(() => setIsLoading(false));
  }, []);

  const newModelsList = getNewestList(data, latestProductYear, 4);
  const hotPricesList = getCheapest(data, 4);

  const phonesCount = 95;
  const tabletsCount = 24;
  const accessoriesCount = 100;

  return (
    <div className="col-span-24 grid grid-cols-24 pt-[56px] pb-[80px] gap-x-[16px] gap-y-[80px]">
      <h1 className="col-span-24 color-white font-mont font-bold text-5xl">
        Welcome to Nice Gadgets store!
      </h1>

      <section className="col-span-24">
        <div className="grid grid-cols-24 gap-x-[16px] items-start">
          <button
            className="col-span-1 h-[400px] bg-[#323542] text-white flex items-center justify-center hover:bg-[#4B4E5A] transition"
            onClick={() => swiperInstance?.slideNext()}
          >
            <ChevronLeft />
          </button>

          <div className="col-span-22 w-full h-[432px]">
            <ImageSlider setSwiperInstance={setSwiperInstance} />
          </div>

          <button
            className="col-span-1 h-[400px] bg-[#323542] text-white flex items-center justify-center hover:bg-[#4B4E5A] transition"
            onClick={() => swiperInstance?.slidePrev()}
          >
            <ChevronRight />
          </button>
        </div>
      </section>

      <ProductSlider
        productList={newModelsList}
        isLoading={isLoading}
        title={'Brand new models'}
      />

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

      <ProductSlider
        productList={hotPricesList}
        isLoading={isLoading}
        title={'Hot prices'}
      />
    </div>
  );
};
