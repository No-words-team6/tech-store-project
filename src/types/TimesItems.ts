export const TimesItems = {
  Four: '4',
  Eight: '8',
  Twelve: '12',
  TwentyFour: '24',
  All: 'All',
} as const;

export type TimesItems = (typeof TimesItems)[keyof typeof TimesItems];
