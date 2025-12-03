import { useMutation, useQuery } from '@tanstack/react-query';
import { authService, loginService } from './auth.service';

// Query Key
export const authKeys = {
  all: ['auth'] as const,
  connection: () => [...authKeys.all, 'connection'] as const,
};

// 연결 확인 Query
export const useCheckConnection = () => {
  return useQuery({
    queryKey: authKeys.connection(),
    queryFn: authService.checkConnection,
  });
};

// 로그인 Mutation
export const useLogin = () => {
  return useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      loginService.login(email, password),
    onSuccess: (data) => {
      console.log('로그인 성공:', data);
    },
    onError: (error) => {
      console.error('로그인 실패:', error);
    },
  });
};