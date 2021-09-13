import { PageTemplate } from '@/components/templates';
import { useTransactions } from '@/services/server';
import { Transaction } from '@/types';
import { Heading } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export const HomeView = () => {
  const { getTransactions } = useTransactions();
  const [transactions, setTransactions] = useState<Transaction[]>();

  useEffect(() => {
    getTransactions().then(setTransactions);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(transactions);

  return (
    <PageTemplate title="Home">
      <Heading>hello teste</Heading>
    </PageTemplate>
  );
};
