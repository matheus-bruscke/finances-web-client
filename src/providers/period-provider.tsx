import { PeriodContext } from '@/contexts';
import { useState } from 'react';

export const PeriodProvider: React.FC = ({ children }) => {
  const [currentPeriod, setCurrentPeriod] = useState('');

  function onChangePeriod(period: string) {
    return setCurrentPeriod(period);
  }

  return (
    <PeriodContext.Provider value={{ currentPeriod, onChangePeriod }}>
      {children}
    </PeriodContext.Provider>
  );
};
