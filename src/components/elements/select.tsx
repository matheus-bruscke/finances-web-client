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
import { useSelectorContext } from '@/hooks/contexts/use-selector';
import { SelectOptions } from '@/types';
import { useState } from 'react';

interface PeriodSelector {
  title: string;
  options: SelectOptions[];
}

type CurrentOption = {
  title: string;
  color: string | undefined;
};

export const Select = ({ options, title }: PeriodSelector) => {
  const { onChangeCurrentOptions } = useSelectorContext();
  const [currentOption, setCurrentOption] = useState<CurrentOption>();

  return (
    <Box w="auto">
      <Heading fontSize="1.5rem" fontWeight="semibold">
        {title}
      </Heading>

      <Menu autoSelect={false}>
        <MenuButton
          as={Button}
          bg="none"
          ml="-1.5rem"
          fontSize="4xl"
          fontWeight="bold"
          p="1.5rem"
          borderRadius="full"
          color={currentOption?.color || options[0].color}
          _active={{ bg: { base: 'none' } }}
          _hover={{ bg: 'black' }}
        >
          <Stack direction="row" spacing={5} align="center">
            <Text color={currentOption?.color}>
              {currentOption?.title || options[0].value}
            </Text>
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
          {options.map(item => (
            <MenuItem
              key={item.key}
              fontSize="3xl"
              color={currentOption?.title === item.value ? 'white' : 'gray.600'}
              fontWeight="bold"
              onClick={() => {
                onChangeCurrentOptions(title, item.value);
                return setCurrentOption({
                  title: item.value,
                  color: item.color,
                });
              }}
              transition="color 0.3s"
              _active={{ bg: 'none' }}
              _hover={{ bg: 'none', color: 'white' }}
            >
              {item.value}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};
