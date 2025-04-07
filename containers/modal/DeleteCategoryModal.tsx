import React from "react";
import Modal from "@/components/modal/Modal";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";
import { deleteCategory } from "@/apis/category";

interface Props {
  categoryId: number;
  onClose: () => void;
}

const DeleteCategoryModal = ({ categoryId, onClose }: Props) => {
  const onDelete = async (categoryId: number) => {
    const { status } = await deleteCategory(categoryId);

    if (status !== 204) toast.error("오류가 발생했습니다.");

    onClose();
    redirect("/");
  };

  return (
    <Modal onClose={onClose}>
      <div className="flex w-full flex-col gap-4">
        <div className="flex h-full w-full flex-col items-start justify-start gap-2">
          <span>카테고리를 삭제하시겠습니까?</span>
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
            className="h-8 w-full cursor-pointer rounded-sm bg-red-400 text-white"
            type="button"
            onClick={() => onDelete(categoryId)}
          >
            삭제
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteCategoryModal;
