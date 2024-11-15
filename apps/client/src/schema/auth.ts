import { z } from "zod";

export const passwordRegex =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{10,20}$/;
export const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
export const nicknameRegex = /^[a-zA-Z가-힣]{1,20}$/;

export const loginSchema = z.object({
  email: z.string().regex(emailRegex, {
    message: "아이디 형식이 일치하지 않습니다.",
  }),
  password: z.string().regex(passwordRegex, {
    message: "비밀번호 형식이 일치하지 않습니다.",
  }),
});

export const signupSchemaObject = z
  .object({
    email: z.string().regex(emailRegex, {
      message: "아이디 형식이 일치하지 않습니다.",
    }),
    emailCode: z.string({required_error: "인증번호를 입력해주세요"}),
    password: z.string().regex(passwordRegex, {
      message: "비밀번호 형식이 일치하지 않습니다.",
    }),
    passwordValidate: z.string().regex(passwordRegex, {
      message: "비밀번호 형식이 일치하지 않습니다.",
    }),
    nickname: z.string().regex(nicknameRegex, {
      message: "닉네임 형식이 일치하지 않습니다.",
    }),
  });

export const signupSchema = signupSchemaObject.refine((data) => data.password === data.passwordValidate, {
  path: ["passwordValidate"],
  message: "비밀번호가 일치하지 않습니다.",
})