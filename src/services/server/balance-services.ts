import { api } from '@/apis';
import { UserBalance } from '@/types';

async function getBalanceAmmount(): Promise<UserBalance[]> {
  // const response = await api.get<UserBalance[]>('/user-balances');
  return [];
  // return response.data;
}

export { getBalanceAmmount };
