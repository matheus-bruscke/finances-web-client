import { SelectorContext } from '@/contexts';
import { useContext } from 'react';

export const useSelectorContext = () => {
  const context = useContext(SelectorContext);

  if (!context) {
    throw new Error(
      'useSelectorContext must be used within an Selector Provider',
    );
  }

  return context;
};
