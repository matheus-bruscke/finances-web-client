import axios from 'axios';

export const api = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/api'
      : 'http://54.232.128.102',
});
