import { PostsList } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader/intex";
import { postRepository } from "@/repositories/post";
import { Suspense } from "react";

export default async function Home() {
  const posts = await postRepository.findAll();

  return (
    <div>
      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>
    </div>
  );
}
