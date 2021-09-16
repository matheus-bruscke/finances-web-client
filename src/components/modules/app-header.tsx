import { useDisclosureContext } from '@/hooks/contexts';
import { Notifications } from '../elements/notifications';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Flex, Image, IconButton, Stack } from '@chakra-ui/react';

export const AppHeader = () => {
  const { onOpen } = useDisclosureContext();

  return (
    <Flex
      alignItems="center"
      borderBottom="1px"
      borderColor="gray.700"
      p={{ base: '0 20px', lg: 0 }}
    >
      <Flex
        w="full"
        maxW={{ lg: '1280px' }}
        m={{ lg: '0 auto' }}
        alignItems="center"
        justify="space-between"
      >
        <Image src="/assets/app-logo.svg" alt="Finances" />

        <Stack direction="row" spacing={2} align="center">
          <Notifications
            list={[
              {
                new: true,
                thumb: 'random thumb',
                time: '8 hours ago',
                title: 'Example of notification',
              },
            ]}
          />
          <IconButton
            icon={<HamburgerIcon />}
            aria-label="Menu"
            size="lg"
            rounded="full"
            fontSize="1.5rem"
            onClick={onOpen}
            bg="gray.900"
          />
        </Stack>
      </Flex>
    </Flex>
  );
};
