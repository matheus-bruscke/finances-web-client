import { PeriodSelector } from '@/components/elements';
import { PageTemplate } from '@/components/templates';
import { Period } from '@/types';

export const HomeView = () => {
  const periods: Period[] = [
    {
      key: 'day',
      value: 'Day',
    },
    {
      key: 'month',
      value: 'Month',
    },
    {
      key: 'year',
      value: 'Year',
    },
  ];

  return (
    <PageTemplate title="Home">
      <PeriodSelector periods={periods} />
    </PageTemplate>
  );
};
