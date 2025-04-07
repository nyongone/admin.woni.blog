"use client";

import React, { useState } from "react";
import Link from "next/link";
import DeleteCategoryModal from "@/containers/modal/DeleteCategoryModal";
import CreateCategoryModal from "@/containers/modal/CreateCategoryModal";

interface Props {
  categories: CategoryType[];
}

const CategoryList = ({ categories }: Props) => {
  const [deleteModal, setDeleteModal] = useState<{
    visible: boolean;
    categoryId?: number;
  } | null>(null);
  const [createModal, setCreateModal] = useState<{ visible: boolean } | null>(
    null,
  );

  return (
    <div className="flex w-full flex-col items-start justify-start gap-4">
      <table className="w-full text-left text-zinc-700">
        <thead className="bg-zinc-100 text-sm">
          <tr>
            <th scope="col" className="px-6 py-3 font-normal">
              카테고리 이름
            </th>
            <th scope="col" className="px-6 py-3 font-normal">
              카테고리 약어
            </th>
            <th scope="col" className="px-6 py-3 font-normal">
              관리
            </th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr className="border-b border-b-zinc-100" key={category.id}>
              <th scope="row" className="px-6 py-4 font-medium">
                {category.name}
              </th>
              <td className="px-6 py-4">{category.slug}</td>
              <td className="px-6 py-4">
                <div className="flex flex-row items-start justify-start gap-4">
                  <button
                    className="cursor-pointer text-zinc-400 hover:text-red-500"
                    onClick={() =>
                      setDeleteModal({ visible: true, categoryId: category.id })
                    }
                  >
                    삭제
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {deleteModal?.visible && deleteModal?.categoryId && (
        <DeleteCategoryModal
          categoryId={deleteModal?.categoryId}
          onClose={() => setDeleteModal({ visible: false })}
        />
      )}
      {createModal?.visible && (
        <CreateCategoryModal
          onClose={() => setCreateModal({ visible: false })}
        />
      )}
      <button
        onClick={() => setCreateModal({ visible: true })}
        className="flex h-12 w-full items-center justify-center bg-blue-400 text-white"
      >
        카테고리 추가
      </button>
    </div>
  );
};

export default CategoryList;
