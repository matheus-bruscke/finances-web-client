import { PageTemplate } from '@/components/templates';
import { Stack, Heading } from '@chakra-ui/react';
import { UserBalance } from './components';

export const HomeView = () => {
  return (
    <PageTemplate title="Home">
      <Stack spacing={5}>
        <Heading>Home</Heading>
        <UserBalance
          amount={{ balance: 4724.71, entries: 2547.92, exits: 1563.83 }}
        />
      </Stack>
    </PageTemplate>
  );
};
