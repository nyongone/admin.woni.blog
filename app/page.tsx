import PostList from "@/containers/post/PostList";
import { getPosts } from "@/apis/post";
import CategoryList from "@/containers/category/CategoryList";
import { getCategories } from "@/apis/category";

export default async function Page() {
  const posts = await getPosts();
  const categories = await getCategories();

  return (
    <>
      <div className="m-[0_auto] flex h-auto w-[min(960px,100%)] flex-col items-start justify-start gap-4">
        <h1 className="my-8 text-3xl font-bold text-zinc-700">조용원 블로그</h1>
        <PostList posts={posts.data ?? []} />
        <CategoryList categories={categories.data ?? []} />
      </div>
    </>
  );
}
