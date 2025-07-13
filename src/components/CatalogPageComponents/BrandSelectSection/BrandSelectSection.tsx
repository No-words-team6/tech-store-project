import type React from 'react';
import { Link } from 'react-router-dom';

export interface BrandItem {
  key: string;
  image: string;
}

interface Props {
  brandImageSources: BrandItem[];
}

export const BrandSelectSection: React.FC<Props> = ({ brandImageSources }) => {
  return (
    <div className="w-full max-w-[1200px] mx-auto pt-[24px] pb-[80px]">
      <div className="grid grid-cols-4 sm:grid-cols-12 xl:grid-cols-24 mx-4 sm:mx-6 lg:mx-8 xl:mx-auto">
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
            {brandImageSources.map(({ key, image }) => {
              return (
                <Link
                  key={key}
                  to="/phones"
                  className="col-span-4 sm:col-span-4 xl:col-span-8 group"
                >
                  <div className="h-[288px] sm:h-[187px] xl:h-[368px] accessories-category relative overflow-hidden transition duration-1000 group-hover:shadow-[0_0px_14px_#D53C51]">
                    <img
                      src={image}
                      alt={key}
                      className="absolute bottom-0 right-0 object-contain translate-x-1/2 translate-y-1/2 scale-150 transition duration-1000 group-hover:scale-165"
                    />
                  </div>

                  <h3 className="color-white font-mont font-semibold text-[20px]">
                    {key}
                  </h3>
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};
