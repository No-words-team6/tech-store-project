import { SortBy, type Product } from '@/types';

interface operationParams {
  selectedSortBy: string;
  selectedTimesItems: string;
  selectedBrand: string;
}

export const prepareProductList = (
  items: Product[],
  sortOptions: operationParams,
) => {
  let preparedList = [...items];

  if (sortOptions.selectedBrand && sortOptions.selectedBrand !== 'All') {
    preparedList = preparedList.filter((item) => {
      const itemBrand = item.itemId.split('-')[0];
      return itemBrand === sortOptions.selectedBrand.toLowerCase();
    });
  }

  switch (sortOptions.selectedSortBy) {
    case SortBy.Newest:
      preparedList = preparedList.sort(
        (item1, item2) => item2.year - item1.year,
      );
      break;
    case SortBy.Alphabetically:
      preparedList = preparedList.sort((item1, item2) =>
        item1.name.localeCompare(item2.name),
      );
      break;
    case SortBy.Cheapest:
      preparedList = preparedList.sort(
        (item1, item2) => item1.price - item2.price,
      );
      break;
  }

  return preparedList;
};
