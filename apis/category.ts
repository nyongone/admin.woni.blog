"use server";

import { createClient } from "@/utils/supabase/server";
import { Database } from "@/types/database";

export async function getCategories() {
  const client = createClient<Database>();
  return (await client).from("categories").select("*");
}

export async function createCategory(payload: Partial<CategoryType>) {
  const client = createClient<Database>();
  return (await client)
    .from("categories")
    .insert({ name: payload.name, slug: payload.slug });
}

export async function updateCategory(
  categoryId: number,
  payload: Partial<CategoryType>,
) {
  const client = createClient<Database>();
  return (await client).from("categories").update(payload).eq("id", categoryId);
}

export async function deleteCategory(categoryId: number) {
  const client = createClient<Database>();
  return (await client).from("categories").delete().eq("id", categoryId);
}
