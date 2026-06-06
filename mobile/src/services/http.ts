import { create } from 'axios';

const http = create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
});

export default http;
