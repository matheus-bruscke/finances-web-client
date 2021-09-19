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
    low_scale: {
      red: '#2a1c1c',
      green: '#172922',
      yellow: '#393528',
      purple: '#332b36',
      orange: '#393028',
      cyan: '#293539',
      blue: '#15202b',
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
