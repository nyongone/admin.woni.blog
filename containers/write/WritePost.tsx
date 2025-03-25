"use client";

import React, { useActionState, useEffect, useState } from "react";
import MarkdownEditor from "@/components/editor/MarkdownEditor";
import MarkdownViewer from "@/components/post/MarkdownViewer";
import SelectCategory from "@/components/editor/SelectCategory";
import { updatePostAction, writePostAction } from "@/actions/post";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

interface Props {
  categories: CategoryType[];
  action?: "write" | "update";
  initialPost?: PostType;
}

const WritePost = ({ categories, action = "write", initialPost }: Props) => {
  const [formState, dispatch] = useActionState(
    action === "write" ? writePostAction : updatePostAction,
    { ok: false },
  );
  const [title, setTitle] = useState<string>(initialPost?.title ?? "");
  const [markdown, setMarkdown] = useState<string>(initialPost?.content ?? "");
  const [initialized, setInitialized] = useState<boolean>(false);

  useEffect(() => {
    if (formState.ok) redirect("/");

    if (!formState.errors) return;
    if (formState.errors.title) toast.error(formState.errors.title);
    if (formState.errors.category) toast.error(formState.errors.category);
    if (formState.errors.content) toast.error(formState.errors.content);
  }, [formState]);

  return (
    <div className="flex h-screen w-full flex-row items-start justify-start">
      <form
        action={dispatch}
        className="relative flex h-full w-full flex-col items-start justify-start gap-4 bg-zinc-50 p-6"
      >
        {action === "update" && (
          <input type="hidden" name="id" defaultValue={initialPost?.id} />
        )}
        <SelectCategory
          name="category"
          categories={categories}
          initialCategory={(initialPost?.category as CategoryType) ?? undefined}
        />
        <div className="w-full">
          <input
            name="title"
            type="text"
            className="h-8 w-full text-3xl font-semibold text-zinc-700 outline-none"
            placeholder="제목을 입력하세요."
            value={initialPost?.title ?? undefined}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTitle(e.target.value)
            }
          />
        </div>
        <MarkdownEditor
          name="content"
          onMarkdownChange={(markdown) => setMarkdown(markdown)}
          onReady={() => setInitialized(true)}
          initialValue={initialPost?.content ?? undefined}
        />
        <button
          type="submit"
          className="bottom-0 h-12 w-full cursor-pointer rounded-sm bg-blue-400 text-sm font-bold text-white"
        >
          작성
        </button>
      </form>
      <div className="h-full w-full overflow-y-auto p-8 max-md:hidden">
        <h1 className="mb-8 min-h-8 w-full text-4xl font-bold text-zinc-700">
          {title}
        </h1>
        <MarkdownViewer markdown={initialized ? markdown : ""} />
      </div>
    </div>
  );
};

export default WritePost;
