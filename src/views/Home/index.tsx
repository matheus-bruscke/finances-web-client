import { PageTemplate } from '@/components/templates';
import { Flex, Heading } from '@chakra-ui/react';

export const HomeView = () => {
  return (
    <PageTemplate title="Home">
      <Flex align="center" justify="space-between">
        <Heading>Home</Heading>
      </Flex>
    </PageTemplate>
  );
};
