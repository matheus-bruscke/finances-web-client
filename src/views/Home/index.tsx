import { PageTemplate } from '@/components/templates';
import { api } from '@/services/apis';
import { Heading } from '@chakra-ui/react';
import { useEffect } from 'react';

export const HomeView = () => {
  useEffect(() => {
    const response = api.get('/transactions').then(res => res.data);
    console.log(response);
  }, []);

  return (
    <PageTemplate title="Home">
      <Heading>hello teste</Heading>
    </PageTemplate>
  );
};
