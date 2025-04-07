"use client";

import React, { useActionState, useEffect } from "react";
import Modal from "@/components/modal/Modal";
import { createCategoryAction } from "@/actions/category";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

interface Props {
  onClose: () => void;
}

const CreateCategoryModal = ({ onClose }: Props) => {
  const [formState, dispatch] = useActionState(createCategoryAction, {
    ok: false,
  });

  useEffect(() => {
    if (formState.ok) redirect("/");

    if (!formState.errors) return;
    if (formState.errors.name) toast.error(formState.errors.name);
    if (formState.errors.slug) toast.error(formState.errors.slug);
  }, [formState]);

  return (
    <Modal onClose={onClose}>
      <form action={dispatch} className="flex w-full flex-col gap-4">
        <div className="flex h-full w-full flex-col items-start justify-start gap-2">
          <span>카테고리 생성</span>
          <input
            type="text"
            name="name"
            placeholder="카테고리 제목"
            className="h-8 w-full border border-zinc-200 px-2"
          />
          <input
            type="text"
            name="slug"
            placeholder="카테고리 약어"
            className="h-8 w-full border border-zinc-200 px-2"
          />
        </div>
        <div className="flex w-full flex-row items-start justify-start gap-4">
          <button
            className="h-8 w-full cursor-pointer rounded-sm bg-zinc-100 text-zinc-400"
            type="button"
            onClick={onClose}
          >
            취소
          </button>
          <button
            className="h-8 w-full cursor-pointer rounded-sm bg-blue-400 text-white"
            type="submit"
          >
            생성
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default CreateCategoryModal;
