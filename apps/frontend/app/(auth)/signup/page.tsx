'use client';

import SignUpForm from '@/features/signup/components/signup-form';
import {
  SignUpFormValues,
  SignUpSchema,
} from '@/features/signup/schemas/signup.schema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCheckConnection } from '@/shared/service/auth/auth.query';

export default function SignUpPage() {
  const { data, isLoading, error } = useCheckConnection();

  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(SignUpSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      name: '',
    },
  });
  return (
    <div className="">
      <div>
        {JSON.stringify(data)}
      </div>
      <SignUpForm form={form} onSubmit={() => {}} />
    </div>
  );
}
