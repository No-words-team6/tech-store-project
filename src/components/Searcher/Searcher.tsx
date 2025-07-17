import { useCallback, useRef, useState, type ChangeEvent } from 'react';
import { Input } from '../ui/input';
import { Search } from 'lucide-react';
import { useProductStore } from '@/stores/productStore';
import debounce from 'lodash.debounce';

export const Searcher = () => {
  const setSearchQuery = useProductStore((state) => state.setSearchQuery);

  const [query, setQuery] = useState('');
  const ref = useRef<HTMLDivElement>(null);

  const applyQuery = useCallback(
    debounce((val: string) => {
      setSearchQuery(val.trim());
    }, 400),
    [],
  );

  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.trimStart();
    setQuery(value);
    applyQuery(value);
  };

  return (
    <div ref={ref}>
      <div className="relative flex min-w-45">
        <Search className="absolute top-1/2 left-2 -translate-y-1/2 text-link-hover-bg dark:text-dark-link-hover-bg" />
        <Input
          className="pl-10 text-link-hover-bg dark:text-dark-link-hover-bg border-2 border-[#B4BDC3] dark:border-[#323542] rounded-none"
          value={query}
          onChange={handleQueryChange}
        />
      </div>
    </div>
  );
};
