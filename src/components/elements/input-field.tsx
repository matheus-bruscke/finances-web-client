import { Stack, Text } from '@chakra-ui/layout';
import { Input } from '@chakra-ui/input';
import { css } from '@emotion/react';

interface InputFild {
  label: string;
  name: string;
  type: 'string' | 'number' | 'email' | 'date';
  value?: string;
  onChange(name: string, value: any): void;
}

export const InputField = ({
  label,
  value,
  onChange,
  name,
  type,
}: InputFild) => {
  return (
    <Stack spacing={4}>
      <Text fontWeight="medium">{label}</Text>
      <Input
        isRequired
        type={type}
        value={value}
        maxLength={50}
        p="28px 20px"
        fontSize="1rem"
        onChange={e => onChange(name, e.target.value)}
        placeholder="Description"
        borderRadius="10px"
        size="lg"
        css={css`
          ::-webkit-calendar-picker-indicator {
            background: url(https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/calendar-16.png)
              center/80% no-repeat;
            color: black;
          }
        `}
      />
    </Stack>
  );
};
