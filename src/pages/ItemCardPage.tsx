import { getProductById } from '@/api';
import { Loader } from '@/components/Loader';
import type { Category, Item } from '@/types';
import cn from 'classnames';
import { Heart } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const ItemCardPage = () => {
  const location = useLocation();

  const pathParts = location.pathname.split('/');
  const category = pathParts[1] as Category;
  const itemId = pathParts[2];

  const [item, setItem] = useState<Item | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  useEffect(() => {
    setItem(null);

    if (!category || !itemId) {
      return;
    }

    setIsLoading(true);
    getProductById(category, itemId)
      .then((data) => {
        if (data?.images?.length) {
          setSelectedPhoto(data.images[0]);
        }
        setItem(data);
      })
      .catch(() => {
        setItem(null);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [itemId, category]);

  const photoSet: string[] = item?.images || [];

  return (
    <div className="back-color flex-grow flex flex-col gap-y-10">
      {isLoading && !item && (
        <div className="flex justify-center">
          <Loader />
        </div>
      )}

      {!isLoading && item && (
        <div className="ml-38 flex flex-col gap-y-10">
          <p className="text-gray-100 font-bold mt-6 cursor-pointer">
            Navigation
          </p>

          <div className="">
            <p className="text-gray-100 font-bold mb-4 cursor-pointer">Back</p>

            <h1 className="font-mont font-bold text-white  text-4xl">
              {item.name}
            </h1>
          </div>

          <div className="grid grid-cols-2 gap-x-16">
            <div className="flex gap-x-[16px]">
              <div className="flex flex-col gap-y-[16px]">
                {photoSet.map((photo) => {
                  const isThisPhotoCurrent = selectedPhoto === photo;

                  return (
                    <div
                      key={photo}
                      onClick={() => {
                        setSelectedPhoto(photo);
                      }}
                    >
                      <img
                        src={`/${photo}`}
                        alt={item.name}
                        className={cn(
                          'w-[80px]',
                          'h-[80px]',
                          'object-contain',
                          'border',
                          { 'border-gray-600': !isThisPhotoCurrent },
                        )}
                      />
                    </div>
                  );
                })}
              </div>
              <div className="w-[464px] h-[464px] flex justify-center items-center">
                <img
                  src={`/${selectedPhoto}`}
                  alt={item.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>

            <div className="flex flex-col gap-y-8">
              <div className="flex flex-col gap-y-6">
                <div className="text-xs font-bold text-[#75767F] ">
                  <p>Available colors</p>
                  <div className="flex gap-2 mt-2">
                    <div className="w-[30px] h-[30px] rounded-full bg-gray-400 cursor-pointer"></div>
                    <div className="w-[30px] h-[30px] rounded-full bg-white border cursor-pointer"></div>
                    <div className="w-[30px] h-[30px] rounded-full bg-black cursor-pointer"></div>
                  </div>
                </div>

                <hr className="w-80 border-t border-[#3B3E4A]" />

                <div className="text-xs font-bold text-[#75767F] ">
                  <p>Select capacity</p>
                  <div className="flex gap-2 mt-2">
                    <div className="w-14 h-8 bg-[#F1F2F9] text-sm text-[#0F1121] flex items-center justify-center">
                      64 GB
                    </div>
                    <div className="w-14 h-8 border border-[#4A4D58] text-sm text-[#F1F2F9] flex items-center justify-center">
                      256 GB
                    </div>
                    <div className="w-14 h-8 border border-[#4A4D58] text-sm text-[#F1F2F9] flex items-center justify-center">
                      512 GB
                    </div>
                  </div>
                </div>
                <hr className="w-80 border-t border-[#3B3E4A]" />
              </div>

              <div className="flex flex-col gap-y-4">
                <div className="flex gap-2 items-center">
                  <p className="text-[#F1F2F9] text-[32px] font-extrabold">
                    ${item.priceDiscount}
                  </p>
                  <p className="text-[#75767F] line-through text-[22px]">
                    ${item.priceRegular}
                  </p>
                </div>

                <div className="w-80 flex justify-between">
                  <button className="bg-[#905BFF] text-[#F1F2F9] w-[263px] h-[48px] text-sm font-bold hover:bg-[#A378FF] hover:cursor-pointer">
                    Add to cart
                  </button>

                  <button className="w-12 h-12 bg-[#323542] hover:bg-[#4A4D58] flex items-center justify-center hover:cursor-pointer">
                    <Heart color="white" className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="w-80 text-xs text-[#75767F] font-bold ">
                <div className="pb-2 flex justify-between">
                  <span>Screen</span>

                  <span className="text-[#F1F2F9]">{item.screen}</span>
                </div>

                <div className="pb-2 flex justify-between">
                  <span>Resolution</span>

                  <span className="text-[#F1F2F9]">{item.resolution}</span>
                </div>

                <div className="pb-2 flex justify-between">
                  <span>Processor</span>

                  <span className="text-[#F1F2F9]">{item.processor}</span>
                </div>

                <div className="pb-2 flex justify-between">
                  <span>RAM</span>

                  <span className="text-[#F1F2F9]">{item.ram}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
