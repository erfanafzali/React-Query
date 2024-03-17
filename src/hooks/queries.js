import axios from "axios";
import { useQuery } from "@tanstack/react-query";
const useUsersData = () => {
  const fetchData = () => {
    return axios.get("https://jsonplaceholder.typicode.com/users");
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useQuery(["users"], fetchData);
};

const useUserDeteail = (id) => {
  const fetchUserDetail = ({ queryKey }) => {
    return axios.get(
      `https://jsonplaceholder.typicode.com/users/${queryKey[1]}`
    );
  };
  return useQuery(["users", id], fetchUserDetail);
};

export { useUsersData, useUserDeteail };
