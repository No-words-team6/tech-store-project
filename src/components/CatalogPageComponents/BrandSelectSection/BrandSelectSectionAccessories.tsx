import type React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export interface BrandItem {
  key: string;
  image: string;
}

interface Props {
  brandImageSources: BrandItem[];
}

export const BrandSelectSectionAccessories: React.FC<Props> = ({
  brandImageSources,
}) => {
  const { t } = useTranslation();

  return (
    <div className="w-full max-w-[1200px] mx-auto pt-[20px] pb-[80px] font-mont text-white">
      <section className=" grid grid-cols-4 sm:grid-cols-12 xl:grid-cols-24 mx-4 sm:mx-6 lg:mx-8 xl:mx-auto col-span-4 sm:col-span-12 xl:col-span-24 gap-x-[16px] gap-y-[24px]">
        <div className="col-span-4 sm:col-span-12 xl:col-span-24 flex justify-between items-center w-full mb-6 pt-10 sm:pt-30 lg:pt-0 xl:pt-0">
          <h2 className="font-mont font-bold text-[22px] sm:text-[32px]">
            {t('choose-brand')}
          </h2>
        </div>

        <div className="col-span-4 sm:col-span-12 xl:col-span-24 grid grid-cols-1 sm:grid-cols-12 xl:grid-cols-24 gap-[16px]">
          <Link
            to={`catalog`}
            className="col-span-1 sm:col-span-6 xl:col-span-12 group cursor-pointer"
          >
            <div className="h-[66px] sm:h-[187px] xl:h-[200px] bg-gray-500 dark:bg-[#5d3ba5] relative overflow-hidden transition duration-1000 group-hover:shadow-[0_0px_14px_#6A7282] dark:group-hover:shadow-[0_0px_14px_#905BFF] pl-4">
              <h3 className="z-1 font-mont text-white tracking-tighter leading-none text-[70px] sm:text-[60px] xl:text-[100px] whitespace-nowrap sm:translate-y-4/2 xl:translate-y-1/1">
                {t('choose-all')}
              </h3>
            </div>
          </Link>

          {brandImageSources.map(({ key, image }) => {
            return (
              <Link
                to={`catalog?brand=${key}`}
                key={key}
                className="col-span-1 sm:col-span-6 xl:col-span-12 group cursor-pointer"
              >
                <div className="h-[66px] sm:h-[187px] xl:h-[200px] bg-gray-500 dark:bg-[#5d3ba5] relative overflow-hidden transition duration-1000 group-hover:shadow-[0_0px_14px_#6A7282] dark:group-hover:shadow-[0_0px_14px_#905BFF] pl-4">
                  <div className="flex">
                    <h3 className="z-1 font-mont text-white tracking-tighter leading-none text-[70px] sm:text-[60px] xl:text-[100px] whitespace-nowrap sm:translate-y-4/2 xl:translate-y-1/1">
                      {key}
                    </h3>
                  </div>

                  <img
                    src={image}
                    alt={key}
                    className="z-0 absolute bottom-0 right-0 object-contain translate-x-1/2 translate-y-1/2 scale-100 transition duration-1000 group-hover:scale-115"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
};
