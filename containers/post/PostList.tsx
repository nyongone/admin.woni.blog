"use client";

import React, { useState } from "react";
import { Tables } from "@/types/database";
import dayjs from "dayjs";
import Link from "next/link";
import DeletePostModal from "@/containers/modal/DeletePostModal";

interface Props {
  posts: Tables<"posts">[];
}

const PostList = ({ posts }: Props) => {
  const [modal, setModal] = useState<{
    visible: boolean;
    postId?: number;
  } | null>(null);

  return (
    <div className="flex w-full flex-col items-start justify-start gap-4">
      <table className="w-full text-left text-zinc-700">
        <thead className="bg-zinc-100 text-sm">
          <tr>
            <th scope="col" className="px-6 py-3 font-normal">
              게시글 제목
            </th>
            <th scope="col" className="px-6 py-3 font-normal">
              작성일
            </th>
            <th scope="col" className="px-6 py-3 font-normal">
              관리
            </th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr className="border-b border-b-zinc-100" key={post.id}>
              <th scope="row" className="px-6 py-4 font-medium">
                <Link
                  href={`https://woni.blog/posts/${post.slug}`}
                  className="flex flex-row items-center justify-start gap-2"
                >
                  {post.isTemp && (
                    <span className="text-sm text-zinc-300">임시저장</span>
                  )}
                  {post.title}
                </Link>
              </th>
              <td className="px-6 py-4">
                {dayjs(post.created_at).format("YYYY. MM. DD")}
              </td>
              <td className="px-6 py-4">
                <div className="flex flex-row items-start justify-start gap-4">
                  <Link
                    className="cursor-pointer text-zinc-400 hover:text-zinc-700"
                    href={`/write?postId=${post.id}`}
                  >
                    수정
                  </Link>
                  <button
                    className="cursor-pointer text-zinc-400 hover:text-red-500"
                    onClick={() => setModal({ visible: true, postId: post.id })}
                  >
                    삭제
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {modal?.visible && modal?.postId && (
        <DeletePostModal
          postId={modal?.postId}
          onClose={() => setModal({ visible: false })}
        />
      )}
      <Link
        href="/write"
        className="flex h-12 w-full items-center justify-center bg-blue-400 text-white"
      >
        게시글 작성
      </Link>
    </div>
  );
};

export default PostList;
