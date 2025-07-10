import { SortBy, type Product } from '@/types';

interface SortOptions {
  selectedSortBy: string;
  selectedTimesItems: string;
}

export const sortProducts = (items: Product[], sortOptions: SortOptions) => {
  let sortItems = [...items];

  switch (sortOptions.selectedSortBy) {
    case SortBy.Newest:
      sortItems = sortItems.sort((item1, item2) => item2.year - item1.year);
      break;
    case SortBy.Alphabetically:
      sortItems = sortItems.sort((item1, item2) =>
        item1.name.localeCompare(item2.name),
      );
      break;
    case SortBy.Cheapest:
      sortItems = sortItems.sort((item1, item2) => item1.price - item2.price);
      break;
  }

  return sortItems;
};
