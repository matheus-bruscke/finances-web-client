import { api } from '@/apis';
import { Transaction } from '@/types';

async function getTransactions(
  userId: string | null | undefined,
): Promise<any> {
  const response = await api.get<any>(`/transaction/${userId}`);

  return response.data;
}

export { getTransactions };
