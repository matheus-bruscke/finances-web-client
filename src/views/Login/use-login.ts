import { login } from '@/services/server/login-service';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { signIn } from 'next-auth/client';

interface UseLoginData {
  inputsValue: Inputs | undefined;
  onChangeInput(email: string, value: any): void;
  handleLogin(): void;
  loginWithGoogle(): void;
}

type Inputs = {
  email: string;
  password: string;
};

export const useLogin = (): UseLoginData => {
  const [inputsValue, setInputsValue] = useState<Inputs>({
    email: '',
    password: '',
  });

  const router = useRouter();

  function onChangeInput(name: string, value: any) {
    return setInputsValue({ ...inputsValue, [`${name}`]: value });
  }

  async function handleLogin(): Promise<void> {
    if (!inputsValue.email || !inputsValue.password) return;

    await login(inputsValue.email, inputsValue.password)
      .then(() => router.push('/'))
      .catch(err => console.log(err));
  }

  async function loginWithGoogle() {
    await signIn('google');
  }

  return { inputsValue, onChangeInput, handleLogin, loginWithGoogle };
};
