import {
  FullButton,
  InputField,
  Select,
  SelectField,
} from '@/components/elements';
import { PageTemplate } from '@/components/templates';
import { newTransactionOpts, paymentMethods } from '@/constants';
import { Stack } from '@chakra-ui/layout';
import { TransactionValueInput } from '../components';
import { useNewTransaction } from '../hooks';

export const NewTransactionView = () => {
  const { inputsValue, onChangeInput, handleCreateTransaction } =
    useNewTransaction();

  return (
    <PageTemplate title="New Transaction">
      <Select title="New Transaction" options={newTransactionOpts} />

      <TransactionValueInput
        label="Transaction value"
        value={inputsValue?.value}
        onChange={onChangeInput}
      />

      <Stack
        as="form"
        spacing={8}
        onSubmit={e => {
          e.preventDefault();
          handleCreateTransaction();
        }}
      >
        <InputField
          label="Description"
          name="description"
          placeholder="Description"
          onChange={onChangeInput}
          type="string"
          value={inputsValue?.description}
        />

        <SelectField
          title="Payment method"
          value={inputsValue?.payment_method}
          onChange={onChangeInput}
          options={paymentMethods}
        />

        <InputField
          label="Date"
          name="date"
          onChange={onChangeInput}
          type="date"
          value={String(inputsValue?.date)}
        />

        <FullButton title="Register new transaction" type="submit" />
      </Stack>
    </PageTemplate>
  );
};
