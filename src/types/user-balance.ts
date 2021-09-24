export type BalanceTypes = 'balance' | 'entries' | 'exits';

export type UserBalance = {
  id: string | number;
  type: BalanceTypes;
  ammount: number;
};
