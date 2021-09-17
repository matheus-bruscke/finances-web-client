import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3000/api',
  // process.env.NODE_ENV === 'development'
  //   ? 'http://localhost:3000/api'
  //   : 'https://finances-web-client.vercel.app/',
});
