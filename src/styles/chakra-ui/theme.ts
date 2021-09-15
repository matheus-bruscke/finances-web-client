import { extendTheme } from '@chakra-ui/react';

export const darkTheme = extendTheme({
  config: {
    initialColorMode: 'dark',
  },
  colors: {
    gray: {
      900: '#151515',
      800: '#141416',
      700: '#242424',
      600: '#828282',
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
