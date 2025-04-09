"use server";

import GithubSlugger from "github-slugger";
import { createPost, updatePost } from "@/apis/post";

export async function writePostAction(
  state: PostFormState,
  formData: FormData,
) {
  const slugger = new GithubSlugger();

  const payload: PostType = {
    title: formData.get("title") as string,
    slug: slugger.slug(formData.get("title") as string),
    category: formData.get("category") as string,
    content: formData.get("content") as string,
    isTemp: (formData.get("isTemp") as string) !== "true",
  };

  if (!payload.title)
    return { ok: false, errors: { title: "제목을 입력해 주세요." } };

  if (!payload.category)
    return { ok: false, errors: { category: "카테고리를 선택해 주세요." } };

  if (!payload.content)
    return { ok: false, errors: { content: "내용을 입력해 주세요." } };

  const response = await createPost(payload);

  if (response.status !== 201) return { ok: false };

  return { ok: true };
}

export async function updatePostAction(
  state: PostFormState,
  formData: FormData,
) {
  const slugger = new GithubSlugger();

  const payload: Partial<PostType> = {
    title: formData.get("title") as string,
    slug: slugger.slug(formData.get("title") as string),
    category: formData.get("category") as string,
    content: formData.get("content") as string,
    isTemp: !!formData.get("isTemp"),
  };

  if (!payload.title)
    return { ok: false, errors: { title: "제목을 입력해 주세요." } };

  if (!payload.category)
    return { ok: false, errors: { category: "카테고리를 선택해 주세요." } };

  if (!payload.content || payload.content.length < 1)
    return { ok: false, errors: { content: "내용을 입력해 주세요." } };

  const response = await updatePost(formData.get("id") as string, payload);

  if (response.status !== 204) return { ok: false };

  return { ok: true };
}
