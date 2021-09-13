import { PaymentMethod } from './payment-method';

export type Transaction = {
  ammount: number;
  description: string;
  pay_method: PaymentMethod | string;
  date: string | Date;
};
