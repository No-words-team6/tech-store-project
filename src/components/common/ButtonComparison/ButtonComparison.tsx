import { Button } from '@/components/ui/button';
import { useCastomNavigator } from '@/hooks/useCastomNavigator';
import { useLocation } from 'react-router-dom';

export const ButtonComparison = () => {
  const navigation = useCastomNavigator();
  const category = useLocation().pathname.split('/')[1];

  return (
    <div className="flex flex-col gap-1">
      <p className="font-mont text-xs text-gray-500">Comparison</p>
      <Button
        onClick={() => navigation(`/${category}/comparison`)}
        className="flex items-center text-white bg-gray-700 h-9 px-3 py-2 rounded-none hover:border-b-[0.5px] hover:bg-gray-700"
      >
        Comparison
      </Button>
    </div>
  );
};
