export const SortBy = {
  Newest: 'newest',
  Alphabetically: 'alphabetically',
  Cheapest: 'cheapest',
} as const;

export type SortBy = (typeof SortBy)[keyof typeof SortBy];
