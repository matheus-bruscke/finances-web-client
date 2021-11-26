import { api } from '@/apis';
import { Login } from '@/types';

async function login(email: string, password: string): Promise<void> {
  await api.post<Login>('/login', { email, password });
}

export { login };
