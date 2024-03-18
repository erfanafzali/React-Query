import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const useGetData = () => {
  const queryKey = ["getPost"];
  const queryFn = () => {
    return axios.get("https://jsonplaceholder.typicode.com/posts");
  };

  return useQuery({ queryKey, queryFn });
};

const useGetDetail = (id) => {
  const queryKey = ["getPost", id];
  const queryFn = ({ queryKey }) => {
    return axios.get(
      `https://jsonplaceholder.typicode.com/posts/${queryKey[1]}`
    );
  };

  return useQuery({
    queryKey,
    queryFn,
    refetchInterval: 10 * 1000,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    enabled: true,
    gcTime: 50 * 1000,
    staleTime: 40 * 1000,
  });
};

export { useGetData, useGetDetail };
