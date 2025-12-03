'use client';

import SignUpForm from '@/features/signup/components/signup-form';
import {
  SignUpFormValues,
  SignUpSchema,
} from '@/features/signup/schemas/signup.schema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCheckConnection } from '@/shared/service/auth/auth.query';
import Image from 'next/image';

export default function SignUpPage() {
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
    <div className="flex flex-col items-center gap-10 mt-12 md:mt-16 lg:mt-30">
      <Image
        src="/images/logo.svg"
        alt="로고"
        width={270}
        height={89}
        draggable="false"
        className="select-none"
      />

      <SignUpForm form={form} onSubmit={() => {}} />
    </div>
  );
}
