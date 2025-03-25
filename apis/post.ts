"use server";

import { createClient } from "@/utils/supabase/server";
import { Database } from "@/types/database";

export async function getPost(postId: number) {
  const client = createClient<Database>();

  return (await client)
    .from("posts")
    .select("*, category ( id, name, slug )")
    .eq("id", postId);
}

export async function getPosts() {
  const client = createClient<Database>();

  return (await client)
    .from("posts")
    .select("*, category ( id, name, slug )")
    .order("created_at", { ascending: false });
}

export async function createPost(postObject: PostType) {
  const client = createClient<Database>();

  async function isSlugExists(slug: string) {
    const response = async () =>
      (await client).from("posts").select("*").eq("slug", slug);
    const { data } = await response();

    if (!data) return false;

    return data.length > 0;
  }

  return (await client).from("posts").insert({
    title: postObject.title,
    content: postObject.content,
    category: postObject.category as string,
    slug: (await isSlugExists(postObject.slug))
      ? `${postObject.slug}-${Math.random().toString(36).slice(2)}`
      : postObject.slug,
  });
}

export async function updatePost(
  postId: string,
  postObject: Partial<PostType>,
) {
  const client = createClient<Database>();

  async function isSlugExists(slug: string) {
    const response = async () =>
      (await client).from("posts").select("*").eq("slug", slug);
    const { data } = await response();

    if (!data) return false;

    return data.length > 0;
  }

  return (await client)
    .from("posts")
    .update({
      title: postObject.title,
      content: postObject.content,
      category: postObject.category as string,
      slug:
        postObject.slug && (await isSlugExists(postObject.slug))
          ? `${postObject.slug}-${Math.random().toString(36).slice(2)}`
          : postObject.slug,
    })
    .eq("id", parseInt(postId, 10));
}

export async function deletePost(postId: number) {
  const client = createClient<Database>();

  return (await client).from("posts").delete().eq("id", postId);
}
