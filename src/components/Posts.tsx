"use client";
import { fetchPosts } from "@/services/postsApi";
import Link from "next/link";
import { useEffect, useState } from "react";
import SearchForm from "./SearchForm";

const Posts = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState<any | null>(null);

  useEffect(() => {
    const getAllPosts = async () => {
      try {
        setIsLoading(true);
        const result = await fetchPosts();
        setPosts(result);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    getAllPosts();
  }, []);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <>
          <SearchForm onSearch={setPosts} />
          <ul>
            {posts.map((post: any) => (
              <li key={post.id}>
                <Link href={`/blog/${post.id}`}>{post.title}</Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default Posts;
