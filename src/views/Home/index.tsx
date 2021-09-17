import { Select } from '@/components/elements';
import { PageTemplate } from '@/components/templates';
import { transactionsOpts } from '@/constants';
import { Stack, Box, Heading } from '@chakra-ui/react';
import { TransactionsList, UserBalance } from './components';
import { useHome } from './use-home';

export const HomeView = () => {
  const { transactions } = useHome();

  return (
    <PageTemplate title="Home">
      <Box as={Stack} spacing={5}>
        <Heading>Home</Heading>
        <UserBalance
          amount={{ balance: 4724.71, entries: 2547.92, exits: 1563.83 }}
        />
      </Box>

      <Box as={Stack} spacing={5}>
        <Select options={transactionsOpts} title="Transactions" />

        <Stack spacing={2}>
          <TransactionsList data={transactions} />
        </Stack>
      </Box>
    </PageTemplate>
  );
};
