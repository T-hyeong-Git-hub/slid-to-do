import { useQuery } from '@tanstack/react-query';
import { authService } from './auth.service';

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