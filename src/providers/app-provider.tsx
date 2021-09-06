import { ChakraProvider } from '@chakra-ui/react';
import { darkTheme } from '@/styles/chakra-ui';

export const AppProvider: React.FC = ({ children }) => {
  return (
    <ChakraProvider resetCSS theme={darkTheme}>
      {children}
    </ChakraProvider>
  );
};
