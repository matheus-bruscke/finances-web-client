import { Stack, Text, Box, Flex } from '@chakra-ui/layout';
import { NumberInput, NumberInputField } from '@chakra-ui/number-input';

interface ValueInput {
  label: string;
  onChange(name: string, value: any): void;
  value?: number;
}

export const TransactionValue = ({ label, onChange, value }: ValueInput) => {
  function format(val: string) {
    return `$ ` + val;
  }

  return (
    <Flex align="center" justify="center">
      <Box
        as={Stack}
        align="center"
        justify="center"
        borderRadius="10px"
        spacing={2}
        bg="low_scale.red"
        w={{ base: '80%' }}
        h={{ base: '120px' }}
      >
        <Text fontWeight="semibold">{label}</Text>
        <NumberInput
          variant="unstyled"
          onChange={e => onChange('value', e)}
          value={format(String(value))}
        >
          <NumberInputField
            color="red.400"
            p="0 10px"
            fontSize="4xl"
            fontWeight="bold"
            textAlign="center"
          />
        </NumberInput>
      </Box>
    </Flex>
  );
};
