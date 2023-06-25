import axios from 'axios';

export const api = axios.create({
    baseURL: process.env.API_BASE_URL,
    timeout: 10000,
    headers: {
        'Accept':'application/json'
      }
}) 