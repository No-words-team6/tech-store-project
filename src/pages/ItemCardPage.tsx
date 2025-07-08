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
    setIsLoading(true);

    if (!category || !itemId) {
      return;
    }

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
    <div className="back-color flex-grow flex flex-col gap-y-20">
      <div className="flex flex-col gap-y-10">
        {isLoading && !item && (
          <div className="flex justify-center mt-70">
            <Loader />
          </div>
        )}

        {!isLoading && item && (
          <div className="ml-38 mr-38 flex flex-col gap-y-10">
            <p className="text-gray-100 font-bold mt-6 cursor-pointer">
              Navigation
            </p>

            <div className="">
              <p className="text-gray-100 font-bold mb-4 cursor-pointer">
                Back
              </p>

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

              <div className="flex flex-col gap-y-8 w-80">
                <div className="flex flex-col gap-y-6">
                  <div className="text-xs font-bold text-[#75767F] ">
                    <p>Available colors</p>
                    <div className="flex gap-2 mt-2">
                      {item.colorsAvailable.map((color) => {
                        const isSelected = item.color === color;

                        return (
                          <div
                            key={color}
                            className={cn(
                              'w-8 h-8 rounded-full border-1 border-[#3B3E4A] flex items-center justify-center',
                              {
                                'border-[#F1F2F9]': isSelected,
                              },
                            )}
                          >
                            <div
                              className="w-[30px] h-[30px] rounded-full cursor-pointer"
                              style={{ backgroundColor: color }}
                            ></div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <hr className="w-full border-t border-[#3B3E4A]" />

                  <div className="text-xs font-bold text-[#75767F] ">
                    <p>Select capacity</p>
                    <div className="flex gap-2 mt-2">
                      {item.capacityAvailable.map((capacity) => {
                        const isSelected = item.capacity === capacity;

                        return (
                          <div
                            key={capacity}
                            className={cn(
                              'w-14 h-8 border border-[#4A4D58] text-sm flex items-center justify-center cursor-pointer',
                              {
                                'bg-[#F1F2F9] text-[#0F1121]': isSelected,
                                'text-[#F1F2F9]': !isSelected,
                              },
                            )}
                          >
                            {capacity}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <hr className="w-full border-t border-[#3B3E4A]" />
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

                  <div className="flex justify-between">
                    <button className="bg-[#905BFF] text-[#F1F2F9] w-[263px] h-[48px] text-sm font-bold hover:bg-[#A378FF] hover:cursor-pointer">
                      Add to cart
                    </button>

                    <button className="w-12 h-12 bg-[#323542] hover:bg-[#4A4D58] flex items-center justify-center hover:cursor-pointer">
                      <Heart color="white" className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="text-xs text-[#75767F] font-bold ">
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

      <div className="ml-38 mr-38 grid grid-cols-2 gap-x-16 text-[#F1F2F9]">
        <div className="flex flex-col gap-y-8">
          <div>
            <h2 className="text-[22px] font-extrabold">About</h2>
            <hr className="mt-4 w-full border-t border-[#3B3E4A]" />
          </div>

          {item?.description.map((partOfDescription) => {
            return (
              <div key={partOfDescription.title}>
                <h3 className="text-xl font-bold mb-4">
                  {partOfDescription.title}
                </h3>
                <p className="text-sm font-semibold text-[#75767F]">
                  {partOfDescription.text}
                </p>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col">
          <h2 className="text-[22px] font-extrabold">Tech specs</h2>
          <hr className="mt-4 mb-[25px] w-full border-t border-[#3B3E4A]" />

          <div className="text-sm text-[#75767F] font-semibold ">
            <div className="pb-2 flex justify-between">
              <span>Screen</span>

              <span className="text-[#F1F2F9]">{item?.screen}</span>
            </div>

            <div className="pb-2 flex justify-between">
              <span>Resolution</span>

              <span className="text-[#F1F2F9]">{item?.resolution}</span>
            </div>

            <div className="pb-2 flex justify-between">
              <span>Processor</span>

              <span className="text-[#F1F2F9]">{item?.processor}</span>
            </div>

            <div className="pb-2 flex justify-between">
              <span>RAM</span>

              <span className="text-[#F1F2F9]">{item?.ram}</span>
            </div>

            <div className="pb-2 flex justify-between">
              <span>Built in memory</span>

              <span className="text-[#F1F2F9]">{item?.capacity}</span>
            </div>

            {item?.camera && (
              <div className="pb-2 flex justify-between">
                <span>Camera</span>

                <span className="text-[#F1F2F9]">{item?.camera}</span>
              </div>
            )}

            {item?.zoom && (
              <div className="pb-2 flex justify-between">
                <span>Zoom</span>

                <span className="text-[#F1F2F9]">{item?.zoom}</span>
              </div>
            )}

            <div className="pb-2 flex justify-between">
              <span>Cell</span>

              <span className="text-[#F1F2F9]">{item?.cell.join(', ')}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="ml-38 mb-20 text-[32px] font-extrabold text-[#F1F2F9]">
        You may also like
      </div>
    </div>
  );
};
