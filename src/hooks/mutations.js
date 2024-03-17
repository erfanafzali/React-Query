import axios from "axios";
import { useMutation } from "@tanstack/react-query";

const useAddPost = () => {
  const addPost = (data) => {
    return axios.post("https://jsonplaceholder.typicode.com/posts", data);
  };
  return useMutation(addPost);
};

export { useAddPost };
