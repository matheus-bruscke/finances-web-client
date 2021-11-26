import { FullButton, InputField } from '@/components/elements';
import { PageTemplate } from '@/components/templates';
import {
  Stack,
  Box,
  Image,
  Flex,
  Heading,
  Button,
  Text,
} from '@chakra-ui/react';
import { useLogin } from './use-login';

export const LoginView = () => {
  const { inputsValue, onChangeInput, handleLogin, loginWithGoogle } =
    useLogin();

  return (
    <PageTemplate title="Log-in">
      <Box as={Stack} spacing={5}>
        <Heading>Log-in</Heading>
      </Box>

      <Stack
        as="form"
        spacing={6}
        onSubmit={e => {
          e.preventDefault();
          handleLogin();
        }}
      >
        <InputField
          label="E-mail address or username"
          name="email"
          placeholder="Enter with your e-mail address"
          onChange={onChangeInput}
          type="string"
          value={inputsValue?.email}
        />

        <InputField
          label="Password"
          name="password"
          placeholder="Enter with password"
          onChange={onChangeInput}
          type="string"
          value={inputsValue?.password}
        />

        <FullButton title="Log-in" type="submit" />
      </Stack>

      <Text as="span" textAlign="center" mt="10px !important">
        or
      </Text>

      <Flex justify="center" mt="10px !important">
        <Button
          aria-label="Log-in with Google"
          w={['60px', '120px']}
          h="60px"
          background="low_scale.pink"
          onClick={() => loginWithGoogle()}
        >
          <Image src="./assets/google.svg" alt="Log-in with Google" />
        </Button>
      </Flex>
    </PageTemplate>
  );
};
