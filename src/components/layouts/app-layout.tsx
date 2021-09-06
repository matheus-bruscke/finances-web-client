import { Grid } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { AppDrawer, AppHeader } from '../modules';

interface AppLayout {
  children: ReactNode;
}

export const AppLayout = ({ children }: AppLayout) => {
  return (
    <Grid templateRows={{ base: '80px 1fr' }} h="100vh">
      <AppDrawer />
      <AppHeader />
      {children}
    </Grid>
  );
};
