import axios from "axios";
axios.defaults.baseURL = "https://dummyjson.com";

export const fetchPosts = async () => {
  try {
    const response = await axios.get("/posts");
    return response.data.posts;
  } catch (error) {
    console.log(error);
  }
};

export const fetchPostById = async (id: number) => {
  try {
    const response = await axios.get(`/posts/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchPostsByQuery = async (query: string) => {
  try {
    const response = await axios.get(`/posts/search?q=${query}`);
    return response.data.posts;
  } catch (error) {
    console.log(error);
  }
};
