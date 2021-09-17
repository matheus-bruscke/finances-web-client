import { getPayMethodStyles } from '@/helpers';
import { getTransactions } from '@/services/server';
import { Transaction } from '@/types';
import { useEffect, useState } from 'react';
import { FormatedTransaction } from './types';

interface UseHomeData {
  transactions: FormatedTransaction[] | undefined;
}

export const useHome = (): UseHomeData => {
  const [transactions, setTransactions] = useState<FormatedTransaction[]>();

  useEffect(() => {
    getTransactions().then(res => {
      const formatedTransactions = res.map((item: Transaction) => {
        const formatedData: FormatedTransaction = {
          ...item,
          date_formated: {
            day: new Date(item.date).getDay(),
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

  return { transactions };
};
