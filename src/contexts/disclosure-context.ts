import { createContext } from 'react';

type DisclosureContextData = {
  isOpen: boolean;
  onOpen(): void;
  onClose(): void;
};

export const DisclosureContext = createContext({} as DisclosureContextData);
