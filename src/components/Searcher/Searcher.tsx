import { useEffect, useRef, useState } from 'react';
import { Input } from '../ui/input';
import { useProductStore } from '@/stores/productStore';
import { Search } from 'lucide-react';
import type { Product } from '@/types';
import { Link } from 'react-router-dom';

export const Searcher = () => {
  const products = useProductStore((state) => state.products);

  const [query, setQuery] = useState('');
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setQuery('');
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  const filterProducts = (items: Product[], queryParam: string) => {
    const normalizeQuery = queryParam.trim().toLowerCase();

    return items.filter((item) =>
      item.name.toLowerCase().includes(normalizeQuery),
    );
  };

  const filteredProducts = filterProducts(products, query);

  return (
    <div ref={ref}>
      <div className="relative flex min-w-45">
        <Search className="absolute top-1/2 left-2 -translate-y-1/2 text-white" />

        <Input
          className="pl-10 text-white rounded-none"
          value={query}
          onChange={(event) => setQuery(event.target.value.trimStart())}
        />
      </div>

      {query.length === 0 || (
        <div className="absolute bg-gray-800 py-3">
          <div className=" flex flex-col gap-2 max-h-64 px-3 overflow-y-scroll ">
            {filteredProducts.map((product) => {
              return (
                <Link
                  to={`${product.itemId}`}
                  key={product.id}
                  className="flex bg-gray-600 items-center px-2 hover:cursor-pointer"
                >
                  <div className="w-[80px] h-[80px] flex-shrink-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="flex-grow px-1">
                    <p className="font-mont text-[14px] text-white">
                      {product.name}
                    </p>
                  </div>

                  <div className="font-mont font-extrabold text-[18px] text-white">
                    {`$${product.price}`}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
