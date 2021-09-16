import { SelectorContext } from '@/contexts';
import { useState } from 'react';

export const SelectorProvider: React.FC = ({ children }) => {
  const [currentOptions, setCurrentOptions] = useState({});

  function onChangeCurrentOptions(name: string, value: string) {
    return setCurrentOptions({ [name]: value });
  }

  return (
    <SelectorContext.Provider
      value={{ currentOptions, onChangeCurrentOptions }}
    >
      {children}
    </SelectorContext.Provider>
  );
};
