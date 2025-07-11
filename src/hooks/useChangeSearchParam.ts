import { useSearchParams } from 'react-router-dom';

export const useChangeSearchParam = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (key: string, value: string) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set(key, value);
    setSearchParams(newParams);
  };
};
