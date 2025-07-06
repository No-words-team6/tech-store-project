import { ProductCard } from '../components/ProductCard/ProductCard';

const arrJustForMapping = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
];

export const TabletsCatalogPage = () => {
  return (
    <div className="bg-orange-200 flex-grow flex items-center justify-center flex-col gap-y-10 pt-5 pb-5">
      <p className="text-gray-600 font-bold">Tablets Catalog Body</p>

      <div className="grid grid grid-cols-4 gap-5">
        {arrJustForMapping.map((num) => (
          <ProductCard
            key={num}
            num={num}
            category={'tablets'}
          />
        ))}
      </div>
    </div>
  );
};
