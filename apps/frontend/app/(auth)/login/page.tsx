'use client';

import { useLogin } from '@/shared/service/auth/auth.query';

export default function LoginPage() {
  const loginMutation = useLogin();

  const handleTestLogin = () => {
    loginMutation.mutate({
      email: 'test@test.com',
      password: '1234',
    });
  };

  return (
    <div>
      {' '}
      <button onClick={handleTestLogin} disabled={loginMutation.isPending}>
        {loginMutation.isPending ? '로그인 중...' : '테스트 로그인'}
      </button>
      {loginMutation.isSuccess && (
        <div style={{ marginTop: '20px', color: 'green' }}>
          <pre>{JSON.stringify(loginMutation.data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
