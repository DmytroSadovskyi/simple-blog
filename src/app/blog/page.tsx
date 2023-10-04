import Posts from "@/components/Posts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog page",
};

const Blog = () => {
  return (
    <>
      <h1 className=" text-center font-bold text-2xl mb-3">Posts</h1>
      <Posts />
    </>
  );
};

export default Blog;
