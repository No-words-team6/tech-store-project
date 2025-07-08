import type { Item } from '@/types';
import type React from 'react';

type Props = {
  item: Item;
};

export const ItemDescription: React.FC<Props> = ({ item }) => {
  return (
    <>
      {item.description.map((partOfDescription) => {
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
    </>
  );
};
