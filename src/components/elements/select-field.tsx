import { ChevronDownIcon } from '@chakra-ui/icons';
import { useSelectorContext } from '@/hooks/contexts/use-selector';
import { SelectOptions } from '@/types';
import { useState } from 'react';
import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/layout';
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu';
import { Button } from '@chakra-ui/button';

interface SelectField {
  title: string;
  options: SelectOptions[];
  value?: string;
  onChange(name: string, value: any): void;
}

export const SelectField = ({
  options,
  title,
  onChange,
  value,
}: SelectField) => {
  const [currentOption, setCurrentOption] = useState<string>();

  return (
    <Box w="auto">
      <Heading fontSize="1rem" mb={4} fontWeight="medium">
        {title}
      </Heading>

      <Menu autoSelect={false}>
        <MenuButton
          as={Button}
          bg="none"
          w="full"
          fontSize="1rem"
          fontWeight="medium"
          p="28px 20px"
          borderRadius="10px"
          border="1px"
          borderColor="gray.600"
          _active={{ bg: { base: 'none' } }}
          _hover={{ bg: 'gray.800' }}
        >
          <Flex align="center" justify="space-between">
            <Text color={currentOption ? 'white' : 'gray.600'}>
              {currentOption || 'Select an payment method'}
            </Text>
            <Flex
              as="span"
              w="2rem"
              h="2rem"
              borderRadius="full"
              border="1px"
              borderColor="gray.600"
              align="center"
              fontSize="xl"
              color="white"
              justify="center"
            >
              <ChevronDownIcon />
            </Flex>
          </Flex>
        </MenuButton>

        <MenuList borderRadius="10px">
          {options.map(item => (
            <MenuItem
              key={item.key}
              fontSize="1rem"
              color={value === item.value ? 'white' : 'gray.500'}
              fontWeight="normal"
              onClick={() => {
                onChange('payment_method', item.key);
                setCurrentOption(item.value);
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
