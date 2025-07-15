import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

export const useCastomNavigator = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  return (path: string) => {
    navigate(path, {
      state: {
        previousPage: location.pathname,
        search: searchParams.toString(),
      },
    });
  };
};
