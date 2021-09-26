import { useSelectorContext } from '@/hooks/contexts/use-selector';
import { Stack, Text, Box, Flex } from '@chakra-ui/layout';
import { NumberInput, NumberInputField } from '@chakra-ui/number-input';

interface TransactionValueInput {
  label: string;
  onChange(name: string, value: any): void;
  value?: number;
}

export const TransactionValueInput = ({
  label,
  onChange,
  value,
}: TransactionValueInput) => {
  const { currentOptions } = useSelectorContext();

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
        bg={
          currentOptions['New Transaction'] === 'exit'
            ? 'low_scale.red'
            : 'low_scale.green'
        }
        w={{ base: '75%' }}
        h={{ base: '120px' }}
      >
        <Text fontWeight="semibold">{label}</Text>
        <NumberInput
          variant="unstyled"
          onChange={e => {
            onChange('value', e);
          }}
          value={format(String(value))}
        >
          <NumberInputField
            color={
              currentOptions['New Transaction'] === 'exit'
                ? 'red.400'
                : 'green.400'
            }
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
