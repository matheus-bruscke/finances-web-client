import {
  Box,
  Heading,
  Text,
  Menu,
  Stack,
  Flex,
  MenuItem,
  MenuList,
  Button,
  MenuButton,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { usePeriodContext } from '@/hooks/contexts/use-period';
import { Period } from '@/types';

interface PeriodSelector {
  periods: Period[];
}

export const PeriodSelector = ({ periods }: PeriodSelector) => {
  const { onChangePeriod, currentPeriod } = usePeriodContext();

  return (
    <Box>
      <Heading fontSize="1.5rem" fontWeight="semibold">
        Period
      </Heading>

      <Menu autoSelect={false}>
        <MenuButton
          as={Button}
          bg="none"
          ml="-1.5rem"
          fontSize="4xl"
          fontWeight="bold"
          p="2rem 1.5rem"
          borderRadius="full"
          color="blue.500"
          _active={{ bg: 'black' }}
          _hover={{ bg: 'black' }}
        >
          <Stack direction="row" spacing={5} align="center">
            <Text>{currentPeriod || periods[0].value}</Text>
            <Flex
              as="span"
              w="2rem"
              h="2rem"
              borderRadius="full"
              border="2px"
              borderColor="gray.700"
              align="center"
              fontSize="2xl"
              color="white"
              justify="center"
            >
              <ChevronDownIcon />
            </Flex>
          </Stack>
        </MenuButton>

        <MenuList borderRadius="25px" ml={4} w="100x">
          {periods.map(period => (
            <MenuItem
              key={period.key}
              fontSize="3xl"
              color={currentPeriod === period.value ? 'white' : 'gray.600'}
              fontWeight="bold"
              onClick={() => onChangePeriod(period.value)}
              transition="color 0.3s"
              _active={{ bg: 'none' }}
              _hover={{ bg: 'none', color: 'white' }}
            >
              {period.value}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};
