import { useSelectorContext } from '@/hooks/contexts/use-selector';
import { useEffect, useState } from 'react';

interface UseNewTransactionData {
  inputsValue: Inputs | undefined;
  onChangeInput(name: string, value: any): void;
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

  function onChangeInput(name: string, value: any) {
    return setInputsValue({ ...inputsValue, [`${name}`]: value });
  }

  return { inputsValue, onChangeInput };
};
