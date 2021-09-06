import { DisclosureContext } from '@/contexts';
import { useContext } from 'react';

export const useDisclosureContext = () => {
  const context = useContext(DisclosureContext);

  if (!context) {
    throw new Error(
      'useDisclosureContext must be used within an Disclosure Provider',
    );
  }

  return context;
};
