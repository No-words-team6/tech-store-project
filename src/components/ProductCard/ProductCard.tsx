import React from 'react';
import { Link } from 'react-router-dom';
import '../../index.css';

interface Props {
  num: number;
  category: string;
}

export const ProductCard: React.FC<Props> = ({ num, category }) => {
  return (
    <Link
      to={`/${category}/${num}`}
      className="border pt-2 pb-5 w-[200px] h-[300px] flex flex-col items-center gap-y-5 background-surface1 color-white"
    >
      <div className="border bg-pink-600 w-[180px] h-[250px]" />
      <p className="font-bold">{`Item-${num}`}</p>
    </Link>
  );
};
