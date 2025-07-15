import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
} from 'react';
import { Input } from '../ui/input';
import { useProductStore } from '@/stores/productStore';
import { Search } from 'lucide-react';
import type { Product } from '@/types';
import { useSearchParams } from 'react-router-dom';
import { useCastomNavigator } from '@/hooks/useCastomNavigator';
import { filterProductSearchs } from '@/utils/filterProductSearchs';
import debounce from 'lodash.debounce';

export const Searcher = () => {
  const products = useProductStore((state) => state.products);

  const [searchParams] = useSearchParams();
  const currentBrand = searchParams.get('brand') ?? '';

  const [query, setQuery] = useState('');
  const [appliedQuery, setAppliedQuery] = useState('');
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useCastomNavigator();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const applyQuery = useCallback(debounce(setAppliedQuery, 400), []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setQuery('');
        setAppliedQuery('');
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  const filteredProducts = filterProductSearchs(products, {
    appliedQuery,
    currentBrand,
  });

  const handleOnClick = (product: Product) => {
    navigate(`/${product.category}/${product.itemId}`);
  };

  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value.trimStart());
    applyQuery(event.target.value.trimStart());
  };

  return (
    <div ref={ref}>
      <div className="relative flex min-w-45">
        <Search className="absolute top-1/2 left-2 -translate-y-1/2 text-white" />

        <Input
          className="pl-10 text-white rounded-none"
          value={query}
          onChange={handleQueryChange}
        />
      </div>

      {appliedQuery.length > 0 && filteredProducts.length > 0 && (
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
