import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
} from 'react';
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

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setQuery('');
        setSearchQuery('');
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [setSearchQuery]);

  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);
    applyQuery(value);
  };

  return (
    <div ref={ref}>
      <div className="relative flex min-w-45">
        <Search className="absolute top-1/2 left-2 -translate-y-1/2 text-link-hover-bg dark:text-dark-link-hover-bg" />
        <Input
          className="pl-10 text-white rounded-none"
          value={query}
          onChange={handleQueryChange}
        />
      </div>
    </div>
  );
};
