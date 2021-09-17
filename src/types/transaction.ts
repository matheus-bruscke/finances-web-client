import { PaymentMethod } from './payment-method';

export type Transaction = {
  key: string;
  ammount: number;
  description: string;
  pay_method: PaymentMethod | string;
  date: string | Date;
};
