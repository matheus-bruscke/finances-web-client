import { ChakraProvider } from '@chakra-ui/react';
import { darkTheme } from '@/theme';
import { DisclosureProvider } from './disclosure-provider';
import { SelectorProvider } from './selector-provider';

export const AppProvider: React.FC = ({ children }) => {
  return (
    <ChakraProvider resetCSS theme={darkTheme}>
      <DisclosureProvider>
        <SelectorProvider>{children}</SelectorProvider>
      </DisclosureProvider>
    </ChakraProvider>
  );
};
