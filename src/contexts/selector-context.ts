import { createContext } from 'react';

interface PeriodContextData {
  currentOptions: any;
  onChangeCurrentOptions(name: string, value: string): void;
}

export const SelectorContext = createContext({} as PeriodContextData);
