import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";

function UsersPage() {
  const fetchData = () =>
    axios.get("https://jsonplaceholder.typicode.com/users");

  const { data, isLoading, isError, error, isFetching } = useQuery(
    ["users"],
    fetchData,
    {
      // cacheTime: 50000,
      // staleTime: 40 * 1000,
      // refetchOnMount: false,
      // refetchOnWindowFocus: false,
      // refetchInterval: 10 * 1000,
    }
  );
  console.log(isFetching);
  if (isLoading) return <div>Loading ...</div>;
  if (isError) return <div>Something went Wrong {error.message}</div>;
  return (
    <div>
      {data.data.map((item) => (
        <Link key={item.id} to={`/users/${item.id}`}>
          {item.name}
        </Link>
      ))}
    </div>
  );
}

export default UsersPage;
