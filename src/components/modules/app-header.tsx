import { HamburgerIcon } from '@chakra-ui/icons';
import { Flex, Image, IconButton } from '@chakra-ui/react';

export const AppHeader = () => {
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

        <IconButton
          icon={<HamburgerIcon />}
          aria-label="Menu"
          size="lg"
          rounded="full"
          bg="gray.900"
        />
      </Flex>
    </Flex>
  );
};
