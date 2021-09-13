import {
  ActiveModelSerializer,
  createServer,
  Factory,
  Model,
  Server,
} from 'miragejs';
import faker from 'faker';

type PaymentMethod = 'credit_card' | 'billet' | 'pix' | 'cash';

type Transaction = {
  ammount: number;
  description: string;
  pay_method: PaymentMethod | string;
  date: string | Date;
};

export const makeServer = (): Server => {
  const server = createServer({
    serializers: {
      application: ActiveModelSerializer,
    },

    models: {
      transaction: Model.extend<Partial<Transaction>>({}),
    },

    factories: {
      transaction: Factory.extend({
        ammount() {
          return faker.finance.amount();
        },
        description() {
          return faker.finance.transactionDescription();
        },
        pay_method() {
          const paymentMethod: PaymentMethod[] = [
            'credit_card',
            'billet',
            'pix',
            'cash',
          ];
          const random = Math.floor(Math.random() * paymentMethod.length);

          return paymentMethod[random];
        },
        date() {
          return faker.date.recent();
        },
      }),
    },

    seeds(server) {
      server.createList('transaction', 20);
    },

    routes() {
      this.namespace = 'api';
      this.timing = 750;

      this.get('/transactions', schema => {
        return schema.all('transaction');
      });
    },
  });

  return server;
};
