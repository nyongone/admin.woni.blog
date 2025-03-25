"use server";

import { signIn } from "@/apis/auth";

export async function loginAction(state: LoginFormState, formData: FormData) {
  const payload = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  if (!payload.email)
    return { ok: false, errors: { email: "이메일을 입력해 주세요." } };

  if (!payload.password)
    return { ok: false, errors: { password: "비밀번호를 입력해 주세요." } };

  const response = await signIn(payload.email, payload.password);

  if (response.error)
    return { ok: false, errors: { form: "계정 정보가 없습니다." } };

  return { ok: true };
}
