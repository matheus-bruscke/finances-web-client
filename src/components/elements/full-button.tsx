import { Button } from '@chakra-ui/react';

interface FullButton {
  title: string;
  onClick(): void;
}

export const FullButton = ({ title, onClick }: FullButton) => {
  return (
    <Button
      w="full"
      bg="blue.500"
      color="white"
      fontSize="lg"
      fontWeight="400"
      borderRadius="10px"
      onClick={onClick}
      boxShadow="0 0 20px 2px #242424"
      py="2rem"
      px="4rem"
    >
      {title}
    </Button>
  );
};
