import { PeriodContext } from '@/contexts';
import { useContext } from 'react';

export const usePeriodContext = () => {
  const context = useContext(PeriodContext);

  if (!context) {
    throw new Error('usePeriodContext must be used within an Period Provider');
  }

  return context;
};
