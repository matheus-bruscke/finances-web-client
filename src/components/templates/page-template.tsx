import { Stack } from '@chakra-ui/react';
import { Fragment, ReactNode } from 'react';

interface PageTemplate {
  children: ReactNode;
  title: string;
}

export const PageTemplate = ({ children, title }: PageTemplate) => {
  return (
    <Fragment>
      <title>{title}</title>

      <Stack
        spacing="40px"
        py="20px"
        px={{ base: '20px', lg: 0 }}
        maxW={{ lg: '1280px' }}
        m={{ lg: '0 auto' }}
      >
        {children}
      </Stack>
    </Fragment>
  );
};
