import { SortBy, type Product } from '@/types';
import { TimesItems } from '@/types/TimesItems';

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

  switch (sortOptions.selectedTimesItems) {
    case TimesItems.Four:
      sortItems = sortItems.splice(0, 4);
      break;
    case TimesItems.Eight:
      sortItems = sortItems.slice(0, 8);
      break;
    case TimesItems.Twelve:
      sortItems = sortItems.splice(0, 12);
      break;
    case TimesItems.TwentyFour:
      sortItems = sortItems.splice(0, 24);
      break;
    case TimesItems.All:
      break;
  }

  return sortItems;
};
