import { api } from '@/apis';
import { Transaction } from '@/types';

interface UseTransactions {
  getTransactions(): Promise<Transaction[]>;
}

export const useTransactions = (): UseTransactions => {
  async function getTransactions(): Promise<Transaction[]> {
    const response = await api.get<Transaction[]>('/transactions');

    return response.data;
  }

  return { getTransactions };
};
