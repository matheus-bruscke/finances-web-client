import { Transaction } from '@/types';

export interface FormatedTransaction extends Transaction {
  date_formated: {
    day: number;
    month: string;
  };
  pay_method_formated: {
    method: string;
    colors: {
      bg: string;
      color: string;
    };
  };
  formated_ammount: string;
}
