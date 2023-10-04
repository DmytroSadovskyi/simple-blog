"use client";
import { useState } from "react";
import { fetchPostsByQuery } from "@/services/postsApi";

interface Props {
  onSearch: (value: any[]) => void;
}

const SearchForm = ({ onSearch }: Props) => {
  const [search, setSearch] = useState("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const posts = await fetchPostsByQuery(search);
    onSearch(posts);
    setSearch("");
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearch(e.target.value);
  };

  return (
    <form action="" onSubmit={handleSubmit} className="text-center mb-3">
      <input
        type="search"
        value={search}
        onChange={handleChange}
        className="border-zinc-500 border mr-3 rounded-md h-8 "
      />
      <button type="submit" className="bg-cyan-500 py-1 px-2 rounded-md">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
