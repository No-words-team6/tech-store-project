import { getProductById } from '@/api';
import { Loader } from '@/components/Loader';
import type { Category, Item } from '@/types';
import cn from 'classnames';
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
    <div className="back-color pt-5 flex-grow flex flex-col gap-y-10">
      <p className="text-gray-100 font-bold text-center">Item Card Body</p>

      {isLoading && !item && (
        <div className="flex justify-center">
          <Loader />
        </div>
      )}

      {!isLoading && item && (
        <>
          <h1 className="font-mont font-bold text-white ml-50 text-4xl">
            {item.name}
          </h1>

          <div className="grid grid-cols-2 gap-x-20">
            <div className="ml-50 flex gap-x-[16px]">
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

            <div className="font-bold text-white">
              <p>Some info:</p>
              <p>{`*Category: ${item.category}`}</p>
              <p>{`*ItemId: ${item.id}`}</p>
              <p>{`*Name: ${item.name}`}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
