import { api } from '@/apis';
import { Transaction } from '@/types';

async function getTransactions(): Promise<Transaction[]> {
  const response = await api.get<Transaction[]>('/transactions');

  return response.data;
}

export { getTransactions };
