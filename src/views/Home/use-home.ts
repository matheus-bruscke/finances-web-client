import { formatCurrency, getPayMethodStyles } from '@/helpers';
import { getBalanceAmmount, getTransactions } from '@/services/server';
import { Transaction, UserBalance } from '@/types';
import { useSession } from 'next-auth/client';
import { useEffect, useState } from 'react';
import { FormatedTransaction } from './types';

type Balance = {
  balance?: string;
  entries?: string;
  exits?: string;
};

interface UseHomeData {
  transactions: FormatedTransaction[] | undefined;
  balance: any;
}

export const useHome = (): UseHomeData => {
  const [balance, setBalance] = useState<Balance>({});
  const [transactions, setTransactions] = useState<any>();

  const [session] = useSession();

  // useEffect(() => {
  //   getBalanceAmmount().then(res => {
  //     const balance = res.find(item => item.ammount != 0);
  //     const entries = res.find(item => item.ammount > 0);
  //     const exits = res.find(item => item.ammount < 0);

  //     return setBalance({
  //       balance: formatCurrency(Number(balance?.ammount)),
  //       entries: formatCurrency(Number(entries?.ammount)),
  //       exits: formatCurrency(Number(exits?.ammount)),
  //     });
  //   });
  // }, []);

  useEffect(() => {
    if (session) {
      getTransactions(session?.user?.email).then(res => {
        const summary = res.reduce(
          (acc: any, transaction: any) => {
            if (transaction.amount > 0) {
              acc.deposit += Number(transaction.amount);
              acc.total += Number(transaction.amount);
            } else {
              acc.withdraws += Number(transaction.amount);
              acc.total -= Number(transaction.amount);
            }

            return acc;
          },
          {
            deposit: 0,
            withdraws: 0,
            total: 0,
          },
        );

        setBalance(summary);

        const formatedTransactions = res.map((item: any) => {
          const formatedData: FormatedTransaction = {
            ...item,
            date_formated: {
              day: Number(
                new Date(item.createdAt).toLocaleDateString('default', {
                  day: '2-digit',
                }),
              ),
              month: new Date(item.createdAt)
                .toLocaleDateString('default', {
                  month: 'long',
                })
                .substring(0, 3),
            },
            pay_method_formated: {
              colors: getPayMethodStyles(item.type),
              method: item.type,
            },
            formated_ammount: new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
            }).format(Number(item.amount)),
          };

          return formatedData;
        });

        setTransactions(formatedTransactions);
      });
    }
  }, [session]);

  return { transactions, balance };
};
