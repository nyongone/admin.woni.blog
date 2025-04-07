"use server";

import { createCategory } from "@/apis/category";

export async function createCategoryAction(
  state: CategoryFormState,
  formData: FormData,
) {
  const payload = {
    name: formData.get("name") as string,
    slug: formData.get("slug") as string,
  };

  if (!payload.name)
    return { ok: false, errors: { name: "카테고리 제목을 입력해 주세요." } };

  if (!payload.slug)
    return { ok: false, errors: { slug: "카테고리 약어를 입력해 주세요." } };

  const response = await createCategory(payload);

  if (response.status !== 201) return { ok: false };

  return { ok: true };
}
