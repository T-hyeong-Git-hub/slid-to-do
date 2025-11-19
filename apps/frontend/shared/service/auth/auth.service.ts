import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:9090';

// axios 인스턴스 생성
const apiClient = axios.create({
  baseURL: '/api', // 변경! (http://localhost:9090/api → /api)
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const authService = {
  checkConnection: async () => {
    const response = await apiClient.get('/accounts');
    return response.data;
  },
};