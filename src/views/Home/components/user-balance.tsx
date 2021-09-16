import { Grid, GridItem, Box, Stack, Text, Heading } from '@chakra-ui/react';

interface UserBalance {
  amount: {
    balance: number;
    entries: number;
    exits: number;
  };
}

export const UserBalance = ({ amount }: UserBalance) => {
  return (
    <Grid
      templateColumns={{ base: 'repeat(2, 1fr)' }}
      templateRows={{ base: 'repeat(2, 1fr)' }}
    >
      <GridItem
        bg="gray.700"
        as={Stack}
        spacing={2}
        colSpan={2}
        p="20px"
        borderRadius=" 10px 10px 0 0"
      >
        <Stack direction="row" spacing={2} align="center">
          <Box h="5px" w="5px" rounded="full" bg="white" />
          <Text fontWeight="medium">Balance</Text>
        </Stack>

        <Heading fontSize="1.6rem">$ {amount.balance}</Heading>
      </GridItem>

      <GridItem
        bg="low_scale.green"
        p="20px"
        as={Stack}
        spacing={2}
        borderRadius=" 0 0 0 10px"
        color="green.400"
      >
        <Stack direction="row" spacing={2} align="center">
          <Box h="5px" w="5px" rounded="full" bg="green.400" />
          <Text fontWeight="medium" color="white">
            Entries
          </Text>
        </Stack>

        <Heading fontSize="1.6rem">$ {amount.entries}</Heading>
      </GridItem>

      <GridItem
        bg="low_scale.red"
        p="20px"
        as={Stack}
        spacing={2}
        borderRadius=" 0 0 10px 0"
        color="red.400"
      >
        <Stack direction="row" spacing={2} align="center">
          <Box h="5px" w="5px" rounded="full" bg="red.400" />
          <Text fontWeight="medium" color="white">
            Exits
          </Text>
        </Stack>

        <Heading fontSize="1.6rem">$ {amount.exits}</Heading>
      </GridItem>
    </Grid>
  );
};
