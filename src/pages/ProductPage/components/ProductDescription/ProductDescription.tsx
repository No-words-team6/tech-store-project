import type { Item } from '@/types';
import type React from 'react';

type Props = {
  item: Item;
};

export const ProductDescription: React.FC<Props> = ({ item }) => {
  return (
    <>
      {item.description.map((partOfDescription) => {
        return (
          <div key={partOfDescription.title}>
            <h3 className="text-[16px] sm:text-xl font-bold mb-4">
              {partOfDescription.title}
            </h3>
            <p className="text-sm font-semibold text-[#75767F]">
              {partOfDescription.text}
            </p>
          </div>
        );
      })}
    </>
  );
};
