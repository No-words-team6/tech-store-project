import React from 'react';
import { ProductCard } from '../ProductCard/ProductCard';

const arrJustForMapping = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
];

interface Props {
  category: string;
}

export const PageBodyTemplate: React.FC<Props> = ({ category }) => {
  return (
    <div className="grid grid grid-cols-4 gap-5">
      {arrJustForMapping.map((num) => (
        <ProductCard key={num} num={num} category={category} />
      ))}
    </div>
  );
};
