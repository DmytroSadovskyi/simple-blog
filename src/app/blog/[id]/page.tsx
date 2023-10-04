import { fetchPostById } from "@/services/postsApi";
import { Metadata } from "next";
import Link from "next/link";

type Props = {
  params: {
    id: number;
  };
};

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const post = await fetchPostById(id);

  return {
    title: post.title,
  };
}

const Post = async ({ params: { id } }: Props) => {
  const post = await fetchPostById(id);

  return (
    <>
      <h1 className="post-title">{post.title}</h1>
      <p className="post-text">{post.body}</p>
      <Link href="/blog" className="back-link">
        Go back
      </Link>
    </>
  );
};
export default Post;
