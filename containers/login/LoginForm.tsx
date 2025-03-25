"use client";

import React, { useActionState, useEffect } from "react";
import { loginAction } from "@/actions/login";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

const LoginForm = () => {
  const [formState, dispatch] = useActionState(loginAction, { ok: false });

  useEffect(() => {
    if (formState.ok) redirect("/");

    if (!formState.errors) return;
    if (formState.errors.email) toast.error(formState.errors.email);
    if (formState.errors.password) toast.error(formState.errors.password);
    if (formState.errors.form) toast.error(formState.errors.form);
  }, [formState]);

  return (
    <form
      action={dispatch}
      className="flex h-full w-full flex-col items-center justify-center gap-2"
    >
      <input
        type="text"
        name="email"
        placeholder="E-Mail"
        className="h-10 w-48 rounded-sm border border-zinc-300 px-2 text-zinc-700 outline-blue-500"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        className="h-10 w-48 rounded-sm border border-zinc-300 px-2 text-zinc-700 outline-blue-500"
      />
      <button
        type="submit"
        className="h-10 w-48 rounded-sm bg-blue-500 text-white"
      >
        로그인
      </button>
    </form>
  );
};

export default LoginForm;
