import { PeriodSelector } from '@/components/elements';
import { PageTemplate } from '@/components/templates';
import { Flex } from '@chakra-ui/react';
import { periods } from '@/constants';
import { Notifications } from './components';

export const HomeView = () => {
  return (
    <PageTemplate title="Home">
      <Flex align="center" justify="space-between">
        <PeriodSelector periods={periods} />
        <Notifications
          list={[
            {
              new: true,
              thumb: 'random thumb',
              time: '2 days ago',
              title: 'Title test of notification',
            },
          ]}
        />
      </Flex>
    </PageTemplate>
  );
};
