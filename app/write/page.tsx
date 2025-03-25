import WritePost from "@/containers/write/WritePost";
import { getPost } from "@/apis/post";
import { getCategories } from "@/apis/category";
import { redirect } from "next/navigation";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const postId = (await searchParams)["postId"];
  const categories = await getCategories();

  if (postId) {
    const { data } = await getPost(parseInt(postId as string, 10));

    if (!data || data.length < 1) redirect("/");

    return (
      <WritePost
        action="update"
        categories={categories.data as CategoryType[]}
        initialPost={{
          id: data[0].id,
          title: data[0].title,
          content: data[0].content,
          slug: data[0].slug,
          category: {
            id: data[0].category.id as number,
            name: data[0].category.name as string,
            slug: data[0].category.slug as string,
          },
        }}
      />
    );
  }

  return (
    <WritePost action="write" categories={categories.data as CategoryType[]} />
  );
}
