export const SortBy = {
  Newest: 'Newest',
  Alphabetically: 'Alphabetically',
  Cheapest: 'Cheapest',
} as const;

export type SortBy = (typeof SortBy)[keyof typeof SortBy];
