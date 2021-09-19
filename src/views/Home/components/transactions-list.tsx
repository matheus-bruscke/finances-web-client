import {
  Flex,
  Box,
  Stack,
  Heading,
  Text,
  IconButton,
  Button,
  Skeleton,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { FormatedTransaction } from '../types';

interface TransactionsList {
  data: FormatedTransaction[] | undefined;
}

export const TransactionsList = ({ data }: TransactionsList) => {
  const fakeArray = ['1', '2', '3', '4', '5'];

  return (
    <Box as={Stack} w="full" spacing={5} align="center" justify="center">
      <Stack spacing={2} w="full">
        {data && data?.length > 0
          ? data?.map(transaction => (
              <Flex
                key={transaction.description}
                align="center"
                justify="space-between"
                w="full"
                p="20px"
                bg="gray.700"
                borderRadius="10px"
              >
                <Box as={Stack} direction="row" spacing={5} align="center">
                  <Box
                    as={Flex}
                    align="center"
                    flexDir="column"
                    justify="center"
                    color="gray.200"
                  >
                    <Heading size="lg">{transaction.date_formated.day}</Heading>
                    <Text fontWeight="light" textTransform="uppercase">
                      {transaction.date_formated.month}
                    </Text>
                  </Box>

                  <Box>
                    <Stack direction="row" spacing={2}>
                      <Text
                        fontSize="1.2rem"
                        color="green.400"
                        fontWeight="light"
                      >
                        {transaction.formated_ammount}
                      </Text>

                      <Text
                        as="span"
                        fontWeight="light"
                        fontSize="xs"
                        color={transaction.pay_method_formated.colors.color}
                        bg={transaction.pay_method_formated.colors.bg}
                        px="10px"
                        py="5px"
                        rounded="full"
                        textTransform="uppercase"
                      >
                        {transaction.pay_method_formated.method}
                      </Text>
                    </Stack>

                    <Text
                      whiteSpace="nowrap"
                      overflow="hidden"
                      textOverflow="ellipsis"
                      maxW={{ base: '180px' }}
                    >
                      {transaction.description}
                    </Text>
                  </Box>
                </Box>

                <IconButton
                  aria-label="Details"
                  rounded="full"
                  size="lg"
                  bg="transparent"
                  icon={<ChevronRightIcon />}
                />
              </Flex>
            ))
          : fakeArray.map(item => (
              <Skeleton height="105px" borderRadius="10px" key={item} />
            ))}
      </Stack>

      {data && data?.length > 0 ? (
        <Button
          bg="low_scale.blue"
          color="blue.500"
          padding="0.75rem 1rem"
          fontWeight="normal"
          _hover={{
            bg: 'blue.500',
            color: 'white',
          }}
          borderRadius="10px"
        >
          Load more
        </Button>
      ) : (
        <Skeleton height="35px" width="100px" borderRadius="10px" />
      )}
    </Box>
  );
};
