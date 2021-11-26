import axios from 'axios';

export const api = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? 'https://financemanagersl.herokuapp.com'
      : 'https://financemanagersl.herokuapp.com',
});
