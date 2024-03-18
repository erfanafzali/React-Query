import axios from "axios";
import { useMutation } from "@tanstack/react-query";
const usePostData = () => {
  const mutationFn = (data) => {
    return axios.post("https://jsonplaceholder.typicode.com/posts", data);
  };

  return useMutation({ mutationFn });
};

export { usePostData };
