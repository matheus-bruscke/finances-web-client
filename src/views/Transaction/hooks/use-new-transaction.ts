import { useState } from 'react';

interface UseNewTransactionData {
  inputsValue: Inputs | undefined;
  onChangeInput(name: string, value: any): void;
}

type Inputs = {
  value?: number;
  description?: string;
  payment_method?: number;
  date?: Date | string;
};

export const useNewTransaction = (): UseNewTransactionData => {
  const [inputsValue, setInputsValue] = useState<Inputs>({
    value: 0.0,
  });

  function onChangeInput(name: string, value: any) {
    return setInputsValue({ ...inputsValue, [`${name}`]: value });
  }

  return { inputsValue, onChangeInput };
};
