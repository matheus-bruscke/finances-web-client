import { formatCurrency, getPayMethodStyles } from '@/helpers';
import { getBalanceAmmount, getTransactions } from '@/services/server';
import { Transaction, UserBalance } from '@/types';
import { useEffect, useState } from 'react';
import { FormatedTransaction } from './types';

type Balance = {
  balance?: string;
  entries?: string;
  exits?: string;
};

interface UseHomeData {
  transactions: FormatedTransaction[] | undefined;
  balance: Balance;
}

export const useHome = (): UseHomeData => {
  const [balance, setBalance] = useState<Balance>({});
  const [transactions, setTransactions] = useState<FormatedTransaction[]>();

  useEffect(() => {
    getBalanceAmmount().then(res => {
      const balance = res.find(item => item.type === 'balance');
      const entries = res.find(item => item.type === 'entries');
      const exits = res.find(item => item.type === 'exits');

      return setBalance({
        balance: formatCurrency(Number(balance?.ammount)),
        entries: formatCurrency(Number(entries?.ammount)),
        exits: formatCurrency(Number(exits?.ammount)),
      });
    });
  }, []);

  useEffect(() => {
    getTransactions().then(res => {
      const formatedTransactions = res.map((item: Transaction) => {
        const formatedData: FormatedTransaction = {
          ...item,
          date_formated: {
            day: Number(
              new Date(item.date).toLocaleDateString('default', {
                day: '2-digit',
              }),
            ),
            month: new Date(item.date)
              .toLocaleDateString('default', {
                month: 'long',
              })
              .substring(0, 3),
          },
          pay_method_formated: {
            colors: getPayMethodStyles(item.pay_method),
            method: item.pay_method,
          },
          formated_ammount: new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(item.ammount),
        };

        return formatedData;
      });

      setTransactions(formatedTransactions);
    });
  }, []);

  return { transactions, balance };
};
