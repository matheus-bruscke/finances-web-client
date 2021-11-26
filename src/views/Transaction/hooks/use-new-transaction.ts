import { api } from '@/apis';
import { useSession } from 'next-auth/client';
import { useState } from 'react';

interface UseNewTransactionData {
  inputsValue: Inputs | undefined;
  onChangeInput(name: string, value: any): void;
  handleCreateTransaction(): Promise<void>;
}

type Inputs = {
  value: number;
  description: string;
  payment_method: string;
  date: Date | string;
};

export const useNewTransaction = (): UseNewTransactionData => {
  const [inputsValue, setInputsValue] = useState<Inputs>({
    value: 0.0,
    description: '',
    payment_method: '',
    date: new Date(),
  });

  const [session] = useSession();

  function onChangeInput(name: string, value: any) {
    return setInputsValue({ ...inputsValue, [`${name}`]: value });
  }

  async function handleCreateTransaction(): Promise<void> {
    await api
      .post('/transaction', {
        type: inputsValue.value > 0 ? 'income' : 'expanse',
        description: inputsValue.description + ' ' + inputsValue.payment_method,
        amount: inputsValue.value,
        userId: session?.user?.email,
      })
      .then(() => {
        alert('Transaction created was successfully');
      });
  }

  return { inputsValue, onChangeInput, handleCreateTransaction };
};
