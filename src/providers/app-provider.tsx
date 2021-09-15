import { ChakraProvider } from '@chakra-ui/react';
import { darkTheme } from '@/styles/chakra-ui';
import { DisclosureProvider } from './disclosure-provider';
import { PeriodProvider } from './period-provider';

export const AppProvider: React.FC = ({ children }) => {
  return (
    <ChakraProvider resetCSS theme={darkTheme}>
      <DisclosureProvider>
        <PeriodProvider>{children}</PeriodProvider>
      </DisclosureProvider>
    </ChakraProvider>
  );
};
