import { extendTheme } from '@chakra-ui/react';

export const darkTheme = extendTheme({
  colors: {
    gray: {
      900: '#151515',
      700: '#242424',
    },
  },
  fonts: {
    heading: 'Inter',
    body: 'Inter',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.900',
        color: 'gray.50',
      },
    },
  },
});
