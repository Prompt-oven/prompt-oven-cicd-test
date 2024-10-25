import { z } from 'zod';

export const passwordRegex =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{10,20}$/;
export const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
export const nicknameRegex = /^[a-zA-Z]{2,20}$/;

export type userAccountSchemaType = z.infer<typeof userAccountSchema>;
export const userAccountSchema = z
  .object({
    loginId: z.string().regex(emailRegex, {
      message: '아이디 형식이 일치하지 않습니다.',
    }),
    password: z.string().regex(passwordRegex, {
      message: '비밀번호 형식이 일치하지 않습니다.',
    }),
    passwordValidate: z.string().regex(passwordRegex, {
      message: '비밀번호 형식이 일치하지 않습니다.',
    }),
    nickname: z.string().regex(nicknameRegex, {
      message: '닉네임 형식이 일치하지 않습니다.',
    }),
  })
  .refine((data) => data.password === data.passwordValidate, {
    path: ['passwordValidate'],
    message: '비밀번호가 일치하지 않습니다.',
  });

export type emailSchemaType = z.infer<typeof emailSchema>;
export const emailSchema = z.object({
  email: z.string().regex(emailRegex, {
    message: '이메일 형식이 일치하지 않습니다.',
  }),
});

export type nicknameSchemaType = z.infer<typeof nicknameSchema>;
export const nicknameSchema = z.object({
  nickname: z
    .string()
    .regex(nicknameRegex, { message: '닉네임 형식에 맞지 않습니다.' }),
});

export type loginSchemaType = z.infer<typeof loginSchema>;
export const loginSchema = z.object({
  signinEmail: z.string().regex(emailRegex, {
    message: '아이디 형식이 일치하지 않습니다.',
  }),
  password: z.string().regex(passwordRegex, {
    message: '비밀번호 형식이 일치하지 않습니다.',
  }),
});

export type resetPasswordSchemaType = z.infer<typeof resetPasswordSchema>;
export const resetPasswordSchema = z
  .object({
    password: z.string().regex(passwordRegex, {
      message: '비밀번호 형식이 일치하지 않습니다.',
    }),
    passwordValidate: z.string().regex(passwordRegex, {
      message: '비밀번호 형식이 일치하지 않습니다.',
    }),
  })
  .refine((data) => data.password === data.passwordValidate, {
    path: ['passwordValidate'],
    message: '비밀번호가 일치하지 않습니다.',
  });
