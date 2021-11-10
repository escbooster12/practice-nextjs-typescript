import axios from 'axios';

const baseUrl = 'http://localhost:3004';

const base = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default base;
