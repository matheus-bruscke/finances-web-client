import { createContext } from 'react';

interface PeriodContextData<T = unknown> {
  currentPeriod: string;
  onChangePeriod(period: string): void;
}

export const PeriodContext = createContext({} as PeriodContextData<unknown>);
