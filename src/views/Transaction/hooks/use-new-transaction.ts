import { api } from '@/apis';
import { useSelectorContext } from '@/hooks/contexts/use-selector';
import { useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
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

  const { currentOptions } = useSelectorContext();

  async function handleCreateTransaction(): Promise<void> {
    if (session) {
      await api
        .post('/transaction', {
          type: inputsValue.payment_method,
          description: inputsValue.description,
          amount:
            currentOptions['New Transaction'] === 'exit'
              ? '-' + String(inputsValue.value)
              : inputsValue.value,
          userId: session?.user?.email,
        })
        .then(() => {
          alert('Transaction created was successfully');
          return (window.location.href = 'http://localhost:3000/');
        });
    }
  }

  return { inputsValue, onChangeInput, handleCreateTransaction };
};
