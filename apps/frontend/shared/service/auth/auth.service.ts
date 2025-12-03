import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:9090';

// axios 인스턴스 생성
const apiClient = axios.create({
  baseURL: `${API_BASE_URL}`, // /api 경로 추가
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const authService = {
  checkConnection: async () => {
    const response = await apiClient.get('/aaa/auth');
    return response.data;
  },
};

// 로그인

export const loginService = {
  login: async (email: string, password: string) => {
    const response = await apiClient.post('/2/auth/login', {
      email,
      password,
    });
    return response.data;
  },
};