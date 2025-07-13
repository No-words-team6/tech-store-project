import { GridContainer } from '@/components/GridContainer';
import { PaddingContainer } from '@/components/PaddingContainer';
import { WidthContainer } from '@/components/WidthContainer';
import type React from 'react';
import { Link } from 'react-router-dom';

interface BrandImageSources {
  apple: string;
  samsung: string;
  xiaomi: string;
}

interface Props {
  brandImageSources: BrandImageSources;
}

export const BrandSelectSection: React.FC<Props> = ({ brandImageSources }) => {
  return (
    <WidthContainer>
      <PaddingContainer>
        <GridContainer>
          <section className="col-span-4 sm:col-span-12 xl:col-span-24 grid grid-cols-4 sm:grid-cols-12 xl:grid-cols-24 gap-x-[16px] gap-y-[24px]">
            <div className="col-span-4 sm:col-span-12 xl:col-span-24 flex justify-between items-center w-full mb-6">
              <h2 className="color-white font-mont font-extrabold text-[22px] sm:text-[32px]">
                Choose your brand
              </h2>
              <h2 className="color-white font-mont font-extrabold text-[22px] sm:text-[32px] text-right">
                Or discover all devices
              </h2>
            </div>

            <div className="col-span-4 sm:col-span-12 xl:col-span-24 grid grid-cols-4 sm:grid-cols-12 xl:grid-cols-24 gap-[16px]">
              <Link
                to="/phones"
                className="col-span-4 sm:col-span-4 xl:col-span-8 group"
              >
                <div className="h-[288px] sm:h-[187px] xl:h-[368px] phones-category relative overflow-hidden transition duration-1000 group-hover:shadow-[0_0_14px_#6D6474]">
                  <img
                    src={brandImageSources.apple}
                    alt="phones"
                    className="absolute bottom-0 right-0 object-contain translate-x-1/3 translate-y-2/7 transition duration-1000 group-hover:scale-115"
                  />
                </div>

                <h3 className="color-white font-mont font-semibold text-[20px]">
                  Apple
                </h3>
              </Link>

              <Link
                to="/tablets"
                className="col-span-4 sm:col-span-4 xl:col-span-8 group"
              >
                <div className="h-[288px] sm:h-[187px] xl:h-[368px] tablets-category relative overflow-hidden transition duration-1000 group-hover:shadow-[0_0px_14px_#75767F]">
                  <img
                    src={brandImageSources.samsung}
                    alt="tablets"
                    className="absolute bottom-0 right-0 object-contain translate-x-1/2 translate-y-1/2 scale-150 transition duration-1000 group-hover:scale-165"
                  />
                </div>

                <h3 className="color-white font-mont font-semibold text-[20px]">
                  Samsung
                </h3>
              </Link>

              <Link
                to="/accessories"
                className="col-span-4 sm:col-span-4 xl:col-span-8 group"
              >
                <div className="h-[288px] sm:h-[187px] xl:h-[368px] accessories-category relative overflow-hidden transition duration-1000 group-hover:shadow-[0_0px_14px_#D53C51]">
                  <img
                    src={brandImageSources.xiaomi}
                    alt="accessories"
                    className="absolute bottom-0 right-0 object-contain translate-x-1/4 translate-y-3/9 scale-80 transition duration-1000 group-hover:scale-90"
                  />
                </div>

                <h3 className="color-white font-mont font-semibold text-[20px]">
                  Xiaomi
                </h3>
              </Link>
            </div>
          </section>
        </GridContainer>
      </PaddingContainer>
    </WidthContainer>
  );
};
