import { SelectOptions } from '@/types';

export const transactionsOpts: SelectOptions[] = [
  {
    key: 'all',
    value: 'All',
    color: 'blue.500',
  },
  {
    key: 'entries',
    value: 'Entries',
    color: 'green.400',
  },
  {
    key: 'exits',
    value: 'Exits',
    color: 'red.400',
  },
];
