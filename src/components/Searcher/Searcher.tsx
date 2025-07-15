import { useEffect, useRef, useState } from 'react';
import { Input } from '../ui/input';
import { useProductStore } from '@/stores/productStore';
import { Search } from 'lucide-react';
import type { Product } from '@/types';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { Brands } from '@/types/Brands';

export const Searcher = () => {
  const products = useProductStore((state) => state.products);

  const [searchParams] = useSearchParams();
  const currentBrand = searchParams.get('brand') ?? '';

  const [query, setQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
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
    const normalizeCurrentBrand = currentBrand.toLowerCase();

    return items.filter((item) =>
      currentBrand === Brands.All ?
        item.name.toLowerCase().includes(normalizeQuery)
      : item.name.toLowerCase().includes(normalizeQuery) &&
        item.name.toLowerCase().split(' ')[0] === normalizeCurrentBrand,
    );
  };

  const filteredProducts = filterProducts(products, query);

  const handleOnClick = (product: Product) => {
    navigate(`/${product.category}/${product.itemId}`, {
      state: {
        previousPage: location.pathname,
      },
    });
  };
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

      {query.length > 0 && filteredProducts.length > 0 && (
        <div className="absolute bg-gray-800 py-3">
          <div className=" flex flex-col gap-2 max-h-64 px-3 overflow-y-scroll ">
            {filteredProducts.map((product) => {
              return (
                <div
                  key={product.id}
                  className="flex bg-gray-600 items-center px-2 hover:cursor-pointer"
                  onClick={() => handleOnClick(product)}
                >
                  <div className="w-[80px] h-[80px] flex-shrink-0">
                    <img
                      src={
                        product.image.startsWith('/') ?
                          product.image
                        : `/${product.image}`
                      }
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
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
