import React from 'react';
import { Link } from 'react-router-dom';
import './headerMenu.css';

type Props = {
  type: 'phones' | 'tablets' | 'accessories';
};

const brands = ['Apple', 'Samsung', 'Xiaomi'];

export const HeaderPhonesMenu: React.FC<Props> = ({ type }) => {
  return (
    <div
      className={`
    w-full min-w-[200px] p-4 
   animate-fade-in flex flex-col gap-2
  `}
    >
      <Link
        to={`/${type}`}
        className="text-link-hover-bg font-bold text-sm uppercase hover:underline transition-colors"
      >
        Nice Gadgets {type}
      </Link>

      <hr className="border-elements my-1" />

      {brands.map((brand) => (
        <Link
          key={brand}
          to={`/${type}/catalog?brand=${encodeURIComponent(brand)}&numberOfPage=1`}
          className="text-white text-sm font-semibold hover:text-link-hover-bg transition-colors"
        >
          {brand}
        </Link>
      ))}

      <hr className="border-elements my-1" />

      <Link
        to={`/${type}/catalog?numberOfPage=1`}
        className="text-xs text-white hover:text-link-hover-bg transition-colors mt-1 underline"
      >
        ALL BRANDS
      </Link>
    </div>
  );
};
