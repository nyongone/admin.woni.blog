import React from "react";
import Modal from "@/components/modal/Modal";
import { deletePost } from "@/apis/post";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";

interface Props {
  postId: number;
  onClose: () => void;
}

const DeletePostModal = ({ postId, onClose }: Props) => {
  const onDelete = async (postId: number) => {
    const { status } = await deletePost(postId);

    if (status !== 204) toast.error("오류가 발생했습니다.");

    onClose();
    redirect("/");
  };

  return (
    <Modal onClose={onClose}>
      <div className="flex w-full flex-col gap-4">
        <div className="flex h-full w-full flex-col items-start justify-start gap-2">
          <span>게시글을 삭제하시겠습니까?</span>
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
            onClick={() => onDelete(postId)}
          >
            삭제
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeletePostModal;
