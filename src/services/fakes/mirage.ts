import {
  ActiveModelSerializer,
  createServer,
  Factory,
  Model,
  Server,
} from 'miragejs';
import faker from 'faker';
import { PaymentMethod, Transaction } from '@/types';

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
          return faker.date.between('2021-9-11', '2021-9-18');
        },
      }),
    },

    seeds(server) {
      server.createList('transaction', 5);
    },

    routes() {
      this.namespace = 'api';
      this.timing = 750;

      this.get('/transactions', schema => {
        const response = schema.all('transaction');
        const { models } = response;

        return models;
      });
    },
  });

  return server;
};
