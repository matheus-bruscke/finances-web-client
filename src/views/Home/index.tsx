import { FullButton, Select } from '@/components/elements';
import { PageTemplate } from '@/components/templates';
import { transactionsOpts } from '@/constants';
import { Stack, Box, Heading } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import { TransactionsList, UserBalance } from './components';
import { useHome } from './use-home';

export const HomeView = () => {
  const { transactions } = useHome();
  const router = useRouter();

  return (
    <PageTemplate title="Home">
      <Box as={Stack} spacing={5}>
        <Heading>Home</Heading>
        <UserBalance
          amount={{ balance: 4724.71, entries: 2547.92, exits: 1563.83 }}
        />
      </Box>

      <Box as={Stack} spacing={5} pb={{ base: '80px' }}>
        <Select options={transactionsOpts} title="Transactions" />
        <TransactionsList data={transactions} />
      </Box>

      <Box w="calc(100% - 40px)" position="fixed" zIndex={5} bottom={5}>
        <FullButton
          title="Add new transaction"
          onClick={() => router.push('/transactions/new')}
        />
      </Box>
    </PageTemplate>
  );
};
