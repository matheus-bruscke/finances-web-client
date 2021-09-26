import { Select } from '@/components/elements';
import { PageTemplate } from '@/components/templates';
import { newTransactionOpts } from '@/constants';
import { TransactionValue } from '../components/value-input';
import { useNewTransaction } from '../hooks';

export const NewTransactionView = () => {
  const { inputsValue, onChangeInput } = useNewTransaction();

  console.log(inputsValue);

  return (
    <PageTemplate title="New Transaction">
      <Select title="New Transaction" options={newTransactionOpts} />

      <TransactionValue
        label="Transaction value"
        value={inputsValue?.value}
        onChange={onChangeInput}
      />
    </PageTemplate>
  );
};
