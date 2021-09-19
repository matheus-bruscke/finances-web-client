import { Button } from '@chakra-ui/react';

export const FullButton = () => {
  return (
    <Button
      w="full"
      bg="blue.500"
      color="white"
      fontSize="lg"
      fontWeight="400"
      borderRadius="10px"
      boxShadow="0 0 20px 2px #242424"
      py="2rem"
      px="4rem"
    >
      Add new transaction
    </Button>
  );
};
