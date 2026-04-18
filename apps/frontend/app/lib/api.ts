import axios from 'axios';

// Singleton axios instance
export const api = axios.create({
  baseURL:
    (process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:5000/api'),
  headers: { 'Content-Type': 'application/json' },
  timeout: 10000,
});

export default api;
